import { NextResponse } from "next/server";
import { fetchAllNews } from "../../../lib/scraper-news";

export async function GET() {
  try {
    const all = await fetchAllNews();
    const bySource = {};
    all.forEach((item) => {
      if (!bySource[item.source]) bySource[item.source] = [];
      bySource[item.source].push({
        title: item.title,
        level: item.level,
        type: item.type || "habari",
      });
    });
    return NextResponse.json({
      ok: true,
      jumla: all.length,
      kwaChanzo: bySource,
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message });
  }
}
