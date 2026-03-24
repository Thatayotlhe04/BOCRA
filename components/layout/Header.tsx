"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "@/components/icons";

const links = [
  { label: "Home", href: "/" },
  { label: "Complaints", href: "/complaints" },
  { label: "Portals", href: "/#portals" },
  { label: "News", href: "/#news" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-bocra-navy sticky top-0 z-50 border-b-[3px] border-bocra-yellow">
      <div className="max-w-[980px] mx-auto px-4 md:px-5">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex gap-[3px]">
              {["#0077B6", "#00A651", "#E31B6D", "#FFD100"].map((c) => (
                <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div>
              <div className="text-[17px] font-bold text-white tracking-wide leading-none">BOCRA</div>
              <span className="text-[9px] text-white/35 leading-tight block mt-0.5 max-w-[180px]">
                Botswana Communications Regulatory Authority
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-0.5 items-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-[13px] font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 text-white font-semibold"
                      : "text-white/55 hover:text-white/85 hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/login"
              className="ml-2 px-4 py-1.5 text-[13px] font-semibold rounded-lg bg-bocra-yellow text-bocra-navy hover:bg-[#ffe033] transition-all duration-200"
            >
              Staff Login
            </Link>
          </nav>

          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <XIcon color="#fff" /> : <MenuIcon color="#fff" />}
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-nav" className="md:hidden flex flex-col pb-2 border-t border-white/[0.06]">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  className={`py-3 px-1 text-[15px] border-b border-white/[0.04] transition-all ${isActive ? "text-white font-semibold" : "text-white/55"}`}>
                  {link.label}
                </Link>
              );
            })}
            <Link href="/login" onClick={() => setMobileOpen(false)}
              className="mt-2 mb-1 mx-1 px-4 py-2.5 text-[15px] font-semibold rounded-lg bg-bocra-yellow text-bocra-navy text-center">
              Staff Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
