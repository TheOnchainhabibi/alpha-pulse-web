"use client";
import { useState } from "react";
import { Zap, TrendingUp, BarChart3, Activity } from "lucide-react";

export default function IntelligenceDashboard() {
  const [network, setNetwork] = useState("Solana");
  
  const tokens = [
    { name: "PUMP AI", symbol: "PUMP", price: "0.023", mcap: "1.2M", aiScore: 98, risk: "Low", liquidity: "500K", signal: "Strong Buy" },
    { name: "NEIRO SOL", symbol: "NEIRO", price: "0.004", mcap: "800K", aiScore: 82, risk: "Med", liquidity: "120K", signal: "Watch" },
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
            <button key={n} onClick={() => setNetwork(n)} className={`px-4 py-2 rounded-lg text-sm ${network === n ? "bg-emerald-500 text-black" : "bg-white/5"}`}>{n}</button>
          ))}
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        {[ {title: "AI Market Bias", val: "Bullish", icon: TrendingUp}, {title: "Smart Money Activity", val: "High", icon: Zap}, {title: "Rug Pull Risk", val: "Minimal", icon: Activity}, {title: "Total Analyzed", val: "1.2M", icon: BarChart3} ].map((stat, i) => (
          <div key={i} className="border border-white/10 bg-white/5 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-400 text-sm">{stat.title}</span>
              <stat.icon size={20} className="text-emerald-500" />
            </div>
            <div className="text-2xl font-bold">{stat.val}</div>
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
              <tr key={i} className="hover:bg-white/5">
                <td className="p-4 font-bold">{t.name} ({t.symbol})</td>
                <td className="p-4 font-mono">${t.price}</td>
                <td className="p-4 font-mono">{t.mcap}</td>
                <td className="p-4 font-mono">{t.liquidity}</td>
                <td className="p-4 font-bold text-emerald-400">{t.aiScore}/100</td>
                <td className="p-4 text-orange-400">{t.risk}</td>
                <td className="p-4 text-right">
                  <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}