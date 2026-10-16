"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, CloudCheck, Phone, Check, Percent } from "lucide-react";

interface FundraiserHeaderProps {
  currentStep: number;
  setStep: (s: number) => void;
}

export default function FundraiserHeader({
  currentStep,
  setStep,
}: FundraiserHeaderProps) {
  const steps = [
    { num: 1, label: "Register" },
    { num: 2, label: currentStep === 3 ? "Story Of Beneficiary" : "Basic detail's of beneficiary" },
    { num: 3, label: "Story & proof" },
  ];

  const stepSubtitles = [
    "STEP 1 OF 3 • SCOPE & TARGET SETUP",
    "STEP 2 OF 3 • BASIC DETAIL'S OF BENEFICIARY",
    "STEP 3 OF 3 • STORY & PROOF",
  ];

  return (
    <div className="w-full bg-white border-b border-slate-200">
      {/* Top Utility Bar */}
      <div className="w-full bg-[#47AF89] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[38px] flex items-center flex-wrap justify-between text-xs sm:text-[13px]">
          {/* Tax Benefit Info */}
          <div className="flex items-center gap-2 font-sans font-medium">
            <span className="flex items-center justify-center w-4 h-4 rounded-full border border-white text-white shrink-0">
              <Percent className="w-2.5 h-2.5 stroke-[2.5]" />
            </span>
            <span className="truncate text-[10px] sm:text-[12px]">
              Tax Benefits (80G) — Instant tax receipt upon donation
            </span>
          </div>

          {/* 24/7 Helpline */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href="tel:+917011943124"
              className="bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all rounded-full px-3 py-1 flex items-center gap-2 font-sans font-medium text-[12px] text-white shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-white stroke-none shrink-0" />
              <span>Available 24/7 +91 70119 43124</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Wizard Navbar */}
      <div className="w-full border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex flex-col group select-none">
            <span
              className="font-sans font-extrabold text-[26px] sm:text-[28px] tracking-tight leading-none bg-clip-text text-transparent transition-opacity group-hover:opacity-90"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFD04D 0%, #00AE5B 100%)",
              }}
            >
              ActImpact
            </span>
            <span className="font-sans font-medium text-[10px] sm:text-[11px] text-[#475569] mt-0.5 tracking-wider">
              Powered by True Impact
            </span>
          </Link>

          {/* Center Title */}
          <div className="text-center hidden md:block">
            <span className="font-sans font-bold text-[16px] text-[#292925] block">
              Start a fundraiser
            </span>
            <span className="font-sans text-[12px] text-[#64748B]">
              Your draft is saved automatically
            </span>
          </div>

          {/* Right Status & Save & Exit */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[12px] font-sans text-slate-500">
              <span className="text-[#00AE5B] text-[14px]">☁️</span>
              <span className="text-[#00AE5B] font-medium">Saved</span>
            </div>

            <Link
              href="/"
              className="font-sans font-medium text-[13px] text-slate-700 hover:bg-slate-50 border border-slate-300 rounded-[20px] px-4 py-1.5 transition-colors"
            >
              Save &amp; exit
            </Link>
          </div>
        </div>
      </div>

      {/* Stepper & Title Hero Section */}
      <div className="w-full py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-[760px] mx-auto text-center flex flex-col items-center">
          {/* Step Subtitle */}
          <span className="font-sans font-bold text-[11px] sm:text-[11.5px] text-[#FF5523] uppercase tracking-wider block mb-1">
            {stepSubtitles[currentStep - 1]}
          </span>

          {/* Main Title */}
          <h1 className="font-serif font-bold text-[26px] sm:text-[32px] text-[#1E1E1E] leading-tight">
            Tell us who you’re raising funds for
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[13.5px] sm:text-[14px] text-[#6B7280] mt-1.5 max-w-[640px] leading-relaxed">
            A clear purpose, beneficiary and goal help our verification team guide you faster. You can revise these details before publishing.
          </p>

          {/* Stepper Indicators */}
          <div className="w-full max-w-[620px] mt-7 flex items-center justify-between relative px-2 sm:px-4">
            {steps.map((s, idx) => {
              const isPast = currentStep > s.num;
              const isCurrent = currentStep === s.num;
              const isActive = isCurrent || isPast;

              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setStep(s.num)}
                  className="flex items-center gap-2 cursor-pointer group z-10 bg-white px-1 sm:px-2"
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-sans font-bold text-[11px] transition-all ${isActive
                      ? "bg-[#FF5523] text-white shadow-xs"
                      : "bg-slate-200 text-slate-600"
                      }`}
                  >
                    {s.num}
                  </span>
                  <span
                    className={`font-sans text-[12.5px] sm:text-[13px] transition-colors ${isActive
                      ? "font-semibold text-[#FF5523]"
                      : "font-normal text-slate-500"
                      }`}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}

            {/* Stepper underline bar */}
            <div className="absolute left-6 right-6 -bottom-3.5 h-[2.5px] bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FF5523] transition-all duration-300"
                style={{
                  width:
                    currentStep === 1
                      ? "33%"
                      : currentStep === 2
                        ? "66%"
                        : "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
