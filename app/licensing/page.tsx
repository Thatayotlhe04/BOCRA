// TODO Day 4+: Build licensing portal UI

export default function LicensingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-bocra-blue to-[#006298] py-9 px-4">
        <div className="max-w-[980px] mx-auto">
          <div className="text-xs text-white/45 mb-2">
            <a href="/" className="underline hover:text-white/70 transition-colors">Home</a> / Licensing
          </div>
          <h1 className="text-xl md:text-[26px] font-bold text-white mb-1.5">Licensing Portal</h1>
          <p className="text-sm text-white/55 max-w-[500px] leading-relaxed">
            Apply for, renew, and verify telecommunications licenses
          </p>
        </div>
      </section>
      <div className="max-w-[780px] mx-auto px-4 md:px-5 py-12 text-center">
        <p className="text-gray-500">Licensing portal coming soon.</p>
      </div>
    </>
  );
}
