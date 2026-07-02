import { useParams, useNavigate } from "react-router-dom";
import { getLocalizedCategoryByUrlName, getCategoryUrlName } from "@/data/productData";
import AnimatedProductCard from "@/components/AnimatedProductCard";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CategoryProducts = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const { locale, pageContent } = useLanguage();
  const content = pageContent.products.browse;
  const showIngredients = locale !== "ar";

  // Find the category that matches the URL
  const category = categoryName
    ? getLocalizedCategoryByUrlName(categoryName, locale)
    : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-background pt-[4.5rem] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{content.categoryNotFound}</h1>
          <button
            onClick={() => navigate("/products")}
            className="text-red-600 hover:underline"
          >
            {content.backToProducts}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-[4.5rem]">
      {/* Header Section */}
      <section className="pt-8 pb-4 md:pt-12 md:pb-8 px-4 bg-gray-50">
        <div className="products-container">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-foreground hover:text-red-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{content.backToProducts}</span>
          </button>

          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center italic text-red-600"
            style={{
              fontFamily: "'Dancing Script', cursive",
              transform: "skewY(-6deg)",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            }}
          >
            {category.name}
          </h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 bg-gray-50">
        <div className="products-container">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            {category.products.map((product, index) => (
              <div
                key={index}
                className="w-[calc(50%-0.5rem)] md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <AnimatedProductCard
                  title={product.name}
                  image1={product.image}
                  image2={product.image2}
                  size={product.size}
                  bgcolor={product.backgroundColor || product.bgcolor}
                  slug={product.slug}
                />
              </div>
            ))}
          </div>

          {/* View Ingredients Link */}
          {showIngredients && (
          <div className="mt-12 text-center">
            <a
              href={`/products/category/${getCategoryUrlName(category.name)}`}
              className="inline-block text-sm md:text-base text-foreground hover:text-red-600 underline cursor-pointer transition-colors"
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

      <Footer />
    </div>
  );
};

export default CategoryProducts;
