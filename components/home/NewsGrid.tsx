"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

const news = [
  {
    cat: "Public Notice",
    date: "18 Mar 2026",
    title: "BOCRA Website Development Hackathon",
    blurb: "Youth teams invited to reimagine BOCRA's digital platform.",
    href: "/news/website-development-hackathon",
    image: "/images/news/hackathon.jpg",
  },
  {
    cat: "Press Release",
    date: "15 Mar 2026",
    title: "SADC States Collaborate to Reduce Roaming Tariffs",
    blurb: "Botswana leads initiative with five member states.",
    href: "/news/sadc-roaming-tariffs",
    image: "/images/news/sadc-roaming.jpg",
  },
  {
    cat: "Media Release",
    date: "12 Mar 2026",
    title: "Reduced Data Prices for BTC Approved",
    blurb: "New pricing framework benefits consumers.",
    href: "/news/reduced-data-prices-btc",
    image: "/images/news/data-prices.jpg",
  },
];

export default function NewsGrid() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <section
      id="news"
      className="relative max-w-[980px] mx-auto px-4 md:px-5 py-12 overflow-hidden"
    >
      {/* 🔥 BACKGROUND SLIDER */}
      <div className="absolute inset-0 -z-10">
        {news.map((n, i) => (
          <div
            key={n.title}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === activeSlide ? "opacity-20" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${n.image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
        <h2 className="text-xl md:text-[22px] font-bold text-gray-900 tracking-tight">
          Latest News
        </h2>
        <Link
          href="/news"
          className="text-[13px] text-bocra-blue font-semibold inline-flex items-center gap-1 hover:text-[#006298] transition-colors"
        >
          View All <ArrowRightIcon color="#0077B6" size={14} />
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.map((n, i) => (
          <Link
            key={n.title}
            href={n.href}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => setActiveSlide(i)}
            className={`bg-white/90 backdrop-blur-sm rounded-card border overflow-hidden transition-all duration-300 group grid grid-cols-[80px_1fr] md:grid-cols-1
              ${
                i === activeSlide
                  ? "border-bocra-blue shadow-md scale-[1.02]"
                  : "border-gray-100 hover:shadow-card-hover hover:scale-[1.02]"
              }`}
          >
            {/* ICON / LABEL */}
            <div className="h-full md:h-[88px] bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center rounded-l-card md:rounded-l-none md:rounded-t-card">
              <div className="opacity-30 text-xs font-semibold text-blue-500">
                NEWS
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-3.5 md:p-4">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-bocra-blue-light text-bocra-blue">
                  {n.cat}
                </span>
                <span className="text-[11px] text-gray-400">
                  {n.date}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-gray-900 leading-snug mb-1 group-hover:text-bocra-blue transition-colors">
                {n.title}
              </h4>

              <p className="text-xs text-gray-500 leading-relaxed">
                {n.blurb}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
