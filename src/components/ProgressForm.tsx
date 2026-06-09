"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { updateDailyProgressAction } from "@/app/actions/progress";
import type { ProgressRow } from "@/lib/progress";
import type { MealType } from "@/data/meal-plan";

function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-green btn-sm" disabled={pending}>
      {pending ? "Saving…" : "Save session"}
    </button>
  );
}

type MealRow = {
  type: MealType;
  label: string;
  completeKey: "breakfast_complete" | "lunch_complete" | "dinner_complete";
  mealKey: "breakfast_meal" | "lunch_meal" | "dinner_meal";
};

const MEAL_ROWS: MealRow[] = [
  { type: "breakfast", label: "Breakfast", completeKey: "breakfast_complete", mealKey: "breakfast_meal" },
  { type: "lunch",     label: "Lunch",     completeKey: "lunch_complete",     mealKey: "lunch_meal" },
  { type: "dinner",    label: "Dinner",    completeKey: "dinner_complete",    mealKey: "dinner_meal" },
];

type Prefill = { type: MealType; meal: string } | undefined;

export function ProgressForm({
  day,
  progress,
  prefill,
}: {
  day: number;
  progress?: ProgressRow;
  prefill?: Prefill;
}) {
  const [water, setWater] = useState(progress?.water_count ?? 0);

  const initialMeals = {
    breakfast_meal:
      prefill?.type === "breakfast" ? prefill.meal : (progress?.breakfast_meal ?? ""),
    lunch_meal:
      prefill?.type === "lunch" ? prefill.meal : (progress?.lunch_meal ?? ""),
    dinner_meal:
      prefill?.type === "dinner" ? prefill.meal : (progress?.dinner_meal ?? ""),
  };

  const initialChecks = {
    breakfast_complete:
      prefill?.type === "breakfast" ? true : (progress?.breakfast_complete ?? false),
    lunch_complete:
      prefill?.type === "lunch" ? true : (progress?.lunch_complete ?? false),
    dinner_complete:
      prefill?.type === "dinner" ? true : (progress?.dinner_complete ?? false),
  };

  const [mealNames, setMealNames] = useState(initialMeals);
  const [checked, setChecked] = useState(initialChecks);

  function setMealName(key: keyof typeof mealNames, value: string) {
    setMealNames((prev) => ({ ...prev, [key]: value }));
  }

  function clearMealName(key: keyof typeof mealNames) {
    setMealNames((prev) => ({ ...prev, [key]: "" }));
  }

  return (
    <form action={updateDailyProgressAction} className="stack-sm">
      <input type="hidden" name="day" value={day} />
      <input type="hidden" name="water_count" value={water} />

      {/* Meal rows */}
      <div>
        <p className="form-label" style={{ marginBottom: ".65rem" }}>Meals</p>
        {MEAL_ROWS.map(({ type, label, completeKey, mealKey }) => {
          const isChecked = checked[completeKey];
          const mealName = mealNames[mealKey];

          return (
            <div key={type} className="meal-log-row">
              {/* Checkbox + label + logged chip */}
              <div className="meal-log-top">
                <label className="meal-toggle">
                  <input
                    type="checkbox"
                    name={completeKey}
                    checked={isChecked}
                    onChange={(e) =>
                      setChecked((prev) => ({ ...prev, [completeKey]: e.target.checked }))
                    }
                  />
                  <span className="meal-toggle-check">✓</span>
                  <span className="meal-toggle-label">{label}</span>
                </label>

                {mealName ? (
                  <span className="meal-logged-chip">
                    <span title={mealName}>{mealName}</span>
                    <button
                      type="button"
                      onClick={() => clearMealName(mealKey)}
                      aria-label="Clear meal"
                    >
                      ×
                    </button>
                  </span>
                ) : (
                  <span
                    style={{ fontSize: ".72rem", color: "var(--dim)", marginLeft: "auto" }}
                  >
                    not logged
                  </span>
                )}
              </div>

              {/* Meal name input (always shown, pre-filled if set) */}
              <div className="meal-name-input-wrap">
                <input
                  type="text"
                  name={mealKey}
                  className="meal-name-input"
                  placeholder={`What did you eat for ${label.toLowerCase()}? (optional)`}
                  value={mealName}
                  onChange={(e) => setMealName(mealKey, e.target.value)}
                  maxLength={120}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Water counter */}
      <div className="form-field">
        <span className="form-label">Water glasses</span>
        <div className="water-row">
          <button
            type="button"
            className="water-btn"
            onClick={() => setWater((w) => Math.max(0, w - 1))}
            aria-label="Decrease"
          >
            −
          </button>
          <span className="water-count">{water}</span>
          <button
            type="button"
            className="water-btn"
            onClick={() => setWater((w) => Math.min(20, w + 1))}
            aria-label="Increase"
          >
            +
          </button>
          <span className="water-label">glasses today</span>
        </div>
      </div>

      {/* Mood */}
      <div className="form-field">
        <label className="form-label" htmlFor={`mood-${day}`}>How do you feel?</label>
        <input
          id={`mood-${day}`}
          name="mood"
          className="form-input"
          placeholder="Energized, clear, bloated, tired…"
          defaultValue={progress?.mood ?? ""}
          maxLength={80}
        />
      </div>

      {/* Notes */}
      <div className="form-field">
        <label className="form-label" htmlFor={`notes-${day}`}>Notes</label>
        <textarea
          id={`notes-${day}`}
          name="notes"
          className="form-textarea"
          rows={3}
          placeholder="Sleep, digestion, cravings, joint pain, energy…"
          defaultValue={progress?.notes ?? ""}
          maxLength={800}
        />
      </div>

      <SaveButton />
    </form>
  );
}
