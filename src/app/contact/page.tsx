import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactLinks from "@/components/ContactLinks";

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

      <ContactLinks />

      <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

      <ContactForm />
    </section>
  );
}
