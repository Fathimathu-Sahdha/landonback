import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const InspirationalSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const { pageContent, isRtl } = useLanguage();
  const content = pageContent.home.inspiration;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="pt-8 pb-8 md:pt-16 md:pb-16 px-4 bg-background relative">
      {/* Floating Bread Slice Image with Parallax */}
      <div
        className={`absolute top-1/2 hidden md:block transition-transform duration-75 ease-out z-30 ${isRtl ? "right-[-6rem] md:right-[-16rem] lg:right-[-13rem]" : "left-[-6rem] md:left-[-16rem] lg:left-[-13rem]"}`}
        style={{
          transform: `translate3d(0, ${-scrollY * 0.1}px, 0) translateY(-50%)`
        }}
      >
        <img 
          src="/assets/images/bread_slice.webp" 
          alt={content.breadSliceAlt}
          className="w-[25rem] h-auto opacity-80"
        />
      </div>
      
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-5xl lg:text-6xl s:text-[30px] font-bold text-foreground mb-6">
          {content.title}
        </h1>
        <p className="text-sm md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto s:text-base">
          {content.description}
        </p>
        <Button
          variant="default"
          size="lg"
          className="bg-dark-footer text-white hover:bg-dark-footer/90 px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-medium rounded-full"
          onClick={() => navigate('/products')}
        >
          {content.cta}
        </Button>
      </div>
    </section>
  );
};

export default InspirationalSection;
