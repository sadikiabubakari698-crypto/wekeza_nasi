import { NextResponse } from "next/server";
import { analyzeNews } from "../../../lib/groq";

export async function POST(request) {
  try {
    const { headline, content, sourceName } = await request.json();

    if (!headline) {
      return NextResponse.json({ ok: false, error: "Headline inahitajika" }, { status: 400 });
    }

    const result = await analyzeNews(headline, content || "", sourceName || "Habari");
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
