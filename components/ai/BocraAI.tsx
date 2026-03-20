"use client";

import { useState, useEffect, useRef } from "react";
import { BotIcon, XIcon, SendIcon } from "@/components/icons";

interface Message {
  from: "bot" | "user";
  text: string;
}

const suggestions = [
  "How do I file a complaint?",
  "Check my license status",
  "What is Type Approval?",
  "Contact BOCRA",
];

const canned: Record<string, string> = {
  complaint: "To file a complaint, go to our Complaints page and click 'File New Complaint'. You'll be guided through a simple 4-step process. You can also track existing complaints using your tracking ID (e.g. CMP-2026-0341).",
  license: "You can verify any license through our Licensing Portal using the license number. To apply for a new license, visit the Licensing page and select 'Apply for License'. Processing typically takes 14-21 business days.",
  "type approval": "Type Approval is BOCRA's process for certifying telecommunications equipment for use in Botswana. All communications devices must be approved before they can be sold or operated in the country.",
  contact: "You can reach BOCRA at:\n\nPhone: +267 395 7755\nEmail: info@bocra.org.bw\nAddress: Plot 50671, Independence Avenue, Gaborone\n\nOffice hours: Monday–Friday, 07:30–16:30 CAT",
};

const defaultReply = "Thank you for your question. In the full implementation, I'll be powered by AI to provide real-time answers about BOCRA's services, regulations, and processes. For now, please navigate using the menu above or contact us at info@bocra.org.bw.";

export default function BocraAI() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([
    { from: "bot", text: "Dumelang! I'm BOCRA AI, your digital assistant. I can help with licensing queries, complaint status, regulatory information, and more. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = (text?: string) => {
    const q = (text || input).trim();
    if (!q) return;

    setMsgs((p) => [...p, { from: "user", text: q }]);
    setInput("");

    setTimeout(() => {
      const lower = q.toLowerCase();
      let reply = defaultReply;
      for (const [key, response] of Object.entries(canned)) {
        if (lower.includes(key)) { reply = response; break; }
      }
      setMsgs((p) => [...p, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[200] bg-gradient-to-r from-bocra-blue to-[#0095D9] border-none rounded-full px-4 md:px-5 py-3 flex items-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(0,119,182,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(0,119,182,0.4)] transition-all duration-200"
        aria-label="BOCRA AI Assistant"
      >
        <span className="flex items-center">
          {open ? <XIcon color="#fff" size={22} /> : <BotIcon color="#fff" size={24} />}
        </span>
        {!open && <span className="text-white text-[13px] font-semibold whitespace-nowrap">BOCRA AI</span>}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 md:bottom-[90px] right-4 md:right-6 z-[200] w-[calc(100vw-32px)] md:w-[380px] max-h-[70vh] md:max-h-[520px] bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-4 bg-bocra-navy text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-white/[0.12] flex items-center justify-center">
                <BotIcon color="#fff" size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold">BOCRA AI</div>
                <div className="text-[11px] text-white/50 flex items-center gap-1.5 mt-px">
                  <span className="w-1.5 h-1.5 rounded-full bg-bocra-green inline-block" />
                  Online
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 rounded-md hover:bg-white/10 transition-all flex">
              <XIcon color="#ADB5BD" size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-[200px] max-h-[300px]">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-2 items-start ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                {m.from === "bot" && (
                  <div className="w-6 h-6 rounded-[7px] bg-bocra-blue-light flex items-center justify-center shrink-0 mt-0.5">
                    <BotIcon color="#0077B6" size={14} />
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[13px] leading-relaxed ${
                    m.from === "bot"
                      ? "bg-gray-50 text-gray-700 rounded-bl-sm"
                      : "bg-bocra-blue text-white rounded-br-sm"
                  }`}
                >
                  {m.text.split("\n").map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          {msgs.length <= 2 && (
            <div className="flex flex-wrap gap-1.5 px-4 pb-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="bg-white border-[1.5px] border-gray-200 px-3 py-1.5 rounded-full text-xs text-gray-700 font-medium hover:border-bocra-blue hover:text-bocra-blue hover:bg-bocra-blue-light transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2 px-4 py-3 border-t border-gray-100 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask BOCRA AI anything..."
              className="flex-1 px-3.5 py-2.5 rounded-[10px] border-[1.5px] border-gray-200 text-[13px] outline-none font-sans text-gray-900 focus:border-bocra-blue transition-all placeholder:text-gray-400"
            />
            <button onClick={() => send()} className="p-1.5 flex items-center hover:scale-110 transition-transform">
              <SendIcon color={input.trim() ? "#0077B6" : "#CED4DA"} size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
