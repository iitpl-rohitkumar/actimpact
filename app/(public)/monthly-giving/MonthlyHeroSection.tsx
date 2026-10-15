import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Heart } from "lucide-react";

export default function MonthlyHeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
      <div className="relative w-full min-h-[440px] sm:min-h-[460px] rounded-[20px] overflow-hidden flex items-center p-6 sm:p-12 lg:p-16 shadow-lg">
        {/* Background Image */}
        <Image
          src="/images/hero-section_9f880899.png"
          alt="Monthly Campaign — ActImpact"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[806px] text-white flex flex-col justify-center">
          <span className="font-sans font-bold text-[14px] sm:text-[16px] text-[#FF5523] uppercase tracking-wider block">
            Monthly campaign
          </span>

          <h1 className="font-serif font-bold text-[32px] sm:text-[40px] lg:text-[42px] text-white mt-2 leading-[1.18]">
            Impact You Can Measure, Every Single Month.
          </h1>

          <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#EBF3F5] mt-4 leading-relaxed max-w-[760px]">
            Transform lives with the power of recurring giving. Through Act Impact&apos;s Systematic Social Plan (SSP), your monthly contribution provides consistent food, shelter, and medical relief to those in desperate need.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href="/explore"
              className="bg-white/25 hover:bg-white/35 backdrop-blur-xs border border-white text-white font-sans font-medium text-[15px] px-6 py-2.5 rounded-[24px] flex items-center gap-2 transition-all shadow-xs"
            >
              <Compass className="w-4 h-4" />
              <span>Browse campaign</span>
            </Link>

            <Link
              href="#plans"
              className="bg-[#FF5523] hover:bg-[#e04515] border-[1.5px] border-[#20C997] text-white font-serif font-medium text-[16px] px-7 py-2.5 rounded-[24px] flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <span>Donate</span>
              <Heart className="w-4 h-4 fill-white stroke-none" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
