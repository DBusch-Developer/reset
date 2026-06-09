"use server";

import { createHash, randomInt } from "node:crypto";
import { redirect } from "next/navigation";
import { z } from "zod";
import { sql } from "@/lib/db";
import { clearSession, createSession } from "@/lib/auth";

const CODE_EXPIRES_MINUTES = 10;

const requestCodeSchema = z.object({
  name: z.string().trim().max(80, "Name is too long.").optional(),
  email: z.string().email("Use a valid email.").transform((value) => value.toLowerCase())
});

const verifyCodeSchema = z.object({
  email: z.string().email("Use a valid email.").transform((value) => value.toLowerCase()),
  code: z.string().trim().regex(/^\d{6}$/, "Enter the 6-digit code.")
});

type RequestCodeState = {
  error?: string;
  message?: string;
  email?: string;
  sent?: boolean;
  devCode?: string;
};

type VerifyCodeState = {
  error?: string;
  email?: string;
};

type UserRow = {
  id: string;
  name: string;
  email: string;
};

function fallbackName(name: string | undefined, email: string) {
  if (name && name.trim().length > 0) return name.trim();
  const localPart = email.split("@")[0]?.replace(/[._-]+/g, " ").trim();
  if (!localPart) return "Reset Guest";
  return localPart
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getCodeHash(email: string, code: string) {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET must be at least 32 characters.");
  }

  return createHash("sha256").update(`${email}:${code}:${secret}`).digest("hex");
}

function generateLoginCode() {
  return String(randomInt(100000, 1000000));
}

async function sendLoginCode(email: string, code: string, name: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Passwordless email is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL.");
    }

    console.log(`Inflammation Reset login code for ${email}: ${code}`);
    return { delivered: false };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: email,
      subject: "Your Inflammation Reset login code",
      text: `Hi ${name},\n\nYour Inflammation Reset login code is ${code}. It expires in ${CODE_EXPIRES_MINUTES} minutes.\n\nIf you did not request this code, you can ignore this email.`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #211a14;">
          <h1 style="margin-bottom: 8px;">Your login code</h1>
          <p>Use this code to log in to Inflammation Reset:</p>
          <p style="font-size: 32px; font-weight: 800; letter-spacing: 6px;">${code}</p>
          <p>This code expires in ${CODE_EXPIRES_MINUTES} minutes.</p>
          <p>If you did not request this code, you can ignore this email.</p>
        </div>
      `
    })
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("Resend email error:", body);
    throw new Error("Unable to send login code. Check your email settings.");
  }

  return { delivered: true };
}

export async function requestLoginCodeAction(
  _prevState: RequestCodeState,
  formData: FormData
): Promise<RequestCodeState> {
  const rawName = formData.get("name");

  const parsed = requestCodeSchema.safeParse({
    name: typeof rawName === "string" ? rawName : "",
    email: formData.get("email")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Check your email." };
  }

  const { email } = parsed.data;
  const requestedName = parsed.data.name?.trim() ?? "";
  const name = fallbackName(requestedName, email);
  const code = generateLoginCode();
  const codeHash = getCodeHash(email, code);

  try {
    const rows = await sql`
      INSERT INTO users (name, email)
      VALUES (${name}, ${email})
      ON CONFLICT (email)
      DO UPDATE SET name = CASE
        WHEN LENGTH(TRIM(${requestedName})) > 0 THEN ${requestedName}
        ELSE users.name
      END
      RETURNING id, name, email
    `;

    const user = rows[0] as UserRow;

    await sql`
      DELETE FROM login_codes
      WHERE user_id = ${user.id}
        AND (used_at IS NOT NULL OR expires_at < NOW())
    `;

    await sql`
      INSERT INTO login_codes (user_id, email, code_hash, expires_at)
      VALUES (${user.id}, ${email}, ${codeHash}, NOW() + (${CODE_EXPIRES_MINUTES} * INTERVAL '1 minute'))
    `;

    const delivery = await sendLoginCode(email, code, user.name);

    return {
      sent: true,
      email,
      message: delivery.delivered
        ? "Check your email for your 6-digit login code."
        : "Local development mode: use the code shown below.",
      devCode: delivery.delivered ? undefined : code
    };
  } catch (error) {
    console.error(error);
    return {
      error: error instanceof Error ? error.message : "Unable to start passwordless login."
    };
  }
}

export async function verifyLoginCodeAction(
  _prevState: VerifyCodeState,
  formData: FormData
): Promise<VerifyCodeState> {
  const parsed = verifyCodeSchema.safeParse({
    email: formData.get("email"),
    code: formData.get("code")
  });

  if (!parsed.success) {
    return {
      email: typeof formData.get("email") === "string" ? String(formData.get("email")) : undefined,
      error: parsed.error.issues[0]?.message ?? "Check your code."
    };
  }

  const { email, code } = parsed.data;
  const codeHash = getCodeHash(email, code);

  const rows = await sql`
    SELECT login_codes.id AS code_id, users.id, users.name, users.email
    FROM login_codes
    JOIN users ON users.id = login_codes.user_id
    WHERE login_codes.email = ${email}
      AND login_codes.code_hash = ${codeHash}
      AND login_codes.used_at IS NULL
      AND login_codes.expires_at > NOW()
    ORDER BY login_codes.created_at DESC
    LIMIT 1
  `;

  const user = rows[0] as (UserRow & { code_id: string }) | undefined;

  if (!user) {
    return { email, error: "That code is invalid or expired. Request a new one and try again." };
  }

  await sql`
    UPDATE login_codes
    SET used_at = NOW()
    WHERE id = ${user.code_id}
  `;

  await createSession({ id: user.id, name: user.name, email: user.email });
  redirect("/dashboard");
}

export async function logoutAction() {
  await clearSession();
  redirect("/login");
}
