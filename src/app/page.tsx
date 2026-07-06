"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    async function getPrices() {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1');
        const data = await res.json();
        if (Array.isArray(data)) setCoins(data);
      } catch (err) { console.error("Data fetch failed"); }
    }
    getPrices();
    const interval = setInterval(getPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      {/* Live Ticker */}
      <div className="border-b border-white/10 bg-black/40 py-2 px-6">
        <div className="flex gap-8 animate-pulse text-[10px] text-slate-400">
          {coins.slice(0, 5).map(c => <span key={c.id}>{c.symbol.toUpperCase()}: ${c.current_price?.toLocaleString()}</span>)}
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">Market Dashboard</h1>
          <p className="text-slate-400 mt-2">Real-time intelligence for professional traders.</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Table (Col 1-2) */}
          <div className="lg:col-span-2 border border-white/10 rounded-2xl bg-black/40 overflow-hidden">
            <div className="p-4 border-b border-white/10 font-bold">Top Assets</div>
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-slate-400">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">24h</th>
                  <th className="p-4">Mkt Cap</th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <tr key={coin.id} className="border-t border-white/5 hover:bg-white/5">
                    <td className="p-4 flex items-center gap-2">
                      <img src={coin.image} className="w-5 h-5 rounded-full" alt={coin.name} />
                      {coin.name}
                    </td>
                    <td className="p-4">${coin.current_price?.toLocaleString()}</td>
                    <td className={`p-4 ${(coin.price_change_percentage_24h ?? 0) > 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {(coin.price_change_percentage_24h ?? 0).toFixed(2)}%
                    </td>
                    <td className="p-4">${(coin.market_cap / 1000000000).toFixed(2)}B</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Sidebar Widgets (Col 3) */}
          <div className="space-y-6">
            
            {/* AI Signal Widget */}
            <div className="border border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-5">
              <h3 className="font-bold text-emerald-400 mb-3">⚡ Live AI Signals</h3>
              <div className="space-y-3">
                <div className="bg-black/30 p-3 rounded-lg text-sm">PEPE: Bullish Accumulation</div>
                <div className="bg-black/30 p-3 rounded-lg text-sm">SOL: High Volatility</div>
              </div>
            </div>

            {/* News Feed */}
            <div className="border border-white/10 rounded-2xl bg-white/5 p-5">
              <h3 className="font-bold mb-3">Latest News</h3>
              <div className="space-y-3 text-xs text-slate-400">
                <p>• Bitcoin ETFs see massive inflows.</p>
                <p>• Regulation updates in Asia.</p>
                <p>• DeFi protocols reach new TVL highs.</p>
              </div>
            </div>

            {/* Whale Activity */}
            <div className="border border-white/10 rounded-2xl bg-white/5 p-5">
              <h3 className="font-bold mb-3 text-purple-400">Whale Movements</h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between"><span>0x...889</span><span className="text-emerald-400">+500 ETH</span></div>
                <div className="flex justify-between"><span>0x...123</span><span className="text-red-400">-1M USDT</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}