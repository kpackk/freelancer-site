"use client";

import { useEffect } from "react";

// TODO: replace with real counter ID after registering in Yandex.Metrika (CMPA-42)
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

  return null;
}
