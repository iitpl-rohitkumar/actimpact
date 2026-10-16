"use client";

import React from "react";

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
}: CheckoutFormProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Your Details Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-7 shadow-xs">
        <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E] mb-5">
          Your Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans font-semibold text-[13px] text-[#292925]">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Rajesh Khanna"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-[8px] px-3.5 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans font-semibold text-[13px] text-[#292925]">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="rajesh.khanna@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-[8px] px-3.5 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
            />
          </div>

          {/* Phone Number (Row 2, full width) */}
          <div className="flex flex-col gap-1.5 sm:col-span-2 mt-1">
            <label className="font-sans font-semibold text-[13px] text-[#292925]">
              Phone Number
            </label>
            <div className="w-full bg-white border border-slate-200 rounded-[8px] px-3.5 py-2.5 flex items-center gap-2.5 focus-within:border-[#FF5523] transition-colors">
              <span className="font-sans font-semibold text-[14px] text-slate-700 select-none">
                +91
              </span>
              <input
                type="tel"
                required
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent font-sans text-[14px] text-slate-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. 80G Tax Benefit Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E]">
            80G Tax Benefit
          </h2>
          <span className="bg-[#E6F7EF] text-[#00AE5B] font-sans font-bold text-[11px] px-2.5 py-0.5 rounded-[4px] uppercase tracking-wider">
            ELIGIBLE
          </span>
        </div>

        {/* Claim Tax Exemption Switch Row */}
        <div className="flex items-center justify-between py-2">
          <div className="pr-4">
            <span className="font-sans font-semibold text-[14px] text-[#1E1E1E] block">
              Claim Tax Exemption
            </span>
            <span className="font-sans text-[12px] text-[#6B7280] block mt-0.5">
              Check this box to receive your 80G certificate at the end of the financial year.
            </span>
          </div>

          {/* Toggle Switch */}
          <button
            type="button"
            role="switch"
            aria-checked={claimTaxBenefit}
            onClick={() => setClaimTaxBenefit(!claimTaxBenefit)}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
              claimTaxBenefit ? "bg-[#FF5523]" : "bg-slate-200"
            }`}
          >
            <span
              className={`block w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 absolute top-0.5 ${
                claimTaxBenefit ? "translate-x-5.5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* Conditional PAN & Address fields */}
        {claimTaxBenefit && (
          <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-slate-100 animate-in fade-in duration-150">
            <div className="flex flex-col gap-1.5">
              <label className="font-sans font-semibold text-[13px] text-[#292925]">
                PAN Card Number
              </label>
              <input
                type="text"
                placeholder="ABCDE1234F"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                className="w-full bg-white border border-slate-200 rounded-[8px] px-3.5 py-2.5 font-sans uppercase text-[14px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-sans font-semibold text-[13px] text-[#292925]">
                Billing Address
              </label>
              <input
                type="text"
                placeholder="402, Trade Tower, Bandra East, Mumbai — 400051"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-[8px] px-3.5 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
              />
            </div>
          </div>
        )}
      </div>

      {/* 3. Donation Preferences Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-7 shadow-xs">
        <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E] mb-4">
          Donation Preferences
        </h2>

        {/* Anonymous Switch Row */}
        <div className="flex items-center justify-between py-1">
          <div className="pr-4">
            <span className="font-sans font-semibold text-[14px] text-[#1E1E1E] block">
              Hide my name from supporters list
            </span>
            <span className="font-sans text-[12px] text-[#6B7280] block mt-0.5">
              Your donation will appear as &lsquo;Anonymous&rsquo; publicly on the campaign page.
            </span>
          </div>

          {/* Toggle Switch */}
          <button
            type="button"
            role="switch"
            aria-checked={isAnonymous}
            onClick={() => setIsAnonymous(!isAnonymous)}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
              isAnonymous ? "bg-[#FF5523]" : "bg-slate-200"
            }`}
          >
            <span
              className={`block w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 absolute top-0.5 ${
                isAnonymous ? "translate-x-5.5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
