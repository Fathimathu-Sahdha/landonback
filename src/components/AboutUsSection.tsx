import { Wheat } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { pageContent } = useLanguage();
  const content = pageContent.home.about;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white pt-8 pb-8 md:pt-16 md:pb-16 px-8 relative">
      {/* Slanted Blueberry Bite Image - 75% on AboutUs, 25% on Recipe */}
      <div className="absolute right-[-2rem] bottom-0 z-20 pointer-events-none hidden md:block transition-transform duration-75 ease-out" 
           style={{
             transform: `translate3d(0, ${-scrollY * 0.1}px, 0) translateY(150%) rotate(17deg)`
           }}>
        <img 
          src="/assets/bites/blueberry_bite.webp" 
          alt="Blueberry bite" 
          className="w-[12rem] md:w-[15rem] lg:w-[17rem] h-auto"
        />
      </div>
      
      <div className="w-full md:container md:mx-auto lg:container lg:mx-auto xl:container xl:mx-auto px-0 md:px-4 lg:px-4 xl:px-4">
        {/* Main Content - 2 Part Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[600px]">
          {/* Left Side - Single Image with Badge */}
          <div className="relative">
            {/* Single About Us Landing Image */}
            <div className="relative h-80 md:h-[36rem] w-full max-w-md md:max-w-[40rem] mx-auto overflow-hidden">
              <img
                src="assets/images/about-us-landing.webp"
                alt={content.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Custom Shape Badge */}
            <div className="absolute top-4 -left-6 md:top-6 md:-left-6">
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl px-4 py-3 md:px-6 md:py-4 transform -rotate-3 shadow-lg">
                {/* Decorative dots */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-3 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="text-center text-white relative z-10">
                  <div className="text-2xl md:text-3xl font-bold">{content.badgeValue}</div>
                  <div className="text-xs md:text-sm font-medium">
                    {content.badgeLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 h-full flex flex-col justify-start">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Wheat className="text-orange-500 w-6 h-6" />
                <span className="text-orange-500 font-medium">{content.kicker}</span>
              </div>
              <h2 className="text-2xl md:text-5xl s:text-[30px] font-bold text-gray-900 leading-tight">
                {content.titleLineOne}<br />{content.titleLineTwo}
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed s:text-base">
                {content.description}
              </p>
            </div>

            {/* Feature Points */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-center -ml-7">
                <div className="w-32 h-24 flex items-center justify-center flex-shrink-0">
                  <img src="/assets/images/point_1_ab.webp" alt={content.features[0].imageAlt} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 s:text-[18px]">
                    {content.features[0].title}
                  </h4>
                  <p className="text-gray-600 text-sm s:text-base">
                    {content.features[0].description}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center -ml-7">
                <div className="w-32 h-24 flex items-center justify-center flex-shrink-0">
                  <img src="/assets/images/point_2_ab.webp" alt={content.features[1].imageAlt} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 s:text-[18px]">
                    {content.features[1].title}
                  </h4>
                  <p className="text-gray-600 text-sm s:text-base">
                    {content.features[1].description}
                  </p>
                </div>
              </div>

              {/* Feature 3 - Rectangle Badge with Tick */}
              <div className="flex items-center gap-3 bg-orange-100 text-orange-600 px-4 py-3 rounded-lg">
                <div className="w-5 h-5 bg-orange-500 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium s:text-base">
                  {content.features[2].title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
