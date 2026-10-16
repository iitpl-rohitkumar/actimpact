"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import WebsiteLayout from "@/components/layout/WebsiteLayout";
import CheckoutFormSection from "./CheckoutFormSection";
import CheckoutSummarySection from "./CheckoutSummarySection";

export interface CheckoutItem {
  id: string;
  name: string;
  qty: number;
  unitPrice: number;
}

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  // Parse items from query param or fallback to screenshot defaults
  const items: CheckoutItem[] = useMemo(() => {
    const rawItems = searchParams.get("items");
    if (rawItems) {
      const trimmed = rawItems.trim();

      // Only attempt JSON.parse if it looks like a JSON array or object
      if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
        try {
          const parsed = JSON.parse(trimmed);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        } catch {
          // Ignore invalid JSON format and continue to fallback
        }
      }

      // If plain text summary was passed (e.g. "2 × Rice (25kg), 1 × Dal & Pulses (5kg)")
      try {
        const parts = trimmed.split(",").map((s) => s.trim()).filter(Boolean);
        const parsedItems: CheckoutItem[] = parts
          .map((part, idx) => {
            const match = part.match(/^(\d+)\s*(?:×|x|\*)\s*(.+)$/i);
            if (match) {
              const qty = parseInt(match[1], 10) || 1;
              const name = match[2].trim();
              const unitPrice = name.toLowerCase().includes("rice") ? 750 : 400;
              return { id: `p${idx + 1}`, name, qty, unitPrice };
            }
            return null;
          })
          .filter((item): item is CheckoutItem => item !== null);

        if (parsedItems.length > 0) {
          return parsedItems;
        }
      } catch {
        // Continue to fallback
      }
    }

    return [
      { id: "p1", name: "Rice (25kg)", qty: 2, unitPrice: 750 },
      { id: "p2", name: "Dal & Pulses (5kg)", qty: 1, unitPrice: 400 },
    ];
  }, [searchParams]);

  // Subtotal, Tip, Total
  const initialSubtotal = useMemo(() => {
    const raw = searchParams.get("subtotal");
    if (raw) {
      const parsed = parseInt(raw, 10);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
    return items.reduce((acc, item) => acc + item.unitPrice * item.qty, 0);
  }, [searchParams, items]);

  const initialTip = useMemo(() => {
    const raw = searchParams.get("tip");
    if (raw) {
      const parsed = parseInt(raw, 10);
      if (!isNaN(parsed) && parsed >= 0) return parsed;
    }
    return 500;
  }, [searchParams]);

  const rawFrequency = searchParams.get("frequency");
  const initialFrequency =
    rawFrequency === "monthly" ? "monthly" : "one-time";

  const [donorName, setDonorName] = useState("Rajesh Khanna");
  const [email, setEmail] = useState("rajesh.khanna@gmail.com");
  const [phone, setPhone] = useState("98765 43210");
  const [claimTaxBenefit, setClaimTaxBenefit] = useState(true);
  const [panNumber, setPanNumber] = useState("ABCDE1234F");
  const [billingAddress, setBillingAddress] = useState(
    "402, Trade Tower, Bandra East, Mumbai — 400051"
  );
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donationFrequency, setDonationFrequency] = useState<"one-time" | "monthly">(
    initialFrequency
  );

  return (
    <WebsiteLayout>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="font-serif font-bold text-[28px] sm:text-[32px] text-[#1E1E1E]">
            Complete Your Donation
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Form Details (approx 7.5 cols / 62%) */}
          <div className="lg:col-span-7 xl:col-span-8">
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
            />
          </div>

          {/* Right Column: Summary Card & Guarantees (approx 4.5 cols / 38%) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <CheckoutSummarySection
              items={items}
              subtotal={initialSubtotal}
              initialTip={initialTip}
              donorName={donorName}
              frequency={donationFrequency}
              setFrequency={setDonationFrequency}
            />
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
}
