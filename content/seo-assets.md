# SEO-активы: JSON-LD, мета-теги, robots.txt, sitemap

> Домен-плейсхолдер: `https://ruslanweb.vercel.app`
> Файл подготовлен SEO Specialist для передачи FE.
> Все JSON-LD блоки готовы к вставке в Next.js через `<script type="application/ld+json">`.

---

## Страница: Главная `/`

### Canonical
```
https://ruslanweb.vercel.app/
```

### Meta-теги
```html
<title>Ruslan — IT-фрилансер | Telegram-боты, сайты, автоматизация</title>
<meta name="description" content="IT-разработчик с опытом 5+ лет. Telegram-боты, сайты под ключ, парсинг, WordPress, SEO. Работаю официально, возможен NDA. Цены от 4 000 ₽ — портфолио и кейсы." />
<link rel="canonical" href="https://ruslanweb.vercel.app/" />

<!-- Open Graph -->
<meta property="og:title" content="Ruslan — IT-фрилансер | Telegram-боты, сайты, автоматизация" />
<meta property="og:description" content="IT-разработчик с опытом 5+ лет. Telegram-боты, сайты под ключ, парсинг, WordPress, SEO. Работаю официально, возможен NDA. Цены от 4 000 ₽." />
<meta property="og:url" content="https://ruslanweb.vercel.app/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Ruslan WEB" />
<meta property="og:image" content="https://ruslanweb.vercel.app/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Ruslan — IT-фрилансер | Telegram-боты, сайты, автоматизация" />
<meta name="twitter:description" content="IT-разработчик 5+ лет. Telegram-боты, сайты, парсинг, WordPress, SEO. От 4 000 ₽." />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ruslanweb.vercel.app/#person",
      "name": "Руслан",
      "url": "https://ruslanweb.vercel.app",
      "jobTitle": "IT-фрилансер",
      "description": "Разработчик Telegram-ботов, сайтов под ключ, систем автоматизации и ИИ-решений",
      "knowsAbout": ["Python", "aiogram", "PHP", "Laravel", "WordPress", "Vue.js", "Scrapy", "Selenium", "GPT API", "SEO"],
      "sameAs": [
        "https://kwork.ru",
        "https://fl.ru"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "4000",
        "highPrice": "20000",
        "priceCurrency": "RUB",
        "offerCount": "8"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://ruslanweb.vercel.app/#website",
      "url": "https://ruslanweb.vercel.app",
      "name": "Ruslan WEB",
      "description": "Персональный сайт IT-фрилансера: Telegram-боты, сайты, автоматизация",
      "publisher": { "@id": "https://ruslanweb.vercel.app/#person" },
      "inLanguage": "ru-RU"
    }
  ]
}
```

---

## Страница: Обо мне `/about/`

### Canonical
```
https://ruslanweb.vercel.app/about/
```

### Meta-теги
```html
<title>Обо мне · Ruslan WEB — IT-фрилансер</title>
<meta name="description" content="Я Руслан — IT-разработчик 5+ лет. Python, PHP, WordPress, Telegram-боты, SEO. Работаю официально, возможен NDA. Портфолио и контакты →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/about/" />

<meta property="og:title" content="Обо мне · Ruslan WEB — IT-фрилансер" />
<meta property="og:description" content="Руслан — IT-разработчик 5+ лет. Специализация: Telegram-боты, сайты, автоматизация, ИИ. Работаю официально, NDA по запросу." />
<meta property="og:url" content="https://ruslanweb.vercel.app/about/" />
<meta property="og:type" content="profile" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ruslanweb.vercel.app/#person",
      "name": "Руслан",
      "url": "https://ruslanweb.vercel.app",
      "jobTitle": "IT-фрилансер, Full Stack разработчик",
      "description": "IT-фрилансер с опытом 5+ лет. Специализация: веб-разработка, Telegram-боты, автоматизация, ИИ-интеграции. Работаю на Kwork и FL.ru. Официально, NDA по запросу.",
      "knowsAbout": [
        "Python", "aiogram", "Telethon", "PHP", "Laravel", "1С-Битрикс",
        "WordPress", "Vue.js", "Scrapy", "Selenium", "Playwright",
        "GPT API", "OpenAI", "HTML/CSS", "Tailwind CSS", "Next.js", "SEO"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "IT-фрилансер",
        "occupationLocation": {
          "@type": "Country",
          "name": "Россия"
        },
        "skills": "Python, PHP, WordPress, Telegram-боты, SEO, Автоматизация"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Kwork / FL.ru"
      },
      "knowsLanguage": ["ru", "en"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Обо мне", "item": "https://ruslanweb.vercel.app/about/" }
      ]
    }
  ]
}
```

---

## Страница: Хаб услуг `/services/`

### Canonical
```
https://ruslanweb.vercel.app/services/
```

