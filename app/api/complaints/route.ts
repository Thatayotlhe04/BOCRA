// TODO Day 2: Wire to Supabase
// POST - create complaint
// GET - list/filter complaints

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Complaints API — not yet implemented" });
}

export async function POST() {
  return NextResponse.json({ message: "Create complaint — not yet implemented" }, { status: 501 });
}
