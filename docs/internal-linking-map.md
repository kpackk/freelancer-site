# Карта внутренней перелинковки сайта

> Подготовлено SEO Specialist (CMPA-60)
> Домен: `https://ruslanweb.vercel.app`

---

## Архитектура сайта

```
/                           ← Главная
├── /services/              ← Hub всех услуг
│   ├── /services/telegram-bots
│   ├── /services/parsing-automation
│   ├── /services/ai-manager
│   ├── /services/frontend-coding
│   ├── /services/wordpress
│   ├── /services/php-laravel-bitrix
│   ├── /services/website-turnkey
│   └── /services/seo-analytics
├── /portfolio/             ← Портфолио
├── /blog/                  ← Hub блога
│   ├── /blog/skolko-stoit-razrabotka-sajta
│   ├── /blog/skolko-stoit-lending
│   ├── /blog/kak-zakazat-razrabotku-sajta
│   ├── /blog/kak-zakazat-telegram-bota
│   ├── /blog/dogovor-s-frilanserom
│   ├── /blog/kak-napisat-tehnicheskoe-zadanie-na-sajt
│   ├── /blog/frilanser-ili-agentstvo-chto-vybrat
│   ├── /blog/kak-vybrat-frilansera-razrabotchika
│   ├── /blog/chto-takoe-parsing-dannyh-dlya-biznesa
│   ├── /blog/ii-menedzher-dlya-internet-magazina
│   ├── /blog/verstka-po-maketu-figma-pixel-perfect
│   ├── /blog/mvp-razrabotka
│   └── /blog/skolko-stoit-sajt-na-wordpress
├── /about/                 ← О себе
└── /contacts/              ← Контакты
```

---

## Hub-страницы

| Страница | Роль | Приоритет |
|----------|------|-----------|
| `/` | Главный хаб, принимает PageRank | ★★★★★ |
| `/services/` | Хаб услуг, распределяет трафик по сервисным страницам | ★★★★★ |
| `/blog/` | Хаб контента, концентрирует информационный трафик | ★★★★ |
| `/services/website-turnkey` | Главная коммерческая страница (наибольший спрос) | ★★★★★ |
| `/services/telegram-bots` | Высокий спрос, растущий тренд | ★★★★ |
| `/portfolio/` | Социальное доказательство, усиливает конверсию | ★★★ |

---

## Матрица перелинковки

### Главная страница `/`

| Целевая страница | Anchor text | Место размещения |
|-----------------|-------------|-----------------|
| `/services/` | «Все услуги» | Навигация, секция услуг |
| `/services/website-turnkey` | «Разработка сайта под ключ» | Hero-секция (главный CTA) |
| `/services/telegram-bots` | «Разработка Telegram-ботов» | Блок услуг |
| `/services/parsing-automation` | «Парсинг и автоматизация» | Блок услуг |
| `/services/ai-manager` | «ИИ-менеджер для магазина» | Блок услуг |
| `/services/frontend-coding` | «Вёрстка по макету» | Блок услуг |
| `/services/wordpress` | «Сайт на WordPress» | Блок услуг |
| `/services/php-laravel-bitrix` | «PHP / Laravel / Битрикс» | Блок услуг |
| `/services/seo-analytics` | «SEO-аналитика» | Блок услуг |
| `/portfolio/` | «Портфолио» | Секция портфолио |
| `/about/` | «Обо мне» | Секция «Кто я» |
| `/blog/` | «Блог» | Секция последних статей |
| `/blog/skolko-stoit-razrabotka-sajta` | «Сколько стоит разработка сайта» | Блок последних статей |
| `/blog/frilanser-ili-agentstvo-chto-vybrat` | «Фрилансер или агентство» | Блок последних статей |
| `/contacts/` | «Обсудить проект» | Header, Hero CTA, Footer |

---

### Услуги Hub `/services/`

| Целевая страница | Anchor text |
|-----------------|-------------|
| `/services/telegram-bots` | «Разработка Telegram-ботов» |
| `/services/parsing-automation` | «Парсинг и автоматизация» |
| `/services/ai-manager` | «ИИ-менеджер для магазина» |
| `/services/frontend-coding` | «Вёрстка по макету (Figma)» |
| `/services/wordpress` | «Сайт на WordPress» |
| `/services/php-laravel-bitrix` | «PHP / Laravel / 1С-Битрикс» |
| `/services/website-turnkey` | «Сайт под ключ» |
| `/services/seo-analytics` | «SEO-аналитика» |
| `/contacts/` | «Заказать» (CTA к каждой карточке) |

