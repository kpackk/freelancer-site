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

export const metadata: Metadata = {
  title: {
    default: "Ruslan WEB — фриланс-разработчик | Сайты, боты, автоматизация",
    template: "%s | Ruslan WEB",
  },
  description:
    "Разработка Telegram-ботов, сайтов на WordPress и Next.js, парсинг, AI-интеграции. Быстро, надёжно, с гарантией результата.",
  keywords: [
    "фриланс разработчик",
    "telegram бот разработка",
    "wordpress сайт",
    "парсинг python",
    "next.js разработка",
    "сайт под ключ",
    "веб-разработка",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Ruslan WEB",
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
