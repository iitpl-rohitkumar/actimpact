"use client";

import React, { useState } from "react";
import { UploadCloud, FileCheck, ArrowLeft, Check, CheckCircle2 } from "lucide-react";

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
  onBack,
  onSubmit,
}: Step3Props) {
  const [uploading, setUploading] = useState(false);
  const docTypes = [
    "Medical bill",
    "Estimation Letter",
    "Diagnostic Reports",
    "Government ID (Aadhaar / PAN)",
  ];

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploading(true);
      const name = e.target.files[0].name;
      setTimeout(() => {
        setFiles((prev) => [...prev, name]);
        setUploading(false);
      }, 800);
    }
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-xs flex flex-col gap-8">
      <div>
        <h2 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#1E1E1E]">
          Upload Verification Documents
        </h2>
        <p className="font-sans text-[13px] text-[#6B7280] mt-1">
          Direct hospital estimation slips and bills allow our trust team to verify your campaign in under 6 hours.
        </p>
      </div>

      {/* Select Document Type */}
      <div>
        <label className="font-sans font-semibold text-[13px] text-[#292925] block mb-2.5">
          Select Document Type:
        </label>
        <div className="flex flex-wrap gap-2.5">
          {docTypes.map((dt) => {
            const isSelected = docType === dt;
            return (
              <button
                key={dt}
                type="button"
                onClick={() => setDocType(dt)}
                className={`py-2 px-3.5 rounded-[20px] font-sans font-semibold text-[13px] border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#FF5523] text-white border-[#FF5523] shadow-xs"
                    : "bg-slate-50 border-slate-200 text-[#292925] hover:border-slate-300"
                }`}
              >
                {dt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Drag & Drop File Upload Area */}
      <div className="border-2 border-dashed border-slate-300 hover:border-[#FF5523] rounded-[16px] p-8 text-center bg-slate-50/60 transition-colors flex flex-col items-center justify-center relative cursor-pointer">
        <input
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={handleSimulatedUpload}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />

        <div className="w-14 h-14 rounded-full bg-[#FFF1ED] text-[#FF5523] flex items-center justify-center mb-3">
          <UploadCloud className="w-7 h-7" />
        </div>

        <p className="font-sans font-bold text-[15px] text-[#1E1E1E]">
          {uploading ? "Uploading document..." : "Click or drag & drop files here to upload"}
        </p>
        <p className="font-sans text-[12px] text-[#6B7280] mt-1">
          Supports PDF, JPG, PNG up to 15MB each
        </p>
      </div>

      {/* Uploaded Files List */}
      {files.length > 0 && (
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
          <span className="font-sans font-semibold text-[13px] text-slate-700">
            Uploaded Documents ({files.length}):
          </span>
          <div className="flex flex-col gap-2">
            {files.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-[10px] bg-emerald-50 border border-emerald-200 text-emerald-800 text-[13px] font-sans"
              >
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium truncate max-w-[280px] sm:max-w-md">
                    {file}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase">
                  Ready for Review
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reassurance Banner */}
      <div className="bg-[#FCFFFD] border border-emerald-100 rounded-[12px] p-4 flex items-start gap-3 text-[13px] text-[#475569]">
        <CheckCircle2 className="w-5 h-5 text-[#00AE5B] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Your documents are encrypted and reviewed solely by ActImpact&apos;s internal clinical verification desk. We never share raw identification with third parties.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans font-semibold text-[14px] px-6 py-2.5 rounded-[24px] flex items-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onSubmit}
          className="bg-[#00AE5B] hover:bg-[#00964e] active:scale-98 transition-all text-white font-sans font-bold text-[15px] px-8 py-3 rounded-[24px] flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <Check className="w-4 h-4" />
          <span>Submit for Verification</span>
        </button>
      </div>
    </div>
  );
}
