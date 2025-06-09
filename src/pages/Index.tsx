import React from "react";
import HeroSection from "@/components/HeroSection";
import DistrictInfo from "@/components/DistrictInfo";
import PropertyCards from "@/components/PropertyCards";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DistrictInfo />
      <PropertyCards />
      <ContactSection />
    </div>
  );
};

export default Index;
