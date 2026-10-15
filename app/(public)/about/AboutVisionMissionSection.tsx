import React from "react";
import { Eye, Target } from "lucide-react";

export default function AboutVisionMissionSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Card 1: Our Vision */}
        <div className="bg-white border border-[#FF5523] border-t-[3.5px] border-t-[#FF5523] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
          <div>
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-3 pb-5 border-b border-[#FFF0EB] mb-5">
              <div className="w-9 h-9 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                <Eye className="w-[18px] h-[18px] text-[#FF5523]" />
              </div>
              <h3 className="font-sans font-semibold text-[19px] sm:text-[20px] text-[#292925]">
                Our Vision
              </h3>
            </div>

            {/* Headline & Body */}
            <h4 className="font-sans font-semibold text-[17px] sm:text-[18px] text-[#292925] mb-3 leading-snug">
              An India Where No One Fights Alone
            </h4>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] text-[#454545] leading-relaxed">
              We envision a society where financial helplessness never stands between a patient and critical medical care, and where forgotten souls — from stray animals to abandoned elders — have an active community standing beside them. Compassion is natural; we give it direction and speed.
            </p>
          </div>
        </div>

        {/* Card 2: Our Mission */}
        <div className="bg-white border border-[#20C997] border-t-[3.5px] border-t-[#20C997] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
          <div>
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-3 pb-5 border-b border-[#F0FAF7] mb-5">
              <div className="w-9 h-9 rounded-full bg-[#E8F8F3] flex items-center justify-center shrink-0">
                <Target className="w-[18px] h-[18px] text-[#20C997]" />
              </div>
              <h3 className="font-sans font-semibold text-[19px] sm:text-[20px] text-[#292925]">
                Our Mission
              </h3>
            </div>

            {/* Headline & Body */}
            <h4 className="font-sans font-semibold text-[17px] sm:text-[18px] text-[#292925] mb-3 leading-snug">
              Connecting Willing Hearts with Real, Urgent Needs
            </h4>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] text-[#454545] leading-relaxed">
              To provide a secure, tech-enabled crowdfunding ecosystem that pairs institutional-grade due diligence with grassroots speed. By removing fee barriers and streamlining hospital disbursements, we ensure that every rupee given creates immediate, measurable survival value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}