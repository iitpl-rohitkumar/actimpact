"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Check,
  Download,
  Share2,
  Lock,
  CheckCircle2,
  ArrowRight,
  Camera,
} from "lucide-react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const rawName = searchParams.get("name") || "Rajesh Khanna";
  const firstName = rawName.trim().split(" ")[0] || "Rajesh";
  const amount = searchParams.get("amount") || "2,090";
  const txnId = searchParams.get("txn") || "TXN-2026091412345";
  const items =
    searchParams.get("items") || "2 × Rice (25kg), 1 × Dal & Pulses (5kg)";
  const paymentMethod = searchParams.get("method") || "UPI (GPay)";

  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const previewMessage =
    "I just donated essential supplies to help build a school for 200+ children in Jharkhand. Join me in making a difference!";

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(previewMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    setDownloaded(true);
    // Trigger receipt PDF dummy download
    const element = document.createElement("a");
    const file = new Blob(
      [
        `========================================\n` +
          `       ACTIMPACT 80G TAX RECEIPT\n` +
          `========================================\n\n` +
          `Transaction ID : ${txnId}\n` +
          `Date           : September 14, 2026\n` +
          `Donor Name     : ${rawName}\n` +
          `Amount         : INR ${amount}\n` +
          `Sponsored Items: ${items}\n` +
          `Payment Mode   : ${paymentMethod}\n` +
          `NGO Partner    : Kameshwar Foundation\n` +
          `80G Reg Number : AABTK1234F20214\n\n` +
          `Eligible for 50% deduction under Section 80G.\n` +
          `========================================\n`,
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = `80G_Receipt_${txnId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <WebsiteLayout>
      <div className="w-full max-w-[740px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Top Centered Status */}
        <div className="flex flex-col items-center text-center gap-2.5 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#00AE5B] text-white flex items-center justify-center mb-1 shadow-sm">
            <Check className="w-7 h-7 stroke-[3]" />
          </div>

          <h1 className="font-serif font-bold text-[28px] sm:text-[34px] text-[#1E1E1E]">
            Thank You, {firstName}!
          </h1>

          <p className="font-sans font-normal text-[15px] sm:text-[16px] text-[#475569] max-w-[560px] leading-relaxed">
            Your donation of{" "}
            <span className="font-bold text-[#FF5523]">₹{amount}</span> has been
            successfully processed. Every single item will make a lasting impact.
          </p>
        </div>

        {/* Transaction Details Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-7 shadow-xs mb-5">
          <h2 className="font-serif font-bold text-[18px] text-[#1E1E1E] mb-4 pb-3 border-b border-slate-100">
            Transaction Details
          </h2>

          <div className="flex flex-col gap-3 font-sans text-[13.5px]">
            <div className="flex items-center justify-between text-[#6B7280]">
              <span>Transaction ID</span>
              <span className="font-semibold text-[#1E1E1E] font-mono">
                {txnId}
              </span>
            </div>

            <div className="flex items-center justify-between text-[#6B7280]">
              <span>Date</span>
              <span className="font-semibold text-[#1E1E1E]">
                September 14, 2026
              </span>
            </div>

            <div className="flex items-center justify-between text-[#6B7280]">
              <span>Sponsored Items</span>
              <span className="font-semibold text-[#1E1E1E] text-right">
                {items}
              </span>
            </div>

            <div className="flex items-center justify-between text-[#6B7280]">
              <span>Payment Method</span>
              <span className="font-semibold text-[#1E1E1E]">
                {paymentMethod}
              </span>
            </div>

            <div className="flex items-center justify-between text-[#6B7280] pt-1">
              <span>80G Receipt Status</span>
              <span className="bg-[#E6F7EF] text-[#00AE5B] font-sans font-bold text-[11px] px-2.5 py-0.5 rounded-[4px] uppercase tracking-wider">
                AVAILABLE
              </span>
            </div>
          </div>
        </div>

        {/* Twin Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          <button
            type="button"
            onClick={handleDownload}
            className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-semibold text-[14px] py-3 rounded-[8px] flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>
              {downloaded ? "Downloading Receipt..." : "Download 80G Receipt"}
            </span>
          </button>

          <Link
            href="/campaign/teachers-day-school"
            className="w-full bg-white hover:bg-slate-50 border border-[#FF5523] text-[#FF5523] font-sans font-semibold text-[14px] py-3 rounded-[8px] flex items-center justify-center gap-2 transition-colors text-center"
          >
            <span>View Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Security Reassurance Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 px-1 text-[12px] font-sans text-[#6B7280] mb-6">
          <div className="flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1E1E1E] block font-semibold">
                SSL Encrypted
              </strong>
              <span>
                Your platform data is securely stored and handled with peak privacy standards.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1E1E1E] block font-semibold">
                100% Transparency
              </strong>
              <span>
                Get direct tracking metrics, verified receipts, and deployment pictures on site.
              </span>
            </div>
          </div>
        </div>

        {/* Share Your Impact Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-xs flex flex-col gap-4 mb-6">
          <h3 className="font-serif font-bold text-[17px] text-[#1E1E1E] text-center">
            Share Your Impact
          </h3>

          {/* Social Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(previewMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 hover:border-slate-300 text-slate-800 font-sans font-medium text-[13px] px-4 py-2 rounded-[8px] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(previewMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 hover:border-slate-300 text-slate-800 font-sans font-medium text-[13px] px-4 py-2 rounded-[8px] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span className="font-bold text-[14px]">𝕏</span>
              <span>Twitter / X</span>
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.origin : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 hover:border-slate-300 text-slate-800 font-sans font-medium text-[13px] px-4 py-2 rounded-[8px] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <FacebookIcon className="w-4 h-4 fill-[#1877F2]" />
              <span>Facebook</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="border border-slate-200 hover:border-slate-300 text-slate-800 font-sans font-medium text-[13px] px-4 py-2 rounded-[8px] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#6B7280]" />
              <span>{copied ? "Copied!" : "Copy Link"}</span>
            </button>
          </div>

          {/* Preview Box */}
          <div className="p-3.5 rounded-[10px] bg-slate-50 border border-slate-200 font-sans text-[12.5px] text-[#475569]">
            <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
              PREVIEW MESSAGE
            </span>
            &ldquo;{previewMessage}&rdquo;
          </div>
        </div>

        {/* Delivery Photo Updates Note & Back to Home */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2 text-[12.5px] font-sans text-[#00AE5B]">
            <Camera className="w-4 h-4 text-[#00AE5B]" />
            <span>You will receive photo updates when your items are delivered.</span>
          </div>

          <Link
            href="/"
            className="font-sans font-semibold text-[14px] text-[#FF5523] hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </WebsiteLayout>
  );
}