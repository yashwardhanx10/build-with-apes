import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoIsItFor from "@/components/WhoIsItFor";
import FounderStory from "@/components/FounderStory";
import BenefitsSection from "@/components/BenefitsSection";
import InsideCommunity from "@/components/InsideCommunity";
import PastWorkshops from "@/components/PastWorkshops";
import ProgramsSection from "@/components/ProgramsSection";
import CityMeetups from "@/components/CityMeetups";
import TestimonialsSection from "@/components/TestimonialsSection";
import FreeResources from "@/components/FreeResources";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhoIsItFor />
      <FounderStory />
      <BenefitsSection />
      <InsideCommunity />
      <PastWorkshops />
      <ProgramsSection />
      <CityMeetups />
      <TestimonialsSection />
      <FreeResources />
      <PricingSection />
      <FAQSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
