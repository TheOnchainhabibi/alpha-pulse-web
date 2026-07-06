"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Alert = {
  id: number;
  token_name: string;
  symbol: string;
  chain: string;
  market_cap: number;
  liquidity: number;
  holders: number;
  age: string;
  smart_money_buys: number;
  volume_24h: number;
  risk_score: number;
  ai_confidence: number;
  pump_probability: number;
  contract_address: string;
  telegram_url: string;
  time_detected: string;
};

function formatMoney(value: number) {
  if (!value) return "$0";
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value}`;
}

function getRiskColor(score: number) {
  if (score <= 30) return "text-emerald-400 bg-emerald-500/20";
  if (score <= 60) return "text-yellow-400 bg-yellow-500/20";
  return "text-red-400 bg-red-500/20";
}

function getRiskLabel(score: number) {
  if (score <= 30) return "Low Risk";
  if (score <= 60) return "Medium Risk";
  return "High Risk";
}

function getConfidenceColor(score: number) {
  if (score >= 80) return "text-emerald-400";
  if (score >= 60) return "text-yellow-400";
  return "text-red-400";
}

export default function LiveAlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadAlerts() {
    const { data, error } = await supabase
      .from("alerts")
      .select("*")
      .order("time_detected", { ascending: false })
      .limit(30);

    if (!error && data) {
      setAlerts(data as Alert[]);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadAlerts();

    const channel = supabase
      .channel("alerts-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "alerts" },
        () => loadAlerts()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function copyContract(contract: string) {
    if (!contract) return;
    await navigator.clipboard.writeText(contract);
    alert("Contract address copied!");
  }

  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-60 right-10 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs text-emerald-400 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE — Connected to Supabase + Telegram Webhook
          </div>
          <h1 className="text-4xl font-extrabold">
            🔔 Live{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              AlphaPulse Alerts
            </span>
          </h1>
          <p className="mt-2 text-slate-300">
            Real alerts sent from your Telegram bot will appear here automatically.
          </p>
        </div>

        {loading && <p className="text-slate-400">Loading alerts...</p>}

        {!loading && alerts.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
            <p className="text-slate-400">No alerts yet.</p>
            <p className="text-sm mt-2">Send your first alert from your Telegram bot to see it here.</p>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-emerald-500/30 transition-all"
            >
              <div className="flex justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-purple-500 flex items-center justify-center text-xl font-bold">
                    {alert.symbol?.[0]}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{alert.token_name}</div>
                    <div className="text-sm text-slate-400">${alert.symbol} • {alert.chain}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">{alert.age}</div>
                  <div className={`mt-1 px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(alert.risk_score)}`}>
                    {getRiskLabel(alert.risk_score)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-sm mb-5">
                <div>
                  <div className="text-xs text-slate-400">MCap</div>
                  <div className="font-semibold">{formatMoney(alert.market_cap)}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Liquidity</div>
                  <div className="font-semibold">{formatMoney(alert.liquidity)}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Holders</div>
                  <div className="font-semibold">{alert.holders?.toLocaleString()}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3">
                  <div className="text-xs text-slate-400">AI Confidence</div>
                  <div className={`text-2xl font-bold ${getConfidenceColor(alert.ai_confidence)}`}>
                    {alert.ai_confidence}%
                  </div>
                </div>
                <div className="rounded-xl bg-purple-500/10 border border-purple-500/20 p-3">
                  <div className="text-xs text-slate-400">Pump Probability</div>
                  <div className={`text-2xl font-bold ${getConfidenceColor(alert.pump_probability)}`}>
                    {alert.pump_probability}%
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black/40 rounded-xl px-4 py-2 mb-4 text-xs font-mono text-slate-300">
                {alert.contract_address || "No contract"}
                <button
                  onClick={() => copyContract(alert.contract_address)}
                  className="ml-auto text-emerald-400 hover:text-emerald-300 font-sans"
                >
                  Copy
                </button>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-emerald-500 text-black py-3 rounded-xl font-semibold hover:bg-emerald-400">
                  View Chart
                </button>
                <a
                  href={alert.telegram_url || "#"}
                  target="_blank"
                  className="px-6 py-3 border border-indigo-500/30 text-indigo-400 rounded-xl hover:bg-indigo-500/10"
                >
                  Telegram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}