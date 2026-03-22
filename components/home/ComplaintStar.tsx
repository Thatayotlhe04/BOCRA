"use client";

import Link from "next/link";
import { ComplaintIcon, ArrowRightIcon } from "@/components/icons";

export default function ComplaintStar() {
  return (
    <Link href="/complaints" className="block group">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C2340] via-[#11385A] to-[#0A4568] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_40px_rgba(12,35,64,0.4)]">
        <div className="absolute inset-0 animate-shimmer opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bocra-magenta via-bocra-yellow to-bocra-blue" />

        <div className="relative flex items-stretch">
          <div className="flex-1 p-6 md:p-7">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-bocra-magenta/20 flex items-center justify-center">
                <ComplaintIcon color="#E31B6D" size={20} />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-bocra-magenta/20 text-bocra-magenta tracking-wider uppercase">
                Most Used Service
              </span>
            </div>
            <h3 className="text-lg md:text-[21px] font-bold text-white mb-1.5">File or Track a Complaint</h3>
            <p className="text-[13px] text-white/40 leading-relaxed mb-5 max-w-[380px]">
              Issue with your telecom, internet, broadcasting, or postal provider? Submit a complaint and track its resolution — every step visible, every action logged.
            </p>
            <span className="inline-flex items-center gap-2 bg-bocra-magenta text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all group-hover:shadow-[0_4px_16px_rgba(227,27,109,0.3)]">
              Get Started <ArrowRightIcon color="#fff" size={14} />
            </span>
          </div>

          <div className="hidden md:flex w-[240px] flex-col justify-center p-5 pl-0">
            <div className="bg-white/[0.06] border border-white/[0.08] rounded-xl p-4">
              <div className="text-[10px] text-white/30 uppercase tracking-wider font-semibold mb-3">Live Tracking Preview</div>
              {[
                { label: "Submitted", done: true },
                { label: "Acknowledged", done: true },
                { label: "Investigating", done: true, current: true },
                { label: "Assigned", done: false },
                { label: "Resolved", done: false },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 py-1">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                    s.current ? "bg-bocra-yellow ring-2 ring-bocra-yellow/20" :
                    s.done ? "bg-bocra-blue" : "border border-white/20"
                  }`}>
                    {s.done && !s.current && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>}
                    {s.current && <div className="w-1.5 h-1.5 rounded-full bg-bocra-navy" />}
                  </div>
                  <span className={`text-[11px] ${s.done ? "text-white/70 font-medium" : "text-white/25"}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
