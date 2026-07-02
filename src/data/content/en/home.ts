import type { HomePageContent } from "../types";

export const homeContent: HomePageContent = {
    hero: {
      videoFallback: "Your browser does not support the video tag.",
    },
    inspiration: {
      breadSliceAlt: "Fresh bread slice",
      title: "What inspires you today?",
      description:
        "Explore all of our products for inspiration throughout your day.",
      cta: "DISCOVER OUR PRODUCTS",
    },
    featuredProducts: [
      {
        title: "Milkology Bread",
        description:
          "Soft, creamy milk-filled bread, perfect for sandwiches, toast, and everyday enjoyment for all ages.",
      },
      {
        title: "Mother's Pride Brioche Loaf",
        description:
          "Rich, buttery brioche loaf crafted for indulgent taste, soft texture, and golden perfection in every slice.",
      },
      {
        title: "Multigrain Bread",
        description:
          "Wholesome multigrain bread packed with seven nutritious seeds, offering hearty flavor and healthy goodness in every bite.",
      },
      {
        title: "Brown Bread",
        description:
          "Nutritious brown bread with no added sugar, offering wholesome taste, soft texture, and perfect balance for meals.",
      },
    ],
    feature: {
      bakedTextAlt: "Baked to feed your soul text",
      bakedTextImage: "/assets/images/baked_text.webp",
      imageAlt: "About Us Image",
      titleLineOne: "Born in Qatar",
      titleLineTwo: "in 1986!",
      description:
        "Rooted in a legacy of craftsmanship, we have grown alongside the Qatar market to become a trusted name in baking excellence. While the industry evolved and competition expanded, our focus remained unchanged delivering consistent quality, refined taste, and products crafted with care. This enduring commitment continues to shape our standards and define who we are today.",
    },
    about: {
      imageAlt: "About London Bakery",
      badgeValue: "100+",
      badgeLabel: "Total Products",
      kicker: "About Us",
      titleLineOne: "At London Bakery,",
      titleLineTwo: "Every Bite Tells a Story",
      description:
        "London Bakery has been established in Qatar to serve our valued customers with premium quality baked goods. Our commitment to excellence and tradition ensures every product meets the highest standards of taste and quality.",
      features: [
        {
          imageAlt: "Feature point 1",
          title: "Premium Ingredients & Certified Quality",
          description: "Made with the best, baked to perfection.",
        },
        {
          imageAlt: "Feature point 2",
          title: "Hygienic Production & Trusted Sources",
          description: "Clean process, reliable ingredients.",
        },
        {
          title: "Trusted Quality for Healthier Food Solutions",
        },
      ],
    },
    recipes: {
      kicker: "Our Recipes",
      titleLineOne: "Where Every Recipe",
      titleLineTwo: "Begins with Care",
      instructionPrefix: "To make our classic",
      nutritionLabels: {
        calories: "Calories:",
        fat: "Fat:",
        protein: "Protein:",
        carbohydrates: "Carbohydrates:",
        fiber: "Fiber:",
        sugar: "Sugar:",
      },
      items: [
        {
          id: "white-bread",
          name: "White Bread",
          title: "White Bread",
          instructions: [
            "Mix wheat flour, water, sugar, vegetable fat, and milk powder",
            "Add yeast, salt, and emulsifiers for dough development",
            "Knead until smooth and let rise until doubled",
            "Shape into loaf and proof again",
            "Bake at 375°F for 35-40 minutes until golden",
            "Cool completely before slicing",
          ],
          nutrition: {
            calories: {
              value: "320",
              unit: "kcal",
            },
            fat: "8.21g",
            protein: "7.1g",
            carbohydrates: "53.01g",
            fiber: "3.8g",
            sugar: "3g",
          },
        },
        {
          id: "muffin-vanilla",
          name: "Vanilla Keksy Muffin",
          title: "Vanilla Keksy Muffin",
          instructions: [
            "Mix wheat flour, sugar, butter, eggs, and water together.",
            "Add vanilla flavor and gently fold the wet ingredients into the dry ingredients.",
            "Fill the muffin cups to about 2/5 full.",
            "Bake at 375°F for 18-20 minutes until perfectly baked.",
          ],
          nutrition: {
            calories: {
              value: "415",
              unit: "kcal",
            },
            fat: "17.95g",
            protein: "6.66g",
            carbohydrates: "54.26g",
            fiber: "1.85g",
            sugar: "22g",
          },
        },
        {
          id: "muffin-choco",
          name: "Choco Keksy Muffin",
          title: "Choco Keksy Muffin",
          instructions: [
            "Mix wheat flour, sugar, cocoa powder, egg, butter, water",
            "Mix until just combined",
            "Fill in cups",
            "Bake at 375°F For 20-22 minutes",
          ],
          nutrition: {
            calories: {
              value: "402",
              unit: "kcal",
            },
            fat: "17.64g",
            protein: "6.99g",
            carbohydrates: "50.21g",
            fiber: "2.8g",
            sugar: "28g",
          },
        },
        {
          id: "krem-bun",
          name: "Krem Bun",
          title: "Krem Bun",
          instructions: [
            "Prepare dough with wheat flour, water, and sugar. Add butter and milk powder. Incorporate yeast.",
            "Let rise until doubled in size. Shape into buns and bake until golden. Fill with cream when cooled.",
          ],
          nutrition: {
            calories: {
              value: "320",
              unit: "kcal",
            },
            fat: "8.21g",
            protein: "7.1g",
            carbohydrates: "53.01g",
            fiber: "3.8g",
            sugar: "20g",
          },
        },
        {
          id: "keksy-vanille",
          name: "Vanille Keksy",
          title: "Vanille Keksy",
          instructions: [
            "Combine oil, wheat flour, eggs and vanilla essence, add baking powder and mix well.",
            "Fill the batter into baking cups, and bake at 350°F until the edges are set.",
          ],
          nutrition: {
            calories: {
              value: "415",
              unit: "kcal",
            },
            fat: "17.95g",
            protein: "6.66g",
            carbohydrates: "54.26g",
            fiber: "1.85g",
            sugar: "12g",
          },
        },
        {
          id: "keksy-choco",
          name: "Choco Keksy",
          title: "Choco Keksy",
          instructions: [
            "Mix sugar with whole eggs and oil",
            "Add wheat flour and cocoa powder",
            "add wheat flour, cocoapowder",
            "and baking powder",
            "combine until smooth",
            "and bake at 350°F until fully set",
          ],
          nutrition: {
            calories: {
              value: "415",
              unit: "kcal",
            },
            fat: "17.95g",
            protein: "6.66g",
            carbohydrates: "54.26g",
            fiber: "1.85g",
            sugar: "18g",
          },
        },
        {
          id: "fruta-bun",
          name: "Fruta bun",
          title: "Fruta Bun",
          instructions: [
            "Prepare dough with wheat flour, water, and sugar",
            "Add butter and milk powder",
            "Incorporate mixed fruits: papaya cubes and raisins",
            "Add yeast",
            "Bake until golden brown",
          ],
          nutrition: {
            calories: {
              value: "279",
              unit: "kcal",
            },
            fat: "1.86g",
            protein: "7.91g",
            carbohydrates: "56.33g",
            fiber: "3.67g",
            sugar: "25g",
          },
        },
      ],
    },
    gallery: {
      title: "Bread ideas",
      imageAlts: [
        "Gourmet sandwich",
        "Artisan burger",
        "BBQ bacon burger",
        "Avocado toast",
        "Grilled panini",
        "French baguette sandwich",
        "Classic club sandwich",
        "Poached egg avocado toast",
        "Rustic baguette",
        "Smashed avocado toast",
        "Sourdough baguette",
        "Tomato basil bruschetta",
        "Mediterranean sandwich",
        "Fresh bruschetta",
        "Garlic herb bruschetta",
        "Beef burger deluxe",
        "Caprese panini",
        "Italian panini",
      ],
      cta: "Try Something Fresh from Our Oven! →",
    },
};
