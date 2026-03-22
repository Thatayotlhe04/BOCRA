import Link from "next/link";
import { ShieldIcon } from "@/components/icons";

const advisories = [
  { sev: "HIGH", title: "Phishing Campaign Targeting .BW Domain Holders", date: "17 Mar 2026", desc: "A coordinated phishing campaign is targeting registered .bw domain holders with fraudulent renewal notices." },
  { sev: "HIGH", title: "Critical Vulnerability in Popular Router Firmware", date: "15 Mar 2026", desc: "A remote code execution vulnerability has been discovered in several common router models used in Botswana." },
  { sev: "MED", title: "Router Firmware Vulnerability — Update Recommended", date: "14 Mar 2026", desc: "Several router manufacturers have released firmware updates addressing security vulnerabilities." },
  { sev: "MED", title: "Increase in SIM Swap Fraud Cases", date: "11 Mar 2026", desc: "BOCRA has noted an increase in reported SIM swap fraud cases across all mobile networks." },
  { sev: "LOW", title: "SMS Scam Awareness Advisory", date: "10 Mar 2026", desc: "Citizens are advised to be cautious of SMS messages claiming to offer government grants or prizes." },
  { sev: "LOW", title: "Public Wi-Fi Safety Reminder", date: "6 Mar 2026", desc: "Guidance on staying safe when using public Wi-Fi hotspots in malls and public spaces." },
];

const sevStyles: Record<string, { bg: string; text: string; border: string }> = {
  HIGH: { bg: "bg-bocra-magenta-light", text: "text-bocra-magenta", border: "border-l-bocra-magenta" },
  MED: { bg: "bg-bocra-yellow-light", text: "text-[#996B00]", border: "border-l-bocra-yellow" },
  LOW: { bg: "bg-bocra-blue-light", text: "text-bocra-blue", border: "border-l-bocra-blue" },
};

export default function CybersecurityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0a14] to-[#2d0a1a] py-9 px-4">
        <div className="max-w-[980px] mx-auto">
          <div className="text-xs text-white/45 mb-2"><Link href="/" className="underline hover:text-white/70 transition-colors">Home</Link> / Cybersecurity</div>
          <div className="flex items-center gap-3 mb-1.5"><ShieldIcon color="#E31B6D" size={24} /><h1 className="text-xl md:text-[26px] font-bold text-white">Cybersecurity Advisories</h1></div>
          <p className="text-sm text-white/55 max-w-[500px] leading-relaxed">Real-time security alerts and threat advisories for Botswana</p>
        </div>
      </section>
      <div className="max-w-[780px] mx-auto px-4 md:px-5 py-8">
        <div className="flex gap-2 mb-5 flex-wrap">
          {["All", "HIGH", "MED", "LOW"].map((f) => (
            <button key={f} className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all ${f === "All" ? "bg-bocra-navy text-white" : "bg-white border border-gray-200 text-gray-500 hover:border-gray-300"}`}>{f}</button>
          ))}
        </div>
        <div className="space-y-3">
          {advisories.map((a, i) => {
            const sev = sevStyles[a.sev];
            return (
              <div key={i} className={`bg-white rounded-xl border border-gray-100 border-l-4 ${sev.border} p-5 cursor-pointer hover:shadow-card-hover transition-all`}>
                <div className="flex items-start gap-3">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded shrink-0 mt-0.5 ${sev.bg} ${sev.text}`}>{a.sev}</span>
                  <div><h4 className="text-[14px] font-semibold text-gray-900 mb-1">{a.title}</h4><p className="text-[13px] text-gray-500 leading-relaxed mb-2">{a.desc}</p><span className="text-[11px] text-gray-400">{a.date}</span></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