---

### Сервисные страницы → перекрёстные ссылки

#### `/services/telegram-bots`

| Целевая страница | Anchor text | Контекст |
|-----------------|-------------|---------|
| `/services/ai-manager` | «ИИ-менеджер на базе GPT» | При упоминании GPT-интеграции |
| `/services/parsing-automation` | «Интеграция с внешними данными» | При упоминании API и данных |
| `/services/website-turnkey` | «Сайт под ключ с ботом» | В блоке «Комплексные решения» |
| `/blog/kak-zakazat-telegram-bota` | «Как заказать Telegram-бота» | Раздел FAQ или нижний блок |
| `/portfolio/` | «Примеры ботов» | Блок портфолио |
| `/contacts/` | «Заказать бота» | CTA-секция |

#### `/services/parsing-automation`

| Целевая страница | Anchor text | Контекст |
|-----------------|-------------|---------|
| `/services/ai-manager` | «ИИ-обработка собранных данных» | При упоминании анализа данных |
| `/services/php-laravel-bitrix` | «API-интеграция с вашей системой» | При упоминании интеграций |
| `/blog/chto-takoe-parsing-dannyh-dlya-biznesa` | «Что такое парсинг» | Вводный раздел страницы |
| `/portfolio/` | «Примеры парсеров» | Блок портфолио |
| `/contacts/` | «Обсудить задачу» | CTA-секция |

#### `/services/ai-manager`

| Целевая страница | Anchor text | Контекст |
|-----------------|-------------|---------|
| `/services/telegram-bots` | «Telegram-бот с ИИ-ответами» | При упоминании каналов |
| `/services/parsing-automation` | «Автоматизация с данными» | При упоминании источников данных |
| `/blog/ii-menedzher-dlya-internet-magazina` | «Подробнее об ИИ-менеджере» | Нижний блок / FAQ |
| `/portfolio/` | «Примеры ИИ-проектов» | Блок портфолио |
| `/contacts/` | «Подключить ИИ-менеджера» | CTA-секция |

#### `/services/frontend-coding`

| Целевая страница | Anchor text | Контекст |
|-----------------|-------------|---------|
| `/services/website-turnkey` | «Сайт под ключ с дизайном» | В блоке «Нужно больше?» |
| `/services/wordpress` | «Подключить к WordPress» | При упоминании CMS |
| `/services/php-laravel-bitrix` | «Интегрировать с Laravel» | При упоминании бэкенда |
| `/blog/verstka-po-maketu-figma-pixel-perfect` | «Подробнее о вёрстке по Figma» | Нижний блок / FAQ |
| `/portfolio/` | «Примеры вёрстки» | Блок портфолио |
| `/contacts/` | «Заказать вёрстку» | CTA-секция |

#### `/services/wordpress`

| Целевая страница | Anchor text | Контекст |
|-----------------|-------------|---------|
| `/services/website-turnkey` | «Сайт под ключ» | В блоке «Комплексное решение» |
| `/services/frontend-coding` | «Кастомная вёрстка для WordPress» | При упоминании дизайна |
| `/services/seo-analytics` | «SEO-продвижение WordPress» | При упоминании поиска |
| `/blog/skolko-stoit-sajt-na-wordpress` | «Сколько стоит сайт на WordPress» | Раздел с ценами |
| `/portfolio/` | «Примеры WordPress-сайтов» | Блок портфолио |
| `/contacts/` | «Заказать WordPress-сайт» | CTA-секция |

#### `/services/php-laravel-bitrix`

| Целевая страница | Anchor text | Контекст |
|-----------------|-------------|---------|
| `/services/website-turnkey` | «Разработка под ключ» | В блоке «Полный цикл» |
| `/services/frontend-coding` | «Vue.js / React интерфейс» | При упоминании фронтенда |
| `/services/parsing-automation` | «Автоматизация и интеграции» | При упоминании данных |
| `/blog/mvp-razrabotka` | «Разработка MVP» | В разделе о стартапах |
| `/portfolio/` | «Примеры Laravel-проектов» | Блок портфолио |
| `/contacts/` | «Обсудить проект» | CTA-секция |

#### `/services/website-turnkey`

