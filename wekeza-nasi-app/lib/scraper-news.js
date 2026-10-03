// Scraper ya Habari — WEKEZA NASI
// Inachukua habari kutoka vyanzo mbalimbali

import { NEWS_SOURCES, NEWS_KEYWORDS, NEWS_TYPES } from "./news-sources";

// ===== Safisha HTML tags =====
export function cleanHtml(text) {
  if (!text) return "";
  return text
    .replace(/<[^>]*>/g, "")           // Ondoa tags zote
    .replace(/&nbsp;/g, " ")            // Badilisha &nbsp;
    .replace(/&amp;/g, "&")             // Badilisha &amp;
    .replace(/&lt;/g, "<")              // Badilisha &lt;
    .replace(/&gt;/g, ">")              // Badilisha &gt;
    .replace(/&quot;/g, '"')            // Badilisha &quot;
    .replace(/&#39;/g, "'")             // Badilisha &#39;
    .replace(/<!\[CDATA\[/g, "")        // Ondoa CDATA
    .replace(/\]\]>/g, "")              // Ondoa CDATA
    .replace(/\s+/g, " ")               // Badilisha spaces nyingi
    .trim();
}

// ===== Kuchambua RSS =====
export async function fetchRss(url) {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "WEKEZA-NASI/1.0" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    return await response.text();
  } catch (e) {
    return null;
  }
}

// ===== Kuainisha Habari =====
export function classifyNews(title, content) {
  const text = (title + " " + content).toLowerCase();
  
  for (const kw of NEWS_KEYWORDS.muhimuSana) {
    if (text.includes(kw)) return { level: "muhimuSana", score: 3 };
  }
  
  for (const kw of NEWS_KEYWORDS.muhimu) {
    if (text.includes(kw)) return { level: "muhimu", score: 2 };
  }
  
  for (const kw of NEWS_KEYWORDS.kawaida) {
    if (text.includes(kw)) return { level: "kawaida", score: 1 };
  }
  
  return { level: "kawaida", score: 0 };
}

// ===== Kuchambua RSS Content =====
export function parseRssItems(xml) {
  if (!xml) return [];
  
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  
  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];
    
    const titleMatch = item.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/);
    const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/);
    const descMatch = item.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/);
    const pubMatch = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    
    if (titleMatch && linkMatch) {
      items.push({
        title: cleanHtml(titleMatch[1]).trim(),
        link: linkMatch[1].trim(),
        description: descMatch ? cleanHtml(descMatch[1]).slice(0, 250) : "",
        pubDate: pubMatch ? pubMatch[1].trim() : new Date().toISOString(),
      });
    }
  }
  
  return items;
}

// ===== Kuchukua Habari Kutoka Vyanzo Vyote =====
export async function fetchAllNews() {
  const sources = Object.values(NEWS_SOURCES).filter((s) => s.rss);
  const allNews = [];
  
  for (const source of sources) {
    try {
      const xml = await fetchRss(source.rss);
      const items = parseRssItems(xml);
      
      for (const item of items) {
        const classification = classifyNews(item.title, item.description);
        allNews.push({
          ...item,
          source: source.jina,
          sourceUrl: source.url,
          level: classification.level,
          score: classification.score,
          type: NEWS_TYPES.HABARI,
        });
      }
    } catch (e) {
      // Fail silently
    }
  }
  
  return allNews.sort((a, b) => b.score - a.score);
}

// ===== Kuchukua Habari za Leo =====
export function filterTodayNews(news) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return news.filter((n) => {
    const d = new Date(n.pubDate);
    return d >= today;
  });
}
