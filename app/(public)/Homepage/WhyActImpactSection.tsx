import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Gift, Clock, Lock } from "lucide-react";

export default function WhyActImpactSection() {
  const trustFeatures = [
    {
      icon: ShieldCheck,
      text: "100% Verified Campaigns",
    },
    {
      icon: Gift,
      text: "Transparent & Fair Pricing",
    },
    {
      icon: Clock,
      text: "24-Hour Campaign Approval",
    },
    {
      icon: Lock,
      text: "Secure Payment Gateways",
    },
  ];

  return (
    <section className="w-full max-w-[1276px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Image */}
        <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[402px] rounded-[24px] overflow-hidden shadow-md">
          <Image
            src="/images/l3hlypdikarob6redhez57ify_png_6fb0a356.png"
            alt="Empowering Change — ActImpact"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right Column: Texts & Trust Points */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[36px] text-[#454545] leading-tight">
            Empowering Change, One Campaign at a Time
          </h2>

          <p className="font-sans font-normal text-[15px] sm:text-[16px] text-[#454545] mt-4 leading-relaxed">
            Actsimpact is India&apos;s trusted crowdfunding platform that connects compassionate donors with verified campaigns across medical emergencies, education, disaster relief, and personal causes. Whether you&apos;re a family in crisis seeking urgent funds or a changemaker looking to support a cause — our platform makes fundraising simple, transparent, and impactful. Launch a campaign in minutes, reach thousands of donors, and receive funds directly where they&apos;re needed most.
          </p>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {trustFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.text}
                  className="bg-[#FFF1ED] rounded-[74px] px-4 py-2 flex items-center gap-2.5"
                >
                  <Icon className="w-4 h-4 text-[#454545] shrink-0" />
                  <span className="font-sans font-normal text-[13px] sm:text-[14px] text-[#454545] whitespace-nowrap">
                    {feat.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/explore"
              className="inline-block border border-[#FF5523] rounded-[24px] px-6 py-2.5 font-serif font-normal text-[14px] text-[#FF5523] hover:bg-[#FF5523] hover:text-white transition-all cursor-pointer"
            >
              Explore Campaigns
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
