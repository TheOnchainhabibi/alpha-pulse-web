export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">Choose Your Alpha</h1>
        <p className="text-xl text-slate-400 mb-16">Unlock the full power of AlphaPulse intelligence.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="border border-white/10 bg-white/5 p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Free</h2>
            <div className="text-4xl font-bold mb-6">$0</div>
            <ul className="text-left space-y-4 mb-8 text-slate-300">
              <li>✓ Basic News</li>
              <li>✓ Delayed Alerts</li>
              <li>✓ Community Access</li>
            </ul>
            <button className="w-full border border-white/20 py-3 rounded-xl font-bold hover:bg-white/10">Current Plan</button>
          </div>

          {/* Pro Tier */}
          <div className="border-2 border-emerald-500 bg-emerald-500/5 p-8 rounded-2xl relative">
            <div className="absolute -top-3 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
            <h2 className="text-xl font-bold mb-4">Pro</h2>
            <div className="text-4xl font-bold mb-6">$49</div>
            <ul className="text-left space-y-4 mb-8 text-slate-300">
              <li>✓ Real-time AI Signals</li>
              <li>✓ Whale Wallet Tracking</li>
              <li>✓ Ad-Free Experience</li>
            </ul>
            <button className="w-full bg-emerald-500 text-black py-3 rounded-xl font-bold hover:bg-emerald-400">Upgrade Now</button>
          </div>

          {/* VIP Tier */}
          <div className="border border-white/10 bg-white/5 p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">VIP</h2>
            <div className="text-4xl font-bold mb-6">$199</div>
            <ul className="text-left space-y-4 mb-8 text-slate-300">
              <li>✓ 1-on-1 Mentoring</li>
              <li>✓ Direct API Access</li>
              <li>✓ Exclusive Alpha Group</li>
            </ul>
            <button className="w-full border border-emerald-500 text-emerald-400 py-3 rounded-xl font-bold hover:bg-emerald-500/10">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
}