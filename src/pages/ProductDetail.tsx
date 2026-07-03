import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { productCategories, getLocalizedProduct, getProductUrlName, type ProductContent } from "@/data/productData";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductDetail = () => {
  const { productName } = useParams<{ productName: string }>();
  const navigate = useNavigate();
  const { locale, isRtl, pageContent } = useLanguage();
  const content = pageContent.products.detail;
  const showIngredients = locale !== "ar";
  const [product, setProduct] = useState<ProductContent | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to determine if color is dark or light
  const getTextColor = (bgColor: string) => {
    const hex = bgColor.replace("#", "");

    // Convert to RGB
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#1F2937" : "#FFFFFF";
  };

  // Get current variant data
  const getCurrentVariantData = () => {
    if (!product) return null;

    if (product.variants && selectedVariant) {
      return product.variants[selectedVariant];
    }

    return {
      ingredients: product.ingredients,
      nutrition: product.nutrition,
      allergens: product.allergens,
    };
  };

  const currentData = getCurrentVariantData();

  const getVariantLabel = (variantName: string) =>
    content.variantLabels[variantName] ?? variantName;

  const formatNutritionValue = (value?: string) => {
    if (!value || locale !== "ar") return value;

    return value
      .replace(/(\d+(?:\.\d+)?)\s*kcal\b/gi, "$1 سعر حراري")
      .replace(/\bkcal\s*(\d+(?:\.\d+)?)/gi, "$1 سعر حراري")
      .replace(/(\d+(?:\.\d+)?)\s*g\b/gi, "$1 غرام");
  };

  // Determine container height based on content size
  const hasVariants =
    product?.variants && Object.keys(product.variants).length > 0;
  const ingredientCount = currentData?.ingredients?.length || 0;
  const containerHeight =
    hasVariants || ingredientCount >= 13 ? "h-[750px]" : "h-[650px]";

  // Handle parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top;
        const parallaxValue = Math.min(0, -(scrollProgress * 0.08));
        setScrollY(parallaxValue);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find product from all categories
  useEffect(() => {
    let foundProduct: ProductContent | null = null;

    for (const category of productCategories) {
      const prod = category.products.find((p) => {
        const localizedProduct = getLocalizedProduct(p, locale);
        return [p.english.name, localizedProduct.name].some(
          (name) => getProductUrlName(name) === productName,
        );
      });
      if (prod) {
        foundProduct = getLocalizedProduct(prod, locale);
        break;
      }
    }

    if (foundProduct) {
      // Handle products with variants (e.g., BROWN BREAD)
      if (foundProduct.variants) {
        const firstVariantKey = Object.keys(foundProduct.variants)[0];
        setSelectedVariant(firstVariantKey);
      }
      setProduct(foundProduct);
    } else {
      // Redirect to 404 if product not found
      navigate("/404");
    }
  }, [productName, navigate, locale]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-[4.5rem]">
      {/* Banner Section */}
      <section
        className="relative w-full py-16 md:py-24"
        style={{ backgroundColor: product.bgcolor }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-8">
          {/* Mobile: Name first */}
          <div className="md:hidden mb-6">
            <h1
              className="text-3xl sm:text-4xl font-bold text-center"
              style={{ color: getTextColor(product.bgcolor) }}
            >
              {product.name}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Desktop: Text content on left */}
            <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
              {/* Desktop: Name */}
              <h1
                className="hidden md:block text-6xl font-bold mb-6"
                style={{ color: getTextColor(product.bgcolor) }}
              >
                {product.name}
              </h1>

              {/* Description - shows after image on mobile, before image on desktop */}
              <p
                className="text-lg md:text-xl leading-relaxed mb-6"
                style={{ color: getTextColor(product.bgcolor) }}
              >
                {product.description}
              </p>

              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: getTextColor(product.bgcolor), opacity: 0.9 }}
              >
                {product.detailDescription}
              </p>
            </div>

            {/* Image - shows second on mobile (after name), right side on desktop */}
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 order-1 md:order-2">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-xs md:max-w-md object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        {/* Bottom Curved SVG */}
        <svg
          className="absolute -bottom-px left-0 w-full h-20 md:h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f5f4f2"
            fillOpacity="1"
            d="M0,256L120,240C240,224,480,192,720,176C960,160,1200,160,1320,160L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </section>

      {/* Main Content Container with Overlapping Image */}
      <div ref={containerRef} className="relative">
        {/* Ingredients Section - Full Width */}
        <section
          style={{ backgroundColor: "#f5f4f2" }}
          className="w-full py-16 md:pt-40 md:pb-40"
        >
          <div className="max-w-7xl mx-auto px-8 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="transition-opacity duration-300">
                {showIngredients && (
                  <>
                <h2 className="text-xl md:text-2xl font-bold mb-8 text-black uppercase tracking-wider">
                  {content.ingredients}
                </h2>

                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-8 transition-all duration-300">
                  {currentData?.ingredients.map((ingredient, index) => (
                    <span key={index}>
                      <span>{ingredient}</span>
                      {index < currentData.ingredients.length - 1 ? ", " : "."}
                    </span>
                  ))}
                </p>
                  </>
                )}

                {/* Variant Selector - only show if product has variants */}
                {product.variants &&
                  Object.keys(product.variants).length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-bold mb-4 text-black uppercase tracking-wider">
                        {content.selectVariant}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {Object.keys(product.variants).map((variantName) => (
                          <button
                            key={variantName}
                            onClick={() => setSelectedVariant(variantName)}
                            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                              selectedVariant === variantName
                                ? "bg-orange-500 text-white shadow-lg scale-105"
                                : "bg-white border-2 border-gray-300 text-gray-700 hover:border-orange-500"
                            }`}
                          >
                            {getVariantLabel(variantName)}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                <h3 className="text-lg md:text-xl font-bold mb-4 text-black uppercase tracking-wider">
                  {content.allergens}
                </h3>

                {/* Allergens information */}
                {currentData?.allergens && currentData.allergens.length > 0 ? (
                  <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300">
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-2">
                      <span className="font-bold">{content.contains}</span>{" "}
                      {currentData.allergens.map(
                        (allergen: string, index: number) => (
                          <span key={index}>
                            <span className="font-semibold">{allergen}</span>
                            {index < currentData.allergens.length - 1
                              ? ", "
                              : "."}
                          </span>
                        ),
                      )}
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      {content.mayContainTraces}
                    </p>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300">
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                      {content.defaultAllergenNotice}
                    </p>
                  </div>
                )}
              </div>
              <div className="hidden md:block"></div>
            </div>

            {/* Mobile-only Product Image - Below Ingredients Content */}
            <div className="md:hidden flex justify-center mt-8">
              <div className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={product.detailImage}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nutritional Values Section - Full Width */}
        <section
          style={{ backgroundColor: "#ebe7e4" }}
          className="w-full py-16 md:pt-40 md:pb-40"
        >
          <div className="max-w-7xl mx-auto px-8 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="transition-opacity duration-300">
                <h2 className="text-xl md:text-2xl font-bold mb-8 text-black uppercase tracking-wider">
                  {content.nutritionalValues}
                </h2>
                <div className="grid grid-cols-2 gap-4 transition-all duration-300">
                  {/* Energy Card */}
                  <div className="bg-white rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      {content.energy}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-black mb-1">
                      {formatNutritionValue(currentData?.nutrition.energy)}
                    </div>
                  </div>

                  {/* Fats Card */}
                  <div className="bg-white rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      {content.fats}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-black mb-1">
                      {formatNutritionValue(currentData?.nutrition.fat)}
                    </div>
                  </div>

                  {/* Carbohydrates Card */}
                  <div className="bg-white rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      {content.carbs}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-black mb-1">
                      {formatNutritionValue(currentData?.nutrition.carbohydrate)}
                    </div>
                  </div>

                  {/* Fiber Card */}
                  <div className="bg-white rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      {content.fiber}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-black mb-1">
                      {formatNutritionValue(currentData?.nutrition.fiber) ||
                        content.notAvailable}
                    </div>
                  </div>

                  {/* Proteins Card - Spans 2 columns for emphasis */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 hover:shadow-lg transition-all duration-300 col-span-2 text-white">
                    <div className="text-xs md:text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">
                      {content.proteins}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold mb-1">
                      {formatNutritionValue(currentData?.nutrition.protein)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Vertical Image Container with Parallax - Overlapping Both Sections */}
        <div
          className={`hidden md:block absolute top-[10rem] ${
            isRtl ? "left-0" : "right-0"
          } w-1/2 xl:w-[57%] 2xl:w-[61%] product-detail-floating-image h-full pointer-events-none`}
        >
          <div className="sticky top-24 flex items-center justify-center">
            <div
              className={`relative w-[550px] ${containerHeight} bg-white rounded-lg overflow-hidden`}
              style={{ top: "9rem" }}
            >
              <div
                className="absolute inset-0 flex items-start justify-center transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${scrollY}px)` }}
              >
                <img
                  src={product.detailImage}
                  alt={product.name}
                  className="w-full h-[110%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <section className="w-full">
        <img
          src="/assets/images/product-detail-banner.webp"
          alt={content.bannerAlt}
          className="w-full h-auto object-cover"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
