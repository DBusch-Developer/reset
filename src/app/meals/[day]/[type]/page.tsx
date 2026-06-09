import Link from "next/link";
import { notFound } from "next/navigation";
import { getMeal, type MealType } from "@/data/meal-plan";

const TYPES: MealType[] = ["breakfast", "lunch", "dinner"];

export function generateStaticParams() {
  return Array.from({ length: 14 }, (_, i) => i + 1).flatMap((day) =>
    TYPES.map((type) => ({ day: String(day), type }))
  );
}

const badgeClass: Record<MealType, string> = {
  breakfast: "badge badge-b",
  lunch: "badge badge-l",
  dinner: "badge badge-d",
};

export default async function RecipePage({
  params,
}: {
  params: Promise<{ day: string; type: string }>;
}) {
  const { day: dayParam, type: typeParam } = await params;
  const day = Number(dayParam);

  if (!Number.isInteger(day) || day < 1 || day > 14 || !TYPES.includes(typeParam as MealType)) {
    notFound();
  }

  const meal = getMeal(day, typeParam as MealType);
  if (!meal) notFound();

  return (
    <div className="shell">
      <Link href="/meals" className="back-link">
        ← Back to meals
      </Link>

      {/* Header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <span className={badgeClass[meal.type]}>{meal.type}</span>
        <h1 style={{ fontSize: "clamp(1.7rem, 5vw, 3rem)", margin: ".6rem 0 0" }}>
          {meal.title}
        </h1>
        <div className="recipe-meta">
          <span className="recipe-meta-item">⏱ {meal.time}</span>
          <span className="recipe-meta-item" style={{ color: "var(--border-2)" }}>·</span>
          <span className="recipe-meta-item">Serves {meal.servings}</span>
        </div>
        <div className="tags">
          {meal.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Recipe columns */}
      <div className="card card-p">
        <div className="recipe-cols">
          <div>
            <p className="recipe-section-label">Ingredients</p>
            <ul className="ingr-list">
              {meal.ingredients.map((ingredient) => (
                <li key={ingredient} className="ingr-item">
                  <span className="ingr-dot" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="recipe-section-label">Steps</p>
            <ol className="step-list">
              {meal.steps.map((step, i) => (
                <li key={step} className="step-item">
                  <span className="step-num">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Omni option */}
        <div className="omni-panel">
          <p className="omni-label">Fatty Fish Option</p>
          <h3>{meal.omniOption.title}</h3>
          {meal.omniOption.ingredients.length > 0 && (
            <p className="muted t-sm" style={{ marginBottom: ".65rem" }}>
              <strong style={{ color: "var(--text)" }}>Add: </strong>
              {meal.omniOption.ingredients.join(", ")}
            </p>
          )}
          <ol className="step-list">
            {meal.omniOption.steps.map((step, i) => (
              <li key={step} className="step-item">
                <span className="step-num">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Track CTA */}
      <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <p className="muted t-sm">Cooked this one? Log it in your tracker — it'll be pre-filled.</p>
        <Link
          href={`/progress?type=${meal.type}&meal=${encodeURIComponent(meal.title)}`}
          className="btn btn-green btn-sm"
        >
          Log this meal →
        </Link>
      </div>
    </div>
  );
}
