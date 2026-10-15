import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function AboutStorySection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex flex-col gap-8">
        {/* Story Headings and Narrative */}
        <div className="flex flex-col gap-5">
          <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[36px] text-[#454545] leading-tight">
            From an Urge to Help to a Promise That Endures.
          </h2>

          <p className="font-sans font-normal text-[15px] sm:text-[16px] text-[#454545] leading-relaxed">
            Every day across India, families face life-altering emergencies. A single diagnosis like cancer, an unexpected road accident, or sudden organ failure can wipe out decades of life savings in a matter of hours. At the same time, grassroots non-profits caring for destitute elders, neglected animals, and underfunded schools run out of grain and medicine simply because they lack digital reach.
          </p>

          <p className="font-sans font-normal text-[15px] sm:text-[16px] text-[#454545] leading-relaxed">
            India has never had a shortage of empathy — giving is part of who we are. What was missing was a transparent highway connecting that willingness to give with genuine, verified emergencies on the ground. ActImpact was founded in Delhi in collaboration with True Impact Foundation to build that highway. We believe no parent should watch their child suffer for lack of funds, and no donor should ever have to wonder if their contribution truly made a difference.
          </p>
        </div>

        {/* Comparison Callout Blocks */}
        <div className="flex flex-col gap-5 pt-4">
          {/* Block 1: The Traditional Doubt */}
          <div className=" gap-2.5 sm:gap-4 p-4 rounded-[12px] bg-red-50/50 border border-red-100">
            <div className="flex items-center gap-2 shrink-0 min-w-[210px]">
              <AlertCircle className="w-[18px] h-[18px] text-[#EF4444] shrink-0" />
              <span className="font-serif font-medium text-[13px] sm:text-[14px] text-[#EF4444] tracking-wide uppercase">
                THE TRADITIONAL DOUBT
              </span>
            </div>
            <p className="font-sans sm:pl-6 font-normal text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              Opaque donations, bureaucratic delays, high platform fees eating into relief, and zero follow-up on recovery.
            </p>
          </div>

          {/* Block 2: The ActImpact Promise */}
          <div className="gap-2.5 sm:gap-4 p-4 rounded-[12px] bg-emerald-50/50 border border-emerald-100">
            <div className="flex items-center gap-2 shrink-0 min-w-[210px]">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#10B981] shrink-0" />
              <span className="font-serif font-medium text-[13px] sm:text-[14px] text-[#10B981] tracking-wide uppercase">
                THE ACTIMPACT PROMISE
              </span>
            </div>
            <p className="font-sans sm:pl-6 font-normal text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              100% verified hospital bills, real-time campaign dashboards, direct-to-vendor payouts, and automated Section 80G tax certificates delivered instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
