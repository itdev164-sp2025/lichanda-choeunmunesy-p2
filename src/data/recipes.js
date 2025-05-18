const recipes = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    image: "/images/carbonnara.jpg",
    time: 30,
    difficulty: "Medium",
    category: "dinner",
    dietaryTags: ["nut-free"],
    servings: 4,
    ingredients: [
      { name: "Spaghetti", amount: "400g" },
      { name: "Pancetta", amount: "150g" },
      { name: "Eggs", amount: "4 large" },
      { name: "Parmesan cheese", amount: "100g" },
      { name: "Black pepper", amount: "to taste" },
      { name: "Salt", amount: "to taste" }
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook the spaghetti.",
      "While the pasta is cooking, cook the pancetta until crispy.",
      "Beat the eggs and cheese in a bowl.",
      "Drain the pasta and add to the pancetta.",
      "Remove from heat and add the egg mixture, stirring quickly.",
      "Serve with extra cheese and black pepper."
    ],
    nutritionalInfo: {
      calories: 450,
      protein: 22,
      carbs: 56,
      fat: 18
    }
  },
  {
    id: 2,
    title: "Vegetarian Buddha Bowl",
    image: "/images/buddha-bowl-recipe.jpg",
    time: 45,
    difficulty: "Easy",
    category: "lunch",
    dietaryTags: ["vegetarian", "gluten-free"],
    servings: 2,
    ingredients: [
      { name: "Quinoa", amount: "1 cup" },
      { name: "Sweet potato", amount: "1 medium" },
      { name: "Chickpeas", amount: "1 can" },
      { name: "Avocado", amount: "1" },
      { name: "Kale", amount: "2 cups" }
    ],
    instructions: [
      "Cook quinoa according to package instructions.",
      "Roast sweet potato and chickpeas.",
      "Assemble all ingredients in a bowl.",
      "Add dressing of choice."
    ],
    nutritionalInfo: {
      calories: 520,
      protein: 18,
      carbs: 65,
      fat: 22
    }
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    image: "/images/chocolate-chip-cookie-recipe.jpg",
    time: 25,
    difficulty: "Easy",
    category: "dessert",
    dietaryTags: ["vegetarian"],
    servings: 24,
    ingredients: [
      { name: "All-purpose flour", amount: "2 1/4 cups" },
      { name: "Baking soda", amount: "1 tsp" },
      { name: "Salt", amount: "1 tsp" },
      { name: "Unsalted butter", amount: "1 cup" },
      { name: "Brown sugar", amount: "3/4 cup" },
      { name: "Granulated sugar", amount: "3/4 cup" },
      { name: "Vanilla extract", amount: "1 tsp" },
      { name: "Eggs", amount: "2 large" },
      { name: "Chocolate chips", amount: "2 cups" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "In a small bowl, whisk together flour, baking soda, and salt.",
      "In a large bowl, beat butter, both sugars, and vanilla until creamy.",
      "Add eggs one at a time, beating well after each addition.",
      "Gradually beat in flour mixture, then stir in chocolate chips.",
      "Drop by rounded tablespoon onto ungreased baking sheets.",
      "Bake for 9 to 11 minutes or until golden brown.",
      "Let cool on wire racks before serving."
    ],
    nutritionalInfo: {
      calories: 180,
      protein: 2,
      carbs: 24,
      fat: 10
    }
  },
  {
    id: 4,
    title: "Chicken Stir Fry",
    image: "/images/stir-fry.jpg",
    time: 20,
    difficulty: "Medium",
    category: "dinner",
    dietaryTags: ["dairy-free"],
    servings: 4,
    ingredients: [
      { name: "Chicken breast", amount: "1 lb" },
      { name: "Broccoli", amount: "2 cups" },
      { name: "Bell peppers", amount: "2 medium" },
      { name: "Carrots", amount: "2 medium" },
      { name: "Garlic", amount: "3 cloves" },
      { name: "Ginger", amount: "1 tbsp" },
      { name: "Soy sauce", amount: "1/4 cup" },
      { name: "Sesame oil", amount: "1 tbsp" },
      { name: "Vegetable oil", amount: "2 tbsp" }
    ],
    instructions: [
      "Slice chicken into thin strips and vegetables into bite-sized pieces.",
      "Heat vegetable oil in a wok or large skillet over high heat.",
      "Add garlic and ginger, stir-fry for 30 seconds.",
      "Add chicken and stir-fry until no longer pink.",
      "Add vegetables and stir-fry for 5 minutes until crisp-tender.",
      "Add soy sauce and sesame oil, toss to combine.",
      "Serve hot over rice or noodles."
    ],
    nutritionalInfo: {
      calories: 310,
      protein: 28,
      carbs: 16,
      fat: 14
    }
  },
  {
    id: 5,
    title: "Avocado Toast with Poached Egg",
    image: "/images/poached-egg-and-avocado-toast1.jpg",
    time: 15,
    difficulty: "Easy",
    category: "breakfast",
    dietaryTags: ["vegetarian"],
    servings: 1,
    ingredients: [
      { name: "Whole grain bread", amount: "1 slice" },
      { name: "Ripe avocado", amount: "1/2" },
      { name: "Egg", amount: "1 large" },
      { name: "Lemon juice", amount: "1 tsp" },
      { name: "Red pepper flakes", amount: "1/4 tsp" },
      { name: "Salt and pepper", amount: "to taste" },
      { name: "Fresh herbs (optional)", amount: "for garnish" }
    ],
    instructions: [
      "Toast the bread until golden and crisp.",
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Bring a pot of water to a gentle simmer for poaching.",
      "Crack the egg into a small bowl, then slide it into the simmering water.",
      "Poach for 3-4 minutes until whites are set but yolk is still runny.",
      "Spread mashed avocado on toast and top with the poached egg.",
      "Season with salt, pepper, and red pepper flakes.",
      "Garnish with fresh herbs if desired."
    ],
    nutritionalInfo: {
      calories: 280,
      protein: 12,
      carbs: 15,
      fat: 20
    }
  },
  {
    id: 6,
    title: "Greek Salad",
    image: "/images/greek.jpg",
    time: 15,
    difficulty: "Easy",
    category: "lunch",
    dietaryTags: ["vegetarian", "gluten-free"],
    servings: 4,
    ingredients: [
      { name: "Cucumber", amount: "1 large" },
      { name: "Tomatoes", amount: "4 medium" },
      { name: "Red onion", amount: "1 small" },
      { name: "Green bell pepper", amount: "1 medium" },
      { name: "Kalamata olives", amount: "1/2 cup" },
      { name: "Feta cheese", amount: "200g" },
      { name: "Olive oil", amount: "1/4 cup" },
      { name: "Red wine vinegar", amount: "2 tbsp" },
      { name: "Dried oregano", amount: "1 tsp" },
      { name: "Salt and pepper", amount: "to taste" }
    ],
    instructions: [
      "Chop cucumber, tomatoes, onion, and bell pepper into chunks.",
      "Combine vegetables in a large bowl with olives.",
      "In a small bowl, whisk together olive oil, vinegar, oregano, salt, and pepper.",
      "Pour dressing over the salad and toss gently.",
      "Crumble feta cheese over the top.",
      "Serve immediately or refrigerate for up to 30 minutes before serving."
    ],
    nutritionalInfo: {
      calories: 220,
      protein: 7,
      carbs: 9,
      fat: 18
    }
  }
];

export default recipes;