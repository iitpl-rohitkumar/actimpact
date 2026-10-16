"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Search,
  Filter,
  CheckCircle,
  AlertCircle,
  Users,
  Baby,
  Accessibility,
  Utensils,
  CloudRain,
  Venus,
  PawPrint,
  Sparkles,
  TreePine,
  GraduationCap,
  HeartHandshake,
  MoreHorizontal,
} from "lucide-react";
import {
  FacebookIcon,
  WhatsAppIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";

export default function ExploreGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Drag-to-scroll refs with right mouse button support
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 2 || !scrollRef.current) return;
    setIsDragging(true);
    hasDragged.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;

    if (Math.abs(walk) > 4) {
      hasDragged.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasDragged.current) {
      e.preventDefault();
      hasDragged.current = false;
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = (e: MouseEvent) => {
      if (e.button === 2) {
        setIsDragging(false);
      }
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  // Category tabs hover scroll: page scroll ko block karke horizontal scroll karna
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const categories = [
    { name: "All", icon: Filter },
    { name: "Urgent", icon: AlertCircle },
    { name: "Elderly", icon: Users },
    { name: "Children", icon: Baby },
    { name: "Specially-Abled", icon: Accessibility },
    { name: "Hunger", icon: Utensils },
    { name: "Disaster-Relief", icon: CloudRain },
    { name: "Women", icon: Venus },
    { name: "Strays", icon: PawPrint },
    { name: "Faith", icon: Sparkles },
    { name: "Wildlife", icon: TreePine },
    { name: "Gaushala", icon: HeartHandshake },
    { name: "Education", icon: GraduationCap },
    { name: "Transgender", icon: HeartHandshake },
    { name: "Others", icon: MoreHorizontal },
  ];

  const allCampaigns = [
    {
      id: 1,
      image: "/images/img-card-1_fe76b8a2.png",
      badgeRight: "Verified Campaign",
      title: "6-Year-Old Meera Needs an Urgent Heart Surgery to Survive",
      author: "By Suresh Patel",
      hospitalNote: null,
      raised: "₹1,85,000",
      goalPercent: 55,
      donors: "842 Donors",
      category: "Urgent",
      link: "/campaign/meera-heart-surgery",
    },
    {
      id: 2,
      image: "/images/img-card-1_732f7ee0.png",
      badgeRight: "Matching Active",
      title:
        "Flash Floods Left 400+ Families Homeless — Help Rebuild Their Lives",
      author: "By Actsimpact Relief Team",
      hospitalNote: null,
      raised: "₹3,20,000",
      goalPercent: 72,
      donors: "1,156 Donors",
      category: "Disaster-Relief",
      link: "/campaign/flash-floods-rebuild",
    },
    {
      id: 3,
      image: "/images/img-card-1_fc7e2b90.png",
      badgeRight: "Urgent Need",
      title:
        "Help 12-Year-Old Arjun Beat Leukemia — Fund His Bone Marrow Transplant",
      author: "By Kavita Sharma",
      hospitalNote: "Funds Transfer Directly to Hospital",
      raised: "₹8,50,000",
      goalPercent: 68,
      donors: "2,340 Donors",
      category: "Children",
      link: "/campaign/arjun-leukemia",
    },
    {
      id: 4,
      image: "/images/img-card-1_ca370533.png",
      badgeRight: "Education Fund",
      title: "Send 50 Tribal Girls to School — Break the Cycle of Poverty",
      author: "By Shakti Foundation",
      hospitalNote: null,
      raised: "₹4,75,000",
      goalPercent: 82,
      donors: "1,890 Donors",
      category: "Education",
      link: "/campaign/tribal-girls-education",
    },
    {
      id: 5,
      image: "/images/img-card-1_7003ac7a.png",
      badgeRight: "Critical Care",
      title: "Help Rohan Walk Again — Fund His Life-Changing Spinal Surgery",
      author: "By Deepak Verma",
      hospitalNote: null,
      raised: "₹6,20,000",
      goalPercent: 60,
      donors: "1,575 Donors",
      category: "Elderly",
      link: "/campaign/rohan-spinal-surgery",
    },
  ];

  const filteredCampaigns = allCampaigns.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = (id: number, title: string) => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title,
          url: typeof window !== "undefined" ? window.location.href : "",
        })
        .catch(() => {});
    } else {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="font-sans font-normal text-[18px] sm:text-[20px] text-[#FF5523] block">
            Explore Verified Fundraisers Across India
          </span>
          <h2 className="font-serif font-bold text-[28px] sm:text-[34px] lg:text-[36px] text-[#292925] mt-1 leading-tight">
            Every Campaign, Verified. Every Rupee, Tracked.
          </h2>
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-[320px] shrink-0">
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-[#DDDEE9] rounded-[24px] pl-10 pr-4 py-2.5 font-sans text-[14px] text-slate-800 focus:outline-hidden focus:border-[#FF5523] transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Category Tabs Bar (Edge-to-Edge indicator, Hidden scrollbars, Wheel Scroll & Right-Click Drag) */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onContextMenu={handleContextMenu}
        className={`w-full border-b border-[#EBEBEF] mb-10 overflow-x-auto select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overscroll-contain ${
          isDragging ? "cursor-grabbing" : "cursor-default"
        }`}
      >
        <div className="flex items-end min-w-max">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;

            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => {
                  if (!hasDragged.current) {
                    setActiveCategory(cat.name);
                  }
                }}
                className={`relative flex flex-col items-center justify-center pt-3 pb-3 px-6 sm:px-7 whitespace-nowrap transition-colors select-none ${
                  isActive
                    ? "text-[#FF5523]"
                    : "text-[#4A4A4A] hover:text-[#1F1F1F]"
                }`}
              >
                {/* Icon */}
                <Icon className="w-6 h-6 mb-2 shrink-0 stroke-[1.6]" />

                {/* Label */}
                <span className="font-sans font-medium text-[14px] leading-tight">
                  {cat.name}
                </span>

                {/* Active bottom border directly aligning with baseline */}
                {isActive && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-[#FF5523] z-10" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Campaign Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {filteredCampaigns.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-[22px] border border-[#E5E9EB] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* Card Image Container with Badges */}
            <div className="relative w-full h-[225px] overflow-hidden group">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Top Right: Tax benefits badge flush with top/right corners */}
              <div className="absolute top-0 right-0 bg-[#00A859] rounded-bl-[14px] px-3.5 py-1.5 shadow-sm">
                <span className="font-sans font-medium text-[12px] text-white">
                  Tax benefits
                </span>
              </div>

              {/* Bottom Left: Verified Campaign badge flush with left edge */}
              <div className="absolute bottom-6 left-0 bg-white rounded-r-[6px] pl-3.5 pr-4 py-1.5 shadow-sm">
                <span className="font-sans font-semibold text-[13px] text-[#FF5523]">
                  {card.badgeRight || "Verified Campaign"}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="pt-4 px-4 pb-4 flex flex-col justify-between flex-1">
              {/* Title, Author & Hospital Note */}
              <div>
                <h3 className="font-serif font-semibold text-[17px] text-[#1D3557] leading-[1.38] line-clamp-2 min-h-[46px]">
                  {card.title}
                </h3>
                <p className="font-sans text-[13px] text-[#64748B] mt-2">
                  By {card.author.replace(/^By\s+/i, "")}
                </p>

                {card.hospitalNote && (
                  <div className="flex items-center gap-1.5 text-[#00AE5B] mt-2">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-sans font-semibold text-[11px]">
                      {card.hospitalNote}
                    </span>
                  </div>
                )}
              </div>

              {/* Progress Container */}
              <div className="mt-4">
                <div className="w-full h-[7px] bg-[#E2E8F0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00C48C] rounded-full transition-all duration-500"
                    style={{ width: `${card.goalPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between mt-2.5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-sans font-bold text-[18px] text-[#1E293B]">
                      {card.raised}
                    </span>
                    <span className="font-sans font-normal text-[13px] text-[#94A3B8]">
                      Raised
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#FF5523]">
                    <Heart className="w-3.5 h-3.5 fill-[#FF5523] stroke-none" />
                    <span className="font-sans font-bold text-[14px]">
                      {card.donors.includes("Donors")
                        ? card.donors
                        : `${card.donors} Donors`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Actions: Share & Donate Now */}
              <div className="mt-4 pt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-sans text-[16px] text-[#475569] lowercase font-normal">
                    share:
                  </span>
                  <div className="flex items-center gap-2 text-[#475569]">
                    <button
                      type="button"
                      onClick={() => handleShare(card.id, card.title)}
                      className="w-5 h-5 flex items-center justify-center hover:text-[#1877F2] transition-colors cursor-pointer"
                      title="Share on Facebook"
                    >
                      <FacebookIcon className="w-4 h-4 fill-current" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShare(card.id, card.title)}
                      className="w-5 h-5 flex items-center justify-center hover:text-[#25D366] transition-colors cursor-pointer"
                      title="Share on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShare(card.id, card.title)}
                      className="w-5 h-5 flex items-center justify-center hover:text-[#0A66C2] transition-colors cursor-pointer"
                      title="Share on LinkedIn"
                    >
                      <LinkedInIcon className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Asymmetric Leaf/Pill Donate Button */}
                <Link
                  href={card.link}
                  className="bg-[#FF5523] hover:bg-[#E5481B] active:scale-95 transition-all text-white font-sans font-semibold text-[14px] px-5 py-2.5 rounded-tl-[16px] rounded-br-[16px] rounded-tr-[2px] rounded-bl-[2px] flex items-center gap-2 shadow-sm"
                >
                  <span>Donate Now</span>
                  <Heart className="w-4 h-4 fill-white stroke-none shrink-0" />
                </Link>
              </div>

              {copiedId === card.id && (
                <p className="text-[11px] text-[#00AE5B] mt-2 text-center font-sans font-medium">
                  Link copied to clipboard!
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredCampaigns.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-[16px] mt-8">
          <p className="font-sans text-[16px] text-slate-500">
            No campaigns found matching &ldquo;{searchQuery}&rdquo;.
          </p>
        </div>
      )}
    </section>
  );
}