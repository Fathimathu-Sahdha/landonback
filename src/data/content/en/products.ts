import type { ProductsPageContent } from "../types";

export const productsContent: ProductsPageContent = {
  listing: {
    heroAlt: "Premium bread products",
    fancyTitle: "What do you fancy today?",
    fancyDescription:
      "Browse through our collection of baked goods with various categories that suit your taste preferences. Each category has been carefully curated to give you the best experience.",
    suggestTitle: "Today we suggest you",
    viewIngredients: "View ingredients →",
    categoryIcons: [
      { categoryName: "Bites", color: "bg-pink-400", icon: "🍰" },
      { categoryName: "London breads", color: "bg-orange-400", icon: "🍞" },
      { categoryName: "Croissants", color: "bg-amber-500", icon: "🥐" },
      { categoryName: "Keksy", color: "bg-purple-400", icon: "🧁" },
      { categoryName: "Flat Breads", color: "bg-blue-400", icon: "🫓" },
      { categoryName: "Rolls & Buns", color: "bg-green-400", icon: "🥖" },
      { categoryName: "Ruskit & Crumbs", color: "bg-yellow-500", icon: "🍪" },
      { categoryName: "Kids Fruffie", color: "bg-indigo-400", icon: "🍭" },
      { categoryName: "Donuts", color: "bg-red-400", icon: "🍩" },
      { categoryName: "Premium Range", color: "bg-amber-500", icon: "⭐" },
    ],
    suggestedProducts: [
      { name: "Krem Bun", image: "/assets/rolls_n_buns/krem_bun.webp" },
      { name: "Milkology", image: "/assets/breads/milkology_cropped.webp" },
      {
        name: "Keksy",
        image: "/assets/keksy/vanille_keksy_15pcs_cropped.webp",
      },
    ],
  },
  browse: {
    backToProducts: "Back to Products",
    categoryNotFound: "Category not found",
    viewIngredients: "View ingredients →",
  },
  detail: {
    ingredients: "Ingredients",
    selectVariant: "Select Variant",
    allergens: "Allergens",
    contains: "Contains:",
    mayContainTraces: "May contain traces of other allergens.",
    defaultAllergenNotice: "May contain traces of milk, eggs, and nuts.",
    nutritionalValues: "Nutritional Values",
    energy: "Energy",
    fats: "Fats",
    carbs: "Carbs",
    fiber: "Fiber",
    proteins: "Proteins",
    bannerAlt: "Product Detail Banner",
    notAvailable: "N/A",
  },
  ingredients: {
    categoryNotFound: "Category Not Found",
    categoryNotFoundDescription: "The requested category does not exist.",
    heroDescription:
      "Discover our complete collection of premium {category} products. Each item is crafted with care using traditional methods and the finest ingredients.",
    productsAvailable: "{count} Products Available",
    premiumQuality: "Premium Quality",
    ingredients: "Ingredients",
    nutritions: "Nutritions",
    allergens: "Allergens",
    energy: "Energy:",
    fat: "Fat:",
    carbohydrate: "Carbohydrate:",
    fiber: "Fiber:",
    protein: "Protein:",
    whyChooseTitle: "Why Choose Our {category} Products?",
    features: [
      {
        icon: "🌾",
        title: "Premium Ingredients",
        description:
          "We source only the finest ingredients to ensure every bite delivers exceptional taste and quality.",
      },
      {
        icon: "👨‍🍳",
        title: "Traditional Methods",
        description:
          "Our time-honored baking techniques combined with modern innovation create the perfect balance.",
      },
      {
        icon: "✨",
        title: "Certified Quality",
        description:
          "Each product is carefully crafted by our skilled bakers to meet the highest standards of excellence.",
      },
    ],
    categoryDescriptions: {
      Bites:
        "Indulge in our delightful collection of bite-sized treats, each one bursting with rich flavors and premium ingredients. From classic marble to exotic fruit combinations, our bites are perfect for any occasion.",
      "London breads":
        "From the soft heart of bread comes our premium London bread collection, crafted from the finest ingredients for exceptional quality. Light and fluffy, our bread is perfect for sandwiches, toast, and everyday meals.",
      Croissants:
        "Experience the authentic taste of French patisserie with our handcrafted croissants. Each flaky, buttery layer is meticulously crafted using traditional techniques.",
      Keksy:
        "Our delightful keksy range is individually crafted with love and attention to detail. From rich chocolate to classic vanilla, each piece offers the perfect portion of sweetness.",
      "Flat Breads":
        "Our versatile flat breads are crafted for maximum flexibility and taste. Perfect for wraps, quesadillas, or as a base for creative meals.",
      "Rolls & Buns":
        "From dinner rolls to specialty buns, our collection offers the perfect complement to any meal. Soft, fresh, and versatile, each roll and bun is baked to perfection.",
      "Ruskit & Crumbs":
        "Traditional rusks and fine bread crumbs crafted for versatility and quality. Our rusks are perfect companions for tea time, while our bread crumbs add the perfect crispy coating.",
      "Kids Fruffie":
        "Specially designed for little ones, our kids' snacks are made with care and love. Soft, nutritious, and delicious, these treats are perfect for growing children.",
      Donuts:
        "Indulge in our handcrafted donuts, each one carefully glazed and filled with premium ingredients. From classic flavors to creative combinations, our donuts bring joy to any moment.",
      "Premium Range":
        "Our premium collection represents the pinnacle of our baking expertise. Using only the finest ingredients and time-honored techniques, these exceptional products are crafted for those who appreciate the very best.",
    },
  },
};
