import React from "react";
import { Phone, CheckCircle, Clock } from "lucide-react";

interface SummarySidebarProps {
  purpose: string;
  beneficiary: string;
  beneficiaryName: string;
  city: string;
  language: string;
  targetAmount: string;
  duration: string;
}

export default function FundraiserSummarySidebar({
  purpose,
  beneficiary,
  beneficiaryName,
  city,
  language,
  targetAmount,
  duration,
}: SummarySidebarProps) {
  return (
    <div className="flex flex-col gap-6 sticky top-28">
      {/* Draft Summary Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-6 shadow-xs flex flex-col gap-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="font-serif font-bold text-[18px] text-[#1E1E1E]">
            Fundraiser Summary
          </h3>
          <span className="bg-amber-100 text-amber-800 font-sans font-black text-[11px] px-2 py-0.5 rounded-[4px] uppercase tracking-wider">
            DRAFT
          </span>
        </div>

        <div className="flex flex-col gap-3 font-sans text-[13.5px]">
          <div className="flex justify-between items-baseline">
            <span className="text-[#6B7280]">Purpose:</span>
            <span className="font-semibold text-[#1E1E1E] text-right">{purpose}</span>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-[#6B7280]">Beneficiary:</span>
            <span className="font-semibold text-[#1E1E1E] text-right">{beneficiary}</span>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-[#6B7280]">Beneficiary Name:</span>
            <span className="font-semibold text-[#1E1E1E] text-right">
              {beneficiaryName || "—"}
            </span>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-[#6B7280]">City:</span>
            <span className="font-semibold text-[#1E1E1E] text-right">{city || "—"}</span>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-[#6B7280]">Target Amount:</span>
            <span className="font-bold text-[#FF5523] text-right">
              ₹{targetAmount || "12,00,000"}
            </span>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-[#6B7280]">Campaign Duration:</span>
            <span className="font-semibold text-[#1E1E1E] text-right">{duration}</span>
          </div>
        </div>

        {/* 0% Platform Fee Banner */}
        <div className="p-3.5 rounded-[12px] bg-[#E4F8F2] border border-[#20C997]/30 text-[12.5px] font-sans">
          <span className="font-bold text-[#00AE5B] block mb-0.5">
            0% Platform Fee Guarantee
          </span>
          <p className="text-[#475569] leading-tight">
            100% of donor targets go directly to the verified treatment or NGO account.
          </p>
        </div>
      </div>

      {/* What Happens Next Checklist */}
      <div className="bg-slate-50 border border-slate-200 rounded-[20px] p-6 text-[13px] font-sans">
        <h4 className="font-serif font-bold text-[16px] text-[#1E1E1E] mb-3">
          What Happens Next
        </h4>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="w-5 h-5 rounded-full bg-slate-200 font-bold text-[11px] flex items-center justify-center shrink-0">
              1
            </span>
            <span>Verify your mobile number via OTP</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <span className="w-5 h-5 rounded-full bg-slate-200 font-bold text-[11px] flex items-center justify-center shrink-0">
              2
            </span>
            <span>Fill in basic patient &amp; target details</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <span className="w-5 h-5 rounded-full bg-slate-200 font-bold text-[11px] flex items-center justify-center shrink-0">
              3
            </span>
            <span>Upload hospital proof for quick review</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-slate-500 text-[12px] mt-4 pt-3 border-t border-slate-200">
          <Clock className="w-3.5 h-3.5" />
          <span>Setup usually takes only 8–10 minutes</span>
        </div>
      </div>

      {/* Helpline Assistance Widget */}
      <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 text-[12.5px] font-sans">
        <span className="font-bold text-[#1E1E1E] block mb-1">
          Need help setting the right goal?
        </span>
        <p className="text-[#6B7280] leading-relaxed mb-3">
          A dedicated fundraiser expert can review your hospital estimates and suggest the ideal target.
        </p>
        <a
          href="tel:+917011943124"
          className="inline-flex items-center gap-2 text-[#FF5523] font-semibold hover:underline"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call 24/7 Helpline: +91 70119 43124</span>
        </a>
      </div>
    </div>
  );
}
