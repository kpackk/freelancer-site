import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Блог IT-фрилансера",
  description:
    "Статьи о веб-разработке, Telegram-ботах, парсинге, WordPress и SEO. Практические гайды от IT-фрилансера.",
  openGraph: {
    title: "Блог IT-фрилансера",
    description: "Статьи о веб-разработке, автоматизации и IT от фрилансера.",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Блог</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Статьи и заметки о разработке.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-zinc-500">Статьи скоро появятся.</p>
      ) : (
        <ul className="mt-12 space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <time className="text-sm text-zinc-500">{post.date}</time>
                <h2 className="mt-1 text-xl font-semibold group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
