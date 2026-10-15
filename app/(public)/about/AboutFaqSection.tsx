"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AboutFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does ActImpact verify whether a patient's story is genuine?",
      answer:
        "We have a zero-tolerance policy for misleading campaigns. Before any campaign goes live, our trust and safety desk audits medical bills, hospital admission letters, and doctor estimates. In critical cases, our team directly validates the treatment plan with hospital social workers.",
    },
    {
      question: "Does ActImpact charge platform fees from patients?",
      answer:
        "No. ActImpact operates on a 0% Platform Fee structure for beneficiaries. We do not take a cut from the patient's raised medical fund. Our technology and operational costs are supported through optional, voluntary contributions left by donors at checkout.",
    },
    {
      question: "How do I receive my 80G tax deduction receipt?",
      answer:
        "Instantly. Once your contribution is completed, an 80G claim trigger appears on your screen. Simply provide your PAN number and address, and your official tax exemption receipt is generated and emailed to you within 24 hours.",
    },
    {
      question: "Can I support campaigns from outside India?",
      answer:
        "Yes. We accept international credit and debit cards across multiple currencies (USD, GBP, EUR, AED, SGD, and AUD) following statutory cross-border compliance standards.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FFE6DE]/50 py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif font-semibold text-[28px] sm:text-[34px] lg:text-[36px] text-[#093545] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-4 max-w-[1280px] mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#FFE6DE]/40 border border-[#FF5523] rounded-[12px] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-[16px] sm:text-[17px] text-[#093545] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#FF5523]" : "text-[#093545]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 animate-in fade-in-50 duration-150">
                    <p className="font-sans font-normal text-[14px] sm:text-[15px] text-[#475569] leading-relaxed border-t border-[#FF5523]/20 pt-3.5">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
