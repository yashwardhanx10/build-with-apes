import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyApesExists from "@/components/WhyApesExists";
import InsideCommunity from "@/components/InsideCommunity";
import PastSpeakers from "@/components/PastSpeakers";
import MeetFounders from "@/components/MeetFounders";
import VideoSection from "@/components/VideoSection";
import PastWorkshops from "@/components/PastWorkshops";
import CityMeetups from "@/components/CityMeetups";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhoIsItFor from "@/components/WhoIsItFor";
import WhatYouGet from "@/components/WhatYouGet";
import PricingSection from "@/components/PricingSection";
import NewsletterSection from "@/components/NewsletterSection";
import FAQSection from "@/components/FAQSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyApesExists />
      <InsideCommunity />
      <PastSpeakers />
      <MeetFounders />
      <VideoSection />
      <PastWorkshops />
      <CityMeetups />
      <TestimonialsSection />
      <WhoIsItFor />
      <WhatYouGet />
      <PricingSection />
      <NewsletterSection />
      <FAQSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
