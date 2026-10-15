import React from "react";
import Image from "next/image";

export default function BlogHeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
      <div className="relative w-full min-h-[420px] sm:min-h-[460px] rounded-[20px] overflow-hidden flex items-center p-6 sm:p-12 lg:p-16 shadow-lg">
        {/* Background Image */}
        <Image
          src="/images/hero-section_8a982c6b.png"
          alt="ActImpact Blog — Stories of Impact, Hope & Giving"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[806px] text-white flex flex-col justify-center">
          <span className="font-sans font-bold text-[14px] sm:text-[16px] text-[#FF5523] uppercase tracking-wider block">
            Stories of Impact, Hope &amp; Giving
          </span>

          <h1 className="font-serif font-bold text-[32px] sm:text-[40px] lg:text-[42px] text-white mt-2 leading-[1.18]">
            Read from this month
          </h1>

          <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#EBF3F5] mt-4 leading-relaxed max-w-[760px]">
            Inspiring stories from the field — donor journeys, campaign milestones, and the real impact your contributions create across India every day.
          </p>
        </div>
      </div>
    </section>
  );
}
