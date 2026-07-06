"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [plan, setPlan] = useState("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      setUserEmail(session.user.email || "");

      const { data: profile } = await supabase
        .from("profiles")
        .select("plan")
        .eq("id", session.user.id)
        .single();

      if (profile?.plan) setPlan(profile.plan);

      setLoading(false);
    }

    loadDashboard();
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05070f] text-white flex items-center justify-center">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070f] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold">
              Welcome back, <span className="text-emerald-400">{userEmail.split("@")[0]}</span>
            </h1>
            <p className="text-slate-400 mt-2">Your AlphaPulse Control Center</p>
          </div>
          <button
            onClick={logout}
            className="px-6 py-3 border border-white/20 rounded-2xl hover:bg-white/10"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="text-sm text-slate-400">Current Plan</div>
            <div className="text-4xl font-bold text-emerald-400 mt-3 uppercase">{plan}</div>
            <a href="/premium" className="mt-6 block w-full text-center bg-emerald-500 text-black py-3 rounded-2xl font-bold hover:bg-emerald-400">
              Upgrade to Pro
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="text-sm text-slate-400">Saved Alerts</div>
            <div className="text-5xl font-bold mt-3">0</div>
            <p className="text-sm text-slate-400 mt-6">You haven't saved any alerts yet.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="text-sm text-slate-400">Telegram Status</div>
            <div className="text-4xl font-bold text-purple-400 mt-3">CONNECTED</div>
            <p className="text-sm text-slate-400 mt-6">Your bot can now send alerts to this website.</p>
          </div>
        </div>

        <div className="mt-12 bg-white/5 border border-purple-500/30 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">🚀 Next Features Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/30 p-5 rounded-2xl">Favorite Tokens</div>
            <div className="bg-black/30 p-5 rounded-2xl">Portfolio Tracker</div>
            <div className="bg-black/30 p-5 rounded-2xl">Personal AI Alerts</div>
          </div>
        </div>
      </div>
    </div>
  );
}