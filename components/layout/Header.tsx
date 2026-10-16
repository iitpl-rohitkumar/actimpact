"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Percent, Phone, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const mobileMenuOpen = mobileMenuPath === pathname;

  // const navLinks = [
  //   { name: "Explore Campaigns", href: "/explore" },
  //   { name: "About Us", href: "/about" },
  //   { name: "Monthly Giving", href: "#" },
  //   { name: "Blog", href: "#" },
  //   { name: "Start Fundraising", href: "#" },
  // ];
  const navLinks = [
    { name: "Explore Campaigns", href: "/explore" },
    { name: "About Us", href: "/about" },
    { name: "Monthly Giving", href: "/monthly-giving" },
    { name: "Blog", href: "/blog" },
    { name: "Start Fundraising", href: "/fundraiser-setup" },
  ];


  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/explore") return pathname.startsWith("/explore");
    return pathname === href;
  };

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-40 shadow-xs">
        {/* Top Utility Bar */}
        <div className="w-full bg-[#47AF89] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[38px] flex items-center flex-wrap justify-between text-xs sm:text-[13px]">
            {/* Tax Benefit Info */}
            <div className="flex items-center gap-2 font-sans font-medium">
              <span className="flex items-center justify-center w-4 h-4 rounded-full border border-white text-white shrink-0">
                <Percent className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
              <span className="truncate text-[10px] sm:text-[12px]">
                Tax Benefits (80G) — Instant tax receipt upon donation
              </span>
            </div>

            {/* 24/7 Helpline */}
            <div className="hidden sm:flex items-center shrink-0">
              <a
                href="tel:+917011943124"
                className="bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all rounded-full px-3 py-1 flex items-center gap-2 font-sans font-medium text-[12px] text-white shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 fill-white stroke-none shrink-0" />
                <span>Available 24/7 +91 70119 43124</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav Header */}
        <div className="w-full border-b border-[#E2E8F0] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] sm:h-[76px] flex items-center justify-between">
            {/* Brand Logo with Gradient */}
            <Link href="/" className="flex flex-col group select-none">
              <span
                className="font-sans font-extrabold text-[26px] sm:text-[28px] tracking-tight leading-none bg-clip-text text-transparent transition-opacity group-hover:opacity-90"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FFD04D 0%, #00AE5B 100%)",
                }}
              >
                ActImpact
              </span>
              <span className="font-sans font-medium text-[10px] sm:text-[11px] text-[#475569] mt-0.5 tracking-wider">
                Powered by True Impact
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={
                      active
                        ? "bg-[#FF5523]/10  rounded-full px-4 py-1.5 font-serif font-medium text-[14px] text-[#FF5523] transition-all"
                        : "font-serif font-medium text-[14px] text-[#1E293B] hover:text-[#FF5523] transition-colors"
                    }
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <button className="bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all text-white font-sans font-semibold text-[14px] xl:text-[15px] px-5 xl:px-6 py-2.5 rounded-full shadow-sm cursor-pointer">
                Log in / Sign up
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
              <a
                href="tel:+917011943124"
                className="sm:hidden bg-[#FF5523] active:scale-95 transition-transform rounded-full p-2 text-white shadow-xs"
                title="Call Helpline"
                aria-label="Call Helpline"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setMobileMenuPath(pathname)}
                className="p-2 -mr-2 text-[#1E293B] hover:text-[#FF5523] active:scale-95 transition-all cursor-pointer rounded-lg focus:outline-none"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Slide Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-visibility duration-300 ${
          mobileMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        {/* Backdrop Backdrop Blur */}
        <div
          onClick={() => setMobileMenuPath(null)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Slide-out Drawer Menu */}
        <aside
          className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white shadow-2xl flex flex-col justify-between z-50 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile Navigation"
        >
          {/* Drawer Header */}
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuPath(null)} className="flex flex-col">
              <span
                className="font-sans font-extrabold text-[22px] tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FFD04D 0%, #00AE5B 100%)",
                }}
              >
                ActImpact
              </span>
              <span className="font-sans font-medium text-[9px] text-[#475569]">
                Powered by True Impact
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuPath(null)}
              className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 active:scale-95 transition-all"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="px-4 py-5 flex-1 overflow-y-auto space-y-1.5">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuPath(null)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-serif text-[15px] font-medium transition-all ${
                    active
                      ? "bg-[#FF5523]/10 text-[#FF5523] font-semibold border border-[#FF5523]/25"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#FF5523]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      active ? "text-[#FF5523] translate-x-1" : "text-slate-400"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/60 space-y-3">
            <button className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all text-white font-sans font-semibold text-[15px] py-3 rounded-full shadow-sm cursor-pointer">
              Log in / Sign up
            </button>

            <a
              href="tel:+917011943124"
              className="w-full bg-white border border-slate-200 hover:border-slate-300 active:scale-95 transition-all rounded-full py-2.5 px-4 flex items-center justify-center gap-2 font-sans font-medium text-[12px] text-slate-700 shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#47AF89]" />
              <span>24/7 Helpline: +91 70119 43124</span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}