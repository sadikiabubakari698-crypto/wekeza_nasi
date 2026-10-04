import { NextResponse } from "next/server";
import { fetchAllNews, filterRecentNews } from "../../../lib/scraper-news";

export async function GET(request) {
  try {
    const allNews = await fetchAllNews();
    const recent = filterRecentNews(allNews, 7);
    return NextResponse.json({
      ok: true,
      jumla: allNews.length,
      leo: recent.length,
      soko: recent.length,
      habari: recent.slice(0, 20),
      tarehe: new Date().toISOString(),
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
