import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import {
  getCategoryByUrlName,
  getLocalizedCategoryByUrlName,
} from "@/data/productData";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductIngredients = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const { locale, pageContent } = useLanguage();
  const content = pageContent.products.ingredients;
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (locale === "ar") {
      navigate("/products", { replace: true });
    }
  }, [locale, navigate]);

  const getTextColor = (bgColor: string) => {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#1F2937" : "#FFFFFF";
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  if (locale === "ar") {
    return null;
  }

  const englishCategory = categoryName
    ? getCategoryByUrlName(categoryName)
    : null;
  const currentCategory = categoryName
    ? getLocalizedCategoryByUrlName(categoryName, locale)
    : null;

  if (!currentCategory || !englishCategory) {
    return (
      <div className="min-h-screen bg-background pt-[4.5rem] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {content.categoryNotFound}
          </h1>
          <p className="text-muted-foreground">
            {content.categoryNotFoundDescription}
          </p>
        </div>
      </div>
    );
  }

  const categoryDescription =
    content.categoryDescriptions[englishCategory.name] ?? "";
  const heroDescription = content.heroDescription.replace(
    "{category}",
    currentCategory.name.toLowerCase(),
  );
  const productsAvailableLabel = content.productsAvailable.replace(
    "{count}",
    String(currentCategory.products.length),
  );
  const whyChooseTitle = content.whyChooseTitle.replace(
    "{category}",
    currentCategory.name,
  );

  return (
    <div className="min-h-screen bg-background pt-[4.5rem]">
      <section
        className={`${currentCategory.bgColor} h-64 md:h-[25rem] lg:h-[33rem] text-white relative flex items-center justify-center`}
      >
        <div className="container mx-auto text-center px-0 md:px-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            {currentCategory.name}
          </h1>
          <p className="text-sm md:text-base lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            {heroDescription}
          </p>
          <div className="flex justify-center items-center space-x-3 md:space-x-4 -mt-2 md:mt-0">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/20 rounded-full text-xs md:text-sm font-medium">
              {productsAvailableLabel}
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/20 rounded-full text-xs md:text-sm font-medium">
              {content.premiumQuality}
            </span>
          </div>
        </div>

        <svg
          className="absolute -bottom-px left-0 w-full h-20 md:h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L120,240C240,224,480,192,720,176C960,160,1200,160,1320,160L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </section>

      {categoryDescription && (
        <section className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center px-0">
            <p className="text-lg text-gray-700 leading-relaxed">
              {categoryDescription}
            </p>
          </div>
        </section>
      )}

      {currentCategory.products.map((product, index) => {
        const sectionRef = useRef<HTMLElement>(null);
        const [selectedVariant, setSelectedVariant] = useState<string>(
          product.variants ? Object.keys(product.variants)[0] : "",
        );

        useEffect(() => {
          const currentSection = sectionRef.current;
          if (currentSection && observerRef.current) {
            observerRef.current.observe(currentSection);
          }

          return () => {
            if (currentSection && observerRef.current) {
              observerRef.current.unobserve(currentSection);
            }
          };
        }, []);

        const currentData =
          product.variants && selectedVariant
            ? product.variants[selectedVariant]
            : {
                ingredients: product.ingredients,
                nutrition: product.nutrition,
                allergens: product.allergens,
              };

        return (
          <section
            key={index}
            ref={sectionRef}
            className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 w-full"
          >
            <div className="container mx-auto max-w-6xl px-0">
              <div
                style={{ backgroundColor: product.bgcolor }}
                className="rounded-3xl shadow-xl p-8"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:mt-0">
                  <div className="flex-shrink-0 w-full lg:w-80 h-80 animate-item">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 w-full text-center lg:text-left lg:mt-0 animate-item">
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{ color: getTextColor(product.bgcolor) }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="leading-relaxed mb-6"
                      style={{
                        color: getTextColor(product.bgcolor),
                        fontSize: "1rem",
                      }}
                    >
                      {product.description}
                    </p>

                    {product.variants &&
                      Object.keys(product.variants).length > 1 && (
                        <div className="flex justify-center lg:justify-start gap-2 mb-6">
                          {Object.keys(product.variants).map((variant) => (
                            <button
                              key={variant}
                              onClick={() => setSelectedVariant(variant)}
                              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                                selectedVariant === variant
                                  ? "bg-orange-500 text-white shadow-lg scale-105"
                                  : "bg-white/80 text-gray-700 hover:bg-white hover:scale-105"
                              }`}
                            >
                              {variant.toUpperCase()}
                            </button>
                          ))}
                        </div>
                      )}

                    {(currentData.ingredients ||
                      currentData.nutrition ||
                      currentData.allergens) && (
                      <div className="bg-white/80 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x divide-gray-300">
                          {currentData.ingredients && (
                            <div className="pr-0">
                              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center justify-center lg:justify-start gap-2">
                                <span>🌾</span> {content.ingredients}
                              </h4>
                              <div className="text-sm text-gray-700 leading-relaxed max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                <p className="break-words">
                                  {currentData.ingredients.join(", ")}
                                </p>
                              </div>
                            </div>
                          )}

                          {currentData.nutrition && (
                            <div className="pl-0 md:pl-6 pr-0">
                              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center justify-center lg:justify-start gap-2">
                                <span>📊</span> {content.nutritions}
                              </h4>
                              <div className="text-sm text-gray-700 space-y-1 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                {currentData.nutrition.energy && (
                                  <div className="flex justify-between">
                                    <span>{content.energy}</span>
                                    <span className="font-medium">
                                      {currentData.nutrition.energy}
                                    </span>
                                  </div>
                                )}
                                {currentData.nutrition.fat && (
                                  <div className="flex justify-between">
                                    <span>{content.fat}</span>
                                    <span className="font-medium">
                                      {currentData.nutrition.fat}
                                    </span>
                                  </div>
                                )}
                                {currentData.nutrition.carbohydrate && (
                                  <div className="flex justify-between">
                                    <span>{content.carbohydrate}</span>
                                    <span className="font-medium">
                                      {currentData.nutrition.carbohydrate}
                                    </span>
                                  </div>
                                )}
                                {currentData.nutrition.fiber && (
                                  <div className="flex justify-between">
                                    <span>{content.fiber}</span>
                                    <span className="font-medium">
                                      {currentData.nutrition.fiber}
                                    </span>
                                  </div>
                                )}
                                {currentData.nutrition.protein && (
                                  <div className="flex justify-between">
                                    <span>{content.protein}</span>
                                    <span className="font-medium">
                                      {currentData.nutrition.protein}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {currentData.allergens && (
                            <div className="lg:pl-6 border-t md:border-t-0 border-gray-300 lg:pt-0">
                              <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center justify-center lg:justify-start gap-2">
                                <span className="text-xl sm:text-2xl">⚠️</span>
                                <span>{content.allergens}</span>
                              </h4>
                              <div className="text-xs sm:text-sm text-gray-700 leading-relaxed max-h-[180px] sm:max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-2">
                                <ul className="space-y-2">
                                  {currentData.allergens.map((allergen, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="text-orange-500 flex-shrink-0">
                                        ●
                                      </span>
                                      <span className="flex-1">{allergen}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center px-0">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            {whyChooseTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {content.features.map((feature) => (
              <div key={feature.title} className="p-6 md:p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductIngredients;
