import React from "react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import MonthlyHeroSection from "./MonthlyHeroSection";
import MonthlyWhySection from "./MonthlyWhySection";
import MonthlyProcessSection from "./MonthlyProcessSection";
import MonthlyBenefitsSection from "./MonthlyBenefitsSection";

export default function MonthlyGivingPage() {
  return (
    <WebsiteLayout>
      <MonthlyHeroSection />
      <MonthlyWhySection />
      <MonthlyProcessSection />
      <MonthlyBenefitsSection />
    </WebsiteLayout>
  );
}
