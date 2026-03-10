import { NextResponse } from "next/server";

// In-memory rate limiting: IP -> timestamps[]
const rateLimitMap = new Map<string, number[]>();

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  rateLimitMap.set(ip, recent);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

function isValidContact(contact: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\s()+\-]{7,20}$/;
  return emailRegex.test(contact) || phoneRegex.test(contact);
}

const TELEGRAM_CHAT_ID = "8015134978";

async function sendTelegram(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    console.error("TELEGRAM_BOT_TOKEN is not set");
    return false;
  }

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Telegram API error:", err);
    return false;
  }

  return true;
}

export async function POST(request: Request) {
  // Rate limiting by IP
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Слишком много запросов. Подождите минуту." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Некорректный запрос." },
      { status: 400 }
    );
  }

  const { name, contact, message, budget } = body as {
    name?: string;
    contact?: string;
    message?: string;
    budget?: string;
  };

  // Server-side validation
  if (!name?.trim() || !contact?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Заполните обязательные поля: имя, контакт, описание задачи." },
      { status: 400 }
    );
  }

  if (name.trim().length > 100) {
    return NextResponse.json(
      { error: "Имя слишком длинное (макс. 100 символов)." },
      { status: 400 }
    );
  }

  if (!isValidContact(contact.trim())) {
    return NextResponse.json(
      { error: "Укажите корректный email или номер телефона." },
      { status: 400 }
    );
  }

  if (message.trim().length > 5000) {
    return NextResponse.json(
      { error: "Сообщение слишком длинное (макс. 5000 символов)." },
      { status: 400 }
    );
  }

  // Build Telegram message
  const lines = [
    `<b>Новая заявка с сайта</b>`,
    ``,
    `<b>Имя:</b> ${escapeHtml(name.trim())}`,
    `<b>Контакт:</b> ${escapeHtml(contact.trim())}`,
    `<b>Задача:</b>\n${escapeHtml(message.trim())}`,
  ];

  if (budget?.trim()) {
    lines.push(`<b>Бюджет:</b> ${escapeHtml(budget.trim())}`);
  }

  const telegramText = lines.join("\n");

  const sent = await sendTelegram(telegramText);

  if (!sent) {
    return NextResponse.json(
      { error: "Ошибка отправки. Попробуйте позже или напишите в Telegram." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
