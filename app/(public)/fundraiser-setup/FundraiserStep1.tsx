"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Heart,
  User,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Check,
} from "lucide-react";
import CustomDropdown from "@/components/ui/CustomDropdown";

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
  onNext,
}: Step1Props) {
  const [otpSent, setOtpSent] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [countryCodeOpen, setCountryCodeOpen] = useState(false);
  const countryCodeRef = useRef<HTMLDivElement>(null);

  const countryCodes = ["+91", "+1", "+44", "+971", "+65", "+61"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryCodeRef.current &&
        !countryCodeRef.current.contains(event.target as Node)
      ) {
        setCountryCodeOpen(false);
      }
    }
    if (countryCodeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countryCodeOpen]);

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-xs flex flex-col gap-6">
      <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E]">
        Verifying Detail
      </h2>

      {/* Row 1: Choose Purpose & Choose Beneficiary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Choose Purpose Custom Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Choose Purpose
          </label>
          <CustomDropdown
            value={purpose}
            onChange={setPurpose}
            icon={<Heart className="w-4 h-4 text-slate-400" />}
            options={[
              "Medical Treatment",
              "Cancer Care",
              "Transplant Surgery",
              "Education",
              "Child Health",
            ]}
          />
        </div>

        {/* Choose Beneficiary Custom Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Choose Beneficiary
          </label>
          <CustomDropdown
            value={beneficiary}
            onChange={setBeneficiary}
            icon={<User className="w-4 h-4 text-slate-400" />}
            options={[
              "Yourself",
              "Family member",
              "Friend",
              "Community / NGO",
            ]}
          />
        </div>
      </div>

      {/* Row 2: Beneficiary Name & City of Treatment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Beneficiary Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            Beneficiary&apos;s full name
          </label>
          <div className="relative">
            <input
              type="text"
              value={beneficiaryName}
              onChange={(e) => setBeneficiaryName(e.target.value)}
              placeholder="e.g. Meera Sharma"
              className="w-full bg-white border border-slate-200 rounded-[8px] pl-3.5 pr-9 py-2.5 font-sans text-[13.5px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
            />
            <CheckCircle2 className="w-4 h-4 text-[#00AE5B] absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
          <span className="text-[12px] font-sans text-[#00AE5B] flex items-center gap-1 mt-0.5">
            <span>✓</span> Use the name shown on the beneficiary&apos;s medical records.
          </span>
        </div>

        {/* City of Treatment */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans font-semibold text-[13px] text-[#292925]">
            City of treatment
          </label>
          <div className="relative">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Mumbai, Maharashtra"
              className="w-full bg-white border border-slate-200 rounded-[8px] pl-3.5 pr-9 py-2.5 font-sans text-[13.5px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
            />
            <CheckCircle2 className="w-4 h-4 text-[#00AE5B] absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Row 3: Contact No. with Animated Country Code Dropdown */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sans font-semibold text-[13px] text-[#292925]">
          Contact no.
        </label>
        <div className="w-full bg-white border border-slate-200 rounded-[8px] flex items-center px-3 py-1.5 focus-within:border-[#FF5523] transition-colors relative">
          {/* Animated Country Code Selector */}
          <div ref={countryCodeRef} className="relative">
            <button
              type="button"
              onClick={() => setCountryCodeOpen(!countryCodeOpen)}
              className="flex items-center gap-1 pr-2.5 border-r border-slate-200 text-slate-700 font-sans font-medium text-[13.5px] cursor-pointer hover:text-slate-900 select-none py-1"
            >
              <span>{countryCode}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  countryCodeOpen ? "rotate-180 text-[#FF5523]" : ""
                }`}
              />
            </button>

            {/* Country code floating animated menu */}
            {countryCodeOpen && (
              <div className="absolute left-0 top-full mt-2 w-28 bg-white border border-slate-200 rounded-[8px] shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                {countryCodes.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => {
                      setCountryCode(code);
                      setCountryCodeOpen(false);
                    }}
                    className={`w-full px-3 py-1.5 text-left font-sans text-[13px] flex items-center justify-between hover:bg-slate-50 cursor-pointer ${
                      countryCode === code
                        ? "text-[#FF5523] font-semibold bg-[#FFF5F2]"
                        : "text-slate-700"
                    }`}
                  >
                    <span>{code}</span>
                    {countryCode === code && (
                      <Check className="w-3 h-3 text-[#FF5523]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone no."
            className="w-full bg-transparent pl-3 font-sans text-[13.5px] text-slate-800 focus:outline-none"
          />

          <button
            type="button"
            onClick={handleSendOtp}
            className="border border-[#FF5523] text-[#FF5523] hover:bg-[#FFF5F2] active:scale-95 font-sans font-semibold text-[13px] px-4 py-1.5 rounded-[6px] transition-all shrink-0 cursor-pointer flex items-center gap-1"
          >
            <span>{otpSent ? "OTP Sent" : "Send OTP"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Continue CTA Button */}
      <button
        type="button"
        onClick={onNext}
        className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[15px] py-3.5 rounded-[8px] shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
      >
        <span>Continue to identity verification</span>
        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
      </button>
    </div>
  );
}
