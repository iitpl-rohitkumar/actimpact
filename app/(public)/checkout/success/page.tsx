import React, { Suspense } from "react";
import SuccessPage from "./SuccessPage";

export const metadata = {
  title: "Donation Confirmed — ActImpact",
  description: "Thank you for your generous contribution to verified causes on ActImpact.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-sans">Loading confirmation...</div>}>
      <SuccessPage />
    </Suspense>
  );
}
