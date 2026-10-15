"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState("Donors");
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarvesh Kumar",
      role: "Sales Manager",
      avatar: "/images/sarvesh_kumar_683d88e1.png",
      badge: "Contributed 3 Times",
      quote:
        "I’m an animal lover, and with Donatekart I can do exactly what I’ve always wanted to do - help voiceless souls in need. They have several animal campaigns and the impact is very visible.",
    },
    {
      id: 2,
      name: "Pooja Jain",
      role: "Homemaker",
      avatar: "/images/pooja_jain_0a5b9f0e.png",
      badge: "Contributed 7 Times",
      quote:
        "I’m a single mother. I know the pain of children without their parents. Through Donatekart, we can come together and contribute to helping their cause. Nothing is more significant than a Mother's role in a child's life.",
    },
    {
      id: 3,
      name: "Maheswara Rao",
      role: "Executive officer",
      avatar: "/images/maheswara_rao_2b9b5399.png",
      badge: "Contributed 8 Times",
      quote:
        "I just want to be able to help others, and Donatekart allows me to do that. While donating here, I feel satisfied knowing that I've done whatever little I can to make a difference.",
    },
    {
      id: 4,
      name: "Praveen Raghunath Khetre",
      role: "Sales Professional",
      avatar: "/images/praveen_raghunath_khetre_379d3b4a.png",
      badge: "Contributed 12 Times",
      quote:
        "I chose to donate on Donatekart because of Mr. Girish Kulkarni. His work for those with HIV/AIDS has inspired me. It’s so great to see people like him here - just shows how trustworthy they are.",
    },
    {
      id: 5,
      name: "Mukti Singh",
      role: "Student",
      avatar: "/images/mukti_singh_1f95a40f.png",
      badge: "Contributed 5 Times",
      quote:
        "When I help others, it brings me so much joy. I’m so grateful to Donatekart for giving us a platform to help those in need and giving them a chance to live a better life.",
    },
    {
      id: 6,
      name: "Shashwat Gupta",
      role: "IT Professional",
      avatar: "/images/shashwat_gupta_5c959b58.png",
      badge: "Contributed 9 Times",
      quote:
        "What I love about Donatekart is that they provide a detailed description of the cause and also give us updates about how the products have been used. This makes me want to donate again.",
    },
  ];

  const maxIndex = testimonials.length - 3; // 3 visible at once on desktop

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-[#FFF1ED]/80 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Title and Audience Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-sans font-normal text-[18px] sm:text-[20px] text-[#FF5523] block">
              Love from our community
            </span>
            <h2 className="font-serif font-bold text-[30px] sm:text-[36px] text-[#292925] mt-1 leading-tight">
              Testimonials
            </h2>
          </div>

          {/* Donors / NGOs / Celebrities Tabs */}
          <div className="flex items-center gap-3">
            {["Donors", "NGOs", "Celebrities"].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-[8px] font-sans text-[16px] sm:text-[18px] transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#FF5523] text-white font-semibold shadow-xs"
                      : "bg-transparent text-[#FF5523] font-medium hover:bg-[#FF5523]/10"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Testimonials Slider Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[16px] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between min-h-[350px] border border-slate-100"
                >
                  <div>
                    {/* Quote Icon */}
                    <div className="mb-3 text-[#292925]/70">
                      <Quote className="w-6 h-6 rotate-180 fill-current" />
                    </div>

                    {/* Contributed Tag */}
                    <div className="inline-block bg-[#0069FF]/12 rounded-[4px] px-3 py-1 mb-4">
                      <span className="font-sans font-medium text-[13px] sm:text-[14px] text-[#0069FF]">
                        {item.badge}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="font-sans font-normal text-[14px] sm:text-[15px] text-[#292925] leading-relaxed line-clamp-5">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author Row */}
                  <div className="pt-4 border-t border-[#DDDEE9] flex items-center gap-3.5 mt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-[16px] text-[#292925] leading-snug">
                        {item.name}
                      </h4>
                      <p className="font-sans font-medium text-[13px] text-[#292925]/70 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-[#DDDEE9] flex items-center justify-center text-[#292925] hover:bg-[#FF5523] hover:text-white hover:border-[#FF5523] transition-all shadow-xs cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? "w-6 bg-[#FF5523]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-[#DDDEE9] flex items-center justify-center text-[#292925] hover:bg-[#FF5523] hover:text-white hover:border-[#FF5523] transition-all shadow-xs cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
