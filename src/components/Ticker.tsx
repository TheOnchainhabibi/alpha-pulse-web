"use client";
import { useEffect, useState } from "react";

export default function Ticker() {
  const [prices, setPrices] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,pepe,dogecoin&order=market_cap_desc");
        const data = await res.json();
        setPrices(data);
      } catch (e) {
        console.log("Error fetching prices");
      }
    }
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Updates every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-8 overflow-hidden whitespace-nowrap bg-black/40 border-b border-white/10 py-2 px-4 text-sm text-slate-300">
      {prices.map((coin) => (
        <div key={coin.id} className="flex gap-2">
          <span className="font-bold text-white uppercase">{coin.symbol}</span>
          <span>${coin.current_price.toLocaleString()}</span>
          <span className={coin.price_change_percentage_24h > 0 ? "text-emerald-400" : "text-red-400"}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
      ))}
    </div>
  );
}