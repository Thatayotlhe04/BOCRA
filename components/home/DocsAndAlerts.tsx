import { FileIcon, ShieldIcon, ArrowRightIcon } from "@/components/icons";

const docs = [
  { title: "Enforcement Guidelines v3", meta: "PDF · 2.1 MB", cat: "Regulation" },
  { title: "Q4 2025 Market Report", meta: "PDF · 4.8 MB", cat: "Report" },
  { title: "Spectrum Allocation Plan 2026", meta: "PDF · 1.3 MB", cat: "Legislation" },
  { title: "Consumer Protection Rules", meta: "PDF · 890 KB", cat: "Regulation" },
];

const alerts = [
  { sev: "HIGH", title: "Phishing Campaign Targeting .BW Domain Holders", date: "17 Mar 2026" },
  { sev: "MED", title: "Router Firmware Vulnerability — Update Recommended", date: "14 Mar 2026" },
  { sev: "LOW", title: "SMS Scam Awareness Advisory", date: "10 Mar 2026" },
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
        {/* Documents */}
        <div className="bg-white rounded-card border border-gray-100 p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-bold text-gray-900">Recent Documents</h3>
            <button className="text-xs text-bocra-blue font-semibold inline-flex items-center gap-1 hover:text-[#006298] transition-colors">
              View All <ArrowRightIcon color="#0077B6" size={12} />
            </button>
          </div>
          {docs.map((d, i) => (
            <div key={i} className={`flex items-center gap-3 py-2.5 cursor-pointer hover:opacity-80 transition-opacity ${i < docs.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className="w-[34px] h-[34px] rounded-lg bg-bocra-magenta-light flex items-center justify-center shrink-0">
                <FileIcon color="#E31B6D" size={15} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium text-gray-900 truncate">{d.title}</div>
                <div className="text-[11px] text-gray-400 mt-px">{d.meta}</div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 shrink-0">
                {d.cat}
              </span>
            </div>
          ))}
        </div>

        {/* Cybersecurity Advisories */}
        <div className="bg-white rounded-card border border-gray-100 p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-[30px] h-[30px] rounded-lg bg-bocra-magenta-light flex items-center justify-center shrink-0">
              <ShieldIcon color="#E31B6D" size={15} />
            </div>
            <h3 className="text-base font-bold text-gray-900">Cybersecurity Advisories</h3>
          </div>
          {alerts.map((a, i) => (
            <div key={i} className={`flex gap-3 py-3 items-start ${i < alerts.length - 1 ? "border-b border-gray-100" : ""}`}>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 mt-0.5 ${sevStyles[a.sev]}`}>
                {a.sev}
              </span>
              <div>
                <div className="text-[13px] font-medium text-gray-900 leading-snug">{a.title}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{a.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
