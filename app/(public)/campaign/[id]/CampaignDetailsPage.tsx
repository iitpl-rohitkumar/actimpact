import React from "react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import CampaignHero from "./CampaignHero";
import CampaignTabsSection from "./CampaignTabsSection";
import CampaignDonationWidget from "./CampaignDonationWidget";
import { defaultCampaign, CampaignData } from "./campaignData";

interface CampaignDetailsPageProps {
  id?: string;
}

export default function CampaignDetailsPage({ id }: CampaignDetailsPageProps) {
  // If specific campaign matching is needed in the future, it can be extended here
  const campaign: CampaignData = defaultCampaign;

  return (
    <WebsiteLayout>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Campaign Content (8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <CampaignHero campaign={campaign} />
            <CampaignTabsSection campaign={campaign} />
          </div>

          {/* Right Column: Sticky Donation Widget (4 cols on lg) */}
          <div className="lg:col-span-4">
            <CampaignDonationWidget campaign={campaign} />
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
}
