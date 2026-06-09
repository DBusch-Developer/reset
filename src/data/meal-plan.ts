export type MealType = "breakfast" | "lunch" | "dinner";

export type OmniOption = {
  title: string;
  ingredients: string[];
  steps: string[];
};

export type Meal = {
  day: number;
  type: MealType;
  title: string;
  time: string;
  servings: number;
  tags: string[];
  ingredients: string[];
  steps: string[];
  omniOption: OmniOption;
};

export type Snack = {
  title: string;
  why: string;
};

export const mealPlan = [
  {
    "day": 1,
    "type": "breakfast",
    "title": "Blueberry Flax Power Oats",
    "time": "12 min",
    "servings": 1,
    "tags": [
      "vegan",
      "high fiber",
      "omega-3"
    ],
    "ingredients": [
      "1/2 cup rolled oats",
      "1 cup unsweetened soy or almond milk",
      "1/2 cup blueberries",
      "1 tbsp ground flaxseed",
      "1 tbsp chopped walnuts",
      "1/2 tsp cinnamon"
    ],
    "steps": [
      "Add oats and milk to a small pot over medium heat.",
      "Cook 5 to 7 minutes, stirring until creamy.",
      "Stir in cinnamon and ground flaxseed after the oats thicken.",
      "Top with blueberries and walnuts.",
      "Serve warm with extra milk if desired."
    ],
    "omniOption": {
      "title": "Keep it vegan or add eggs on the side",
      "ingredients": [
        "2 boiled eggs, optional"
      ],
      "steps": [
        "For a non-vegan version, add boiled eggs on the side for extra protein.",
        "Do not add butter, cream, or dairy toppings."
      ]
    }
  },
  {
    "day": 1,
    "type": "lunch",
    "title": "Mediterranean Chickpea Quinoa Bowl",
    "time": "20 min",
    "servings": 1,
    "tags": [
      "vegan",
      "meal prep",
      "Mediterranean"
    ],
    "ingredients": [
      "3/4 cup cooked quinoa",
      "1/2 cup chickpeas",
      "1 cup chopped cucumber and tomato",
      "2 cups greens",
      "2 tbsp hummus",
      "1 tbsp lemon juice",
      "1 tsp olive oil"
    ],
    "steps": [
      "Add greens to the bottom of a bowl.",
      "Layer quinoa, chickpeas, cucumber, and tomato over the greens.",
      "Whisk hummus, lemon juice, olive oil, and a splash of water into a sauce.",
      "Pour sauce over the bowl.",
      "Finish with black pepper and fresh parsley if available."
    ],
    "omniOption": {
      "title": "Grilled fish option",
      "ingredients": [
        "3 to 4 oz grilled white fish or tuna steak"
      ],
      "steps": [
        "Season fish with garlic, lemon, pepper, and paprika.",
        "Grill or pan-sear 3 to 4 minutes per side and slice over the bowl."
      ]
    }
  },
  {
    "day": 1,
    "type": "dinner",
    "title": "Turmeric Lentil Soup with Kale",
    "time": "35 min",
    "servings": 2,
    "tags": [
      "vegan",
      "one pot",
      "anti-inflammatory"
    ],
    "ingredients": [
      "1 cup dry red lentils",
      "1 carrot, diced",
      "1 celery stalk, diced",
      "2 cups kale",
      "3 cups vegetable broth",
      "1 tsp turmeric",
      "1 tsp cumin",
      "2 garlic cloves"
    ],
    "steps": [
      "Saut\u00e9 garlic, carrot, and celery in a splash of olive oil for 4 minutes.",
      "Add lentils, turmeric, cumin, and vegetable broth.",
      "Simmer 20 to 25 minutes until lentils are soft.",
      "Stir in kale during the last 5 minutes.",
      "Season with lemon juice and black pepper before serving."
    ],
    "omniOption": {
      "title": "White fish soup option",
      "ingredients": [
        "4 oz cod or halibut fillet"
      ],
      "steps": [
        "Add fish to the simmering soup during the last 6 to 8 minutes.",
        "It will flake apart naturally — keep the broth dairy-free."
      ]
    }
  },
  {
    "day": 2,
    "type": "breakfast",
    "title": "Green Ginger Smoothie",
    "time": "7 min",
    "servings": 1,
    "tags": [
      "vegan",
      "quick",
      "ginger"
    ],
    "ingredients": [
      "1 banana",
      "1 cup spinach",
      "1/2 cup frozen pineapple",
      "1 tbsp chia seeds",
      "1 tsp grated ginger",
      "1 scoop pea protein",
      "1 cup unsweetened soy milk"
    ],
    "steps": [
      "Add milk to the blender first.",
      "Add banana, spinach, pineapple, chia, ginger, and pea protein.",
      "Blend until completely smooth.",
      "Add ice if you want it thicker.",
      "Drink immediately or store chilled for up to 12 hours."
    ],
    "omniOption": {
      "title": "No animal protein needed",
      "ingredients": [],
      "steps": [
        "This breakfast is already protein-balanced with pea protein and soy milk.",
        "Keep it dairy-free by avoiding whey protein or yogurt."
      ]
    }
  },
  {
    "day": 2,
    "type": "lunch",
    "title": "Black Bean Sweet Potato Bowl",
    "time": "30 min",
    "servings": 1,
    "tags": [
      "vegan",
      "filling",
      "gluten-free"
    ],
    "ingredients": [
      "1 medium sweet potato",
      "1/2 cup black beans",
      "1 cup shredded cabbage",
      "1/2 avocado",
      "1 tbsp pumpkin seeds",
      "1 lime",
      "1 tsp cumin"
    ],
    "steps": [
      "Dice sweet potato and roast at 425\u00b0F for 22 to 25 minutes.",
      "Warm black beans with cumin and a splash of water.",
      "Add cabbage to a bowl and squeeze lime over it.",
      "Top with roasted sweet potato, beans, avocado, and pumpkin seeds.",
      "Finish with salsa or hot sauce if desired."
    ],
    "omniOption": {
      "title": "Shrimp taco bowl option",
      "ingredients": [
        "3 to 4 oz shrimp, peeled and deveined"
      ],
      "steps": [
        "Toss shrimp with cumin, lime, garlic, and smoked paprika.",
        "Cook in a skillet 2 to 3 minutes per side and add over the bowl."
      ]
    }
  },
  {
    "day": 2,
    "type": "dinner",
    "title": "Baked Tofu Broccoli Rice Plate",
    "time": "40 min",
    "servings": 2,
    "tags": [
      "vegan",
      "high protein",
      "meal prep"
    ],
    "ingredients": [
      "1 block extra-firm tofu",
      "2 cups broccoli",
      "1 cup cooked brown rice",
      "1 tbsp tamari",
      "1 tsp sesame oil",
      "1 tsp grated ginger",
      "1 garlic clove"
    ],
    "steps": [
      "Press tofu for 10 minutes and cut into cubes.",
      "Toss tofu with tamari, ginger, garlic, and sesame oil.",
      "Bake tofu at 400\u00b0F for 25 minutes, flipping halfway.",
      "Steam or roast broccoli until tender.",
      "Serve tofu and broccoli over brown rice."
    ],
    "omniOption": {
      "title": "Salmon plate option",
      "ingredients": [
        "4 oz salmon fillet"
      ],
      "steps": [
        "Season salmon with lemon, garlic, pepper, and a small amount of olive oil.",
        "Bake at 400\u00b0F for 12 to 15 minutes and serve with broccoli and rice."
      ]
    }
  },
  {
    "day": 3,
    "type": "breakfast",
    "title": "Apple Cinnamon Chia Pudding",
    "time": "10 min plus chill",
    "servings": 1,
    "tags": [
      "vegan",
      "make ahead",
      "omega-3"
    ],
    "ingredients": [
      "3 tbsp chia seeds",
      "1 cup unsweetened almond or soy milk",
      "1/2 apple, diced",
      "1 tbsp walnuts",
      "1/2 tsp cinnamon",
      "1 tsp maple syrup optional"
    ],
    "steps": [
      "Stir chia seeds, milk, cinnamon, and maple syrup in a jar.",
      "Let sit 5 minutes, then stir again to prevent clumps.",
      "Refrigerate at least 2 hours or overnight.",
      "Top with diced apple and walnuts.",
      "Eat cold or let sit at room temperature for 10 minutes."
    ],
    "omniOption": {
      "title": "Keep dairy-free",
      "ingredients": [],
      "steps": [
        "Use unsweetened plant milk instead of dairy milk.",
        "For more protein, use soy milk or add pea protein."
      ]
    }
  },
  {
    "day": 3,
    "type": "lunch",
    "title": "White Bean Kale Soup",
    "time": "30 min",
    "servings": 2,
    "tags": [
      "vegan",
      "one pot",
      "cozy"
    ],
    "ingredients": [
      "1 can white beans",
      "2 cups kale",
      "1 carrot",
      "1 celery stalk",
      "3 cups vegetable broth",
      "2 garlic cloves",
      "1 tsp rosemary",
      "1 lemon"
    ],
    "steps": [
      "Saut\u00e9 garlic, carrot, and celery for 4 minutes.",
      "Add white beans, rosemary, and vegetable broth.",
      "Simmer 15 to 20 minutes.",
      "Stir in kale until wilted.",
      "Finish with lemon juice and black pepper."
    ],
    "omniOption": {
      "title": "White fish option",
      "ingredients": [
        "3 oz cod, tilapia, or halibut fillet"
      ],
      "steps": [
        "Add fish to the soup during the last 6 minutes and let it flake into the broth.",
        "Do not use sausage or processed meat."
      ]
    }
  },
  {
    "day": 3,
    "type": "dinner",
    "title": "Chickpea Spinach Curry",
    "time": "30 min",
    "servings": 2,
    "tags": [
      "vegan",
      "warming spices",
      "high fiber"
    ],
    "ingredients": [
      "1 can chickpeas",
      "2 cups spinach",
      "1 cup crushed tomatoes",
      "1/2 cup light coconut milk",
      "1 tsp turmeric",
      "1 tsp curry powder",
      "2 garlic cloves",
      "1 tsp ginger"
    ],
    "steps": [
      "Saut\u00e9 garlic and ginger for 1 minute.",
      "Add turmeric and curry powder and stir until fragrant.",
      "Add chickpeas, crushed tomatoes, and coconut milk.",
      "Simmer 15 minutes.",
      "Stir in spinach and serve with brown rice or quinoa."
    ],
    "omniOption": {
      "title": "Shrimp curry option",
      "ingredients": [
        "4 oz shrimp, peeled and deveined"
      ],
      "steps": [
        "Add shrimp after the tomatoes and coconut milk are simmering.",
        "Cook 3 to 4 minutes until pink and keep the sauce dairy-free."
      ]
    }
  },
  {
    "day": 4,
    "type": "breakfast",
    "title": "Savory Tofu Scramble Plate",
    "time": "18 min",
    "servings": 1,
    "tags": [
      "vegan",
      "high protein",
      "savory"
    ],
    "ingredients": [
      "1/2 block firm tofu",
      "1 cup spinach",
      "1/2 bell pepper",
      "1/2 cup mushrooms",
      "1/2 tsp turmeric",
      "1 tbsp nutritional yeast",
      "1/4 avocado"
    ],
    "steps": [
      "Crumble tofu into a skillet.",
      "Add turmeric, nutritional yeast, pepper, and a splash of water.",
      "Cook 5 minutes, stirring often.",
      "Add mushrooms, bell pepper, and spinach.",
      "Serve with avocado on the side."
    ],
    "omniOption": {
      "title": "Egg scramble option",
      "ingredients": [
        "2 eggs"
      ],
      "steps": [
        "Replace tofu with eggs if desired.",
        "Keep the same vegetables and skip cheese, butter, and cream."
      ]
    }
  },
  {
    "day": 4,
    "type": "lunch",
    "title": "Lentil Cucumber Herb Salad",
    "time": "20 min",
    "servings": 1,
    "tags": [
      "vegan",
      "fresh",
      "meal prep"
    ],
    "ingredients": [
      "1 cup cooked lentils",
      "1 cup cucumber and tomato",
      "2 cups arugula",
      "2 tbsp parsley",
      "1 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tbsp sunflower seeds"
    ],
    "steps": [
      "Add arugula to a large bowl.",
      "Mix lentils, cucumber, tomato, parsley, lemon juice, and olive oil.",
      "Spoon lentil mixture over arugula.",
      "Top with sunflower seeds.",
      "Chill for 10 minutes or eat immediately."
    ],
    "omniOption": {
      "title": "Tuna salad option",
      "ingredients": [
        "1 can tuna in water or olive oil"
      ],
      "steps": [
        "Drain tuna and mix with lemon, pepper, and parsley.",
        "Add tuna on top instead of or alongside lentils."
      ]
    }
  },
  {
    "day": 4,
    "type": "dinner",
    "title": "Stuffed Peppers with Quinoa and Beans",
    "time": "45 min",
    "servings": 2,
    "tags": [
      "vegan",
      "batch cook",
      "colorful"
    ],
    "ingredients": [
      "2 bell peppers",
      "1 cup cooked quinoa",
      "1/2 cup black beans",
      "1/2 cup corn optional",
      "1/2 cup tomatoes",
      "1 tsp cumin",
      "1/2 avocado"
    ],
    "steps": [
      "Cut peppers in half and remove seeds.",
      "Mix quinoa, beans, tomatoes, corn, and cumin.",
      "Stuff mixture into peppers.",
      "Bake at 375\u00b0F for 30 minutes.",
      "Top with avocado and lime before serving."
    ],
    "omniOption": {
      "title": "Tuna or salmon stuffed pepper option",
      "ingredients": [
        "1 can tuna or 3 oz canned salmon"
      ],
      "steps": [
        "Drain and mix tuna or salmon with the quinoa and bean filling.",
        "Use in place of half the beans for a protein boost."
      ]
    }
  },
  {
    "day": 5,
    "type": "breakfast",
    "title": "Berry Walnut Smoothie Bowl",
    "time": "10 min",
    "servings": 1,
    "tags": [
      "vegan",
      "berries",
      "quick"
    ],
    "ingredients": [
      "1 cup frozen mixed berries",
      "1/2 banana",
      "1 scoop pea protein",
      "3/4 cup unsweetened soy milk",
      "1 tbsp ground flaxseed",
      "1 tbsp walnuts",
      "1 tbsp hemp seeds"
    ],
    "steps": [
      "Blend berries, banana, pea protein, flax, and soy milk until thick.",
      "Pour into a bowl.",
      "Top with walnuts and hemp seeds.",
      "Add extra berries if desired.",
      "Eat with a spoon like soft-serve."
    ],
    "omniOption": {
      "title": "Keep it dairy-free",
      "ingredients": [],
      "steps": [
        "Avoid Greek yogurt or whey protein for this reset.",
        "Use soy milk for the highest protein plant milk option."
      ]
    }
  },
  {
    "day": 5,
    "type": "lunch",
    "title": "Hummus Veggie Wrap Bowl",
    "time": "15 min",
    "servings": 1,
    "tags": [
      "vegan",
      "no cook",
      "easy"
    ],
    "ingredients": [
      "1 whole grain wrap or bowl of greens",
      "1/3 cup hummus",
      "1 cup shredded carrots and cucumber",
      "1/2 cup chickpeas",
      "1 tbsp pumpkin seeds",
      "1 tbsp lemon juice",
      "Fresh dill optional"
    ],
    "steps": [
      "Spread hummus onto a whole grain wrap or add it to a greens bowl.",
      "Layer carrots, cucumber, chickpeas, and dill.",
      "Sprinkle pumpkin seeds on top.",
      "Squeeze lemon juice over everything.",
      "Roll tightly or eat as a deconstructed bowl."
    ],
    "omniOption": {
      "title": "Tuna or salmon wrap option",
      "ingredients": [
        "1 can tuna or 3 oz canned salmon"
      ],
      "steps": [
        "Mix tuna or salmon with lemon juice and pepper, then add before rolling.",
        "Keep sauces dairy-free by using hummus instead of ranch or mayo."
      ]
    }
  },
  {
    "day": 5,
    "type": "dinner",
    "title": "Lemon Herb Tempeh with Roasted Vegetables",
    "time": "40 min",
    "servings": 2,
    "tags": [
      "vegan",
      "high protein",
      "roasted"
    ],
    "ingredients": [
      "8 oz tempeh",
      "2 cups zucchini and carrots",
      "1 cup cooked farro or quinoa",
      "1 tbsp olive oil",
      "1 lemon",
      "1 tsp oregano",
      "1 garlic clove"
    ],
    "steps": [
      "Slice tempeh into strips.",
      "Marinate tempeh with lemon juice, garlic, oregano, and olive oil for 10 minutes.",
      "Roast vegetables at 425\u00b0F for 25 minutes.",
      "Pan-sear tempeh 3 to 4 minutes per side.",
      "Serve tempeh and vegetables over farro or quinoa."
    ],
    "omniOption": {
      "title": "White fish option",
      "ingredients": [
        "4 oz cod, halibut, or tilapia"
      ],
      "steps": [
        "Season fish with lemon, oregano, garlic, and pepper.",
        "Bake at 400\u00b0F for 10 to 14 minutes and serve with the same vegetables."
      ]
    }
  },
  {
    "day": 6,
    "type": "breakfast",
    "title": "Sweet Potato Breakfast Hash",
    "time": "25 min",
    "servings": 1,
    "tags": [
      "vegan",
      "savory",
      "filling"
    ],
    "ingredients": [
      "1 small sweet potato",
      "1/2 cup black beans",
      "1 cup spinach",
      "1/2 bell pepper",
      "1/4 avocado",
      "1 tsp smoked paprika",
      "1 lime"
    ],
    "steps": [
      "Dice sweet potato small so it cooks quickly.",
      "Saut\u00e9 sweet potato with a splash of water and smoked paprika for 10 minutes.",
      "Add bell pepper and cook 4 more minutes.",
      "Stir in black beans and spinach until warm.",
      "Top with avocado and lime juice."
    ],
    "omniOption": {
      "title": "Smoked salmon hash option",
      "ingredients": [
        "2 to 3 oz smoked salmon"
      ],
      "steps": [
        "Flake smoked salmon over the finished hash right before serving.",
        "Skip cheese and sour cream to keep the reset dairy-free."
      ]
    }
  },
  {
    "day": 6,
    "type": "lunch",
    "title": "Edamame Soba Noodle Salad",
    "time": "20 min",
    "servings": 1,
    "tags": [
      "vegan",
      "ginger",
      "plant protein"
    ],
    "ingredients": [
      "2 oz soba noodles",
      "1/2 cup shelled edamame",
      "1 cup shredded cabbage",
      "1/2 cup carrots",
      "1 tbsp tamari",
      "1 tbsp rice vinegar",
      "1 tsp grated ginger"
    ],
    "steps": [
      "Cook soba noodles according to package directions.",
      "Rinse noodles under cool water.",
      "Toss noodles with edamame, cabbage, and carrots.",
      "Whisk tamari, rice vinegar, ginger, and a splash of water.",
      "Pour dressing over the salad and toss."
    ],
    "omniOption": {
      "title": "Salmon noodle salad option",
      "ingredients": [
        "3 to 4 oz cooked salmon"
      ],
      "steps": [
        "Flake cooked salmon over the finished salad.",
        "Use baked or grilled salmon, not fried or breaded."
      ]
    }
  },
  {
    "day": 6,
    "type": "dinner",
    "title": "Mushroom Walnut Lentil Bolognese",
    "time": "40 min",
    "servings": 2,
    "tags": [
      "vegan",
      "comfort food",
      "high fiber"
    ],
    "ingredients": [
      "1 cup cooked lentils",
      "1 cup chopped mushrooms",
      "1/4 cup chopped walnuts",
      "1 cup crushed tomatoes",
      "2 cups zucchini noodles or whole grain pasta",
      "2 garlic cloves",
      "1 tsp Italian seasoning"
    ],
    "steps": [
      "Saut\u00e9 garlic and mushrooms for 6 minutes.",
      "Add lentils, walnuts, tomatoes, and Italian seasoning.",
      "Simmer 20 minutes until thick.",
      "Cook zucchini noodles or whole grain pasta.",
      "Spoon sauce over noodles and top with basil."
    ],
    "omniOption": {
      "title": "Tuna bolognese option",
      "ingredients": [
        "1 can tuna in olive oil"
      ],
      "steps": [
        "Drain tuna and stir into the sauce after the tomatoes have simmered.",
        "Use tuna instead of walnuts or alongside the lentils."
      ]
    }
  },
  {
    "day": 7,
    "type": "breakfast",
    "title": "Overnight Golden Oats",
    "time": "8 min plus chill",
    "servings": 1,
    "tags": [
      "vegan",
      "make ahead",
      "turmeric"
    ],
    "ingredients": [
      "1/2 cup oats",
      "1 cup unsweetened soy milk",
      "1 tbsp chia seeds",
      "1/2 tsp turmeric",
      "1/2 tsp cinnamon",
      "1/2 cup berries",
      "1 tbsp almond butter"
    ],
    "steps": [
      "Add oats, milk, chia, turmeric, and cinnamon to a jar.",
      "Stir very well.",
      "Refrigerate overnight.",
      "Top with berries and almond butter in the morning.",
      "Add a splash of milk if too thick."
    ],
    "omniOption": {
      "title": "Keep it plant-based",
      "ingredients": [],
      "steps": [
        "This works best as a vegan breakfast.",
        "Use soy milk for extra protein and keep it unsweetened."
      ]
    }
  },
  {
    "day": 7,
    "type": "lunch",
    "title": "Roasted Cauliflower Tahini Plate",
    "time": "35 min",
    "servings": 1,
    "tags": [
      "vegan",
      "tahini",
      "Mediterranean"
    ],
    "ingredients": [
      "2 cups cauliflower florets",
      "1/2 cup chickpeas",
      "1 cup greens",
      "1/2 cup cooked quinoa",
      "1 tbsp tahini",
      "1 lemon",
      "1 garlic clove",
      "1 tsp cumin"
    ],
    "steps": [
      "Toss cauliflower and chickpeas with cumin and a little olive oil.",
      "Roast at 425\u00b0F for 25 minutes.",
      "Whisk tahini, lemon, garlic, and water into a sauce.",
      "Layer greens, quinoa, cauliflower, and chickpeas in a bowl.",
      "Drizzle with tahini sauce."
    ],
    "omniOption": {
      "title": "Baked salmon shawarma-style option",
      "ingredients": [
        "3 to 4 oz salmon fillet"
      ],
      "steps": [
        "Season salmon with cumin, paprika, garlic, and lemon.",
        "Bake at 400°F for 12 to 14 minutes and flake over the plate."
      ]
    }
  },
  {
    "day": 7,
    "type": "dinner",
    "title": "Ginger Garlic Veggie Stir-Fry",
    "time": "25 min",
    "servings": 2,
    "tags": [
      "vegan",
      "quick",
      "ginger"
    ],
    "ingredients": [
      "1 block tofu",
      "2 cups mixed vegetables",
      "1 cup cooked brown rice",
      "1 tbsp tamari",
      "1 tsp ginger",
      "2 garlic cloves",
      "1 tsp sesame seeds"
    ],
    "steps": [
      "Cube tofu and sear in a skillet until golden.",
      "Remove tofu and add vegetables to the skillet.",
      "Stir-fry vegetables with garlic and ginger for 5 to 7 minutes.",
      "Add tofu back with tamari and a splash of water.",
      "Serve over brown rice with sesame seeds."
    ],
    "omniOption": {
      "title": "Shrimp stir-fry option",
      "ingredients": [
        "4 oz shrimp, peeled and deveined"
      ],
      "steps": [
        "Cook shrimp separately in the skillet for 2 to 3 minutes per side.",
        "Add back at the end with tamari and vegetables."
      ]
    }
  },
  {
    "day": 8,
    "type": "breakfast",
    "title": "Banana Almond Flax Toast",
    "time": "8 min",
    "servings": 1,
    "tags": [
      "vegan",
      "quick",
      "simple"
    ],
    "ingredients": [
      "1 slice sprouted or whole grain bread",
      "1 tbsp almond butter",
      "1/2 banana",
      "1 tbsp ground flaxseed",
      "1/2 tsp cinnamon",
      "1/2 cup berries on the side"
    ],
    "steps": [
      "Toast the bread until crisp.",
      "Spread almond butter evenly over the toast.",
      "Add banana slices.",
      "Sprinkle with flaxseed and cinnamon.",
      "Serve with berries on the side."
    ],
    "omniOption": {
      "title": "Add eggs if needed",
      "ingredients": [
        "1 to 2 boiled eggs optional"
      ],
      "steps": [
        "Add boiled eggs on the side for more protein.",
        "Avoid butter and dairy-based spreads."
      ]
    }
  },
  {
    "day": 8,
    "type": "lunch",
    "title": "Detox Rainbow Salad with Tofu",
    "time": "25 min",
    "servings": 1,
    "tags": [
      "vegan",
      "colorful",
      "crunchy"
    ],
    "ingredients": [
      "2 cups mixed greens",
      "1/2 cup baked tofu",
      "1/2 cup shredded beets or carrots",
      "1/2 cup cucumber",
      "1/4 avocado",
      "1 tbsp hemp seeds",
      "1 tbsp lemon-tahini sauce"
    ],
    "steps": [
      "Add greens to a large bowl.",
      "Layer tofu, beets or carrots, cucumber, and avocado.",
      "Sprinkle hemp seeds on top.",
      "Drizzle with lemon-tahini sauce.",
      "Toss gently right before eating."
    ],
    "omniOption": {
      "title": "Salmon salad option",
      "ingredients": [
        "3 to 4 oz baked salmon"
      ],
      "steps": [
        "Replace tofu with baked salmon.",
        "Keep dressing dairy-free and use lemon, tahini, or olive oil."
      ]
    }
  },
  {
    "day": 8,
    "type": "dinner",
    "title": "Tuscan White Bean Skillet",
    "time": "28 min",
    "servings": 2,
    "tags": [
      "vegan",
      "one pan",
      "comfort"
    ],
    "ingredients": [
      "1 can white beans",
      "2 cups spinach",
      "1 cup cherry tomatoes",
      "1/2 cup vegetable broth",
      "2 garlic cloves",
      "1 tsp Italian seasoning",
      "1 tbsp nutritional yeast"
    ],
    "steps": [
      "Saut\u00e9 garlic and tomatoes until tomatoes soften.",
      "Add white beans, broth, and Italian seasoning.",
      "Simmer 10 to 12 minutes.",
      "Stir in spinach until wilted.",
      "Finish with nutritional yeast and black pepper."
    ],
    "omniOption": {
      "title": "White fish skillet option",
      "ingredients": [
        "4 oz cod or tilapia fillet"
      ],
      "steps": [
        "Season fish with garlic, lemon, and Italian seasoning.",
        "Pan-sear 3 to 4 minutes per side and serve alongside the bean skillet."
      ]
    }
  },
  {
    "day": 9,
    "type": "breakfast",
    "title": "Citrus Berry Quinoa Breakfast Bowl",
    "time": "15 min",
    "servings": 1,
    "tags": [
      "vegan",
      "gluten-free",
      "bright"
    ],
    "ingredients": [
      "3/4 cup cooked quinoa",
      "1/2 orange, segmented",
      "1/2 cup berries",
      "1 tbsp chia seeds",
      "1 tbsp pistachios",
      "1/2 cup warm soy milk",
      "1/2 tsp cinnamon"
    ],
    "steps": [
      "Warm cooked quinoa with soy milk and cinnamon.",
      "Spoon quinoa into a bowl.",
      "Top with orange segments and berries.",
      "Sprinkle chia seeds and pistachios over the top.",
      "Serve warm or chilled."
    ],
    "omniOption": {
      "title": "No fish needed",
      "ingredients": [],
      "steps": [
        "This meal is intentionally plant-based and light.",
        "For extra protein, add pea protein stirred into the soy milk."
      ]
    }
  },
  {
    "day": 9,
    "type": "lunch",
    "title": "Split Pea and Carrot Soup",
    "time": "45 min",
    "servings": 2,
    "tags": [
      "vegan",
      "high fiber",
      "one pot"
    ],
    "ingredients": [
      "1 cup dry split peas",
      "2 carrots",
      "1 celery stalk",
      "1/2 onion",
      "4 cups vegetable broth",
      "1 bay leaf",
      "1 tsp thyme"
    ],
    "steps": [
      "Saut\u00e9 onion, carrots, and celery for 5 minutes.",
      "Add split peas, broth, bay leaf, and thyme.",
      "Simmer 35 minutes until peas are soft.",
      "Remove bay leaf and lightly mash for texture.",
      "Serve with black pepper and lemon."
    ],
    "omniOption": {
      "title": "White fish soup option",
      "ingredients": [
        "3 oz cod or halibut fillet"
      ],
      "steps": [
        "Add fish to the simmering soup during the last 6 minutes and let it flake.",
        "Avoid ham or bacon, which are processed meats."
      ]
    }
  },
  {
    "day": 9,
    "type": "dinner",
    "title": "Sheet Pan Tofu Fajitas",
    "time": "35 min",
    "servings": 2,
    "tags": [
      "vegan",
      "sheet pan",
      "easy"
    ],
    "ingredients": [
      "1 block tofu",
      "2 bell peppers",
      "1 onion",
      "1 tsp chili powder",
      "1 tsp cumin",
      "Corn tortillas or brown rice",
      "1 avocado",
      "1 lime"
    ],
    "steps": [
      "Press tofu and slice into strips.",
      "Slice peppers and onion.",
      "Toss tofu and vegetables with spices and a small amount of olive oil.",
      "Bake at 425\u00b0F for 25 minutes.",
      "Serve with tortillas or brown rice, avocado, and lime."
    ],
    "omniOption": {
      "title": "Shrimp fajita option",
      "ingredients": [
        "4 oz shrimp, peeled and deveined"
      ],
      "steps": [
        "Toss shrimp with the same fajita spices as the tofu.",
        "Add to the sheet pan for the last 8 minutes so they do not overcook."
      ]
    }
  },
  {
    "day": 10,
    "type": "breakfast",
    "title": "Carrot Cake Oat Bowl",
    "time": "15 min",
    "servings": 1,
    "tags": [
      "vegan",
      "oats",
      "cozy"
    ],
    "ingredients": [
      "1/2 cup oats",
      "1 cup unsweetened soy milk",
      "1/2 cup grated carrot",
      "1 tbsp raisins optional",
      "1 tbsp walnuts",
      "1 tbsp ground flaxseed",
      "1/2 tsp cinnamon"
    ],
    "steps": [
      "Cook oats, soy milk, grated carrot, and cinnamon in a pot.",
      "Stir for 7 to 8 minutes until creamy.",
      "Add ground flaxseed after cooking.",
      "Top with walnuts and raisins if using.",
      "Serve warm."
    ],
    "omniOption": {
      "title": "Keep it dairy-free",
      "ingredients": [],
      "steps": [
        "Use soy milk instead of dairy milk.",
        "Do not add cream cheese-style toppings during the reset."
      ]
    }
  },
  {
    "day": 10,
    "type": "lunch",
    "title": "Avocado Chickpea Lettuce Cups",
    "time": "15 min",
    "servings": 1,
    "tags": [
      "vegan",
      "no cook",
      "fresh"
    ],
    "ingredients": [
      "1/2 cup chickpeas",
      "1/2 avocado",
      "1 tbsp lemon juice",
      "1 celery stalk",
      "Romaine leaves",
      "1 tbsp pumpkin seeds",
      "Fresh dill or parsley"
    ],
    "steps": [
      "Mash chickpeas and avocado together in a bowl.",
      "Stir in lemon juice, celery, herbs, and black pepper.",
      "Spoon mixture into romaine leaves.",
      "Top with pumpkin seeds.",
      "Serve with fruit or a side salad."
    ],
    "omniOption": {
      "title": "Tuna avocado cups",
      "ingredients": [
        "1 can tuna"
      ],
      "steps": [
        "Mix tuna with avocado, lemon, celery, and herbs.",
        "Use tuna instead of chickpeas or use half and half."
      ]
    }
  },
  {
    "day": 10,
    "type": "dinner",
    "title": "Moroccan Lentil Sweet Potato Stew",
    "time": "40 min",
    "servings": 2,
    "tags": [
      "vegan",
      "spiced",
      "one pot"
    ],
    "ingredients": [
      "1 cup lentils",
      "1 sweet potato",
      "1 cup crushed tomatoes",
      "3 cups vegetable broth",
      "1 tsp cumin",
      "1/2 tsp cinnamon",
      "1/2 tsp turmeric",
      "2 cups spinach"
    ],
    "steps": [
      "Dice sweet potato into small cubes.",
      "Add lentils, sweet potato, tomatoes, broth, and spices to a pot.",
      "Simmer 30 minutes until lentils and sweet potato are tender.",
      "Stir in spinach at the end.",
      "Serve with lemon and herbs."
    ],
    "omniOption": {
      "title": "Cod or salmon stew option",
      "ingredients": [
        "4 oz cod or salmon fillet"
      ],
      "steps": [
        "Add fish during the last 8 minutes of simmering.",
        "It will flake into the stew — no need to pre-cook."
      ]
    }
  },
  {
    "day": 11,
    "type": "breakfast",
    "title": "Peanut Butter Cacao Recovery Smoothie",
    "time": "7 min",
    "servings": 1,
    "tags": [
      "vegan",
      "smoothie",
      "protein"
    ],
    "ingredients": [
      "1 banana",
      "1 tbsp natural peanut butter",
      "1 tbsp cacao powder",
      "1 scoop pea protein",
      "1 tbsp chia seeds",
      "1 cup unsweetened soy milk",
      "Handful spinach optional"
    ],
    "steps": [
      "Add soy milk to the blender.",
      "Add banana, peanut butter, cacao, protein, chia, and spinach.",
      "Blend until smooth.",
      "Add ice for a thicker texture.",
      "Serve immediately."
    ],
    "omniOption": {
      "title": "Keep it dairy-free",
      "ingredients": [],
      "steps": [
        "Avoid whey protein during this reset.",
        "Use pea protein and unsweetened soy milk for protein."
      ]
    }
  },
  {
    "day": 11,
    "type": "lunch",
    "title": "Roasted Beet Lentil Bowl",
    "time": "40 min",
    "servings": 1,
    "tags": [
      "vegan",
      "earthy",
      "meal prep"
    ],
    "ingredients": [
      "1 cup cooked lentils",
      "1 beet or pre-cooked beets",
      "2 cups arugula",
      "1/2 cup cooked quinoa",
      "1 tbsp walnuts",
      "1 tbsp balsamic vinegar",
      "1 tsp olive oil"
    ],
    "steps": [
      "Roast diced beet at 400\u00b0F for 30 minutes or use pre-cooked beets.",
      "Add arugula to a bowl.",
      "Layer quinoa, lentils, and beets.",
      "Whisk balsamic vinegar and olive oil.",
      "Drizzle dressing and top with walnuts."
    ],
    "omniOption": {
      "title": "Salmon beet bowl option",
      "ingredients": [
        "3 to 4 oz baked or grilled salmon"
      ],
      "steps": [
        "Flake or slice salmon over the finished bowl.",
        "Keep the lentils for extra fiber, or reduce them by half."
      ]
    }
  },
  {
    "day": 11,
    "type": "dinner",
    "title": "Coconut Ginger Tofu Soup",
    "time": "30 min",
    "servings": 2,
    "tags": [
      "vegan",
      "ginger",
      "comfort"
    ],
    "ingredients": [
      "1 block tofu",
      "3 cups vegetable broth",
      "1/2 cup light coconut milk",
      "1 cup mushrooms",
      "1 cup bok choy or spinach",
      "1 tsp ginger",
      "2 garlic cloves",
      "1 tbsp lime juice"
    ],
    "steps": [
      "Saut\u00e9 garlic and ginger for 1 minute.",
      "Add mushrooms and cook 4 minutes.",
      "Add broth, coconut milk, and cubed tofu.",
      "Simmer 12 minutes.",
      "Stir in greens and lime juice before serving."
    ],
    "omniOption": {
      "title": "White fish ginger soup option",
      "ingredients": [
        "4 oz cod or tilapia fillet"
      ],
      "steps": [
        "Add fish to the simmering broth and coconut milk for the last 7 minutes.",
        "Use fish instead of tofu or combine both for extra protein."
      ]
    }
  },
  {
    "day": 12,
    "type": "breakfast",
    "title": "Mango Turmeric Smoothie Bowl",
    "time": "10 min",
    "servings": 1,
    "tags": [
      "vegan",
      "turmeric",
      "bright"
    ],
    "ingredients": [
      "1 cup frozen mango",
      "1/2 banana",
      "1/2 tsp turmeric",
      "1 tbsp hemp seeds",
      "1 scoop pea protein",
      "3/4 cup unsweetened almond milk",
      "1 tbsp coconut flakes optional"
    ],
    "steps": [
      "Blend mango, banana, turmeric, protein, hemp seeds, and almond milk.",
      "Blend until thick and smooth.",
      "Pour into a bowl.",
      "Top with coconut flakes if using.",
      "Add berries for extra color."
    ],
    "omniOption": {
      "title": "No animal add-on needed",
      "ingredients": [],
      "steps": [
        "This breakfast is best kept fully vegan.",
        "For more protein, use soy milk instead of almond milk."
      ]
    }
  },
  {
    "day": 12,
    "type": "lunch",
    "title": "Greek-Inspired Tofu Salad, No Dairy",
    "time": "20 min",
    "servings": 1,
    "tags": [
      "vegan",
      "Mediterranean",
      "fresh"
    ],
    "ingredients": [
      "1/2 block baked tofu",
      "2 cups romaine",
      "1 cup cucumber and tomato",
      "1/4 cup olives",
      "1/2 cup chickpeas",
      "1 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tsp oregano"
    ],
    "steps": [
      "Chop romaine, cucumber, and tomato.",
      "Add chickpeas, olives, and baked tofu.",
      "Whisk olive oil, lemon juice, oregano, and pepper.",
      "Pour dressing over the salad.",
      "Toss and serve chilled."
    ],
    "omniOption": {
      "title": "Grilled fish Greek salad option",
      "ingredients": [
        "3 to 4 oz grilled white fish or tuna steak"
      ],
      "steps": [
        "Use grilled fish instead of tofu.",
        "Skip feta to keep it dairy-free."
      ]
    }
  },
  {
    "day": 12,
    "type": "dinner",
    "title": "Walnut Pesto Zucchini Noodles with Beans",
    "time": "25 min",
    "servings": 2,
    "tags": [
      "vegan",
      "herby",
      "low dairy"
    ],
    "ingredients": [
      "3 cups zucchini noodles",
      "1 can cannellini beans",
      "1 cup basil",
      "1/4 cup walnuts",
      "1 garlic clove",
      "1 tbsp olive oil",
      "1 tbsp lemon juice",
      "2 tbsp nutritional yeast"
    ],
    "steps": [
      "Blend basil, walnuts, garlic, olive oil, lemon, nutritional yeast, and water into pesto.",
      "Warm beans in a skillet.",
      "Add zucchini noodles and cook 2 to 3 minutes.",
      "Toss with walnut pesto.",
      "Serve immediately so noodles do not get watery."
    ],
    "omniOption": {
      "title": "Grilled fish pesto plate",
      "ingredients": [
        "4 oz grilled white fish"
      ],
      "steps": [
        "Grill or bake white fish with lemon and pepper.",
        "Serve fish beside the pesto zucchini noodles."
      ]
    }
  },
  {
    "day": 13,
    "type": "breakfast",
    "title": "Warm Berry Buckwheat Bowl",
    "time": "18 min",
    "servings": 1,
    "tags": [
      "vegan",
      "gluten-free",
      "fiber"
    ],
    "ingredients": [
      "1/2 cup buckwheat groats",
      "1 cup unsweetened soy milk",
      "1/2 cup berries",
      "1 tbsp chia seeds",
      "1 tbsp almond butter",
      "1/2 tsp cinnamon"
    ],
    "steps": [
      "Rinse buckwheat groats.",
      "Simmer buckwheat with soy milk and cinnamon for 12 to 15 minutes.",
      "Stir in chia seeds.",
      "Top with warm berries and almond butter.",
      "Serve warm."
    ],
    "omniOption": {
      "title": "Keep it plant-based",
      "ingredients": [],
      "steps": [
        "Buckwheat is naturally gluten-free and filling.",
        "Soy milk keeps the bowl higher in protein without dairy."
      ]
    }
  },
  {
    "day": 13,
    "type": "lunch",
    "title": "Spicy Peanut Tempeh Bowl",
    "time": "30 min",
    "servings": 1,
    "tags": [
      "vegan",
      "high protein",
      "spicy"
    ],
    "ingredients": [
      "4 oz tempeh",
      "1 cup cooked brown rice",
      "1 cup broccoli",
      "1/2 cup shredded carrots",
      "1 tbsp peanut butter",
      "1 tbsp tamari",
      "1 tsp lime juice",
      "1 tsp ginger"
    ],
    "steps": [
      "Steam or roast broccoli until tender.",
      "Slice tempeh and pan-sear until golden.",
      "Whisk peanut butter, tamari, lime, ginger, and water into a sauce.",
      "Layer rice, broccoli, carrots, and tempeh in a bowl.",
      "Drizzle peanut sauce over the top."
    ],
    "omniOption": {
      "title": "Shrimp peanut bowl option",
      "ingredients": [
        "3 to 4 oz shrimp, peeled and deveined"
      ],
      "steps": [
        "Cook shrimp with ginger and tamari, then use instead of tempeh.",
        "Keep the peanut sauce dairy-free and light."
      ]
    }
  },
  {
    "day": 13,
    "type": "dinner",
    "title": "Mediterranean Salmon-Style Vegan Plate",
    "time": "35 min",
    "servings": 2,
    "tags": [
      "vegan",
      "omega-3",
      "hearty"
    ],
    "ingredients": [
      "1 block tofu",
      "1 cup quinoa",
      "2 cups asparagus or green beans",
      "1 tbsp ground flaxseed",
      "1 lemon",
      "1 tsp dill",
      "1 garlic clove",
      "1 tsp olive oil"
    ],
    "steps": [
      "Press tofu and slice into thick slabs.",
      "Season tofu with lemon, dill, garlic, olive oil, and pepper.",
      "Bake tofu at 400\u00b0F for 25 minutes.",
      "Steam asparagus or green beans.",
      "Serve tofu with quinoa and vegetables, sprinkled with flaxseed."
    ],
    "omniOption": {
      "title": "Salmon dinner option",
      "ingredients": [
        "4 oz salmon fillet"
      ],
      "steps": [
        "Use salmon instead of tofu with the same lemon-dill seasoning.",
        "Bake salmon at 400\u00b0F for 12 to 15 minutes."
      ]
    }
  },
  {
    "day": 14,
    "type": "breakfast",
    "title": "Reset Finale Breakfast Bowl",
    "time": "15 min",
    "servings": 1,
    "tags": [
      "vegan",
      "balanced",
      "final day"
    ],
    "ingredients": [
      "1/2 cup oats",
      "1 cup soy milk",
      "1/2 cup blueberries",
      "1 tbsp chia seeds",
      "1 tbsp hemp seeds",
      "1 tbsp almond butter",
      "1/2 tsp cinnamon"
    ],
    "steps": [
      "Cook oats with soy milk until creamy.",
      "Stir in cinnamon and chia seeds.",
      "Top with blueberries, hemp seeds, and almond butter.",
      "Let sit 2 minutes so chia thickens.",
      "Serve warm and note how energy feels compared with Day 1."
    ],
    "omniOption": {
      "title": "Optional egg side",
      "ingredients": [
        "1 to 2 boiled eggs optional"
      ],
      "steps": [
        "Add eggs on the side only if he wants a non-vegan protein boost.",
        "Keep the main bowl fully dairy-free."
      ]
    }
  },
  {
    "day": 14,
    "type": "lunch",
    "title": "Everything-Good Reset Salad",
    "time": "20 min",
    "servings": 1,
    "tags": [
      "vegan",
      "rainbow",
      "final day"
    ],
    "ingredients": [
      "2 cups greens",
      "1/2 cup chickpeas",
      "1/2 cup lentils",
      "1/2 avocado",
      "1/2 cup cucumber and tomato",
      "1 tbsp pumpkin seeds",
      "1 tbsp tahini-lemon sauce"
    ],
    "steps": [
      "Add greens to a large bowl.",
      "Layer chickpeas, lentils, cucumber, tomato, and avocado.",
      "Sprinkle pumpkin seeds on top.",
      "Drizzle tahini-lemon sauce over everything.",
      "Toss and serve with fruit on the side."
    ],
    "omniOption": {
      "title": "Tuna or salmon final bowl",
      "ingredients": [
        "3 oz canned tuna or flaked salmon"
      ],
      "steps": [
        "Add tuna or salmon on top if desired.",
        "Keep chickpeas or lentils for fiber and reduce the portion if needed."
      ]
    }
  },
  {
    "day": 14,
    "type": "dinner",
    "title": "Celebration Veggie Chili",
    "time": "45 min",
    "servings": 3,
    "tags": [
      "vegan",
      "batch cook",
      "comfort"
    ],
    "ingredients": [
      "1 can black beans",
      "1 can kidney beans",
      "1 cup crushed tomatoes",
      "1 bell pepper",
      "1/2 onion",
      "1 cup corn optional",
      "1 tsp chili powder",
      "1 tsp cumin"
    ],
    "steps": [
      "Saut\u00e9 onion and bell pepper for 5 minutes.",
      "Add chili powder and cumin and stir for 30 seconds.",
      "Add beans, tomatoes, corn, and a splash of water.",
      "Simmer 30 minutes until thick.",
      "Serve with avocado, cilantro, and lime."
    ],
    "omniOption": {
      "title": "Shrimp chili option",
      "ingredients": [
        "4 oz shrimp, peeled and deveined"
      ],
      "steps": [
        "Add shrimp during the last 5 minutes of simmering — they cook fast.",
        "Use shrimp alongside the beans for extra protein without replacing them."
      ]
    }
  }
] satisfies Meal[];

