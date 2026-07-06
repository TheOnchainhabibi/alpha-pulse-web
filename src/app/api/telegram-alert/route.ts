import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const webhookSecret = process.env.ALPHAPULSE_WEBHOOK_SECRET!;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export async function GET() {
  return NextResponse.json({ 
    status: "ok", 
    message: "AlphaPulse Telegram webhook is live and ready." 
  });
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");

    if (authHeader !== `Bearer ${webhookSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const alertData = {
      token_name: body.token_name || body.name || "Unknown Token",
      symbol: body.symbol || "UNKNOWN",
      chain: body.chain || "ETH",
      market_cap: Number(body.market_cap || 0),
      liquidity: Number(body.liquidity || 0),
      holders: Number(body.holders || 0),
      age: body.age || "Just now",
      smart_money_buys: Number(body.smart_money_buys || 0),
      volume_24h: Number(body.volume_24h || body.volume || 0),
      risk_score: Number(body.risk_score || 50),
      ai_confidence: Number(body.ai_confidence || 70),
      pump_probability: Number(body.pump_probability || 60),
      contract_address: body.contract_address || "",
      telegram_url: body.telegram_url || "https://t.me/AlphaPulse",
      source: "telegram",
    };

    const { data, error } = await supabaseAdmin
      .from("alerts")
      .insert(alertData)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, alert: data });

  } catch (error: any) {
    console.error("Webhook error:", error);
    return NextResponse.json({ 
      error: error.message || "Internal server error" 
    }, { status: 500 });
  }
}