### Meta-теги
```html
<title>Услуги IT-фрилансера · Ruslan WEB</title>
<meta name="description" content="8 направлений разработки: Telegram-боты, сайты под ключ, парсинг, WordPress, ИИ, SEO-аналитика. Цены от 4 000 ₽. Официально, NDA по запросу." />
<link rel="canonical" href="https://ruslanweb.vercel.app/services/" />

<meta property="og:title" content="Услуги IT-фрилансера · Ruslan WEB" />
<meta property="og:description" content="8 направлений: Telegram-боты, сайты, парсинг, WordPress, ИИ, SEO. От 4 000 ₽." />
<meta property="og:url" content="https://ruslanweb.vercel.app/services/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "name": "Услуги IT-фрилансера Руслан",
      "description": "8 направлений IT-разработки",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Telegram-боты", "url": "https://ruslanweb.vercel.app/services/telegram-bot/" },
        { "@type": "ListItem", "position": 2, "name": "Парсинг и автоматизация", "url": "https://ruslanweb.vercel.app/services/parsing/" },
        { "@type": "ListItem", "position": 3, "name": "ИИ-менеджер для магазинов", "url": "https://ruslanweb.vercel.app/services/ai-manager/" },
        { "@type": "ListItem", "position": 4, "name": "Вёрстка по макету Figma", "url": "https://ruslanweb.vercel.app/services/verska/" },
        { "@type": "ListItem", "position": 5, "name": "WordPress", "url": "https://ruslanweb.vercel.app/services/wordpress/" },
        { "@type": "ListItem", "position": 6, "name": "PHP / Laravel / 1С-Битрикс / Vue.js", "url": "https://ruslanweb.vercel.app/services/web-development/" },
        { "@type": "ListItem", "position": 7, "name": "Сайт под ключ", "url": "https://ruslanweb.vercel.app/services/website-turnkey/" },
        { "@type": "ListItem", "position": 8, "name": "SEO-аналитика", "url": "https://ruslanweb.vercel.app/services/seo/" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/" }
      ]
    }
  ]
}
```

---

## Услуга: Telegram-боты `/services/telegram-bot/`

### Canonical
```
https://ruslanweb.vercel.app/services/telegram-bot/
```

### Meta-теги
```html
<title>Разработка Telegram-бота на Python · Ruslan WEB</title>
<meta name="description" content="Создам Telegram-бота на Python (aiogram): оплата, уведомления, CRM-интеграция, Mini Apps, GPT-бот. От 4 000 ₽, сдача за 7–14 дней. Смотреть примеры →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/services/telegram-bot/" />

<meta property="og:title" content="Разработка Telegram-бота на Python · Ruslan WEB" />
<meta property="og:description" content="Telegram-бот под любые задачи: оплата, уведомления, CRM, GPT. Python, aiogram. От 4 000 ₽." />
<meta property="og:url" content="https://ruslanweb.vercel.app/services/telegram-bot/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Разработка Telegram-бота",
      "description": "Создание Telegram-ботов на Python (aiogram, Telethon): боты с оплатой, уведомлениями, CRM-интеграцией, Mini Apps, GPT-ботами.",
      "provider": { "@id": "https://ruslanweb.vercel.app/#person" },
      "serviceType": "Разработка программного обеспечения",
      "areaServed": { "@type": "Country", "name": "Россия" },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "4000",
          "priceCurrency": "RUB",
          "description": "Стоимость зависит от сложности бота"
        },
        "availability": "https://schema.org/InStock"
      },
      "mainEntityOfPage": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Сколько стоит разработка Telegram-бота?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Стоимость начинается от 4 000 ₽ для простых ботов (приветствие, меню, рассылки). Боты с оплатой, CRM-интеграцией или GPT обходятся от 8 000–15 000 ₽. Точную цену скажу после обсуждения задачи."
            }
          },
          {
            "@type": "Question",
            "name": "За сколько времени разрабатывается Telegram-бот?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Простой бот (меню, рассылки, форма заявки) — 3–7 дней. Боты с оплатой или интеграциями — 7–14 дней. GPT-бот или Mini App — от 14 дней. Все сроки фиксирую в договоре."
            }
          },
          {
            "@type": "Question",
            "name": "Какие технологии используете для Telegram-ботов?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Python + aiogram 3 (асинхронный, современный стек), Telethon для клиентских сессий. Базы данных: PostgreSQL, SQLite, Redis. Деплой: VPS, Docker. Для GPT-ботов — OpenAI API."
            }
          },
          {
            "@type": "Question",
            "name": "Можно ли интегрировать бота с CRM или 1С?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, интегрирую с AmoCRM, Bitrix24, 1С через API. Также могу подключить Google Sheets, Notion, любой REST API. Уточните задачу — предложу оптимальное решение."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/" },
        { "@type": "ListItem", "position": 3, "name": "Telegram-боты", "item": "https://ruslanweb.vercel.app/services/telegram-bot/" }
      ]
    }
  ]
}
```

---

## Услуга: Парсинг и автоматизация `/services/parsing/`

### Canonical
```
https://ruslanweb.vercel.app/services/parsing/
```

