"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckIcon, ClockIcon, ShieldIcon } from "@/components/icons";

interface Step { key: string; label: string; desc: string; time: string; done: boolean; current?: boolean; }
interface TrackingData { id: string; provider: string; category: string; status: string; filed: string; lastUpdate: string; steps: Step[]; }

// Demo data for the two showcase complaints
const mockData: Record<string, TrackingData> = {
  "CMP-2026-0341": {
    id: "CMP-2026-0341", provider: "Orange Botswana", category: "Billing & Charges", status: "investigating", filed: "8 Mar 2026", lastUpdate: "2 hours ago",
    steps: [
      { key: "submitted", label: "Submitted", desc: "Complaint received and registered in the system", time: "8 Mar, 09:14", done: true },
      { key: "acknowledged", label: "Acknowledged", desc: "Confirmation sent to you via email and SMS", time: "10 Mar, 11:30", done: true },
      { key: "investigating", label: "Under Investigation", desc: "Forwarded to Orange Botswana — awaiting provider response", time: "12 Mar, 14:05", done: true, current: true },
      { key: "officer", label: "Assigned to Officer", desc: "A BOCRA compliance officer will review the provider's response", time: "Pending", done: false },
      { key: "resolved", label: "Resolved", desc: "Final decision issued and case closed", time: "Pending", done: false },
    ],
  },
  "CMP-2026-0298": {
    id: "CMP-2026-0298", provider: "Mascom Wireless", category: "Network Coverage", status: "resolved", filed: "1 Mar 2026", lastUpdate: "5 days ago",
    steps: [
      { key: "submitted", label: "Submitted", desc: "Complaint received and registered in the system", time: "1 Mar, 08:42", done: true },
      { key: "acknowledged", label: "Acknowledged", desc: "Confirmation sent to you via email and SMS", time: "3 Mar, 10:15", done: true },
      { key: "investigating", label: "Under Investigation", desc: "Forwarded to Mascom Wireless for response", time: "5 Mar, 09:00", done: true },
      { key: "officer", label: "Assigned to Officer", desc: "Officer reviewed provider's infrastructure commitment", time: "11 Mar, 16:20", done: true },
      { key: "resolved", label: "Resolved", desc: "Resolution accepted — case closed successfully", time: "15 Mar, 12:00", done: true },
    ],
  },
};

const statusOrder = ["submitted", "acknowledged", "investigating", "officer", "resolved"];
const statusLabels: Record<string, { label: string; desc: string }> = {
  submitted: { label: "Submitted", desc: "Complaint received and registered in the system" },
  acknowledged: { label: "Acknowledged", desc: "Confirmation sent to you via email and SMS" },
  investigating: { label: "Under Investigation", desc: "Forwarded to provider — awaiting response" },
  officer: { label: "Assigned to Officer", desc: "A BOCRA compliance officer will review" },
  resolved: { label: "Resolved", desc: "Final decision issued and case closed" },
};

