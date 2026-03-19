import { NextResponse } from "next/server";
import { readEvents } from "@/lib/analytics-store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const events = await readEvents();
    const now = Date.now();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
    const recent = events.filter(
      (e) => new Date(e.timestamp).getTime() > sevenDaysAgo
    );

    // Page views by page
    const pageViews: Record<string, number> = {};
    // CTA clicks by type
    const ctaClicks: Record<string, number> = {};
    // Scroll depth counts
    const scrollDepth: Record<string, number> = {};
    // Unique IPs that viewed pages
    const sessionIps = new Set<string>();
    // IPs that had any interaction beyond page_view
    const engagedIps = new Set<string>();

    for (const e of recent) {
      if (e.event === "page_view") {
        pageViews[e.page] = (pageViews[e.page] || 0) + 1;
        sessionIps.add(e.ip);
      } else if (e.event === "cta_click") {
        const label = e.metadata?.type || "unknown";
        ctaClicks[label] = (ctaClicks[label] || 0) + 1;
        engagedIps.add(e.ip);
      } else if (e.event === "scroll_depth") {
        const depth = e.metadata?.depth || "unknown";
        scrollDepth[depth] = (scrollDepth[depth] || 0) + 1;
        engagedIps.add(e.ip);
      }
    }

    const totalPageViews = Object.values(pageViews).reduce(
      (a, b) => a + b,
      0
    );
    const totalSessions = sessionIps.size;
    const bouncedSessions = totalSessions - engagedIps.size;
    const bounceRate =
      totalSessions > 0
        ? Math.round((bouncedSessions / totalSessions) * 100)
        : 0;

    return NextResponse.json({
      period: "7d",
      totalPageViews,
      totalSessions,
      bounceRate,
      pageViews,
      ctaClicks,
      scrollDepth,
    });
  } catch (err) {
    console.error("Analytics stats error:", err);
    return NextResponse.json({ error: "Read error" }, { status: 500 });
  }
}
