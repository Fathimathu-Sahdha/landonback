import recipe1 from "@/assets/recipe-1.webp";
import recipe2 from "@/assets/recipe-2.webp";
import recipe3 from "@/assets/recipe-3.webp";
import recipe4 from "@/assets/recipe-4.webp";
import recipe5 from "@/assets/recipe-5.webp";
import recipe6 from "@/assets/recipe-6.webp";
import gallery1 from "/assets/bread-ideas/gallery-1.webp";
import gallery2 from "/assets/bread-ideas/gallery-2.webp";
import gallery3 from "/assets/bread-ideas/gallery-3.webp";
import gallery4 from "/assets/bread-ideas/gallery-4.webp";
import gallery5 from "/assets/bread-ideas/gallery-5.webp";
import gallery6 from "/assets/bread-ideas/gallery-6.webp";
import gallery7 from "/assets/bread-ideas/gallery-7.webp";
import gallery8 from "/assets/bread-ideas/gallery-8.webp";
import gallery9 from "/assets/bread-ideas/gallery-9.webp";
import gallery10 from "/assets/bread-ideas/gallery-10.webp";
import gallery11 from "/assets/bread-ideas/gallery-11.webp";
import brushStroke from "/assets/svgs/brush_stroke.svg";
import { useLanguage } from "@/contexts/LanguageContext";

interface Recipe {
  id: number;
  image: string;
  alt: string;
  size: {
    height: string;
    width: string;
  };
  top: string;
}

