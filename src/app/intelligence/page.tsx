"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { supabase } from "@/lib/supabase";

export default function IntelligencePage() {
  const [selectedToken, setSelectedToken] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analysisMode, setAnalysisMode] = useState<'overview' | 'chart' | 'scams'>('overview');
  
  // --- MOCK DATA ---
  const [statisticsData] = [
    { title: "Tokens Analyzed", value: "128,432", change: "+12%" },
    { title: "AI Score Accuracy", value: "98%", change: "+2.1%" },
    { title: "Active Users", value: "10,293", change: "+5.2%" },
  ];

  const [smartMoneyMovements] = [
    { wallet: "8x...G...", type: "Buy", amount: "$500k", time: "2 mins ago", risk: "Low" },
    { wallet: "9aEi...", type: "Transfer", amount: "$1.2M", time: "5 mins ago", risk: "High" },
    { wallet: "7F7z...", type: "Sell", amount: "$300k", time: "1 min ago", risk: "Critical" },
  ];

  // --- LOGIC ---
  useEffect(() => {
    async function loadData() {
      try {
        // In production, we fetch real alerts
        // For now, we use mock data for design purposes
        const mockData = [
          {
            id: "eth_001",
            token_name: "Alpha Cat",
            symbol: "$ACAT",
            chain: "ETH",
            price: 0.00014,
            mcap: 3100000,
            liq: 720000,
            holders: 1560,
            age: "Just now",
            smart_money_buys: 14,
            volume_24h: 1800000,
            risk_score: 18,
            ai_confidence: 94,
            pump_probability: 85,
            contract_address: "0x987...",
            telegram_url: "https://t.me/test",
            image: "https://via.placeholder.com/150"
          },
          {
            id: "sol_002",
            token_name: "Pump King",
            symbol: "$PKING",
            chain: "Solana",
            price: 0.02,
            mcat: 560000,
            liq: 98000,
            holders: 210,
            age: "2 mins ago",
            smart_money_buys: 3,
            volume_24h: 210000,
            risk_score: 78,
            ai_confidence: 55,
            pump_probability: 40,
            contract_address: "So1111...",
            telegram_url: "https://t.me/pump",
            image: "https://via.placeholder.com/150?text=🔥"
          },
          {
            id: "base_003",
            token_name: "Shibarium3D",
            symbol: "$SHIB3",
            chain: "Base",
            price: 0.004,
            mcap: 900000,
            liq: 320,
            holders: 3200,
            age: "1 day",
            smart_money_buys: 120,
            volume_24h: 45000,
            risk_score: 95,
            ai_confidence: 99,
            pump_probability: 99,
            contract_address: "0xA4b...",
            telegram_url: "https://t.me/shib",
            image: "https://via.placeholder.com/150?text=🐕"
          }
        ];

        setSelectedToken(mockData[0]); // Set default
        setLoading(false);
      } catch (error) {
        console.error("Error loading mock data:", error);
        setLoading(false); 
      }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      {/* Top Ticker */}
      <div className="bg-black border-b border-gray-800 py-2 px-4 text-xs font-mono text-gray-400 flex justify-between sticky top-0 z-50">
         <span className="text-green-500 mr-4">● LIVE FEED</span> 
         <div className="ml-auto opacity-50 hover:opacity-100 transition-opacity">
           FEAR & GREED: 72 • DOMINANCE: 54%
         </div>
      </div>

      <Navbar />

      {/* AI Intelligence Terminal */}
      <main className="container mx-auto px-6 pt-20 pb-20 max-w-7xl relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-8 mb-10 border-b border-b border-gray-800 pb-10">
          <div>
             <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-blue-600 bg-clip-text bg-[linear-gradient(to_right,#22d3ee,_#0ea5e9),to(#111827)] mb-2">
               🧠️ Intelligence Command Center
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-2">
              Real-time market monitoring, whale tracking, and AI-driven alpha signals.
            </p>
          </div>
          
          {/* View Switch Buttons */}
          <div className="hidden md:flex gap-2">
             <button onClick={() => setAnalysisMode('overview')} className={`px-6 py-2 rounded-lg font-bold text-sm transition-colors ${analysisMode === 'overview' ? 'bg-blue-600 text-white' : 'bg-transparent hover:bg-white/10 hover:bg-white/5 text-blue-400'}`}>Overview</button>
             <button onClick={() => setAnalysisMode('chart')} className={`px-6 py-2 rounded-lg font-bold text-sm transition-colors ${analysisMode === 'chart' ? 'bg-green-600 text-white' : 'bg-transparent hover:bg-white/10 hover:bg-white/5 text-green-400'}`}>Chart</button>
             <button onClick={() => setAnalysisMode('scams')} className={`px-6 py-2 rounded-lg font-bold text-sm transition-colors ${analysisMode === 'scams' ? 'bg-red-600 text-white' : 'bg-transparent hover:bg-white/10 hover:bg-white/5 text-red-400'}`}>Scans</button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">

          {/* COLUMN 1: ANALYSIS OVERVIEW / STATS */}
          <section className="col-span-1 bg-[#0A0A0A] border border border-gray-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
             <div className="grid grid-cols-2 gap-4 mb-8">
                {statisticsData.map((stat) => (
                  <div key={stat.title} className="p-4 bg-white/[0.03] rounded-lg shadow-inner-box-10 shadow-sm flex items-center justify-center cursor-pointer hover:bg-white/[0.05] transition-all duration-200">
                     <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                     <span className="text-xs text-gray-500">{stat.change} %</span>
                  </div>
                ))}
             </div>
             
             {/* Whale Tracker Table */}
             <section className="mt-6 border-t border-t border-gray-700 px-4">
                 <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Smart Money Activity</h3>
                 <table className="w-full overflow-x-auto">
                    <thead className="bg-black/50 text-left text-xs text-gray-500">
                      <tr><th className="px-3 py-2 text-left text-gray-500 uppercase tracking-wider">Wallet</th></tr>
                      <tr><th className="px-3 py-2 text-left text-gray-500 uppercase tracking-wider">Type</th></tr>
                      <th className="px-3 py-2 text-left text-gray-500 uppercase tracking-wider">$ Amount</th></tr>
                      <th className="px-3 py-2 text-left text-gray-500 uppercase tracking-wider">Risk</th></tr>
                    </thead>
                    <tbody>
                       {smartMoneyMovements.map((row) => (
                         <tr key={row.id} className="hover:bg-white/5 transition-colors duration-200 last:border-b border-b border-gray-900/20">
                            <td className="px-3 py-2 font-mono text-xs text-white">{row.wallet.slice(0,6)}...</td>
                            <td className={`px-3 py-2 text-${row.type === 'Buy' ? 'text-green-400' : 'text-red-400'} font-semibold`}>{row.type}</td>
                            <td className="px-3 py-2 font-mono text-white">${(row.amount).toLocaleString()}</td>
                            <td className={`px-3 py-2 text-center rounded-full w-fit ${row.risk <= 25 ? 'bg-green-500/30 text-green-400' : row.risk >= 40 ? 'bg-yellow-500/30 text-yellow-500' : 'bg-red-500/30'} font-bold text-white`}>{row.risk}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
             </section>
          </section>

          {/* COLUMN 2: AI SIGNALS LIST */}
          <section className="col-span-1 xl:col-span-2 space-y-4">
             <div className="mb-6 flex justify-between items-end border-b border-gray-800 pb-2">
                 <h2 className="text-xl font-bold text-white">Live Alpha Signals</h2>
                 <Link href="/live-alerts" className="text-xs font-semibold text-green-400 hover:text-green-300">View All →</Link>
             </div>

             {/* Signal Cards */}
             {mockData.map((token) => (
               <div key={token.id} className="group bg-[#0A0A0A] border border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-green-500/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                 
                 {/* Hover Glow Effect */}
                 <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 
                 {/* Top Info */}
                 <div className="flex justify-between items-start mb-3">
                     <img src={token.image || '/placeholder.png'} alt={token.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-offset-2 ring-gray-100 shadow-sm group-hover:ring-green-50 transform group-hover:scale-110 transition-transform duration-200">
                        <div>
                           <h3 className="font-bold text-white text-base group-hover:text-green-400 transition-colors">{token.token_name}</h3>
                           <span className="text-xs text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-full inline-block">{token.symbol}</span>
                        </div>
                     </div>
                     
                     <div className="ml-auto">
                       {/* Price Action Badge */}
                       <span className={`text-xs font-bold px-2 py-1 rounded-md flex items-center ${
                         Number(token.price_change_percentage_24h || 0) >= 0 
                           ? 'text-green-600 bg-green-100' 
                           : 'text-red-600 bg-red-100'
                       }`}>
                         {(Number(token.price_change_percentage_24h || 0) >= 0 ? '+' : ''}
                         {(Number(token.price_change_percentage_24h || 0)).toFixed(2)}%
                       </span>
                     </div>

                     {/* Main Price */}
                     <div className="mt-2 mb-3">
                        <div className="text-2xl font-extrabold text-white">${(Number(token.price || 0).toLocaleString(undefined, {minimumFractionDigits: 2})}$</div>
                        
                        <!-- Mini Chart Placeholder -->
                        <div className="h-12 w-full bg-gray-800/30 rounded-lg overflow-hidden relative opacity-60">
                            <div className={`w-full h-[100%] bg-gradient-to-t from-${Number(token.price_change_percentage_24h >= 0 ? 'green-500/20' : 'red-500/20'}-to-transparent skew-y-[-15deg]`} style={{width: Math.abs(Number(token.price_change_percentage_24h||0)*2 + '%'}}}></div>
                            
                            {/* AI Score Tooltip */}
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border border-gray-900/50 rounded-b-lg p-2 w-32 z-20 hidden group-hover:block text-xs text-gray-400 font-medium leading-relaxed">
                               <strong>AI Score:</strong> {(token.ai_confidence || 0)}%<br/>
                               <span className="Risk Level:</span>
                               <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden"><div className={`h-[${(token.ai_confidence||0)*100}%]px] bg-gradient-to-r from-green-400/50 via-transparent to-transparent w-full rounded-full`}></div></div>
                            </div>
                        </div>
                    </div>

                    </div>