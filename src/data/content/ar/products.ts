import type { DeepPartial } from "../merge";
import type { ProductsPageContent } from "../types";

// Add partial Arabic overrides for product page UI strings.
// See en/products.ts for the English source of truth.
export const productsContentAr: DeepPartial<ProductsPageContent> = {
    listing: {
    heroAlt: "مخبوزة لتغذية روحك",
    heroImage: "/assets/images/product-banner_ar.jpg",
    fancyTitle: "ماذا تشتهي اليوم ؟",
    fancyDescription:
      "تصفح مجموعتنا من المخبوزات المتنوعة التي تناسب أذواقكم. تم اختيار كل فئة بعناية فائقة لنقدم لكم أفضل تجربة.",
    suggestTitle: "نقترح عليك اليوم:",
    viewIngredients: "View ingredients →",
    categoryIcons: [
      { categoryName: " بايتس", color: "bg-pink-400", icon: "🍰" },
      { categoryName: "خبز لندن", color: "bg-orange-400", icon: "🍞" },
      { categoryName: "الكرواسون", color: "bg-amber-500", icon: "🥐" },
      { categoryName: "كيكسي", color: "bg-purple-400", icon: "🧁" },
      { categoryName: "الخبز المسطح", color: "bg-blue-400", icon: "🫓" },
      { categoryName: "لفائف وخبز", color: "bg-green-400", icon: "🥖" },
      { categoryName: "روسكيت آند كرامبس", color: "bg-yellow-500", icon: "🍪" },
      { categoryName: " أطفال فروفي", color: "bg-indigo-400", icon: "🍭" },
      { categoryName: "الدونات", color: "bg-red-400", icon: "🍩" },
      { categoryName: "مجموعة فاخرة", color: "bg-amber-500", icon: "⭐" },
    ],
    suggestedProducts: [
      { name: "خبز بالكريمة", image: "/assets/rolls_n_buns/krem_bun.webp" },
      { name: "خبز الحليب", image: "/assets/breads/milkology_cropped.webp" },
      {
        name: " كيكسي",
        image: "/assets/keksy/vanille_keksy_15pcs_cropped.webp",
      },
    ],
  },
  browse: {
    backToProducts: "العودة إلى المنتجات",
    categoryNotFound: "الفئة غير موجودة",
    viewIngredients: "View ingredients →",
  },
  detail: {
    ingredients: "مكونات",
    selectVariant: "اختر للنو ع",
    allergens: "مسببات للحسا سية",
    contains: "يحتوي على:",
    mayContainTraces: "قد يحتوي على آثار من مواد أخرى مسببة للحساسية",
    defaultAllergenNotice: "قد يحتوي على آثار من الحليب والبيض والمكسرات.",
    nutritionalValues: " القيم الغذائية",
    energy: "طاقة",
    fats: "الدهون",
    carbs: "الكربوهيدرات",
    fiber: " الفيبر",
    proteins: "البروتينات",
    bannerAlt: "لافتة تفاصيل المنتج",
    notAvailable: "غير متاح",
    variantLabels: {
      Small: "صغير",
      Medium: "واسطة",
      Large: "كبير",
    },
  },
  ingredients: {
    categoryNotFound: "الفئة غير موجودة",
    categoryNotFoundDescription: "الفئة المطلوبة غير موجودة.",
    heroDescription:
      "اكتشف تشكيلتنا الكاملة من منتجات {category} الفاخرة؛ إذ صُمم كل منتج بعناية فائقة، باستخدام الطرق التقليدية وأجود المكونات.",
    productsAvailable: "{count} منتج متاح",
    premiumQuality: "جودة فائقة",
    ingredients: "مكونات",
    nutritions: "تَغذِيَة",
    allergens: "مسببات الحساسية",
    energy: "طاقة:",
    fat: "الدهون:",
    carbohydrate: "الكربوهيدرات:",
    fiber: "الفيبر:",
    protein: "البروتينات:",
    whyChooseTitle: "لماذا تختار منتجاتنا من فئة {category}؟",
    features: [
      {
        icon: "🌾",
        title: "مكونات فاخرة",
        description:
          "ننتقي أجود المكونات فقط، لنضمن أن تمنح كل لقمةٍ مذاقاً وجودةً استثنائيين.",
      },
      {
        icon: "👨‍🍳",
        title: "الطرق التقليدية",
        description:
          "تخلق تقنيات الخبز العريقة لدينا، مقترنةً بالابتكار العصري، توازناً مثالياً.",
      },
      {
        icon: "✨",
        title: "جودة معتمدة",
        description:
          "يتم إعداد كل منتج بعناية فائقة على يد خبازينا المهرة، وذلك تلبيةً لأعلى معايير التميز.",
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
