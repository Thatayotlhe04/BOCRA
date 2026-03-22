import Link from "next/link";
import { FileIcon, ChatIcon, ArrowRightIcon } from "@/components/icons";

const docs = [
  { title: "Enforcement Guidelines v3", meta: "PDF · 2.1 MB", cat: "Regulation", date: "15 Mar 2026" },
  { title: "Q4 2025 Market Report", meta: "PDF · 4.8 MB", cat: "Report", date: "12 Mar 2026" },
  { title: "Spectrum Allocation Plan 2026", meta: "PDF · 1.3 MB", cat: "Legislation", date: "8 Mar 2026" },
  { title: "Consumer Protection Rules", meta: "PDF · 890 KB", cat: "Regulation", date: "5 Mar 2026" },
  { title: "Annual Report 2025", meta: "PDF · 12.4 MB", cat: "Report", date: "28 Feb 2026" },
  { title: "Interconnection Pricing Framework", meta: "PDF · 3.1 MB", cat: "Regulation", date: "20 Feb 2026" },
];

const consultations = [
  { title: "Proposed 5G Spectrum Allocation Framework", status: "Open", deadline: "30 Apr 2026" },
  { title: "Review of Universal Service Fund Guidelines", status: "Open", deadline: "15 Apr 2026" },
  { title: "Updated Consumer Complaint Resolution Process", status: "Closed", deadline: "1 Mar 2026" },
];

export default function DocumentsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 py-9 px-4">
        <div className="max-w-[980px] mx-auto">
          <div className="text-xs text-white/45 mb-2"><Link href="/" className="underline hover:text-white/70 transition-colors">Home</Link> / Documents</div>
          <h1 className="text-xl md:text-[26px] font-bold text-white mb-1.5">Documents & Consultations</h1>
          <p className="text-sm text-white/55 max-w-[500px] leading-relaxed">Legislation, reports, regulatory publications, and public input opportunities</p>
        </div>
      </section>
      <div className="max-w-[980px] mx-auto px-4 md:px-5 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-gray-900">Recent Documents</h3>
              <div className="flex gap-1.5">{["All", "Regulation", "Report", "Legislation"].map((f) => (<button key={f} className={`px-3 py-1 rounded-full text-[11px] font-semibold ${f === "All" ? "bg-bocra-navy text-white" : "bg-gray-100 text-gray-500"}`}>{f}</button>))}</div>
            </div>
            <div className="bg-white rounded-card border border-gray-100">
              {docs.map((d, i) => (
                <div key={i} className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-all ${i < docs.length - 1 ? "border-b border-gray-50" : ""}`}>
                  <div className="w-10 h-10 rounded-lg bg-bocra-magenta-light flex items-center justify-center shrink-0"><FileIcon color="#E31B6D" size={18} /></div>
                  <div className="flex-1 min-w-0"><div className="text-[13px] font-medium text-gray-900 truncate">{d.title}</div><div className="text-[11px] text-gray-400 mt-px">{d.meta} · {d.date}</div></div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 shrink-0">{d.cat}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4"><ChatIcon color="#0077B6" size={18} /><h3 className="text-base font-bold text-gray-900">Public Consultations</h3></div>
            <div className="space-y-3">
              {consultations.map((c, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 cursor-pointer hover:shadow-card-hover transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${c.status === "Open" ? "bg-bocra-green-light text-[#1a6b37]" : "bg-gray-100 text-gray-500"}`}>{c.status}</span>
                    <span className="text-[11px] text-gray-400">Deadline: {c.deadline}</span>
                  </div>
                  <h4 className="text-[13px] font-semibold text-gray-900 leading-snug">{c.title}</h4>
                  {c.status === "Open" && <button className="mt-3 text-[12px] text-bocra-blue font-semibold inline-flex items-center gap-1 hover:text-[#006298] transition-colors">Submit Feedback <ArrowRightIcon color="#0077B6" size={12} /></button>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
