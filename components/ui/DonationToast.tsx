"use client";

import React, { useState, useEffect } from "react";
import { Heart, X } from "lucide-react";

export default function DonationToast() {
  const [visible, setVisible] = useState(false);
  const [toastIndex, setToastIndex] = useState(0);

  const toasts = [
    { name: "Rajesh K.", city: "Mumbai", amount: "₹2,000", cause: "School Construction", time: "Just now" },
    { name: "Neha A.", city: "Delhi", amount: "₹5,000", cause: "Urgent Heart Surgery", time: "2m ago" },
    { name: "Suresh P.", city: "Bengaluru", amount: "₹1,500", cause: "Tribal Children Books", time: "4m ago" },
    { name: "Ananya D.", city: "Pune", amount: "₹3,500", cause: "Medical Recovery Fund", time: "6m ago" },
  ];

  useEffect(() => {
    // Show first toast after 3 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Cycle toasts every 12 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setToastIndex((prev) => (prev + 1) % toasts.length);
        setVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [toasts.length]);

  if (!visible) return null;

  const current = toasts[toastIndex];

  return (
    <aside
      aria-label="Recent donation notification"
      className="fixed bottom-5 left-5 z-50 max-w-[340px] bg-white border border-[#E2E8F0] rounded-[16px] p-3.5 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <div className="w-10 h-10 rounded-full bg-[#FFF1ED] text-[#FF5523] flex items-center justify-center shrink-0">
        <Heart className="w-5 h-5 fill-[#FF5523]" />
      </div>

      <div className="flex-1 min-w-0 font-sans">
        <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
          <span>Verified Contribution</span>
          <span>{current.time}</span>
        </div>
        <p className="text-[13px] text-[#1E293B] font-semibold truncate mt-0.5">
          {current.name} from {current.city}
        </p>
        <p className="text-[12px] text-[#00AE5B] font-bold">
          Donated {current.amount} for {current.cause}
        </p>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer shrink-0"
        aria-label="Dismiss toast"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
