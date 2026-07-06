"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignUp() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Account created successfully! You can now log in.");
    }
  }

  async function handleLogin() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setMessage(error.message);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-[#05070f] text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-center text-emerald-400 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-slate-400 mb-8">
          Sign in to access your dashboard and saved alerts
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white placeholder:text-slate-500 focus:border-emerald-500 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white placeholder:text-slate-500 focus:border-emerald-500 outline-none"
              placeholder="Minimum 6 characters"
            />
          </div>

          {message && (
            <div className="rounded-2xl bg-white/10 p-4 text-sm text-center border border-white/10">
              {message}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-emerald-500 font-semibold text-black hover:bg-emerald-400 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full py-4 rounded-2xl border border-white/20 font-semibold hover:bg-white/5 disabled:opacity-50"
          >
            Create New Account
          </button>
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          By signing up, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
}