import Link from "next/link";
import { GlobeIcon, ArrowRightIcon } from "@/components/icons";

export default function DomainsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-bocra-green to-[#008040] py-9 px-4">
        <div className="max-w-[980px] mx-auto">
          <div className="text-xs text-white/45 mb-2"><Link href="/" className="underline hover:text-white/70 transition-colors">Home</Link> / .BW Domains</div>
          <h1 className="text-xl md:text-[26px] font-bold text-white mb-1.5">.BW Domain Registry</h1>
          <p className="text-sm text-white/55 max-w-[500px] leading-relaxed">Register, manage, and transfer Botswana domain names</p>
        </div>
      </section>
      <div className="max-w-[780px] mx-auto px-4 md:px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-card border border-gray-100 p-6 border-t-[3px] border-t-bocra-green">
            <div className="w-[48px] h-[48px] rounded-xl bg-bocra-green-light flex items-center justify-center mb-3"><GlobeIcon color="#00A651" size={24} /></div>
            <h3 className="text-[16px] font-bold text-gray-900 mb-1">Register a Domain</h3>
            <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Search for and register .bw, .co.bw, .org.bw domains</p>
            <div className="flex gap-2">
              <input type="text" placeholder="yourdomain.bw" className="flex-1 px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-[13px] text-gray-900 outline-none focus:border-bocra-green transition-all" />
              <button className="bg-bocra-green text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold whitespace-nowrap hover:opacity-90 transition-all">Search</button>
            </div>
          </div>
          <div className="bg-white rounded-card border border-gray-100 p-6 border-t-[3px] border-t-bocra-navy">
            <div className="w-[48px] h-[48px] rounded-xl bg-gray-100 flex items-center justify-center mb-3"><span className="text-lg font-bold text-bocra-navy">↻</span></div>
            <h3 className="text-[16px] font-bold text-gray-900 mb-1">Manage Existing</h3>
            <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">Renew, transfer, or update DNS records for your domains</p>
            <Link href="/login" className="inline-flex items-center gap-1.5 bg-bocra-navy text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-bocra-navy-light transition-all">Sign In to Manage <ArrowRightIcon color="#fff" size={14} /></Link>
          </div>
        </div>
        <div className="text-center py-8"><div className="inline-block bg-bocra-green-light rounded-xl px-6 py-4 text-[13px] text-gray-600"><span className="font-bold text-bocra-green">35,000+</span> .BW domains registered — Full portal launching soon</div></div>
      </div>
    </>
  );
}
