"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Footer from "@/components/layout/Footer";
import FundraiserHeader from "./FundraiserHeader";
import FundraiserStep1 from "./FundraiserStep1";
import FundraiserStep2 from "./FundraiserStep2";
import FundraiserStep3 from "./FundraiserStep3";
import FundraiserSummarySidebar from "./FundraiserSummarySidebar";

export default function FundraiserSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [purpose, setPurpose] = useState("Medical Treatment");
  const [beneficiary, setBeneficiary] = useState("Family member");
  const [beneficiaryName, setBeneficiaryName] = useState("Meera Sharma");
  const [city, setCity] = useState("Mumbai, Maharashtra");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("124578");

  const [email, setEmail] = useState("Mumbai, Maharashtra");
  const [currentCity, setCurrentCity] = useState("Pune, Maharashtra");
  const [language, setLanguage] = useState("English & Hindi");
  const [targetAmount, setTargetAmount] = useState("12,00,000");
  const [duration, setDuration] = useState("45 days");
  const [consent, setConsent] = useState(true);

  const [docType, setDocType] = useState("Medical Bill");
  const [files, setFiles] = useState<string[]>([]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <FundraiserHeader currentStep={3} setStep={setCurrentStep} />

        <div className="flex-1 w-full max-w-[720px] mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-[#00AE5B] mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="font-sans font-bold text-[13px] text-[#00AE5B] uppercase tracking-wider block">
            Submission Received
          </span>

          <h1 className="font-serif font-bold text-[30px] sm:text-[36px] text-[#1E1E1E] mt-1">
            Your Campaign Is Under Clinical Review
          </h1>

          <p className="font-sans text-[15px] sm:text-[16px] text-[#475569] mt-3 leading-relaxed max-w-[560px]">
            Thank you! Our trust &amp; safety team has received the documentation for{" "}
            <strong className="text-slate-900">{beneficiaryName}</strong>. You will receive an SMS and WhatsApp notification once verification is complete (typically under 6 hours).
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <Link
              href="/campaign/teachers-day-school"
              className="w-full sm:w-auto bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all text-white font-sans font-semibold text-[15px] px-8 py-3 rounded-[24px] shadow-sm flex items-center justify-center gap-2"
            >
              <span>Preview Live Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/"
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-sans font-semibold text-[15px] px-8 py-3 rounded-[24px] transition-colors text-center"
            >
              Return Home
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <FundraiserHeader currentStep={currentStep} setStep={setCurrentStep} />

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Wizard Form Area (approx 7.5 cols on lg) */}
          <div className="lg:col-span-7 xl:col-span-8">
            {currentStep === 1 && (
              <FundraiserStep1
                purpose={purpose}
                setPurpose={setPurpose}
                beneficiary={beneficiary}
                setBeneficiary={setBeneficiary}
                beneficiaryName={beneficiaryName}
                setBeneficiaryName={setBeneficiaryName}
                city={city}
                setCity={setCity}
                phone={phone}
                setPhone={setPhone}
                otp={otp}
                setOtp={setOtp}
                onNext={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <FundraiserStep2
                beneficiaryName={beneficiaryName}
                email={email}
                setEmail={setEmail}
                currentCity={currentCity}
                setCurrentCity={setCurrentCity}
                language={language}
                setLanguage={setLanguage}
                targetAmount={targetAmount}
                setTargetAmount={setTargetAmount}
                duration={duration}
                setDuration={setDuration}
                consent={consent}
                setConsent={setConsent}
                onBack={() => setCurrentStep(1)}
                onNext={() => setCurrentStep(3)}
              />
            )}

            {currentStep === 3 && (
              <FundraiserStep3
                docType={docType}
                setDocType={setDocType}
                files={files}
                setFiles={setFiles}
                onBack={() => setCurrentStep(2)}
                onSubmit={handleSubmit}
              />
            )}
          </div>

          {/* Right Column: Live Summary Sidebar (approx 4.5 cols on lg) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <FundraiserSummarySidebar
              currentStep={currentStep}
              purpose={purpose}
              beneficiary={beneficiary}
              beneficiaryName={beneficiaryName}
              city={city}
              language={language}
              targetAmount={targetAmount}
              duration={duration}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
