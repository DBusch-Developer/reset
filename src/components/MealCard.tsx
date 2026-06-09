import Link from "next/link";
import type { Meal } from "@/data/meal-plan";

const badgeClass: Record<string, string> = {
  breakfast: "badge badge-b",
  lunch: "badge badge-l",
  dinner: "badge badge-d",
};

export function MealCard({ meal }: { meal: Meal }) {
  const href = `/meals/${meal.day}/${meal.type}`;

  return (
    <Link href={href} className="meal-card" style={{ textDecoration: "none" }}>
      <div className="meal-card-top">
        <span className={badgeClass[meal.type] ?? "badge"}>
          {meal.type}
        </span>
        <div className="tags">
          {meal.tags.slice(0, 1).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <h3>{meal.title}</h3>
      <p className="meal-preview">
        {meal.ingredients.slice(0, 3).join(" · ")}
      </p>
      <div className="meal-card-footer">
        <span className="meal-time">⏱ {meal.time}</span>
        <span className="view-link">View recipe →</span>
      </div>
    </Link>
  );
}
