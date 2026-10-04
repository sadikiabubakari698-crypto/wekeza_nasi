export function cleanHtml(text) {
  if (!text) return "";
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/&#8216;/g, "'").replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
    .replace(/&#8250;/g, ">").replace(/&#8249;/g, "<")
    .replace(/&#8211;/g, "-").replace(/&#8212;/g, "-")
    .replace(/&#8230;/g, "...")
    .replace(/&#(\d+);/g, "")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "")
    .replace(/\s+/g, " ").trim();
}

export async function fetchRss(url) {
  try {
    const r = await fetch(url, { headers: { "User-Agent": "WEKEZA-NASI/1.0" }, next: { revalidate: 3600 } });
    if (!r.ok) return null;
    return await r.text();
  } catch (e) { return null; }
}

import { NEWS_SOURCES, NEWS_KEYWORDS, MARKET_WORDS, ONLY_TANZANIA_MARKET } from "./news-sources";

export function classifyNews(title, content) {
  const text = (title + " " + content).toLowerCase();
  for (const kw of NEWS_KEYWORDS.muhimuSana) { if (text.includes(kw)) return { level: "muhimuSana", score: 3 }; }
  for (const kw of NEWS_KEYWORDS.muhimu) { if (text.includes(kw)) return { level: "muhimu", score: 2 }; }
  for (const kw of NEWS_KEYWORDS.kawaida) { if (text.includes(kw)) return { level: "kawaida", score: 1 }; }
  return { level: "kawaida", score: 0 };
}

// FILTER YA TABAKA 4 — KALI ZAIDI
// Hatua 1: Lazima iwe na maneno ya SOKO LA HISA
// Hatua 2: Lazima iwe na KAMPUNI YA DSE au DSE au CMSA PEKEE
export function isMarketNews(title, description) {
  const text = (title + " " + description).toLowerCase();
  
  // Hatua 1: Maneno ya soko la hisa
  let hasMarketWord = false;
  for (const kw of MARKET_WORDS) {
    if (text.includes(kw.toLowerCase())) {
      hasMarketWord = true;
      break;
    }
  }
  if (!hasMarketWord) return false;
  
  // Hatua 2: LAZIMA — Kampuni ya DSE au DSE au CMSA
  let hasTanzania = false;
  for (const kw of ONLY_TANZANIA_MARKET) {
    if (text.includes(kw.toLowerCase())) {
      hasTanzania = true;
      break;
    }
  }
  if (!hasTanzania) return false;
  
  return true;
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
        description: desc ? cleanHtml(desc[1]).slice(0, 400) : "",
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
        if (!isMarketNews(item.title, item.description)) continue;
        const c = classifyNews(item.title, item.description);
        all.push({ ...item, source: source.jina, level: c.level, score: c.score });
      }
    } catch (e) {}
  }
  return all.sort((a, b) => b.score - a.score);
}

export function filterRecentNews(news, days = 7) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  cutoff.setHours(0, 0, 0, 0);
  return news.filter((n) => new Date(n.pubDate) >= cutoff);
}
