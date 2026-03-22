import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";

// GET — Dashboard stats
export async function GET() {
  try {
    const supabase = createServerClient();
    const { data: complaints, error } = await supabase
      .from("complaints")
      .select("id, provider, category, status, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
    }

    const all = complaints || [];
    const total = all.length;

    const byStatus: Record<string, number> = {};
    for (const c of all) byStatus[c.status] = (byStatus[c.status] || 0) + 1;

    const byProvider: Record<string, number> = {};
    for (const c of all) byProvider[c.provider] = (byProvider[c.provider] || 0) + 1;

    const byCategory: Record<string, number> = {};
    for (const c of all) byCategory[c.category] = (byCategory[c.category] || 0) + 1;

    const now = Date.now();
    const dailyCounts: { date: string; count: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now - i * 86400000);
      const dateStr = d.toISOString().split("T")[0];
      const label = d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
      dailyCounts.push({ date: label, count: all.filter((c) => c.created_at?.startsWith(dateStr)).length });
    }

    const recent = all.slice(0, 10).map((c) => ({
      id: c.id, provider: c.provider, category: c.category, status: c.status, created_at: c.created_at,
    }));

    const resolved = (byStatus["resolved"] || 0) + (byStatus["closed"] || 0);
    const resolutionRate = total > 0 ? Math.round((resolved / total) * 100) : 0;

    return NextResponse.json({ total, byStatus, byProvider, byCategory, dailyCounts, recent, resolutionRate });
  } catch (err) {
    console.error("Admin stats error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PATCH — Update complaint status (admin action)
export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ error: "Complaint ID and status are required" }, { status: 400 });
    }

    const validStatuses = ["submitted", "acknowledged", "investigating", "officer", "resolved", "closed"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const statusLabels: Record<string, string> = {
      submitted: "Complaint Submitted",
      acknowledged: "Complaint Acknowledged",
      investigating: "Under Investigation",
      officer: "Assigned to Compliance Officer",
      resolved: "Complaint Resolved",
      closed: "Case Closed",
    };

    const statusDescs: Record<string, string> = {
      submitted: "Complaint received and registered in the system.",
      acknowledged: "Confirmation sent to the complainant via email and SMS.",
      investigating: "Forwarded to the service provider — awaiting their response.",
      officer: "A BOCRA compliance officer is reviewing the provider's response.",
      resolved: "Final decision issued — case resolved successfully.",
      closed: "Case closed and archived.",
    };

    const supabase = createServerClient();

    // Update status
    const { error: updateError } = await supabase
      .from("complaints")
      .update({ status })
      .eq("id", id);

    if (updateError) {
      return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
    }

    // Add timeline entry
    await supabase.from("complaint_timeline").insert({
      complaint_id: id,
      status,
      label: statusLabels[status] || status,
      description: statusDescs[status] || "Status updated.",
    });

    return NextResponse.json({ success: true, id, status });
  } catch (err) {
    console.error("Admin patch error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
