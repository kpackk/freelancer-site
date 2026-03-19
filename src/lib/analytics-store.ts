import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";

export interface AnalyticsEvent {
  event: string;
  page: string;
  metadata: Record<string, string>;
  timestamp: string;
  ip: string;
}

const DATA_DIR = join(process.cwd(), "data");
const DATA_FILE = join(DATA_DIR, "analytics.json");

async function ensureDataDir() {
  await mkdir(DATA_DIR, { recursive: true });
}

export async function readEvents(): Promise<AnalyticsEvent[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function appendEvent(event: AnalyticsEvent): Promise<void> {
  await ensureDataDir();
  const events = await readEvents();
  events.push(event);
  await writeFile(DATA_FILE, JSON.stringify(events), "utf-8");
}

/** Remove events older than `days` days */
export async function rotateEvents(days: number): Promise<void> {
  const events = await readEvents();
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  const filtered = events.filter(
    (e) => new Date(e.timestamp).getTime() > cutoff
  );
  if (filtered.length < events.length) {
    await ensureDataDir();
    await writeFile(DATA_FILE, JSON.stringify(filtered), "utf-8");
  }
}