export const snacks = [
  {
    "title": "Apple slices with almond butter",
    "why": "Fiber, healthy fat, and steady energy."
  },
  {
    "title": "Carrots and cucumber with hummus",
    "why": "Crunchy, filling, dairy-free, and easy to prep."
  },
  {
    "title": "Blueberries with walnuts",
    "why": "Berries plus omega-3-rich nuts."
  },
  {
    "title": "Roasted chickpeas",
    "why": "High-fiber salty snack without chips."
  },
  {
    "title": "Edamame with lemon and black pepper",
    "why": "Plant protein and minerals."
  },
  {
    "title": "Chia pudding mini cup",
    "why": "Make-ahead omega-3 snack."
  },
  {
    "title": "Avocado rice cake",
    "why": "Simple healthy fat and fiber."
  },
  {
    "title": "Trail mix with walnuts, pumpkin seeds, and dried cherries",
    "why": "Portable, but keep the portion small."
  },
  {
    "title": "Orange slices and pistachios",
    "why": "Vitamin C with satisfying crunch."
  },
  {
    "title": "Celery with peanut butter",
    "why": "Classic, cheap, and filling."
  },
  {
    "title": "Green smoothie mini serving",
    "why": "Good when cravings hit."
  },
  {
    "title": "Coconut yogurt, unsweetened, with berries",
    "why": "Dairy-free option; choose low/no sugar."
  },
  {
    "title": "Seaweed snacks and edamame",
    "why": "Plant-based iodine plus protein."
  },
  {
    "title": "Sweet potato wedges",
    "why": "Great if he wants something warm and starchy."
  },
  {
    "title": "Dates stuffed with almond butter",
    "why": "Dessert-like; keep to 1 or 2 dates."
  },
  {
    "title": "Bell peppers with guacamole",
    "why": "Colorful, crunchy, and satisfying."
  },
  {
    "title": "Miso broth with tofu cubes",
    "why": "Warm savory snack; watch sodium if needed."
  },
  {
    "title": "Pear with hemp seeds",
    "why": "Fiber plus plant protein."
  },
  {
    "title": "Air-popped popcorn with turmeric and pepper",
    "why": "Whole-grain snack without butter."
  },
  {
    "title": "Leftover soup cup",
    "why": "The easiest anti-inflammatory snack is planned leftovers."
  }
] satisfies Snack[];

export function getMealsByDay(day: number) {
  return mealPlan.filter((meal) => meal.day === day);
}

export function getMeal(day: number, type: MealType) {
  return mealPlan.find((meal) => meal.day === day && meal.type === type);
}

export const resetRules = [
  "No dairy, alcohol, refined sugar, fried food, or processed meat.",
  "Build every meal around plants, fiber, protein, and healthy fat.",
  "Use olive oil, tahini, avocado, nuts, seeds, herbs, ginger, garlic, and turmeric.",
  "Optional fatty fish (salmon, sardines, mackerel, cod) is allowed, but the base plan stays fully vegan.",
  "Track meals, water, mood, digestion, cravings, sleep, and inflammation symptoms."
];
