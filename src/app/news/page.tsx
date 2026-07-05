const newsArticles = [
  { id: 1, title: "Bitcoin Breaks Resistance as ETF Inflows Surge", category: "Bitcoin", source: "CoinDesk", time: "2h ago", summary: "BTC price action shows strength as institutional demand reaches new ATH levels this week." },
  { id: 2, title: "Solana DeFi TVL Hits New Milestone", category: "Solana", source: "The Block", time: "4h ago", summary: "Decentralized finance on Solana is seeing massive growth across lending protocols." },
  { id: 3, title: "Pump.fun Regulatory Review Incoming", category: "Regulation", source: "CryptoPanic", time: "6h ago", summary: "Authorities are closely monitoring the recent activity in memecoin deployment platforms." },
  { id: 4, title: "Ethereum Layer 2 Scaling Solutions Explained", category: "Layer 2", source: "AlphaPulse", time: "8h ago", summary: "A deep dive into how ZK-rollups are changing the game for Ethereum users." },
  { id: 5, title: "Memecoin Season: What to Watch", category: "Memecoins", source: "Decrypt", time: "10h ago", summary: "Market sentiment suggests a rotation into small-cap memecoins across Base and Solana." },
  { id: 6, title: "DeFi Yield Protocols See Rate Hikes", category: "DeFi", source: "CoinTelegraph", time: "12h ago", summary: "Interest rates on major stablecoin lending platforms are trending upwards." },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white p-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold mb-4">Crypto Intelligence News</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {["All", "Bitcoin", "Solana", "Memecoins", "DeFi", "Layer 2", "Regulation"].map((cat) => (
              <button key={cat} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm hover:border-emerald-500/50 transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {newsArticles.map((article) => (
              <div key={article.id} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-emerald-500/30 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.time}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-slate-400 text-sm mb-4">{article.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 italic">Source: {article.source}</span>
                  <button className="text-sm font-semibold text-emerald-400 hover:text-emerald-300">Read More →</button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
              <h3 className="font-bold mb-4 text-purple-400">🔥 Breaking News</h3>
              <ul className="space-y-4">
                <li className="text-sm">Institutional Bitcoin adoption continues...</li>
                <li className="text-sm">New Airdrop criteria announced for...</li>
                <li className="text-sm">SEC meeting scheduled for Friday...</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-bold mb-4">Editor's Picks</h3>
              <ul className="space-y-4">
                <li className="text-sm text-slate-300">How to secure your wallet</li>
                <li className="text-sm text-slate-300">Understanding liquidity pools</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}