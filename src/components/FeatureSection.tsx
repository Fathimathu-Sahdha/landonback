import { useLanguage } from "@/contexts/LanguageContext";

const FeatureSection = () => {
  const { pageContent } = useLanguage();
  const content = pageContent.home.feature;

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 pt-8 pb-8 md:pt-16 md:pb-16 px-4 relative">
      {/* Baked text spanning across sections - positioned above the map */}
      <div className="absolute top-0 right-0 md:right-4 lg:right-8 transform -translate-y-1/2 w-[12rem] h-[5rem] md:w-[20rem] md:h-[10rem] lg:w-[23rem] lg:h-[10rem] z-20">
        <img 
          src="assets/images/baked_text.webp" 
          alt={content.bakedTextAlt}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative">
          {/* Left Side - Images */}
          <div className="relative h-64 md:h-[22rem] lg:h-[26rem]">
            {/* assets/images/about-us-landing.webp */}
            <img
              src="/assets/images/feature-landing.webp"
              alt={content.imageAlt}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="relative">
            <h2 className="text-2xl md:text-6xl lg:text-4xl xl:text-6xl s:text-[30px] font-bold mb-8 leading-tight text-black">
              <span className="s:inline-block">{content.titleLineOne}</span><br />
              <span className="s:inline-block">{content.titleLineTwo}</span>
            </h2>
            <p className="text-base md:text-xl mb-8 text-black/80 leading-relaxed max-w-lg s:text-base">
              {content.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Cupcake image in bottom right corner of section */}
      {/* <div className="absolute bottom-0 right-[1px] w-[6rem] h-[4.5rem] sm:w-[7rem] sm:h-[5.25rem] md:w-[8rem] md:h-[6rem] lg:w-[20rem] lg:h-[15rem]">
        <img
          src="assets/images/cup_cake.webp"
          alt="Cup Cake"
          className="w-full h-full object-contain"
        />
      </div> */}
    </section>
  );
};

export default FeatureSection;
