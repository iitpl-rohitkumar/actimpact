"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ChevronDown, Play, Quote } from "lucide-react";
import { CampaignData } from "./campaignData";
import { SelectedSupplyItem } from "./CampaignDonationWidget";

interface CampaignTabsSectionProps {
  campaign: CampaignData;
  onContinueToDonate: (supplies: SelectedSupplyItem[]) => void;
}

export default function CampaignTabsSection({
  campaign,
  onContinueToDonate,
}: CampaignTabsSectionProps) {
  const [activeTab, setActiveTab] = useState<"products" | "story" | "updates">("products");
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    p1: 2, // Default 2 x Rice (25kg)
    p2: 1, // Default 1 x Dal & Pulses (5kg)
  });
  const [donorTab, setDonorTab] = useState<"recent" | "generous">("recent");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleContinueClick = () => {
    const selectedList: SelectedSupplyItem[] = campaign.products
      .filter((p) => (quantities[p.id] || 0) > 0)
      .map((p) => ({
        id: p.id,
        name: p.name,
        qty: quantities[p.id],
        unitPrice: p.price,
      }));

    // If none selected, fallback to the 2 items
    const listToDonate =
      selectedList.length > 0
        ? selectedList
        : [
            { id: "p1", name: "Rice (25kg)", qty: 2, unitPrice: 750 },
            { id: "p2", name: "Dal & Pulses (5kg)", qty: 1, unitPrice: 400 },
          ];

    onContinueToDonate(listToDonate);
  };

  const handleTabClick = (tab: "products" | "story" | "updates") => {
    setActiveTab(tab);
    const element = document.getElementById(`${tab}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Tab Buttons Bar */}
      <div className="w-full bg-[#FFF5F2] border border-[#FF5523]/20 p-1 rounded-[24px] flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleTabClick("products")}
          className={`flex-1 py-2.5 rounded-[20px] font-sans font-medium text-[14px] transition-all cursor-pointer text-center ${
            activeTab === "products"
              ? "bg-[#FF5523] text-white shadow-xs"
              : "text-[#292925] hover:text-[#FF5523]"
          }`}
        >
          Products
        </button>
        <button
          type="button"
          onClick={() => handleTabClick("story")}
          className={`flex-1 py-2.5 rounded-[20px] font-sans font-medium text-[14px] transition-all cursor-pointer text-center ${
            activeTab === "story"
              ? "bg-[#FF5523] text-white shadow-xs"
              : "text-[#292925] hover:text-[#FF5523]"
          }`}
        >
          Story
        </button>
        <button
          type="button"
          onClick={() => handleTabClick("updates")}
          className={`flex-1 py-2.5 rounded-[20px] font-sans font-medium text-[14px] transition-all cursor-pointer text-center ${
            activeTab === "updates"
              ? "bg-[#FF5523] text-white shadow-xs"
              : "text-[#292925] hover:text-[#FF5523]"
          }`}
        >
          Updates
        </button>
      </div>

      {/* 1. PRODUCTS SECTION */}
      <div id="products-section" className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {campaign.products.map((prod) => {
            const qty = quantities[prod.id] || 0;
            return (
              <div
                key={prod.id}
                className={`border rounded-[12px] p-3 flex items-center gap-3 transition-all ${
                  qty > 0
                    ? "border-[#FF5523] bg-[#FFF5F2]"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="relative w-14 h-14 rounded-[8px] overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-semibold text-[13.5px] text-[#1E1E1E] truncate">
                    {prod.name}
                  </h3>
                  <p className="font-sans text-[11.5px] text-[#6B7280]">
                    {prod.needed}
                  </p>
                  <p className="font-sans font-extrabold text-[13.5px] text-[#FF5523] mt-0.5">
                    ₹{prod.price}
                  </p>
                </div>

                {/* Stepper */}
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-[8px] p-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleQtyChange(prod.id, -1)}
                    className="w-5 h-5 rounded-[4px] flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-sans font-bold text-[12.5px] text-[#1E1E1E] w-4 text-center">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQtyChange(prod.id, 1)}
                    className="w-5 h-5 rounded-[4px] flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add to cart Button (Right-aligned orange pill) */}
        <div className="flex justify-end pt-1">
          <button
            type="button"
            onClick={handleContinueClick}
            className="bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all text-white font-sans font-bold text-[14px] px-8 py-2.5 rounded-[12px] shadow-xs cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* 2. KNOW YOUR NGO SECTION */}
      <div id="story-section" className="flex flex-col gap-6 pt-2">
        <div>
          <h2 className="font-serif font-bold text-[20px] text-[#1E1E1E] mb-3">
            KNOW YOUR NGO
          </h2>

          <div className="bg-[#FCFFFD] border border-[#E2E8F0] rounded-[16px] p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <span className="font-sans font-bold text-[17px] text-[#00AE5B] block">
                  By {campaign.ngo.name}
                </span>
                <span className="font-sans text-[12px] text-[#6B7280]">
                  Registered NGO • Active since {campaign.ngo.activeSince}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-emerald-50 text-[#00AE5B] border border-emerald-200 font-sans font-semibold text-[11.5px] px-3 py-1 rounded-[6px]">
                  Verified NGO
                </span>
                <span className="bg-amber-50 text-[#854D0E] border border-amber-200 font-sans font-semibold text-[11.5px] px-3 py-1 rounded-[6px]">
                  80G Tax Benefit
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-slate-100">
              <div>
                <span className="font-sans text-[12px] text-[#6B7280] block">Founder</span>
                <span className="font-sans font-semibold text-[15px] text-[#292925]">
                  {campaign.ngo.founder}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] text-[#6B7280] block">Children Impacted</span>
                <span className="font-sans font-semibold text-[15px] text-[#292925]">
                  {campaign.ngo.impact}
                </span>
              </div>
              <div>
                <span className="font-sans text-[12px] text-[#6B7280] block">Teachers Employed</span>
                <span className="font-sans font-semibold text-[15px] text-[#292925]">
                  {campaign.ngo.teachers}
                </span>
              </div>
            </div>

            <p className="font-sans text-[13.5px] text-[#475569] leading-relaxed pt-3">
              {campaign.storyParagraphs[0]}
            </p>
          </div>
        </div>

        {/* Video / Photo Story Media Banner */}
        <div className="flex flex-col gap-3">
          <div className="relative w-full h-[280px] sm:h-[360px] rounded-[16px] overflow-hidden bg-slate-100 shadow-xs group cursor-pointer">
            <Image
              src="/images/hero-section_4c6bd5d5.png"
              alt={campaign.title}
              fill
              className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 text-[#FF5523] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-[#FF5523] ml-1" />
              </div>
            </div>
          </div>

          <h3 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#1E1E1E] leading-snug">
            {campaign.title}
          </h3>
          <p className="font-sans text-[14px] text-[#475569] leading-relaxed">
            {campaign.storyParagraphs[0]}
          </p>
        </div>

        {/* They Need More Than Tarpaulin Roofs (Split Card) */}
        <div className="bg-[#FFF8F5] border border-[#FF5523]/25 rounded-[16px] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-full sm:w-[240px] h-[170px] rounded-[12px] overflow-hidden bg-slate-100 shrink-0">
            <Image
              src="/images/card_image_cb3d3c9a.png"
              alt="They Need More Than Tarpaulin Roofs"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h4 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E] mb-2">
              They Need More Than Tarpaulin Roofs
            </h4>
            <p className="font-sans text-[13.5px] text-[#475569] leading-relaxed">
              Every monsoon, the makeshift tents collapse under heavy rains, flooding the only learning space these children have. Books get destroyed, classes stop for weeks, and students lose precious momentum. A permanent school building is not a luxury — it is survival.
            </p>
          </div>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {campaign.testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-[14px] p-4 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center gap-1.5 text-[#FF5523] mb-2">
                  <Quote className="w-4 h-4 fill-[#FF5523]/20" />
                  <span className="font-serif font-bold text-[14px] text-[#1E1E1E]">
                    {test.title}
                  </span>
                </div>
                <p className="font-sans text-[12.5px] text-[#6B7280] leading-relaxed italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>
              <span className="font-sans font-semibold text-[12px] text-[#FF5523] mt-3 block">
                {test.author}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. UPDATES & DONORS SECTION */}
      <div id="updates-section" className="flex flex-col gap-8 pt-2">
        <div>
          <h3 className="font-serif font-bold text-[20px] text-[#1E1E1E] mb-3">
            Updates on the campaign
          </h3>

          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <span className="font-serif font-bold text-[18px] text-[#1E1E1E]">
              Donors
            </span>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-[8px]">
              <button
                type="button"
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
                type="button"
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

          <div className="flex flex-col gap-2.5">
            {(donorTab === "recent" ? campaign.donorsRecent : campaign.donorsGenerous).map(
              (donor, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-[10px] bg-slate-50/70 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EBF3F5] text-[#1E293B] font-sans font-bold text-[13px] flex items-center justify-center">
                      {donor.initial}
                    </div>
                    <div>
                      <span className="font-sans font-medium text-[14px] text-[#292925] block">
                        {donor.name}
                      </span>
                      <span className="font-sans text-[11.5px] text-[#6B7280]">
                        {donor.time}
                      </span>
                    </div>
                  </div>

                  <span className="font-sans font-bold text-[14px] text-[#00AE5B]">
                    {donor.amount}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="font-serif font-bold text-[19px] text-[#1E1E1E] mb-3">
            FAQs
          </h3>

          <div className="flex flex-col gap-2.5">
            {campaign.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E2E8F0] rounded-[10px] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-3.5 text-left font-serif font-medium text-[14.5px] text-[#292925] flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180 text-[#FF5523]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-3.5 pb-3.5 pt-1 font-sans text-[13px] text-[#6B7280] leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}