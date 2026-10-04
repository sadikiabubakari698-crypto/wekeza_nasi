import { NextResponse } from "next/server";
import { analyzeNews } from "../../../lib/gemini";

export async function POST(request) {
  try {
    const { title, description } = await request.json();

    if (!title) {
      return NextResponse.json({ ok: false, error: "Title inahitajika" }, { status: 400 });
    }

    const result = await analyzeNews(title, description || "");
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
