"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  AlertCircle,
  Users,
  Baby,
  Accessibility,
  Utensils,
  CloudRain,
  Venus,
  PawPrint,
  Sparkles,
  TreePine,
  GraduationCap,
  HeartHandshake,
  MoreHorizontal,
} from "lucide-react";
import {
  FacebookIcon,
  WhatsAppIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";

export default function FundraisersSection() {
  const [activeCategory, setActiveCategory] = useState("Elderly");

  const categories = [
    { name: "Urgent", icon: AlertCircle },
    { name: "Elderly", icon: Users },
    { name: "Children", icon: Baby },
    { name: "Specially-Abled", icon: Accessibility },
    { name: "Hunger", icon: Utensils },
    { name: "Disaster-Relief", icon: CloudRain },
    { name: "Women", icon: Venus },
    { name: "Strays", icon: PawPrint },
    { name: "Faith", icon: Sparkles },
    { name: "Wildlife", icon: TreePine },
    { name: "Gaushala", icon: HeartHandshake },
    { name: "Education", icon: GraduationCap },
    { name: "Transgender", icon: HeartHandshake },
    { name: "Others", icon: MoreHorizontal },
  ];

  const campaigns = [
    {
      id: 1,
      image: "/images/img-card-1_618f1102.png",
      badgeRight: "Verified Campaign",
      title: "6-Year-Old Meera Needs an Urgent Heart Surgery to Survive",
      author: "By Suresh Patel",
      raised: "₹1,85,000",
      goalPercent: 55,
      donors: "842 Donors",
      category: "Urgent",
      link: "/campaign/meera-heart-surgery",
    },
    {
      id: 2,
      image: "/images/img-card-1_5519d404.png",
      badgeRight: "Matching Active",
      title:
        "Flash Floods Left 400+ Families Homeless — Help Rebuild Their Lives",
      author: "By Actsimpact Relief Team",
      raised: "₹3,20,000",
      goalPercent: 72,
      donors: "1,156 Donors",
      category: "Disaster-Relief",
      link: "/campaign/flash-floods-rebuild",
    },
    {
      id: 3,
      image: "/images/img-card-1_deee186e.png",
      badgeRight: "Urgent Need",
      title:
        "Help 12-Year-Old Arjun Beat Leukemia — Fund His Bone Marrow Transplant",
      author: "By Kavita Sharma",
      raised: "₹8,50,000",
      goalPercent: 68,
      donors: "2,340 Donors",
      category: "Children",
      link: "/campaign/arjun-leukemia",
    },
    {
      id: 4,
      image: "/images/img-card-1_37a7bcfa.png",
      badgeRight: "Education Fund",
      title: "Send 50 Tribal Girls to School — Break the Cycle of Poverty",
      author: "By Shakti Foundation",
      raised: "₹4,75,000",
      goalPercent: 82,
      donors: "1,890 Donors",
      category: "Education",
      link: "/campaign/tribal-girls-education",
    },
    {
      id: 5,
      image: "/images/img-card-1_c51fb965.png",
      badgeRight: "Critical Care",
      title: "Help Rohan Walk Again — Fund His Life-Changing Spinal Surgery",
      author: "By Deepak Verma",
      raised: "₹6,20,000",
      goalPercent: 60,
      donors: "1,575 Donors",
      category: "Elderly",
      link: "/campaign/rohan-spinal-surgery",
    },
  ];

  return (
    <section className="w-full bg-[#20C99714] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-[700px] mb-8">
          <span className="font-sans font-normal text-[18px] sm:text-[20px] text-[#FF5523] block">
            Browse Verified Fundraisers
          </span>
          <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[36px] text-[#292925] mt-1 leading-tight">
            Campaigns That Need Your Support
          </h2>
        </div>
        {/* Category Pills Bar (Horizontal Scrollable) */}
        <div className="w-full border-b border-[#EBEBEF] mb-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex items-end min-w-max">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;

              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`relative flex flex-col items-center justify-center pt-3 pb-3 px-6 sm:px-7 cursor-pointer whitespace-nowrap transition-colors select-none ${
                    isActive
                      ? "text-[#FF5523]"
                      : "text-[#4A4A4A] hover:text-[#1F1F1F]"
                  }`}
                >
                  {/* Icon */}
                  <Icon className="w-6 h-6 mb-2 shrink-0 stroke-[1.6]" />

                  {/* Label */}
                  <span className="font-sans font-medium text-[14px] leading-tight">
                    {cat.name}
                  </span>

                  {/* Active bottom border directly aligning with the baseline */}
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-[#FF5523] z-10" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {campaigns.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[22px] border border-[#E5E9EB] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Card Image Container with Exact Badges */}
              <div className="relative w-full h-[225px] overflow-hidden group">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Top Right: Tax benefits badge flush with top/right corners */}
                <div className="absolute top-0 right-0 bg-[#00A859] rounded-bl-[14px] px-3.5 py-1.5 shadow-sm">
                  <span className="font-sans font-medium text-[12px] text-white">
                    Tax benefits
                  </span>
                </div>

                {/* Bottom Left: Verified Campaign badge flush with left edge */}
                <div className="absolute bottom-6 left-0 bg-white rounded-r-[6px] pl-3.5 pr-4 py-1.5 shadow-sm">
                  <span className="font-sans font-semibold text-[13px] text-[#FF5523]">
                    {card.badgeRight || "Verified Campaign"}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-4 px-4 pb-4 flex flex-col justify-between flex-1">
                {/* Title & Author */}
                <div>
                  <h3 className="font-serif font-semibold text-[17px] text-[#1D3557] leading-[1.38] line-clamp-2 min-h-[46px]">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[13px] text-[#64748B] mt-2">
                    By {card.author.replace(/^By\s+/i, "")}
                  </p>
                </div>

                {/* Progress Container */}
                <div className="mt-4">
                  <div className="w-full h-[7px] bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00C48C] rounded-full transition-all duration-500"
                      style={{ width: `${card.goalPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between mt-2.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-sans font-bold text-[18px] text-[#1E293B]">
                        {card.raised}
                      </span>
                      <span className="font-sans font-normal text-[13px] text-[#94A3B8]">
                        Raised
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[#FF5523]">
                      <Heart className="w-3.5 h-3.5 fill-[#FF5523] stroke-none" />
                      <span className="font-sans font-bold text-[14px]">
                        {card.donors} Donors
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions: Share & Donate Now */}
                <div className="mt-4 pt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-sans text-[16px] text-[#475569] lowercase font-normal">
                      share:
                    </span>
                    <div className="flex items-center gap-2 text-[#475569]">
                      <button
                        type="button"
                        className="w-5 h-5 flex items-center justify-center hover:text-[#1877F2] transition-colors cursor-pointer"
                        title="Share on Facebook"
                      >
                        <FacebookIcon className="w-4 h-4 fill-current" />
                      </button>
                      <button
                        type="button"
                        className="w-5 h-5 flex items-center justify-center hover:text-[#25D366] transition-colors cursor-pointer"
                        title="Share on WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                      </button>
                      <button
                        type="button"
                        className="w-5 h-5 flex items-center justify-center hover:text-[#0A66C2] transition-colors cursor-pointer"
                        title="Share on LinkedIn"
                      >
                        <LinkedInIcon className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>

                  <Link
                    href={card.link}
                    className="bg-[#FF5523] hover:bg-[#E5481B] active:scale-95 transition-all text-white font-sans font-semibold text-[14px] px-5 py-2.5 rounded-tl-[16px] rounded-br-[16px] rounded-tr-[2px] rounded-bl-[2px] flex items-center gap-2 shadow-sm"
                  >
                    <span>Donate Now</span>
                    <Heart className="w-4 h-4 fill-white stroke-none shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
