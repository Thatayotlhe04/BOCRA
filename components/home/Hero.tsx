"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SearchIcon, ComplaintIcon, LicenseIcon, GlobeIcon, CheckIcon, ShieldIcon, DocIcon } from "@/components/icons";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

const searchItems = [
  { label: "File a Complaint", desc: "Submit a complaint against a service provider", href: "/complaints/new", icon: ComplaintIcon, color: "#E31B6D", keywords: "complaint file submit issue problem billing" },
  { label: "Track a Complaint", desc: "Check status with your tracking ID", href: "/complaints", icon: SearchIcon, color: "#0C2340", keywords: "track complaint status check CMP" },
  { label: "Licensing Portal", desc: "Apply for or verify telecom licenses", href: "/licensing", icon: LicenseIcon, color: "#0077B6", keywords: "license apply verify telecom broadcast" },
  { label: ".BW Domain Registry", desc: "Register or manage Botswana domains", href: "/portals/domains", icon: GlobeIcon, color: "#00A651", keywords: "domain .bw register website dns" },
  { label: "Type Approval", desc: "Search approved equipment database", href: "/portals/type-approval", icon: CheckIcon, color: "#0C2340", keywords: "type approval equipment device certified phone router" },
  { label: "Cybersecurity Advisories", desc: "View current threat alerts", href: "/portals/cybersecurity", icon: ShieldIcon, color: "#E31B6D", keywords: "cybersecurity security threat advisory phishing scam" },
  { label: "Documents & Publications", desc: "Regulations, reports, and legislation", href: "/portals/documents", icon: DocIcon, color: "#495057", keywords: "document report regulation legislation spectrum consultation" },
  { label: "Contact BOCRA", desc: "+267 395 7755 · info@bocra.org.bw", href: "#", icon: DocIcon, color: "#0077B6", keywords: "contact phone email address office hours" },
];

