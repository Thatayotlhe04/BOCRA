import Link from "next/link";
import { FileIcon, ShieldIcon, ArrowRightIcon } from "@/components/icons";

const docs = [
  { title: "Enforcement Guidelines v3", meta: "PDF · 2.1 MB", cat: "Regulation" },
  { title: "Q4 2025 Market Report", meta: "PDF · 4.8 MB", cat: "Report" },
  { title: "Spectrum Allocation Plan 2026", meta: "PDF · 1.3 MB", cat: "Legislation" },
  { title: "Consumer Protection Rules", meta: "PDF · 890 KB", cat: "Regulation" },
];

const alerts = [
  { sev: "HIGH", title: "Phishing campaign targeting .BW domain holders" },
  { sev: "MED", title: "Router firmware update recommended" },
  { sev: "LOW", title: "SMS scam awareness notice" },
];

const sevStyles: Record<string, string> = {
  HIGH: "bg-bocra-magenta-light text-bocra-magenta",
  MED: "bg-bocra-yellow-light text-[#996B00]",
  LOW: "bg-bocra-blue-light text-bocra-blue",
};

export default function DocsAndAlerts() {
  return (
    <section className="max-w-[980px] mx-auto px-4 md:px-5 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
        <div className="bg-white rounded-card border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-bold text-gray-900">Recent Documents</h3>
            <button className="text-xs text-bocra-blue font-semibold inline-flex items-center gap-1 hover:text-[#006298] transition-colors group">
              View All <ArrowRightIcon color="#0077B6" size={12} />
            </button>
          </div>
          {docs.map((d, i) => (
            <div key={i} className={`flex items-center gap-3 py-2.5 cursor-pointer transition-all hover:translate-x-1 hover:opacity-90 ${i < docs.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className="w-[34px] h-[34px] rounded-lg bg-bocra-magenta-light flex items-center justify-center shrink-0">
                <FileIcon color="#E31B6D" size={15} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium text-gray-900 truncate">{d.title}</div>
                <div className="text-[11px] text-gray-400 mt-px">{d.meta}</div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 shrink-0">{d.cat}</span>
            </div>
          ))}
        </div>
        <Link
          href="/portals/cybersecurity"
          className="group block bg-gradient-to-br from-[#1a0a14] to-[#2d0a1a] rounded-card border border-[#3b1b2a] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(45,10,26,0.35)]"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-[34px] h-[34px] rounded-lg bg-bocra-magenta/20 flex items-center justify-center shrink-0">
              <ShieldIcon color="#FFD3E7" size={16} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Cybersecurity</h3>
              <p className="text-[11px] text-white/50">Tap to view full advisories and response guidance</p>
            </div>
          </div>
          <div className="space-y-2.5">
            {alerts.map((a, i) => (
              <div key={i} className="flex gap-2.5 items-start bg-white/[0.04] border border-white/[0.06] rounded-lg p-2.5 transition-colors group-hover:bg-white/[0.06]">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 mt-0.5 ${sevStyles[a.sev]}`}>{a.sev}</span>
                <div className="text-[12px] text-white/85 leading-snug">{a.title}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-bocra-yellow group-hover:text-white transition-colors">
            Explore cybersecurity portal <ArrowRightIcon color="#FFD100" size={12} />
          </div>
        </Link>
      </div>
    </section>
  );
}
