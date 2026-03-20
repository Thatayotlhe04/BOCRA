import { SearchIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bocra-navy via-[#11385A] to-[#0A4568] py-14 md:py-16 px-4 text-center">
      {/* Decorative circles */}
      <div className="absolute -top-[120px] -right-[120px] w-[360px] h-[360px] rounded-full bg-bocra-blue/[0.06]" />
      <div className="absolute -bottom-[100px] -left-[60px] w-[260px] h-[260px] rounded-full bg-bocra-green/[0.04]" />

      <div className="relative z-10 max-w-[980px] mx-auto">
        <h1 className="text-[23px] md:text-[30px] font-bold text-white mb-3 leading-tight tracking-tight">
          What do you need help with today?
        </h1>
        <p className="text-[13px] md:text-[15px] text-white/50 mb-6 md:mb-7 leading-relaxed max-w-[500px] mx-auto">
          File complaints, track requests, and access regulatory services — all in one place
        </p>

        {/* Search */}
        <div className="max-w-[480px] mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 flex">
            <SearchIcon color="rgba(255,255,255,0.3)" size={18} />
          </span>
          <input
            type="text"
            placeholder="Search licenses, regulations, documents..."
            className="w-full py-3.5 pl-12 pr-5 rounded-[14px] border-[1.5px] border-white/10 bg-white/[0.05] text-white text-sm outline-none font-sans placeholder:text-white/25 focus:border-white/20 focus:bg-white/[0.08] transition-all duration-200"
          />
        </div>
      </div>
    </section>
  );
}
