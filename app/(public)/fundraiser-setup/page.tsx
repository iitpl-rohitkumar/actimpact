import React, { Suspense } from "react";
import FundraiserSetupPage from "./FundraiserSetupPage";

export const metadata = {
  title: "Start a Free Fundraiser — ActImpact",
  description:
    "Launch a verified fundraising campaign in 3 easy steps with 0% platform fee, instant verification, and direct hospital settlements.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-sans">Loading fundraiser setup...</div>}>
      <FundraiserSetupPage />
    </Suspense>
  );
}
