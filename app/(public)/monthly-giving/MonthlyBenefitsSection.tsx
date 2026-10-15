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
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-14 sm:py-20" id="plans">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-[886px] mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-[4px] bg-[#20C997]/12 border border-[#20C997] mb-4">
          <span className="font-sans font-medium text-[13px] sm:text-[14px] text-[#20C997] tracking-wider uppercase">
            OUR CORE BELIEFS
          </span>
        </div>

        <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[36px] text-[#454545] leading-tight">
          Why Subscribe to Act Impact&apos;s Monthly Giving Program?
        </h2>
      </div>

      {/* 6 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="bg-white border border-[#E2E8F0] rounded-[12px] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Subtle decorative background tint */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#F3FCF9] rounded-bl-full -z-0 opacity-60 group-hover:scale-110 transition-transform duration-300" />

              <div className="relative z-10">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-[8px] bg-[#E4F8F2] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#20C997]" />
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-[19px] sm:text-[20px] text-[#093545] mb-3 leading-snug">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-normal text-[14px] sm:text-[15px] text-[#454545] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
