// Data entry workflow:
// - English copy: edit files in en/
// - Arabic copy: add partial overrides in the mirrored ar/ file (only keys that differ)
// - Products: see src/data/products/index.ts
//
import type { Locale, StaticPageContent } from "./types";
import { mergeStaticPageContent } from "./merge";
import { homeContent } from "./en/home";
import { layoutContent } from "./en/layout";
import { productsContent } from "./en/products";
import { aboutUsContent } from "./en/about-us";
import { contactUsContent } from "./en/contact-us";
import { ourStoriesContent } from "./en/our-stories";
import { homeContentAr } from "./ar/home";
import { layoutContentAr } from "./ar/layout";
import { productsContentAr } from "./ar/products";
import { aboutUsContentAr } from "./ar/about-us";
import { contactUsContentAr } from "./ar/contact-us";
import { ourStoriesContentAr } from "./ar/our-stories";

export type {
  Locale,
  StaticPageContent,
  HomePageContent,
  LayoutContent,
  ProductsPageContent,
  AboutUsContent,
  ContactUsContent,
  OurStoriesContent,
} from "./types";

export { mergeStaticPageContent } from "./merge";
export type { DeepPartial } from "./merge";

const englishStaticPageContent: StaticPageContent = {
  home: homeContent,
  layout: layoutContent,
  products: productsContent,
  aboutUs: aboutUsContent,
  contactUs: contactUsContent,
  ourStories: ourStoriesContent,
};

const arabicStaticPageContent = {
  home: homeContentAr,
  layout: layoutContentAr,
  products: productsContentAr,
  aboutUs: aboutUsContentAr,
  contactUs: contactUsContentAr,
  ourStories: ourStoriesContentAr,
};

export const getStaticPageContent = (locale: Locale): StaticPageContent => {
  if (locale === "en") {
    return englishStaticPageContent;
  }

  return mergeStaticPageContent(
    englishStaticPageContent,
    arabicStaticPageContent,
  );
};

export const staticPageContent: Record<Locale, StaticPageContent> = {
  en: englishStaticPageContent,
  ar: getStaticPageContent("ar"),
};
