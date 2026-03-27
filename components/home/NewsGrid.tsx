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
      className="relative z-10 overflow-hidden rounded-2xl border border-white/25 shadow-[0_16px_46px_rgba(12,35,64,0.2)] max-w-[980px] mx-auto mt-8 px-4 md:px-5 py-12 bg-transparent"
    >
      {/* 🔥 FULL BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0 -z-10">
        {news.map((n, i) => (
          <div
            key={n.title}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${n.image})` }}
          />
        ))}

        {/* DARK OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* 🧠 CONTENT LAYER */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
          <h2 className="text-xl md:text-[22px] font-bold text-white tracking-tight">
            Latest News
          </h2>

          <Link
            href="/news"
            className="text-[13px] text-white font-semibold inline-flex items-center gap-1 hover:text-white/80 transition-colors"
          >
            View All <ArrowRightIcon color="#ffffff" size={14} />
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
              className={`relative z-10 rounded-card border border-white/25 bg-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 group grid grid-cols-[80px_1fr] md:grid-cols-1
                ${
                  i === activeSlide
                    ? "border-white shadow-lg scale-[1.02]"
                    : "hover:shadow-card-hover hover:scale-[1.02]"
                }`}
            >
              {/* ICON / LABEL */}
              <div className="h-full md:h-[88px] bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center rounded-l-card md:rounded-l-none md:rounded-t-card">
                <div className="opacity-60 text-xs font-semibold text-white">
                  NEWS
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-3.5 md:p-4">
                <div className="flex gap-2 items-center mb-2">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-white/20 text-white">
                    {n.cat}
                  </span>
                  <span className="text-[11px] text-white/70">
                    {n.date}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white leading-snug mb-1 group-hover:text-blue-200 transition-colors">
                  {n.title}
                </h4>

                <p className="text-xs text-white/80 leading-relaxed">
                  {n.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
