"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

      if (signInError) {
        setError(signInError.message);
      } else {
        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bocra-navy via-[#11385A] to-[#0A4568] min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-12">
      <div className="absolute -top-[120px] -right-[120px] w-[360px] h-[360px] rounded-full bg-bocra-blue/[0.06]" />
      <div className="absolute -bottom-[100px] -left-[60px] w-[260px] h-[260px] rounded-full bg-bocra-green/[0.04]" />

      <div className="relative z-10 w-full max-w-[420px]">
        <div className="text-center mb-8">
          <div className="flex gap-[4px] justify-center mb-3">
            {["#0077B6", "#00A651", "#E31B6D", "#FFD100"].map((c) => (
              <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <h1 className="text-[22px] font-bold text-white mb-1">BOCRA Staff Portal</h1>
          <p className="text-sm text-white/40">Internal access for regulatory staff</p>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.2)] overflow-hidden">
          <div className="px-6 pt-5 pb-1">
            <div className="text-[13px] font-semibold text-gray-900">Staff Sign In</div>
            <div className="text-[11px] text-gray-400 mt-0.5">Authorised BOCRA personnel only</div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 pt-4">
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-bocra-magenta-light text-bocra-magenta text-[13px] font-medium">{error}</div>
            )}

            <div className="mb-3.5">
              <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="staff@bocra.org.bw" required
                className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm outline-none text-gray-900 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all placeholder:text-gray-400" />
            </div>

            <div className="mb-4">
              <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={6}
                className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-sm outline-none text-gray-900 focus:border-bocra-blue focus:ring-2 focus:ring-bocra-blue/10 transition-all placeholder:text-gray-400" />
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-bocra-navy text-white py-3 rounded-lg text-[14px] font-semibold hover:bg-bocra-navy-light transition-all disabled:opacity-60 flex items-center justify-center gap-2">
              {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {loading ? "Please wait..." : "Sign In"}
            </button>
          </form>

          <div className="px-6 pb-5">
            <div className="bg-gray-50 rounded-lg p-3 text-[12px] text-gray-400 leading-relaxed text-center">
              Citizens do not need an account to file or track complaints.
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link href="/" className="text-[12px] text-white/30 hover:text-white/50 transition-colors">← Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
