"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, ShoppingBag, CheckCircle, ChevronDown, Award } from "lucide-react";
import { CampaignData } from "./campaignData";

interface CampaignTabsSectionProps {
  campaign: CampaignData;
}

export default function CampaignTabsSection({ campaign }: CampaignTabsSectionProps) {
  const [activeTab, setActiveTab] = useState<"products" | "story" | "updates">("products");
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [donorTab, setDonorTab] = useState<"recent" | "generous">("recent");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalSponsorship = campaign.products.reduce((acc, p) => {
    return acc + (quantities[p.id] || 0) * p.price;
  }, 0);

  const totalItemsCount = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col gap-6">
      {/* Tab Buttons Bar */}
      <div className="w-full bg-[#F3F0FA] p-1 rounded-[24px] flex items-center justify-between">
        <button
          onClick={() => setActiveTab("products")}
          className={`flex-1 py-2.5 rounded-[20px] font-sans font-medium text-[14px] transition-all cursor-pointer text-center ${
            activeTab === "products"
              ? "bg-[#FF5523] text-white shadow-xs"
              : "text-[#292925] hover:text-[#FF5523]"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("story")}
          className={`flex-1 py-2.5 rounded-[20px] font-sans font-medium text-[14px] transition-all cursor-pointer text-center ${
            activeTab === "story"
              ? "bg-[#FF5523] text-white shadow-xs"
              : "text-[#292925] hover:text-[#FF5523]"
          }`}
        >
          Story
        </button>
        <button
          onClick={() => setActiveTab("updates")}
          className={`flex-1 py-2.5 rounded-[20px] font-sans font-medium text-[14px] transition-all cursor-pointer text-center ${
            activeTab === "updates"
              ? "bg-[#FF5523] text-white shadow-xs"
              : "text-[#292925] hover:text-[#FF5523]"
          }`}
        >
          Updates
        </button>
      </div>

      {/* Tab 1: Products */}
      {activeTab === "products" && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#1E1E1E]">
              Required Supplies for this School
            </h2>
            {totalItemsCount > 0 && (
              <span className="font-sans font-semibold text-[13px] text-[#FF5523] bg-[#FDF3EC] px-3 py-1 rounded-full">
                {totalItemsCount} items selected (₹{totalSponsorship.toLocaleString("en-IN")})
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaign.products.map((prod) => {
              const qty = quantities[prod.id] || 0;
              return (
                <div
                  key={prod.id}
                  className={`border rounded-[12px] p-3.5 flex items-center gap-3 transition-all ${
                    qty > 0
                      ? "border-[#FF5523] bg-[#FFF5F2]"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="relative w-16 h-16 rounded-[8px] overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans font-semibold text-[14px] text-[#1E1E1E] truncate">
                      {prod.name}
                    </h3>
                    <p className="font-sans text-[12px] text-[#6B7280]">
                      {prod.needed}
                    </p>
                    <p className="font-sans font-extrabold text-[14px] text-[#FF5523] mt-0.5">
                      ₹{prod.price}
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-[8px] p-1 shrink-0">
                    <button
                      onClick={() => handleQtyChange(prod.id, -1)}
                      className="w-5 h-5 rounded-[4px] flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-800 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-sans font-bold text-[13px] text-[#1E1E1E] w-4 text-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => handleQtyChange(prod.id, 1)}
                      className="w-5 h-5 rounded-[4px] flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-800 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Checkout Banner if items selected */}
          <div className="mt-4 p-5 rounded-[16px] bg-[#FFF5F2] border border-[#FF5523]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-serif font-bold text-[18px] text-[#1E1E1E]">
                {totalItemsCount > 0
                  ? `Sponsoring ${totalItemsCount} items for ₹${totalSponsorship.toLocaleString("en-IN")}`
                  : "Select supplies above to sponsor essential kits directly"}
              </p>
              <p className="font-sans text-[13px] text-[#6B7280]">
                Materials are delivered directly to Kameshwar Foundation with verified receipts.
              </p>
            </div>

            <Link
              href={
                totalItemsCount > 0
                  ? `/checkout?amount=${totalSponsorship}&items=${totalItemsCount}`
                  : `/checkout?amount=1000`
              }
              className="w-full sm:w-auto bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all text-white font-sans font-semibold text-[14px] px-7 py-3 rounded-[24px] flex items-center justify-center gap-2 shadow-sm shrink-0"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Continue to Donate</span>
            </Link>
          </div>
        </div>
      )}

      {/* Tab 2: Story */}
      {activeTab === "story" && (
        <div className="flex flex-col gap-8 animate-in fade-in duration-200">
          {/* Know Your NGO Card */}
          <div className="bg-[#FCFFFD] border border-[#E2E8F0] rounded-[16px] p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <span className="font-serif font-bold text-[20px] text-[#292925] block">
                  Know Your NGO
                </span>
                <span className="font-sans font-semibold text-[16px] text-[#00AE5B] block mt-0.5">
                  {campaign.ngo.name}
                </span>
                <span className="font-sans text-[12px] text-[#6B7280]">
                  Registered NGO • Active since {campaign.ngo.activeSince}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-emerald-50 text-[#10B981] border border-emerald-200 font-sans font-semibold text-[12px] px-3 py-1 rounded-[6px]">
                  Verified NGO
                </span>
                <span className="bg-amber-50 text-[#854D0E] border border-amber-200 font-sans font-semibold text-[12px] px-3 py-1 rounded-[6px]">
                  80G Tax Benefit
                </span>
              </div>
            </div>

            {/* NGO Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div>
                <span className="font-sans text-[12px] text-[#6B7280] block">Founder</span>
                <span className="font-sans font-semibold text-[16px] text-[#292925]">
                  {campaign.ngo.founder}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] text-[#6B7280] block">Children Impacted</span>
                <span className="font-sans font-semibold text-[16px] text-[#292925]">
                  {campaign.ngo.impact}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] text-[#6B7280] block">Teachers Employed</span>
                <span className="font-sans font-semibold text-[16px] text-[#292925]">
                  {campaign.ngo.teachers}
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="flex flex-col gap-4 font-sans text-[15px] sm:text-[16px] text-[#1E1E1E] leading-relaxed">
            {campaign.storyParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Banner: They Need More Than Tarpaulin Roofs */}
          <div className="bg-[#FFF1ED] rounded-[16px] p-6 sm:p-8 border border-[#FF5523]/20">
            <h3 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#292925] mb-2">
              They Need More Than Tarpaulin Roofs
            </h3>
            <p className="font-sans font-normal text-[14px] sm:text-[15px] text-[#6B7280] leading-relaxed">
              Every monsoon, the makeshift tents collapse under heavy rains, flooding the only learning space these children have. Books get destroyed, classes stop for weeks, and students lose precious momentum. A permanent school building is not a luxury — it is survival.
            </p>
          </div>

          {/* Testimonials Row */}
          <div>
            <h3 className="font-serif font-bold text-[20px] text-[#292925] mb-4">
              Voices From the Field
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {campaign.testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-[12px] p-5 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <h4 className="font-serif font-semibold text-[15px] text-[#292925] mb-2">
                      {t.title}
                    </h4>
                    <p className="font-sans text-[13px] text-[#6B7280] leading-relaxed italic mb-3">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <span className="font-sans font-semibold text-[12px] text-[#FF5523]">
                    {t.author}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Updates & Donors & FAQ */}
      {activeTab === "updates" && (
        <div className="flex flex-col gap-10 animate-in fade-in duration-200">
          {/* Timeline Updates */}
          <div>
            <h3 className="font-serif font-bold text-[22px] text-[#1E1E1E] mb-5">
              Updates on the campaign
            </h3>

            <div className="flex flex-col gap-4 border-l-2 border-[#FF5523]/30 pl-4 sm:pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#FF5523] border-2 border-white" />
                <span className="font-sans text-[12px] text-[#FF5523] font-semibold">
                  September 12, 2026
                </span>
                <h4 className="font-serif font-semibold text-[16px] text-[#1E1E1E] mt-0.5">
                  Phase 1 Foundation Completed!
                </h4>
                <p className="font-sans text-[14px] text-[#6B7280] mt-1 leading-relaxed">
                  Thanks to initial donors, the concrete ground slab has been laid for the first two classrooms before the peak monsoon. Photos verified by local volunteer team.
                </p>
              </div>

              <div className="relative pt-4">
                <div className="absolute -left-[23px] sm:-left-[31px] top-5 w-3.5 h-3.5 rounded-full bg-slate-400 border-2 border-white" />
                <span className="font-sans text-[12px] text-[#6B7280] font-semibold">
                  August 25, 2026
                </span>
                <h4 className="font-serif font-semibold text-[16px] text-[#1E1E1E] mt-0.5">
                  Campaign Officially Launched
                </h4>
                <p className="font-sans text-[14px] text-[#6B7280] mt-1 leading-relaxed">
                  Due diligence documents, land deed verification, and hospital/NGO certifications approved with 0% platform fee guarantee.
                </p>
              </div>
            </div>
          </div>

          {/* Donors Leaderboard */}
          <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <h3 className="font-serif font-bold text-[20px] text-[#1E1E1E]">
                Supporters &amp; Donors
              </h3>

              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-[8px]">
                <button
                  onClick={() => setDonorTab("recent")}
                  className={`px-3 py-1 rounded-[6px] font-sans font-semibold text-[12px] transition-all cursor-pointer ${
                    donorTab === "recent"
                      ? "bg-[#FF5523] text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Recent
                </button>
                <button
                  onClick={() => setDonorTab("generous")}
                  className={`px-3 py-1 rounded-[6px] font-sans font-semibold text-[12px] transition-all cursor-pointer ${
                    donorTab === "generous"
                      ? "bg-[#20C997] text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Most Generous
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {(donorTab === "recent" ? campaign.donorsRecent : campaign.donorsGenerous).map(
                (donor, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-[10px] bg-slate-50/70 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#EBF3F5] text-[#1E293B] font-sans font-bold text-[14px] flex items-center justify-center">
                        {donor.initial}
                      </div>
                      <div>
                        <span className="font-sans font-medium text-[15px] text-[#292925] block">
                          {donor.name}
                        </span>
                        <span className="font-sans text-[12px] text-[#6B7280]">
                          {donor.time}
                        </span>
                      </div>
                    </div>

                    <span className="font-sans font-bold text-[15px] text-[#00AE5B]">
                      {donor.amount}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Accordion FAQs */}
          <div>
            <h3 className="font-serif font-bold text-[20px] text-[#1E1E1E] mb-4">
              Frequently Asked Questions
            </h3>

            <div className="flex flex-col gap-3">
              {campaign.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#E2E8F0] rounded-[12px] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-serif font-medium text-[15px] text-[#292925] flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${
                          isOpen ? "rotate-180 text-[#FF5523]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-4 pb-4 pt-1 font-sans text-[13.5px] text-[#6B7280] leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
