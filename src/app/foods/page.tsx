import { foods } from "@/data/foods";
import { FoodBrowser } from "@/components/FoodBrowser";

export default function FoodsPage() {
  return (
    <div className="shell stack">
      <div>
        <p className="eyebrow">Anti-Inflammatory Foods</p>
        <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", marginTop: ".3rem", marginBottom: ".5rem" }}>
          {foods.length} foods. Select any. Get AI meal ideas.
        </h1>
        <p className="muted t-sm">
          Tap a card to read the science. Hit ✓ to add it to your selection. Then generate personalized meal ideas using Groq AI.
        </p>
      </div>
      <FoodBrowser foods={(() => {
        const categoryOrder = [...new Set(foods.map(f => f.category))];
        return [...foods].sort((a, b) => {
          const catDiff = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
          return catDiff !== 0 ? catDiff : a.name.localeCompare(b.name);
        });
      })()} />
    </div>
  );
}
