import Footer from "@/components/Footer";
import AnimatedProductCard from "@/components/AnimatedProductCard";
import { useNavigate } from "react-router-dom";
import { getLocalizedProductCategories, getCategoryUrlName, productCategories } from "@/data/productData";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const navigate = useNavigate();
  const { locale, pageContent } = useLanguage();
  const content = pageContent.products.listing;
  const showIngredients = locale !== "ar";
  const productCategories = getLocalizedProductCategories(locale);
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Load next batch of categories
  const loadNextBatch = () => {
    if (isLoading) return;

    setIsLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      const lastVisibleIndex = visibleCategories.length > 0
        ? Math.max(...visibleCategories)
        : -1;

      const nextCategoriesToLoad: number[] = [];
      let currentIndex = lastVisibleIndex + 1;

      while (currentIndex < productCategories.length && nextCategoriesToLoad.length === 0) {
        const currentCategory = productCategories[currentIndex];

        if (currentCategory.products.length > 4) {
          // Load only this category
          nextCategoriesToLoad.push(currentIndex);
          break;
        } else {
          // Load this category and the next one
          nextCategoriesToLoad.push(currentIndex);
          if (currentIndex + 1 < productCategories.length) {
            nextCategoriesToLoad.push(currentIndex + 1);
          }
          break;
        }
      }

      if (nextCategoriesToLoad.length > 0) {
        setVisibleCategories([...visibleCategories, ...nextCategoriesToLoad]);
      }

      setIsLoading(false);
    }, 1000);
  };

  // Initial load
  useEffect(() => {
    if (productCategories.length > 0) {
      const firstCategory = productCategories[0];
      if (firstCategory.products.length > 4) {
        setVisibleCategories([0]);
      } else {
        setVisibleCategories([0, 1]);
      }
    }
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          const allCategoriesLoaded = visibleCategories.length >= productCategories.length;
          if (!allCategoriesLoaded) {
            loadNextBatch();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [visibleCategories, isLoading]);

  return (
    <div className="min-h-screen bg-background pt-[4.5rem]">
      {/* Hero Image Section */}
      <section className="relative w-full">
        <img
          src="/assets/images/product-banner.webp"
          alt={content.heroAlt}
          className="w-full h-64 md:h-[25rem] lg:h-[33rem] object-cover"
        />

        {/* Bottom Curved SVG */}
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

      {/* What do you fancy today section */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-16 px-4">
        <div className="products-container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8 s:text-[30px]">
            {content.fancyTitle}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto s:text-base">
            {content.fancyDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {content.categoryIcons.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-20 text-center cursor-pointer hover:scale-110 transition-transform"
                onClick={() => navigate(`/products/browse/${getCategoryUrlName(category.categoryName)}`)}
              >
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-white text-2xl mb-2`}>
                  {category.icon}
                </div>
                <span className="text-xs font-medium text-foreground leading-tight s:text-sm">{category.categoryName}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today we suggest you section */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 bg-white">
        <div className="products-container">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8 s:text-[30px]">
            {content.suggestTitle}
          </h2>

          <div className="flex flex-wrap gap-4 md:grid md:grid-cols-3 md:gap-8 max-w-4xl mx-auto justify-center md:justify-start">
            {content.suggestedProducts.map((product, index) => (
              <div
                key={index}
                className={`w-[calc(50%-0.5rem)] md:w-full ${content.suggestedProducts.length % 2 === 1 && index === content.suggestedProducts.length - 1 ? 'mx-auto' : ''}`}
              >
                <div className="group cursor-pointer">
                  <div className="overflow-hidden card-shadow hover:shadow-2xl transform transition-all duration-700 ease-out mb-6 group-hover:scale-[1.02] group-hover:-translate-y-2 rounded-lg">
                    <div className="h-[14rem] md:h-[23rem] relative overflow-hidden bg-gray-400/60 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-[80%] max-h-[80%] object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-foreground line-clamp-2 text-sm md:text-base s:text-[18px]" style={{ fontWeight: 700, fontSize: 'clamp(12px, 3vw, 18px)' }}>
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Sections */}
      {productCategories.map((category, categoryIndex) => {
        const isVisible = visibleCategories.includes(categoryIndex);

        if (!isVisible) return null;

        return (
          <section key={categoryIndex} className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 bg-gray-50">
            <div className="products-container">
              <div className="mb-12 relative">
                <h2 className="text-2xl md:text-3xl lg:text-4xl s:text-[30px] font-extrabold text-center italic text-red-600" style={{ fontFamily: "'Dancing Script', cursive", transform: "skewY(-6deg)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>{category.name}</h2>
                {showIngredients && (
                <a
                  href={`/products/category/${getCategoryUrlName(category.name)}`}
                  className="absolute top-0 right-0 text-sm md:text-base text-foreground hover:text-gray-600 underline cursor-pointer md:block hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/products/category/${getCategoryUrlName(category.name)}`);
                  }}
                >
                  {content.viewIngredients}
                </a>
                )}
              </div>

              <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
                {category.products.map((product, index) => (
                  <div key={index} className="w-[calc(50%-0.5rem)] md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                    <AnimatedProductCard
                      title={product.name}
                      image1={product.image}
                      image2={product.image2}
                      size={product.size}
                      bgcolor={productCategories[categoryIndex].name === "Donuts" || productCategories[categoryIndex].name === "Premium Range" ? product.backgroundColor : product.bgcolor}
                      slug={product.slug}
                    />
                  </div>
                ))}
              </div>

              {/* Mobile View Ingredients Button - Below products */}
              {showIngredients && (
              <div className="mt-8 text-center md:hidden">
                <a
                  href={`/products/category/${getCategoryUrlName(category.name)}`}
                  className="inline-block text-sm text-foreground hover:text-gray-600 underline cursor-pointer s:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/products/category/${getCategoryUrlName(category.name)}`);
                  }}
                >
                  {content.viewIngredients}
                </a>
              </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Loading Dotted Loader */}
      {isLoading && (
        <section className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 bg-gray-50">
          <div className="products-container flex justify-center items-center">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: '#dc2626', animationDelay: '0ms' }}></div>
              <div className="w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: '#dc2626', animationDelay: '150ms' }}></div>
              <div className="w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: '#dc2626', animationDelay: '300ms' }}></div>
            </div>
          </div>
        </section>
      )}

      {/* Intersection Observer Target */}
      <div ref={observerTarget} className="h-10"></div>

      <Footer />
    </div>
  );
};

export default Products;
