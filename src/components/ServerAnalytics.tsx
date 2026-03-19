"use client";

import { useEffect } from "react";

function sendEvent(
  event: string,
  page: string,
  metadata?: Record<string, string>
) {
  const body = JSON.stringify({ event, page, metadata });
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/analytics/track", new Blob([body], { type: "application/json" }));
  } else {
    fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  }
}

export default function ServerAnalytics() {
  // Page view
  useEffect(() => {
    sendEvent("page_view", window.location.pathname);
  }, []);

  // CTA click tracking via data attributes
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track-cta]");
      if (!el) return;
      const ctaType = el.getAttribute("data-track-cta") || "unknown";
      sendEvent("cta_click", window.location.pathname, { type: ctaType });
    }
    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Auto-detect CTA clicks on contact links (Telegram, email, tel:, WhatsApp)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      let ctaType: string | null = null;
      if (href.startsWith("https://t.me/")) ctaType = "telegram";
      else if (href.startsWith("mailto:")) ctaType = "email";
      else if (href.startsWith("tel:")) ctaType = "phone";
      else if (href.startsWith("https://wa.me/")) ctaType = "whatsapp";
      if (ctaType) {
        sendEvent("cta_click", window.location.pathname, { type: ctaType });
      }
    }
    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Scroll depth tracking (50% and 100%)
  useEffect(() => {
    let fired50 = false;
    let fired100 = false;
    function onScroll() {
      if (fired50 && fired100) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = total > 0 ? scrolled / total : 0;
      if (!fired50 && pct >= 0.5) {
        fired50 = true;
        sendEvent("scroll_depth", window.location.pathname, { depth: "50" });
      }
      if (!fired100 && pct >= 0.95) {
        fired100 = true;
        sendEvent("scroll_depth", window.location.pathname, { depth: "100" });
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
