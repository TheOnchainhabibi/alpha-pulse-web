import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlphaPulse | AI Crypto Intelligence & Live Token Alerts",
  description: "Get real-time AI crypto signals, whale wallet tracking, and high-potential token alerts before the market moves.",
  keywords: ["Crypto Signals", "AI Crypto Intelligence", "Token Alerts", "Whale Tracking", "DeFi Intelligence", "Memecoin Alerts", "AlphaPulse"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#05070f] text-white min-h-screen">
        <nav className="border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-emerald-400">
              AlphaPulse
            </a>

            <div className="flex items-center gap-6 text-sm">
              <a href="/" className="hover:text-emerald-400">Home</a>
              <a href="/live-alerts" className="hover:text-emerald-400">Alerts</a>
              <a href="/news" className="hover:text-emerald-400">News</a>
              <a href="/ai-analysis" className="hover:text-emerald-400">AI</a>
              <a href="/education" className="hover:text-emerald-400">Education</a>
              <a href="/dashboard" className="hover:text-emerald-400">Dashboard</a>
              <a href="/login" className="hover:text-emerald-400">Login</a>
              <a
                href="/premium"
                className="rounded-lg bg-emerald-500 px-4 py-2 text-black font-semibold hover:bg-emerald-400"
              >
                Premium
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}