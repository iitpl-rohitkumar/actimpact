import React from "react";
import { Check, ArrowRight } from "lucide-react";

export default function AboutSafetyProtocolSection() {
  const steps = [
    {
      num: "01",
      title: "KYC & Identity",
      description:
        "The campaigner submits government-issued ID proof (Aadhaar, PAN), relationship verification, and contact details.",
    },
    {
      num: "02",
      title: "Medical Audit",
      description:
        "Our clinical verification teams cross-check hospital estimation letters, diagnostic lab reports, and admission numbers directly with hospital administration.",
    },
    {
      num: "03",
      title: "Direct Disbursement",
      description:
        "Donated funds are wired directly to the hospital's verified billing department or registered NGO bank accounts, eliminating intermediate leakage.",
    },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
      {/* Header */}
      <div className=" max-w-[886px] mb-12 sm:mb-16">
        <div className="inline-flex items-center px-3.5 py-1.5  border-b border-[#20C997] mb-4">
          <span className="font-sans font-semibold text-[13px] sm:text-[14px] text-[#20C997] tracking-wider uppercase">
            OUR SAFETY PROTOCOL
          </span>
        </div>

        <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[36px] text-[#454545] leading-tight">
          How We Keep Your Generosity Safe: Our 3-Step Verification
        </h2>
      </div>

      {/* 3 Step Cards Grid with Connecting Arrows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative items-stretch">
        {steps.map((step, idx) => (
          <div key={step.num} className="relative flex flex-col">
            <div className="bg-white border-2 border-[#FF5523] rounded-[12px] p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-shadow">
              <div>
                {/* Top Row: Number & Check Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans font-black text-[24px] text-[#FF5523]">
                    {step.num}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#FF5523]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#FF5523] stroke-[2.5]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif font-semibold text-[18px] text-[#093545] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-normal text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Connecting Arrow between step 1-2 and 2-3 on desktop */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-[#FF5523] items-center justify-center shadow-xs">
                <ArrowRight className="w-4 h-4 text-[#FF5523]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
