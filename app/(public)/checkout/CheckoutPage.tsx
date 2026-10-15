"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import CheckoutFormSection from "./CheckoutFormSection";
import CheckoutSummarySection from "./CheckoutSummarySection";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const rawAmount = searchParams.get("amount");
  const parsedAmount = rawAmount ? parseInt(rawAmount, 10) : 1900;
  const initialAmount = isNaN(parsedAmount) || parsedAmount <= 0 ? 1900 : parsedAmount;

  const [donorName, setDonorName] = useState("Rajesh Khanna");
  const [email, setEmail] = useState("rajesh.khanna@gmail.com");
  const [phone, setPhone] = useState("9876543210");
  const [claimTaxBenefit, setClaimTaxBenefit] = useState(true);
  const [panNumber, setPanNumber] = useState("ABCDE1234F");
  const [billingAddress, setBillingAddress] = useState(
    "402, Trade Tower, Bandra East, Mumbai — 400051"
  );
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donationFrequency, setDonationFrequency] = useState<"one-time" | "monthly">("one-time");

  return (
    <WebsiteLayout>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-14">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-serif font-bold text-[28px] sm:text-[34px] text-[#1E1E1E]">
            Complete Your Donation
          </h1>
          <p className="font-sans text-[15px] text-[#6B7280] mt-1">
            Every contribution directly funds audited supplies and medical treatments with 0% platform fee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Form Details (8 cols) */}
          <div className="lg:col-span-8">
            <CheckoutFormSection
              donorName={donorName}
              setDonorName={setDonorName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              claimTaxBenefit={claimTaxBenefit}
              setClaimTaxBenefit={setClaimTaxBenefit}
              panNumber={panNumber}
              setPanNumber={setPanNumber}
              billingAddress={billingAddress}
              setBillingAddress={setBillingAddress}
              isAnonymous={isAnonymous}
              setIsAnonymous={setIsAnonymous}
              donationFrequency={donationFrequency}
              setDonationFrequency={setDonationFrequency}
            />
          </div>

          {/* Right Column: Summary Card & CTAs (4 cols) */}
          <div className="lg:col-span-4">
            <CheckoutSummarySection amount={initialAmount} donorName={donorName} />
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
}
