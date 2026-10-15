"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { blogPosts } from "./blogData";

export default function BlogGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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
        {/* Category Pills Bar (Horizontal Scrollable) */}
        <div className="overflow-x-auto pb-2 -mb-2 no-scrollbar">
          <div className="flex items-center gap-2.5 min-w-max">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
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
            className="w-full bg-slate-50 border border-[#DDDEE9] rounded-[24px] pl-10 pr-4 py-2 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523] transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Articles Grid (2 Rows of 3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-[16px] overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200 border border-slate-100 shadow-xs hover:shadow-md"
          >
            <div>
              {/* Card Image */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative block w-full h-[240px] bg-slate-100 overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col gap-3">
                {/* Tag & Date Row */}
                <div className="flex items-center gap-3">
                  <span className="bg-[#FDF3EC] text-[#FF5523] font-sans font-semibold text-[12px] px-2.5 py-0.5 rounded-[8px]">
                    {post.tag}
                  </span>
                  <span className="font-sans font-normal text-[13px] text-[#696A75]">
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-serif font-medium text-[19px] sm:text-[20px] text-[#1A1A1A] group-hover:text-[#FF5523] transition-colors leading-[1.35] line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="font-sans font-normal text-[14px] text-[#696A75] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Read More Footer Link */}
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-[#FF5523] hover:translate-x-1 transition-transform group-hover:underline"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
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
