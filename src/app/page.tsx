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
      } catch (err) {
        console.error("API Fetch failed");
      }
    }
    getPrices();
  }, []);

  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
          AlphaPulse Intelligence
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6">Market Overview</h2>
        <div className="border border-white/10 rounded-2xl bg-black/40 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-400">
              <tr>
                <th className="p-4">Asset</th>
                <th className="p-4">Price</th>
                <th className="p-4">24h Change</th>
              </tr>
            </thead>
            <tbody>
              {coins.length > 0 ? (
                coins.map((coin) => (
                  <tr key={coin.id} className="border-t border-white/5">
                    <td className="p-4 flex items-center gap-3">
                      <img src={coin.image} className="w-6 h-6 rounded-full" alt={coin.name} />
                      {coin.name}
                    </td>
                    <td className="p-4">${coin.current_price?.toLocaleString()}</td>
                    <td className={`p-4 ${(coin.price_change_percentage_24h ?? 0) > 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {(coin.price_change_percentage_24h ?? 0).toFixed(2)}%
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-slate-500">Loading live data...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}