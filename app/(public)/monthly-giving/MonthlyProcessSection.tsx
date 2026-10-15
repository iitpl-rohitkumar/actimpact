import React from "react";
import { ArrowRight } from "lucide-react";

export default function MonthlyProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Mission",
      description:
        "Pick a cause close to your heart — from stray animal care and child nutrition to elderly shelter support.",
    },
    {
      num: "02",
      title: "Select Your Amount",
      description:
        "Choose a comfortable recurring amount (e.g., ₹500/month, ₹1,000/month) or create a custom plan.",
    },
    {
      num: "03",
      title: "Set Up Auto-Deduction",
      description:
        "Link your UPI, debit card, or net banking once. Your contribution automatically processes safely each month.",
    },
    {
      num: "04",
      title: "Receive Monthly Impact Proof",
      description:
        "Get real-time photos, videos, and field reports showing exact items delivered through your support.",
    },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[36px] text-[#454545] leading-tight">
          How Monthly Giving Works
        </h2>
      </div>

      {/* 4 Cards Grid with Connecting Arrows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">
        {steps.map((step, idx) => (
          <div key={step.num} className="relative flex flex-col">
            <div className="bg-white border-2 border-[#FF5523] rounded-[12px] p-6 sm:p-7 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-shadow">
              <div>
                <span className="font-sans font-black text-[24px] text-[#FF5523] block mb-4">
                  {step.num}
                </span>

                <h3 className="font-serif font-semibold text-[18px] text-[#093545] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="font-sans font-normal text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Connecting Arrow between cards on desktop */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-[#FF5523] items-center justify-center shadow-xs">
                <ArrowRight className="w-3.5 h-3.5 text-[#FF5523]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
