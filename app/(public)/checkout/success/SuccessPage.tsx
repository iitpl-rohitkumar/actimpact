"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Download,
  Share2,
  ExternalLink,
  ShieldCheck,
  Check,
  Home,
  MessageCircle,
} from "lucide-react";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Rajesh Khanna";
  const amount = searchParams.get("amount") || "2,090";
  const txnId = searchParams.get("txn") || "TXN-2026091412345";

  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const previewMessage =
    "I just donated essential supplies to help build a school for 200+ children in Jharkhand on ActImpact. Join me in making a difference!";

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(previewMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <WebsiteLayout>
      <div className="w-full max-w-[880px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Success Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-[#00AE5B] mb-2 animate-in zoom-in-75 duration-200">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h1 className="font-serif font-bold text-[32px] sm:text-[38px] text-[#1E1E1E]">
            Thank You, {name.split(" ")[0]}!
          </h1>

          <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#475569] max-w-[620px] leading-relaxed">
            Your donation of{" "}
            <span className="font-bold text-[#FF5523]">₹{amount}</span> has been
            successfully processed. Every single item will make a lasting impact.
          </p>
        </div>

        {/* Transaction Details Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-6 sm:p-8 shadow-sm flex flex-col gap-6 mb-8">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h2 className="font-serif font-bold text-[19px] sm:text-[20px] text-[#1E1E1E]">
              Transaction Details
            </h2>
            <span className="bg-emerald-50 text-[#00AE5B] border border-emerald-200 font-sans font-bold text-[12px] px-3 py-1 rounded-full flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              Verified &amp; Paid
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-[14px]">
            <div>
              <span className="text-[#6B7280] block text-[12px]">Transaction ID</span>
              <span className="font-semibold text-[#1E1E1E] font-mono">{txnId}</span>
            </div>

            <div>
              <span className="text-[#6B7280] block text-[12px]">Date</span>
              <span className="font-semibold text-[#1E1E1E]">
                {new Date().toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div>
              <span className="text-[#6B7280] block text-[12px]">Sponsored Items</span>
              <span className="font-semibold text-[#1E1E1E]">
                2 × Rice (25kg), 1 × Dal &amp; Pulses (5kg)
              </span>
            </div>

            <div>
              <span className="text-[#6B7280] block text-[12px]">Payment Method</span>
              <span className="font-semibold text-[#1E1E1E]">UPI (Instant Wire)</span>
            </div>

            <div className="sm:col-span-2">
              <span className="text-[#6B7280] block text-[12px]">80G Tax Receipt Status</span>
              <span className="font-semibold text-[#00AE5B] flex items-center gap-1.5 mt-0.5">
                <CheckCircle2 className="w-4 h-4" /> Available for Immediate Download
              </span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleDownload}
              className="w-full sm:flex-1 bg-[#00AE5B] hover:bg-[#00964e] active:scale-98 transition-all text-white font-sans font-semibold text-[14px] py-3 rounded-[12px] flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>
                {downloaded ? "Receipt Downloaded (PDF)" : "Download 80G Receipt"}
              </span>
            </button>

            <Link
              href="/campaign/teachers-day-school"
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-[#1E1E1E] font-sans font-semibold text-[14px] px-6 py-3 rounded-[12px] flex items-center justify-center gap-2 transition-colors"
            >
              <span>View Campaign</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Reassurance Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-[12.5px] font-sans text-[#6B7280]">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#1E1E1E] block">SSL Encrypted</strong>
                Your platform data is securely stored and handled with peak privacy standards.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00AE5B] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#1E1E1E] block">100% Transparency</strong>
                Get direct tracking metrics, verified receipts, and deployment pictures on site.
              </span>
            </div>
          </div>
        </div>

        {/* Share Your Impact Section */}
        <div className="bg-[#FFF8F5] border border-[#FF5523]/25 rounded-[20px] p-6 sm:p-8 flex flex-col gap-5 mb-8">
          <div>
            <h2 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#1E1E1E]">
              Share Your Impact
            </h2>
            <p className="font-sans text-[14px] text-[#6B7280] mt-1">
              Fundraisers shared on WhatsApp and social media raise 3.4× more support.
            </p>
          </div>

          {/* Preview Box */}
          <div className="p-4 rounded-[12px] bg-white border border-slate-200 font-sans italic text-[14px] text-[#475569]">
            &ldquo;{previewMessage}&rdquo;
          </div>

          {/* Social Share Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(previewMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#20C997] hover:bg-[#1bb385] text-white font-sans font-semibold text-[13px] px-5 py-2.5 rounded-[20px] flex items-center gap-2 shadow-xs transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.origin : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] hover:bg-[#0d6efd] text-white font-sans font-semibold text-[13px] px-5 py-2.5 rounded-[20px] flex items-center gap-2 shadow-xs transition-colors"
            >
              <FacebookIcon className="w-4 h-4 fill-white" />
              <span>Facebook</span>
            </a>

            <button
              onClick={handleCopy}
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-sans font-semibold text-[13px] px-5 py-2.5 rounded-[20px] flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#FF5523]" />
              <span>{copied ? "Copied!" : "Copy Link"}</span>
            </button>
          </div>
        </div>

        {/* Footer Actions & Updates Promise */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2 text-[13px] font-sans text-[#00AE5B] bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
            <MessageCircle className="w-4 h-4" />
            <span>You will receive photo updates when your items are delivered.</span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans font-semibold text-[15px] text-[#FF5523] hover:underline mt-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </WebsiteLayout>
  );
}
