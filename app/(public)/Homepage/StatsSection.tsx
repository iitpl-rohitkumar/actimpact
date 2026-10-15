import React from "react";

export default function StatsSection() {
  const stats = [
    { number: "12+", label: "Team members" },
    { number: "1k+", label: "Client's review" },
    { number: "250+", label: "Completed projects" },
    { number: "2k+", label: "Life impacted" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 sm:pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-y-10">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center text-center px-4 ${
              idx < stats.length - 1
                ? "lg:border-r lg:border-[#454545]/20"
                : ""
            }`}
          >
            <span className="font-serif font-bold text-[36px] sm:text-[41px] text-[#454545] leading-tight">
              {stat.number}
            </span>
            <span className="font-sans font-semibold text-[17px] sm:text-[19px] text-[#454545]/75 mt-1 sm:mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}