### Meta-теги
```html
<title>Парсинг данных и автоматизация Python · Ruslan WEB</title>
<meta name="description" content="Парсинг сайтов, автоматизация бизнес-процессов на Python/Scrapy/Selenium. Любые источники, регулярный сбор данных. От 4 000 ₽. Заказать →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/services/parsing/" />

<meta property="og:title" content="Парсинг данных и автоматизация Python · Ruslan WEB" />
<meta property="og:description" content="Парсинг сайтов и автоматизация процессов: Scrapy, Selenium, Playwright. Любые источники. От 4 000 ₽." />
<meta property="og:url" content="https://ruslanweb.vercel.app/services/parsing/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Парсинг данных и автоматизация",
      "description": "Сбор данных с любых сайтов и автоматизация бизнес-процессов на Python: Scrapy, Selenium, Playwright, Requests. Регулярный парсинг, обработка данных, выгрузка в Excel/БД.",
      "provider": { "@id": "https://ruslanweb.vercel.app/#person" },
      "serviceType": "Разработка программного обеспечения",
      "areaServed": { "@type": "Country", "name": "Россия" },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "4000",
          "priceCurrency": "RUB"
        }
      },
      "mainEntityOfPage": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Какие сайты можно парсить?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Парсю любые публично доступные сайты: интернет-магазины (Wildberries, OZON, Avito), новостные сайты, базы данных организаций, маркетплейсы, сайты с вакансиями. Работаю с JavaScript-рендерингом через Selenium и Playwright."
            }
          },
          {
            "@type": "Question",
            "name": "В каком формате получу данные?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Данные выгружаются в Excel (XLSX), CSV, JSON или сразу в БД (PostgreSQL, MySQL, SQLite). Также настраиваю автоматическую загрузку в Google Sheets. Обговаривайте нужный формат при заказе."
            }
          },
          {
            "@type": "Question",
            "name": "Можно ли настроить регулярный (ежедневный) парсинг?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Настраиваю автоматический запуск по расписанию: ежечасно, ежедневно, еженедельно. Скрипт работает на вашем VPS или в облаке. Уведомления о новых данных — в Telegram."
            }
          },
          {
            "@type": "Question",
            "name": "Что входит в автоматизацию?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Автоматизирую рутинные задачи: заполнение форм, отправка писем/сообщений по базе, мониторинг цен конкурентов, загрузка товаров на площадки, обработка документов. Пишу скрипты на Python с чёткой документацией."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/" },
        { "@type": "ListItem", "position": 3, "name": "Парсинг и автоматизация", "item": "https://ruslanweb.vercel.app/services/parsing/" }
      ]
    }
  ]
}
```

---

## Услуга: ИИ-менеджер для магазинов `/services/ai-manager/`

### Canonical
```
https://ruslanweb.vercel.app/services/ai-manager/
```

### Meta-теги
```html
<title>ИИ-менеджер для интернет-магазина · Ruslan WEB</title>
<meta name="description" content="AI-ассистент для магазина на GPT: отвечает на вопросы покупателей 24/7, обрабатывает заявки в Telegram/WhatsApp. От 4 000 ₽. Подробнее →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/services/ai-manager/" />

<meta property="og:title" content="ИИ-менеджер для интернет-магазина · Ruslan WEB" />
<meta property="og:description" content="GPT-бот для магазина: отвечает клиентам 24/7, принимает заявки, снижает нагрузку на менеджеров. От 4 000 ₽." />
<meta property="og:url" content="https://ruslanweb.vercel.app/services/ai-manager/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "ИИ-менеджер для интернет-магазина",
      "description": "AI-ассистент на базе GPT для интернет-магазинов: автоматически отвечает на вопросы покупателей, обрабатывает заявки, работает в Telegram, WhatsApp и на сайте 24/7.",
      "provider": { "@id": "https://ruslanweb.vercel.app/#person" },
      "serviceType": "Разработка программного обеспечения",
      "areaServed": { "@type": "Country", "name": "Россия" },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "4000",
          "priceCurrency": "RUB"
        }
      },
      "mainEntityOfPage": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Что такое ИИ-менеджер и зачем он нужен?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ИИ-менеджер — это чат-бот на основе GPT, который знает ваш каталог товаров и отвечает на вопросы покупателей вместо живого менеджера. Снижает нагрузку на поддержку, работает 24/7, не устаёт и не ошибается в стандартных ситуациях."
            }
          },
          {
            "@type": "Question",
            "name": "В каких каналах работает ИИ-менеджер?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Интегрирую в Telegram-бот, WhatsApp Business API, виджет на сайте (чат). Можно запустить один канал или несколько одновременно — данные централизованы."
            }
          },
          {
            "@type": "Question",
            "name": "Как бот узнаёт о товарах и ценах?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Загружаю ваш каталог (Excel, CSV, выгрузка из 1С или сайта) в систему. Бот обучается на ваших FAQ, условиях доставки, политиках возврата. При обновлении каталога — перезагрузка данных. Также могу подключить live-синхронизацию с вашей БД."
            }
          },
          {
            "@type": "Question",
            "name": "Сколько стоит и как быстро запустить?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Базовый ИИ-менеджер — от 4 000 ₽, срок 5–10 дней. С интеграцией каталога и несколькими каналами — от 8 000 ₽, 10–20 дней. Дополнительно оплачивается использование GPT API (обычно 500–2 000 ₽/мес в зависимости от трафика)."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/" },
        { "@type": "ListItem", "position": 3, "name": "ИИ-менеджер", "item": "https://ruslanweb.vercel.app/services/ai-manager/" }
      ]
    }
  ]
}
```

