"use server";

export type MealIdea = {
  name: string;
  description: string;
  uses: string[];
  tip: string;
  benefit: string;
  suggestedIngredients?: string[];  // only present on the upgrade idea
  isUpgrade?: boolean;
};

const ANTI_INFLAMMATORY_RULES = `
Anti-inflammatory rules — every meal MUST follow all of these:
- No dairy (no butter, cream, cheese, yogurt, milk)
- No refined grains (no white bread, white rice, white pasta)
- No added sugar or sweeteners
- No processed or cured meats (no chicken, turkey, bacon, sausage, deli meat)
- No fried foods or industrial seed oils (soybean, corn, sunflower, canola)
- No alcohol
- Healthy fats only: olive oil, avocado, nuts, seeds
- Proteins: plant-based (tofu, tempeh, legumes, lentils) or fatty fish (salmon, sardines, mackerel, cod, halibut)
- Whole grains only if included: quinoa, brown rice, oats, farro, buckwheat
- Flavor with: garlic, ginger, turmeric, herbs, lemon, lime, apple cider vinegar, tamari
`.trim();

export async function generateMealIdeasAction(
  foodNames: string[]
): Promise<{ meals?: MealIdea[]; error?: string }> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return {
      error:
        "Groq API key not configured. Add GROQ_API_KEY to your .env.local file and get a free key at console.groq.com.",
    };
  }

  if (foodNames.length === 0) {
    return { error: "Select at least one food to generate meal ideas." };
  }

  const prompt = `You are a nutrition expert and chef specializing in anti-inflammatory cooking.

${ANTI_INFLAMMATORY_RULES}

The user has selected these anti-inflammatory ingredients: ${foodNames.join(", ")}.

Generate exactly 3 meal ideas following this structure:

IDEA 1 — "Make It Now": A complete, delicious meal using ONLY the ingredients the user already has selected. No extra shopping needed.

IDEA 2 — "Another Way": A second different meal (different style — if idea 1 is a bowl, make idea 2 a soup, wrap, or warm dish) using ONLY the user's selected ingredients.

IDEA 3 — "Level It Up": A more complete and nutritionally powerful meal that uses the user's selected ingredients AND recommends 3 to 5 additional anti-inflammatory ingredients to take it further. These additions must strictly follow the anti-inflammatory rules above.

Return ONLY a valid JSON object with this exact structure (no markdown, no explanation):
{
  "meals": [
    {
      "name": "Creative specific meal name",
      "description": "2 sentences describing flavor, texture, and why it works",
      "uses": ["ingredient from their list", "ingredient from their list"],
      "tip": "One specific cooking or prep tip",
      "benefit": "The key anti-inflammatory benefit of this combination",
      "isUpgrade": false
    },
    {
      "name": "Creative specific meal name",
      "description": "2 sentences describing flavor, texture, and why it works",
      "uses": ["ingredient from their list", "ingredient from their list"],
      "tip": "One specific cooking or prep tip",
      "benefit": "The key anti-inflammatory benefit of this combination",
      "isUpgrade": false
    },
    {
      "name": "Creative specific meal name",
      "description": "2 sentences describing flavor, texture, and why it works",
      "uses": ["ingredient from their list", "ingredient from their list"],
      "tip": "One specific cooking or prep tip",
      "benefit": "The key anti-inflammatory benefit of this combination",
      "isUpgrade": true,
      "suggestedIngredients": ["additional ingredient 1", "additional ingredient 2", "additional ingredient 3"]
    }
  ]
}`;

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1800,
        temperature: 0.65,
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Groq API error:", errText);
      return { error: "AI request failed. Check your GROQ_API_KEY and try again." };
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) return { error: "No response from AI. Try again." };

    let parsed: { meals?: MealIdea[] };
    try {
      parsed = JSON.parse(content);
    } catch {
      const match = content.match(/\{[\s\S]*\}/);
      if (!match) return { error: "AI returned an unexpected format. Try again." };
      parsed = JSON.parse(match[0]);
    }

    if (!Array.isArray(parsed.meals) || parsed.meals.length === 0) {
      return { error: "AI didn't return valid meal ideas. Try again." };
    }

    return { meals: parsed.meals };
  } catch (err) {
    console.error("generateMealIdeasAction error:", err);
    return { error: "Something went wrong. Check your internet connection and try again." };
  }
}
