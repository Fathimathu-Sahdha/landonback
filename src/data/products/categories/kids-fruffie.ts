import type { ProductCategory } from "../types";

export const kidsFruffieCategory: ProductCategory =   {
    name: "Kids Fruffie",
    bgColor: "bg-blue-400",
    products: [
      {
        english: {
        name: "FRUFFIE BREAD",
        image: "/assets/kids_snacks/fruffi.webp",
        image2: "/assets/kids_snacks_inner/fruffi_wp.webp",
        size: "w-80 h-80",
        bgcolor: "#4DB9E8",
        description: "Ultra-soft bread, perfect for kids",
        detailDescription: "Introduce your little ones to the joy of fresh bread with Fruffie Bread, specially crafted to delight children. This ultra-soft bread features a fun, colorful appearance with sugar-coated fruit pieces that make every bite enjoyable. Its light, fluffy texture is easy to chew and perfect for young mouths, while the gentle sweetness suits their tastes. Rich in vitamins A and D, it's a nutritious choice kids will love. Make mealtime fun, one slice at a time.",
        detailImage: "/assets/kids_snacks/detail-page-image/fruffi_bread_pd.webp",
        backgroundColor:
          "bg-gradient-to-bl from-[#4DB9E8] via-[#6DC9F8] to-[#8DD9FF]",
        ingredients: [
          "Wheat Flour",
          "Water",
          "Sugar",
          "Candied Fruits {Papaya, Sugar, Color (E110, E102, E129)} Milk Powder",
          "Vegetable Fats (Sunflower and Palm)",
          "Natural Butter Flavor",
          "Antioxidants (E320, E321)",
          "Beta Carotene",
          "Vitamins A and D}, Yeast, Salt, Emulsifier (E471, E472, E322)",
          "(Vegetable Origin), Anti-caking Agent (E170), Wheat Starch, Ascorbic Acid (E300), Enzymes (Hemicellulase,",
          "Amylase), Preservative (E202, E282)",
          "Vegetable Oil, Curcumin",
        ],
        nutrition: {
          energy: "330.1 kcal",
          fat: "6.34g",
          protein: "7.18g",
          carbohydrate: "59g",
          fiber: "2.99g",
        },
        allergens: ["Gluten", "Milk Powder"],
      },
      arabic: {
        name: "خبز فروفي",
        description: " خبز فائق النعومة، مثالي للأطفال",
        detailDescription: "عرّفوا صغاركم على متعة الخبز الطازج مع خبز فروفي، المصنوع خصيصًا لإسعاد الأطفال. يتميز هذا الخبز فائق النعومة بمظهر ملون ومرح مع قطع الفاكهة المكسوة بالسكر التي تجعل كل قضمة لذيذة. قوامه الخفيف والهش سهل المضغ ومثالي لأفواه الأطفال، بينما حلاوته المعتدلة تناسب أذواقهم.غني بفيتاميني أ و د، إنه خيار مغذ يرغب الأطفال بتناوله. اجعلوا وقت الطعام ممتعًا، شريحة تلو الأخرى.",
        ingredients: [
          "دقيق القمح ، ",
          "ماء ، ",
          "سكر ،",
          "فواكه مسكرة {بابايا، سكر، لون (E110، E102، E129)} مسحوق الحليب ،",
          " دهون نباتية (دوار الشمس والنخيل) ، ",
          " نكهة زبدة طبيعية،",
          " مضادات أكسدة (E320،E321) ،",
          " بيتا كاروتين،  ",
          "فيتامين أ و د}، خميرة، ملح، مستحلب (E471، E472، E322)",
          "  (من أصل نباتي)، عامل مضاد للتكتل (E170)، نشا القمح، حمض الأسكوربيك (E300)، إنزيمات (هيميسليولوز،",
          "أميليز)، مادة حافظة (E202، E282)،",
          " زيت نباتي، كركمين",
        ],
        allergens: [" جلوتين ", " مسحوق حليب "],
      },
      },
    ],
  };
