import { TowerIcon, RadioIcon, MailboxIcon, WifiIcon } from "@/components/icons";

const sectors = [
  { icon: TowerIcon, label: "Telecommunications", color: "#0077B6", desc: "Regulating mobile, fixed-line and satellite communications" },
  { icon: RadioIcon, label: "Broadcasting", color: "#00A651", desc: "Licensing and monitoring radio and TV services" },
  { icon: MailboxIcon, label: "Postal Services", color: "#E31B6D", desc: "Overseeing postal and courier service quality" },
  { icon: WifiIcon, label: "Internet & ICT", color: "#0C2340", desc: "Ensuring accessible, affordable connectivity for all" },
];

export default function SectorGrid() {
  return (
    <section className="max-w-[980px] mx-auto px-4 md:px-5 py-12">
      <h2 className="text-xl md:text-[22px] font-bold text-gray-900 tracking-tight">
        What We Regulate
      </h2>
      <p className="text-sm text-gray-500 mt-1.5 mb-6 max-w-[480px]">
        BOCRA oversees Botswana&apos;s communications landscape across four key sectors
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3.5">
        {sectors.map((s) => (
          <div key={s.label} className="bg-white rounded-card p-4 md:p-5 border border-gray-100 text-center transition-all hover:shadow-card-hover">
            <div
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mx-auto mb-3"
              style={{ background: s.color + "0D" }}
            >
              <s.icon color={s.color} size={28} />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">{s.label}</h4>
            <p className="text-xs text-gray-500 leading-snug hidden md:block">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
