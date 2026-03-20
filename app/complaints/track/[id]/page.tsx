import ComplaintTracker from "@/components/complaints/ComplaintTracker";

interface PageProps {
  params: { id: string };
}

export default function TrackComplaintPage({ params }: PageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-bocra-magenta to-[#B8155A] py-9 px-4">
        <div className="max-w-[980px] mx-auto relative">
          <div className="text-xs text-white/45 mb-2">
            <a href="/" className="underline hover:text-white/70 transition-colors">Home</a>
            {" / "}
            <a href="/complaints" className="underline hover:text-white/70 transition-colors">Complaints</a>
            {" / Track"}
          </div>
          <h1 className="text-xl md:text-[26px] font-bold text-white mb-1.5">Complaint Status</h1>
          <p className="text-sm text-white/55">Tracking complaint {params.id}</p>
        </div>
      </section>

      <div className="max-w-[700px] mx-auto px-4 md:px-5 py-7">
        <ComplaintTracker id={params.id} />
      </div>
    </>
  );
}