---

## Услуга: Вёрстка по макету Figma `/services/verska/`

### Canonical
```
https://ruslanweb.vercel.app/services/verska/
```

### Meta-теги
```html
<title>Вёрстка по макету Figma — pixel-perfect · Ruslan WEB</title>
<meta name="description" content="Точная вёрстка по макету Figma/PSD: HTML/CSS, адаптивная, pixel-perfect, кроссбраузерная. Без правок и задержек. От 4 000 ₽. Заказать →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/services/verska/" />

<meta property="og:title" content="Вёрстка по макету Figma — pixel-perfect · Ruslan WEB" />
<meta property="og:description" content="Pixel-perfect вёрстка по Figma/PSD. Адаптивная, кроссбраузерная. От 4 000 ₽." />
<meta property="og:url" content="https://ruslanweb.vercel.app/services/verska/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Вёрстка по макету Figma (pixel-perfect)",
      "description": "Точная вёрстка сайтов по макетам Figma и PSD: адаптивная, pixel-perfect, кроссбраузерная. Современный HTML/CSS/JS, Tailwind CSS, анимации. Без существенных отклонений от дизайна.",
      "provider": { "@id": "https://ruslanweb.vercel.app/#person" },
      "serviceType": "Веб-разработка",
      "areaServed": { "@type": "Country", "name": "Россия" },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "4000",
          "priceCurrency": "RUB"
        }
      },
      "mainEntityOfPage": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Что значит pixel-perfect вёрстка?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pixel-perfect — это максимальное соответствие свёрстанной страницы дизайн-макету: совпадают отступы, размеры шрифтов, цвета, расположение элементов. Использую наложение макета на браузер для проверки точности."
            }
          },
          {
            "@type": "Question",
            "name": "Адаптивная ли будет вёрстка?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, все работы — адаптивные по умолчанию. Mobile-first подход, breakpoints: 320px, 768px, 1280px, 1920px. Если в макете есть только десктоп, адаптирую мобильную версию самостоятельно по смыслу дизайна."
            }
          },
          {
            "@type": "Question",
            "name": "С какими технологиями работаете?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HTML5, CSS3, Tailwind CSS, SCSS. JavaScript: vanilla JS, анимации (GSAP, CSS transitions). Могу подключить к Next.js, Nuxt, WordPress или любому другому фреймворку. Кроссбраузерность: Chrome, Firefox, Safari, Edge."
            }
          },
          {
            "@type": "Question",
            "name": "Принимаете ли макеты в форматах кроме Figma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, работаю с Figma, Adobe XD, PSD (Photoshop), Sketch. Если макет только в PDF или изображениях — тоже возможно, но точность pixel-perfect будет ниже. Предпочтителен Figma с публичным доступом."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/" },
        { "@type": "ListItem", "position": 3, "name": "Вёрстка по макету", "item": "https://ruslanweb.vercel.app/services/verska/" }
      ]
    }
  ]
}
```

---

## Услуга: WordPress `/services/wordpress/`

### Canonical
```
https://ruslanweb.vercel.app/services/wordpress/
```

### Meta-теги
```html
<title>WordPress: создание и доработка сайтов · Ruslan WEB</title>
<meta name="description" content="Создание и доработка сайтов на WordPress: темы, плагины, скорость, безопасность, мультиязычность. От 4 000 ₽. Консультация бесплатно →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/services/wordpress/" />

<meta property="og:title" content="WordPress: создание и доработка сайтов · Ruslan WEB" />
<meta property="og:description" content="WordPress под ключ: тема, плагины, оптимизация скорости, безопасность. От 4 000 ₽. Консультация бесплатно." />
<meta property="og:url" content="https://ruslanweb.vercel.app/services/wordpress/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "WordPress: создание и доработка сайтов",
      "description": "Создание сайтов на WordPress с нуля, доработка существующих: кастомные темы, плагины, оптимизация скорости, безопасность, мультиязычность (WPML/Polylang).",
      "provider": { "@id": "https://ruslanweb.vercel.app/#person" },
      "serviceType": "Веб-разработка",
      "areaServed": { "@type": "Country", "name": "Россия" },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "4000",
          "priceCurrency": "RUB"
        }
      },
      "mainEntityOfPage": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Создаёте сайты на WordPress с нуля?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Создаю WordPress-сайты с нуля: выбор и настройка темы, установка и конфигурация плагинов, наполнение контентом, SEO-настройки, подключение домена и хостинга. Передаю проект с инструкцией по управлению."
            }
          },
          {
            "@type": "Question",
            "name": "Можно ли доработать существующий сайт на WordPress?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, дорабатываю любые WordPress-сайты: добавляю функционал, исправляю баги, меняю дизайн, ускоряю загрузку, устраняю уязвимости. Работаю с WooCommerce, Elementor, Divi, Gutenberg, кастомными темами."
            }
          },
          {
            "@type": "Question",
            "name": "Как ускорить медленный WordPress-сайт?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Аудит и оптимизация: кэширование (WP Rocket/LiteSpeed), сжатие изображений (WebP), минификация CSS/JS, оптимизация БД, настройка CDN, устранение bloatware-плагинов. PageSpeed Insights 90+ — реальная цель после оптимизации."
            }
          },
          {
            "@type": "Question",
            "name": "Делаете мультиязычные сайты на WordPress?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, настраиваю мультиязычность через WPML или Polylang. Структура URL: `/ru/`, `/en/` или поддомены. Поддерживаю правильные hreflang-теги для SEO. Перевод контента — отдельная задача, могу порекомендовать переводчика."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/" },
        { "@type": "ListItem", "position": 3, "name": "WordPress", "item": "https://ruslanweb.vercel.app/services/wordpress/" }
      ]
    }
  ]
}
```

