import React from "react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import UrgentCasesSection from "./UrgentCasesSection";
import WhyActImpactSection from "./WhyActImpactSection";
import FundraisersSection from "./FundraisersSection";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HomePage() {
  return (
    <WebsiteLayout>
      <HeroSection />
      <StatsSection />
      <UrgentCasesSection />
      <WhyActImpactSection />
      <FundraisersSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </WebsiteLayout>
  );
}
