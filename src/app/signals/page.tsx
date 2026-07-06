"use client";
import { Copy, ExternalLink, ShieldCheck, AlertTriangle } from "lucide-react";

export default function TokenSignalPage() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold">PEPE UNCHAINED <span className="text-slate-500">($PEPU)</span></h1>
          <p className="text-slate-400 mt-2">Contract: 0x1234...abcd <button className="ml-2 underline">Copy</button></p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/30 px-6 py-3 rounded-2xl text-center">
          <div className="text-emerald-400 text-sm">AI Recommendation</div>
          <div className="text-2xl font-bold">STRONG BUY</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column: Metrics */}
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="text-slate-400 text-xs">Market Cap</div>
              <div className="text-xl font-bold mt-1">$4.2M</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="text-slate-400 text-xs">Liquidity</div>
              <div className="text-xl font-bold mt-1">$890K</div>
            </div>
          </div>
          
          {/* Mock Chart Area */}
          <div className="bg-black/40 border border-white/10 h-64 rounded-2xl flex items-center justify-center text-slate-500">
            [Technical Analysis Chart Placeholder - Connect TradingView Widget Here]
          </div>
        </div>

        {/* Right Column: AI Analysis */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-6">
          <h3 className="font-bold border-b border-white/10 pb-4">AI Risk Analysis</h3>
          <div className="flex items-center gap-3"><ShieldCheck className="text-emerald-500" /> Contract Verified</div>
          <div className="flex items-center gap-3"><ShieldCheck className="text-emerald-500" /> Liquidity Locked</div>
          <div className="flex items-center gap-3"><AlertTriangle className="text-yellow-500" /> High Holder Concentration</div>
          
          <div className="pt-6 border-t border-white/10">
            <h3 className="font-bold mb-4">Trade Strategy</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span>Entry:</span> <span className="font-mono">$0.000012</span></div>
              <div className="flex justify-between"><span>Target:</span> <span className="font-mono text-emerald-400">$0.000018</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}