---

## Услуга: PHP / Laravel / 1С-Битрикс / Vue.js `/services/web-development/`

### Canonical
```
https://ruslanweb.vercel.app/services/web-development/
```

### Meta-теги
```html
<title>PHP, Laravel, 1С-Битрикс, Vue.js · Ruslan WEB</title>
<meta name="description" content="Разработка на PHP/Laravel, 1С-Битрикс, Vue.js. Корпоративные сайты, порталы, интеграции с 1С и API. От 4 000 ₽. Детали →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/services/web-development/" />

<meta property="og:title" content="PHP, Laravel, 1С-Битрикс, Vue.js · Ruslan WEB" />
<meta property="og:description" content="Разработка и доработка на PHP/Laravel, 1С-Битрикс, Vue.js. Интеграции, API. От 4 000 ₽." />
<meta property="og:url" content="https://ruslanweb.vercel.app/services/web-development/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "PHP / Laravel / 1С-Битрикс / Vue.js разработка",
      "description": "Разработка и доработка на PHP, Laravel, 1С-Битрикс, Vue.js. Корпоративные сайты, интернет-магазины, порталы, API-интеграции с 1С и сторонними сервисами.",
      "provider": { "@id": "https://ruslanweb.vercel.app/#person" },
      "serviceType": "Веб-разработка",
      "areaServed": { "@type": "Country", "name": "Россия" },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "4000",
          "priceCurrency": "RUB"
        }
      },
      "mainEntityOfPage": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Занимаетесь доработкой существующих сайтов на 1С-Битрикс?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Дорабатываю сайты на 1С-Битрикс: добавляю компоненты, настраиваю инфоблоки, делаю интеграцию с 1С, исправляю баги, оптимизирую производительность. Опыт работы с редакциями Старт, Стандарт, Бизнес."
            }
          },
          {
            "@type": "Question",
            "name": "Разрабатываете REST API на Laravel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Создаю REST API на Laravel: CRUD-операции, авторизация (Sanctum/Passport), документация (Swagger/OpenAPI), версионирование. Интегрирую с мобильными приложениями, фронтендом на Vue.js/React, сторонними сервисами."
            }
          },
          {
            "@type": "Question",
            "name": "Делаете SPA на Vue.js?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Разрабатываю Single Page Applications на Vue.js 3 (Composition API, Pinia, Vue Router). Интегрирую с бэкендом на Laravel или любым REST API. Также делаю доработки существующих Vue-проектов."
            }
          },
          {
            "@type": "Question",
            "name": "Как происходит интеграция сайта с 1С?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Синхронизирую каталог товаров, остатки, цены, заказы между 1С и сайтом через CommerceML или REST API 1С. На стороне 1С работаю через типовые обработки или пишу кастомные. Поддерживаю односторонний и двусторонний обмен."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/" },
        { "@type": "ListItem", "position": 3, "name": "PHP/Laravel/Битрикс/Vue", "item": "https://ruslanweb.vercel.app/services/web-development/" }
      ]
    }
  ]
}
```

---

## Услуга: Сайт под ключ `/services/website-turnkey/`

### Canonical
```
https://ruslanweb.vercel.app/services/website-turnkey/
```

