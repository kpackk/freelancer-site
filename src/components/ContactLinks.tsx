"use client";

import { trackGoal } from "@/lib/analytics";

const links = [
  {
    href: "https://t.me/ruslan_web_dev",
    icon: "\u{1F4AC}",
    label: "Telegram",
    sub: "@ruslan_web_dev",
    goal: "contact_telegram",
    external: true,
  },
  {
    href: "mailto:hello@ruslanweb.ru",
    icon: "\u2709\uFE0F",
    label: "Email",
    sub: "hello@ruslanweb.ru",
    goal: "contact_email",
    external: false,
  },
] as const;

const platforms = [
  {
    href: "https://kwork.ru/user/ruslan_web",
    icon: "\u{1F6D2}",
    label: "Kwork",
    sub: "Профиль на Kwork",
    goal: "contact_kwork",
  },
  {
    href: "https://fl.ru/users/ruslan_web",
    icon: "\u{1F4BC}",
    label: "FL.ru",
    sub: "Профиль на FL.ru",
    goal: "contact_flru",
  },
] as const;

const cardClass =
  "flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600";

export default function ContactLinks() {
  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.goal}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noopener noreferrer" : undefined}
            className={cardClass}
            onClick={() => trackGoal(l.goal)}
          >
            <span className="text-2xl">{l.icon}</span>
            <div>
              <p className="text-sm font-medium">{l.label}</p>
              <p className="text-sm text-zinc-500">{l.sub}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {platforms.map((p) => (
          <a
            key={p.goal}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
            onClick={() => trackGoal(p.goal)}
          >
            <span className="text-2xl">{p.icon}</span>
            <div>
              <p className="text-sm font-medium">{p.label}</p>
              <p className="text-sm text-zinc-500">{p.sub}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
