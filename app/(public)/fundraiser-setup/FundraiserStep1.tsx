"use client";

import React, { useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

interface Step1Props {
  purpose: string;
  setPurpose: (v: string) => void;
  beneficiary: string;
  setBeneficiary: (v: string) => void;
  beneficiaryName: string;
  setBeneficiaryName: (v: string) => void;
  city: string;
  setCity: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  otp: string;
  setOtp: (v: string) => void;
  onNext: () => void;
}

export default function FundraiserStep1({
  purpose,
  setPurpose,
  beneficiary,
  setBeneficiary,
  beneficiaryName,
  setBeneficiaryName,
  city,
  setCity,
  phone,
  setPhone,
  otp,
  setOtp,
  onNext,
}: Step1Props) {
  const [otpSent, setOtpSent] = useState(true);

  const purposes = [
    "Medical Treatment",
    "Education",
    "Animal Welfare",
    "Disaster Relief",
    "Memorial",
    "Other",
  ];

  const beneficiaries = [
    "Family member",
    "Yourself",
    "Friend",
    "Community / NGO",
  ];

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-xs flex flex-col gap-8">
      {/* 1. Choose Purpose */}
      <div>
        <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E] mb-3">
          1. Choose Purpose
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {purposes.map((p) => {
            const isSelected = purpose === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => setPurpose(p)}
                className={`py-2 px-4 rounded-[20px] font-sans font-semibold text-[13.5px] border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#FF5523] text-white border-[#FF5523] shadow-xs"
                    : "bg-slate-50 border-slate-200 text-[#292925] hover:border-slate-300"
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Choose Beneficiary */}
      <div className="pt-6 border-t border-slate-100">
        <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E] mb-3">
          2. Who are you raising funds for?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {beneficiaries.map((b) => {
            const isSelected = beneficiary === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => setBeneficiary(b)}
                className={`py-2.5 px-3 rounded-[12px] font-sans font-semibold text-[13.5px] border text-center transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#FF5523] text-white border-[#FF5523] shadow-xs"
                    : "bg-slate-50 border-slate-200 text-[#292925] hover:border-slate-300"
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Beneficiary Details */}
      <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Beneficiary&apos;s Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Meera Sharma"
            value={beneficiaryName}
            onChange={(e) => setBeneficiaryName(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
          />
          <span className="font-sans text-[12px] text-[#6B7280]">
            Use the exact name shown on the beneficiary&apos;s medical records or government ID.
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            City of Treatment / Organization *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Mumbai, Maharashtra"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
          />
        </div>

        {/* Contact No + Send OTP */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Contact Number *
          </label>
          <div className="flex gap-2">
            <div className="flex items-center flex-1">
              <span className="bg-slate-100 border border-r-0 border-slate-200 rounded-l-[10px] px-3 py-2.5 font-sans font-semibold text-[13px] text-slate-600">
                +91
              </span>
              <input
                type="tel"
                placeholder="Enter phone no."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-r-[10px] px-3 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
              />
            </div>
            <button
              type="button"
              onClick={() => setOtpSent(true)}
              className="bg-slate-800 hover:bg-slate-900 text-white font-sans font-semibold text-[12px] px-3 py-2 rounded-[10px] shrink-0"
            >
              {otpSent ? "OTP Sent" : "Send OTP"}
            </button>
          </div>
        </div>

        {/* Enter OTP Input */}
        {otpSent && (
          <div className="flex flex-col gap-1.5 sm:col-span-2 bg-[#FFF8F5] p-4 rounded-[12px] border border-[#FF5523]/20">
            <div className="flex items-center justify-between">
              <label className="font-sans font-semibold text-[13px] text-[#292925]">
                Enter 6-Digit OTP *
              </label>
              <button
                type="button"
                className="font-sans text-[12px] text-[#FF5523] hover:underline"
              >
                Resend OTP
              </button>
            </div>
            <input
              type="text"
              maxLength={6}
              placeholder="124578"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full sm:w-[220px] bg-white border border-slate-200 rounded-[10px] px-4 py-2 font-mono text-[16px] tracking-widest text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
            />
          </div>
        )}
      </div>

      {/* Continue CTA */}
      <div className="pt-4 border-t border-slate-100 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="w-full sm:w-auto bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[15px] px-8 py-3 rounded-[24px] flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        >
          <span>Continue to Target &amp; Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