const RecipeGallery = () => {
  const { pageContent, isRtl } = useLanguage();
  const content = pageContent.home.gallery;
  const allRecipes: Recipe[] = [
    { id: 1, image: gallery1, alt: content.imageAlts[0], size: { height: 'h-[8.4rem] md:h-[10.4rem]', width: 'w-[8.4rem] md:w-[10.4rem]' }, top: '0rem' },
    { id: 2, image: gallery2, alt: content.imageAlts[1], size: { height: 'h-[12.9rem] md:h-[16.9rem]', width: 'w-[12.9rem] md:w-[16.9rem]' }, top: '0rem' },
    { id: 3, image: recipe2, alt: content.imageAlts[2], size: { height: 'h-[12.9rem] md:h-[16.9rem]', width: 'w-[12.9rem] md:w-[16.9rem]' }, top: '0rem' },
    { id: 4, image: gallery4, alt: content.imageAlts[3], size: { height: 'h-[8.4rem] md:h-[10.4rem]', width: 'w-[8.4rem] md:w-[10.4rem]' }, top: '0rem' },
    { id: 5, image: gallery5, alt: content.imageAlts[4], size: { height: 'h-[8.4rem] md:h-[10.4rem]', width: 'w-[8.4rem] md:w-[10.4rem]' }, top: '0rem' },
    { id: 6, image: gallery6, alt: content.imageAlts[5], size: { height: 'h-[12.9rem] md:h-[16.9rem]', width: 'w-[12.9rem] md:w-[16.9rem]' }, top: '0rem' },
    { id: 7, image: gallery7, alt: content.imageAlts[6], size: { height: 'h-[12.9rem] md:h-[16.9rem]', width: 'w-[12.9rem] md:w-[16.9rem]' }, top: '0rem' },
    { id: 8, image: recipe4, alt: content.imageAlts[7], size: { height: 'h-[8.4rem] md:h-[10.4rem]', width: 'w-[8.4rem] md:w-[10.4rem]' }, top: '0rem' },
    { id: 9, image: recipe6, alt: content.imageAlts[8], size: { height: 'h-[8.4rem] md:h-[10.4rem]', width: 'w-[8.4rem] md:w-[10.4rem]' }, top: '0rem' },
    { id: 10, image: gallery10, alt: content.imageAlts[9], size: { height: 'h-[12.9rem] md:h-[16.9rem]', width: 'w-[12.9rem] md:w-[16.9rem]' }, top: '0rem' },
    { id: 11, image: recipe6, alt: content.imageAlts[10], size: { height: 'h-[12.9rem] md:h-[16.9rem]', width: 'w-[12.9rem] md:w-[16.9rem]' }, top: '0rem' },
    { id: 12, image: gallery9, alt: content.imageAlts[11], size: { height: 'h-[8.4rem] md:h-[10.4rem]', width: 'w-[8.4rem] md:w-[10.4rem]' }, top: '0rem' },
    { id: 13, image: recipe1, alt: content.imageAlts[12], size: { height: 'h-[8.4rem] md:h-[10.4rem]', width: 'w-[8.4rem] md:w-[10.4rem]' }, top: '0rem' },
    { id: 14, image: gallery3, alt: content.imageAlts[13], size: { height: 'h-[12.9rem] md:h-[16.9rem]', width: 'w-[12.9rem] md:w-[16.9rem]' }, top: '0rem' },
    { id: 15, image: recipe3, alt: content.imageAlts[14], size: { height: 'h-[12.9rem] md:h-[16.9rem]', width: 'w-[12.9rem] md:w-[16.9rem]' }, top: '0rem' },
    { id: 16, image: gallery8, alt: content.imageAlts[15], size: { height: 'h-[8.4rem] md:h-[10.4rem]', width: 'w-[8.4rem] md:w-[10.4rem]' }, top: '0rem' },
    { id: 17, image: recipe5, alt: content.imageAlts[16], size: { height: 'h-[8.4rem] md:h-[10.4rem]', width: 'w-[8.4rem] md:w-[10.4rem]' }, top: '0rem' },
    { id: 18, image: gallery11, alt: content.imageAlts[17], size: { height: 'h-[12.9rem] md:h-[16.9rem]', width: 'w-[12.9rem] md:w-[16.9rem]' }, top: '0rem' },
  ];

  // Group recipes into columns (pairs of 2)
  const createColumns = (recipes: Recipe[]) => {
    const columns = [];
    for (let i = 0; i < recipes.length; i += 2) {
      if (i + 1 < recipes.length) {
        columns.push([recipes[i], recipes[i + 1]]);
      } else {
        columns.push([recipes[i]]);
      }
    }
    return columns;
  };

  // Get wavy margin for alternating columns to create wave effect
  const getWavyMargin = (columnIndex: number): string => {
    const pattern = ['-2rem', '1rem', '-2rem', '1rem'];
    return pattern[columnIndex % pattern.length];
  };

  const recipeColumns = createColumns(allRecipes);

  return (
    <section className="pt-8 pb-8 md:pt-16 md:pb-16 bg-background">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl s:text-[30px] font-bold text-foreground mb-4">{content.title}</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 s:text-base">
          {/* Recipes for every occasion! */}
        </p>
      </div>

      {/* Column-based Infinite Horizontal Scrolling Gallery */}
      <div className="mb-12">
        <div className="overflow-hidden relative w-full pt-8 pb-8" dir={isRtl ? "ltr" : undefined}>
          <div className="flex gap-8 animate-infinite-scroll">
            {/* First set of columns */}
            <div className="flex gap-8 shrink-0">
              {recipeColumns.map((column, columnIndex) => (
                <div
                  key={`column-first-${columnIndex}`}
                  className="flex items-center flex-col gap-3 shrink-0"
                  style={{ marginTop: getWavyMargin(columnIndex) }}
                >
                  {column.map((recipe) => (
                    <div key={`recipe-${recipe.id}`} className="shrink-0">
                      <img
                        src={recipe.image}
                        alt={recipe.alt}
                        className={`rounded-lg card-shadow hover:shadow-xl transition-shadow duration-300 cursor-pointer ${recipe.size.height} ${recipe.size.width} object-cover`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-8 shrink-0">
              {recipeColumns.map((column, columnIndex) => (
                <div
                  key={`column-second-${columnIndex}`}
                  className="flex flex-col gap-3 shrink-0"
                  style={{ marginTop: getWavyMargin(columnIndex) }}
                >
                  {column.map((recipe) => (
                    <div key={`recipe-duplicate-${recipe.id}`} className="shrink-0">
                      <img
                        src={recipe.image}
                        alt={recipe.alt}
                        className={`rounded-lg card-shadow hover:shadow-xl transition-shadow duration-300 cursor-pointer ${recipe.size.height} ${recipe.size.width} object-cover`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brush stroke spanning full viewport width at section end */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36">
        <img 
          src={brushStroke} 
          alt="Brush stroke" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl s:text-lg whitespace-nowrap px-4">
            {content.cta}
          </span>
        </div>
      </div>
    </section>
  );
};

export default RecipeGallery;