| Целевая страница | Anchor text | Контекст |
|-----------------|-------------|---------|
| `/services/frontend-coding` | «Вёрстка по макету» | При упоминании дизайна |
| `/services/wordpress` | «WordPress-вариант» | При упоминании CMS |
| `/services/seo-analytics` | «SEO с запуска» | При упоминании продвижения |
| `/blog/skolko-stoit-razrabotka-sajta` | «Сколько стоит сайт» | В разделе с ценами |
| `/blog/kak-napisat-tehnicheskoe-zadanie-na-sajt` | «Как написать ТЗ» | В разделе «Как начать» |
| `/blog/kak-zakazat-razrabotku-sajta` | «Как заказать разработку» | В разделе процесса |
| `/portfolio/` | «Наши работы» | Блок портфолио |
| `/contacts/` | «Заказать сайт» | Hero CTA, нижний CTA |

#### `/services/seo-analytics`

| Целевая страница | Anchor text | Контекст |
|-----------------|-------------|---------|
| `/services/website-turnkey` | «Разработка сайта под SEO» | В блоке «Лучший старт» |
| `/services/wordpress` | «SEO-аудит WordPress» | При упоминании платформ |
| `/services/frontend-coding` | «Технически правильная вёрстка» | При упоминании Core Web Vitals |
| `/portfolio/` | «Примеры SEO-проектов» | Блок портфолио |
| `/contacts/` | «Заказать SEO-аудит» | CTA-секция |

---

### Блог → Сервисные страницы (контекстные ссылки)

#### `/blog/skolko-stoit-razrabotka-sajta`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Типы сайтов» | `/services/website-turnkey` | «разработка сайта под ключ» |
| Раздел «Вёрстка» | `/services/frontend-coding` | «вёрстка по макету» |
| Раздел «WordPress» | `/services/wordpress` | «сайт на WordPress» |
| Раздел «SEO» | `/services/seo-analytics` | «SEO-аналитика» |
| Блок CTA | `/contacts/` | «Получить оценку» |
| Блок похожих статей | `/blog/skolko-stoit-lending` | «Сколько стоит лендинг» |
| Блок похожих статей | `/blog/frilanser-ili-agentstvo-chto-vybrat` | «Фрилансер или агентство» |

#### `/blog/skolko-stoit-lending`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Где заказать» | `/services/website-turnkey` | «разработка лендинга под ключ» |
| Раздел «Вёрстка» | `/services/frontend-coding` | «вёрстка лендинга по Figma» |
| Блок CTA | `/contacts/` | «Заказать лендинг» |
| Похожие статьи | `/blog/skolko-stoit-razrabotka-sajta` | «Стоимость разработки сайта» |

#### `/blog/kak-zakazat-razrabotku-sajta`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Выбор исполнителя» | `/about/` | «обо мне и моём опыте» |
| Раздел «Этапы» | `/services/website-turnkey` | «разработка сайта под ключ» |
| Раздел «ТЗ» | `/blog/kak-napisat-tehnicheskoe-zadanie-na-sajt` | «как написать ТЗ» |
| Блок CTA | `/contacts/` | «Обсудить проект» |
| Портфолио | `/portfolio/` | «примеры работ» |

#### `/blog/kak-zakazat-telegram-bota`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Вводный раздел | `/services/telegram-bots` | «разработка Telegram-ботов» |
| Раздел «GPT-боты» | `/services/ai-manager` | «ИИ-менеджер на базе GPT» |
| Блок CTA | `/contacts/` | «Заказать бота» |
| Похожие статьи | `/blog/ii-menedzher-dlya-internet-magazina` | «ИИ-менеджер для магазина» |

#### `/blog/dogovor-s-frilanserom`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Вводный раздел | `/about/` | «о моей работе и условиях» |
| Раздел «Кого нанять» | `/services/` | «все услуги» |
| Блок CTA | `/contacts/` | «Обсудить условия» |
| Похожие статьи | `/blog/kak-vybrat-frilansera-razrabotchika` | «Как выбрать фрилансера» |

#### `/blog/kak-napisat-tehnicheskoe-zadanie-na-sajt`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Сайт под ключ» | `/services/website-turnkey` | «разработка сайта под ключ» |
| Раздел «Сложные проекты» | `/services/php-laravel-bitrix` | «разработка на Laravel» |
| Блок CTA | `/contacts/` | «Помогу составить ТЗ» |
| Похожие статьи | `/blog/kak-zakazat-razrabotku-sajta` | «Как заказать разработку» |

