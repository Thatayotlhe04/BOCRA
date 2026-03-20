"use client";

import Link from "next/link";
import { CheckIcon, ClockIcon } from "@/components/icons";

// Mock data — will be replaced with Supabase queries
const mockData: Record<string, TrackingData> = {
  "CMP-2026-0341": {
    id: "CMP-2026-0341", provider: "Orange Botswana", category: "Billing & Charges",
    status: "Under Investigation", filed: "8 Mar 2026",
    timeline: [
      { date: "8 Mar 2026", event: "Complaint received and registered", done: true },
      { date: "10 Mar 2026", event: "Acknowledgment sent to complainant", done: true },
      { date: "12 Mar 2026", event: "Forwarded to Orange Botswana for response", done: true },
      { date: "19 Mar 2026", event: "Provider response received — under review", done: false, current: true },
      { date: "—", event: "Final resolution and case closure", done: false },
    ],
  },
  "CMP-2026-0298": {
    id: "CMP-2026-0298", provider: "Mascom Wireless", category: "Network Coverage",
    status: "Resolved", filed: "1 Mar 2026",
    timeline: [
      { date: "1 Mar 2026", event: "Complaint received and registered", done: true },
      { date: "3 Mar 2026", event: "Acknowledgment sent to complainant", done: true },
      { date: "5 Mar 2026", event: "Forwarded to Mascom Wireless for response", done: true },
      { date: "11 Mar 2026", event: "Provider committed to infrastructure upgrade", done: true },
      { date: "15 Mar 2026", event: "Resolution accepted — case closed", done: true },
    ],
  },
};

interface TimelineEntry {
  date: string;
  event: string;
  done: boolean;
  current?: boolean;
}

interface TrackingData {
  id: string;
  provider: string;
  category: string;
  status: string;
  filed: string;
  timeline: TimelineEntry[];
}

export default function ComplaintTracker({ id }: { id: string }) {
  const data = mockData[id];
  const isResolved = data?.status === "Resolved";
  const lineColor = isResolved ? "#00A651" : "#0077B6";

  if (!data) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Complaint Not Found</h2>
        <p className="text-sm text-gray-500 mb-6">No complaint exists with ID: {id}</p>
        <Link
          href="/complaints"
          className="bg-bocra-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold inline-block"
        >
          Back to Complaints
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link
        href="/complaints"
        className="inline-block mb-5 bg-transparent border-[1.5px] border-gray-200 text-gray-600 px-4 py-1.5 rounded-lg text-[13px] font-semibold hover:bg-gray-50 transition-all"
      >
        ← Back to Complaints
      </Link>

      <div className="bg-white rounded-card border border-gray-100">
        {/* Header */}
        <div className="p-5 md:p-6">
          <div className="flex justify-between items-start gap-3 flex-wrap">
            <div>
              <div className="text-[19px] font-bold text-gray-900 font-mono tracking-wide">{data.id}</div>
              <div className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                vs. {data.provider} · {data.category} · Filed {data.filed}
              </div>
            </div>
            <span
              className="text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wide shrink-0"
              style={{
                background: isResolved ? "#E8F9EF" : "#EAF5FD",
                color: isResolved ? "#00A651" : "#0077B6",
              }}
            >
              {data.status.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <div className="ml-1.5 pl-5 border-l-[2.5px]" style={{ borderColor: lineColor }}>
            {data.timeline.map((t, i) => (
              <div key={i} className="relative" style={{ paddingBottom: i < data.timeline.length - 1 ? 22 : 0 }}>
                <div
                  className="absolute -left-[27px] top-1 w-3 h-3 rounded-full border-[2.5px] transition-all"
                  style={{
                    background: t.done ? lineColor : "#fff",
                    borderColor: t.done ? lineColor : "#CED4DA",
                    boxShadow: t.current ? `0 0 0 4px ${lineColor}18` : "none",
                  }}
                />
                <div className="text-[11px] font-medium text-gray-400">{t.date}</div>
                <div
                  className="text-sm leading-relaxed mt-0.5"
                  style={{
                    color: t.done || t.current ? "#1A1D21" : "#ADB5BD",
                    fontWeight: t.current ? 600 : 400,
                  }}
                >
                  {t.event}
                </div>
              </div>
            ))}
          </div>

          {/* Status message */}
          {!isResolved && (
            <div className="mt-5 p-3.5 rounded-[10px] bg-bocra-blue-light text-[#005a8c] text-[13px] flex gap-2.5 items-center leading-relaxed">
              <div className="shrink-0 flex"><ClockIcon color="#0077B6" size={18} /></div>
              <div><strong>Estimated Resolution:</strong> Within 14 business days from filing</div>
            </div>
          )}
          {isResolved && (
            <div className="mt-5 p-3.5 rounded-[10px] bg-bocra-green-light text-[#1a6b37] text-[13px] flex gap-2.5 items-center leading-relaxed">
              <div className="shrink-0 flex"><CheckIcon color="#00A651" size={18} /></div>
              <div><strong>Case Closed.</strong> Contact BOCRA if you need to reopen this complaint.</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
