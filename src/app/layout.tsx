import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import YandexMetrika from "@/components/YandexMetrika";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ruslanfreelance.ru";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ruslan — IT-фрилансер | Telegram-боты, сайты, автоматизация",
    template: "%s | Ruslan WEB",
  },
  description:
    "IT-разработчик с опытом 5+ лет. Telegram-боты, сайты под ключ, парсинг, WordPress, SEO. Работаю официально, возможен NDA. Цены от 4 000 ₽ — портфолио и кейсы.",
  keywords: [
    "фриланс разработчик",
    "telegram бот разработка",
    "wordpress сайт",
    "парсинг python",
    "next.js разработка",
    "сайт под ключ",
    "веб-разработка",
    "заказать сайт",
    "IT фрилансер",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Ruslan WEB",
    title: "Ruslan — IT-фрилансер | Telegram-боты, сайты, автоматизация",
    description:
      "IT-разработчик с опытом 5+ лет. Telegram-боты, сайты под ключ, парсинг, WordPress, SEO. Работаю официально, возможен NDA. Цены от 4 000 ₽.",
    url: BASE_URL,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruslan — IT-фрилансер | Telegram-боты, сайты, автоматизация",
    description:
      "IT-разработчик 5+ лет. Telegram-боты, сайты, парсинг, WordPress, SEO. От 4 000 ₽.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <YandexMetrika />
        {process.env.NEXT_PUBLIC_YM_ID && (
          <noscript>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YM_ID}`}
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        )}
        <JsonLd />
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
