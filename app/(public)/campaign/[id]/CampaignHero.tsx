import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import { CampaignData } from "./campaignData";

interface CampaignHeroProps {
  campaign: CampaignData;
}

export default function CampaignHero({ campaign }: CampaignHeroProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Campaign Title */}
      <h1 className="font-serif font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-[#1E1E1E] leading-snug">
        {campaign.title}
      </h1>

      {/* Hero Media Container */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] rounded-[16px] overflow-hidden bg-slate-100 shadow-md">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
          <span className="bg-[#10B981] text-white font-sans font-semibold text-[12px] px-3 py-1 rounded-[6px] flex items-center gap-1 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified NGO
          </span>
          <span className="bg-[#FF5523] text-white font-sans font-semibold text-[12px] px-3 py-1 rounded-[6px] flex items-center gap-1 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            80G Tax Benefits
          </span>
        </div>
      </div>
    </div>
  );
}
