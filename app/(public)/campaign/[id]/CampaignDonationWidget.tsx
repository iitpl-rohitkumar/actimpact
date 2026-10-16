"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Share2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import CustomDropdown from "@/components/ui/CustomDropdown";
import { CampaignData } from "./campaignData";

export interface SelectedSupplyItem {
  id: string;
  name: string;
  qty: number;
  unitPrice: number;
}

interface CampaignDonationWidgetProps {
  campaign: CampaignData;
  isDonationMode?: boolean;
  selectedSupplies?: SelectedSupplyItem[];
}

export default function CampaignDonationWidget({
  campaign,
  isDonationMode = false,
  selectedSupplies = [],
}: CampaignDonationWidgetProps) {
  const router = useRouter();

  // Mode 1: Default Amount Selection States
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const presetAmounts = [500, 1000, 2500, 5000];

  // Mode 2: Summary Card States (After clicking "Add to cart" / "Continue to Donate")
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [customTip, setCustomTip] = useState<string>("500");

  // Accordion open by default to show 5%, 10%, 15%, Custom pills
  const [isTipOpen, setIsTipOpen] = useState<boolean>(true);

  // Popup Modal Dialog State
  const [isClaimModalOpen, setIsClaimModalOpen] = useState<boolean>(false);

  // Modal Form States matching the dialog image
  const [modalFrequency, setModalFrequency] = useState<"one-time" | "monthly">("one-time");
  const [modalAmount, setModalAmount] = useState<number>(2000);
  const [modalTipPercent, setModalTipPercent] = useState<number>(16);
  const [modalCustomTip, setModalCustomTip] = useState<string>("");
  const [isModalTipOpen, setIsModalTipOpen] = useState<boolean>(false);
  const [modalFullName, setModalFullName] = useState<string>("Meera Sharma");
  const [modalEmail, setModalEmail] = useState<string>("Mumbai, Maharashtra");
  const [modalCountryCode, setModalCountryCode] = useState<string>("+91");
  const [modalPhone, setModalPhone] = useState<string>("");
  const [modalBillingState, setModalBillingState] = useState<string>("Uttar Pradesh");
  const [isIndianCitizen, setIsIndianCitizen] = useState<boolean>(true);

  // Fallback supplies if user clicks continue without selecting
  const activeItems: SelectedSupplyItem[] =
    selectedSupplies.length > 0
      ? selectedSupplies
      : [
          { id: "p1", name: "Rice (25kg)", qty: 2, unitPrice: 750 },
          { id: "p2", name: "Dal & Pulses (5kg)", qty: 1, unitPrice: 400 },
        ];

  // Subtotal Calculation for widget
  const sponsorshipSubtotal = isDonationMode
    ? activeItems.reduce((acc, item) => acc + item.unitPrice * item.qty, 0)
    : selectedAmount;

  // Tip Calculation for widget
  const calculatedTip = customTip !== ""
    ? parseInt(customTip, 10) || 0
    : Math.round((sponsorshipSubtotal * tipPercent) / 100);

  const grandTotal = sponsorshipSubtotal + calculatedTip;

  // Modal Calculation
  const modalCalculatedTip = modalCustomTip
    ? parseInt(modalCustomTip, 10) || 0
    : Math.round((modalAmount * modalTipPercent) / 100);
  const modalGrandTotal = modalAmount + modalCalculatedTip;

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
      navigator
        .share({
          title: campaign.title,
          url: typeof window !== "undefined" ? window.location.href : "",
        })
        .catch(() => {});
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleProceedToCheckout = () => {
    const params = new URLSearchParams({
      items: JSON.stringify(activeItems),
      subtotal: sponsorshipSubtotal.toString(),
      tip: calculatedTip.toString(),
      total: grandTotal.toString(),
      amount: grandTotal.toString(),
      frequency: frequency,
      campaign: campaign.id,
    });
    router.push(`/checkout?${params.toString()}`);
  };

  const handleModalDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsClaimModalOpen(false);
    const txn =
      "TXN-UPI-" +
      new Date().getFullYear() +
      Math.floor(10000000 + Math.random() * 90000000);
    router.push(
      `/success?name=${encodeURIComponent(modalFullName)}&amount=${modalGrandTotal.toLocaleString("en-IN")}&txn=${txn}`
    );
  };

  const percentage = Math.min(
    100,
    Math.round((campaign.raised / campaign.goal) * 100)
  );

  return (
    <>
      <div className="flex flex-col gap-5 sticky top-24">
        {/* 1. TOP DYNAMIC CARD */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-5 flex flex-col gap-4">
          {isDonationMode ? (
            /* ================== AFTER "CONTINUE TO DONATE" IS CLICKED ================== */
            <>
              {/* One Time / Monthly Toggle */}
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
              <h3 className="font-serif font-bold text-[19px] sm:text-[20px] text-[#1E1E1E]">
                Your Donation Summary
              </h3>

              {/* Selected Supplies Breakdown */}
              <div className="flex flex-col gap-2 font-sans text-[14px] border-b border-slate-100 pb-4">
                {activeItems.map((item) => (
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

              {/* Tip Accordion: By default closed */}
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
                      Add {tipPercent}% to help us fund urgent campaigns.
                    </span>
                  </div>
                  {isTipOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 transition-transform" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform" />
                  )}
                </button>

                {/* Accordion dropdown body */}
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
                    ₹{sponsorshipSubtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-[#6B7280]">
                  <span>Tip amount</span>
                  <span className="font-semibold text-[#1E1E1E]">
                    ₹{calculatedTip.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-slate-100">
                  <span className="font-bold text-[16px] text-[#1E1E1E]">
                    Total Amount
                  </span>
                  <span className="font-bold text-[24px] text-[#FF5523]">
                    ₹{grandTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Continue to Payment Button */}
              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[15px] py-3.5 rounded-[12px] shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <span className="text-center font-sans text-[11px] text-[#94A3B8]">
                With razor pay
              </span>
            </>
          ) : (
            /* ================== DEFAULT AMOUNT SELECTOR VIEW ================== */
            <>
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
                <div className="w-full h-2 bg-[#F1F3F5] rounded-full overflow-hidden my-2.5">
                  <div
                    className="h-full bg-[#FF5523] rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[13px] font-sans">
                  <span className="text-[#6B7280] font-normal">
                    {campaign.supportersCount} Supporters
                  </span>
                  <span className="font-semibold text-[#00AE5B]">
                    {percentage}% Completed
                  </span>
                </div>
              </div>

              {/* Quick Amount Chips */}
              <div className="flex flex-col gap-2.5">
                <label className="font-sans font-semibold text-[14px] text-[#292925]">
                  Select or Enter Donation Amount
                </label>

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
                            ? "bg-white text-[#FF5523] border-[#FF5523] shadow-xs"
                            : "bg-white border-slate-200 text-[#1E1E1E] hover:border-slate-300"
                        }`}
                      >
                        ₹{amt.toLocaleString("en-IN")}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Input */}
                <div className="relative mt-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-sans font-bold text-[15px] text-[#1E1E1E]">
                    ₹
                  </span>
                  <input
                    type="text"
                    placeholder="Or enter custom amount (min ₹100)"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full pl-8 pr-4 py-2.5 rounded-[10px] bg-slate-50 border border-slate-200 font-sans text-[14px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[15px] py-3 rounded-[12px] text-center shadow-sm block cursor-pointer"
              >
                Donate Now
              </button>

              {/* Secure / Share footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[13px] font-sans">
                <span className="text-[#6B7280]">Secure Payments</span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="text-[#00AE5B] hover:text-[#00964e] font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? "Link Copied!" : "Share Campaign"}</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* 2. BOTTOM CARD: QR & Direct UPI Payment Card (Constant) */}
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-5 flex flex-col items-center text-center">
          <h3 className="font-medium text-[16px] text-[#171717] pb-3.5 border-b border-slate-100 w-full">
            Donate via Paytm/Google Pay/PhonePe
          </h3>

          {/* Provider Icons */}
          <div className="flex items-center justify-center gap-2.5 my-4">
            <span className="w-7 h-7 rounded-full bg-[#5f259f] text-white flex items-center justify-center font-bold text-[13px]">
              P
            </span>
            <span className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[13px]">
              📞
            </span>
            <span className="h-7 px-2 rounded-full border border-sky-400 bg-sky-50 text-sky-600 font-bold text-[11px] flex items-center justify-center">
              paytm
            </span>
          </div>

          {/* Dynamic QR Code */}
          <div className="p-2 border border-slate-200 rounded-[12px] bg-white shadow-xs mb-3.5">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=actsimpact@icici&pn=ActImpact&am=${sponsorshipSubtotal}`}
              alt="UPI QR Code"
              className="w-[140px] h-[140px] object-contain"
            />
          </div>

          <p className="font-sans text-[14px] text-[#292925] font-medium mb-2">
            Contribute ₹100 or more
          </p>

          {/* Trigger button for Modal Popup */}
          <button
            type="button"
            onClick={() => setIsClaimModalOpen(true)}
            className="font-sans text-[12px] font-semibold text-[#00AE5B] underline hover:text-[#008f4a] block leading-snug cursor-pointer text-center bg-transparent border-0 p-0"
          >
            Claim your donation acknowledgment now!
            <span className="block text-[11px] font-normal text-[#00AE5B]">
              For payment done via UPI
            </span>
          </button>

          <p className="font-sans text-[11px] text-[#94A3B8] leading-relaxed mt-4 pt-4 border-t border-slate-100 text-left">
            Donations made through this fundraiser and UPI ID will be securely
            deposited into ActImpact&apos;s verified NGO account for direct material
            procurement.
          </p>
        </div>
      </div>

      {/* ================== CLAIM ACKNOWLEDGMENT POPUP DIALOG ================== */}
      {isClaimModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Click Close */}
          <div
            className="fixed inset-0"
            onClick={() => setIsClaimModalOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-[740px] bg-white rounded-[24px] shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Top Close button */}
            <button
              type="button"
              onClick={() => setIsClaimModalOpen(false)}
              className="absolute right-2 top-2 w-8 h-8 rounded-full  flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <form onSubmit={handleModalDonate} className="flex flex-col gap-5">
              {/* 1. Toggle Button Bar */}
              <div className="bg-[#FFF5F2] border border-[#FF5523]/25 p-1 rounded-[12px] flex items-center text-[13px] font-sans font-semibold">
                <button
                  type="button"
                  onClick={() => setModalFrequency("one-time")}
                  className={`flex-1 py-2.5 rounded-[9px] transition-all cursor-pointer ${
                    modalFrequency === "one-time"
                      ? "bg-[#FF5523] text-white shadow-xs"
                      : "text-[#4A4A4A] hover:text-[#1E1E1E]"
                  }`}
                >
                  One Time
                </button>
                <button
                  type="button"
                  onClick={() => setModalFrequency("monthly")}
                  className={`flex-1 py-2.5 rounded-[9px] transition-all cursor-pointer ${
                    modalFrequency === "monthly"
                      ? "bg-[#FF5523] text-white shadow-xs"
                      : "text-[#4A4A4A] hover:text-[#1E1E1E]"
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* 2. Amount Selection Chips */}
              <div className="flex flex-col gap-2">
                <label className="font-sans font-semibold text-[13.5px] text-[#292925]">
                  Select or Enter Donation Amount
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {presetAmounts.map((amt) => {
                    const isSelected = modalAmount === amt && !modalCustomTip;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setModalAmount(amt)}
                        className={`py-2 rounded-[10px] font-sans font-bold text-[13.5px] transition-all cursor-pointer text-center border ${
                          isSelected
                            ? "bg-white text-[#1E1E1E] border-slate-300 shadow-xs"
                            : "bg-white border-slate-200 text-[#1E1E1E] hover:border-slate-300"
                        }`}
                      >
                        ₹{amt.toLocaleString("en-IN")}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Accordion: Share some love? */}
              <div className="flex flex-col border-b border-slate-100 pb-3">
                <button
                  type="button"
                  onClick={() => setIsModalTipOpen(!isModalTipOpen)}
                  className="w-full flex items-center justify-between text-left cursor-pointer select-none py-1 group"
                >
                  <div>
                    <span className="font-sans font-semibold text-[14px] text-[#1E1E1E] block">
                      Share some love?
                    </span>
                    <span className="font-sans text-[12px] text-[#6B7280]">
                      Add {modalTipPercent}% to help us fund urgent campaigns.
                    </span>
                  </div>
                  {isModalTipOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 transition-transform" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform" />
                  )}
                </button>

                {isModalTipOpen && (
                  <div className="grid grid-cols-4 gap-2 pt-3">
                    {[5, 10, 15].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => {
                          setModalTipPercent(pct);
                          setModalCustomTip("");
                        }}
                        className={`py-1.5 rounded-[8px] font-sans font-semibold text-[12px] border transition-colors cursor-pointer ${
                          modalTipPercent === pct && !modalCustomTip
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
                        setModalCustomTip("500");
                        setModalTipPercent(0);
                      }}
                      className={`py-1.5 rounded-[8px] font-sans font-semibold text-[12px] border transition-colors cursor-pointer ${
                        modalCustomTip
                          ? "bg-[#FF5523] text-white border-[#FF5523]"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      Custom
                    </button>
                  </div>
                )}
              </div>

              {/* 4. Full Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif font-bold text-[14px] text-[#1E1E1E]">
                    full name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={modalFullName}
                      onChange={(e) => setModalFullName(e.target.value)}
                      className="w-full bg-white border border-[#20C997] rounded-[10px] pl-3.5 pr-9 py-2.5 font-sans text-[13.5px] text-[#1E1E1E] focus:outline-none"
                    />
                    <CheckCircle2 className="w-4 h-4 text-[#20C997] absolute right-3 top-1/2 -translate-y-1/2 stroke-[2.5]" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-serif font-bold text-[14px] text-[#1E1E1E]">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={modalEmail}
                      onChange={(e) => setModalEmail(e.target.value)}
                      className="w-full bg-white border border-[#20C997] rounded-[10px] pl-3.5 pr-9 py-2.5 font-sans text-[13.5px] text-[#1E1E1E] focus:outline-none"
                    />
                    <CheckCircle2 className="w-4 h-4 text-[#20C997] absolute right-3 top-1/2 -translate-y-1/2 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* 5. Phone no. */}
              <div className="flex flex-col gap-1.5">
                <label className="font-serif font-bold text-[14px] text-[#1E1E1E]">
                  Phone no.
                </label>
                <div className="flex items-center gap-2">
                  <div className="w-[85px] shrink-0">
                    <CustomDropdown
                      value={modalCountryCode}
                      onChange={setModalCountryCode}
                      options={["+91", "+1", "+44"]}
                      buttonClassName="h-[42px] rounded-[10px] px-2.5"
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Enter phone no."
                    value={modalPhone}
                    onChange={(e) => setModalPhone(e.target.value.replace(/[^0-9]/g, ""))}
                    className="flex-1 h-[42px] bg-white border border-slate-200 rounded-[10px] px-3.5 font-sans text-[13.5px] text-[#1E1E1E] placeholder:text-slate-400 focus:outline-none focus:border-[#FF5523]"
                  />
                </div>
              </div>

              {/* 6. Billing State */}
              <div className="flex flex-col gap-1.5">
                <label className="font-serif font-bold text-[14px] text-[#1E1E1E]">
                  Billing state
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={modalBillingState}
                    onChange={(e) => setModalBillingState(e.target.value)}
                    className="w-full bg-white border border-[#20C997] rounded-[10px] pl-3.5 pr-9 py-2.5 font-sans text-[13.5px] text-[#1E1E1E] focus:outline-none"
                  />
                  <CheckCircle2 className="w-4 h-4 text-[#20C997] absolute right-3 top-1/2 -translate-y-1/2 stroke-[2.5]" />
                </div>
              </div>

              {/* 7. Are you Indian citizen? Radio row */}
              <div className="flex items-center gap-6 font-sans text-[13.5px]">
                <span className="font-bold text-[#1E1E1E]">
                  Are you Indian citizen?
                </span>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="indianCitizen"
                    checked={isIndianCitizen === true}
                    onChange={() => setIsIndianCitizen(true)}
                    className="w-4 h-4 text-[#FF5523] focus:ring-[#FF5523] cursor-pointer"
                  />
                  <span className="font-medium text-[#1E1E1E]">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="indianCitizen"
                    checked={isIndianCitizen === false}
                    onChange={() => setIsIndianCitizen(false)}
                    className="w-4 h-4 text-[#FF5523] focus:ring-[#FF5523] cursor-pointer"
                  />
                  <span className="font-medium text-[#1E1E1E]">NO</span>
                </label>
              </div>

              {/* 8. Total Amount Pink Highlight Box */}
              <div className="bg-[#FFF5F2] rounded-[12px] p-4 flex flex-col gap-1 border border-[#FF5523]/15">
                <div className="flex items-baseline gap-2 font-serif font-bold text-[19px] sm:text-[20px] text-[#FF5523]">
                  <span>Total amt. -</span>
                  <span>₹{modalGrandTotal.toLocaleString("en-IN")}</span>
                </div>
                <p className="font-sans text-[12.5px] text-[#475569]">
                  ₹{modalAmount.toLocaleString("en-IN")} donation amt. + ₹{modalCalculatedTip.toLocaleString("en-IN")} Tip amt.
                </p>
              </div>

              {/* 9. Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsClaimModalOpen(false)}
                  className="px-6 py-2.5 rounded-[10px] border border-slate-200 text-[#475569] font-sans font-semibold text-[14px] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-[10px] bg-[#FF5523] hover:bg-[#e04515] active:scale-98 text-white font-sans font-bold text-[14px] shadow-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Donate</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}