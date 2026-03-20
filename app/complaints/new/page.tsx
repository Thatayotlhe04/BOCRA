import ComplaintForm from "@/components/complaints/ComplaintForm";

export default function NewComplaintPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-bocra-magenta to-[#B8155A] py-9 px-4">
        <div className="max-w-[980px] mx-auto relative">
          <div className="text-xs text-white/45 mb-2">
            <a href="/" className="underline hover:text-white/70 transition-colors">Home</a>
            {" / "}
            <a href="/complaints" className="underline hover:text-white/70 transition-colors">Complaints</a>
            {" / New"}
          </div>
          <h1 className="text-xl md:text-[26px] font-bold text-white mb-1.5">File a Complaint</h1>
          <p className="text-sm text-white/55 max-w-[500px] leading-relaxed">
            Follow the steps below to submit your complaint
          </p>
        </div>
      </section>

      <div className="max-w-[700px] mx-auto px-4 md:px-5 py-7">
        <ComplaintForm />
      </div>
    </>
  );
}
