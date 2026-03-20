import { PhoneIcon, MailIcon, PinIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-12">
      <div className="max-w-[980px] mx-auto px-4 md:px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 pt-10 pb-7">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex gap-[3px] mb-2">
              {["#0077B6", "#00A651", "#E31B6D", "#FFD100"].map((c) => (
                <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="text-base font-bold text-white mb-1.5">BOCRA</div>
            <div className="text-xs text-white/30 leading-relaxed">
              Plot 50671, Independence Avenue
              <br />
              Gaborone, Botswana
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            {["About BOCRA", "News & Media", "Careers"].map((l) => (
              <a key={l} className="block text-xs text-white/35 mb-1.5 hover:text-white/60 transition-colors cursor-pointer">
                {l}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">
              Services
            </h4>
            {["Licensing", "Complaints", ".BW Domains", "Type Approval"].map((l) => (
              <a key={l} className="block text-xs text-white/35 mb-1.5 hover:text-white/60 transition-colors cursor-pointer">
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">
              Contact
            </h4>
            <div className="flex items-center gap-2 text-xs text-white/35 mb-2">
              <PhoneIcon color="rgba(255,255,255,0.3)" /> +267 395 7755
            </div>
            <div className="flex items-center gap-2 text-xs text-white/35 mb-2">
              <MailIcon color="rgba(255,255,255,0.3)" /> info@bocra.org.bw
            </div>
            <div className="flex items-center gap-2 text-xs text-white/35">
              <PinIcon color="rgba(255,255,255,0.3)" /> Gaborone, Botswana
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] py-4 flex justify-between items-center flex-wrap gap-2">
          <span className="text-[11px] text-white/[0.18]">
            © 2026 BOCRA. All rights reserved.
          </span>
          <div className="flex gap-1">
            {["FB", "X", "YT", "In"].map((s) => (
              <div key={s} className="w-7 h-7 rounded-md bg-white/[0.05] flex items-center justify-center text-[10px] text-white/30 cursor-pointer hover:bg-white/10 hover:text-white/50 transition-all">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
