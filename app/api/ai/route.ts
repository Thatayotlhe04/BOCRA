// TODO Day 3+: Wire BOCRA AI to Gemini / OpenAI
// POST - send message, get AI response

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "BOCRA AI endpoint — not yet implemented" }, { status: 501 });
}
