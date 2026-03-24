import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";
import { checkRateLimit } from "@/lib/rate-limit";

const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/png"];
const MAX_SIZE_BYTES = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const throttle = checkRateLimit(`complaints-evidence:${ip}`, 20, 60_000);
    if (!throttle.allowed) {
      return NextResponse.json({ error: "Too many upload requests. Please try again shortly." }, { status: 429 });
    }

    const { complaintId, fileName, fileType, fileSize } = await req.json();

    if (!complaintId || !/^CMP-\d{4}-\d{4,}$/.test(complaintId)) {
      return NextResponse.json({ error: "Valid complaint ID is required." }, { status: 400 });
    }
    if (!fileName || typeof fileName !== "string") {
      return NextResponse.json({ error: "File name is required." }, { status: 400 });
    }
    if (!ACCEPTED_TYPES.includes(fileType)) {
      return NextResponse.json({ error: "Unsupported file type." }, { status: 400 });
    }
    if (!fileSize || fileSize > MAX_SIZE_BYTES) {
      return NextResponse.json({ error: "File exceeds 10MB limit." }, { status: 400 });
    }

    const supabase = createServerClient();
    const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
    const objectPath = `${complaintId}/${Date.now()}-${safeName}`;

    const { data: signedData, error: signedErr } = await supabase.storage
      .from("complaint-evidence")
      .createSignedUploadUrl(objectPath);

    if (signedErr || !signedData?.signedUrl || !signedData?.token) {
      return NextResponse.json({ error: "Unable to initialize upload." }, { status: 500 });
    }

    const { error: insertErr } = await supabase.from("complaint_evidence").insert({
      complaint_id: complaintId,
      file_name: safeName,
      file_path: objectPath,
      file_type: fileType,
      file_size: fileSize,
      uploaded_by: "citizen",
    });

    if (insertErr) {
      console.error("Evidence insert error:", insertErr);
    }

    return NextResponse.json({
      path: objectPath,
      token: signedData.token,
      signedUrl: signedData.signedUrl,
    });
  } catch (error) {
    console.error("Evidence API error:", error);
    return NextResponse.json({ error: "Unable to process evidence upload." }, { status: 500 });
  }
}
