import Link from "next/link";
import { CheckIcon, SearchIcon } from "@/components/icons";

export default function TypeApprovalPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-bocra-navy to-[#163158] py-9 px-4">
        <div className="max-w-[980px] mx-auto">
          <div className="text-xs text-white/45 mb-2"><Link href="/" className="underline hover:text-white/70 transition-colors">Home</Link> / Type Approval</div>
          <h1 className="text-xl md:text-[26px] font-bold text-white mb-1.5">Type Approval</h1>
          <p className="text-sm text-white/55 max-w-[500px] leading-relaxed">Equipment certification database — verify approved devices</p>
        </div>
      </section>
      <div className="max-w-[780px] mx-auto px-4 md:px-5 py-8">
        <div className="bg-white rounded-card border border-gray-100 p-6 mb-6">
          <h3 className="text-[16px] font-bold text-gray-900 mb-3">Search Approved Equipment</h3>
          <div className="flex gap-2">
            <div className="relative flex-1"><span className="absolute left-3.5 top-1/2 -translate-y-1/2"><SearchIcon color="#ADB5BD" size={16} /></span>
            <input type="text" placeholder="Search by make, model, or approval number..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-[13px] text-gray-900 outline-none focus:border-bocra-blue transition-all" /></div>
            <button className="bg-bocra-navy text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-bocra-navy-light transition-all">Search</button>
          </div>
        </div>
        <div className="bg-white rounded-card border border-gray-100 overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 flex justify-between items-center"><span className="text-sm font-bold text-gray-900">Recent Approvals</span><span className="text-[11px] text-gray-400">1,200+ devices</span></div>
          {[
            { make: "Samsung", model: "Galaxy S25", cat: "Mobile Phone", date: "12 Mar 2026" },
            { make: "Huawei", model: "CPE Pro 3", cat: "Router", date: "8 Mar 2026" },
            { make: "Nokia", model: "FastMile 5G", cat: "Fixed Wireless", date: "5 Mar 2026" },
            { make: "TP-Link", model: "Archer AX73", cat: "Router", date: "1 Mar 2026" },
          ].map((d, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-3.5 ${i < 3 ? "border-b border-gray-50" : ""} hover:bg-gray-50 transition-all cursor-pointer`}>
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0"><CheckIcon color="#00A651" size={16} /></div>
              <div className="flex-1 min-w-0"><div className="text-[13px] font-medium text-gray-900">{d.make} {d.model}</div><div className="text-[11px] text-gray-400">{d.cat}</div></div>
              <div className="text-[11px] text-gray-400 hidden md:block">{d.date}</div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-bocra-green-light text-[#1a6b37]">Approved</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
