import { TowerIcon, GlobeIcon, LicenseIcon, ArrowRightIcon } from "@/components/icons";

const news = [
  { cat: "Public Notice", date: "18 Mar 2026", title: "BOCRA Website Development Hackathon", blurb: "Youth teams invited to reimagine BOCRA's digital platform.", bg: "from-bocra-blue-light to-gray-100", Icon: TowerIcon, iconColor: "#0077B6" },
  { cat: "Press Release", date: "15 Mar 2026", title: "SADC States Collaborate to Reduce Roaming Tariffs", blurb: "Botswana leads initiative with five member states.", bg: "from-bocra-green-light to-gray-100", Icon: GlobeIcon, iconColor: "#00A651" },
  { cat: "Media Release", date: "12 Mar 2026", title: "Reduced Data Prices for BTC Approved", blurb: "New pricing framework benefits consumers.", bg: "from-bocra-magenta-light to-gray-100", Icon: LicenseIcon, iconColor: "#E31B6D" },
];

export default function NewsGrid() {
  return (
    <section className="max-w-[980px] mx-auto px-4 md:px-5 py-12">
      <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
        <h2 className="text-xl md:text-[22px] font-bold text-gray-900 tracking-tight">Latest News</h2>
        <button className="text-[13px] text-bocra-blue font-semibold inline-flex items-center gap-1 hover:text-[#006298] transition-colors">
          View All <ArrowRightIcon color="#0077B6" size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.map((n, i) => (
          <div key={i} className="bg-white rounded-card border border-gray-100 overflow-hidden cursor-pointer transition-all hover:shadow-card-hover group grid grid-cols-[80px_1fr] md:grid-cols-1">
            <div className={`h-full md:h-[88px] bg-gradient-to-br ${n.bg} flex items-center justify-center rounded-l-card md:rounded-l-none md:rounded-t-card`}>
              <div className="opacity-35"><n.Icon color={n.iconColor} size={32} /></div>
            </div>
            <div className="p-3.5 md:p-4">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-bocra-blue-light text-bocra-blue">{n.cat}</span>
                <span className="text-[11px] text-gray-400">{n.date}</span>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 leading-snug mb-1">{n.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{n.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
