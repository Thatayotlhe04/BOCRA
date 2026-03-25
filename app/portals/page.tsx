import Link from "next/link";

const portalItems = [
  { title: "Licensing", desc: "Apply, renew, and verify licenses", href: "/licensing" },
  { title: ".BW Domains", desc: "Register and manage Botswana domains", href: "/portals/domains" },
  { title: "Type Approval", desc: "Search certified equipment", href: "/portals/type-approval" },
  { title: "Cybersecurity", desc: "Threat advisories and alerts", href: "/portals/cybersecurity" },
  { title: "Documents", desc: "Regulations, reports, consultations", href: "/portals/documents" },
];

export default function PortalsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-bocra-navy to-[#163158] py-9 px-4">
        <div className="max-w-[980px] mx-auto">
          <div className="text-xs text-white/45 mb-2">
            <Link href="/" className="underline hover:text-white/70 transition-colors">Home</Link> / Portals
          </div>
          <h1 className="text-xl md:text-[26px] font-bold text-white mb-1.5">Digital Service Portals</h1>
          <p className="text-sm text-white/55 max-w-[560px] leading-relaxed">
            Access licensing, domains, cybersecurity, type approval, and documents in one place.
          </p>
        </div>
      </section>

      <section className="max-w-[980px] mx-auto px-4 md:px-5 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portalItems.map((item) => (
          <Link key={item.title} href={item.href} className="bg-white rounded-card border border-gray-100 p-5 hover:shadow-card-hover transition-all">
            <h3 className="text-[16px] font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-[13px] text-gray-500">{item.desc}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