const localHighlights = [
  { title: "BOCRA Hackathon", subtitle: "Digital innovation by youth teams", image: "/images/news/hackathon.jpg" },
  { title: "Regional Collaboration", subtitle: "SADC roaming tariff initiative", image: "/images/news/sadc-roaming.jpg" },
  { title: "Consumer Impact", subtitle: "Approved data price reductions", image: "/images/news/data-prices.jpg" },
];

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim().length > 0
    ? searchItems.filter((item) => {
        const q = query.toLowerCase();
        return item.label.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.keywords.includes(q);
      })
    : [];
  const dropdownOpen = focused;

  useEffect(() => {
    const h = (e: MouseEvent) => { if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setFocused(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const navigate = (href: string) => { setQuery(""); setFocused(false); router.push(href); };

  return (
    <section className="relative z-[150] bg-bocra-navy overflow-visible">
      {/* Decorative elements clipped by inner wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-bocra-blue/[0.07] blur-[80px] animate-pulse-soft" />
        <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-bocra-magenta/[0.05] blur-[60px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[20%] left-[40%] w-[300px] h-[300px] rounded-full bg-bocra-green/[0.04] blur-[50px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[3px] flex">
        <div className="flex-1 bg-bocra-blue" /><div className="flex-1 bg-bocra-green" /><div className="flex-1 bg-bocra-magenta" /><div className="flex-1 bg-bocra-yellow" />
      </div>

      <div className="relative z-10 max-w-[980px] mx-auto px-4 md:px-5 pt-12 md:pt-16 pb-14 md:pb-20">
        <div className="text-center animate-fade-up">
          <h1 className="text-[26px] md:text-[38px] font-bold text-white mb-3 leading-[1.15] tracking-tight">
            What do you need<br className="hidden md:block" /> help with today?
          </h1>
          <p className="text-[13px] md:text-[15px] text-white/40 mb-7 md:mb-8 leading-relaxed max-w-[480px] mx-auto">
            File complaints, track requests, and access regulatory services for all licensed providers in Botswana
          </p>
        </div>

        {/* Search — dropdown breaks out and sits above everything below */}
        <div ref={wrapperRef} className="max-w-[520px] mx-auto relative isolate z-[120] mb-8 animate-fade-up animate-delay-2 overflow-visible">
          <span className="absolute left-4 top-[16px] flex pointer-events-none z-10">
            <SearchIcon color={focused ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)"} size={18} />
          </span>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setFocused(true)}
            onKeyDown={(e) => { if (e.key === "Enter" && filtered.length > 0) navigate(filtered[0].href); if (e.key === "Escape") setFocused(false); }}
            placeholder="Search services, licenses, regulations..."
            className="w-full py-3.5 pl-12 pr-5 rounded-2xl border border-white/[0.12] bg-white/[0.06] text-white text-sm outline-none font-sans placeholder:text-white/25 focus:border-white/25 focus:bg-white/[0.1] focus:shadow-[0_0_30px_rgba(0,119,182,0.15)] transition-all duration-300" />

          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-gray-100 overflow-hidden z-[200] animate-slide-up">
              {query.trim().length > 0 ? (
                filtered.length > 0 ? filtered.map((item) => (
                  <button key={item.label} onClick={() => navigate(item.href)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-all text-left border-b border-gray-50 last:border-0">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: item.color + "12" }}><item.icon color={item.color} size={18} /></div>
                    <div className="flex-1 min-w-0"><div className="text-[13px] font-semibold text-gray-900">{item.label}</div><div className="text-[11px] text-gray-400 truncate">{item.desc}</div></div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CED4DA" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                )) : (
                  <div className="px-4 py-6 text-center"><div className="text-[13px] text-gray-400 mb-1">No results for &ldquo;{query}&rdquo;</div><div className="text-[11px] text-gray-300">Try: complaints, licensing, domains, cybersecurity</div></div>
                )
              ) : (
                <>
                  <div className="px-4 py-2.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Popular services</div>
                  {searchItems.slice(0, 5).map((item) => (
                    <button key={item.label} onClick={() => navigate(item.href)} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-all text-left border-b border-gray-50 last:border-0">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: item.color + "10" }}><item.icon color={item.color} size={16} /></div>
                      <div className="text-[13px] font-medium text-gray-700">{item.label}</div>
                    </button>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        {/* Quick actions — hidden when dropdown is open */}
        {!dropdownOpen && (
          <>
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 animate-fade-up animate-delay-3">
              <Link href="/complaints/new" className="flex items-center gap-2 bg-bocra-magenta text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:bg-[#c9175f] hover:shadow-[0_4px_20px_rgba(227,27,109,0.3)] transition-all duration-200">
                <ComplaintIcon color="#fff" size={16} /> File a Complaint
              </Link>
              <Link href="/complaints" className="flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:bg-white/[0.14] transition-all duration-200">
                <SearchIcon color="#fff" size={15} /> Track Complaint
              </Link>
              <Link href="/licensing" className="flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:bg-white/[0.14] transition-all duration-200">
                <LicenseIcon color="#fff" size={15} /> Licensing
              </Link>
              <Link href="/portals/domains" className="hidden md:flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:bg-white/[0.14] transition-all duration-200">
                <GlobeIcon color="#fff" size={15} /> .BW Domains
              </Link>
            </div>

            <div className="flex justify-center gap-6 md:gap-10 mt-10 animate-fade-up animate-delay-4">
              <div className="text-center">
                <div className="text-[20px] md:text-[24px] font-bold text-bocra-yellow"><AnimatedNumber target={2450} suffix="+" /></div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Active Licences</div>
              </div>
              <div className="text-center">
                <div className="text-[20px] md:text-[24px] font-bold text-bocra-green"><AnimatedNumber target={98} suffix="%" /></div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Resolution Rate</div>
              </div>
              <div className="text-center">
                <div className="text-[20px] md:text-[24px] font-bold text-bocra-blue"><AnimatedNumber target={35000} suffix="+" /></div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider font-medium">.BW Domains</div>
              </div>
            </div>

            <div className="mt-9 animate-fade-up animate-delay-4">
              <p className="text-center text-[11px] text-white/35 uppercase tracking-[1.2px] mb-3 font-medium">BOCRA in Action</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {localHighlights.map((item, i) => (
                  <div
                    key={item.title}
                    className="relative rounded-xl overflow-hidden h-[90px] md:h-[110px] border border-white/10 group"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <div className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${item.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-bocra-navy/90 via-bocra-navy/55 to-transparent" />
                    <div className="relative z-10 p-3.5">
                      <div className="text-[12px] md:text-[13px] font-semibold text-white">{item.title}</div>
                      <div className="text-[10px] md:text-[11px] text-white/55 mt-0.5">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
