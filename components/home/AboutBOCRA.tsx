import { TowerIcon, RadioIcon, MailboxIcon, WifiIcon, ShieldIcon, ArrowRightIcon } from "@/components/icons";

export default function AboutBOCRA() {
  return (
    <section className="max-w-[980px] mx-auto px-4 md:px-5 py-12 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 md:gap-8">
        {/* Main content */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-[3px]">
              {["#0077B6","#00A651","#E31B6D","#FFD100"].map(c => (
                <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <h2 className="text-xl md:text-[24px] font-bold text-gray-900 tracking-tight">About BOCRA</h2>
          </div>

          <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
            The Botswana Communications Regulatory Authority (BOCRA) is an independent regulatory body established on 1 April 2013 through the Communications Regulatory Authority Act, 2012 (CRA Act). BOCRA regulates the entire communications sector in Botswana — telecommunications, internet and ICT, radio communications, broadcasting, and postal services.
          </p>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
            The CRA Act consolidated what were previously separate regulators under the Broadcasting Act and Telecommunications Act into a single, converged authority. BOCRA&apos;s mission is to promote competition, innovation, consumer protection, and universal access to communications services across the country.
          </p>

          {/* What BOCRA does - grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {[
              { icon: TowerIcon, color: "#0077B6", title: "Telecommunications", desc: "Regulates Mascom, Orange, and BTC/beMOBILE. Oversees mobile, fixed-line, and satellite communications." },
              { icon: RadioIcon, color: "#00A651", title: "Broadcasting", desc: "Licences and monitors commercial radio and television services across Botswana." },
              { icon: MailboxIcon, color: "#E31B6D", title: "Postal Services", desc: "Oversees BotswanaPost and licensed courier operators for safe, reliable postal services." },
              { icon: WifiIcon, color: "#B8960E", title: "Internet & ICT", desc: "Ensures affordable connectivity. Manages radio frequency spectrum and the .BW domain." },
            ].map((s) => (
              <div key={s.title} className="flex gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: s.color + "14" }}>
                  <s.icon color={s.color} size={18} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-gray-900 mb-0.5">{s.title}</h4>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key responsibilities */}
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">Key Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {[
              "Issue licences for telecom, broadcast, and postal operators",
              "Enforce compliance with the CRA Act and licence conditions",
              "Protect consumers from unfair business practices",
              "Manage radio frequency spectrum allocation",
              "Administer the .BW country code domain",
              "Investigate and resolve consumer complaints",
              "Approve telecommunications equipment (Type Approval)",
              "Promote universal access through the UASF fund",
            ].map((r) => (
              <div key={r} className="flex items-start gap-2 text-[13px] text-gray-600 py-1">
                <span className="text-bocra-green mt-0.5 shrink-0">✓</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar — no contact card (already in footer) */}
        <div className="space-y-4">
          {/* Legislation */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-card">
            <h3 className="text-[14px] font-bold text-gray-900 mb-3">Governing Legislation</h3>
            <div className="space-y-2">
              {[
                "Communications Regulatory Authority Act, 2012",
                "Electronic Records (Evidence) Act, 2014",
                "Electronic Communications & Transactions Act, 2014",
                "Consumer Protection Act, 2018",
                "Botswana Data Protection Act, 2024",
              ].map((law) => (
                <div key={law} className="flex items-start gap-2 text-[12px] text-gray-600">
                  <span className="text-bocra-blue mt-0.5 shrink-0">§</span>
                  <span>{law}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operator Portal link */}
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-2">
              <ShieldIcon color="#0C2340" size={16} />
              <h3 className="text-[13px] font-bold text-gray-900">Operator Portal</h3>
            </div>
            <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
              Licensed service providers submit regulatory data through the separate Operator Portal.
            </p>
            <a href="https://op-web.bocra.org.bw" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] text-bocra-blue font-semibold hover:underline">
              op-web.bocra.org.bw <ArrowRightIcon color="#0077B6" size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
