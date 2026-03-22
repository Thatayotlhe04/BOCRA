"use client";

import AnimatedNumber from "@/components/ui/AnimatedNumber";

const stats = [
  { n: 2450, s: "+", label: "Active Licenses", color: "#FFD100" },
  { n: 98, s: "%", label: "Complaints Resolved", color: "#00A651" },
  { n: 1200, s: "+", label: "Approved Devices", color: "#0077B6" },
  { n: 35000, s: "+", label: ".BW Domains", color: "#E31B6D" },
];

export default function StatsBar() {
  return (
    <section className="bg-bocra-navy">
      <div className="max-w-[980px] mx-auto px-4 md:px-5 py-8 md:py-9 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-2xl md:text-[30px] font-bold tracking-tight" style={{ color: stat.color }}>
              <AnimatedNumber target={stat.n} suffix={stat.s} />
            </div>
            <div className="text-[10px] md:text-[11px] text-white/35 uppercase tracking-[1.2px] mt-1 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
