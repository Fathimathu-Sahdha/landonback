import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { pageContent } = useLanguage();
  const content = pageContent.home.hero;

  return (
    <section className="relative hero-bg flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vw * 8 / 16)' }}>
      {/* <section className="relative hero-bg h-64 md:h-[25rem] lg:h-[33rem] xl:h-[40rem] 2xl:h-[70rem] hero-section-custom flex items-center justify-center overflow-hidden">
      {/* Full Screen Background Local Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <div className="relative w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src="/assets/videos/hero-4k.mp4" type="video/mp4" />
            {content.videoFallback}
          </video>
        </div>
      </div>

      {/* Overlay, for dark overlay add these classes bg-black bg-opacity-30 */}
      <div className="absolute inset-0 z-5"></div>

      {/* Bottom Subtle Curve */}
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

      {/* <svg
        className="absolute bottom-0 left-0 w-full h-20 md:h-24 lg:h-32 z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,256L120,240C240,224,480,192,720,176C960,160,1200,160,1320,160L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg> */}
    </section>
  );
};

export default HeroSection;
