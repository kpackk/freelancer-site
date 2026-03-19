"use client";

import dynamic from "next/dynamic";

const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"), {
  ssr: false,
});
const YandexMetrika = dynamic(() => import("@/components/YandexMetrika"), {
  ssr: false,
});
const ServerAnalytics = dynamic(() => import("@/components/ServerAnalytics"), {
  ssr: false,
});
const MobileCTA = dynamic(() => import("@/components/MobileCTA"), {
  ssr: false,
});

export default function ClientProviders() {
  return (
    <>
      <GoogleAnalytics />
      <YandexMetrika />
      <ServerAnalytics />
      <MobileCTA />
    </>
  );
}
