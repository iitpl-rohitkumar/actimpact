"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Share2, Heart, ShieldCheck, Check } from "lucide-react";
import { FacebookIcon, WhatsAppIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { BlogPost } from "../blogData";

interface BlogDetailsContentProps {
  post: BlogPost;
}

export default function BlogDetailsContent({ post }: BlogDetailsContentProps) {
  const [activeToc, setActiveToc] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: post.title,
        url: typeof window !== "undefined" ? window.location.href : "",
      }).catch(() => {});
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Article Body (8 cols on lg) */}
        <article className="lg:col-span-8 flex flex-col gap-8">
          {/* Article Introduction */}
          <div className="font-sans font-normal text-[17px] sm:text-[18px] text-[#121212]/85 leading-[1.8] bg-slate-50/60 p-6 rounded-[16px] border border-slate-100">
            {post.content.intro}
          </div>

          {/* Article Sections */}
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h2 className="font-serif font-normal text-[26px] sm:text-[30px] lg:text-[32px] text-[#121212] leading-tight mt-3">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="font-sans font-normal text-[16px] sm:text-[18px] text-[#121212]/80 leading-[1.8]"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* Pull Quote Box */}
          <div className="border-l-4 border-[#FF5523] pl-6 py-4 my-4 bg-[#FF5523]/5 rounded-r-[12px]">
            <p className="font-serif italic text-[18px] sm:text-[20px] text-[#1E293B] leading-relaxed">
              &ldquo;No parent should ever have to watch their child be denied knowledge or healthcare simply because their village was born without digital infrastructure.&rdquo;
            </p>
            <span className="block font-sans font-semibold text-[13px] text-[#FF5523] mt-2 tracking-wide uppercase">
              — Kameshwar Yadav, Community Founder
            </span>
          </div>

          {/* Social Share & Action Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-sans font-medium text-[15px] text-[#454545] flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-[#FF5523]" />
                Share this story:
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleShare}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#FF5523]/10 hover:text-[#FF5523] transition-colors cursor-pointer"
                  title="Share on Facebook"
                >
                  <FacebookIcon className="w-4 h-4 fill-current" />
                </button>
                <button
                  onClick={handleShare}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#20C997]/10 hover:text-[#20C997] transition-colors cursor-pointer"
                  title="Share on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </button>
                <button
                  onClick={handleShare}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#0069FF]/10 hover:text-[#0069FF] transition-colors cursor-pointer"
                  title="Share on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 fill-current" />
                </button>
              </div>
              {copied && (
                <span className="font-sans font-medium text-[12px] text-[#00AE5B] ml-2">
                  Link copied!
                </span>
              )}
            </div>

            <Link
              href="/explore"
              className="bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all text-white font-sans font-semibold text-[14px] px-6 py-2.5 rounded-[24px] flex items-center justify-center gap-1.5 shadow-xs w-fit"
            >
              <span>Support Campaigns</span>
              <Heart className="w-3.5 h-3.5 fill-white stroke-none" />
            </Link>
          </div>
        </article>

        {/* Right Column: Sidebar Table of Contents / Guide (4 cols on lg) */}
        <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
          {/* Table of Contents Card (Frame 51 in Figma) */}
          <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-xs">
            <h3 className="font-serif font-semibold text-[19px] sm:text-[20px] text-[#454545] pb-3 border-b border-slate-100 mb-4">
              Living with Gaucher
            </h3>

            <div className="flex flex-col gap-2">
              {post.toc.map((item, idx) => {
                const isActive = activeToc === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveToc(idx)}
                    className={`w-full text-left p-3 rounded-[8px] transition-all cursor-pointer font-sans text-[15px] ${
                      isActive
                        ? "border border-[#FF5523] text-[#FF5523] font-bold bg-[#FF5523]/5"
                        : "text-[#454545] font-normal hover:bg-slate-50"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Impact Guarantee Widget */}
          <div className="bg-[#E4F8F2]/60 border border-[#20C997]/40 rounded-[16px] p-6">
            <div className="flex items-center gap-2.5 text-[#00AE5B] mb-2.5">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span className="font-sans font-bold text-[14px] uppercase tracking-wide">
                100% Verified Impact
              </span>
            </div>
            <p className="font-sans font-normal text-[14px] text-[#475569] leading-relaxed mb-4">
              Every story and campaign on ActImpact undergoes clinical cross-checks and direct vendor audits before publication.
            </p>
            <div className="flex flex-col gap-2 font-sans text-[13px] text-[#1E293B]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#00AE5B]" />
                <span>0% Platform Fee on beneficiary funds</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#00AE5B]" />
                <span>Instant 80G Tax Exemption Receipts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#00AE5B]" />
                <span>Direct wire transfers to hospital accounts</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
