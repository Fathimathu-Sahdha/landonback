import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import AnimatedProductCard from "@/components/AnimatedProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductGrid = () => {
  const navigate = useNavigate();
  const { pageContent } = useLanguage();
  const productContent = pageContent.home.featuredProducts;

  const products = [
    {
      id: 1,
      title: productContent[0].title,
      description: productContent[0].description,
      image1: "/assets/breads/milkology_landing.webp",
      image2: "/assets/breads_inner/milkology_wp_cropped.webp",
      // bgColor: "bg-gradient-to-tr from-[#D41921] via-[#E63946] to-[#F72935]",
      bgColor: "bg-[#D41921]",
      image1Size: "w-full h-full",
      image2Size: "w-full h-full",
      slug: "milkology",
    },
    {
      id: 2,
      title: productContent[1].title,
      description: productContent[1].description,
      image1: "/assets/breads/mother_pride_landing.webp",
      image2: "/assets/breads_inner/brioche_loaf_wp.webp",
      // bgColor: "bg-gradient-to-tr from-[#D5AB45] via-[#E0B855] to-[#EBC565]",
      bgColor: "bg-[#c7a342]",
      image1Size: "w-full h-full",
      image2Size: "w-full h-full",
      slug: "mothers-pride-brioche-loaf",
    },
    {
      id: 3,
      title: productContent[2].title,
      description: productContent[2].description,
      image1: "/assets/breads/multigrain_landing.webp",
      image2: "/assets/breads_inner/multigrain_wp_cropped.webp",
      bgColor: "bg-[#325c45]",
      // bgColor: "bg-gradient-to-tr from-[#416B53] via-[#4F7A61] to-[#5D896F]",
      image1Size: "w-full h-full",
      image2Size: "w-full h-full",
      slug: "multigrain-bread",
    },
    {
      id: 4,
      title: productContent[3].title,
      description: productContent[3].description,
      image1: "/assets/breads/brown_landing.webp",
      image2: "/assets/breads_inner/brown_bread_wp2.webp",
      // bgColor: "bg-gradient-to-tr from-[#70392B] via-[#7F4235] to-[#8E4B3F]",
      bgColor: "bg-[#70392B]",
      image1Size: "w-full h-full",
      image2Size: "w-full h-full",
      slug: "brown-bread-ms",
    },
  ];

  return (
    <section className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 sm:px-8 lg:px-[8rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-4">
          {products.map((product) => (
            <AnimatedProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image1={product.image1}
              image2={product.image2}
              bgcolor={product.bgColor}
              size={product.image1Size}
              slug={product.slug}
            />
          ))}
          {/* OLD IMPLEMENTATION - COMMENTED OUT FOR REFERENCE */}
          {/* {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/products/${product.slug}`)}
            >
              <Card className="overflow-hidden card-shadow hover:shadow-2xl transform transition-all duration-700 ease-out mb-2 md:mb-6 group-hover:scale-[1.02] group-hover:-translate-y-2">
                <div className={`h-[10rem] s:h-[10rem] md:h-[23rem] lg:h-[17rem] xl:h-[23rem] relative overflow-hidden`}>
                  {/* Default gradient background */}
                  {/* <div className={`${product.bgColor} absolute inset-0 transition-all duration-700 ease-out group-hover:opacity-0`}></div> */}
                  {/* Hover gradient background */}
                  {/* {product.id === 1 && (
                    <div className="bg-gradient-to-br from-[#D41921] via-[#E63946] to-[#F72935] absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100"></div>
                  )}
                  {product.id === 2 && (
                    <div className="bg-gradient-to-br from-[#D5AB45] via-[#E0B855] to-[#EBC565] absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100"></div>
                  )}
                  {product.id === 3 && (
                    <div className="bg-gradient-to-br from-[#416B53] via-[#4F7A61] to-[#5D896F] absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100"></div>
                  )}
                  {product.id === 4 && (
                    <div className="bg-gradient-to-br from-[#70392B] via-[#7F4235] to-[#8E4B3F] absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100"></div>
                  )} */}
                  {/* {product.badge && (
                    <div className="absolute top-4 left-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold z-10">
                      {product.badge}
                    </div>
                  )} */}
                  {/* First Image - starts visible, pulls back dramatically on hover */}
                  {/* <img
                    src={product.image1}
                    alt={product.title}
                    className={`${product.image1Size} object-contain absolute inset-0 translate-y-0 scale-100 rotate-0 transition-all duration-700 ease-out group-hover:-translate-y-[120%] group-hover:scale-75 group-hover:-rotate-12 z-10`}
                  /> */}
                  {/* Second Image - starts below, pushes forward dramatically from bottom on hover */}
                  {/* <img
                    src={product.image2}
                    alt={product.title}
                    className={`${product.image2Size} object-contain absolute inset-0 translate-y-[120%] scale-75 rotate-12 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:scale-110 group-hover:rotate-0 z-20`}
                  />
                </div>
              </Card> */}
              {/* Text content outside the card */}
              {/* <div className="text-center">
                <h3 className="text-sm md:text-lg font-bold text-foreground mb-2 md:mb-3 line-clamp-2 s:text-[20px]">
                  <span className="md:hidden">
                    {product.id === 1 && (<><span>Milkology</span><br /><span>Bread</span></>)}
                    {product.id === 2 && (<><span>Mother's Pride</span><br /><span>Brioche Loaf</span></>)}
                    {product.id === 3 && (<><span>Multigrain</span><br /><span>Bread</span></>)}
                    {product.id === 4 && (<><span>Brown</span><br /><span>Bread</span></>)}
                  </span>
                  <span className="hidden md:inline">
                    {product.title}
                  </span>
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden md:block s:text-base s:block">
                  {product.description}
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