### Meta-теги
```html
<title>Разработка сайта под ключ с нуля · Ruslan WEB</title>
<meta name="description" content="Разработка сайта под ключ: дизайн, вёрстка, программирование, SEO-настройка, деплой. Лендинги, корп. сайты, магазины. Фикс. цена от 20 000 ₽. Оставить заявку →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/services/website-turnkey/" />

<meta property="og:title" content="Разработка сайта под ключ с нуля · Ruslan WEB" />
<meta property="og:description" content="Сайт под ключ: дизайн, вёрстка, программирование, SEO, деплой. Фиксированная цена от 20 000 ₽." />
<meta property="og:url" content="https://ruslanweb.vercel.app/services/website-turnkey/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Сайт под ключ",
      "description": "Полный цикл разработки сайта: анализ задачи, дизайн, вёрстка, программирование, SEO-настройка, деплой, передача с инструкцией. Лендинги, корпоративные сайты, интернет-магазины.",
      "provider": { "@id": "https://ruslanweb.vercel.app/#person" },
      "serviceType": "Веб-разработка",
      "areaServed": { "@type": "Country", "name": "Россия" },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "20000",
          "priceCurrency": "RUB",
          "description": "Лендинг от 20 000 ₽, корпоративный сайт от 35 000 ₽, интернет-магазин от 50 000 ₽"
        },
        "availability": "https://schema.org/InStock"
      },
      "mainEntityOfPage": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Что входит в разработку сайта под ключ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Полный цикл: 1) Сбор требований и ТЗ, 2) Дизайн (Figma), 3) Вёрстка (HTML/CSS или Next.js), 4) Программирование (бэкенд, интеграции), 5) Наполнение контентом, 6) SEO-базовая настройка, 7) Деплой на хостинг, 8) Обучение и документация."
            }
          },
          {
            "@type": "Question",
            "name": "Сколько стоит сайт под ключ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Лендинг (1 страница) — от 20 000 ₽, срок 7–14 дней. Корпоративный сайт (5–15 страниц) — от 35 000 ₽, срок 2–4 недели. Интернет-магазин — от 50 000 ₽, срок 3–6 недель. Точную цену определяем после обсуждения ТЗ."
            }
          },
          {
            "@type": "Question",
            "name": "На каком стеке разрабатываете сайты?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Next.js + Tailwind CSS для современных сайтов (быстрые, SEO-friendly). WordPress для контент-сайтов с простым управлением. PHP/Laravel для сложной бизнес-логики. Выбор стека зависит от задачи и требований клиента."
            }
          },
          {
            "@type": "Question",
            "name": "Какой хостинг использовать для сайта?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Для Next.js — Vercel (бесплатный тариф отлично подходит для старта). Для WordPress — VPS или хостинг Beget/Timeweb. Помогаю с выбором, настройкой и переносом домена. Работаю с любым хостингом клиента."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/" },
        { "@type": "ListItem", "position": 3, "name": "Сайт под ключ", "item": "https://ruslanweb.vercel.app/services/website-turnkey/" }
      ]
    }
  ]
}
```

---

## Услуга: SEO-аналитика `/services/seo/`

### Canonical
```
https://ruslanweb.vercel.app/services/seo/
```

### Meta-теги
```html
<title>SEO-аналитика и оптимизация сайта · Ruslan WEB</title>
<meta name="description" content="SEO-аудит, семантическое ядро, технический анализ. Вывожу сайты в ТОП Яндекс и Google. Яндекс.Вебмастер, GSC, Метрика, GA4. От 4 000 ₽. Получить анализ →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/services/seo/" />

<meta property="og:title" content="SEO-аналитика и оптимизация сайта · Ruslan WEB" />
<meta property="og:description" content="SEO-аудит и оптимизация: семантика, технический аудит, Яндекс/Google. От 4 000 ₽." />
<meta property="og:url" content="https://ruslanweb.vercel.app/services/seo/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "SEO-аналитика и оптимизация",
      "description": "SEO-аудит сайта, составление семантического ядра, технический анализ, настройка Яндекс.Вебмастера, Google Search Console, Метрики, GA4. Рекомендации по улучшению позиций.",
      "provider": { "@id": "https://ruslanweb.vercel.app/#person" },
      "serviceType": "SEO-оптимизация",
      "areaServed": { "@type": "Country", "name": "Россия" },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "4000",
          "priceCurrency": "RUB"
        }
      },
      "mainEntityOfPage": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Что входит в SEO-аудит?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Технический аудит: проверка индексации, скорость загрузки (Core Web Vitals), мобильная адаптация, дубли страниц, ошибки 404/301. Контентный аудит: мета-теги, заголовки H1-H6, структура URL, внутренняя перелинковка. Внешний аудит: ссылочный профиль, санкции. Итог — отчёт с приоритетами исправлений."
            }
          },
          {
            "@type": "Question",
            "name": "Настраиваете ли Google Search Console и Яндекс.Вебмастер?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Подключаю и настраиваю GSC и Яндекс.Вебмастер: верификация, загрузка sitemap, настройка уведомлений об ошибках. Анализирую запросы, CTR, позиции, проблемы индексации. Помогаю с устранением предупреждений."
            }
          },
          {
            "@type": "Question",
            "name": "Составляете семантическое ядро?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Собираю семантическое ядро: транзакционные, информационные, брендовые запросы. Кластеризую по страницам, оцениваю частотность и конкурентность. Инструменты: Яндекс.Wordstat, Key Collector, Google Keyword Planner, Ahrefs."
            }
          },
          {
            "@type": "Question",
            "name": "Гарантируете ли ТОП в поиске?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Нет. Никто не может гарантировать конкретные позиции — это противоречит природе поисковых алгоритмов. Гарантирую качественный аудит, точные рекомендации и измеримый прогресс по метрикам: рост трафика, CTR, устранение технических ошибок."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/" },
        { "@type": "ListItem", "position": 3, "name": "SEO-аналитика", "item": "https://ruslanweb.vercel.app/services/seo/" }
      ]
    }
  ]
}
```

