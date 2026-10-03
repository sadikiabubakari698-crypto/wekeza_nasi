import { NextResponse } from "next/server";
import { fetchAllNews, filterTodayNews } from "../../../lib/scraper-news";

export async function GET(request) {
  try {
    const allNews = await fetchAllNews();
    
    // Chukua habari za Kiswahili PEKEE (kwa sasa)
    const swahiliNews = allNews.filter((n) => {
      // Habari za Kiswahili — kutoka Mwananchi, Habari Leo
      return n.source === "Mwananchi" || n.source === "Habari Leo";
    });
    
    const today = filterTodayNews(swahiliNews);
    
    return NextResponse.json({
      ok: true,
      jumla: swahiliNews.length,
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
