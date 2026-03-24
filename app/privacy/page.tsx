export default function PrivacyPage() {
  return (
    <section className="max-w-[980px] mx-auto px-4 md:px-5 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Privacy Notice & Data Retention</h1>
      <p className="text-sm text-gray-600 mb-6">
        This notice explains what complaint data is collected, why it is used, and how long it is retained.
      </p>

      <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
        <div>
          <h2 className="font-semibold text-gray-900 mb-1">Data we collect</h2>
          <p>
            Complaint details, provider details, incident date, optional contact phone, and optional contact email.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-1">Why we collect it</h2>
          <p>
            To investigate reported service issues, communicate case progress, and support BOCRA regulatory workflows.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-1">Retention period</h2>
          <p>
            Complaint case records are retained for up to 7 years for regulatory audit and legal compliance, then archived or deleted according to policy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-1">Security controls</h2>
          <p>
            BOCRA applies controlled API access, complaint ID-based lookups, and server-side protections to reduce unauthorized exposure.
          </p>
        </div>
      </div>
    </section>
  );
}
