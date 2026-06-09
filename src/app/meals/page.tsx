import Link from "next/link";
import { mealPlan } from "@/data/meal-plan";
import { MealBrowser } from "@/components/MealBrowser";

export default function MealsPage() {
  return (
    <div className="shell stack">
      <div>
        <p className="eyebrow">Meal Library</p>
        <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", marginTop: ".3rem", marginBottom: ".5rem" }}>
          42 recipes, pick freely
        </h1>
        <p className="muted t-sm">
          Every recipe has a full vegan base with optional fatty fish swaps. No prescribed schedule — eat what sounds good.
        </p>
      </div>
      <MealBrowser meals={mealPlan} />
      <div className="guide-card" style={{ marginTop: "1rem" }}>
        <div className="guide-card-text">
          <p className="eyebrow" style={{ marginBottom: ".3rem" }}>Food Browser</p>
          <p style={{ fontSize: "1rem", fontWeight: 600, marginBottom: ".4rem" }}>
            Working with what you have?
          </p>
          <p className="muted t-sm">
            Pick the ingredients you have on hand and let AI generate anti-inflammatory meal ideas for you.
          </p>
        </div>
        <Link href="/foods" className="btn btn-green btn-sm" style={{ flexShrink: 0 }}>
          Browse foods →
        </Link>
      </div>
    </div>
  );
}
