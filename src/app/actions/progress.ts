"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { sql } from "@/lib/db";

const progressSchema = z.object({
  day: z.coerce.number().min(1).max(14),
  breakfast_complete: z.coerce.boolean().default(false),
  lunch_complete: z.coerce.boolean().default(false),
  dinner_complete: z.coerce.boolean().default(false),
  breakfast_meal: z.string().max(120).optional(),
  lunch_meal: z.string().max(120).optional(),
  dinner_meal: z.string().max(120).optional(),
  water_count: z.coerce.number().min(0).max(20).default(0),
  mood: z.string().max(80).optional(),
  notes: z.string().max(800).optional(),
});

export async function updateDailyProgressAction(formData: FormData) {
  const user = await requireUser();

  const parsed = progressSchema.safeParse({
    day: formData.get("day"),
    breakfast_complete: formData.get("breakfast_complete") === "on",
    lunch_complete: formData.get("lunch_complete") === "on",
    dinner_complete: formData.get("dinner_complete") === "on",
    breakfast_meal: formData.get("breakfast_meal") || "",
    lunch_meal: formData.get("lunch_meal") || "",
    dinner_meal: formData.get("dinner_meal") || "",
    water_count: formData.get("water_count") || 0,
    mood: formData.get("mood") || "",
    notes: formData.get("notes") || "",
  });

  if (!parsed.success) {
    throw new Error("Invalid progress data.");
  }

  const p = parsed.data;

  await sql`
    INSERT INTO progress (
      user_id,
      day,
      breakfast_complete,
      lunch_complete,
      dinner_complete,
      breakfast_meal,
      lunch_meal,
      dinner_meal,
      water_count,
      mood,
      notes,
      updated_at
    )
    VALUES (
      ${user.id},
      ${p.day},
      ${p.breakfast_complete},
      ${p.lunch_complete},
      ${p.dinner_complete},
      ${p.breakfast_meal ?? ""},
      ${p.lunch_meal ?? ""},
      ${p.dinner_meal ?? ""},
      ${p.water_count},
      ${p.mood ?? ""},
      ${p.notes ?? ""},
      NOW()
    )
    ON CONFLICT (user_id, day)
    DO UPDATE SET
      breakfast_complete = EXCLUDED.breakfast_complete,
      lunch_complete = EXCLUDED.lunch_complete,
      dinner_complete = EXCLUDED.dinner_complete,
      breakfast_meal = EXCLUDED.breakfast_meal,
      lunch_meal = EXCLUDED.lunch_meal,
      dinner_meal = EXCLUDED.dinner_meal,
      water_count = EXCLUDED.water_count,
      mood = EXCLUDED.mood,
      notes = EXCLUDED.notes,
      updated_at = NOW()
  `;

  revalidatePath("/progress");
}
