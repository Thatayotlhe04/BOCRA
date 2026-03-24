import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";
import { checkRateLimit } from "@/lib/rate-limit";

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
  investigating: "Forwarded to the service provider — awaiting response.",
  officer: "A BOCRA compliance officer is reviewing the provider's response.",
  resolved: "Final decision issued — case resolved.",
  closed: "Case has been closed.",
};

// PATCH — Update complaint status
export async function PATCH(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const throttle = checkRateLimit(`complaints-status:${ip}`, 20, 60_000);
    if (!throttle.allowed) {
      return NextResponse.json({ error: "Too many status updates. Please try again shortly." }, { status: 429 });
    }

    const adminKey = process.env.ADMIN_API_KEY;
    const providedKey = req.headers.get("x-admin-key");
    if (process.env.NODE_ENV === "production" && !adminKey) {
      return NextResponse.json({ error: "Server misconfiguration: ADMIN_API_KEY missing." }, { status: 500 });
    }
    if (adminKey && providedKey !== adminKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id, status } = await req.json();
    const actor = req.headers.get("x-admin-user") || "system";

    if (!id || !status) {
      return NextResponse.json({ error: "Complaint ID and status are required" }, { status: 400 });
    }

    const validStatuses = ["submitted", "acknowledged", "investigating", "officer", "resolved", "closed"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const supabase = createServerClient();

    // Update complaint status
    const { error: updateError } = await supabase
      .from("complaints")
      .update({ status })
      .eq("id", id);

    if (updateError) {
      console.error("Update error:", updateError);
      return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
    }

    // Add timeline entry
    await supabase.from("complaint_timeline").insert({
      complaint_id: id,
      status,
      label: statusLabels[status] || status,
      description: statusDescs[status] || `Status updated to ${status}.`,
    });

    // Best-effort audit logging
    const { error: auditError } = await supabase.from("complaint_audit_logs").insert({
      complaint_id: id,
      action: "status_update",
      actor,
      meta: { status },
    });
    if (auditError) {
      console.error("Audit log error:", auditError);
    }

    return NextResponse.json({ success: true, id, status });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
