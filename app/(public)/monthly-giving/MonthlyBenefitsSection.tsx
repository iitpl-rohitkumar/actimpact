import React from "react";
import { Shield, Zap, Eye, Percent, Heart, Award } from "lucide-react";

export default function MonthlyBenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Sustainable, Long-Term Impact",
      description:
        "One-time help solves emergencies, but recurring support builds lasting resilience. Give vulnerable lives a reliable safety net every month.",
    },
    {
      icon: Zap,
      title: "100% Automated & Hassle-Free",
      description:
        "Set it up in under 60 seconds. Your monthly giving is securely automated, giving you peace of mind without manual transactions.",
    },
    {
      icon: Eye,
      title: "Transparent Field Reporting",
      description:
        "Track every rupee. Receive monthly breakdown reports and video updates directly on your dashboard and WhatsApp.",
    },
    {
      icon: Percent,
      title: "80G Tax Exemption Benefits",
      description:
        "Maximize your generosity while saving on taxes. Receive instant 80G tax certificates directly to your email for every monthly cycle.",
    },
    {
      icon: Heart,
      title: "Start Every Month with Purpose",
      description:
        "Experience the deep satisfaction of knowing you've secured food, medicine, or shelter for someone in need at the start of every month.",
    },
    {
      icon: Award,
      title: "Exclusive Member Rewards & Badges",
      description:
        "Earn donor badges, digital impact certificates, and exclusive access to field visit opportunities as an active recurring donor.",
    },
  ];

  return (
    <section
      id="plans"
      className="w-full py-16 sm:py-24"
      style={{
        background: "linear-gradient(180deg, #F3FCF9 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header matching AboutCoreBeliefsSection design */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-14">
          <div className="pb-1 border-b border-[#20C997] mb-3">
            <span className="font-sans font-medium text-[13px] sm:text-[14px] text-[#20C997] tracking-wider uppercase">
              OUR CORE BELIEFS
            </span>
          </div>

          <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[36px] text-[#454545] leading-tight max-w-4xl">
            Why Subscribe to Act Impact&apos;s Monthly Giving Program?
          </h2>
        </div>

        {/* 6 Feature Cards Grid matching card styling and alternate corner treatments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isAlternate = index % 2 === 1;

            return (
              <div
                key={benefit.title}
                className="bg-white p-6 sm:p-7 flex flex-col border border-[#E2E8F0] shadow-[0px_8px_16px_0px_#00000005] rounded-[16px] transition-shadow relative overflow-hidden group"
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
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans font-normal text-[15px] text-[#4B5563] leading-[1.6]">
                    {benefit.description}
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