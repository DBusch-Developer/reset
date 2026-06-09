import { sql } from "@/lib/db";

export type ProgressRow = {
  day: number;
  breakfast_complete: boolean;
  lunch_complete: boolean;
  dinner_complete: boolean;
  breakfast_meal: string | null;
  lunch_meal: string | null;
  dinner_meal: string | null;
  water_count: number;
  mood: string | null;
  notes: string | null;
  updated_at: string;
};

export async function getProgressForUser(userId: string) {
  const rows = await sql`
    SELECT day, breakfast_complete, lunch_complete, dinner_complete,
           breakfast_meal, lunch_meal, dinner_meal,
           water_count, mood, notes, updated_at
    FROM progress
    WHERE user_id = ${userId}
    ORDER BY day ASC
  `;

  return rows as ProgressRow[];
}

export function buildProgressMap(rows: ProgressRow[]) {
  return new Map(rows.map((row) => [row.day, row]));
}

export function getDayCompletion(row?: ProgressRow) {
  if (!row) return 0;
  return [row.breakfast_complete, row.lunch_complete, row.dinner_complete].filter(Boolean).length;
}

export function getTotalCompletedMeals(rows: ProgressRow[]) {
  return rows.reduce((total, row) => total + getDayCompletion(row), 0);
}

export function getCurrentDay(rows: ProgressRow[]) {
  const map = buildProgressMap(rows);
  for (let day = 1; day <= 14; day++) {
    if (getDayCompletion(map.get(day)) < 3) return day;
  }
  return 14;
}
