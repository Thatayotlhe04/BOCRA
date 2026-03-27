import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function CTABanner() {
  return (
    <section className="relative z-20 mt-8 bg-gradient-to-r from-bocra-blue to-[#009EE2] py-12 px-4 text-center border-t border-white/20 shadow-[0_-10px_30px_rgba(12,35,64,0.14)]">
      <div className="max-w-[480px] mx-auto">
        <h2 className="text-lg md:text-[22px] font-bold text-white mb-2.5">Need to file a complaint?</h2>
        <p className="text-sm text-white/60 mb-5 leading-relaxed">Our streamlined process makes it easy to submit and track your consumer complaint.</p>
        <Link href="/complaints" className="inline-flex items-center gap-2 bg-white text-bocra-blue px-7 py-3 rounded-[10px] text-sm font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          File a Complaint <ArrowRightIcon color="#0077B6" size={16} />
        </Link>
      </div>
    </section>
  );
}
