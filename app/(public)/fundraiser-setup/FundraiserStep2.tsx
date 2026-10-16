"use client";

import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
} from "lucide-react";
import CustomDropdown from "@/components/ui/CustomDropdown";

interface Step2Props {
  beneficiaryName: string;
  email: string;
  setEmail: (v: string) => void;
  currentCity: string;
  setCurrentCity: (v: string) => void;
  language: string;
  setLanguage: (v: string) => void;
  targetAmount: string;
  setTargetAmount: (v: string) => void;
  duration: string;
  setDuration: (v: string) => void;
  consent: boolean;
  setConsent: (v: boolean) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function FundraiserStep2({
  beneficiaryName,
  email,
  setEmail,
  currentCity,
  setCurrentCity,
  language,
  setLanguage,
  targetAmount,
  setTargetAmount,
  duration,
  setDuration,
  consent,
  setConsent,
  onNext,
}: Step2Props) {
  const quickAmounts = ["5,00,000", "10,00,000", "12,00,000", "20,00,000"];

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-xs flex flex-col gap-6">
      <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E]">
        Basic Detail&apos;s Meera&apos;s
      </h2>

      {/* Row 1: Beneficiary's full name & Email ID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Beneficiary&apos;s full name
          </label>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={beneficiaryName || "Meera Sharma"}
              className="w-full bg-white border border-slate-200 rounded-[8px] pl-3.5 pr-9 py-2.5 font-sans text-[13.5px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
            />
            <CheckCircle2 className="w-4 h-4 text-[#00AE5B] absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Email ID */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Email ID
          </label>
          <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Mumbai, Maharashtra"
              className="w-full bg-white border border-slate-200 rounded-[8px] pl-3.5 pr-9 py-2.5 font-sans text-[13.5px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
            />
            <CheckCircle2 className="w-4 h-4 text-[#00AE5B] absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Row 2: Current city & Preferred language Custom Dropdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Current city */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Current city
          </label>
          <div className="relative">
            <input
              type="text"
              value={currentCity}
              onChange={(e) => setCurrentCity(e.target.value)}
              placeholder="Pune, Maharashtra"
              className="w-full bg-white border border-slate-200 rounded-[8px] pl-3.5 pr-9 py-2.5 font-sans text-[13.5px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
            />
            <CheckCircle2 className="w-4 h-4 text-[#00AE5B] absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Preferred language Custom Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Preferred language
          </label>
          <CustomDropdown
            value={language}
            onChange={setLanguage}
            options={["English & Hindi", "Hindi", "Marathi", "English"]}
          />
        </div>
      </div>

      {/* Row 3: Target amount & Ideal campaign duration Custom Dropdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Target Amount */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Target amount
          </label>
          <div className="relative">
            <div className="w-full bg-white border border-slate-200 rounded-[8px] px-3.5 py-2.5 flex items-center gap-2 focus-within:border-[#FF5523] transition-colors">
              <span className="font-sans font-bold text-[14px] text-slate-700">
                ₹
              </span>
              <input
                type="text"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                placeholder="12,00,000"
                className="w-full bg-transparent font-sans text-[13.5px] text-slate-800 focus:outline-none pr-6"
              />
            </div>
            <CheckCircle2 className="w-4 h-4 text-[#00AE5B] absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
          <span className="text-[12px] font-sans text-[#00AE5B] flex items-center gap-1 mt-0.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Within the typical verified range for oncology treatment in Mumbai.</span>
          </span>
        </div>

        {/* Ideal campaign duration Custom Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Ideal campaign duration
          </label>
          <CustomDropdown
            value={duration}
            onChange={setDuration}
            options={["45 days", "30 days", "60 days", "90 days"]}
          />
          <span className="text-[12px] font-sans text-[#00AE5B] flex items-center gap-1 mt-0.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Most urgent medical campaigns run for 30-60 days.</span>
          </span>
        </div>
      </div>

      {/* Row 4: Quick amounts */}
      <div className="flex items-center flex-wrap gap-2 pt-1">
        <span className="font-sans text-[12.5px] text-slate-600 mr-1">
          Quick amounts:
        </span>
        {quickAmounts.map((amt) => {
          const isSelected = targetAmount === amt;
          return (
            <button
              key={amt}
              type="button"
              onClick={() => setTargetAmount(amt)}
              className={`px-3 py-1 rounded-[6px] font-sans font-medium text-[12px] border transition-all cursor-pointer ${
                isSelected
                  ? "bg-white text-[#FF5523] border-[#FF5523] shadow-xs"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              ₹{amt}
            </button>
          );
        })}
      </div>

      {/* Permission Checkbox in grey card */}
      <div className="bg-slate-50 border border-slate-100 rounded-[8px] p-3 flex items-start gap-2.5 mt-2">
        <input
          type="checkbox"
          id="consent-check"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded text-[#00AE5B] accent-[#00AE5B] cursor-pointer"
        />
        <label
          htmlFor="consent-check"
          className="font-sans text-[12px] text-[#475569] leading-snug cursor-pointer select-none"
        >
          I confirm that I have Meera&apos;s or her legal guardian&apos;s permission to create this fundraiser and submit supporting documents for verification.
        </label>
      </div>

      {/* Right aligned Continue Button */}
      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={onNext}
          className="bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[14px] py-2.5 px-8 rounded-[8px] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
