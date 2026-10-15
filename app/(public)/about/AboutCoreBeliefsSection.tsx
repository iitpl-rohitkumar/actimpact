import React from "react";
import { Shield, Eye, Heart, Zap } from "lucide-react";

export default function AboutCoreBeliefsSection() {
  const pillars = [
    {
      icon: Shield,
      title: "Trust Above All",
      description:
        "Every single campaign is scrutinized, vetted, and verified before it is published. No unverified claims, no exceptions.",
    },
    {
      icon: Eye,
      title: "Radical Transparency",
      description:
        "You deserve to know where your hard-earned money went. We share regular recovery reports, discharge summaries, and hospital receipts directly with donors.",
    },
    {
      icon: Heart,
      title: "Every Life Counts",
      description:
        "From an orphaned infant needing an urgent heart surgery to an injured stray dog requiring a trauma kit — no cause is too small, and no life is insignificant.",
    },
    {
      icon: Zap,
      title: "Giving Made Frictionless",
      description:
        "Whether it is ₹100 or ₹1,00,000, a one-time gesture or monthly life-support, we empower you to save lives in just two taps via UPI or international cards.",
    },
  ];

  return (
    <section
      className="w-full py-16 sm:py-24"
      style={{
        background: "linear-gradient(180deg, #F3FCF9 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-14">
          <div className="pb-1 border-b border-[#20C997] mb-3">
            <span className="font-sans font-medium text-[13px] sm:text-[14px] text-[#20C997] tracking-wider uppercase">
              OUR CORE BELIEFS
            </span>
          </div>

          <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[36px] text-[#454545] leading-tight">
            The Four Pillars Behind Every Campaign We Host
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isAlternate = index % 2 === 1;

            return (
              <div
                key={pillar.title}
                className="bg-white p-6 sm:p-7 flex flex-col border border-[#E2E8F0] shadow-[0px_8px_16px_0px_#00000005] rounded-[16px] transition-shadow relative overflow-hidden group "
              >
                {/* Internal green curved background - mirrored / flipped on alternate cards */}
                <div
                  className={`absolute inset-[10px] bg-[#F3FCF9] pointer-events-none transition-transform duration-300 group-hover:scale-[1.02] ${
                    isAlternate
                      ? "rounded-tr-[130px] rounded-bl-[110px] rounded-tl-[14px] rounded-br-[14px]"
                      : "rounded-tl-[130px] rounded-br-[110px] rounded-tr-[14px] rounded-bl-[14px]"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Box: Smooth mint squircle */}
                  <div className="w-[46px] h-[46px] rounded-[12px] bg-[#DCF5EB] flex items-center justify-center mb-6 shrink-0">
                    <Icon className="w-5 h-5 text-[#00A86B] stroke-[1.9]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-[20px] text-[#0A3B49] mb-4 tracking-[-0.01em] leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans font-normal text-[15px] text-[#4B5563] leading-[1.6]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
