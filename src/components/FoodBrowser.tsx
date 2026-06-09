"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import type { Food } from "@/data/foods";
import { generateMealIdeasAction, type MealIdea } from "@/app/actions/meal-ideas";

const STORAGE_KEY = "reset-saved-meal-ideas";

function loadSaved(): MealIdea[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function persistSaved(ideas: MealIdea[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
}

export function FoodBrowser({ foods }: { foods: Food[] }) {
  const router = useRouter();
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [results, setResults] = useState<MealIdea[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [savedIdeas, setSavedIdeas] = useState<MealIdea[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const generateAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSavedIdeas(loadSaved());
  }, []);

  useEffect(() => {
    if (results && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [results]);

  const categories = ["All", ...Array.from(new Set(foods.map((f) => f.category)))];
  const shown = category === "All" ? foods : foods.filter((f) => f.category === category);
  const selectedFoods = foods.filter((f) => selected.has(f.id));

  function isSaved(name: string) {
    return savedIdeas.some((m) => m.name === name);
  }

  function toggleSave(meal: MealIdea) {
    setSavedIdeas((prev) => {
      const already = prev.some((m) => m.name === meal.name);
      const next = already ? prev.filter((m) => m.name !== meal.name) : [...prev, meal];
      persistSaved(next);
      return next;
    });
  }

  function logToTracker(mealName: string, type: "breakfast" | "lunch" | "dinner") {
    router.push(`/progress?type=${type}&meal=${encodeURIComponent(mealName)}`);
  }

  function toggleSelect(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setResults(null);
    setError(null);
  }

  function toggleExpand(id: string) {
    setExpanded((prev) => (prev === id ? null : id));
  }

  function removeSelected(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }

  function handleGenerate() {
    setError(null);
    setResults(null);
    generateAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    startTransition(async () => {
      const names = selectedFoods.map((f) => f.name);
      const result = await generateMealIdeasAction(names);
      if (result.error) setError(result.error);
      else setResults(result.meals ?? null);
    });
  }

  return (
    <div className="stack-lg">
      {/* Category filters */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${category === cat ? " on" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food grid */}
      <div className="food-grid">
        {shown.map((food) => {
          const isSelected = selected.has(food.id);
          const isExpanded = expanded === food.id;

          return (
            <div
              key={food.id}
              className={`food-card${isSelected ? " selected" : ""}`}
              onClick={() => toggleExpand(food.id)}
            >
              <div className="food-card-top">
                <span className="food-emoji">{food.emoji}</span>
                <button
                  className="food-select-btn"
                  onClick={(e) => toggleSelect(food.id, e)}
                  aria-label={isSelected ? `Remove ${food.name}` : `Add ${food.name}`}
                  title={isSelected ? "Remove from list" : "Add to list"}
                >
                  ✓
                </button>
              </div>
              <p className="food-name">{food.name}</p>
              <span className="tag" style={{ alignSelf: "flex-start" }}>{food.category}</span>
              <p className="food-benefit">{food.benefit}</p>

              {isExpanded && (
                <div className="food-detail-panel">
                  <p className="food-detail-text">{food.detail}</p>
                  <div className="food-nutrients">
                    {food.nutrients.map((n) => (
                      <span key={n} className="food-nutrient">{n}</span>
                    ))}
                  </div>
                </div>
              )}

              <button className="food-info-btn">
                {isExpanded ? "▲ Less info" : "▼ More info"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Generate section */}
      <div className="generate-section stack" ref={generateAnchorRef}>
        <div>
          <p className="eyebrow" style={{ marginBottom: ".4rem" }}>AI Meal Generator</p>
          <h2 style={{ fontSize: "1.3rem" }}>Turn your picks into meal ideas</h2>
          <p className="muted t-sm" style={{ marginTop: ".3rem" }}>
            Select foods above (tap the ✓ button), then generate personalized anti-inflammatory meal ideas powered by AI.
          </p>
        </div>

        {selectedFoods.length > 0 ? (
          <>
            <div>
              <p className="form-label" style={{ marginBottom: ".5rem" }}>
                {selectedFoods.length} food{selectedFoods.length !== 1 ? "s" : ""} selected
              </p>
              <div className="selected-chips">
                {selectedFoods.map((f) => (
                  <span key={f.id} className="selected-chip">
                    {f.emoji} {f.name}
                    <button
                      className="selected-chip-remove"
                      onClick={() => removeSelected(f.id)}
                      aria-label={`Remove ${f.name}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <button
              className="btn btn-green"
              onClick={handleGenerate}
              disabled={isPending}
              style={{ alignSelf: "flex-start" }}
            >
              {isPending ? "Generating…" : "✦ Generate meal ideas"}
            </button>
          </>
        ) : (
          <p className="generate-empty">
            Select foods from the grid above to generate personalized meal ideas.
          </p>
        )}

        {error && (
          <div style={{ padding: ".9rem 1rem", background: "rgba(224,82,82,.08)", border: "1px solid rgba(224,82,82,.2)", borderRadius: "var(--r)", fontSize: ".85rem", color: "var(--err)" }}>
            {error}
          </div>
        )}
      </div>

      {/* Loading */}
      {isPending && (
        <div className="loading-spinner">
          <div className="spinner" />
          <span>Crafting your meal ideas…</span>
        </div>
      )}

      {/* Results */}
      {results && results.length > 0 && (
        <div className="stack" ref={resultsRef}>
          <div>
            <p className="eyebrow" style={{ marginBottom: ".3rem" }}>Your Meal Ideas</p>
            <h2 style={{ fontSize: "1.3rem" }}>
              {results.length} ideas based on your picks
            </h2>
          </div>

          <div className="meal-ideas-grid">
            {results.map((meal, i) => (
              <div key={i} className={`meal-idea-card${meal.isUpgrade ? " upgrade" : ""}`}>
                <div className="meal-idea-header">
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {meal.isUpgrade && (
                      <span className="upgrade-badge">✦ Level It Up</span>
                    )}
                    <p className="meal-idea-name">{meal.name}</p>
                  </div>
                  <button
                    className={`meal-idea-save-btn${isSaved(meal.name) ? " saved" : ""}`}
                    onClick={() => toggleSave(meal)}
                  >
                    {isSaved(meal.name) ? "✓ Saved" : "Save"}
                  </button>
                </div>

                <p className="meal-idea-desc">{meal.description}</p>

                {meal.uses?.length > 0 && (
                  <div style={{ marginBottom: ".85rem" }}>
                    <p className="meal-idea-micro">From your list</p>
                    <div className="meal-idea-uses">
                      {meal.uses.map((u, j) => (
                        <span key={j} className="tag">{u}</span>
                      ))}
                    </div>
                  </div>
                )}

                {meal.isUpgrade && meal.suggestedIngredients && meal.suggestedIngredients.length > 0 && (
                  <div style={{ marginBottom: ".85rem" }}>
                    <p className="meal-idea-micro">Add to your cart</p>
                    <div className="meal-idea-uses">
                      {meal.suggestedIngredients.map((s, j) => (
                        <span key={j} className="tag upgrade-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                {meal.tip && (
                  <div style={{ marginBottom: ".75rem" }}>
                    <p className="meal-idea-micro">Pro tip</p>
                    <p className="meal-idea-detail">{meal.tip}</p>
                  </div>
                )}

                {meal.benefit && (
                  <div>
                    <p className="meal-idea-micro">Why it works</p>
                    <p className="meal-idea-detail" style={{ color: "var(--accent)", opacity: .85 }}>
                      {meal.benefit}
                    </p>
                  </div>
                )}

                <div className="meal-idea-actions">
                  <span className="meal-idea-log-label">Log as:</span>
                  {(["breakfast", "lunch", "dinner"] as const).map((type) => (
                    <button
                      key={type}
                      className="meal-type-btn"
                      onClick={() => logToTracker(meal.name, type)}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn btn-outline btn-sm"
            onClick={handleGenerate}
            disabled={isPending}
            style={{ alignSelf: "flex-start" }}
          >
            Regenerate ideas
          </button>
        </div>
      )}

      {/* Saved ideas */}
      {savedIdeas.length > 0 && (
        <div className="stack">
          <div>
            <p className="eyebrow" style={{ marginBottom: ".3rem" }}>Saved Ideas</p>
            <h2 style={{ fontSize: "1.3rem" }}>{savedIdeas.length} saved meal idea{savedIdeas.length !== 1 ? "s" : ""}</h2>
          </div>
          <div className="meal-ideas-grid">
            {savedIdeas.map((meal, i) => (
              <div key={i} className="meal-idea-card">
                <div className="meal-idea-header">
                  <p className="meal-idea-name">{meal.name}</p>
                  <button
                    className="meal-idea-save-btn saved"
                    onClick={() => toggleSave(meal)}
                  >
                    ✓ Saved
                  </button>
                </div>
                <p className="meal-idea-desc">{meal.description}</p>
                {meal.benefit && (
                  <p className="meal-idea-detail" style={{ color: "var(--accent)", opacity: .85 }}>
                    {meal.benefit}
                  </p>
                )}
                <div className="meal-idea-actions">
                  <span className="meal-idea-log-label">Log as:</span>
                  {(["breakfast", "lunch", "dinner"] as const).map((type) => (
                    <button
                      key={type}
                      className="meal-type-btn"
                      onClick={() => logToTracker(meal.name, type)}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Floating generate button — mobile only */}
      {selected.size > 0 && (
        <div className="generate-fab">
          <span className="generate-fab-count">
            {selected.size} food{selected.size !== 1 ? "s" : ""}
          </span>
          <button
            className="btn btn-green btn-sm"
            onClick={handleGenerate}
            disabled={isPending}
          >
            {isPending ? "Generating…" : "✦ Generate ideas"}
          </button>
        </div>
      )}

      {/* Floating sidebar — desktop only, appears when foods are selected */}
      {selected.size > 0 && (
        <div className="generate-sidebar">
          <p className="generate-sidebar-count">
            {selected.size} food{selected.size !== 1 ? "s" : ""} selected
          </p>
          <div className="generate-sidebar-chips">
            {selectedFoods.slice(0, 4).map((f) => (
              <span key={f.id} className="generate-sidebar-chip">
                {f.emoji} {f.name}
              </span>
            ))}
            {selectedFoods.length > 4 && (
              <span className="generate-sidebar-chip muted">
                +{selectedFoods.length - 4} more
              </span>
            )}
          </div>
          <button
            className="btn btn-green btn-sm"
            onClick={handleGenerate}
            disabled={isPending}
            style={{ width: "100%" }}
          >
            {isPending ? "Generating…" : "✦ Generate ideas"}
          </button>
          <button
            className="generate-sidebar-jump"
            onClick={() => generateAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            Jump to section ↓
          </button>
        </div>
      )}
    </div>
  );
}
