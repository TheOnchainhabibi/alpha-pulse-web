"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1')
      .then(res => res.json())
      .then(data => setCoins(data))
      .catch(err => console.error("API Error"));
  }, []);

  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      {/* 1. Live Ticker */}
      <div className="border-b border-white/10 bg-black/40 py-2 px-6 overflow-hidden">
        <div className="flex gap-8 animate-pulse text-xs text-slate-400">
          <span>BTC: $67,420 (+2.1%)</span>
          <span>ETH: $3,520 (+1.2%)</span>
          <span>SOL: $185 (+3.4%)</span>
          <span>DOGE: $0.15 (+5.1%)</span>
          <span>Market Cap: $2.4T</span>
          <span>Fear & Greed: 72</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* 2. Market Overview Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Market Overview</h2>
          <div className="border border-white/10 rounded-2xl bg-black/20 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-slate-400 border-b border-white/10">
                <tr>
                  <th className="p-4">Asset</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">24h Change</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <tr key={coin.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-4 flex items-center gap-3">
                      <img src={coin.image} className="w-6 h-6 rounded-full" />
                      {coin.name}
                    </td>
                    <td className="p-4">${coin.current_price.toLocaleString()}</td>
                    <td className={`p-4 ${coin.price_change_percentage_24h > 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className="p-4 text-right">
                      <button className="bg-emerald-500 text-black px-4 py-1 rounded-lg text-xs font-bold">Trade</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Three-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* AI Signals */}
          <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
            <h2 className="text-xl font-bold mb-4 text-emerald-400">Latest AI Signals</h2>
            <div className="space-y-4">
              <div className="border-b border-white/5 pb-3">
                <div className="font-bold">PEPE/ETH</div>
                <div className="text-xs text-slate-400">Confidence: 91% • High Liquidity</div>
              </div>
              <div className="border-b border-white/5 pb-3">
                <div className="font-bold">WIF/SOL</div>
                <div className="text-xs text-slate-400">Confidence: 84% • Trending</div>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
            <h2 className="text-xl font-bold mb-4 text-purple-400">Latest News</h2>
            <div className="space-y-4">
              <p className="text-sm">Bitcoin ETFs see $500M inflow...</p>
              <p className="text-sm">Ethereum upgrade date set...</p>
              <p className="text-sm">New regulation passed in EU...</p>
            </div>
          </div>

          {/* Whale Activity */}
          <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
            <h2 className="text-xl font-bold mb-4 text-indigo-400">Whale Activity</h2>
            <div className="space-y-4">
              <p className="text-sm text-emerald-400">0x...f321 bought 500 ETH</p>
              <p className="text-sm text-red-400">0x...a112 sold 1M PEPE</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}