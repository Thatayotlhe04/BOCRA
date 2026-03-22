"use client";

import { useState, useEffect, useRef } from "react";
import { XIcon, SendIcon } from "@/components/icons";
import { findBestMatch } from "@/lib/knowledge-base";

interface Message { from: "bot" | "user"; text: string; }

const suggestions = [
  "What is BOCRA?",
  "How do I file a complaint?",
  "What are my consumer rights?",
  "Type Approval process",
  "Contact BOCRA",
];

function BocraDotsIcon({ size = 20 }: { size?: number }) {
  const r = size * 0.22, g = size * 0.06;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx={12 - r - g} cy={12 - r - g} r={r} fill="#0077B6" />
      <circle cx={12 + r + g} cy={12 - r - g} r={r} fill="#00A651" />
      <circle cx={12 - r - g} cy={12 + r + g} r={r} fill="#E31B6D" />
      <circle cx={12 + r + g} cy={12 + r + g} r={r} fill="#FFD100" />
    </svg>
  );
}

export default function BocraAI() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([
    { from: "bot", text: "Dumelang! 👋 I'm the BOCRA Virtual Assistant. I can help with complaints, licensing, .BW domains, type approval, cybersecurity, consumer rights, and more.\n\nWhat would you like to know?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = (text?: string) => {
    const q = (text || input).trim();
    if (!q) return;
    setMsgs((p) => [...p, { from: "user", text: q }]);
    setInput("");
    setTyping(true);

    // Simulate brief thinking time for realism
    const delay = 400 + Math.random() * 600;
    setTimeout(() => {
      const reply = findBestMatch(q);
      setMsgs((p) => [...p, { from: "bot", text: reply }]);
      setTyping(false);
    }, delay);
  };

  return (
    <>
      {/* FAB */}
      <button onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[200] bg-gradient-to-r from-bocra-navy to-[#163158] border border-white/10 rounded-full px-4 md:px-5 py-3 flex items-center gap-2.5 cursor-pointer shadow-[0_4px_20px_rgba(12,35,64,0.5)] hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(12,35,64,0.6)] transition-all duration-200"
        aria-label="BOCRA Virtual Assistant">
        <span className="flex items-center">{open ? <XIcon color="#fff" size={22} /> : <BocraDotsIcon size={24} />}</span>
        {!open && <span className="text-white text-[13px] font-semibold whitespace-nowrap">Ask BOCRA</span>}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 md:bottom-[90px] right-4 md:right-6 z-[200] w-[calc(100vw-32px)] md:w-[400px] max-h-[70vh] md:max-h-[540px] bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3.5 bg-bocra-navy text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-white/[0.12] flex items-center justify-center">
                <BocraDotsIcon size={18} />
              </div>
              <div>
                <div className="text-[13px] font-semibold">BOCRA Virtual Assistant</div>
                <div className="text-[10px] text-white/40 flex items-center gap-1.5 mt-px">
                  <span className="w-1.5 h-1.5 rounded-full bg-bocra-green inline-block" />
                  Online · Powered by BOCRA knowledge base
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 rounded-md hover:bg-white/10 transition-all flex"><XIcon color="#ADB5BD" size={18} /></button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-[200px] max-h-[340px]">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-2 items-start ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                {m.from === "bot" && (
                  <div className="w-6 h-6 rounded-[7px] bg-bocra-blue-light flex items-center justify-center shrink-0 mt-0.5"><BocraDotsIcon size={14} /></div>
                )}
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[13px] leading-relaxed whitespace-pre-line ${
                  m.from === "bot" ? "bg-gray-50 text-gray-700 rounded-bl-sm" : "bg-bocra-blue text-white rounded-br-sm"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-2 items-start">
                <div className="w-6 h-6 rounded-[7px] bg-bocra-blue-light flex items-center justify-center shrink-0 mt-0.5"><BocraDotsIcon size={14} /></div>
                <div className="bg-gray-50 px-4 py-3 rounded-xl rounded-bl-sm flex gap-1">
                  <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions — show when few messages */}
          {msgs.length <= 2 && (
            <div className="flex flex-wrap gap-1.5 px-4 pb-3">
              {suggestions.map((s) => (
                <button key={s} onClick={() => send(s)}
                  className="bg-white border-[1.5px] border-gray-200 px-3 py-1.5 rounded-full text-[11px] text-gray-600 font-medium hover:border-bocra-blue hover:text-bocra-blue hover:bg-bocra-blue-light transition-all">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2 px-4 py-3 border-t border-gray-100 bg-white">
            <input value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !typing && send()}
              placeholder="Ask about BOCRA services..."
              disabled={typing}
              className="flex-1 px-3.5 py-2.5 rounded-[10px] border-[1.5px] border-gray-200 text-[13px] outline-none font-sans text-gray-900 focus:border-bocra-blue transition-all placeholder:text-gray-400 disabled:opacity-50" />
            <button onClick={() => !typing && send()} disabled={typing}
              className="p-1.5 flex items-center hover:scale-110 transition-transform disabled:opacity-50">
              <SendIcon color={input.trim() && !typing ? "#0077B6" : "#CED4DA"} size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
