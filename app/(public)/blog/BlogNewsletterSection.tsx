"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function BlogNewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#20C997] py-16 sm:py-20 px-4 sm:px-8">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay">
        <Image
          src="/images/noise_33030cc3.png"
          alt="Texture"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-serif font-semibold text-[28px] sm:text-[34px] md:text-[36px] text-white leading-tight">
          Subscribe to Our Newsletter
        </h2>
        <p className="font-sans font-normal text-[15px] sm:text-[16px] text-white/90 mt-3 max-w-[620px] leading-relaxed">
          Get the latest impact stories, campaign updates, and donation guides delivered straight to your inbox every week.
        </p>

        {/* Subscribe Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[560px] mt-8 flex flex-col sm:flex-row items-center gap-3 bg-white/10 p-1.5 sm:p-2 rounded-[32px] border border-white/25 shadow-sm"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 bg-white text-slate-800 placeholder-slate-400 font-sans text-[15px] px-5 py-3 rounded-[28px] focus:outline-hidden"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all text-white font-sans font-semibold text-[15px] px-7 py-3 rounded-[28px] cursor-pointer shrink-0 shadow-xs"
          >
            {subscribed ? (
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Subscribed
              </span>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>

        {subscribed && (
          <p className="font-sans font-medium text-[13px] text-white mt-3 bg-emerald-700/30 px-4 py-1 rounded-full">
            Thank you for subscribing to ActImpact updates!
          </p>
        )}
      </div>
    </section>
  );
}
