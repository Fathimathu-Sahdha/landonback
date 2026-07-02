export type Locale = "en" | "ar";

export interface HomePageContent {
  hero: {
    videoFallback: string;
  };
  inspiration: {
    breadSliceAlt: string;
    title: string;
    description: string;
    cta: string;
  };
  featuredProducts: Array<{
    title: string;
    description: string;
  }>;
  feature: {
    bakedTextAlt: string;
    imageAlt: string;
    titleLineOne: string;
    titleLineTwo: string;
    description: string;
  };
  about: {
    imageAlt: string;
    badgeValue: string;
    badgeLabel: string;
    kicker: string;
    titleLineOne: string;
    titleLineTwo: string;
    description: string;
    features: Array<{
      imageAlt?: string;
      title: string;
      description?: string;
    }>;
  };
  recipes: {
    kicker: string;
    titleLineOne: string;
    titleLineTwo: string;
    instructionPrefix: string;
    nutritionLabels: {
      calories: string;
      fat: string;
      protein: string;
      carbohydrates: string;
      fiber: string;
      sugar: string;
    };
    items: Array<{
      id: string;
      name: string;
      title: string;
      instructions: string[];
      nutrition: {
        calories: {
          value: string;
          unit: string;
        };
        fat: string;
        protein: string;
        carbohydrates: string;
        fiber: string;
        sugar: string;
      };
    }>;
  };
  gallery: {
    title: string;
    imageAlts: string[];
    cta: string;
  };
}

export interface FooterContent {
  logoAlt: string;
  contact: {
    title: string;
    phone: string;
    tollFree: string;
  };
  location: {
    title: string;
    lines: string[];
  };
  quickLinks: {
    title: string;
    links: string[];
  };
  copyright: string;
  credit: string;
}

export interface LayoutContent {
  header: {
    logoAlt: string;
    nav: Array<{
      name: string;
      href: string;
    }>;
  };
  footer: FooterContent;
  notFound: {
    title: string;
    message: string;
    backToHome: string;
  };
}

export interface AboutUsContent {
  hero: {
    title: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  missionVision: {
    title: string;
    cards: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  unique: {
    title: string;
    points: Array<{
      icon: string;
      title: string;
    }>;
  };
  equipment: {
    title: string;
    description: string;
    imageAlts: string[];
  };
  distribution: {
    title: string;
    retailers: Array<{
      name: string;
      logo: string;
    }>;
  };
}

export interface ContactUsContent {
  hero: {
    title: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    description: string;
  };
  contactDetails: {
    phone: {
      iconAlt: string;
      title: string;
      tollFreeLabel: string;
      tollFreeNumber: string;
      landlineLabel: string;
      landlineNumber: string;
    };
    email: {
      iconAlt: string;
      title: string;
      generalLabel: string;
      generalEmail: string;
      enquiries: Array<{
        label: string;
        email: string;
      }>;
    };
    address: {
      iconAlt: string;
      title: string;
      lines: string[];
    };
    workingHours: {
      iconAlt: string;
      title: string;
      value: string;
    };
  };
  form: {
    title: string;
    requiredMark: string;
    successMessage: string;
    errorMessage: string;
    submitLabel: string;
    submittingLabel: string;
    fields: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      phone: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
    };
  };
  map: {
    title: string;
    iframeTitle: string;
  };
}

export interface OurStoriesContent {
  hero: {
    videoFallback: string;
  };
  history: {
    title: string;
    description: string;
    imageAlt: string;
    tasteLineOne: string;
    tasteLineTwo: string;
  };
  timeline: Array<{
    year: string;
    title: string;
    description: string;
    imageAlt: string;
  }>;
}

export interface ProductsPageContent {
  listing: {
    heroAlt: string;
    heroImage: string;
    fancyTitle: string;
    fancyDescription: string;
    suggestTitle: string;
    viewIngredients: string;
    categoryIcons: Array<{
      categoryName: string;
      color: string;
      icon: string;
    }>;
    suggestedProducts: Array<{
      name: string;
      image: string;
    }>;
  };
  browse: {
    backToProducts: string;
    categoryNotFound: string;
    viewIngredients: string;
  };
  detail: {
    ingredients: string;
    selectVariant: string;
    allergens: string;
    contains: string;
    mayContainTraces: string;
    defaultAllergenNotice: string;
    nutritionalValues: string;
    energy: string;
    fats: string;
    carbs: string;
    fiber: string;
    proteins: string;
    bannerAlt: string;
    notAvailable: string;
  };
  ingredients: {
    categoryNotFound: string;
    categoryNotFoundDescription: string;
    heroDescription: string;
    productsAvailable: string;
    premiumQuality: string;
    ingredients: string;
    nutritions: string;
    allergens: string;
    energy: string;
    fat: string;
    carbohydrate: string;
    fiber: string;
    protein: string;
    whyChooseTitle: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    categoryDescriptions: Record<string, string>;
  };
}

export interface StaticPageContent {
  home: HomePageContent;
  layout: LayoutContent;
  products: ProductsPageContent;
  aboutUs: AboutUsContent;
  contactUs: ContactUsContent;
  ourStories: OurStoriesContent;
}
