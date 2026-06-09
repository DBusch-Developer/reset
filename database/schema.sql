CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS login_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_login_codes_email ON login_codes(email);
CREATE INDEX IF NOT EXISTS idx_login_codes_user_id ON login_codes(user_id);
CREATE INDEX IF NOT EXISTS idx_login_codes_expires_at ON login_codes(expires_at);

CREATE TABLE IF NOT EXISTS progress (
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  day INTEGER NOT NULL CHECK (day BETWEEN 1 AND 14),
  breakfast_complete BOOLEAN NOT NULL DEFAULT FALSE,
  lunch_complete BOOLEAN NOT NULL DEFAULT FALSE,
  dinner_complete BOOLEAN NOT NULL DEFAULT FALSE,
  water_count INTEGER NOT NULL DEFAULT 0 CHECK (water_count BETWEEN 0 AND 20),
  mood TEXT,
  notes TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, day)
);

CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
