import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Virtual Assistant endpoint — enhanced responses coming soon" }, { status: 501 });
}
