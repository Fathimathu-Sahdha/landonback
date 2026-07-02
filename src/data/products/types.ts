export type ProductLocale = "en" | "ar";

export interface ProductContent {
  name: string;
  slug?: string;
  image: string;
  image2: string;
  size: string;
  bgcolor: string;
  description?: string;
  detailDescription?: string;
  backgroundColor?: string;
  detailImage?: string;
  ingredients?: string[];
  nutrition?: {
    energy?: string;
    fat?: string;
    carbohydrate?: string;
    fiber?: string;
    protein?: string;
    dietaryfiber?: string;
  };
  allergens?: string[];
  variants?: {
    [key: string]: {
      ingredients: string[];
      nutrition: {
        energy?: string;
        fat?: string;
        carbohydrate?: string;
        fiber?: string;
        protein?: string;
      };
      allergens: string[];
    };
  };
}

export interface Product {
  english: ProductContent;
  arabic?: Partial<ProductContent>;
}

export interface ProductCategory {
  name: string;
  bgColor: string;
  products: Product[];
}

export interface LocalizedProductCategory {
  name: string;
  bgColor: string;
  products: ProductContent[];
}

export interface CategoryLocaleOverride {
  name?: string;
}
