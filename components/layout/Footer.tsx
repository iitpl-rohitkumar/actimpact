import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Final Pre-Footer Call to Action Banner */}
      <section className="relative w-full overflow-hidden bg-[#132A24] py-20 px-4 sm:px-8">
        {/* Background Image with Dark Tint Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/final-cta-section_910387cc.png"
            alt="ActImpact CTA background"
            fill
            className="object-cover object-center "
            priority={false}
          />
          <div className="absolute inset-0 bg-[#00000080]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center">
          <h2 className="font-serif font-semibold text-[28px] sm:text-[34px] md:text-[36px] text-white leading-tight">
            No One Should Lose a Loved One Because They Couldn&apos;t Afford Treatment.
          </h2>
          <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#EBF3F5] mt-4 max-w-[680px]">
            Whether you need funds or want to become a lifeline — take the first step today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/fundraiser-setup"
              className="w-full sm:w-auto bg-[#FF5523] hover:bg-[#e04515] active:scale-95 transition-all text-white font-sans font-semibold text-[15px] px-7 py-3.5 rounded-[8px] shadow-md text-center"
            >
              Start a Free Campaign
            </Link>
            <Link
              href="/monthly-giving"
              className="w-full sm:w-auto border-[1.5px] border-[#20C997] hover:bg-[#20C997]/15 active:scale-95 transition-all text-[#20C997] font-sans font-semibold text-[15px] px-7 py-3.5 rounded-[8px] text-center"
            >
              Donate Monthly
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer Section with Peach Background */}
      <div className="w-full bg-[#FF552324] text-[#1E293B]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-16 pb-12">
          {/* Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#E2E8F0]">
            {/* Col 1: Brand Info */}
            <div className="flex flex-col">
              <Link href="/" className="inline-block group mb-4">
              <span
                className="font-sans font-extrabold text-[26px] sm:text-[28px] tracking-tight leading-none bg-clip-text text-transparent transition-opacity group-hover:opacity-90"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FFD04D 0%, #00AE5B 100%)",
                }}
              >
                ActImpact
              </span>
              <p className="font-sans font-medium text-[10px] sm:text-[11px] text-[#475569] mt-0.5 tracking-wider">
                Powered by True Impact
              </p>
              </Link>
              
              <p className="font-sans font-normal text-[14px] text-[#1E293B] leading-relaxed">
                Actsimpact is a crowdfunding platform that empowers individuals, families, and communities to raise funds for medical emergencies, education, and social causes — with full transparency and fast disbursements.
              </p>
            </div>

            {/* Col 2: Fundraise For */}
            <div>
              <h3 className="font-sans font-bold text-[16px] text-[#1E293B] mb-4">
                Fundraise For
              </h3>
              <ul className="space-y-2.5 font-sans text-[14px] text-[#1E293B]">
                <li>
                  <Link href="/explore?category=medical" className="hover:text-[#FF5523] transition-colors">
                    Medical
                  </Link>
                </li>
                <li>
                  <Link href="/explore?category=cancer" className="hover:text-[#FF5523] transition-colors">
                    Cancer
                  </Link>
                </li>
                <li>
                  <Link href="/explore?category=transplants" className="hover:text-[#FF5523] transition-colors">
                    Transplants
                  </Link>
                </li>
                <li>
                  <Link href="/explore?category=child-health" className="hover:text-[#FF5523] transition-colors">
                    Child Health
                  </Link>
                </li>
                <li>
                  <Link href="/explore?category=education" className="hover:text-[#FF5523] transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/explore?category=animals" className="hover:text-[#FF5523] transition-colors">
                    Animal Welfare
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Donors & Partners */}
            <div>
              <h3 className="font-sans font-bold text-[16px] text-[#1E293B] mb-4">
                Donors & Partners
              </h3>
              <ul className="space-y-2.5 font-sans text-[14px] text-[#1E293B]">
                <li>
                  <Link href="/impact-circle" className="hover:text-[#FF5523] transition-colors">
                    Impact Circle
                  </Link>
                </li>
                <li>
                  <Link href="/tax-benefits" className="hover:text-[#FF5523] transition-colors">
                    80G Tax Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/hospitals" className="hover:text-[#FF5523] transition-colors">
                    Hospital Network
                  </Link>
                </li>
                <li>
                  <Link href="/csr" className="hover:text-[#FF5523] transition-colors">
                    CSR Partnerships
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Legal & Contact */}
            <div>
              <h3 className="font-sans font-bold text-[16px] text-[#1E293B] mb-4">
                Legal & Contact
              </h3>
              <p className="font-sans text-[14px] text-[#1E293B] leading-relaxed mb-3">
                True Impact Foundation, 402, Trade Tower, Bandra East, Mumbai — 400051
              </p>
              <a
                href="mailto:info@actsimpact.com"
                className="font-sans text-[14px] text-[#1E293B] font-semibold hover:text-[#FF5523] transition-colors inline-block"
              >
                info@actsimpact.com
              </a>
            </div>
          </div>

          {/* Footer Bottom Row */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[#1E293B] text-[14px] gap-4">
            <p className="font-sans font-normal">
              © 2026 Actsimpact Pvt. Ltd. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-3 font-sans font-semibold text-[13px] sm:text-[14px] text-[#1E293B]/90">
              <span className="flex items-center gap-1.5 text-[#00AE5B]">
                <ShieldCheck className="w-4 h-4 text-[#00AE5B]" />
                Secure 256-Bit SSL
              </span>
              <span className="text-[#E2E8F0]">|</span>
              <span className="text-slate-600 font-medium">
                Encrypted Transactions. Actsimpact Pvt. Ltd.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
