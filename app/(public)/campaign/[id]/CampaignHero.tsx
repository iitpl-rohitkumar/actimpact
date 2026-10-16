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
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] rounded-[16px] overflow-hidden bg-slate-100 shadow-xs">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
