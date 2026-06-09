import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing. Add it to .env.local and Vercel Environment Variables.");
}

export const sql = neon(process.env.DATABASE_URL);
