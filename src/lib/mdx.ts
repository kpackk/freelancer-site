import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: (data.title as string) ?? slug,
        description: (data.description as string) ?? "",
        date: (data.date as string) ?? "",
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function extractFaqItems(content: string): FaqItem[] {
  const lines = content.split("\n");
  const items: FaqItem[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (/^###\s+.+\?/.test(line)) {
      const question = line.replace(/^###\s+/, "").trim();
      const answerLines: string[] = [];
      i++;
      while (i < lines.length && !/^#{2,3}\s/.test(lines[i]) && !/^---/.test(lines[i])) {
        answerLines.push(lines[i]);
        i++;
      }
      const answer = answerLines.join(" ").replace(/\s+/g, " ").replace(/\*\*/g, "").trim();
      if (answer) {
        items.push({ question, answer });
      }
    } else {
      i++;
    }
  }

  return items;
}