---

## Страница: Портфолио `/portfolio/`

### Canonical
```
https://ruslanweb.vercel.app/portfolio/
```

### Meta-теги
```html
<title>Портфолио · Ruslan WEB — IT-проекты и кейсы</title>
<meta name="description" content="Реализованные проекты: Telegram-боты, сайты, парсинг, ИИ-решения. Примеры: espaniero.ru, assoro.ru, exactcarbon.ru. Смотреть все кейсы →" />
<link rel="canonical" href="https://ruslanweb.vercel.app/portfolio/" />

<meta property="og:title" content="Портфолио · Ruslan WEB — IT-проекты и кейсы" />
<meta property="og:description" content="Готовые проекты: сайты, Telegram-боты, автоматизация, ИИ. espaniero.ru, assoro.ru, exactcarbon.ru." />
<meta property="og:url" content="https://ruslanweb.vercel.app/portfolio/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "name": "Портфолио — IT-проекты",
      "description": "Выполненные проекты IT-фрилансера Руслан: сайты, Telegram-боты, автоматизация, ИИ",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "Espaniero.ru",
            "url": "https://espaniero.ru",
            "creator": { "@id": "https://ruslanweb.vercel.app/#person" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "name": "Assoro.ru",
            "url": "https://assoro.ru",
            "creator": { "@id": "https://ruslanweb.vercel.app/#person" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "name": "ExactCarbon.ru",
            "url": "https://exactcarbon.ru",
            "creator": { "@id": "https://ruslanweb.vercel.app/#person" }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "CreativeWork",
            "name": "Danila-Master.ru",
            "url": "https://danila-master.ru",
            "creator": { "@id": "https://ruslanweb.vercel.app/#person" }
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Портфолио", "item": "https://ruslanweb.vercel.app/portfolio/" }
      ]
    }
  ]
}
```

---

## Страница: Блог `/blog/`

### Canonical
```
https://ruslanweb.vercel.app/blog/
```

### Meta-теги
```html
<title>Блог · Ruslan WEB — IT, автоматизация, Telegram-боты</title>
<meta name="description" content="Практические статьи об IT-разработке, Telegram-ботах, парсинге, WordPress, SEO. Гайды и кейсы от практикующего разработчика." />
<link rel="canonical" href="https://ruslanweb.vercel.app/blog/" />

<meta property="og:title" content="Блог · Ruslan WEB — IT, автоматизация, Telegram-боты" />
<meta property="og:description" content="Статьи об IT: Telegram-боты, парсинг, WordPress, SEO. Гайды от практикующего разработчика." />
<meta property="og:url" content="https://ruslanweb.vercel.app/blog/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://ruslanweb.vercel.app/blog/#blog",
      "name": "Блог Ruslan WEB",
      "description": "Практические статьи об IT-разработке: Telegram-боты, парсинг, WordPress, SEO, автоматизация",
      "url": "https://ruslanweb.vercel.app/blog/",
      "author": { "@id": "https://ruslanweb.vercel.app/#person" },
      "inLanguage": "ru-RU"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Блог", "item": "https://ruslanweb.vercel.app/blog/" }
      ]
    }
  ]
}
```

---

## Шаблон: Статья блога `/blog/[slug]/`

> Заменить `[SLUG]`, `[TITLE]`, `[DESCRIPTION]`, `[DATE_PUBLISHED]`, `[DATE_MODIFIED]`, `[IMAGE_URL]`

### Meta-теги (шаблон)
```html
<title>[TITLE] · Ruslan WEB</title>
<meta name="description" content="[DESCRIPTION — первые 155 символов или ручная мета]" />
<link rel="canonical" href="https://ruslanweb.vercel.app/blog/[SLUG]/" />

<meta property="og:title" content="[TITLE]" />
<meta property="og:description" content="[DESCRIPTION]" />
<meta property="og:url" content="https://ruslanweb.vercel.app/blog/[SLUG]/" />
<meta property="og:type" content="article" />
<meta property="og:image" content="[IMAGE_URL]" />
<meta property="article:published_time" content="[DATE_PUBLISHED]" />
<meta property="article:author" content="Руслан" />
```

