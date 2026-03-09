import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post?.title ?? "Статья",
    description: post?.description ?? "",
  };
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Статья не найдена</h1>
        <Link href="/blog" className="mt-4 inline-block text-sm underline">
          &larr; Вернуться к блогу
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        &larr; Блог
      </Link>
      <time className="mt-6 block text-sm text-zinc-500">{post.date}</time>
      <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>
      <div className="prose prose-zinc mt-8 dark:prose-invert">
        {/* MDX rendering will be added later; for now show raw content */}
        <p className="whitespace-pre-wrap">{post.content}</p>
      </div>
    </article>
  );
}