#### `/blog/frilanser-ili-agentstvo-chto-vybrat`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Почему фрилансер» | `/about/` | «мой опыт и подход» |
| Раздел «Что я делаю» | `/services/` | «список моих услуг» |
| Портфолио | `/portfolio/` | «примеры работ» |
| Блок CTA | `/contacts/` | «Поговорить о проекте» |

#### `/blog/kak-vybrat-frilansera-razrabotchika`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Портфолио» | `/portfolio/` | «посмотреть мои работы» |
| Раздел «Договор» | `/blog/dogovor-s-frilanserom` | «договор с фрилансером» |
| Раздел «Обо мне» | `/about/` | «кто я и мой опыт» |
| Блок CTA | `/contacts/` | «Обсудить проект» |

#### `/blog/chto-takoe-parsing-dannyh-dlya-biznesa`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Заказать парсинг» | `/services/parsing-automation` | «парсинг данных на заказ» |
| Раздел «Автоматизация» | `/services/ai-manager` | «автоматизация с ИИ» |
| Блок CTA | `/contacts/` | «Заказать парсинг» |

#### `/blog/ii-menedzher-dlya-internet-magazina`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Что это» | `/services/ai-manager` | «ИИ-менеджер для магазина» |
| Раздел «Telegram» | `/services/telegram-bots` | «Telegram-бот с GPT» |
| Блок CTA | `/contacts/` | «Подключить ИИ-менеджера» |
| Похожие статьи | `/blog/kak-zakazat-telegram-bota` | «Как заказать бота» |

#### `/blog/verstka-po-maketu-figma-pixel-perfect`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Заказать вёрстку» | `/services/frontend-coding` | «вёрстка сайта по Figma» |
| Раздел «Подключение к CMS» | `/services/wordpress` | «вёрстка + WordPress» |
| Раздел «Сайт под ключ» | `/services/website-turnkey` | «сайт под ключ» |
| Блок CTA | `/contacts/` | «Заказать вёрстку» |

#### `/blog/mvp-razrabotka`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Стек для MVP» | `/services/php-laravel-bitrix` | «Laravel для стартапа» |
| Раздел «Сайт MVP» | `/services/website-turnkey` | «разработка MVP под ключ» |
| Блок CTA | `/contacts/` | «Обсудить ваш MVP» |
| Похожие статьи | `/blog/kak-napisat-tehnicheskoe-zadanie-na-sajt` | «Как написать ТЗ» |

#### `/blog/skolko-stoit-sajt-na-wordpress`

| Место в тексте | Целевая страница | Anchor text |
|---------------|-----------------|-------------|
| Раздел «Заказать» | `/services/wordpress` | «разработка сайта на WordPress» |
| Раздел «Альтернативы» | `/services/website-turnkey` | «сайт под ключ на Next.js» |
| Раздел «SEO» | `/services/seo-analytics` | «SEO-продвижение» |
| Блок CTA | `/contacts/` | «Заказать WordPress-сайт» |
| Похожие статьи | `/blog/skolko-stoit-razrabotka-sajta` | «Стоимость разработки сайта» |

---

## Breadcrumbs структура для BreadcrumbList JSON-LD

### Шаблон компонента

```tsx
// Пример для Next.js
function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### Breadcrumbs по страницам

| Страница | Хлебные крошки |
|----------|---------------|
| `/services/telegram-bots` | Главная → Услуги → Разработка Telegram-ботов |
| `/services/parsing-automation` | Главная → Услуги → Парсинг и автоматизация |
| `/services/ai-manager` | Главная → Услуги → ИИ-менеджер для магазина |
| `/services/frontend-coding` | Главная → Услуги → Вёрстка по макету |
| `/services/wordpress` | Главная → Услуги → WordPress |
| `/services/php-laravel-bitrix` | Главная → Услуги → PHP / Laravel / Битрикс |
| `/services/website-turnkey` | Главная → Услуги → Сайт под ключ |
| `/services/seo-analytics` | Главная → Услуги → SEO-аналитика |
| `/blog/[slug]` | Главная → Блог → [Заголовок статьи] |
| `/portfolio/` | Главная → Портфолио |
| `/about/` | Главная → Обо мне |
| `/contacts/` | Главная → Контакты |

### JSON-LD примеры

```json
// /services/website-turnkey
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/"},
    {"@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://ruslanweb.vercel.app/services/"},
    {"@type": "ListItem", "position": 3, "name": "Сайт под ключ", "item": "https://ruslanweb.vercel.app/services/website-turnkey"}
  ]
}

