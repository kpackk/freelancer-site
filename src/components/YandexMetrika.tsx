"use client";

import { useEffect } from "react";
import { trackGoal } from "@/lib/analytics";

const YM_ID = process.env.NEXT_PUBLIC_YM_ID || "";

export default function YandexMetrika() {
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

  // Scroll-to-bottom goal: fires once per page load when user scrolls near bottom
  useEffect(() => {
    if (!YM_ID) return;
    let fired = false;
    function onScroll() {
      if (fired) return;
      const scrolled = window.scrollY + window.innerHeight;
      if (scrolled >= document.documentElement.scrollHeight - 100) {
        fired = true;
        trackGoal("scroll_bottom");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
