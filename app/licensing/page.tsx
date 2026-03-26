"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const categories = [
  "Public Telecommunications Operator",
  "Broadcasting",
  "Postal Services",
  "Type Approval",
  "Radio Frequency",
];

const mockLicences = [
  { holder: "Mascom Wireless", number: "LIC-PTO-2026-014", category: "Public Telecommunications Operator", status: "active", expiry: "31 Dec 2028" },
  { holder: "Orange Botswana", number: "LIC-PTO-2026-011", category: "Public Telecommunications Operator", status: "active", expiry: "31 Dec 2028" },
  { holder: "Gabz FM", number: "LIC-BC-2026-033", category: "Broadcasting", status: "active", expiry: "31 Dec 2027" },
  { holder: "BotswanaPost", number: "LIC-PS-2026-008", category: "Postal Services", status: "active", expiry: "31 Dec 2029" },
  { holder: "Kalahari Connect", number: "LIC-RF-2026-057", category: "Radio Frequency", status: "review", expiry: "Pending renewal" },
];

const statusStyles: Record<string, string> = {
  active: "bg-bocra-green-light text-[#1a6b37]",
  review: "bg-bocra-yellow-light text-[#8a6900]",
  suspended: "bg-bocra-magenta-light text-bocra-magenta",
};

export default function LicensingPage() {
  const [mode, setMode] = useState<"apply" | "verify">("apply");
  const [holderName, setHolderName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [reference, setReference] = useState("");
  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return mockLicences;
    return mockLicences.filter((l) =>
      l.holder.toLowerCase().includes(q)
      || l.number.toLowerCase().includes(q)
      || l.category.toLowerCase().includes(q)
    );
  }, [search]);

  const submitApplication = () => {
    if (!holderName.trim() || !email.trim() || !reference.trim()) return;
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-bocra-blue to-[#006298] py-9 px-4">
        <div className="max-w-[980px] mx-auto">
          <div className="text-xs text-white/45 mb-2">
            <Link href="/" className="underline hover:text-white/70 transition-colors">Home</Link> / Licensing
          </div>
          <h1 className="text-xl md:text-[26px] font-bold text-white mb-1.5">Licensing Portal</h1>
          <p className="text-sm text-white/55 max-w-[560px] leading-relaxed">
            Apply for licence review and verify published licence records in one place.
          </p>
        </div>
      </section>

      <section className="max-w-[980px] mx-auto px-4 md:px-5 py-8">
        <div className="bg-white rounded-card border border-gray-100 p-1.5 inline-flex gap-1 mb-5">
          <button
            onClick={() => setMode("apply")}
            className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${mode === "apply" ? "bg-bocra-blue text-white" : "text-gray-500 hover:bg-gray-50"}`}
          >
            Apply
          </button>
          <button
            onClick={() => setMode("verify")}
            className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${mode === "verify" ? "bg-bocra-navy text-white" : "text-gray-500 hover:bg-gray-50"}`}
          >
            Verify
          </button>
        </div>

        {mode === "apply" ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
            <div className="bg-white rounded-card border border-gray-100 p-6">
              <h2 className="text-[18px] font-bold text-gray-900 mb-1.5">Licence Application Intake</h2>
              <p className="text-[13px] text-gray-500 mb-5">Submit your application details and BOCRA licensing officers will follow up.</p>

              {!submitted ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Applicant / Organisation</label>
                    <input
                      value={holderName}
                      onChange={(e) => setHolderName(e.target.value)}
                      placeholder="e.g. Kalahari Connect (Pty) Ltd"
                      className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm outline-none text-gray-900 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Contact Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="applicant@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm outline-none text-gray-900 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Licence Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm outline-none text-gray-900 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
                      >
                        {categories.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Application Reference</label>
                    <input
                      value={reference}
                      onChange={(e) => setReference(e.target.value)}
                      placeholder="e.g. APP-2026-0013"
                      className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm outline-none text-gray-900 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all"
                    />
                  </div>
                  <button
                    onClick={submitApplication}
                    className="bg-bocra-blue text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-[#006298] transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              ) : (
                <div className="bg-bocra-green-light rounded-xl p-4 text-[#1a6b37]">
                  <div className="text-[14px] font-bold mb-1">Application Received</div>
                  <p className="text-[13px] leading-relaxed">
                    Thank you. Your reference <span className="font-semibold">{reference}</span> was logged for <span className="font-semibold">{category}</span>.
                    A licensing officer will contact you at <span className="font-semibold">{email}</span>.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-card border border-gray-100 p-5 h-fit">
              <h3 className="text-[14px] font-bold text-gray-900 mb-3">Expected Processing</h3>
              <div className="space-y-2 text-[13px] text-gray-600">
                <div className="flex justify-between"><span>Initial validation</span><span className="font-semibold text-gray-800">2–3 days</span></div>
                <div className="flex justify-between"><span>Technical review</span><span className="font-semibold text-gray-800">7–14 days</span></div>
                <div className="flex justify-between"><span>Final decision</span><span className="font-semibold text-gray-800">Up to 21 days</span></div>
              </div>
              <div className="mt-4 text-[12px] text-gray-400 leading-relaxed">
                This demo view is an intake simulation for walkthrough purposes.
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-card border border-gray-100 p-6">
            <div className="flex justify-between items-center gap-3 flex-wrap mb-4">
              <div>
                <h2 className="text-[18px] font-bold text-gray-900 mb-1">Verify Licence</h2>
                <p className="text-[13px] text-gray-500">Search by holder, licence number, or category.</p>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search licence records..."
                className="w-full sm:w-[280px] px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm outline-none text-gray-900 focus:border-bocra-navy focus:ring-2 focus:ring-bocra-navy/10 transition-all"
              />
            </div>
            <div className="space-y-2.5">
              {filtered.map((l) => (
                <div key={l.number} className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[14px] font-semibold text-gray-900">{l.holder}</div>
                      <div className="text-[12px] text-gray-500 mt-0.5">{l.number} · {l.category}</div>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${statusStyles[l.status] || "bg-gray-100 text-gray-500"}`}>
                      {l.status}
                    </span>
                  </div>
                  <div className="text-[12px] text-gray-400 mt-2">Expiry: {l.expiry}</div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="text-[13px] text-gray-500 py-8 text-center">No licence records matched your search.</div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
