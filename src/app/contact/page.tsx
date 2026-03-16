import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакт — заказать разработку",
  description:
    "Обсудим вашу задачу: Telegram, email или форма. Отвечаю в течение нескольких часов в рабочие дни. Консультация бесплатно.",
  openGraph: {
    title: "Контакт — заказать разработку",
    description:
      "Свяжитесь по Telegram, email или форме. Консультация бесплатно.",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Контакты</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Опишите задачу — отвечу с оценкой в течение нескольких часов.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href="https://t.me/ruslan_web_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <span className="text-2xl">💬</span>
          <div>
            <p className="text-sm font-medium">Telegram</p>
            <p className="text-sm text-zinc-500">@ruslan_web_dev</p>
          </div>
        </a>
        <a
          href="mailto:hello@ruslanweb.ru"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <span className="text-2xl">✉️</span>
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-zinc-500">hello@ruslanweb.ru</p>
          </div>
        </a>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <a
          href="https://kwork.ru/user/ruslan_web"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <span className="text-2xl">🛒</span>
          <div>
            <p className="text-sm font-medium">Kwork</p>
            <p className="text-sm text-zinc-500">Профиль на Kwork</p>
          </div>
        </a>
        <a
          href="https://fl.ru/users/ruslan_web"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <span className="text-2xl">💼</span>
          <div>
            <p className="text-sm font-medium">FL.ru</p>
            <p className="text-sm text-zinc-500">Профиль на FL.ru</p>
          </div>
        </a>
      </div>

      <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

      <ContactForm />
    </section>
  );
}
