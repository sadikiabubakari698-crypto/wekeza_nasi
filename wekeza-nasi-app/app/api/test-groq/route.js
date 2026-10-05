import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "GROQ_API_KEY haipo" });
  }

  try {
    const modelsRes = await fetch("https://api.groq.com/openai/v1/models", {
      headers: { "Authorization": `Bearer ${apiKey}` },
    });
    const modelsData = await modelsRes.json();

    const testRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: "Jibu tu: Habari" }],
        max_tokens: 50,
      }),
    });
    const testData = await testRes.json();

    return NextResponse.json({
      ok: true,
      modelsStatus: modelsRes.status,
      models: modelsData.data ? modelsData.data.map((m) => m.id) : modelsData,
      testStatus: testRes.status,
      testResponse: testData,
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message });
  }
}
