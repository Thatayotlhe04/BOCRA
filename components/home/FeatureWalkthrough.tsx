"use client";

import { useState } from "react";
import { ComplaintIcon, ArrowRightIcon, CheckIcon, SearchIcon } from "@/components/icons";

const complaintSteps = [
  { step: 1, title: "Choose Your Provider", desc: "Select from any licensed telecom, broadcasting, or postal provider in Botswana.", color: "#E31B6D" },
  { step: 2, title: "Describe the Issue", desc: "Guided form with category selection, detailed description, incident date, and contact info.", color: "#0077B6" },
  { step: 3, title: "Submit & Get Your ID", desc: "Receive a unique tracking ID instantly — like CMP-2026-4821 — with email + SMS confirmation.", color: "#00A651" },
  { step: 4, title: "Track in Real Time", desc: "Live timeline showing every step — pulsing status indicator, progress bar, and estimated resolution time.", color: "#FFD100" },
];

const aiCapabilities = [
  { icon: "💬", label: "Regulatory FAQs", desc: "Instant answers about BOCRA rules" },
  { icon: "📋", label: "Complaint Guidance", desc: "Step-by-step filing help" },
  { icon: "🔍", label: "License Lookup", desc: "Check requirements & status" },
  { icon: "🌐", label: "Bilingual Support", desc: "English & Setswana" },
];

function BocraDotsSmall() {
  return (
    <div className="flex gap-[2px]">
      {["#0077B6", "#00A651", "#E31B6D", "#FFD100"].map((c) => (
        <div key={c} className="w-[5px] h-[5px] rounded-full" style={{ background: c }} />
      ))}
    </div>
  );
}

