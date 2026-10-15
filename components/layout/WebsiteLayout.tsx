import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DonationToast from "@/components/ui/DonationToast";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E293B]">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      {/* <DonationToast /> */}
    </div>
  );
}
