export function cleanHtml(text) {
  if (!text) return "";
  return text.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "").replace(/\s+/g, " ").trim();
}

export async function fetchRss(url) {
  try {
    const r = await fetch(url, { headers: { "User-Agent": "WEKEZA-NASI/1.0" }, next: { revalidate: 3600 } });
    if (!r.ok) return null;
    return await r.text();
  } catch (e) { return null; }
}

import { NEWS_SOURCES, NEWS_KEYWORDS } from "./news-sources";

export function classifyNews(title, content) {
  const text = (title + " " + content).toLowerCase();
  for (const kw of NEWS_KEYWORDS.muhimuSana) { if (text.includes(kw)) return { level: "muhimuSana", score: 3 }; }
  for (const kw of NEWS_KEYWORDS.muhimu) { if (text.includes(kw)) return { level: "muhimu", score: 2 }; }
  for (const kw of NEWS_KEYWORDS.kawaida) { if (text.includes(kw)) return { level: "kawaida", score: 1 }; }
  return { level: "kawaida", score: 0 };
}

export function parseRssItems(xml) {
  if (!xml) return [];
  const items = [];
  const regex = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = regex.exec(xml)) !== null) {
    const item = m[1];
    const title = item.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/);
    const link = item.match(/<link>([\s\S]*?)<\/link>/);
    const desc = item.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/);
    const pub = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    if (title && link) {
      items.push({
        title: cleanHtml(title[1]),
        link: link[1].trim(),
        description: desc ? cleanHtml(desc[1]).slice(0, 250) : "",
        pubDate: pub ? pub[1].trim() : new Date().toISOString(),
      });
    }
  }
  return items;
}

export async function fetchAllNews() {
  const sources = Object.values(NEWS_SOURCES).filter((s) => s.rss);
  const all = [];
  for (const source of sources) {
    try {
      const xml = await fetchRss(source.rss);
      const items = parseRssItems(xml);
      for (const item of items) {
        const c = classifyNews(item.title, item.description);
        all.push({ ...item, source: source.jina, level: c.level, score: c.score });
      }
    } catch (e) {}
  }
  return all.sort((a, b) => b.score - a.score);
}

export function filterTodayNews(news) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return news.filter((n) => new Date(n.pubDate) >= today);
}
