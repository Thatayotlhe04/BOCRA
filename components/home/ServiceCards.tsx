import Link from "next/link";
import { LicenseIcon, GlobeIcon, CheckIcon, DocIcon, ShieldIcon } from "@/components/icons";

const services = [
  { icon: LicenseIcon, label: "Licensing", desc: "Apply for or verify telecom licences", color: "#0077B6", lightBg: "from-[#EAF5FD] to-white", href: "/licensing" },
  { icon: GlobeIcon, label: ".BW Domains", desc: "Register & manage Botswana domains", color: "#00A651", lightBg: "from-[#E8F9EF] to-white", href: "/portals/domains" },
  { icon: CheckIcon, label: "Type Approval", desc: "Certified equipment database", color: "#0C2340", lightBg: "from-gray-100 to-white", href: "/portals/type-approval" },
  { icon: ShieldIcon, label: "Cybersecurity", desc: "Active threat advisories", color: "#E31B6D", lightBg: "from-[#FDE9F1] to-white", href: "/portals/cybersecurity" },
  { icon: DocIcon, label: "Documents", desc: "Regulations, reports & consultations", color: "#495057", lightBg: "from-gray-50 to-white", href: "/portals/documents" },
];

export default function ServiceCards() {
  return (
    <div id="portals" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-3">
      {services.map((s) => (
        <Link key={s.label} href={s.href}
          className="group relative bg-white rounded-2xl p-4 pb-5 border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] block">
          {/* Color accent on hover */}
          <div className={`absolute inset-0 bg-gradient-to-b ${s.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 group-hover:h-[4px]" style={{ background: s.color }} />

          <div className="relative">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
              style={{ background: s.color + "12" }}>
              <s.icon color={s.color} size={20} />
            </div>
            <h4 className="text-[13px] font-bold text-gray-900 mb-0.5">{s.label}</h4>
            <p className="text-[11px] text-gray-400 leading-snug">{s.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
