# Reset

**Reset** is a guided reset companion app. You show up with the intention to change something — Reset helps you build the plan and track the progress, one day at a time.

The first reset available is a **14-day dairy-free, anti-inflammatory meal plan** — a structured, whole-foods approach to reducing inflammation through diet. The vision is to grow Reset into a platform where any kind of life reset you want to take on (nutrition, sleep, movement, mindset, digital detox, and more) can be planned and tracked in one place.

---

## Current features

- Passwordless email login with 6-digit magic codes
- HTTP-only JWT session cookie after code verification
- 14 breakfasts, 14 lunches, 14 dinners — step-by-step recipes for every meal
- Vegan base plan with optional fish/chicken swaps
- Snack idea library
- Daily progress tracking: meals checked off, water intake, mood, and notes
- Neon Postgres for users, login codes, and progress data
- Next.js App Router with Server Components and Server Actions

---

## Tech stack

- Next.js App Router
- TypeScript
- Neon Postgres (`@neondatabase/serverless`)
- `jose` — JWT session management
- `zod` — input validation
- Resend (optional) — email delivery for login codes

---

## Getting started

### 1. Install dependencies

```bash
npm install
cp .env.example .env.local
```

### 2. Create your Neon database

Create a Neon project and add the connection string to `.env.local`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST.neon.tech/DBNAME?sslmode=require"
SESSION_SECRET="replace-with-a-long-random-string-at-least-32-characters"
NEXT_PUBLIC_APP_NAME="Reset"
```

### 3. Run the schema

Open the Neon SQL Editor, paste the contents of `database/schema.sql`, and run it once.

### 4. Email settings (optional for local dev)

When `RESEND_API_KEY` is blank, login codes print to your terminal instead of being emailed — no email setup needed to develop locally.

For a deployed app:

```env
RESEND_API_KEY="your-resend-api-key"
RESEND_FROM_EMAIL="Reset <hello@yourdomain.com>"
```

### 5. Start the app

```bash
npm run dev
```

Open `http://localhost:3000`. When you request a login code locally, watch your terminal:

```
Reset login code for you@example.com: 123456
```

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Import into Vercel
3. Add environment variables: `DATABASE_URL`, `SESSION_SECRET`, `NEXT_PUBLIC_APP_NAME`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
4. Deploy

---

## Roadmap

- Additional reset types (sleep, movement, mindset, digital detox)
- Custom reset plan builder
- Progress insights and streaks
- Community reset challenges

---

> This app is a wellness tool, not medical advice. Anyone with a medical condition, medication plan, pregnancy, eating disorder history, diabetes, kidney disease, or other clinical concern should consult a qualified medical professional before making significant diet or lifestyle changes.
