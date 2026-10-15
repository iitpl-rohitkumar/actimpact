import React from "react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import AboutHeroSection from "./AboutHeroSection";
import AboutStorySection from "./AboutStorySection";
import AboutVisionMissionSection from "./AboutVisionMissionSection";
import AboutCoreBeliefsSection from "./AboutCoreBeliefsSection";
import AboutSafetyProtocolSection from "./AboutSafetyProtocolSection";
import AboutFaqSection from "./AboutFaqSection";

export default function AboutPage() {
  return (
    <WebsiteLayout>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutVisionMissionSection />
      <AboutCoreBeliefsSection />
      <AboutSafetyProtocolSection />
      <AboutFaqSection />
    </WebsiteLayout>
  );
}
