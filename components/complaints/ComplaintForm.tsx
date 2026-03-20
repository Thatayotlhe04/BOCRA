"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, CheckIcon, UploadIcon, DocIcon } from "@/components/icons";

const providers = ["Mascom Wireless", "Orange Botswana", "BTC (Botswana Telecommunications)", "Gabz FM", "Duma FM", "BotswanaPost", "Other"];
const categories = ["Billing & Charges", "Service Quality", "Network Coverage", "Number Porting", "Contract Dispute", "Data Privacy", "Other"];
const stepLabels = ["Provider", "Issue Details", "Evidence", "Review"];

export default function ComplaintForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [genId, setGenId] = useState("");
  const [form, setForm] = useState({
    provider: "", category: "", desc: "", date: "", phone: "", email: "",
  });

  const set = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const canNext = () => {
    if (step === 0) return form.provider !== "";
    if (step === 1) return form.category !== "" && form.desc.length > 10;
    return true;
  };

  const handleSubmit = () => {
    const id = `CMP-2026-${String(Math.floor(1000 + Math.random() * 9000))}`;
    setGenId(id);
    setSubmitted(true);
  };

  // ── Success screen ──
  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-bocra-green-light flex items-center justify-center mx-auto mb-5">
          <CheckIcon color="#00A651" size={36} />
        </div>
        <h2 className="text-[22px] font-bold text-gray-900 mb-2">Complaint Submitted</h2>
        <p className="text-sm text-gray-500 mb-5">Your complaint has been registered. Save your tracking ID:</p>
        <div className="inline-block bg-bocra-navy text-bocra-yellow px-9 py-3.5 rounded-[14px] text-[21px] font-bold tracking-[2px] font-mono mb-5">
          {genId}
        </div>
        <p className="text-[13px] text-gray-400 max-w-[380px] mx-auto mb-6 leading-relaxed">
          You will receive a confirmation email shortly. Use this ID to monitor progress.
        </p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <button
            onClick={() => router.push(`/complaints/track/${genId}`)}
            className="bg-bocra-blue text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all hover:opacity-90"
          >
            Track This Complaint
          </button>
          <button
            onClick={() => router.push("/complaints")}
            className="bg-transparent border-[1.5px] border-gray-200 text-gray-600 px-5 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-gray-50 transition-all"
          >
            Back to Complaints
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── Step indicator ── */}
      <div className="flex items-start justify-center mb-7 overflow-x-auto pb-1">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0"
                style={{
                  background: i < step ? "#00A651" : i === step ? "#E31B6D" : "#DEE2E6",
                  color: i <= step ? "#fff" : "#868E96",
                  boxShadow: i === step ? "0 0 0 4px rgba(227,27,109,0.1)" : "none",
                }}
              >
                {i < step ? "✓" : i + 1}
              </div>
              <span
                className="text-[10px] mt-1.5 whitespace-nowrap transition-all"
                style={{ fontWeight: i === step ? 600 : 400, color: i <= step ? "#343A40" : "#ADB5BD" }}
              >
                {label}
              </span>
            </div>
            {i < 3 && (
              <div
                className="w-6 md:w-7 h-0.5 rounded-full mx-1 mb-5 shrink-0 transition-all duration-300"
                style={{ background: i < step ? "#00A651" : "#DEE2E6" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ── Form card ── */}
      <div className="bg-white rounded-card border border-gray-100 p-5 md:p-7">

        {/* Step 0: Provider */}
        {step === 0 && (
          <>
            <h3 className="text-lg font-bold text-gray-900 mb-1.5">Select Service Provider</h3>
            <p className="text-[13px] text-gray-500 mb-5">Choose the provider you are filing against.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {providers.map((p) => (
                <div
                  key={p}
                  onClick={() => set("provider", p)}
                  className="px-3.5 py-3 rounded-lg cursor-pointer border-2 text-[13px] transition-all flex items-center"
                  style={{
                    borderColor: form.provider === p ? "#E31B6D" : "#DEE2E6",
                    background: form.provider === p ? "#FDE9F1" : "#fff",
                    color: form.provider === p ? "#E31B6D" : "#343A40",
                    fontWeight: form.provider === p ? 600 : 400,
                  }}
                >
                  {form.provider === p && <span className="mr-1">✓</span>}
                  {p}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 1: Issue Details */}
        {step === 1 && (
          <>
            <h3 className="text-lg font-bold text-gray-900 mb-5">Describe the Issue</h3>

            <div className="mb-4">
              <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Category *</label>
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm font-sans outline-none text-gray-900 bg-white appearance-none pr-10 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
              >
                <option value="">Select a category</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="mb-4">
              <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Description *</label>
              <textarea
                value={form.desc}
                onChange={(e) => set("desc", e.target.value)}
                placeholder="Include dates, amounts, and reference numbers..."
                className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm font-sans outline-none text-gray-900 min-h-[110px] resize-y leading-relaxed focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
              />
              {form.desc.length > 0 && form.desc.length <= 10 && (
                <div className="text-xs text-bocra-magenta mt-1">Minimum 10 characters required</div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div>
                <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Date of Incident</label>
                <input
                  type="date" value={form.date} onChange={(e) => set("date", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm font-sans outline-none text-gray-900 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
                />
              </div>
              <div>
                <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Contact Number</label>
                <input
                  type="tel" placeholder="+267" value={form.phone} onChange={(e) => set("phone", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm font-sans outline-none text-gray-900 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
                />
              </div>
            </div>

            <div className="mt-3.5">
              <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Email Address</label>
              <input
                type="email" placeholder="you@example.com" value={form.email} onChange={(e) => set("email", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm font-sans outline-none text-gray-900 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
              />
            </div>
          </>
        )}

        {/* Step 2: Evidence */}
        {step === 2 && (
          <>
            <h3 className="text-lg font-bold text-gray-900 mb-5">Upload Supporting Documents</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-[14px] py-9 px-5 text-center bg-gray-50 cursor-pointer hover:border-bocra-blue hover:bg-bocra-blue-light transition-all">
              <div className="opacity-50 flex justify-center"><UploadIcon color="#0077B6" size={30} /></div>
              <div className="text-sm font-medium text-gray-700 mt-2.5 mb-1">Drag files here or click to browse</div>
              <div className="text-xs text-gray-400">PDF, JPG, PNG — max 10MB each</div>
            </div>
            <div className="mt-4 p-3.5 rounded-[10px] bg-bocra-yellow-light text-[#7A5D00] text-[13px] flex gap-2.5 items-start leading-relaxed">
              <div className="shrink-0 mt-px flex"><DocIcon color="#7A5D00" size={16} /></div>
              <span>Uploading evidence strengthens your case. Include screenshots, bills, or correspondence. This step is optional.</span>
            </div>
          </>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <>
            <h3 className="text-lg font-bold text-gray-900 mb-5">Review Your Complaint</h3>
            <div className="bg-gray-50 rounded-[10px] p-4 md:p-5">
              {[
                ["Provider", form.provider],
                ["Category", form.category],
                ["Description", form.desc],
                ["Date", form.date || "—"],
                ["Contact", form.phone || "—"],
                ["Email", form.email || "—"],
              ].map(([label, val], i) => (
                <div
                  key={label}
                  className="flex gap-3.5 py-2.5"
                  style={{ borderBottom: i < 5 ? "1px solid #DEE2E6" : "none" }}
                >
                  <div className="text-[13px] font-semibold text-gray-500 min-w-[95px] shrink-0">{label}</div>
                  <div className="text-sm text-gray-900 break-words leading-relaxed">{val}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3.5 rounded-[10px] bg-bocra-green-light text-[#1a6b37] text-[13px] flex gap-2.5 items-center leading-relaxed">
              <div className="shrink-0 flex"><CheckIcon color="#00A651" size={16} /></div>
              <span>By submitting, you confirm this information is accurate to the best of your knowledge.</span>
            </div>
          </>
        )}

        {/* ── Navigation ── */}
        <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
          <button
            onClick={() => step === 0 ? router.push("/complaints") : setStep(step - 1)}
            className="bg-transparent border-[1.5px] border-gray-200 text-gray-600 px-5 py-2 rounded-lg text-[13px] font-semibold hover:bg-gray-50 transition-all"
          >
            {step === 0 ? "Cancel" : "Back"}
          </button>

          {step < 3 ? (
            <button
              onClick={() => canNext() && setStep(step + 1)}
              className="text-white px-5 py-2 rounded-lg text-[13px] font-semibold inline-flex items-center gap-1.5 transition-all"
              style={{
                background: canNext() ? "#E31B6D" : "#CED4DA",
                cursor: canNext() ? "pointer" : "not-allowed",
              }}
            >
              Continue <ArrowRightIcon color="#fff" size={14} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-bocra-green text-white px-5 py-2 rounded-lg text-[13px] font-semibold inline-flex items-center gap-1.5 transition-all hover:opacity-90"
            >
              Submit Complaint <CheckIcon color="#fff" size={14} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
