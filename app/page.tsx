import Hero from "@/components/home/Hero";
import ComplaintStar from "@/components/home/ComplaintStar";
import ServiceCards from "@/components/home/ServiceCards";
import SectorGrid from "@/components/home/SectorGrid";
import StatsBar from "@/components/home/StatsBar";
import NewsGrid from "@/components/home/NewsGrid";
import DocsAndAlerts from "@/components/home/DocsAndAlerts";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services section — complaints star + supporting cards */}
      <section className="max-w-[980px] mx-auto px-4 md:px-5 -mt-8 relative z-10">
        <ComplaintStar />
        <div className="mt-4">
          <ServiceCards />
        </div>
      </section>

      <SectorGrid />
      <StatsBar />
      <NewsGrid />
      <DocsAndAlerts />
      <CTABanner />
    </>
  );
}
