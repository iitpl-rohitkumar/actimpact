import React from "react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import ExploreHeroSection from "./ExploreHeroSection";
import ExploreGridSection from "./ExploreGridSection";

export default function ExplorePage() {
  return (
    <WebsiteLayout>
      <ExploreHeroSection />
      <ExploreGridSection />
    </WebsiteLayout>
  );
}
