"use client";
import { useState } from "react";
import Link from "next/link";
import { Zap, TrendingUp, BarChart3, Activity, ShieldCheck } from "lucide-react";

export default function IntelligencePage() {
  const [network, setNetwork] = useState("Solana");

  const stats = [
    { title: "AI Market Bias", value: "Bullish", icon: TrendingUp },
    { title: "Smart Money Activity", value: "High", icon: Zap },
    { title: "Rug Pull Risk", value: "Minimal", icon: ShieldCheck },
    { title: "Total Analyzed", value: "1.2M", icon: BarChart3 }
  ];

  const tokens = [
    { name: "PUMP AI", symbol: "PUMP", price: "0.023", mcap: "1.2M", aiScore: 98, risk: "Low", liquidity: "500K" },
    { name: "NEIRO SOL", symbol: "NEIRO", price: "0.004", mcap: "800K", aiScore: 82, risk: "Med", liquidity: "120K" },
  ];

  return (
    <div className="min-h-screen bg-[#05070f] text-white p-6">
      {/* Terminal Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Activity className="text-emerald-400" /> AI Intelligence Terminal
          </h1>
          <p className="text-slate-400">Real-time on-chain analysis for high-conviction signals.</p>
        </div>
        <div className="flex gap-2">
          {["Ethereum", "Solana", "Base", "Sui"].map(n => (
            <button 
              key={n} 
              onClick={() => setNetwork(n)} 
              className={`px-4 py-2 rounded-lg text-sm ${network === n ? "bg-emerald-500 text-black" : "bg-white/5 hover:bg-white/10"}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="border border-white/10 bg-white/5 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-400 text-sm">{stat.title}</span>
              <stat.icon size={20} className="text-emerald-500" />
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Main Signal Feed */}
      <div className="border border-white/10 rounded-2xl bg-black/40 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-400 uppercase text-xs">
            <tr>
              <th className="p-4">Token</th>
              <th className="p-4">Price</th>
              <th className="p-4">Mkt Cap</th>
              <th className="p-4">Liquidity</th>
              <th className="p-4">AI Confidence</th>
              <th className="p-4">Risk</th>
              <th className="p-4 text-right">Analysis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {tokens.map((t, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold">{t.name} ({t.symbol})</td>
                <td className="p-4 font-mono">${t.price}</td>
                <td className="p-4 font-mono">{t.mcap}</td>
                <td className="p-4 font-mono">{t.liquidity}</td>
                <td className="p-4 font-bold text-emerald-400">{t.aiScore}/100</td>
                <td className="p-4 text-orange-400">{t.risk}</td>
                <td className="p-4 text-right">
                  <Link href="/signals" className="inline-block bg-white/10 hover:bg-emerald-500 hover:text-black px-4 py-2 rounded-lg transition-all font-bold">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}