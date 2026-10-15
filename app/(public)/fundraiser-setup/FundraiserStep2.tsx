"use client";

import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
  onBack,
  onNext,
}: Step2Props) {
  const quickAmounts = ["5,00,000", "10,00,000", "12,00,000", "20,00,000"];

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-xs flex flex-col gap-8">
      <div>
        <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E]">
          Basic Details &amp; Target Goal
        </h2>
        <p className="font-sans text-[13px] text-[#6B7280] mt-1">
          Setting an accurate goal speeds up verification and donor confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email ID */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Organizer / Contact Email *
          </label>
          <input
            type="email"
            required
            placeholder="organizer@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
          />
        </div>

        {/* Current City */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Current Residential City *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Pune, Maharashtra"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
          />
        </div>

        {/* Preferred Language */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Preferred Communication Language *
          </label>
          <input
            type="text"
            placeholder="e.g. English & Hindi"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
          />
        </div>

        {/* Target Amount */}
        <div className="flex flex-col gap-2 sm:col-span-2 pt-2 border-t border-slate-100">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Target Amount Needed *
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-sans font-bold text-[18px] text-[#1E1E1E]">
              ₹
            </span>
            <input
              type="text"
              required
              placeholder="12,00,000"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-3 rounded-[10px] bg-slate-50 border border-slate-200 font-sans font-bold text-[18px] text-slate-900 focus:outline-hidden focus:border-[#FF5523]"
            />
          </div>
          <span className="font-sans text-[12px] text-[#6B7280]">
            Within the typical verified range for medical/relief treatments.
          </span>

          {/* Quick Amount Chips */}
          <div className="flex items-center gap-2 mt-2">
            <span className="font-sans text-[12px] text-slate-500 shrink-0">
              Quick amounts:
            </span>
            <div className="flex flex-wrap gap-2">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setTargetAmount(amt)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans text-[12px] font-semibold px-3 py-1 rounded-[6px] transition-colors cursor-pointer"
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ideal Campaign Duration */}
        <div className="flex flex-col gap-1.5 sm:col-span-2 pt-2 border-t border-slate-100">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Ideal Campaign Duration *
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
          >
            <option value="30 days">30 days (High urgency)</option>
            <option value="45 days">45 days (Recommended)</option>
            <option value="60 days">60 days (Extended treatment)</option>
            <option value="90 days">90 days (Long term support)</option>
          </select>
          <span className="font-sans text-[12px] text-[#6B7280]">
            Most urgent medical and emergency campaigns run for 30–60 days.
          </span>
        </div>

        {/* Consent Confirmation Checkbox */}
        <div className="sm:col-span-2 pt-2 border-t border-slate-100">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-[#FF5523] focus:ring-[#FF5523] border-slate-300"
            />
            <span className="font-sans text-[13px] text-[#475569] leading-relaxed">
              I confirm that I have {beneficiaryName || "the beneficiary"}&apos;s or legal guardian&apos;s permission to create this fundraiser and submit supporting documents for verification.
            </span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans font-semibold text-[14px] px-6 py-2.5 rounded-[24px] flex items-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[15px] px-8 py-3 rounded-[24px] flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <span>Continue to Document Upload</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
