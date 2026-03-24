import { NextRequest, NextResponse } from "next/server";
import { getAssistantResponse } from "@/lib/assistant";

type AssistBody = { message?: string };

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AssistBody;
    const message = (body.message || "").trim();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 },
      );
    }

    const response = getAssistantResponse(message);

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("AI endpoint error:", error);
    return NextResponse.json(
      { error: "Unable to process request right now." },
      { status: 500 },
    );
  }
}
