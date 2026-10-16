"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { blogPosts } from "./blogData";

export default function BlogGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Impact Stories",
    "Campaign Updates",
    "Donor Spotlights",
    "Education",
    "Health & Medical",
    "Guides",
    "Community",
  ];

  // Mouse wheel par page scroll block karna aur sirf horizontally move karna
  useEffect(() => {
    const el = categoryScrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        // Page ka upar/niche scroll hona block karta hai
        e.preventDefault();
        // Tabs ko left/right scroll karta hai
        el.scrollLeft += e.deltaY;
      }
    };

    // passive: false zaroori hai taaki e.preventDefault() kaam kar sake
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.tag === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Top Bar: Category Filter Pills + Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
        {/* Category Pills Bar (Horizontal Scroll with Hidden Scrollbar) */}
        <div
          ref={categoryScrollRef}
          className="overflow-x-auto pb-2 -mb-2 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overscroll-contain"
        >
          <div className="flex items-center gap-2.5 min-w-max">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`h-[38px] px-5 rounded-[24px] font-sans font-medium text-[14px] transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#FF5523] text-white shadow-xs"
                      : "bg-white border border-[#121212]/30 text-[#1A1A1A] hover:border-[#FF5523] hover:text-[#FF5523]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full lg:w-[280px] shrink-0">
          <input
            type="text"
            placeholder="Search stories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-[#DDDEE9] rounded-[24px] pl-10 pr-4 py-2 font-sans text-[14px] text-slate-800 focus:outline-none focus:border-[#FF5523] transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-transparent flex flex-col justify-between group"
          >
            <div>
              {/* Card Image */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative block w-full h-[250px] sm:h-[260px] rounded-[24px] overflow-hidden bg-slate-100"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Card Body */}
              <div className="pt-5 flex flex-col gap-2.5">
                {/* Tag & Date Row */}
                <div className="flex items-center justify-between">
                  <span className="text-[#FF5523] font-sans font-bold text-[13px] tracking-wide uppercase">
                    {post.tag}
                  </span>
                  <span className="font-sans font-normal text-[14px] text-[#696A75]">
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-serif font-semibold text-[22px] sm:text-[23px] text-[#1A1A1A] group-hover:text-[#FF5523] transition-colors leading-[1.3] line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="font-sans font-normal text-[15px] text-[#696A75] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Read More Footer Link */}
            <div className="pt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 font-sans font-medium text-[16px] text-[#FF5523] hover:gap-2.5 transition-all"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-[16px] mt-8">
          <p className="font-sans text-[16px] text-slate-500">
            No articles found matching &ldquo;{searchQuery}&rdquo;.
          </p>
        </div>
      )}
    </section>
  );
}