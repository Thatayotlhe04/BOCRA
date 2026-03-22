import Hero from "@/components/home/Hero";
import ComplaintStar from "@/components/home/ComplaintStar";
import ServiceCards from "@/components/home/ServiceCards";
import FeatureWalkthrough from "@/components/home/FeatureWalkthrough";
import AboutBOCRA from "@/components/home/AboutBOCRA";
import SectorGrid from "@/components/home/SectorGrid";
import NewsGrid from "@/components/home/NewsGrid";
import DocsAndAlerts from "@/components/home/DocsAndAlerts";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="services" className="max-w-[980px] mx-auto px-4 md:px-5 -mt-6 relative z-10">
        <ComplaintStar />
        <div className="mt-4"><ServiceCards /></div>
      </section>

      <FeatureWalkthrough />
      <AboutBOCRA />
      <SectorGrid />
      <NewsGrid />
      <DocsAndAlerts />
      <CTABanner />
    </>
  );
}
