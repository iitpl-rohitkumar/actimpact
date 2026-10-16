"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Check,
  Heart,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Campaigns" },
  { id: "cancer", label: "Cancer Care & Chemo" },
  { id: "transplant", label: "Organ Transplants" },
  { id: "child-care", label: "Child Health & NICU" },
  { id: "emergency", label: "Accident & Trauma Relief" },
  { id: "rare-diseases", label: "Rare Disease Support" },
];

export default function MonthlyHeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown menu when clicking anywhere outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.append("q", searchQuery.trim());
    if (selectedCategory !== "all") params.append("category", selectedCategory);
    setIsOpen(false);
    router.push(`/explore?${params.toString()}`);
  };

  const handleSelectCategory = (catId: string, label: string) => {
    setSelectedCategory(catId);
    setSearchQuery(catId === "all" ? "" : label);
    setIsOpen(false);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
      <div className="relative w-full min-h-[440px] sm:min-h-[460px]  rounded-[20px]   flex items-center p-6 sm:p-12 lg:p-16 justify-center">
        {/* Background Image */}
        <Image
          src="/images/hero-section_9f880899.png"
          alt="Monthly Campaign — ActImpact"
          fill
          priority
          className="object-cover object-center  rounded-[20px]  "
        />

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-[#00000066]  rounded-[20px]  " />

        {/* Content Container */}
        <div className="relative z-10 max-w-[806px] text-white text-center flex flex-col justify-center items-center">
          <span className="font-sans font-bold text-[14px] sm:text-[16px] text-[#FF5523] uppercase tracking-wider block">
            Monthly campaign
          </span>

          <h1 className="font-serif font-bold text-[32px] sm:text-[40px] lg:text-[42px] text-white mt-2 leading-[1.18]">
            Impact You Can Measure, Every Single Month.
          </h1>

          <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#EBF3F5] mt-4 leading-relaxed max-w-[760px]">
            Transform lives with the power of recurring giving. Through Act Impact&apos;s Systematic Social Plan (SSP), your monthly contribution provides consistent food, shelter, and medical relief to those in desperate need.
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-[620px]">
            {/* Search Input Container */}
            <div ref={searchWrapperRef} className="relative w-full sm:flex-1">
              <form
                onSubmit={handleSearchSubmit}
                className={`group flex items-center bg-[#F1F1F13D] hover:bg-white/25 focus-within:bg-white/30 border rounded-full px-5 py-3 transition-all duration-200 ${
                  isOpen ? "border-white bg-white/30 ring-2 ring-white/30" : "border-[#FFFFFF3D]"
                }`}
              >
                <Search className="w-5 h-5 text-white/90 shrink-0 mr-3 select-none transition-transform group-focus-within:scale-110" />

                <input
                  type="text"
                  value={searchQuery}
                  onFocus={() => setIsOpen(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!isOpen) setIsOpen(true);
                  }}
                  placeholder="Browse Campaign"
                  className="w-full bg-transparent font-sans text-[15px] sm:text-[16px] text-white placeholder-white/80 focus:outline-none"
                />

                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="text-white/80 hover:text-white shrink-0 ml-2 focus:outline-none"
                  aria-label="Toggle category list"
                >
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  )}
                </button>
              </form>

              {/* Floating Dropdown Suggestion Menu on Focus */}
              {isOpen && (
                <div className="absolute left-0 right-0 top-full mt-2.5 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-left">
                  <div className="px-4 py-1.5 text-[11px] font-sans font-semibold tracking-wider text-slate-400 uppercase">
                    Select a Cause / Category
                  </div>
                  <div className="max-h-[220px] overflow-y-auto">
                    {CATEGORIES.map((cat) => {
                      const isSelected = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onMouseDown={(e) => {
                            e.preventDefault();
                            handleSelectCategory(cat.id, cat.label);
                          }}
                          className={`w-full px-4 py-2.5 text-[14px] font-sans flex items-center justify-between text-left transition-colors cursor-pointer group ${
                            isSelected
                              ? "text-[#FF5523] font-semibold bg-[#FF5523]/5"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <ChevronRight
                              className={`w-3.5 h-3.5 transition-transform duration-150 ${
                                isSelected
                                  ? "text-[#FF5523] translate-x-0.5"
                                  : "text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-600"
                              }`}
                            />
                            <span>{cat.label}</span>
                          </div>
                          {isSelected && (
                            <Check className="w-4 h-4 text-[#FF5523]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Donate CTA Button */}
            <Link
              href="#plans"
              className="w-full sm:w-auto bg-[#FF5523] hover:bg-[#e04515]  text-white font-serif font-medium text-[16px] px-7 py-2.5 rounded-[24px] flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 whitespace-nowrap group"
            >
              <span>Donate</span>
              <Heart className="w-4 h-4 fill-white stroke-none" />
             
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}