import React, { Suspense } from "react";
import CheckoutPage from "./CheckoutPage";

export const metadata = {
  title: "Complete Your Donation — ActImpact",
  description:
    "Secure checkout for verified fundraisers across India. 0% platform fee and instant 80G tax certificates.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-sans">Loading checkout...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}
