import { NextResponse } from "next/server";
import { appendEvent, rotateEvents } from "@/lib/analytics-store";

const VALID_EVENTS = ["page_view", "cta_click", "scroll_depth"] as const;
type EventName = (typeof VALID_EVENTS)[number];

interface TrackPayload {
  event: EventName;
  page: string;
  metadata?: Record<string, string>;
  timestamp?: string;
}

// Rate limit: 30 events per minute per IP
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 30;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: TrackPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.event || !VALID_EVENTS.includes(body.event)) {
    return NextResponse.json(
      { error: `Invalid event. Allowed: ${VALID_EVENTS.join(", ")}` },
      { status: 400 }
    );
  }

  if (!body.page || typeof body.page !== "string") {
    return NextResponse.json({ error: "Missing page field" }, { status: 400 });
  }

  const entry = {
    event: body.event,
    page: body.page.slice(0, 500),
    metadata: body.metadata ?? {},
    timestamp: body.timestamp || new Date().toISOString(),
    ip: ip.slice(0, 45),
  };

  try {
    await appendEvent(entry);
    // Rotate old entries periodically (every ~100 writes)
    if (Math.random() < 0.01) {
      await rotateEvents(30);
    }
  } catch (err) {
    console.error("Analytics write error:", err);
    return NextResponse.json({ error: "Storage error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
