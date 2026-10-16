"use client";

import React from "react";
import { ShieldCheck, Headphones, Check } from "lucide-react";

interface SummarySidebarProps {
  currentStep: number;
  purpose: string;
  beneficiary: string;
  beneficiaryName: string;
  city: string;
  language: string;
  targetAmount: string;
  duration: string;
}

export default function FundraiserSummarySidebar({
  currentStep,
  purpose,
  beneficiary,
  beneficiaryName,
  city,
  language,
  targetAmount,
  duration,
}: SummarySidebarProps) {
  return (
    <div className="flex flex-col gap-5 sticky top-24">
      {/* 1. Fundraiser Summary Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-5 sm:p-6 shadow-xs flex flex-col gap-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="font-serif font-bold text-[17px] text-[#1E1E1E]">
            Fundraiser summary
          </h3>
          <span className="border border-slate-300 text-slate-500 font-sans font-bold text-[10px] px-2 py-0.5 rounded-[4px] uppercase tracking-wider">
            DRAFT
          </span>
        </div>

        {/* Dynamic Fields Breakdown */}
        <div className="flex flex-col gap-2.5 font-sans text-[13px]">
          {currentStep === 1 ? (
            <>
              <div className="flex justify-between items-baseline text-[#6B7280]">
                <span>Purpose</span>
                <span className="font-semibold text-[#1E1E1E] text-right">
                  {purpose || "Medical treatment"}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-[#6B7280]">
                <span>Beneficiary</span>
                <span className="font-semibold text-[#1E1E1E] text-right">
                  {beneficiary || "Family member"}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-[#6B7280]">
                <span>Beneficiary name</span>
                <span className="font-semibold text-[#1E1E1E] text-right">
                  {beneficiaryName || "Meera Sharma"}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-baseline text-[#6B7280]">
                <span>Beneficiary</span>
                <span className="font-semibold text-[#1E1E1E] text-right">
                  {beneficiary || "Family member"}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-[#6B7280]">
                <span>Beneficiary&apos;s name</span>
                <span className="font-semibold text-[#1E1E1E] text-right">
                  {beneficiaryName.split(" ")[0] || "Meera"}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-[#6B7280]">
                <span>City</span>
                <span className="font-semibold text-[#1E1E1E] text-right">
                  {city || "Mumbai, Maharashtra"}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-[#6B7280]">
                <span>Language</span>
                <span className="font-semibold text-[#1E1E1E] text-right">
                  {language || "Meera Sharma"}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-[#6B7280]">
                <span>Target amt.</span>
                <span className="font-semibold text-[#1E1E1E] text-right">
                  {targetAmount || "12,00,000"}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-[#6B7280]">
                <span>Campaign Duration</span>
                <span className="font-semibold text-[#1E1E1E] text-right">
                  {duration.replace("days", "Days") || "45 Days"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* 0% Platform Fee Green Callout Box */}
        <div className="p-3 rounded-[10px] bg-[#EBF9F1] border border-emerald-100 flex items-start gap-2.5 text-[12px] font-sans mt-1">
          <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00AE5B] font-bold text-[12px] flex items-center justify-center shrink-0 mt-0.5">
            ₹
          </div>
          <div>
            <span className="font-bold text-[#00AE5B] block">
              0% platform fee
            </span>
            <p className="text-[#475569] text-[11px] leading-tight mt-0.5">
              Your target goes to the verified treatment account. Standard payment processing may apply.
            </p>
          </div>
        </div>
      </div>

      {/* 2. What Happens Next Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-5 shadow-xs flex flex-col gap-3 font-sans text-[12.5px]">
        <div className="flex items-center gap-2 text-[#1E1E1E]">
          <ShieldCheck className="w-4 h-4 text-[#00AE5B]" />
          <h4 className="font-bold text-[14px]">
            What happens next
          </h4>
        </div>

        <div className="flex flex-col gap-2.5 text-slate-700 pt-1">
          <div className="flex items-center gap-3">
            <span className="w-4 font-bold text-[12px] text-slate-800">
              1
            </span>
            <span>Verify your mobile</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-4 font-bold text-[12px] text-slate-800">
              2
            </span>
            <span>Basic Details of beneficiary</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-4 font-bold text-[12px] text-slate-800">
              3
            </span>
            <span>Upload proof for review</span>
          </div>
        </div>

        <span className="text-[11.5px] font-semibold text-slate-600 mt-1">
          Usually takes 8–10 minutes
        </span>
      </div>

      {/* 3. Need Help Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-4 sm:p-5 shadow-xs flex items-start gap-3">
        <Headphones className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-sans font-bold text-[13.5px] text-[#1E1E1E]">
            Need help setting the right goal?
          </h4>
          <p className="font-sans text-[11.5px] text-[#6B7280] leading-relaxed mt-0.5">
            A fundraiser expert can review the hospital estimate and suggest a target. Call +91 70119 43124.
          </p>
        </div>
      </div>
    </div>
  );
}
