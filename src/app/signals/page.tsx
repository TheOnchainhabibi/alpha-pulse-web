"use client";
import { useEffect, useState } from "react";
import { Copy, ShieldCheck, TrendingUp, DollarSign, Activity } from "lucide-react";

export default function TokenSignalPage() {
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    // 1. Fetch live data from DexScreener for a trending token
    fetch("https://api.dexscreener.com/latest/dex/search/?q=solana")
      .then(res => res.json())
      .then(data => {
        if (data.pairs && data.pairs.length > 0) setToken(data.pairs[0]);
      });

    // 2. Load TradingView Chart Widget
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": "BINANCE:BTCUSDT",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#000000",
      "enable_publishing": false,
      "withdateranges": true,
      "hide_side_toolbar": false
    });
    document.getElementById("tradingview_chart")?.appendChild(script);
  }, []);

  if (!token) return <div className="p-20 text-center">Loading Market Terminal...</div>;

  return (
    <div className="min-h-screen bg-[#05070f] text-white p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8 bg-white/5 p-6 rounded-3xl border border-white/10">
        <div>
          <h1 className="text-4xl font-bold">{token.baseToken.name} <span className="text-slate-500">({token.baseToken.symbol})</span></h1>
          <p className="text-emerald-400 mt-2 flex items-center gap-2"><ShieldCheck size={18}/> Contract Verified on {token.chainId}</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-bold">Buy Now</button>
          <button className="border border-white/10 px-6 py-3 rounded-xl font-bold hover:bg-white/10">Add to Watchlist</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <div id="tradingview_chart" className="h-[500px] border border-white/10 rounded-3xl overflow-hidden bg-black/40"></div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[ {l: "Price", v: token.priceUsd}, {l: "Market Cap", v: "$" + token.fdv?.toLocaleString()}, {l: "Volume 24h", v: "$" + token.volume?.h24?.toLocaleString()}, {l: "Liquidity", v: "$" + token.liquidity?.usd?.toLocaleString()} ].map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <div className="text-xs text-slate-400 mb-1">{m.l}</div>
                <div className="font-bold font-mono">{m.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Analysis Sidebar */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl h-fit">
          <h3 className="font-bold text-xl mb-6">AI Market Intelligence</h3>
          <div className="space-y-6">
            <div>
              <div className="text-sm text-slate-400 mb-2">AI Confidence</div>
              <div className="h-3 bg-white/10 rounded-full"><div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div></div>
            </div>
            <div>
              <div className="text-sm text-slate-400 mb-2">Risk Score</div>
              <div className="h-3 bg-white/10 rounded-full"><div className="h-full bg-red-500 rounded-full" style={{width: '18%'}}></div></div>
            </div>
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <p className="text-sm"><strong>Recommendation:</strong> Bullish momentum detected. High volume profile suggests breakout potential.</p>
            </div>
            <button className="w-full bg-indigo-600 py-3 rounded-xl font-bold hover:bg-indigo-500">Run Full On-Chain Analysis</button>
          </div>
        </div>
      </div>
    </div>
  );
}