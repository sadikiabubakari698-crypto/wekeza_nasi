import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://cmsa.go.tz/search", {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; WEKEZA-NASI/1.0)" },
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, status: res.status });
    }
    const html = await res.text();
    const newsItemCount = (html.match(/news-item/g) || []).length;
    const newsTitleCount = (html.match(/news-title/g) || []).length;
    const readMoreCount = (html.match(/read-more/g) || []).length;
    return NextResponse.json({
      ok: true,
      htmlLength: html.length,
      newsItemCount,
      newsTitleCount,
      readMoreCount,
      sample: html.slice(0, 3000),
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message });
  }
}
