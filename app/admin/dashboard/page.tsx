"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase";
import { ShieldIcon, ClockIcon, CheckIcon, ComplaintIcon } from "@/components/icons";

interface Stats {
  total: number;
  byStatus: Record<string, number>;
  byProvider: Record<string, number>;
  byCategory: Record<string, number>;
  dailyCounts: { date: string; count: number }[];
  recent: { id: string; provider: string; category: string; status: string; created_at: string }[];
  resolutionRate: number;
}

const statusColors: Record<string, string> = {
  submitted: "#FFD100", acknowledged: "#0077B6", investigating: "#E31B6D",
  officer: "#9333EA", resolved: "#00A651", closed: "#6B7280",
};
const statusLabels: Record<string, string> = {
  submitted: "Submitted", acknowledged: "Acknowledged", investigating: "Investigating",
  officer: "With Officer", resolved: "Resolved", closed: "Closed",
};
const statusFlow = ["submitted", "acknowledged", "investigating", "officer", "resolved", "closed"];

const demoData: Stats = {
  total: 47,
  byStatus: { submitted: 8, acknowledged: 5, investigating: 12, officer: 6, resolved: 14, closed: 2 },
  byProvider: { "Mascom Wireless": 15, "Orange Botswana": 13, "BTC": 11, "BotswanaPost": 5, "Other": 3 },
  byCategory: { "Billing & Charges": 14, "Service Quality": 10, "Network Coverage": 9, "Number Porting": 6, "Contract Dispute": 5, "Data Privacy": 3 },
  dailyCounts: [
    { date: "16 Mar", count: 3 }, { date: "17 Mar", count: 5 }, { date: "18 Mar", count: 7 },
    { date: "19 Mar", count: 4 }, { date: "20 Mar", count: 8 }, { date: "21 Mar", count: 6 }, { date: "22 Mar", count: 9 },
  ],
  recent: [
    { id: "CMP-2026-0047", provider: "Mascom Wireless", category: "Billing & Charges", status: "submitted", created_at: new Date().toISOString() },
    { id: "CMP-2026-0046", provider: "Orange Botswana", category: "Network Coverage", status: "investigating", created_at: new Date(Date.now() - 86400000).toISOString() },
    { id: "CMP-2026-0045", provider: "BTC", category: "Service Quality", status: "acknowledged", created_at: new Date(Date.now() - 172800000).toISOString() },
    { id: "CMP-2026-0044", provider: "BotswanaPost", category: "Contract Dispute", status: "resolved", created_at: new Date(Date.now() - 259200000).toISOString() },
    { id: "CMP-2026-0043", provider: "Mascom Wireless", category: "Data Privacy", status: "officer", created_at: new Date(Date.now() - 345600000).toISOString() },
  ],
  resolutionRate: 34,
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      setAuthed(true);
      load();
    };
    checkAuth();
  }, [router]);

  const load = async () => {
    try {
      const res = await fetch("/api/admin");
      if (res.ok) { const data = await res.json(); setStats(data); }
    } catch { /* use demo data */ }
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdating(id);
    try {
      const res = await fetch("/api/admin", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        // Refresh data
        await load();
      }
    } catch { /* silent */ }
    setUpdating(null);
  };

  const data = stats || demoData;
  const maxDaily = Math.max(...data.dailyCounts.map((d) => d.count), 1);
  const activeCount = (data.byStatus["submitted"] || 0) + (data.byStatus["acknowledged"] || 0) + (data.byStatus["investigating"] || 0) + (data.byStatus["officer"] || 0);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  if (!authed) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-[3px] border-gray-200 border-t-bocra-blue rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-400">Verifying access...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-bocra-navy to-[#163158] py-7 px-4">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="text-xs text-white/40 mb-1"><Link href="/" className="underline hover:text-white/60">Home</Link> / Admin</div>
            <h1 className="text-xl md:text-[24px] font-bold text-white">Complaints Dashboard</h1>
            <p className="text-[12px] text-white/40 mt-0.5">Real-time analytics · BOCRA Internal</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-bocra-green animate-pulse" />
            <span className="text-[12px] text-white/50">Live{!stats && " (demo mode)"}</span>
            <button onClick={() => { setLoading(true); load(); }} className="ml-2 text-[11px] text-white/40 bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20 transition-all">Refresh</button>
            <button onClick={handleSignOut} className="text-[11px] text-white/40 bg-white/10 px-3 py-1 rounded-lg hover:bg-bocra-magenta/30 hover:text-white transition-all">Sign Out</button>
          </div>
        </div>
      </section>

      <div className="max-w-[1080px] mx-auto px-4 md:px-5 py-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { icon: ComplaintIcon, iconColor: "#0077B6", bg: "bg-bocra-blue-light", label: "Total", value: data.total, sub: "complaints filed" },
            { icon: ClockIcon, iconColor: "#B8960E", bg: "bg-bocra-yellow-light", label: "Active", value: activeCount, sub: "in progress", valueColor: "text-bocra-magenta" },
            { icon: CheckIcon, iconColor: "#00A651", bg: "bg-bocra-green-light", label: "Resolved", value: (data.byStatus["resolved"] || 0) + (data.byStatus["closed"] || 0), sub: "cases closed", valueColor: "text-bocra-green" },
            { icon: ShieldIcon, iconColor: "#E31B6D", bg: "bg-bocra-magenta-light", label: "Rate", value: `${data.resolutionRate}%`, sub: "resolution rate" },
          ].map((k) => (
            <div key={k.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-card">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-lg ${k.bg} flex items-center justify-center`}><k.icon color={k.iconColor} size={16} /></div>
                <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{k.label}</span>
              </div>
              <div className={`text-[28px] font-bold ${k.valueColor || "text-gray-900"}`}>{k.value}</div>
              <div className="text-[11px] text-gray-400">{k.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 mb-6">
          {/* 7-Day Chart */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-card">
            <h3 className="text-[14px] font-bold text-gray-900 mb-1">Complaints — Last 7 Days</h3>
            <p className="text-[11px] text-gray-400 mb-5">Daily complaint volume</p>
            <div className="flex items-end gap-2 h-[140px]">
              {data.dailyCounts.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="text-[10px] text-gray-400 font-medium">{d.count}</div>
                  <div className="w-full rounded-t-md transition-all duration-500" style={{ height: `${Math.max((d.count / maxDaily) * 100, 8)}%`, background: "linear-gradient(to top, #0077B6, #0095D9)", opacity: 0.6 + (i * 0.06) }} />
                  <div className="text-[9px] text-gray-400 mt-1">{d.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Breakdown */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-card">
            <h3 className="text-[14px] font-bold text-gray-900 mb-4">By Status</h3>
            <div className="space-y-2.5">
              {Object.entries(data.byStatus).sort(([, a], [, b]) => b - a).map(([status, count]) => {
                const pct = data.total > 0 ? Math.round((count / data.total) * 100) : 0;
                return (
                  <div key={status}>
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="font-medium text-gray-700">{statusLabels[status] || status}</span>
                      <span className="text-gray-400">{count} ({pct}%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: statusColors[status] || "#6B7280" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          {/* By Provider */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-card">
            <h3 className="text-[14px] font-bold text-gray-900 mb-4">By Provider</h3>
            <div className="space-y-2">
              {Object.entries(data.byProvider).sort(([, a], [, b]) => b - a).map(([provider, count]) => (
                <div key={provider} className="flex items-center gap-3">
                  <span className="text-[12px] text-gray-700 font-medium w-[140px] shrink-0 truncate">{provider}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full rounded-full bg-bocra-magenta/70" style={{ width: `${data.total > 0 ? (count / data.total) * 100 : 0}%` }} /></div>
                  <span className="text-[11px] text-gray-400 w-8 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>
          {/* By Category */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-card">
            <h3 className="text-[14px] font-bold text-gray-900 mb-4">By Category</h3>
            <div className="space-y-2">
              {Object.entries(data.byCategory).sort(([, a], [, b]) => b - a).map(([cat, count]) => (
                <div key={cat} className="flex items-center gap-3">
                  <span className="text-[12px] text-gray-700 font-medium w-[140px] shrink-0 truncate">{cat}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full rounded-full bg-bocra-blue/70" style={{ width: `${data.total > 0 ? (count / data.total) * 100 : 0}%` }} /></div>
                  <span className="text-[11px] text-gray-400 w-8 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Complaints — with status update */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-[14px] font-bold text-gray-900">Manage Complaints</h3>
            <span className="text-[11px] text-gray-400">Click status to update</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-5 py-2.5 text-gray-500 font-semibold">ID</th>
                  <th className="px-5 py-2.5 text-gray-500 font-semibold">Provider</th>
                  <th className="px-5 py-2.5 text-gray-500 font-semibold hidden md:table-cell">Category</th>
                  <th className="px-5 py-2.5 text-gray-500 font-semibold">Status</th>
                  <th className="px-5 py-2.5 text-gray-500 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.recent.map((c) => {
                  const currentIdx = statusFlow.indexOf(c.status);
                  const nextStatus = currentIdx < statusFlow.length - 1 ? statusFlow[currentIdx + 1] : null;

                  return (
                    <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3">
                        <Link href={`/complaints/track/${c.id}`} className="font-mono font-bold text-bocra-blue hover:underline">{c.id}</Link>
                      </td>
                      <td className="px-5 py-3 text-gray-700">{c.provider}</td>
                      <td className="px-5 py-3 text-gray-500 hidden md:table-cell">{c.category}</td>
                      <td className="px-5 py-3">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold"
                          style={{ background: (statusColors[c.status] || "#6B7280") + "18", color: statusColors[c.status] || "#6B7280" }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusColors[c.status] || "#6B7280" }} />
                          {statusLabels[c.status] || c.status}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        {nextStatus ? (
                          <button
                            onClick={() => updateStatus(c.id, nextStatus)}
                            disabled={updating === c.id}
                            className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-bocra-navy text-white hover:bg-bocra-navy-light transition-all disabled:opacity-50 flex items-center gap-1.5"
                          >
                            {updating === c.id ? (
                              <><span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Updating...</>
                            ) : (
                              <>→ {statusLabels[nextStatus]}</>
                            )}
                          </button>
                        ) : (
                          <span className="text-[11px] text-gray-400">Complete</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-gray-400">
          <ShieldIcon color="#CED4DA" size={14} />
          Protected by Row Level Security · Server-side access via service_role key only
        </div>
      </div>
    </>
  );
}
