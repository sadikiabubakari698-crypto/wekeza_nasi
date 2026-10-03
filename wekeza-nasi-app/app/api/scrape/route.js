import { NextResponse } from "next/server";
import { fetchAllNews, filterTodayNews } from "../../../lib/scraper-news";

export async function GET(request) {
  try {
    const news = await fetchAllNews();
    const today = filterTodayNews(news);
    
    return NextResponse.json({
      ok: true,
      jumla: news.length,
      leo: today.length,
      habari: today.slice(0, 20),
      tarehe: new Date().toISOString(),
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e.message },
      { status: 500 }
    );
  }
}
