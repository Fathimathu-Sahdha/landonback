import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const OurStories = () => {
  const { pageContent } = useLanguage();
  const content = pageContent.ourStories;
  const timelineVisuals = [
    {
      image: "/assets/equipments/equipment-old.jpeg",
      colorClass: "bg-orange-400",
      yearClass: "text-orange-500",
      imageClass: "absolute top-4 left-4 md:top-8 md:left-16 w-full h-[300px] md:h-[400px] object-cover shadow-lg",
      imageTransform: "20%",
      imageWrapperClass: "relative w-full md:w-[85%]",
      textWrapperClass: "",
    },
    {
      image: "/assets/images/our_stories_2.webp",
      colorClass: "bg-amber-600",
      yearClass: "text-amber-600",
      imageClass: "absolute top-4 right-4 md:top-8 md:right-16 w-full h-[300px] md:h-[400px] object-cover shadow-lg",
      imageTransform: "25%",
      imageWrapperClass: "relative w-full md:w-[85%] lg:order-2 md:ml-auto",
      textWrapperClass: "lg:order-1",
    },
    {
      image: "/assets/images/our_stories_4.webp",
      colorClass: "bg-yellow-400",
      yearClass: "text-yellow-500",
      imageClass: "absolute top-4 left-4 md:top-8 md:left-16 w-full h-[300px] md:h-[400px] object-cover shadow-lg",
      imageTransform: "30%",
      imageWrapperClass: "relative w-full md:w-[85%]",
      textWrapperClass: "",
    },
    {
      image: "/assets/equipments/equipment_5.webp",
      colorClass: "bg-sky-300",
      yearClass: "text-sky-500",
      imageClass: "absolute top-4 right-4 md:top-8 md:right-16 w-full h-[300px] md:h-[400px] object-cover shadow-lg",
      imageTransform: "35%",
      imageWrapperClass: "relative w-full md:w-[85%] lg:order-2 md:ml-auto",
      textWrapperClass: "lg:order-1",
    },
  ];
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check which sections are in viewport
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

          if (isVisible) {
            setVisibleSections(prev => new Set(prev).add(index));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-[4.5rem]">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vw * 9 / 16)', maxHeight: '85vh' }}>
        {/* Full Screen Background YouTube Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
          <div className="relative w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 w-full h-full object-cover"
              style={{
                transform: 'translate(-50%, -50%)',
                minWidth: '100%',
                minHeight: '100%'
              }}
            >
              <source src="/assets/videos/history_hero.mp4" type="video/mp4" />
              {content.hero.videoFallback}
            </video>
          </div>
        </div>

        {/* Overlay, for dark overlay add these classes bg-black bg-opacity-30 */}
        <div className="absolute inset-0 z-5"></div>

        {/* Bottom Curved SVG */}
        <svg
          className="absolute bottom-[-1px] left-0 w-full h-4 md:h-8 lg:h-12 z-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,100 L1440,100 L1440,0 C1080,100 360,100 0,0 Z"
          />
        </svg>
      </section>

      {/* 40 Years Section */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8">
            {content.history.title}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {content.history.description}
          </p>
          <div className="mt-12 md:mt-16">
            <img
              src="/assets/images/40th_anniversary.webp"
              alt={content.history.imageAlt}
              className="mx-auto w-full h-auto"
              style={{ maxWidth: '50rem' }}
            />
          </div>
          <div className="mt-8 md:mt-12">
            <h3 className="text-2xl md:text-4xl font-bold text-foreground">{content.history.tasteLineOne}</h3>
            <h4 className="text-2xl md:text-4xl font-bold text-foreground">{content.history.tasteLineTwo}</h4>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative pt-8 pb-8 md:pt-16 md:pb-16 px-4 md:px-8 lg:px-[13rem]">
        <div className="container mx-auto space-y-20">
          {content.timeline.map((item, index) => {
            const visual = timelineVisuals[index];

            return (
              <div key={`${item.year}-${item.title}`} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div
                  className={visual.imageWrapperClass}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                >
                  <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
                    <div
                      className={`${visual.colorClass} w-full h-full absolute bottom-0 transition-transform duration-1000 ease-out`}
                      style={{
                        transform: visibleSections.has(index) ? 'translateY(0)' : 'translateY(100%)'
                      }}
                    ></div>
                  </div>
                  <img
                    src={visual.image}
                    alt={item.imageAlt}
                    className={visual.imageClass}
                    style={{
                      transform: `translate3d(0, ${-scrollY * 0.05}px, 0) translateY(${visual.imageTransform})`,
                      transition: "transform 0.1s ease-out",
                    }}
                  />
                </div>
                <div className={visual.textWrapperClass}>
                  <div className={`text-2xl md:text-4xl font-bold ${visual.yearClass} mb-3 md:mb-4`}>{item.year}</div>
                  <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStories;
