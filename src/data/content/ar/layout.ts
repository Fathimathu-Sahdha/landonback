import type { DeepPartial } from "../merge";
import type { LayoutContent } from "../types";

// Add partial Arabic overrides for layout chrome (header, footer, 404).
// See en/layout.ts for the English source of truth.
export const layoutContentAr: DeepPartial<LayoutContent> = {
  header: {
    logoAlt: "مخبز لندن - مشهد الجودة ١٩٨٦",
    logoImage: "/assets/logo/logo_header_ar_cropped.png",
    nav: [
      { name: "الصفحة الرئيسية", href: "/" },
      { name: "منتجات", href: "/products" },
      { name: "أربعون عاماً من التاريخ", href: "/our-stories" },
      { name: "نبذة عن مخبز لندن", href: "/about-us" },
      { name: "تواصل معنا", href: "/contact-us" },
      { name: "الوظائف", href: "https://portal.londonbakery.qa/jobs" },
      {
        name: "احصل على موعد",
        href: "https://portal.londonbakery.qa/appointment/1",
      },
    ],
  },
  footer: {
    logoAlt: "مخبز لندن - مشهد الجودة ١٩٨٦",
    logoImage: "/assets/logo/logo_header_ar.png",
    contact: {
      title: "اتصل بنا",
      phone: "رقم الهاتف  : +٩٧٤ ٤٤٤٧ ٩٧٨٥ ",
      tollFree: "رقم مجاني  : ٨٠٠ ٦٢٤٦",
    },
    location: {
      title: "موقع المصنع",
      lines: [
        "رقم الشارع: 40، رقم المنطقة: 81",
        "رقم المبنى : 63",
        "منطقة صناعية جديدة",
        "الدوحة،20730",
        "قطر",
      ],
    },
    quickLinks: {
      title: "روابط سريعة",
      links: [
        "الصفحة الرئيسية ",
        "منتجات",
        "أربعون عاماً من التاريخ",
        "الوظائف",
        "احصل على موعد",
        "نبذة عن مخبز لندن",
        "تواصل معنا",
      ],
    },
    copyright: "جميع الحقوق محفوظة © 2026",
    credit: " صُنع بحب من قبل هاشم وبس",
  },
};
