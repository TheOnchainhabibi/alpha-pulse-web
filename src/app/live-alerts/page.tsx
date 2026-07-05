const alerts = [
  {
    id: 1,
    name: "Pepe Unchained",
    symbol: "PEPU",
    chain: "ETH",
    marketCap: "$4.2M",
    liquidity: "$890K",
    holders: 1240,
    age: "2 mins ago",
    smartMoneyBuys: 12,
    volume: "$2.1M",
    riskScore: 22,
    aiConfidence: 91,
    pumpProbability: 87,
    contract: "0x1234...abcd",
  },
  {
    id: 2,
    name: "Wojak Finance",
    symbol: "WOJAK",
    chain: "SOL",
    marketCap: "$1.8M",
    liquidity: "$420K",
    holders: 876,
    age: "5 mins ago",
    smartMoneyBuys: 8,
    volume: "$980K",
    riskScore: 45,
    aiConfidence: 78,
    pumpProbability: 72,
    contract: "So1234...wxyz",
  },
  {
    id: 3,
    name: "Based God",
    symbol: "BGOD",
    chain: "BASE",
    marketCap: "$890K",
    liquidity: "$210K",
    holders: 432,
    age: "8 mins ago",
    smartMoneyBuys: 5,
    volume: "$450K",
    riskScore: 65,
    aiConfidence: 65,
    pumpProbability: 61,
    contract: "0xabcd...5678",
  },
  {
    id: 4,
    name: "Moon Doge",
    symbol: "MDOGE",
    chain: "BSC",
    marketCap: "$2.4M",
    liquidity: "$560K",
    holders: 2100,
    age: "12 mins ago",
    smartMoneyBuys: 18,
    volume: "$1.4M",
    riskScore: 30,
    aiConfidence: 85,
    pumpProbability: 80,
    contract: "0xefgh...9012",
  },
  {
    id: 5,
    name: "Pump King",
    symbol: "PKING",
    chain: "SOL",
    marketCap: "$560K",
    liquidity: "$98K",
    holders: 210,
    age: "15 mins ago",
    smartMoneyBuys: 3,
    volume: "$210K",
    riskScore: 78,
    aiConfidence: 55,
    pumpProbability: 50,
    contract: "So1xyz...3456",
  },
  {
    id: 6,
    name: "Alpha Cat",
    symbol: "ACAT",
    chain: "ETH",
    marketCap: "$3.1M",
    liquidity: "$720K",
    holders: 1560,
    age: "18 mins ago",
    smartMoneyBuys: 14,
    volume: "$1.8M",
    riskScore: 18,
    aiConfidence: 94,
    pumpProbability: 90,
    contract: "0x9876...dcba",
  },
];

function getRiskColor(score: number) {
  if (score <= 30) return "text-emerald-400 bg-emerald-500/20";
  if (score <= 60) return "text-yellow-400 bg-yellow-500/20";
  return "text-red-400 bg-red-500/20";
}

function getRiskLabel(score: number) {
  if (score <= 30) return "Low Risk";
  if (score <= 60) return "Medium Risk";
  return "High Risk";
}

function getConfidenceColor(score: number) {
  if (score >= 80) return "text-emerald-400";
  if (score >= 60) return "text-yellow-400";
  return "text-red-400";
}

export default function LiveAlertsPage() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-60 right-10 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs text-emerald-400 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Alerts — Updated every 60 seconds
          </div>
          <h1 className="text-4xl font-extrabold">
            🔔 Live{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              AlphaPulse Alerts
            </span>
          </h1>
          <p className="mt-2 text-slate-300">
            AI-detected high-potential tokens in real time.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button className="rounded-xl border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400 font-semibold">
            All Chains
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-emerald-500/30">
            ETH
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-emerald-500/30">
            SOL
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-emerald-500/30">
            BSC
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-emerald-500/30">
            BASE
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-emerald-500/30">
            Low Risk Only
          </button>
          <button className="rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400 hover:bg-purple-500/20">
            🔒 Premium Alerts
          </button>
        </div>

        {/* Alerts Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-emerald-500/30 transition-all"
            >
              {/* Token Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400/30 to-purple-400/30 border border-white/10 flex items-center justify-center text-lg font-bold">
                    {alert.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{alert.name}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm text-slate-400">
                        ${alert.symbol}
                      </span>
                      <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-400">
                        {alert.chain}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">{alert.age}</div>
                  <div
                    className={`mt-1 rounded-full px-2 py-0.5 text-xs font-semibold ${getRiskColor(alert.riskScore)}`}
                  >
                    {getRiskLabel(alert.riskScore)}
                  </div>
                </div>
              </div>

              {/* Token Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Market Cap</div>
                  <div className="mt-1 font-semibold text-sm">
                    {alert.marketCap}
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Liquidity</div>
                  <div className="mt-1 font-semibold text-sm">
                    {alert.liquidity}
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Holders</div>
                  <div className="mt-1 font-semibold text-sm">
                    {alert.holders.toLocaleString()}
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Volume 24h</div>
                  <div className="mt-1 font-semibold text-sm">
                    {alert.volume}
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Smart Buys</div>
                  <div className="mt-1 font-semibold text-sm text-emerald-400">
                    {alert.smartMoneyBuys} wallets
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Risk Score</div>
                  <div
                    className={`mt-1 font-semibold text-sm ${getRiskColor(alert.riskScore).split(" ")[0]}`}
                  >
                    {alert.riskScore}/100
                  </div>
                </div>
              </div>

              {/* AI Scores */}
              <div className="mb-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                  <div className="text-xs text-slate-400">AI Confidence</div>
                  <div
                    className={`mt-1 text-xl font-extrabold ${getConfidenceColor(alert.aiConfidence)}`}
                  >
                    {alert.aiConfidence}%
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-white/10">
                    <div
                      className="h-1.5 rounded-full bg-emerald-400"
                      style={{ width: `${alert.aiConfidence}%` }}
                    />
                  </div>
                </div>
                <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-3">
                  <div className="text-xs text-slate-400">
                    Pump Probability
                  </div>
                  <div
                    className={`mt-1 text-xl font-extrabold ${getConfidenceColor(alert.pumpProbability)}`}
                  >
                    {alert.pumpProbability}%
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-white/10">
                    <div
                      className="h-1.5 rounded-full bg-purple-400"
                      style={{ width: `${alert.pumpProbability}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Contract */}
              <div className="mb-4 flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <span className="text-xs text-slate-400">Contract:</span>
                <span className="text-xs text-slate-300 font-mono flex-1">
                  {alert.contract}
                </span>
                <button className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold">
                  Copy
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 flex-wrap">
                <button className="flex-1 rounded-xl bg-emerald-500/90 px-3 py-2 text-xs font-semibold text-black hover:bg-emerald-400">
                  View Details
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold hover:border-emerald-500/30">
                  Chart
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold hover:border-emerald-500/30">
                  Share
                </button>
                <button className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-xs font-semibold text-indigo-400 hover:bg-indigo-500/20">
                  Telegram
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Premium Banner */}
        <div className="mt-10 rounded-2xl border border-purple-500/30 bg-purple-500/5 backdrop-blur-xl p-8 text-center">
          <div className="text-2xl font-bold mb-2">
            🔒 Unlock Premium Alerts
          </div>
          <p className="text-slate-300 mb-6">
            Get early access to high-conviction signals before they go public.
            Whale alerts, AI analysis, and more.
          </p>
          <a
            href="/premium"
            className="inline-block rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-black hover:bg-emerald-400"
          >
            Get Premium Access
          </a>
        </div>

      </div>
    </div>
  );
}