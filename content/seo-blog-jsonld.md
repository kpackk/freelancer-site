# BlogPosting JSON-LD — ТЗ для Founding Engineer

## Контекст

Каждая статья блога должна содержать два JSON-LD блока в `<head>`: `BlogPosting` и `BreadcrumbList`. Это обеспечивает Google rich snippets, улучшает CTR из органики и формирует корректное отображение в Knowledge Graph.

Фронтматтер всех 16 статей блога обновлён и содержит: `title`, `description`, `date`, `keywords`, `slug`, `author`, `authorUrl`, `category`.

## Шаг 1: Где размещать

Файл: `src/app/blog/[slug]/page.tsx`

JSON-LD инжектируется через Next.js `metadata` API или через прямое добавление `<script>` в JSX — рекомендуется второй вариант для максимальной совместимости:

```tsx
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  // ...

  const jsonLdBlogPosting = buildBlogPostingSchema(post)
  const jsonLdBreadcrumb = buildBreadcrumbSchema(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {/* page content */}
    </>
  )
}
```

## Шаг 2: Чтение frontmatter

Используется `gray-matter` (уже установлен как зависимость `next-mdx-remote`):

```ts
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export type PostMeta = {
  title: string
  description: string
  date: string
  keywords: string[]
  slug: string
  author: string
  authorUrl: string
  category: string
}

export async function getPostBySlug(slug: string): Promise<PostMeta & { content: string }> {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { ...(data as PostMeta), content }
}
```

## Шаг 3: Шаблон BlogPosting JSON-LD

Плейсхолдер `SITE_URL` — из переменной окружения `NEXT_PUBLIC_SITE_URL` (или хардкод домена после деплоя).

```ts
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslanweb.vercel.app'

export function buildBlogPostingSchema(post: PostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": `${SITE_URL}${post.authorUrl}`
    },
    "publisher": {
      "@type": "Person",
      "name": "Ruslan WEB",
      "url": SITE_URL
    },
    "url": `${SITE_URL}/blog/${post.slug}/`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}/`
    },
    "keywords": Array.isArray(post.keywords) ? post.keywords.join(", ") : post.keywords,
    "inLanguage": "ru-RU",
    "isPartOf": {
      "@type": "Blog",
      "name": "Блог Ruslan WEB",
      "url": `${SITE_URL}/blog/`
    }
  }
}
```

## Шаг 4: Шаблон BreadcrumbList JSON-LD

```ts
export function buildBreadcrumbSchema(post: PostMeta) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslanweb.vercel.app'
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": `${SITE_URL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Блог",
        "item": `${SITE_URL}/blog/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${SITE_URL}/blog/${post.slug}/`
      }
    ]
  }
}
```

## Шаг 5: Переменная окружения

Добавить в `.env.local` и Vercel environment variables:

```
NEXT_PUBLIC_SITE_URL=https://ruslanweb.vercel.app
```

После подключения кастомного домена заменить значение.

## Шаг 6: Валидация

После деплоя проверить через:
- [Google Rich Results Test](https://search.google.com/test/rich-results) — вставить URL любой статьи
- [Schema.org Validator](https://validator.schema.org/) — вставить JSON-LD напрямую

Ожидаемый результат: тип `BlogPosting` определяется, ошибок нет.

## Примечания

- `dateModified` пока равен `datePublished` — при редактировании статей добавить отдельное поле `updatedAt` в фронтматтер
- Поле `image` не добавлено в фронтматтер намеренно (нет OG-изображений). Когда появятся — добавить в BlogPosting как `"image": { "@type": "ImageObject", "url": "..." }`
- Для страницы `/blog/` (список статей) нужен отдельный JSON-LD типа `Blog` — это отдельная задача
