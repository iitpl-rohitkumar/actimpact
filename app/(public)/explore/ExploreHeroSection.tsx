import React from "react";
import Image from "next/image";

export default function ExploreHeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
      <div className="relative w-full min-h-[420px] sm:min-h-[460px] rounded-[20px] overflow-hidden flex items-center justify-center p-6 sm:p-12 lg:p-16 shadow-lg">
        {/* Background Image */}
        <Image
          src="/images/hero-section_bd77379e.png"
          alt="Explore Verified Campaigns — ActImpact"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-[#0000004D]" />

        {/* Hero Content */}
        <div className="relative z-10  text-white text-center">
          <span className="font-sans font-bold text-[14px] sm:text-[16px] text-[#fff] uppercase tracking-wider block">
            Explore Campaigns
          </span>

          <h1 className="font-serif font-bold text-[32px] sm:text-[40px] lg:text-[42px] text-white mt-2 leading-[1.18]">
            Find Campaigns That Matter
          </h1>

          <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#EBF3F5] mt-4 leading-relaxed max-w-[760px]">
            Browse verified campaigns across education, healthcare, animal welfare, and community relief. Every campaign is document-checked, so your support reaches those who need it most.
          </p>
        </div>
      </div>
    </section>
  );
}
