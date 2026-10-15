"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function UrgentCasesSection() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const urgentCases = [
    {
      id: 1,
      image: "/images/dk-cover-20737_d031b82f.png",
      badge: "Urgent",
      title: "6-Year-Old Arjub Needs an Urgent Heart Surgery to Survive",
      link: "/campaign/meera-heart-surgery",
    },
    {
      id: 2,
      image: "/images/dk-cover-20737_477027c6.png",
      badge: "Matching Donation Active",
      title:
        "Flash Floods Displaced 300+ Families — Help Provide Immediate Relief",
      link: "/campaign/flash-floods-rebuild",
    },
    {
      id: 3,
      image: "/images/dk-cover-20737_607ba18c.png",
      badge: "Urgent",
      title: "Help Rohan Walk Again — Fund His Critical Spinal Surgery",
      link: "/campaign/rohan-spinal-surgery",
    },
  ];

  const handleShare = (id: number, title: string, platform?: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank",
      );
      return;
    }
    if (platform === "whatsapp") {
      window.open(
        `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`,
        "_blank",
      );
      return;
    }
    if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank",
      );
      return;
    }

    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title, url }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="urgent-cases" className="w-full bg-[#FFF8F5] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <span className="font-sans font-medium text-[13px] sm:text-[14px] text-[#FF5523] block tracking-normal">
            Explore campaigns
          </span>
          <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[38px] text-[#1E293B] mt-1.5 leading-tight tracking-tight">
            Urgent Cases Needing Immediate Intervention
          </h2>
        </div>

        {/* 3 Urgent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {urgentCases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[22px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-[260px] sm:h-[280px] bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* Badge Matching the Exact Screenshot */}
                <div className="absolute bottom-4 left-0 bg-white rounded-r-[4px] pl-4 pr-5 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] select-none">
                  <span className="font-sans font-medium text-[16px] text-[#FF5523] tracking-normal leading-tight block">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <h3 className="font-serif font-normal text-[17px] sm:text-[19px] text-[#334155] leading-[1.38] min-h-[52px]">
                  {item.title}
                </h3>

                {/* Actions Row */}
                <div className="mt-5 flex items-center justify-between gap-2">
                  {/* Share Group */}
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[13px] sm:text-[14px] text-[#64748B]">
                      share:
                    </span>
                    <div className="flex items-center gap-2.5 text-[#475569]">
                      <button
                        type="button"
                        onClick={() =>
                          handleShare(item.id, item.title, "facebook")
                        }
                        className="hover:text-[#1877F2] transition-colors cursor-pointer"
                        title="Share on Facebook"
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleShare(item.id, item.title, "whatsapp")
                        }
                        className="hover:text-[#25D366] transition-colors cursor-pointer"
                        title="Share on WhatsApp"
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleShare(item.id, item.title, "linkedin")
                        }
                        className="hover:text-[#0A66C2] transition-colors cursor-pointer"
                        title="Share on LinkedIn"
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-label="LinkedIn"
                          role="img"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <Link
                    href={item.link}
                    className="bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all text-white font-sans font-medium text-[13px] sm:text-[14px] pl-3.5 pr-3 py-1.5 rounded-tl-[14px] rounded-br-[14px] rounded-tr-[2px] rounded-bl-[2px] flex items-center gap-1.5 shadow-xs whitespace-nowrap"
                  >
                    <span>Donate Now</span>
                    <Heart className="w-3.5 h-3.5 fill-white stroke-none shrink-0" />
                  </Link>
                </div>

                {copiedId === item.id && (
                  <p className="text-[11px] text-[#00AE5B] mt-2 text-center font-sans">
                    Link copied to clipboard!
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
