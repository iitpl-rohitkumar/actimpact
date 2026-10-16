"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  CheckCircle2,
  Building2,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Headphones,
  Mail,
} from "lucide-react";
import { CheckoutItem } from "./CheckoutPage";

interface CheckoutSummaryProps {
  items: CheckoutItem[];
  subtotal: number;
  initialTip: number;
  donorName: string;
  frequency: "one-time" | "monthly";
  setFrequency: (f: "one-time" | "monthly") => void;
}

export default function CheckoutSummarySection({
  items,
  subtotal,
  initialTip,
  donorName,
  frequency,
  setFrequency,
}: CheckoutSummaryProps) {
  const router = useRouter();
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [customTip, setCustomTip] = useState<string>(initialTip.toString());
  const [isTipOpen, setIsTipOpen] = useState<boolean>(true);
  const [processing, setProcessing] = useState<boolean>(false);
  const [companyEmail, setCompanyEmail] = useState<string>("");
  const [companyStatus, setCompanyStatus] = useState<string | null>(null);

  // Calculate tip
  const calculatedTip =
    customTip !== ""
      ? parseInt(customTip, 10) || 0
      : Math.round((subtotal * tipPercent) / 100);

  const totalAmount = subtotal + calculatedTip;

  const itemsSummary = items
    .map((item) => `${item.qty} × ${item.name}`)
    .join(", ");

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      const txnId = "TXN-2026091412345";
      const params = new URLSearchParams({
        name: donorName || "Rajesh Khanna",
        amount: totalAmount.toLocaleString("en-IN"),
        items: itemsSummary || "2 × Rice (25kg), 1 × Dal & Pulses (5kg)",
        txn: txnId,
        method: "UPI (GPay)",
      });
      router.push(`/checkout/success?${params.toString()}`);
    }, 1000);
  };

  const handleCompanyCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyEmail.includes("@")) {
      setCompanyStatus("Eligible! Your company matches 100% of employee donations.");
    }
  };

  return (
    <div className="flex flex-col gap-5 sticky top-24">
      {/* 1. Donation Summary Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-5 sm:p-6 shadow-xs flex flex-col gap-4">
        {/* One Time / Monthly Tabs */}
        <div className="bg-[#FFF5F2] border border-[#FF5523]/25 p-1 rounded-[12px] flex items-center text-[13px] font-sans font-semibold">
          <button
            type="button"
            onClick={() => setFrequency("one-time")}
            className={`flex-1 py-2 rounded-[9px] transition-all cursor-pointer ${
              frequency === "one-time"
                ? "bg-[#FF5523] text-white shadow-xs"
                : "text-[#4A4A4A] hover:text-[#1E1E1E]"
            }`}
          >
            One Time
          </button>
          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`flex-1 py-2 rounded-[9px] transition-all cursor-pointer ${
              frequency === "monthly"
                ? "bg-[#FF5523] text-white shadow-xs"
                : "text-[#4A4A4A] hover:text-[#1E1E1E]"
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Heading */}
        <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E]">
          Your Donation Summary
        </h2>

        {/* Selected Supplies Breakdown */}
        <div className="flex flex-col gap-2 font-sans text-[14px] border-b border-slate-100 pb-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-[#475569]"
            >
              <span>
                {item.qty} × {item.name}
              </span>
              <span className="font-bold text-[#1E1E1E]">
                ₹{(item.unitPrice * item.qty).toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>

        {/* Share some love / Tip row */}
        <div className="flex flex-col border-b border-slate-100 pb-3">
          <button
            type="button"
            onClick={() => setIsTipOpen(!isTipOpen)}
            className="w-full flex items-center justify-between text-left cursor-pointer select-none py-1 group"
          >
            <div>
              <span className="font-sans font-semibold text-[14px] text-[#1E1E1E] block">
                Share some love?
              </span>
              <span className="font-sans text-[12px] text-[#6B7280]">
                Add 16% to help us fund urgent campaigns.
              </span>
            </div>
            {isTipOpen ? (
              <ChevronUp className="w-4 h-4 text-slate-500 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-500 transition-transform" />
            )}
          </button>

          {/* Tip Selector Pills */}
          {isTipOpen && (
            <div className="grid grid-cols-4 gap-2 pt-3 animate-in fade-in duration-200">
              {[5, 10, 15].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => {
                    setTipPercent(pct);
                    setCustomTip("");
                  }}
                  className={`py-2 rounded-[8px] font-sans font-semibold text-[13px] border transition-colors cursor-pointer ${
                    tipPercent === pct && !customTip
                      ? "bg-[#FF5523] text-white border-[#FF5523]"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {pct}%
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setCustomTip("500");
                  setTipPercent(0);
                }}
                className={`py-2 rounded-[8px] font-sans font-semibold text-[13px] border transition-colors cursor-pointer ${
                  customTip
                    ? "bg-[#FF5523] text-white border-[#FF5523]"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                Custom
              </button>
            </div>
          )}
        </div>

        {/* Subtotal, Tip and Grand Total */}
        <div className="flex flex-col gap-1.5 font-sans text-[13.5px] pt-1">
          <div className="flex justify-between text-[#6B7280]">
            <span>Sponsorship Subtotal</span>
            <span className="font-semibold text-[#1E1E1E]">
              ₹{subtotal.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="flex justify-between text-[#6B7280]">
            <span>Tip amount</span>
            <span className="font-semibold text-[#1E1E1E]">
              {calculatedTip.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="flex justify-between items-baseline pt-2 border-t border-slate-100">
            <span className="font-bold text-[16px] text-[#1E1E1E]">
              Total Amount
            </span>
            <span className="font-bold text-[24px] text-[#FF5523]">
              ₹{totalAmount.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Continue to Payment Button */}
        <button
          type="button"
          onClick={handlePay}
          disabled={processing}
          className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[15px] py-3.5 rounded-[12px] shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-1 disabled:opacity-75"
        >
          {processing ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Securing Payment...
            </span>
          ) : (
            <>
              <span>Continue to Payment</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </>
          )}
        </button>

        <span className="text-center font-sans text-[11px] text-[#94A3B8]">
          With razor pay
        </span>
      </div>

      {/* 2. Security & Guarantees Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-5 shadow-xs flex flex-col gap-3.5 text-[12.5px] font-sans">
        <div className="flex items-start gap-3">
          <Lock className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#1E1E1E] block">
              Secure 256-bit SSL
            </span>
            <span className="text-[#6B7280]">
              Your transactions are fully encrypted and securely processed.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#1E1E1E] block">
              80G Tax Deductible
            </span>
            <span className="text-[#6B7280]">
              Kameshwar Foundation is registered under Section 80G.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Building2 className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#1E1E1E] block">
              Funds transfer directly to hospital
            </span>
            <span className="text-[#6B7280]">
              Disbursed against verified treatment bills. No cash handling by the fundraiser.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-slate-100 text-[#475569] font-medium text-[12px]">
          <ShieldCheck className="w-4 h-4 text-[#00AE5B] shrink-0" />
          <span>Verified by ActsImpact Trust &amp; Safety Team</span>
        </div>
      </div>

      {/* 3. 24-hour Withdrawal Guarantee Card (Dark Teal) */}
      <div className="bg-[#0B3B49] text-white rounded-[16px] p-5 shadow-xs flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-full bg-[#154E5F] flex items-center justify-center shrink-0 text-[#20C997]">
          <Headphones className="w-5 h-5 text-emerald-300" />
        </div>

        <div>
          <h3 className="font-sans font-bold text-[15px] sm:text-[16px] text-white">
            24-hour withdrawal guarantee
          </h3>
          <p className="font-sans text-[12px] text-[#A5C8D0] mt-1 leading-relaxed">
            Verified requests are initiated within 24 hours to the beneficiary or hospital account.
          </p>
          <span className="bg-[#D1F4E0] text-[#065F46] font-sans font-semibold text-[11px] px-3 py-0.5 rounded-full inline-block mt-2.5">
            No withdrawal fee
          </span>
        </div>
      </div>

      {/* 4. Company Matching Donations Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-5 shadow-xs flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-[8px] bg-[#FFF2EB] text-[#FF5523] flex items-center justify-center shrink-0 mt-0.5">
            <Building2 className="w-4 h-4 text-[#FF5523]" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-[14px] text-[#1E1E1E]">
              Could your company match donations?
            </h3>
            <p className="font-sans text-[12px] text-[#6B7280] mt-0.5">
              Eligible employers can double employee contributions through CSR matching.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleCompanyCheck}
          className="w-full border border-slate-200 rounded-[8px] bg-white flex items-center px-3 py-1.5 focus-within:border-[#FF5523] transition-colors"
        >
          <Mail className="w-4 h-4 text-[#94A3B8] mr-2 shrink-0" />
          <input
            type="email"
            placeholder="name@company.com"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            className="w-full bg-transparent text-[13px] font-sans text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="font-sans font-semibold text-[12.5px] text-[#FF5523] hover:text-[#e04515] shrink-0 cursor-pointer pl-2 whitespace-nowrap"
          >
            Check eligibility
          </button>
        </form>

        {companyStatus && (
          <p className="font-sans font-medium text-[12px] text-[#00AE5B]">
            {companyStatus}
          </p>
        )}

        <div className="flex items-center gap-2 pt-1 text-[12px] font-sans text-[#6B7280]">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#00AE5B] shrink-0" />
          <span>120+ matching employers already supported</span>
        </div>
      </div>
    </div>
  );
}
