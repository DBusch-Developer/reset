-- Run this once against your Neon database to add meal-name columns.
-- The columns store what the user actually ate for each meal slot.

ALTER TABLE progress
  ADD COLUMN IF NOT EXISTS breakfast_meal TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS lunch_meal     TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS dinner_meal    TEXT NOT NULL DEFAULT '';
