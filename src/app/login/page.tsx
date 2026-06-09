import { redirect } from "next/navigation";
import { AuthForm } from "@/components/AuthForm";
import { getSession } from "@/lib/auth";

export default async function LoginPage() {
  const user = await getSession();
  if (user) redirect("/progress");

  return (
    <div className="auth-wrap">
      <div className="auth-box stack">
        <div>
          <p className="eyebrow">Passwordless access</p>
          <h1 style={{ fontSize: "1.6rem", marginTop: ".3rem", marginBottom: ".4rem" }}>
            Sign in
          </h1>
          <p className="muted t-sm">
            Enter your email and we'll send a 6-digit code. New emails create an account automatically.
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  );
}
