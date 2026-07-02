import HeroSection from "@/components/HeroSection";
import InspirationalSection from "@/components/InspirationalSection";
import ProductGrid from "@/components/ProductGrid";
import FeatureSection from "@/components/FeatureSection";
import AboutUsSection from "@/components/AboutUsSection";
import RecipeShowcase from "@/components/RecipeShowcase";
import RecipeGallery from "@/components/RecipeGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-[4.5rem]">
      <HeroSection />
      <InspirationalSection />
      <ProductGrid />
      <FeatureSection />
      <AboutUsSection />
      <RecipeShowcase />
      <RecipeGallery />
      <Footer />
    </div>
  );
};

export default Index;
