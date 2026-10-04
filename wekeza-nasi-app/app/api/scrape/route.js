import { NextResponse } from "next/server";
import { fetchAllNews, filterRecentNews } from "../../../lib/scraper-news";
import { DSE_COMPANIES, MARKET_KEYWORDS } from "../../../lib/news-sources";

function isMarketNews(item) {
  const text = (item.title + " " + item.description).toLowerCase();
  for (const company of DSE_COMPANIES) {
    if (text.includes(company.toLowerCase())) return true;
  }
  for (const kw of MARKET_KEYWORDS) {
    if (text.includes(kw.toLowerCase())) return true;
  }
  if (item.source === "CMSA" || item.source === "BOT" || item.source === "DSE") return true;
  return false;
}

export async function GET(request) {
  try {
    const allNews = await fetchAllNews();
    const recent = filterRecentNews(allNews, 2);
    const marketNews = recent.filter(isMarketNews);

    return NextResponse.json({
      ok: true,
      jumla: allNews.length,
      leo: recent.length,
      soko: marketNews.length,
      habari: marketNews.slice(0, 20),
      tarehe: new Date().toISOString(),
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
