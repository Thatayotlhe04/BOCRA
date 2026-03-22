import { TowerIcon, RadioIcon, MailboxIcon, WifiIcon } from "@/components/icons";

const sectors = [
  { icon: TowerIcon, label: "Telecommunications", color: "#0077B6", desc: "Regulating mobile, fixed-line and satellite communications" },
  { icon: RadioIcon, label: "Broadcasting", color: "#00A651", desc: "Licensing and monitoring radio and TV services" },
  { icon: MailboxIcon, label: "Postal Services", color: "#E31B6D", desc: "Overseeing postal and courier service quality" },
  { icon: WifiIcon, label: "Internet & ICT", color: "#FFD100", desc: "Ensuring accessible, affordable connectivity for all" },
];

export default function SectorGrid() {
  return (
    <section className="bg-bocra-navy/[0.97] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
      <div className="max-w-[980px] mx-auto px-4 md:px-5 py-12 md:py-14 relative z-10">
        <h2 className="text-xl md:text-[22px] font-bold text-white tracking-tight">What We Regulate</h2>
        <p className="text-sm text-white/40 mt-1.5 mb-7 max-w-[480px]">BOCRA oversees Botswana&apos;s communications landscape across four key sectors</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {sectors.map((s) => (
            <div key={s.label} className="bg-white/[0.06] backdrop-blur-sm rounded-xl p-5 border border-white/[0.06] text-center transition-all hover:bg-white/[0.1] hover:border-white/[0.1]">
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mx-auto mb-3" style={{ background: s.color + "18" }}>
                <s.icon color={s.color} size={26} />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{s.label}</h4>
              <p className="text-xs text-white/35 leading-snug hidden md:block">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