// /blog/skolko-stoit-razrabotka-sajta
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ruslanweb.vercel.app/"},
    {"@type": "ListItem", "position": 2, "name": "Блог", "item": "https://ruslanweb.vercel.app/blog/"},
    {"@type": "ListItem", "position": 3, "name": "Сколько стоит разработка сайта в 2026 году", "item": "https://ruslanweb.vercel.app/blog/skolko-stoit-razrabotka-sajta"}
  ]
}
```

---

## Footer — рекомендации

### Структура Footer

```
Услуги                    | Контент                       | О сайте
--------------------------|-------------------------------|------------------
Разработка сайта под ключ | Сколько стоит разработка сайта | О себе
Telegram-боты             | Как заказать разработку       | Портфолио
Парсинг и автоматизация   | Как написать ТЗ               | Контакты
ИИ-менеджер для магазина  | Фрилансер или агентство       | Политика конф.
Вёрстка по макету         | Договор с фрилансером         |
WordPress                 | Блог (все статьи)             |
PHP / Laravel / Битрикс   |                               |
SEO-аналитика             |                               |
```

**Anchor text для Footer:**
- Все услуги — точные коммерческие анкоры («разработка Telegram-бота», «вёрстка по макету Figma»)
- Блог-статьи — информационные анкоры («сколько стоит сайт», «как написать ТЗ»)
- Юридические страницы — брендовые анкоры

---

## Рекомендуемый Sidebar для блога

Показывать в боковой панели каждой статьи:

```
📌 Популярные услуги
──────────────────
• Разработка сайта под ключ  →  /services/website-turnkey
• Telegram-боты              →  /services/telegram-bots
• Парсинг данных             →  /services/parsing-automation
• ИИ-менеджер                →  /services/ai-manager

📝 Статьи по теме
──────────────────
[3-5 статей, релевантных текущей]

💬 Обсудить проект
──────────────────
[CTA-блок → /contacts/]
```

### Релевантность sidebar-статей по тематике

| Читатель читает... | Показывать в sidebar |
|-------------------|---------------------|
| Статьи о ценах (сколько стоит...) | `kak-zakazat-razrabotku-sajta`, `dogovor-s-frilanserom`, `frilanser-ili-agentstvo` |
| Статьи о Telegram-боте | `ii-menedzher-dlya-internet-magazina`, `kak-zakazat-razrabotku-sajta` |
| Статьи о вёрстке/дизайне | `skolko-stoit-razrabotka-sajta`, `kak-napisat-tehnicheskoe-zadanie-na-sajt` |
| Статьи о парсинге/ИИ | `kak-zakazat-telegram-bota`, `ii-menedzher-dlya-internet-magazina` |
| Статьи о выборе подрядчика | `dogovor-s-frilanserom`, `kak-zakazat-razrabotku-sajta` |

---

## Приоритеты внедрения

### Критичные (делать первыми)

1. **Footer ссылки** — покрывают все страницы сразу, максимальный ROI
2. **Breadcrumbs JSON-LD** — на все страницы услуг и блога
3. **CTA-блоки в статьях блога** — конверсия информационного трафика

### Высокий приоритет

4. **Перекрёстные ссылки между услугами** — особенно: telegram-bots ↔ ai-manager, website-turnkey ↔ frontend-coding
5. **Sidebar в блоге** — удерживает читателей, направляет на услуги

### Средний приоритет

6. **Контекстные ссылки в блог-статьях** — точечно, по 3-5 ссылок на статью
7. **Главная → популярные статьи блога** — блок «Последние статьи»

---

## Технические требования

- **rel="nofollow"** — не использовать для внутренних ссылок
- **Anchor text** — не дублировать одинаковые анкоры на одной странице
- **Количество ссылок на страницу** — не более 100 уникальных ссылок (рекомендация Google)
- **Глубина клика** — любая страница должна быть доступна за ≤ 3 клика с главной
- **Язык анкоров** — русский, включать ключевые слова из семантического ядра (CMPA-35)
