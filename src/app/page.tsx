"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,pepe,dogecoin&order=market_cap_desc')
      .then(res => res.json())
      .then(data => setCoins(data))
      .catch(err => console.error("API Error"));
  }, []);

  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      {/* Live Ticker */}
      <div className="border-b border-white/10 bg-black/40 backdrop-blur-md py-3 px-6">
        <div className="flex gap-10 overflow-x-auto">
          {coins.map((coin) => (
            <div key={coin.id} className="flex gap-2 text-sm whitespace-nowrap">
              <span className="font-bold text-emerald-400">{coin.symbol.toUpperCase()}</span>
              <span className="text-slate-300">${coin.current_price.toLocaleString()}</span>
              <span className={coin.price_change_percentage_24h > 0 ? "text-emerald-400" : "text-red-400"}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
          AI-Powered Crypto Intelligence
        </h1>
        <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
          Real-time market data, AI signals, and whale tracking.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a href="/live-alerts" className="bg-emerald-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-emerald-400">View Alerts</a>
          <a href="/ai-analysis" className="border border-white/10 px-8 py-3 rounded-xl font-bold hover:bg-white/5">View AI Analysis</a>
        </div>
      </div>
    </div>
  );
}