import { LicenseIcon, GlobeIcon, CheckIcon, DocIcon, ChatIcon } from "@/components/icons";

const services = [
  { icon: LicenseIcon, label: "Licensing", desc: "Apply & verify", color: "#0077B6", bg: "bg-bocra-blue-light" },
  { icon: GlobeIcon, label: ".BW Domains", desc: "Register & manage", color: "#00A651", bg: "bg-bocra-green-light" },
  { icon: CheckIcon, label: "Type Approval", desc: "Equipment database", color: "#0C2340", bg: "bg-gray-100" },
  { icon: DocIcon, label: "Documents", desc: "Laws & publications", color: "#495057", bg: "bg-gray-50" },
  { icon: ChatIcon, label: "Consultations", desc: "Public input", color: "#0077B6", bg: "bg-bocra-blue-light" },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-3">
      {services.map((s) => (
        <div
          key={s.label}
          className="bg-white rounded-card p-4 border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover cursor-default"
          style={{ borderTop: `3px solid ${s.color}` }}
        >
          <div className={`w-[34px] h-[34px] rounded-lg ${s.bg} flex items-center justify-center mb-2.5`}>
            <s.icon color={s.color} size={18} />
          </div>
          <h4 className="text-[13px] font-semibold text-gray-900 mb-0.5">{s.label}</h4>
          <p className="text-[11px] md:text-xs text-gray-500 leading-snug">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
