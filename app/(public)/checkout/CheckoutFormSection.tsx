"use client";

import React, { useState } from "react";
import { ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

interface CheckoutFormProps {
  donorName: string;
  setDonorName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  claimTaxBenefit: boolean;
  setClaimTaxBenefit: (v: boolean) => void;
  panNumber: string;
  setPanNumber: (v: string) => void;
  billingAddress: string;
  setBillingAddress: (v: string) => void;
  isAnonymous: boolean;
  setIsAnonymous: (v: boolean) => void;
  donationFrequency: "one-time" | "monthly";
  setDonationFrequency: (v: "one-time" | "monthly") => void;
}

export default function CheckoutFormSection({
  donorName,
  setDonorName,
  email,
  setEmail,
  phone,
  setPhone,
  claimTaxBenefit,
  setClaimTaxBenefit,
  panNumber,
  setPanNumber,
  billingAddress,
  setBillingAddress,
  isAnonymous,
  setIsAnonymous,
  donationFrequency,
  setDonationFrequency,
}: CheckoutFormProps) {
  return (
    <div className="flex flex-col gap-8">
      {/* 1. Donor Details */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-xs">
        <h2 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#1E293B] pb-3 border-b border-slate-100 mb-6">
          Your Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="font-sans font-semibold text-[13px] text-[#292925]">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rajesh Khanna"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523] transition-colors"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans font-semibold text-[13px] text-[#292925]">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="name@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523] transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans font-semibold text-[13px] text-[#292925]">
              Phone Number *
            </label>
            <div className="flex items-center">
              <span className="bg-slate-100 border border-r-0 border-slate-200 rounded-l-[10px] px-3 py-2.5 font-sans font-semibold text-[13px] text-slate-600">
                +91
              </span>
              <input
                type="tel"
                required
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-r-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523] transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. 80G Tax Benefit Section */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#FF5523]" />
            <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E293B]">
              80G Tax Benefit
            </h2>
          </div>
          <span className="bg-emerald-50 text-[#00AE5B] border border-emerald-200 font-sans font-bold text-[11px] px-2.5 py-0.5 rounded-full">
            Eligible for 50% deduction
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={claimTaxBenefit}
              onChange={(e) => setClaimTaxBenefit(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-[#FF5523] focus:ring-[#FF5523] border-slate-300"
            />
            <div>
              <span className="font-sans font-semibold text-[14px] text-[#1E293B] block">
                Claim Tax Exemption Receipt
              </span>
              <span className="font-sans text-[12.5px] text-[#6B7280]">
                Check this box to receive your Section 80G tax certificate instantly via email for this financial year.
              </span>
            </div>
          </label>

          {claimTaxBenefit && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 pt-4 border-t border-slate-100 animate-in fade-in duration-150">
              <div className="flex flex-col gap-1.5">
                <label className="font-sans font-semibold text-[13px] text-[#292925]">
                  PAN Card Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ABCDE1234F"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans uppercase text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="font-sans font-semibold text-[13px] text-[#292925]">
                  Billing Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="402, Trade Tower, Bandra East, Mumbai — 400051"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-[10px] px-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Donation Preferences */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-xs">
        <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E293B] pb-3 border-b border-slate-100 mb-5">
          Donation Preferences
        </h2>

        <div className="flex flex-col gap-5">
          {/* Anonymous Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-[#FF5523] focus:ring-[#FF5523] border-slate-300"
            />
            <div>
              <span className="font-sans font-semibold text-[14px] text-[#1E293B] block">
                Hide my name from supporters list
              </span>
              <span className="font-sans text-[12.5px] text-[#6B7280]">
                Your donation will appear as &ldquo;Anonymous&rdquo; publicly on the campaign leaderboard.
              </span>
            </div>
          </label>

          {/* One-time vs Monthly Switch */}
          <div className="pt-2 border-t border-slate-100">
            <label className="font-sans font-semibold text-[13px] text-[#292925] block mb-2.5">
              Frequency:
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDonationFrequency("one-time")}
                className={`flex-1 py-2.5 rounded-[10px] font-sans font-semibold text-[14px] border transition-all cursor-pointer text-center ${
                  donationFrequency === "one-time"
                    ? "bg-[#FF5523] text-white border-[#FF5523] shadow-xs"
                    : "bg-slate-50 border-slate-200 text-[#1E1E1E] hover:border-slate-300"
                }`}
              >
                One time
              </button>
              <button
                type="button"
                onClick={() => setDonationFrequency("monthly")}
                className={`flex-1 py-2.5 rounded-[10px] font-sans font-semibold text-[14px] border transition-all cursor-pointer text-center ${
                  donationFrequency === "monthly"
                    ? "bg-[#20C997] text-white border-[#20C997] shadow-xs"
                    : "bg-slate-50 border-slate-200 text-[#1E1E1E] hover:border-slate-300"
                }`}
              >
                Monthly Lifeline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
