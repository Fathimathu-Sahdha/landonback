import type { ProductContent } from "./types";

export const getProductUrlName = (productName: string): string =>
  productName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[()/]/g, "")
    .replace(/\//g, "-");

export const getCategoryUrlName = (categoryName: string): string =>
  categoryName.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");

export const URL_TO_CATEGORY_NAME: Record<string, string> = {
  bites: "Bites",
  "london-breads": "London breads",
  croissants: "Croissants",
  keksy: "Keksy",
  "flat-breads": "Flat Breads",
  "rolls-and-buns": "Rolls & Buns",
  "ruskit-and-crumbs": "Ruskit & Crumbs",
  "kids-fruffie": "Kids Fruffie",
  donuts: "Donuts",
  "premium-range": "Premium Range",
};

export const getCategoryByUrlName = (
  urlName: string,
  categories: { name: string }[],
) => {
  const categoryName = URL_TO_CATEGORY_NAME[urlName];
  return categories.find((category) => category.name === categoryName) ?? null;
};

export const mergeProductContent = (
  english: ProductContent,
  localized: Partial<ProductContent> | undefined,
): ProductContent => {
  const slug = getProductUrlName(english.name);

  if (!localized) {
    return {
      ...english,
      slug,
    };
  }

  return {
    ...english,
    ...localized,
    slug,
    nutrition: {
      ...english.nutrition,
      ...localized.nutrition,
    },
    variants: localized.variants
      ? {
          ...english.variants,
          ...localized.variants,
        }
      : english.variants,
  };
};
