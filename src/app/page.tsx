"use client";
import { useState } from "react";
import { TrendingUp, Shield, Zap, Search, ChevronRight, Activity } from "lucide-react";

const NETWORKS = ["Ethereum", "Solana", "BNB Chain", "Base", "Arbitrum"];

const MOCK_DATA: any = {
  Ethereum: [{ name: "Pepe", symbol: "PEPE", price: 0.000012, mcap: "4.2B", liq: "890K", vol: "1.2M", aiScore: 92, risk: 15 }, { name: "Uniswap", symbol: "UNI", price: 7.42, mcap: "4.5B", liq: "200M", vol: "300M", aiScore: 78, risk: 10 }],
  Solana: [{ name: "Bonk", symbol: "BONK", price: 0.000021, mcap: "1.2B", liq: "120K", vol: "500K", aiScore: 85, risk: 25 }],
  "BNB Chain": [{ name: "Pancake", symbol: "CAKE", price: 2.10, mcap: "500M", liq: "50M", vol: "20M", aiScore: 70, risk: 20 }],
  Base: [{ name: "Brett", symbol: "BRETT", price: 0.08, mcap: "800M", liq: "40M", vol: "10M", aiScore: 88, risk: 18 }],
  Arbitrum: [{ name: "GMX", symbol: "GMX", price: 25.50, mcap: "2B", liq: "100M", vol: "40M", aiScore: 80, risk: 12 }],
};

export default function HomePage() {
  const [activeNetwork, setActiveNetwork] = useState("Ethereum");

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-200">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight text-white">
          AI-Powered <span className="text-emerald-400">Crypto Intelligence</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Advanced risk analysis, whale tracking, and predictive AI signals for the professional trader.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold transition-all">Explore Intelligence</button>
          <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all">View Token Signals</button>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[ {label: "Tokens Analyzed", val: "24,502"}, {label: "AI Accuracy", val: "94.2%"}, {label: "Active Whales", val: "892"}, {label: "Live Signals", val: "142"} ].map(stat => (
          <div key={stat.label} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
            <div className="text-xs text-slate-400 uppercase">{stat.label}</div>
            <div className="text-2xl font-bold text-white mt-1">{stat.val}</div>
          </div>
        ))}
      </div>

      {/* Network Ticker */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {NETWORKS.map(net => (
            <button 
              key={net}
              onClick={() => setActiveNetwork(net)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeNetwork === net ? "bg-emerald-500 text-black" : "bg-white/5 hover:bg-white/10"}`}
            >
              {net}
            </button>
          ))}
        </div>

        {/* Data Table */}
        <div className="border border-white/10 rounded-3xl bg-black/40 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-xs text-slate-400 uppercase">
              <tr>
                <th className="p-6">Asset</th>
                <th className="p-6">Price</th>
                <th className="p-6">Market Cap</th>
                <th className="p-6">Liquidity</th>
                <th className="p-6">AI Score</th>
                <th className="p-6 text-right">Analysis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {MOCK_DATA[activeNetwork]?.map((token: any) => (
                <tr key={token.symbol} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-bold">{token.symbol[0]}</div>
                    {token.name} <span className="text-slate-500 text-xs">({token.symbol})</span>
                  </td>
                  <td className="p-6 font-mono">${token.price}</td>
                  <td className="p-6 font-mono">{token.mcap}</td>
                  <td className="p-6 font-mono">{token.liq}</td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{width: `${token.aiScore}%`}} />
                      </div>
                      <span className="text-emerald-400 font-bold text-sm">{token.aiScore}</span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-xs bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-lg hover:bg-indigo-500/30">Full Analysis</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Footer Spacer */}
      <div className="h-20" />
    </div>
  );
}