export default function FeatureWalkthrough() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState<"complaints" | "ai">("complaints");

  return (
    <section className="relative py-16 md:py-20" id="features">
      {/* Full-bleed dark background to break from the page surface */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f7] via-[#ebedf0] to-[#f4f5f7]" />

      <div className="relative max-w-[980px] mx-auto px-4 md:px-5">
        {/* Section header — clean, no badge */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900 tracking-tight mb-2">
            See How It Works
          </h2>
          <p className="text-sm text-gray-500 max-w-[420px] mx-auto leading-relaxed">
            Two flagship features that transform how citizens interact with BOCRA
          </p>
        </div>

        {/* ── Elevated card container ── */}
        <div className="bg-white rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-gray-100/80 overflow-hidden">

          {/* Tab bar — embedded in the card */}
          <div className="flex border-b border-gray-100 bg-gray-50/50">
            <button
              onClick={() => setActiveTab("complaints")}
              className={`flex-1 flex items-center justify-center gap-2.5 py-4 text-[13px] font-semibold transition-all duration-200 relative ${
                activeTab === "complaints"
                  ? "text-bocra-magenta"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <ComplaintIcon color={activeTab === "complaints" ? "#E31B6D" : "#ADB5BD"} size={17} />
              Complaints System
              {activeTab === "complaints" && (
                <div className="absolute bottom-0 left-[15%] right-[15%] h-[2.5px] bg-bocra-magenta rounded-full" />
              )}
            </button>
            <div className="w-px bg-gray-100" />
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex-1 flex items-center justify-center gap-2.5 py-4 text-[13px] font-semibold transition-all duration-200 relative ${
                activeTab === "ai"
                  ? "text-bocra-navy"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <BocraDotsSmall />
              Virtual Assistant
              {activeTab === "ai" && (
                <div className="absolute bottom-0 left-[15%] right-[15%] h-[2.5px] bg-bocra-navy rounded-full" />
              )}
            </button>
          </div>

          {/* ── Complaints Content ── */}
          {activeTab === "complaints" && (
            <div className="p-5 md:p-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
                {/* Steps */}
                <div className="space-y-2.5">
                  {complaintSteps.map((s, i) => (
                    <div
                      key={s.step}
                      onClick={() => setActiveStep(i)}
                      className={`rounded-xl p-4 cursor-pointer transition-all duration-300 border ${
                        activeStep === i
                          ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-transparent -translate-y-0.5"
                          : "bg-transparent border-transparent hover:bg-white/60"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0 transition-all duration-300"
                          style={{
                            background: activeStep === i ? s.color : activeStep > i ? "#00A651" : "#E9ECEF",
                            color: activeStep >= i ? "#fff" : "#868E96",
                            boxShadow: activeStep === i ? `0 0 0 4px ${s.color}15` : "none",
                          }}
                        >
                          {i < activeStep ? "✓" : s.step}
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <h4 className={`text-[14px] font-bold mb-0.5 transition-colors ${activeStep === i ? "text-gray-900" : "text-gray-600"}`}>{s.title}</h4>
                          <p className={`text-[12px] leading-relaxed transition-colors ${activeStep === i ? "text-gray-500" : "text-gray-400"}`}>{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Phone mockup */}
                <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
                  {/* Browser bar */}
                  <div className="bg-gradient-to-r from-bocra-magenta to-[#B8155A] px-5 py-4">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="flex-1 mx-2 h-4 bg-white/10 rounded-full flex items-center px-2">
                        <span className="text-[8px] text-white/30 font-mono">bocra-theta.vercel.app</span>
                      </div>
                    </div>
                    <div className="text-[14px] font-bold text-white">
                      {activeStep === 0 && "Select Service Provider"}
                      {activeStep === 1 && "Describe the Issue"}
                      {activeStep === 2 && "Complaint Submitted!"}
                      {activeStep === 3 && "Live Tracking"}
                    </div>
                  </div>

                  <div className="p-5 min-h-[280px]">
                    {/* Step 0: Provider */}
                    {activeStep === 0 && (
                      <div className="space-y-2">
                        {["Mascom Wireless", "Orange Botswana", "BTC Telecom", "BotswanaPost"].map((p, i) => (
                          <div key={p} className={`px-3.5 py-3 rounded-lg border-2 text-[13px] flex items-center transition-all ${
                            i === 0 ? "border-bocra-magenta bg-bocra-magenta-light text-bocra-magenta font-semibold" : "border-gray-200 text-gray-600 bg-white"
                          }`}>
                            {i === 0 && <span className="mr-1.5">✓</span>}{p}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 1: Form */}
                    {activeStep === 1 && (
                      <div className="space-y-3">
                        <div><div className="text-[11px] font-semibold text-gray-500 mb-1">Category</div><div className="px-3 py-2.5 rounded-lg border border-gray-200 text-[13px] text-gray-700 bg-white">Billing & Charges</div></div>
                        <div><div className="text-[11px] font-semibold text-gray-500 mb-1">Description</div><div className="px-3 py-2.5 rounded-lg border border-gray-200 text-[13px] text-gray-500 bg-white min-h-[56px] leading-relaxed">Charged P450 for a service I never subscribed to...</div></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div><div className="text-[11px] font-semibold text-gray-500 mb-1">Date</div><div className="px-3 py-2 rounded-lg border border-gray-200 text-[12px] text-gray-500 bg-white">15 Mar 2026</div></div>
                          <div><div className="text-[11px] font-semibold text-gray-500 mb-1">Phone</div><div className="px-3 py-2 rounded-lg border border-gray-200 text-[12px] text-gray-500 bg-white">+267 7X XXX</div></div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Success */}
                    {activeStep === 2 && (
                      <div className="text-center py-6">
                        <div className="w-14 h-14 rounded-full bg-bocra-green-light flex items-center justify-center mx-auto mb-4"><CheckIcon color="#00A651" size={30} /></div>
                        <div className="text-[15px] font-bold text-gray-900 mb-3">Complaint Submitted!</div>
                        <div className="inline-block bg-bocra-navy text-bocra-yellow px-6 py-2.5 rounded-xl text-[17px] font-bold tracking-[2px] font-mono mb-3">CMP-2026-4821</div>
                        <div className="text-[12px] text-gray-400">Confirmation sent via email + SMS</div>
                      </div>
                    )}

                    {/* Step 3: Tracking */}
                    {activeStep === 3 && (
                      <div>
                        <div className="flex justify-between text-[11px] text-gray-400 mb-1.5"><span>Progress</span><span className="font-mono">3/5</span></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-5"><div className="h-full rounded-full bg-gradient-to-r from-bocra-yellow to-[#FFC000] w-[60%]" /></div>
                        {[
                          { label: "Submitted", time: "8 Mar", done: true },
                          { label: "Acknowledged", time: "10 Mar", done: true },
                          { label: "Investigating", time: "12 Mar", done: true, current: true },
                          { label: "Assigned", time: "Pending", done: false },
                          { label: "Resolved", time: "Pending", done: false },
                        ].map((s) => (
                          <div key={s.label} className="flex items-center gap-3 py-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                              s.current ? "bg-bocra-blue ring-[3px] ring-bocra-blue/15" : s.done ? "bg-bocra-blue" : "bg-white border-2 border-gray-200"
                            }`}>
                              {s.done && !s.current && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>}
                              {s.current && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                            <div className="flex-1 flex justify-between items-center">
                              <span className={`text-[12px] ${s.done ? "text-gray-900 font-medium" : "text-gray-400"}`}>{s.label}</span>
                              <span className={`text-[11px] ${s.done ? "text-gray-500" : "text-gray-300"}`}>{s.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* CTA row */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-3 items-center justify-between">
                <a href="/complaints" className="inline-flex items-center gap-2 bg-bocra-magenta text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold hover:opacity-90 transition-all">
                  Try It Live <ArrowRightIcon color="#fff" size={14} />
                </a>
                <div className="flex gap-2">
                  <a href="/complaints/track/CMP-2026-0341" className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 font-medium hover:text-bocra-blue transition-colors">
                    <SearchIcon color="#ADB5BD" size={13} /> Active investigation
                  </a>
                  <span className="text-gray-300">·</span>
                  <a href="/complaints/track/CMP-2026-0298" className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 font-medium hover:text-bocra-green transition-colors">
                    <CheckIcon color="#ADB5BD" size={13} /> Resolved case
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ── AI Content ── */}
          {activeTab === "ai" && (
            <div className="p-5 md:p-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">
                {/* Chat mockup */}
                <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-2.5 px-4 py-3 bg-bocra-navy text-white">
                    <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center"><BocraDotsSmall /></div>
                    <div><div className="text-[12px] font-semibold">Virtual Assistant</div><div className="text-[9px] text-white/35 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-bocra-green" />Online</div></div>
                  </div>
                  <div className="p-3.5 space-y-2.5 min-h-[280px]">
                    <div className="flex gap-2 items-start">
                      <div className="w-5 h-5 rounded-md bg-bocra-blue-light flex items-center justify-center shrink-0 mt-0.5"><BocraDotsSmall /></div>
                      <div className="bg-white px-3 py-2 rounded-xl rounded-bl-sm text-[12px] text-gray-700 leading-relaxed max-w-[88%] shadow-sm">Dumelang! 👋 I can help with licensing, complaints, and regulatory info.</div>
                    </div>
                    <div className="flex justify-end"><div className="bg-bocra-blue px-3 py-2 rounded-xl rounded-br-sm text-[12px] text-white max-w-[80%]">How do I file a complaint?</div></div>
                    <div className="flex gap-2 items-start">
                      <div className="w-5 h-5 rounded-md bg-bocra-blue-light flex items-center justify-center shrink-0 mt-0.5"><BocraDotsSmall /></div>
                      <div className="bg-white px-3 py-2 rounded-xl rounded-bl-sm text-[12px] text-gray-700 leading-relaxed max-w-[88%] shadow-sm">Go to Complaints and click &apos;File New Complaint&apos;. 4-step process. Track with your ID like CMP-2026-0341.</div>
                    </div>
                    <div className="flex flex-wrap gap-1 pl-7">
                      {["Check license status", "Contact BOCRA"].map((s) => (
                        <div key={s} className="bg-white border border-gray-200 px-2 py-0.5 rounded-full text-[10px] text-gray-500 font-medium shadow-sm">{s}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 px-3.5 py-2.5 border-t border-gray-100 bg-white rounded-b-2xl"><div className="flex-1 px-2.5 py-1.5 rounded-lg border border-gray-200 text-[11px] text-gray-400">Ask anything...</div></div>
                </div>

                {/* Capabilities */}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 mb-1">Your Digital Assistant</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">Available on every page via the floating button. Instant answers without navigating away.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {aiCapabilities.map((cap) => (
                      <div key={cap.label} className="bg-gray-50 rounded-xl border border-gray-100 p-3.5 transition-all hover:bg-white hover:shadow-sm">
                        <div className="text-xl mb-1.5">{cap.icon}</div>
                        <h4 className="text-[12px] font-bold text-gray-900 mb-0.5">{cap.label}</h4>
                        <p className="text-[11px] text-gray-400 leading-snug">{cap.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-bocra-navy rounded-xl p-4">
                    <div className="flex gap-2.5">
                      {[
                        { e: "🖥️", l: "Desktop", d: "Bottom-right" },
                        { e: "📱", l: "Mobile", d: "Full-width" },
                        { e: "⚡", l: "Instant", d: "No reload" },
                      ].map((x) => (
                        <div key={x.l} className="flex-1 bg-white/[0.06] border border-white/[0.06] rounded-lg p-2.5 text-center">
                          <div className="text-base mb-0.5">{x.e}</div>
                          <div className="text-[10px] text-white/50 font-medium">{x.l}</div>
                          <div className="text-[9px] text-white/25">{x.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-bocra-blue-light/60 border border-bocra-blue/8 rounded-xl p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-bocra-blue/8 flex items-center justify-center shrink-0"><BocraDotsSmall /></div>
                    <div><div className="text-[13px] font-semibold text-gray-800">Try it now</div><div className="text-[11px] text-gray-500">Click the floating button in the bottom-right →</div></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
