"use client";

import Link from "next/link";
import { ComplaintIcon, ArrowRightIcon } from "@/components/icons";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function ComplaintStar() {
  return (
    <Link href="/complaints" className="block group">
      <div className="bg-white rounded-card border border-gray-100 border-t-[3px] border-t-bocra-magenta overflow-hidden transition-all duration-200 group-hover:-translate-y-[3px] group-hover:shadow-card-lift">
        <div className="flex items-stretch">
          {/* Content */}
          <div className="flex-1 p-6 md:p-7">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-bocra-magenta-light flex items-center justify-center">
                <ComplaintIcon color="#E31B6D" size={20} />
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-xl bg-bocra-magenta-light text-bocra-magenta tracking-wide">
                MOST USED SERVICE
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5">
              File or Track a Complaint
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-[400px]">
              Have an issue with your telecom, internet, broadcasting, or postal
              provider? Submit a complaint and track its resolution in real time.
            </p>
            <span className="inline-flex items-center gap-1.5 bg-bocra-magenta text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all group-hover:opacity-90">
              File a Complaint <ArrowRightIcon color="#fff" size={14} />
            </span>
          </div>

          {/* Stats sidebar — hidden on mobile */}
          <div className="hidden md:flex w-[200px] bg-gradient-to-b from-bocra-magenta-light to-white flex-col items-center justify-center gap-3.5 p-5 border-l border-gray-100">
            <div className="text-center">
              <div className="text-[32px] font-bold text-bocra-magenta">
                <AnimatedNumber target={98} suffix="%" />
              </div>
              <div className="text-[11px] text-gray-500 font-medium mt-0.5">
                Resolution Rate
              </div>
            </div>
            <div className="w-full h-px bg-gray-200" />
            <div className="text-center">
              <div className="text-[32px] font-bold text-bocra-magenta">
                <AnimatedNumber target={6} suffix=" days" />
              </div>
              <div className="text-[11px] text-gray-500 font-medium mt-0.5">
                Avg. Resolution
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
