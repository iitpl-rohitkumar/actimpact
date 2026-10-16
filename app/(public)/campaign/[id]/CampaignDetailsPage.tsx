"use client";

import React, { useState } from "react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import CampaignHero from "./CampaignHero";
import CampaignTabsSection from "./CampaignTabsSection";
import CampaignDonationWidget, { SelectedSupplyItem } from "./CampaignDonationWidget";
import { defaultCampaign, CampaignData } from "./campaignData";

interface CampaignDetailsPageProps {
  id?: string;
}

export default function CampaignDetailsPage({ id }: CampaignDetailsPageProps) {
  // If specific campaign matching is needed in the future, it can be extended here
  const campaign: CampaignData = defaultCampaign;

  // State to trigger Right Side Summary Mode on "Continue to Donate" click
  const [isDonationMode, setIsDonationMode] = useState<boolean>(false);
  const [selectedSupplies, setSelectedSupplies] = useState<SelectedSupplyItem[]>([]);

  const handleContinueToDonate = (supplies: SelectedSupplyItem[]) => {
    setSelectedSupplies(supplies);
    setIsDonationMode(true);

    // Mobile view (< 1024px) par user ko directly summary card tak scroll karwao
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const widgetElement = document.getElementById("donation-widget-section");
      if (widgetElement) {
        widgetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <WebsiteLayout>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Campaign Content (8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <CampaignHero campaign={campaign} />
            <CampaignTabsSection
              campaign={campaign}
              onContinueToDonate={handleContinueToDonate}
            />
          </div>

          {/* Right Column: Sticky Donation Widget (4 cols on lg) */}
          <div id="donation-widget-section" className="lg:col-span-4">
            <CampaignDonationWidget
              campaign={campaign}
              isDonationMode={isDonationMode}
              selectedSupplies={selectedSupplies}
            />
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
}