import type { DeepPartial } from "../merge";
import type { AboutUsContent } from "../types";

export const aboutUsContentAr: DeepPartial<AboutUsContent> = {
    hero: {
      title: " معلومات عنا",
      imageAlt: "About Us Hero",
    },
    intro: {
      title: " معلومات عنا",
      paragraphs: [
        "مرحباً بكم في مخبز لندن، حيث يلتقي الأصالة بالحداثة في كل لقمة. منذ تأسيسنا، التزمنا صنع أجود أنواع المخبوزات باستخدام مكونات فاخرة وتقنيات عريقة. شغفنا بالخبز يدفعنا لابتكار منتجات تُدخل البهجة على قلوب العائلات في جميع أنحاء المنطقة.",
        "من خبزنا المميز إلى معجناتنا اللذيذة، يتم صنع كل منتج بعناية واهتمام بالتفاصيل والتزام بالجودة مما جعلنا اسمًا موثوقًا به في مجال المخبوزات المتميزة.",
      ],
      imageAlt: "About Us",
    },
    missionVision: {
      title: "الرسالة والرؤية",
      cards: [
        {
          icon: "🎯",
          title: "مهمتنا",
          description:
            "في مخبز لندن، مهمتنا هي ابتكار مخبوزات لا تقاوم تضفي البهجة على كل قضمة. منذ عام ١٩٨٦، ونحن ملتزمون بالجودة والأصالة والابتكار في كل ما نقوم به. يعمل فريقنا بشغف كبير لتقديم منتجات طازجة وشهية، مع ضمان أعلى معايير المذاق والخدمة والاستدامة. نهدف إلى أن نكون معيارًا للتميز في صناعة المخبوزات في قطر وخارجها.",
        },
        {
          icon: "✨",
          title: " رؤيتنا",
          description:
            "تتمثل رؤيتنا في جعل مخبز لندن جزءًا لا يتجزأ من حياة الناس اليومية، لا مجرد مناسباتهم الخاصة. نسعى جاهدين لنكون الخيار الأول لعشاق المخبوزات الفاخرة، المعروفين بجودتنا ومصداقيتنا وإبداعنا. ومن خلال توسيع نطاقنا، وتقديم نكهات جديدة، وتوفير تجارب استثنائية، نهدف إلى الحفاظ على ريادتنا المستدامة في قطر والأسواق العالمية.",
        },
      ],
    },
    unique: {
      title: " لماذا يُعد مخبز لندن فريدًا حقًا؟",
      points: [
        { icon: "⭐", title: "الجودة والاتساق" },
        { icon: "🧼", title: "الظروف الصحية ومراقبة الجودة" },
        { icon: "🌍", title: "توسيع أفاقنا في عالم المذاق" },
        { icon: "🇶🇦", title: "دعم اقتصاد قطر" },
        { icon: "🤝", title: "دعم العملاء والتميز في سلسلة التوريد" },
      ],
    },
    equipment: {
      title: "أفضل المعدات والآلات",
      description:
        "يتمتع مصنعنا بموقع استراتيجي في قلب قطر، مما يسهل الوصول إلى شبكات النقل، ويتيح توزيع منتجاتنا بكفاءة عالية في جميع أنحاء المدينة وخارجها. كما يتيح لنا هذا الموقع المتميز الحصول على أجود المكونات الطازجة محلياً، مما يعزز جودة منتجاتنا.",
      imageAlts: [
        "Equipment 1",
        "Equipment 2",
        "Equipment 3",
        "Equipment 4",
        "Equipment 5",
      ],
    },
    distribution: {
      title: " تسوق منتجاتنا في أي وقت وفي أي مكان!",
      retailers: [
        { name: "Carrefour", logo: "/logos/carrefour-logo.webp" },
        { name: "Monoprix", logo: "/logos/monoprix-logo.webp" },
        { name: "Spar", logo: "/logos/spar-log.webp" },
        { name: "Family Shopping", logo: "/logos/family-shopping-logo.webp" },
        { name: "Grand Mall", logo: "/logos/grand-mall-logo.webp" },
        { name: "Albaladi", logo: "/logos/albaladi-logo.webp" },
        { name: "Ansar Gallery", logo: "/logos/ansar-gallery-logo.webp" },
        { name: "Baladi Express", logo: "/logos/baladi-express.webp" },
        { name: "Karak", logo: "/logos/karak-logo.webp" },
        { name: "Marza", logo: "/logos/marza-logo.webp" },
        { name: "Nism", logo: "/logos/nism-logo.webp" },
        { name: "Paris Hyper", logo: "/logos/paris-hyper-logo.webp" },
        { name: "QCC", logo: "/logos/qcc-logo.webp" },
        { name: "Rafeeq", logo: "/logos/rafeeq-logo.webp" },
        { name: "Rawabi", logo: "/logos/rawabi-logo.webp" },
        { name: "Regency HM", logo: "/logos/regency-hm-logo.webp" },
        { name: "RM", logo: "/logos/rm-logo.webp" },
        { name: "Safari", logo: "/logos/safari-logo.webp" },
        { name: "Saudia", logo: "/logos/saudia-logo.webp" },
        { name: "Sidra", logo: "/logos/sidra-logo.webp" },
        { name: "Stop N Shop", logo: "/logos/stop-n-shop-logo.webp" },
        { name: "Talabat Mart", logo: "/logos/talabatmart-logo.webp" },
        { name: "Zanjabeel", logo: "/logos/zanjabeel.webp" },
      ],
    },
};
