declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const YM_ID = process.env.NEXT_PUBLIC_YM_ID
  ? Number(process.env.NEXT_PUBLIC_YM_ID)
  : 0;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/** Send a Yandex.Metrika reachGoal + GA4 event */
export function trackGoal(goal: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  if (YM_ID && window.ym) {
    window.ym(YM_ID, "reachGoal", goal, params);
  }
  if (GA_ID && window.gtag) {
    window.gtag("event", goal, params);
  }
}
