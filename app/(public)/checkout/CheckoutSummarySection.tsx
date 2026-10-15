"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, CheckCircle, Building2, ArrowRight } from "lucide-react";

interface CheckoutSummaryProps {
  amount: number;
  donorName: string;
}

export default function CheckoutSummarySection({ amount, donorName }: CheckoutSummaryProps) {
  const router = useRouter();
  const [tipPercent, setTipPercent] = useState<number>(10);
  const [processing, setProcessing] = useState<boolean>(false);
  const [companyEmail, setCompanyEmail] = useState<string>("");
  const [companyStatus, setCompanyStatus] = useState<string | null>(null);

  const tipAmount = Math.round((amount * tipPercent) / 100);
  const totalAmount = amount + tipAmount;

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      router.push(
        `/checkout/success?name=${encodeURIComponent(
          donorName || "Rajesh Khanna"
        )}&amount=${totalAmount}&txn=TXN-${Date.now().toString().slice(-8)}`
      );
    }, 1200);
  };

  const handleCompanyCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyEmail.includes("@")) {
      setCompanyStatus("Eligible! Your company matches 100% of employee donations.");
    }
  };

  return (
    <div className="flex flex-col gap-6 sticky top-28">
      {/* Donation Summary Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-6 sm:p-7 shadow-md flex flex-col gap-6">
        <h2 className="font-serif font-bold text-[20px] text-[#1E1E1E] pb-3 border-b border-slate-100">
          Your Donation Summary
        </h2>

        {/* Breakdown Items */}
        <div className="flex flex-col gap-3 font-sans text-[14px]">
          <div className="flex items-center justify-between">
            <span className="text-[#1E1E1E]">Essential Supplies Sponsorship</span>
            <span className="font-semibold text-[#1E1E1E]">
              ₹{amount.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Optional Platform Support Tip */}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-slate-600">
                Support ActImpact Platform ({tipPercent}%):
              </span>
              <span className="font-semibold text-[#00AE5B]">
                ₹{tipAmount.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[0, 5, 10, 15].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setTipPercent(p)}
                  className={`flex-1 py-1 rounded-[6px] text-[12px] font-semibold border transition-all cursor-pointer ${
                    tipPercent === p
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {p === 0 ? "0%" : `${p}%`}
                </button>
              ))}
            </div>
          </div>

          {/* Total Amount Row */}
          <div className="pt-3 border-t-2 border-slate-200 flex items-baseline justify-between">
            <span className="font-serif font-bold text-[18px] text-[#1E1E1E]">
              Total Amount
            </span>
            <span className="font-sans font-black text-[24px] text-[#FF5523]">
              ₹{totalAmount.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Continue to Payment CTA */}
        <button
          onClick={handlePay}
          disabled={processing}
          className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[16px] py-3.5 rounded-[24px] text-center shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
        >
          {processing ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Securing Payment...
            </span>
          ) : (
            <>
              <span>Continue to Payment</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="font-sans text-[11px] text-center text-[#6B7280]">
          Instant redirect to Razorpay / UPI / NetBanking secured gateway
        </p>

        {/* Trust Badges */}
        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 text-[12.5px] font-sans">
          <div className="flex items-start gap-2 text-[#475569]">
            <Lock className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#1E1E1E] block">Secure 256-bit SSL</span>
              <span>Your transactions are fully encrypted and securely processed.</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-[#475569]">
            <CheckCircle className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#1E1E1E] block">80G Tax Deductible</span>
              <span>Kameshwar Foundation is registered under Section 80G.</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-[#475569]">
            <ShieldCheck className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#1E1E1E] block">Funds transfer directly to hospital/NGO</span>
              <span>Disbursed against verified vendor bills. No cash handling by the fundraiser.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Employer Matching Widget */}
      <div className="bg-[#FFF8F5] border border-[#FF5523]/30 rounded-[16px] p-5">
        <div className="flex items-center gap-2 text-[#FF5523] mb-1.5">
          <Building2 className="w-4 h-4 shrink-0" />
          <h3 className="font-sans font-bold text-[14px]">
            Could your company match donations?
          </h3>
        </div>
        <p className="font-sans text-[12.5px] text-[#475569] mb-3">
          120+ matching employers already double employee contributions via CSR.
        </p>

        <form onSubmit={handleCompanyCheck} className="flex gap-2">
          <input
            type="email"
            placeholder="name@company.com"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            className="flex-1 bg-white border border-slate-200 rounded-[8px] px-3 py-1.5 font-sans text-[13px] text-slate-800 focus:outline-hidden focus:border-[#FF5523]"
          />
          <button
            type="submit"
            className="bg-slate-900 text-white font-sans font-semibold text-[12px] px-3 py-1.5 rounded-[8px] hover:bg-slate-800 cursor-pointer shrink-0"
          >
            Check eligibility
          </button>
        </form>

        {companyStatus && (
          <p className="font-sans font-medium text-[12px] text-[#00AE5B] mt-2">
            {companyStatus}
          </p>
        )}
      </div>
    </div>
  );
}
