"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackGoal, trackPageView } from "@/lib/analytics";

const YM_ID = process.env.NEXT_PUBLIC_YM_ID || "";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function YandexMetrika() {
  const pathname = usePathname();
  const didTrackInitialPath = useRef(false);

  useEffect(() => {
    if (!YM_ID) return;

    const script = document.createElement("script");
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(${YM_ID}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if ((!YM_ID && !GA_ID) || !pathname) return;

    if (!didTrackInitialPath.current) {
      didTrackInitialPath.current = true;
    } else {
      trackPageView(pathname);
    }

    if (pathname === "/services" || pathname.startsWith("/services/")) {
      trackGoal("services_page_view", { path: pathname });
    }
  }, [pathname]);

  // Scroll-to-bottom goal: resets on each client-side route change
  useEffect(() => {
    if (!YM_ID || !pathname) return;
    let fired = false;
    function onScroll() {
      if (fired) return;
      const scrolled = window.scrollY + window.innerHeight;
      if (scrolled >= document.documentElement.scrollHeight - 100) {
        fired = true;
        trackGoal("scroll_bottom", { path: pathname });
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