function buildStepsFromStatus(status: string, complaint: { created_at: string }): Step[] {
  const currentIdx = statusOrder.indexOf(status);
  return statusOrder.map((s, i) => ({
    key: s,
    label: statusLabels[s].label,
    desc: statusLabels[s].desc,
    time: i === 0 ? new Date(complaint.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : i <= currentIdx ? "Completed" : "Pending",
    done: i <= currentIdx,
    current: i === currentIdx && status !== "resolved",
  }));
}

export default function ComplaintTracker({ id }: { id: string }) {
  const [data, setData] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    async function fetchComplaint() {
      // Check mock data first (for demo complaints)
      if (mockData[id]) {
        setData(mockData[id]);
        setLoading(false);
        return;
      }

      // Try API
      try {
        const res = await fetch(`/api/complaints?id=${encodeURIComponent(id)}`);
        if (res.ok) {
          const json = await res.json();
          if (json.complaint) {
            const c = json.complaint;
            const steps = buildStepsFromStatus(c.status, c);
            setData({
              id: c.id,
              provider: c.provider,
              category: c.category,
              status: c.status,
              filed: new Date(c.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
              lastUpdate: getRelativeTime(c.updated_at),
              steps,
            });
            setLoading(false);
            return;
          }
        }
      } catch {
        // API unavailable
      }

      setNotFound(true);
      setLoading(false);
    }

    fetchComplaint();
  }, [id]);

  // Animate timeline reveal
  useEffect(() => {
    if (!data) return;
    const total = data.steps.filter((s) => s.done).length;
    let i = 0;
    const iv = setInterval(() => { i++; setRevealed(i); if (i >= total) clearInterval(iv); }, 220);
    return () => clearInterval(iv);
  }, [data]);

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="w-10 h-10 border-3 border-gray-200 border-t-bocra-blue rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-400">Loading complaint {id}...</p>
      </div>
    );
  }

  if (notFound || !data) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-bocra-magenta-light flex items-center justify-center mx-auto mb-4"><ShieldIcon color="#E31B6D" size={28} /></div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Complaint Not Found</h2>
        <p className="text-sm text-gray-500 mb-6">No complaint with ID: <span className="font-mono font-bold">{id}</span></p>
        <Link href="/complaints" className="bg-bocra-blue text-white px-6 py-2.5 rounded-lg text-sm font-semibold inline-block">Back to Complaints</Link>
      </div>
    );
  }

  const isResolved = data.status === "resolved";
  const doneCount = data.steps.filter((s) => s.done).length;
  const currentStep = data.steps.find((s) => s.current);
  const lineColor = isResolved ? "#00A651" : "#0077B6";

  return (
    <>
      <Link href="/complaints" className="inline-flex items-center gap-1 mb-6 text-[13px] text-gray-500 font-medium hover:text-bocra-blue transition-colors">← Back to Complaints</Link>

      {/* Status hero */}
      <div className="rounded-2xl p-6 md:p-8 mb-5 relative overflow-hidden" style={{ background: isResolved ? "linear-gradient(135deg, #00A651, #00C064)" : "linear-gradient(135deg, #0C2340 0%, #11385A 60%, #0A4568 100%)" }}>
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.04]" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/[0.03]" />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl md:text-2xl font-bold text-white font-mono tracking-wide">{data.id}</span>
                {!isResolved && <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bocra-yellow opacity-60" /><span className="relative inline-flex rounded-full h-3 w-3 bg-bocra-yellow" /></span>}
              </div>
              <div className="text-sm text-white/50">vs. {data.provider} · {data.category}</div>
            </div>
            <div className="text-right">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide" style={{ background: isResolved ? "rgba(255,255,255,0.2)" : "rgba(255,209,0,0.2)", color: "#fff" }}>{isResolved ? "✓ RESOLVED" : "IN PROGRESS"}</div>
              <div className="text-xs text-white/30 mt-2">Updated {data.lastUpdate}</div>
            </div>
          </div>
          <div className="mb-2">
            <div className="flex justify-between text-xs text-white/35 mb-2"><span>Progress</span><span className="font-mono">{doneCount}/{data.steps.length}</span></div>
            <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${(doneCount / data.steps.length) * 100}%`, background: isResolved ? "rgba(255,255,255,0.5)" : "linear-gradient(90deg, #FFD100, #FFC000)" }} /></div>
          </div>
          {currentStep && !isResolved && (
            <div className="flex items-center gap-3 mt-5 bg-white/[0.07] rounded-xl px-4 py-3.5 border border-white/[0.06]">
              <div className="w-9 h-9 rounded-full bg-bocra-yellow/20 flex items-center justify-center shrink-0"><ClockIcon color="#FFD100" size={17} /></div>
              <div className="flex-1 min-w-0"><div className="text-sm font-semibold text-white">{currentStep.label}</div><div className="text-xs text-white/40 leading-relaxed">{currentStep.desc}</div></div>
              <div className="text-xs text-white/25 shrink-0 hidden md:block">Est. 3-5 days</div>
            </div>
          )}
          {isResolved && (
            <div className="flex items-center gap-3 mt-5 bg-white/[0.12] rounded-xl px-4 py-3.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0"><CheckIcon color="#fff" size={17} /></div>
              <div><div className="text-sm font-semibold text-white">Case Closed Successfully</div><div className="text-xs text-white/45">Resolution accepted — {data.steps[data.steps.length - 1].time}</div></div>
            </div>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
        <div className="px-6 md:px-8 pt-6 pb-1 border-b border-gray-50"><h3 className="text-base font-bold text-gray-900 mb-0.5">Complaint Timeline</h3><p className="text-xs text-gray-400 mb-3">Every action is logged and visible to you</p></div>
        <div className="px-6 md:px-8 py-6">
          {data.steps.map((step, i) => {
            const isLast = i === data.steps.length - 1;
            const isVisible = i < revealed || !step.done;
            return (
              <div key={step.key} className="flex gap-4 transition-all duration-500" style={{ opacity: isVisible || !step.done ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(8px)" }}>
                <div className="flex flex-col items-center">
                  {step.current && !isResolved ? (
                    <div className="w-10 h-10 rounded-full bg-bocra-blue/10 flex items-center justify-center shrink-0"><span className="relative flex h-4 w-4"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bocra-blue opacity-40" /><span className="relative inline-flex rounded-full h-4 w-4 bg-bocra-blue" /></span></div>
                  ) : step.done ? (
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: isResolved ? "#E8F9EF" : "#EAF5FD" }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: lineColor }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0"><div className="w-5 h-5 rounded-full border-2 border-gray-200" /></div>
                  )}
                  {!isLast && <div className="w-0.5 flex-1 min-h-[24px] my-1.5 rounded-full" style={{ background: step.done && data.steps[i + 1]?.done ? lineColor : step.done && data.steps[i + 1]?.current ? `linear-gradient(to bottom, ${lineColor}, #EDEFF2)` : "#EDEFF2" }} />}
                </div>
                <div className={`flex-1 min-w-0 ${isLast ? "pb-0" : "pb-5"}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div><div className="text-[13px] font-semibold" style={{ color: step.done || step.current ? "#1A1D21" : "#CED4DA" }}>{step.label}</div><div className="text-[12px] mt-0.5 leading-relaxed" style={{ color: step.done || step.current ? "#495057" : "#DEE2E6" }}>{step.desc}</div></div>
                    <div className="text-[11px] font-medium whitespace-nowrap mt-0.5 shrink-0" style={{ color: step.done ? "#868E96" : "#DEE2E6" }}>{step.time}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-card">
          <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Complaint Details</div>
          <div className="space-y-2.5">
            {[["Provider", data.provider], ["Category", data.category], ["Filed", data.filed], ["Reference", data.id]].map(([label, val]) => (
              <div key={label} className="flex justify-between text-sm"><span className="text-gray-500">{label}</span><span className="font-medium text-gray-900">{val}</span></div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-card">
          <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Need Help?</div>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">Questions about your complaint? Contact BOCRA Consumer Affairs.</p>
          <div className="flex flex-col gap-1.5 text-sm"><span className="text-gray-700 font-medium">+267 395 7755</span><span className="text-bocra-blue font-medium">complaints@bocra.org.bw</span></div>
        </div>
      </div>
    </>
  );
}

function getRelativeTime(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diffMs = now - then;
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}
