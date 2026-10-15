"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Share2, ShieldCheck, CheckCircle2, QrCode } from "lucide-react";
import { CampaignData } from "./campaignData";

interface CampaignDonationWidgetProps {
  campaign: CampaignData;
}

export default function CampaignDonationWidget({ campaign }: CampaignDonationWidgetProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(2000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const presetAmounts = [1000, 2000, 5000, 10000];

  const handleChipClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(parseInt(val, 10));
    }
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: campaign.title,
        url: typeof window !== "undefined" ? window.location.href : "",
      }).catch(() => {});
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const percentage = Math.min(
    100,
    Math.round((campaign.raised / campaign.goal) * 100)
  );

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-6 shadow-md flex flex-col gap-6 sticky top-28">
      {/* Progress & Target Stats */}
      <div>
        <div className="flex items-baseline justify-between mb-1">
          <span className="font-sans font-black text-[26px] sm:text-[28px] text-[#1E1E1E]">
            ₹ {campaign.raised.toLocaleString("en-IN")}
          </span>
          <span className="font-sans font-medium text-[13px] text-[#6B7280]">
            Goal: ₹ {campaign.goal.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden my-2.5">
          <div
            className="h-full bg-[#20C997] rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[13px] font-sans">
          <span className="font-semibold text-[#FF5523]">
            {campaign.supportersCount} Supporters
          </span>
          <span className="font-semibold text-[#00AE5B]">
            {percentage}% Completed
          </span>
        </div>
      </div>

      {/* Select or Enter Amount */}
      <div className="flex flex-col gap-3">
        <label className="font-sans font-semibold text-[14px] text-[#292925]">
          Select or Enter Donation Amount
        </label>

        {/* Quick Amount Chips */}
        <div className="grid grid-cols-4 gap-2">
          {presetAmounts.map((amt) => {
            const isSelected = selectedAmount === amt && !customAmount;
            return (
              <button
                key={amt}
                type="button"
                onClick={() => handleChipClick(amt)}
                className={`py-2 px-1 rounded-[10px] font-sans font-bold text-[13.5px] transition-all cursor-pointer text-center border ${
                  isSelected
                    ? "bg-[#FF5523] text-white border-[#FF5523] shadow-xs"
                    : "bg-slate-50 border-slate-200 text-[#1E1E1E] hover:border-slate-300"
                }`}
              >
                ₹{amt.toLocaleString("en-IN")}
              </button>
            );
          })}
        </div>

        {/* Custom Amount Input */}
        <div className="relative mt-1">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-sans font-bold text-[16px] text-[#1E1E1E]">
            ₹
          </span>
          <input
            type="text"
            placeholder="Or enter custom amount (min ₹100)"
            value={customAmount}
            onChange={handleCustomChange}
            className="w-full pl-8 pr-4 py-2.5 rounded-[10px] bg-slate-50 border border-slate-200 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523] transition-colors"
          />
        </div>
      </div>

      {/* Main Donate Button */}
      <div className="flex flex-col gap-2.5">
        <Link
          href={`/checkout?amount=${selectedAmount}&campaign=${campaign.id}`}
          className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[16px] py-3.5 rounded-[24px] text-center shadow-md flex items-center justify-center gap-2"
        >
          <span>Donate Now</span>
          <Heart className="w-4 h-4 fill-white stroke-none" />
        </Link>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-[#292925] font-sans font-semibold text-[14px] py-2.5 rounded-[24px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Share2 className="w-4 h-4 text-[#FF5523]" />
          <span>{copied ? "Link Copied!" : "Share Campaign"}</span>
        </button>
      </div>

      {/* Instant UPI & Payment Options */}
      <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <QrCode className="w-4 h-4 text-[#FF5523]" />
          <span className="font-sans font-semibold text-[13px] text-[#292925]">
            Donate via UPI / GPay / PhonePe / Paytm / QR
          </span>
        </div>
        <p className="font-sans text-[12px] text-[#6B7280] leading-relaxed">
          Contribute ₹100 or more with zero transaction deductions. Instant tax receipt generated on checkout.
        </p>
      </div>

      {/* Bank & Trust Transparency Reassurance */}
      <div className="bg-[#FCFFFD] border border-emerald-100 rounded-[12px] p-3 flex items-start gap-2.5 text-[11.5px] text-[#475569]">
        <ShieldCheck className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
        <p className="leading-normal">
          Donations made through this fundraiser will be securely deposited into ActImpact&apos;s verified NGO account for direct material procurement.
        </p>
      </div>
    </div>
  );
}
