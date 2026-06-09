"use client";

import { useState } from "react";
import type { Meal, MealType } from "@/data/meal-plan";
import { MealCard } from "./MealCard";

type Filter = MealType | "all";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All meals" },
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
];

export function MealBrowser({ meals }: { meals: Meal[] }) {
  const [active, setActive] = useState<Filter>("all");

  const shown = active === "all" ? meals : meals.filter((m) => m.type === active);

  return (
    <div className="stack">
      <div className="filter-bar">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            className={`filter-btn${active === value ? " on" : ""}`}
            onClick={() => setActive(value)}
          >
            {label}
            {active !== "all" && value === active && (
              <span style={{ marginLeft: ".35rem", opacity: .6 }}>
                ({meals.filter((m) => m.type === value).length})
              </span>
            )}
            {value === "all" && active === "all" && (
              <span style={{ marginLeft: ".35rem", opacity: .6 }}>({meals.length})</span>
            )}
          </button>
        ))}
      </div>
      <div className="meal-grid">
        {shown.map((meal) => (
          <MealCard key={`${meal.day}-${meal.type}`} meal={meal} />
        ))}
      </div>
    </div>
  );
}
