import React from "react";
import { Check } from "lucide-react";

interface FundraiserHeaderProps {
  currentStep: number;
  setStep: (s: number) => void;
}

export default function FundraiserHeader({ currentStep, setStep }: FundraiserHeaderProps) {
  const steps = [
    { num: 1, title: "Purpose & Mobile" },
    { num: 2, title: "Target & Details" },
    { num: 3, title: "Upload Proof" },
  ];

  return (
    <div className="w-full bg-slate-50 border-b border-slate-200 py-6 px-4 sm:px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="font-sans font-bold text-[13px] text-[#FF5523] uppercase tracking-wider block">
            Start a Fundraiser • 0% Platform Fee
          </span>
          <h1 className="font-serif font-bold text-[24px] sm:text-[28px] text-[#1E1E1E] mt-0.5">
            Create Your Campaign in 3 Simple Steps
          </h1>
        </div>

        {/* Responsive Steps Stepper */}
        <div className="flex items-center gap-3 sm:gap-6">
          {steps.map((s, idx) => {
            const isCompleted = currentStep > s.num;
            const isCurrent = currentStep === s.num;

            return (
              <div key={s.num} className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    if (s.num <= currentStep) setStep(s.num);
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold text-[13px] transition-all cursor-pointer ${
                    isCompleted
                      ? "bg-[#00AE5B] text-white"
                      : isCurrent
                      ? "bg-[#FF5523] text-white shadow-xs"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : s.num}
                </button>

                <div className="hidden sm:flex flex-col text-left">
                  <span className="font-sans text-[11px] text-slate-500 uppercase tracking-wider">
                    Step {s.num}
                  </span>
                  <span
                    className={`font-sans font-semibold text-[13px] ${
                      isCurrent ? "text-[#1E1E1E]" : "text-slate-500"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden sm:block w-8 h-[2px] bg-slate-200 ml-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
