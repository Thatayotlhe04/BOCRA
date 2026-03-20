"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ComplaintIcon, SearchIcon, ArrowRightIcon, ChevDownIcon } from "@/components/icons";

const faqs = [
  { q: "What types of complaints can I file?", a: "Billing disputes, service quality, network coverage, number porting, contract issues, and data privacy breaches from any licensed provider in Botswana." },
  { q: "How long does resolution take?", a: "Most complaints are resolved within 14 business days. Complex cases may take up to 30 days. You'll receive email updates at each stage." },
  { q: "Do I need to contact the provider first?", a: "Yes, BOCRA recommends attempting direct resolution first. If unsatisfied or no response within 14 days, escalate to BOCRA." },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-white rounded-[10px] border border-gray-100 mb-2 cursor-pointer overflow-hidden transition-all hover:border-gray-200"
    >
      <div className="px-4 py-3.5 flex justify-between items-center gap-3">
        <span className="text-sm font-semibold text-gray-900 flex-1">{q}</span>
        <span className="shrink-0 flex transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "none" }}>
          <ChevDownIcon color="#ADB5BD" />
        </span>
      </div>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 -mt-0.5">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ComplaintsLanding() {
  const router = useRouter();
  const [trackId, setTrackId] = useState("");
  const [trackError, setTrackError] = useState(false);

  const handleTrack = () => {
    const id = trackId.trim().toUpperCase();
    if (!id) return;
    // For now, only allow known mock IDs — later this hits Supabase
    if (id === "CMP-2026-0341" || id === "CMP-2026-0298") {
      router.push(`/complaints/track/${id}`);
    } else {
      setTrackError(true);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* File New */}
        <div
          onClick={() => router.push("/complaints/new")}
          className="bg-white rounded-card p-6 md:p-7 border border-gray-100 border-t-[3px] border-t-bocra-magenta text-center cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-lift"
        >
          <div className="w-[52px] h-[52px] rounded-[14px] bg-bocra-magenta-light flex items-center justify-center mx-auto mb-3.5">
            <ComplaintIcon color="#E31B6D" size={26} />
          </div>
          <h3 className="text-[17px] font-bold text-gray-900 mb-1.5">File New Complaint</h3>
          <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">
            Submit a complaint against a telecom, broadcasting, or postal provider
          </p>
          <span className="inline-flex items-center gap-1.5 bg-bocra-magenta text-white px-5 py-2 rounded-lg text-[13px] font-semibold">
            Start Filing <ArrowRightIcon color="#fff" size={14} />
          </span>
        </div>

        {/* Track */}
        <div className="bg-white rounded-card p-6 md:p-7 border border-gray-100 border-t-[3px] border-t-bocra-navy text-center">
          <div className="w-[52px] h-[52px] rounded-[14px] bg-gray-100 flex items-center justify-center mx-auto mb-3.5">
            <SearchIcon color="#0C2340" size={26} />
          </div>
          <h3 className="text-[17px] font-bold text-gray-900 mb-1.5">Track Complaint</h3>
          <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">
            Check the status of your existing complaint
          </p>
          <div className="flex gap-2">
            <input
              value={trackId}
              onChange={(e) => { setTrackId(e.target.value); setTrackError(false); }}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              placeholder="e.g. CMP-2026-0341"
              className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-[13px] text-gray-900 outline-none font-sans focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
            />
            <button
              onClick={handleTrack}
              className="bg-bocra-navy text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold whitespace-nowrap hover:bg-bocra-navy-light transition-colors"
            >
              Track
            </button>
          </div>
          {trackError && (
            <div className="text-bocra-magenta text-xs mt-2 font-medium">
              Not found. Try CMP-2026-0341 or CMP-2026-0298
            </div>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-8">
        <h3 className="text-[17px] font-bold text-gray-900 mb-3.5">Frequently Asked Questions</h3>
        {faqs.map((faq) => (
          <FAQ key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </>
  );
}
