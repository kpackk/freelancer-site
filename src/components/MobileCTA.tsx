"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { trackGoal } from "@/lib/analytics";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don't show on contact page — user is already there
  if (pathname === "/contact" || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden dark:border-zinc-800 dark:bg-zinc-950/95">
      <Link
        href="/contact"
        className="block w-full rounded-full bg-zinc-900 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        onClick={() => trackGoal("mobile_cta_click")}
      >
        Обсудить проект — бесплатная оценка
      </Link>
    </div>
  );
}
