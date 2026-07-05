export default function EducationPage() {
  const articles = [
    { title: "How to Detect Rug Pulls", category: "Security", desc: "A 5-point checklist for verifying smart contracts." },
    { title: "Pump.fun Mechanics", category: "Guides", desc: "Understanding the bonding curve for new token launches." },
    { title: "Risk Management 101", category: "Strategy", desc: "How to size your positions to survive the volatility." },
    { title: "Whale Wallet Tracking", category: "Strategy", desc: "Tools to monitor large holders in real-time." },
  ];

  return (
    <div className="min-h-screen bg-[#05070f] text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">AlphaPulse Education</h1>
        <p className="text-slate-400 mb-10">Master the basics of trading and risk management.</p>

        <div className="grid gap-6">
          {articles.map((article) => (
            <div key={article.title} className="group border border-white/10 bg-white/5 p-6 rounded-2xl hover:border-emerald-500 transition-all cursor-pointer">
              <div className="text-emerald-400 text-xs font-bold mb-2 uppercase">{article.category}</div>
              <h2 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">{article.title}</h2>
              <p className="text-slate-400 mt-2">{article.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}