import { FileIcon, ArrowRightIcon } from "@/components/icons";

const docs = [
  { title: "Enforcement Guidelines v3", meta: "PDF · 2.1 MB", cat: "Regulation" },
  { title: "Q4 2025 Market Report", meta: "PDF · 4.8 MB", cat: "Report" },
  { title: "Spectrum Allocation Plan 2026", meta: "PDF · 1.3 MB", cat: "Legislation" },
  { title: "Consumer Protection Rules", meta: "PDF · 890 KB", cat: "Regulation" },
];

export default function DocsAndAlerts() {
  return (
    <section className="max-w-[980px] mx-auto px-4 md:px-5 pb-12">
      <div className="grid grid-cols-1 gap-4 md:gap-5">
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
      </div>
    </section>
  );
}
