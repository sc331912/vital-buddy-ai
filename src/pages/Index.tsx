import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HealthResources from "@/components/HealthResources";
import HealthAlerts from "@/components/HealthAlerts";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HealthResources />
      <HealthAlerts />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
