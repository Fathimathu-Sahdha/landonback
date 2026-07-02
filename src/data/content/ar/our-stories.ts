import type { DeepPartial } from "../merge";
import type { OurStoriesContent } from "../types";

export const ourStoriesContentAr: DeepPartial<OurStoriesContent> = {
    hero: {
      videoFallback: "Your browser does not support the video tag.",
    },
    history: {
      title: "أربعون عاماً من التاريخ",
      description:
        "لأكثر من أربعين عامًا، دأبنا على إتقان فن الخبز بتفانٍ ومهارة. مسترشدين بتقنيات عريقة، وبابداع أيادي خبراء، يُصنع خبزنا وفقًا لوصفات تقليدية تُبرز البساطة في أبهى صورها. يُخبز كل رغيف ليمنحك مذاقًا أصيلًا، وقوامًا مقرمشًا شهيًا، وجودة يمكنك الوثوق بها، وهو تقليد نفخر بالحفاظ عليه يومًا بعد يوم.",
      imageAlt: "40th Anniversary",
      tasteLineOne: "تذوق من",
      tasteLineTwo: "تاريخنا",
    },
    timeline: [
      {
        year: "1986",
        title: "بداية",
        description:
          "تأسست مخابز لندن برؤية تهدف إلى تقديم الخبز والمعجنات الطازجة للمجتمع. وما بدأ ببضع وصفات فقط سرعان ما تحول إلى اسم محلي موثوق به.",
        imageAlt: "Beginning",
      },
      {
        year: "2008",
        title: "توسع",
        description:
          "ساهم التوسع في سوق قطر في تعريف عملاء جدد بمنتجاتنا المخبوزة الأصيلة، مما رسخ وجودنا في المنطقة.",
        imageAlt: "Expansion",
      },
      {
        year: "2022",
        title: "منزل جديد",
        description:
          "مقر جديد لمخبز لندن مع منشأة حديثة ومتطورة، مما يوسع قدراتنا الإنتاجية ويخلق مساحة للابتكار.",
        imageAlt: "NEW HOME",
      },
      {
        year: "2022",
        title: "تلتقي الآلات بالابتكار",
        description:
          "تم تحديث معدات وتقنيات الخبز لدينا لتشمل أحدث التقنيات، مما يعزز القدرة الإنتاجية مع الحفاظ على المذاق الأصيل والجودة العالية لمنتجاتنا.",
        imageAlt: "Machinery Meets Innovation",
      },
    ],
};
