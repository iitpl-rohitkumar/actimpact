import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  CreditCard,
  TrendingUp,
  Rocket,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function HowItWorksSection() {
  const donorSteps = [
    {
      icon: Compass,
      title: "Explore Campaigns",
      description:
        "Browse verified fundraisers across medical, education, emergency relief, and personal causes.",
    },
    {
      icon: CreditCard,
      title: "Contribute Securely",
      description:
        "Donate via UPI, cards, net banking, or international gateways — fast, safe, and hassle-free.",
    },
    {
      icon: TrendingUp,
      title: "Track Real Impact",
      description:
        "Receive photo and video updates on how your contribution is making a difference in someone's life.",
    },
  ];

  const campaignerSteps = [
    {
      icon: Rocket,
      title: "Launch in 3 Minutes",
      description:
        "Enter your campaign details, set a fundraising goal, and share your story with supporting documents.",
    },
    {
      icon: CheckCircle2,
      title: "Get Verified & Amplified",
      description:
        "Our team verifies your campaign quickly. Get a dedicated campaign manager and promotional support to maximize reach.",
    },
    {
      icon: Building2,
      title: "Withdraw Funds Directly",
      description:
        "Funds are transferred directly to the hospital or beneficiary bank account — fast disbursement when it matters most.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#20C99714] py-16 sm:py-28 px-4 sm:px-6">
      {/* Background Texture from Figma */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/howwork.png"
          alt="How It Works Background"
          fill
          className="object-cover object-top "
        />
         </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-left  mx-auto mb-14">
          <span className="font-sans font-normal text-[18px] sm:text-[20px] text-white block">
            Simple, Transparent & Built for Action
          </span>
          <h2 className="font-serif font-bold text-[30px] sm:text-[36px] text-white mt-1">
            How It Works
          </h2>
        </div>

        {/* Two Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: For Donors */}
          <div className="bg-white rounded-[16px] border border-[#FFE6DE] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              {/* Card Title */}
              <div className="pb-4 border-b border-[#FFE6DE] mb-6">
                <h3 className="font-sans font-semibold text-[22px] sm:text-[24px] text-[#292925]">
                  For Donors
                </h3>
              </div>

              {/* Steps List */}
              <div className="space-y-6">
                {donorSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex items-start gap-4 relative">
                      {/* Icon Circle */}
                      <div className="w-10 h-10 rounded-full bg-[#FF5523]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#FF5523]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-4">
                        <h4 className="font-serif font-semibold text-[18px] sm:text-[20px] text-[#292925]">
                          {step.title}
                        </h4>
                        <p className="font-sans font-normal text-[14px] sm:text-[15px] text-[#292925]/85 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Connector Line between steps */}
                      {idx < donorSteps.length - 1 && (
                        <div className="absolute left-[19px] top-11 bottom-0 w-[2px] bg-[#FF5523]/30" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-8 pt-4">
              <Link
                href="/explore"
                className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-[0.99] transition-all text-white font-sans font-bold text-[13px] tracking-wider py-3.5 rounded-[8px] flex items-center justify-center text-center uppercase shadow-sm"
              >
                DONATE NOW
              </Link>
            </div>
          </div>

          {/* Card 2: For Campaigners */}
          <div className="bg-white rounded-[16px] border border-[#DCEAFF] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              {/* Card Title */}
              <div className="pb-4 border-b border-[#DCEAFF] mb-6">
                <h3 className="font-sans font-semibold text-[22px] sm:text-[24px] text-[#292925]">
                  For Campaigners
                </h3>
              </div>

              {/* Steps List */}
              <div className="space-y-6">
                {campaignerSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex items-start gap-4 relative">
                      {/* Icon Circle */}
                      <div className="w-10 h-10 rounded-full bg-[#20C997]/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#20C997]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-4">
                        <h4 className="font-serif font-semibold text-[18px] sm:text-[20px] text-[#292925]">
                          {step.title}
                        </h4>
                        <p className="font-sans font-normal text-[14px] sm:text-[15px] text-[#292925]/85 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Connector Line between steps */}
                      {idx < campaignerSteps.length - 1 && (
                        <div className="absolute left-[19px] top-11 bottom-0 w-[2px] bg-[#20C997]/30" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-8 pt-4">
              <Link
                href="/fundraiser-setup"
                className="w-full bg-[#20C997] hover:bg-[#1bb385] active:scale-[0.99] transition-all text-white font-sans font-bold text-[13px] tracking-wider py-3.5 rounded-[8px] flex items-center justify-center text-center uppercase shadow-sm"
              >
                START A CAMPAIGN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
