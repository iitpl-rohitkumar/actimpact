"use client";

import React, { useState } from "react";
import { Upload, ArrowRight, CheckCircle2 } from "lucide-react";

interface Step3Props {
  docType: string;
  setDocType: (v: string) => void;
  files: string[];
  setFiles: React.Dispatch<React.SetStateAction<string[]>>;
  onBack: () => void;
  onSubmit: () => void;
}

export default function FundraiserStep3({
  docType,
  setDocType,
  files,
  setFiles,
  onSubmit,
}: Step3Props) {
  const [consent, setConsent] = useState(true);
  const [uploading, setUploading] = useState(false);

  const docTypes = ["Medical Bill", "Estimation Letter", "Reports"];

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploading(true);
      const name = e.target.files[0].name;
      setTimeout(() => {
        setFiles((prev) => [...prev, name]);
        setUploading(false);
      }, 600);
    }
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-xs flex flex-col gap-6">
      <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E]">
        Upload Document
      </h2>

      {/* Select Document Type */}
      <div className="flex flex-col gap-2">
        <label className="font-sans font-semibold text-[13px] text-[#292925]">
          Select Document type:
        </label>
        <div className="flex flex-wrap items-center gap-2.5">
          {docTypes.map((type) => {
            const isSelected = docType === type;
            return (
              <label
                key={type}
                className={`border rounded-[6px] px-3.5 py-1.5 flex items-center gap-2 text-[13px] font-sans transition-all cursor-pointer select-none ${
                  isSelected
                    ? "border-slate-300 bg-white text-slate-800 shadow-2xs"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="docType"
                  checked={isSelected}
                  onChange={() => setDocType(type)}
                  className="w-3.5 h-3.5 text-[#FF5523] accent-[#FF5523] cursor-pointer"
                />
                <span>{type}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Dashed Upload Box */}
      <div className="border border-dashed border-slate-300 rounded-[12px] p-8 sm:p-10 flex flex-col items-center justify-center text-center my-1 relative bg-slate-50/40 hover:bg-slate-50 transition-colors">
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleSimulatedUpload}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        />

        <p className="font-sans font-medium text-[13.5px] text-[#1E1E1E] mb-3">
          Upload {docType}
        </p>

        <button
          type="button"
          className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-sans font-medium text-[12.5px] px-4 py-1.5 rounded-[6px] flex items-center gap-2 shadow-2xs pointer-events-none"
        >
          <Upload className="w-3.5 h-3.5 text-slate-500" />
          <span>{uploading ? "Uploading..." : "Upload"}</span>
        </button>

        {files.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            {files.map((f, idx) => (
              <span
                key={idx}
                className="font-sans text-[11px] text-[#00AE5B] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3" />
                {f}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Permission Checkbox in grey card */}
      <div className="bg-slate-50 border border-slate-100 rounded-[8px] p-3 flex items-start gap-2.5">
        <input
          type="checkbox"
          id="consent-step3"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded text-[#00AE5B] accent-[#00AE5B] cursor-pointer"
        />
        <label
          htmlFor="consent-step3"
          className="font-sans text-[12px] text-[#475569] leading-snug cursor-pointer select-none"
        >
          I confirm that I have Meera&apos;s or her legal guardian&apos;s permission to create this fundraiser and submit supporting documents for verification.
        </label>
      </div>

      {/* Continue to Dashboard CTA Button */}
      <button
        type="button"
        onClick={onSubmit}
        className="w-full bg-[#FF5523] hover:bg-[#e04515] active:scale-98 transition-all text-white font-sans font-bold text-[15px] py-3.5 rounded-[8px] shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-1"
      >
        <span>Continue to Dashboard</span>
        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
      </button>
    </div>
  );
}
