// Data entry workflow:
// - English product copy: edit files in categories/
// - Arabic product copy: add arabic?: { ... } beside each product in the same file
// - Optional Arabic category display name: ar/categories/<category>.ts
//
// Static page copy: see src/data/content/index.ts

import type { ProductCategory, ProductLocale, LocalizedProductCategory } from "./types";
import { bitesCategory } from "./categories/bites";
import { londonBreadsCategory } from "./categories/london-breads";
import { croissantsCategory } from "./categories/croissants";
import { keksyCategory } from "./categories/keksy";
import { flatBreadsCategory } from "./categories/flat-breads";
import { rollsAndBunsCategory } from "./categories/rolls-and-buns";
import { ruskitAndCrumbsCategory } from "./categories/ruskit-and-crumbs";
import { kidsFruffieCategory } from "./categories/kids-fruffie";
import { donutsCategory } from "./categories/donuts";
import { premiumRangeCategory } from "./categories/premium-range";
import { bitesCategoryAr } from "./ar/categories/bites";
import { londonBreadsCategoryAr } from "./ar/categories/london-breads";
import { croissantsCategoryAr } from "./ar/categories/croissants";
import { keksyCategoryAr } from "./ar/categories/keksy";
import { flatBreadsCategoryAr } from "./ar/categories/flat-breads";
import { rollsAndBunsCategoryAr } from "./ar/categories/rolls-and-buns";
import { ruskitAndCrumbsCategoryAr } from "./ar/categories/ruskit-and-crumbs";
import { kidsFruffieCategoryAr } from "./ar/categories/kids-fruffie";
import { donutsCategoryAr } from "./ar/categories/donuts";
import { premiumRangeCategoryAr } from "./ar/categories/premium-range";
import {
  getCategoryByUrlName as findCategoryByUrlName,
  getCategoryUrlName,
  getProductUrlName,
  mergeProductContent,
} from "./url";
import type { CategoryLocaleOverride, Product } from "./types";

export type {
  Product,
  ProductContent,
  ProductCategory,
  LocalizedProductCategory,
  ProductLocale,
} from "./types";

export {
  getCategoryUrlName,
  getProductUrlName,
};

const categoryLocaleOverrides: Record<string, Partial<CategoryLocaleOverride>> = {
  Bites: bitesCategoryAr,
  "London breads": londonBreadsCategoryAr,
  Croissants: croissantsCategoryAr,
  Keksy: keksyCategoryAr,
  "Flat Breads": flatBreadsCategoryAr,
  "Rolls & Buns": rollsAndBunsCategoryAr,
  "Ruskit & Crumbs": ruskitAndCrumbsCategoryAr,
  "Kids Fruffie": kidsFruffieCategoryAr,
  Donuts: donutsCategoryAr,
  "Premium Range": premiumRangeCategoryAr,
};

export const productCategories: ProductCategory[] = [
  bitesCategory,
  londonBreadsCategory,
  croissantsCategory,
  keksyCategory,
  rollsAndBunsCategory,
  ruskitAndCrumbsCategory,
  kidsFruffieCategory,
  donutsCategory,
  premiumRangeCategory,
  flatBreadsCategory,
];

export const getLocalizedProduct = (
  product: Product,
  locale: ProductLocale,
) => {
  if (locale === "ar") {
    return mergeProductContent(product.english, product.arabic);
  }

  return mergeProductContent(product.english, undefined);
};

const localizeCategory = (
  category: ProductCategory,
  locale: ProductLocale,
): LocalizedProductCategory => {
  const override = categoryLocaleOverrides[category.name];
  const localizedName =
    locale === "ar" && override?.name ? override.name : category.name;

  return {
    name: localizedName,
    bgColor: category.bgColor,
    products: category.products.map((product) =>
      getLocalizedProduct(product, locale),
    ),
  };
};

export const getLocalizedProductCategories = (
  locale: ProductLocale,
): LocalizedProductCategory[] =>
  productCategories.map((category) => localizeCategory(category, locale));

export const getLocalizedCategoryByUrlName = (
  urlName: string,
  locale: ProductLocale,
): LocalizedProductCategory | null => {
  const category = findCategoryByUrlName(urlName, productCategories);

  if (!category) {
    return null;
  }

  return localizeCategory(category, locale);
};

export const getCategoryByUrlName = (urlName: string) =>
  findCategoryByUrlName(urlName, productCategories);