### JSON-LD (шаблон)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "[TITLE]",
      "description": "[DESCRIPTION]",
      "author": { "@id": "https://ruslanweb.vercel.app/#person" },
      "publisher": {
        "@type": "Person",
        "name": "Руслан",
        "url": "https://ruslanweb.vercel.app"
      },
      "datePublished": "[DATE_PUBLISHED]",
      "dateModified": "[DATE_MODIFIED]",
      "image": "[IMAGE_URL]",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ruslanweb.vercel.app/blog/[SLUG]/"
      },
      "isPartOf": { "@id": "https://ruslanweb.vercel.app/blog/#blog" },
      "inLanguage": "ru-RU"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Блог", "item": "https://ruslanweb.vercel.app/blog/" },
        { "@type": "ListItem", "position": 3, "name": "[TITLE]", "item": "https://ruslanweb.vercel.app/blog/[SLUG]/" }
      ]
    }
  ]
}
```

---

## Страница: Контакты `/contact/`

### Canonical
```
https://ruslanweb.vercel.app/contact/
```

### Meta-теги
```html
<title>Контакт · Ruslan WEB — заказать разработку</title>
<meta name="description" content="Обсудим вашу задачу: Telegram, email или форма. Отвечаю в течение нескольких часов в рабочие дни. Консультация бесплатно." />
<link rel="canonical" href="https://ruslanweb.vercel.app/contact/" />

<meta property="og:title" content="Контакт · Ruslan WEB — заказать разработку" />
<meta property="og:description" content="Свяжитесь по Telegram, email или форме. Консультация бесплатно." />
<meta property="og:url" content="https://ruslanweb.vercel.app/contact/" />
<meta property="og:type" content="website" />
```

### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Контакт — Ruslan WEB",
      "description": "Форма заказа и контактные данные IT-фрилансера Руслан",
      "url": "https://ruslanweb.vercel.app/contact/",
      "mainEntity": { "@id": "https://ruslanweb.vercel.app/#person" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Контакт", "item": "https://ruslanweb.vercel.app/contact/" }
      ]
    }
  ]
}
```

---

## robots.txt

Создать файл `public/robots.txt` или `app/robots.ts`:

```
User-agent: *
Allow: /

Disallow: /api/
Disallow: /_next/
Disallow: /admin/

User-agent: Yandexbot
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://ruslanweb.vercel.app/sitemap.xml
```

**Next.js вариант** — файл `app/robots.ts`:
```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://ruslanweb.vercel.app/sitemap.xml',
  }
}
```

---

## sitemap.xml

Файл `app/sitemap.ts`:

```typescript
import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslanweb.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                             changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services/`,                    changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/website-turnkey/`,    changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/services/telegram-bot/`,       changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/web-development/`,    changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/parsing/`,            changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/verska/`,             changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/wordpress/`,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/ai-manager/`,         changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/services/seo/`,                changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/portfolio/`,                   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog/`,                        changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/about/`,                       changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/contact/`,                     changeFrequency: 'yearly',  priority: 0.6 },
  ]

  // Динамические страницы — добавить после реализации MDX/CMS
  // const blogPosts = await getBlogPosts()
  // const portfolioCases = await getPortfolioCases()
  // return [...staticPages, ...blogPosts.map(post => ({ url: `${BASE_URL}/blog/${post.slug}/`, ... }))]

  return staticPages
}
```

---

## Таблица canonical URL всех страниц

| Страница | Canonical URL |
|----------|---------------|
| Главная | `https://ruslanweb.vercel.app/` |
| Хаб услуг | `https://ruslanweb.vercel.app/services/` |
| Telegram-боты | `https://ruslanweb.vercel.app/services/telegram-bot/` |
| Парсинг | `https://ruslanweb.vercel.app/services/parsing/` |
| ИИ-менеджер | `https://ruslanweb.vercel.app/services/ai-manager/` |
| Вёрстка Figma | `https://ruslanweb.vercel.app/services/verska/` |
| WordPress | `https://ruslanweb.vercel.app/services/wordpress/` |
| PHP/Laravel/Битрикс | `https://ruslanweb.vercel.app/services/web-development/` |
| Сайт под ключ | `https://ruslanweb.vercel.app/services/website-turnkey/` |
| SEO-аналитика | `https://ruslanweb.vercel.app/services/seo/` |
| Портфолио | `https://ruslanweb.vercel.app/portfolio/` |
| Блог | `https://ruslanweb.vercel.app/blog/` |
| Обо мне | `https://ruslanweb.vercel.app/about/` |
| Контакт | `https://ruslanweb.vercel.app/contact/` |

---

## Инструкция для FE по вставке JSON-LD в Next.js

```tsx
// Пример: app/services/telegram-bot/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Разработка Telegram-бота на Python · Ruslan WEB',
  description: 'Создам Telegram-бота на Python (aiogram)...',
  alternates: {
    canonical: 'https://ruslanweb.vercel.app/services/telegram-bot/',
  },
  openGraph: {
    title: 'Разработка Telegram-бота на Python · Ruslan WEB',
    description: '...',
    url: 'https://ruslanweb.vercel.app/services/telegram-bot/',
    type: 'website',
    siteName: 'Ruslan WEB',
  },
}

const jsonLd = { /* JSON-LD объект из этого файла */ }

export default function TelegramBotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* остальной JSX */}
    </>
  )
}
```
