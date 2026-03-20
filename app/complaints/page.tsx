import ComplaintsLanding from "@/components/complaints/ComplaintsLanding";

export default function ComplaintsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bocra-magenta to-[#B8155A] py-9 px-4">
        <div className="max-w-[980px] mx-auto relative">
          <div className="text-xs text-white/45 mb-2">
            <a href="/" className="underline hover:text-white/70 transition-colors">Home</a> / Complaints
          </div>
          <h1 className="text-xl md:text-[26px] font-bold text-white mb-1.5">Consumer Complaints</h1>
          <p className="text-sm text-white/55 max-w-[500px] leading-relaxed">
            File complaints against service providers and track resolution
          </p>
        </div>
      </section>

      <div className="max-w-[780px] mx-auto px-4 md:px-5 py-7">
        <ComplaintsLanding />
      </div>
    </>
  );
}
