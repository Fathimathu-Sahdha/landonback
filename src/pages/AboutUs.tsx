import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { pageContent, isRtl } = useLanguage();
  const content = pageContent.aboutUs;
  const equipmentImages = [
    "/assets/equipments/equipment_1.webp",
    "/assets/equipments/equipment_2.jpg",
    "/assets/equipments/equipment_3.png",
    "/assets/equipments/equipment_4.png",
    "/assets/equipments/equipment_5.webp",
  ];
  const equipmentOffsets = ["0px", "-40px", "-80px", "-40px", "0px"];

  return (
    <div className="min-h-screen bg-background pt-[4.5rem]">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-[25rem] lg:h-[33rem] w-full overflow-hidden">
        <img
          src="/assets/images/about-banner.webp"
          alt={content.hero.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">{content.hero.title}</h1>
        </div>
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

      {/* About Us Section */}
      <section className="container mx-auto px-6 pb-8 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Text Content */}
          <div className="space-y-6 mt-8 md:mt-16 lg:mt-20">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#2A3C88' }}>
              {content.intro.title}
            </h2>
            {content.intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right - Single Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/assets/images/about-us-logo-image.webp"
              alt={content.intro.imageAlt}
              className="w-full h-auto rounded-3xl scale-110"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative pt-8 pb-8 md:pt-16 md:pb-16 overflow-hidden">
        {/* Curved Background Shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/30">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 400C300 200 600 150 900 300C1200 450 1350 350 1440 250V800H0V400Z"
              className="fill-orange-100/40"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-16" style={{ color: '#2A3C88' }}>
            {content.missionVision.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {content.missionVision.cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index === 0 ? 0 : 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-border hover:shadow-xl transition-shadow"
              >
                <div className={`w-20 h-20 rounded-full ${index === 0 ? "bg-orange-100" : "bg-amber-100"} flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-4xl">{card.icon}</span>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 text-center">{card.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why London Bakery is Truly Unique Section */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-16" style={{ color: '#2A3C88' }}>
            {content.unique.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {content.unique.points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col items-center text-center ${index === 4 ? "md:col-span-2 md:justify-self-center md:w-1/2 lg:col-span-1 lg:w-full" : ""}`}
              >
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <span className="text-5xl">{point.icon}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">{point.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finest Equipments and Machines Section */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8" style={{ color: '#2A3C88' }}>
            {content.equipment.title}
          </h2>

          <p className="text-sm md:text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            {content.equipment.description}
          </p>

          {/* Stepped Images Layout - Responsive Grid */}
          <div className="flex justify-center items-center gap-6 max-w-6xl mx-auto">
            {/* Mobile: 2-2-1 grid layout */}
            <div className="grid grid-cols-2 gap-4 w-full lg:hidden">
              {equipmentImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-full h-48 rounded-xl overflow-hidden shadow-lg ${index === 4 ? "col-span-2 max-w-[calc(50%-0.5rem)] mx-auto" : ""}`}
                >
                  <img
                    src={image}
                    alt={content.equipment.imageAlts[index]}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Web: Stepped Images Layout */}
            <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-6 lg:max-w-6xl lg:mx-auto lg:flex-nowrap">
              {equipmentImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-48 h-64 rounded-xl overflow-hidden shadow-lg"
                  style={{ marginTop: equipmentOffsets[index] }}
                >
                  <img
                    src={image}
                    alt={content.equipment.imageAlts[index]}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Distribute Section */}
      <section className="pt-8 pb-8 md:pt-16 bg-background"> {/* md:pb-16 */}
        <div className="container mx-auto px-6">
          {/* Through Retail Outlets */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <h3 className="text-xl md:text-3xl font-bold text-center md:text-left" style={{ color: '#2A3C88' }}>{content.distribution.title}</h3>
            </div>

            {/* Infinite Scrolling Retailers */}
            <div className="relative overflow-hidden" dir={isRtl ? "ltr" : undefined}>
              <div className="flex gap-8 w-max animate-scroll hover:pause-animation">
                {[0, 1].map((setIndex) => (
                  <div key={setIndex} className="flex gap-8 shrink-0">
                    {content.distribution.retailers.map((retailer) => (
                      <div key={`${setIndex}-${retailer.name}`} className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center border border-border p-4">
                        <img src={retailer.logo} alt={retailer.name} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
