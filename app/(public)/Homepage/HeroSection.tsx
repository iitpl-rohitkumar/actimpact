"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Check } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Campaigns" },
  { id: "cancer", label: "Cancer Care & Chemo" },
  { id: "transplant", label: "Organ Transplants" },
  { id: "child-care", label: "Child Health & NICU" },
  { id: "emergency", label: "Accident & Trauma Relief" },
  { id: "rare-diseases", label: "Rare Disease Support" },
];

export default function HeroSection() {
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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-12">
      {/* Outer Banner Box */}
      <div className="relative w-full min-h-[460px] sm:min-h-[500px] flex flex-col items-center justify-center p-6 sm:p-10 lg:p-14 text-center">
        
        {/* Background Layer with Rounded Clipping */}
        <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden pointer-events-none shadow-xl">
          <Image
            src="/images/hero-section_4e542e1f.png"
            alt="Emergency Medical Relief — ActImpact"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle Dark Vignette / Overlay */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/40 backdrop-brightness-95" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-20 max-w-[840px] mx-auto flex flex-col items-center">
          {/* Main Title */}
          <h1 className="font-serif font-bold text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] text-white tracking-tight">
            When Life Hangs in the Balance, Every Second and Every Rupee Counts.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF] mt-4 max-w-[690px] leading-relaxed">
            Raise funds for critical medical treatments, organ transplants,
            child healthcare, and emergency relief with 0% Platform Fee.
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-[620px]">
            
            {/* Search Input Container */}
            <div ref={searchWrapperRef} className="relative w-full sm:flex-1">
              <form
                onSubmit={handleSearchSubmit}
                className={`group flex items-center bg-[#F1F1F13D] hover:bg-white/25 focus-within:bg-white/30  border rounded-full px-5 py-3 transition-all duration-200  ${
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
                            e.preventDefault(); // Prevents input from losing focus before click fires
                            handleSelectCategory(cat.id, cat.label);
                          }}
                          className={`w-full px-4 py-2.5 text-[14px] font-sans flex items-center justify-between text-left transition-colors cursor-pointer ${
                            isSelected
                              ? "text-[#FF5523] font-semibold bg-[#FF5523]/5"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span>{cat.label}</span>
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
              href="#urgent-cases"
              className="w-full sm:w-auto bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all duration-150 rounded-full px-7 py-3 text-center font-serif font-medium text-[15px] sm:text-[16px] text-white whitespace-nowrap"
            >
              Donate to Urgent Cases
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}