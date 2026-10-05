import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: false, error: "GROQ_API_KEY haipo" });

  try {
    // 1. Models zote
    const modelsRes = await fetch("https://api.groq.com/openai/v1/models", {
      headers: { "Authorization": `Bearer ${apiKey}` },
    });
    const modelsData = await modelsRes.json();

    // 2. Test models kadhaa
    const testModels = ["llama-3.3-70b-versatile", "openai/gpt-oss-20b", "llama-3.1-8b-instant", "mixtral-8x7b-32768"];
    const testResults = [];
    for (const model of testModels) {
      try {
        const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            messages: [{ role: "user", content: "Jibu tu: Habari" }],
            max_tokens: 10,
          }),
        });
        testResults.push({ model, status: r.status, ok: r.ok });
      } catch (e) {
        testResults.push({ model, error: e.message });
      }
    }

    return NextResponse.json({
      ok: true,
      modelsStatus: modelsRes.status,
      models: modelsData.data ? modelsData.data.map((m) => m.id) : modelsData,
      testResults,
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message });
  }
}
