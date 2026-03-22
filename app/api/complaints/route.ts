import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";

// POST — Submit a new complaint
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { provider, category, description, incident_date, contact_phone, contact_email } = body;

    // Validate required fields
    if (!provider || !category || !description) {
      return NextResponse.json({ error: "Provider, category, and description are required" }, { status: 400 });
    }
    if (description.length < 10) {
      return NextResponse.json({ error: "Description must be at least 10 characters" }, { status: 400 });
    }
    if (description.length > 5000) {
      return NextResponse.json({ error: "Description must be under 5000 characters" }, { status: 400 });
    }

    const supabase = createServerClient();

    // Generate sequential complaint ID via database function
    const { data: idData, error: idError } = await supabase.rpc("generate_complaint_id");

    let complaintId: string;
    if (idError || !idData) {
      // Fallback if RPC isn't available yet
      complaintId = `CMP-2026-${String(Math.floor(1000 + Math.random() * 9000))}`;
    } else {
      complaintId = idData;
    }

    // Insert complaint
    const { data: complaint, error: insertError } = await supabase
      .from("complaints")
      .insert({
        id: complaintId,
        provider: provider.trim(),
        category: category.trim(),
        description: description.trim(),
        incident_date: incident_date || null,
        contact_phone: contact_phone?.trim() || null,
        contact_email: contact_email?.trim().toLowerCase() || null,
        status: "submitted",
      })
      .select()
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      return NextResponse.json({ error: "Failed to create complaint" }, { status: 500 });
    }

    // Create initial timeline entry
    await supabase.from("complaint_timeline").insert({
      complaint_id: complaintId,
      status: "submitted",
      label: "Complaint Submitted",
      description: "Your complaint has been received and registered in the BOCRA system.",
    });

    return NextResponse.json({ id: complaintId, complaint }, { status: 201 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET — Lookup a single complaint by exact ID
// No "list all" endpoint — that would be a data leak
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Exact ID is required — you cannot browse complaints
    if (!id || !id.startsWith("CMP-")) {
      return NextResponse.json({ error: "A valid complaint ID is required (e.g. CMP-2026-0001)" }, { status: 400 });
    }

    const supabase = createServerClient();

    // Fetch complaint by exact ID
    const { data: complaint, error } = await supabase
      .from("complaints")
      .select("id, provider, category, description, status, incident_date, contact_email, created_at, updated_at")
      .eq("id", id)
      .single();

    if (error || !complaint) {
      return NextResponse.json({ error: "Complaint not found" }, { status: 404 });
    }

    // Fetch timeline
    const { data: timeline } = await supabase
      .from("complaint_timeline")
      .select("id, status, label, description, created_at")
      .eq("complaint_id", id)
      .order("created_at", { ascending: true });

    // Mask sensitive fields — only show partial email
    const masked = {
      ...complaint,
      contact_email: complaint.contact_email
        ? complaint.contact_email.replace(/(.{2}).+(@.+)/, "$1***$2")
        : null,
    };

    return NextResponse.json({ complaint: masked, timeline: timeline || [] });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
