export default function AIAnalysis() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white p-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-indigo-400">AI Intelligence</h1>
            <p className="text-slate-400">Predictive analysis for PEPE/ETH</p>
          </div>
          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm hover:border-indigo-500">
            Select Token ▼
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Gauge: Bullish Score */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
            <div className="text-sm text-slate-400 mb-2">Bullish Score</div>
            <div className="text-4xl font-extrabold text-emerald-400">88%</div>
            <div className="mt-4 h-2 w-full bg-white/10 rounded-full">
              <div className="h-2 bg-emerald-500 rounded-full" style={{width: '88%'}}></div>
            </div>
          </div>

          {/* Gauge: Bearish Score */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
            <div className="text-sm text-slate-400 mb-2">Bearish Score</div>
            <div className="text-4xl font-extrabold text-red-400">12%</div>
            <div className="mt-4 h-2 w-full bg-white/10 rounded-full">
              <div className="h-2 bg-red-500 rounded-full" style={{width: '12%'}}></div>
            </div>
          </div>

          {/* Gauge: Risk */}
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 text-center">
            <div className="text-sm text-slate-400 mb-2">Liquidity Quality</div>
            <div className="text-4xl font-extrabold text-indigo-400">High</div>
            <div className="mt-4 h-2 w-full bg-white/10 rounded-full">
              <div className="h-2 bg-indigo-500 rounded-full" style={{width: '95%'}}></div>
            </div>
          </div>

        </div>

        {/* Main Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Trade Setup */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold mb-6">Suggested Strategy</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Entry</span>
                <span className="font-mono text-emerald-400">$0.0000125</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Stop Loss</span>
                <span className="font-mono text-red-400">$0.0000105</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Take Profit 1</span>
                <span className="font-mono text-emerald-400">$0.0000150</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-slate-400">Take Profit 2</span>
                <span className="font-mono text-emerald-400">$0.0000180</span>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold mb-4">AI Insight Summary</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              The AI model detects an accumulation pattern in major whale wallets over the last 4 hours. 
              Volume is trending upwards by 14%, and holder distribution shows low wallet concentration. 
              <br/><br/>
              <strong>Recommendation:</strong> Bullish outlook. Maintain position if above support level $0.000011.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}