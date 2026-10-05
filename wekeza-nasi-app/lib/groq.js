// GROQ AI HELPER — WEKEZA NASI
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.3-70b-versatile";

function buildPrompt(headline, content, sourceName) {
  return `Wewe ni mchambuzi wa soko la hisa Tanzania kwa WEKEZA NASI.

KANUNI:
1. USIBUNI facts.
2. USITOE ushauri wa kununua/kukata.
3. Jibu kwa Kiswahili rahisi.
4. Jibu JSON tu.

HABARI:
Chanzo: ${sourceName}
Kichwa: ${headline}
Maudhui: ${content}

JIBU JSON:
{
  "whatHappened": "...",
  "whyItMatters": "...",
  "whoIsAffected": ["..."],
  "investorImplications": "...",
  "relevantSectors": ["..."],
  "relevantCompanies": ["..."],
  "whatToWatch": ["..."],
  "whatWeCannotConclude": ["..."],
  "impactLevel": "LOW|MEDIUM|HIGH",
  "impactReason": "...",
  "confidence": "LOW|MEDIUM|HIGH",
  "confidenceReason": "..."
}`;
}

export async function analyzeNews(headline, content, sourceName) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return { ok: false, error: "GROQ_API_KEY haipo" };

  try {
    const res = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: "Wewe ni mchambuzi wa soko la hisa Tanzania. Jibu JSON tu." },
          { role: "user", content: buildPrompt(headline, content, sourceName) },
        ],
        temperature: 0.5,
        max_tokens: 2000,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return { ok: false, error: `Groq error: ${res.status}`, details: err.slice(0, 500) };
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content || "";
    if (!text) return { ok: false, error: "Groq hakutoa jibu" };

    let parsed;
    try { parsed = JSON.parse(text); } catch (e) {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) { try { parsed = JSON.parse(m[0]); } catch (e2) { return { ok: false, error: "JSON parse error", raw: text.slice(0, 500) }; } }
      else return { ok: false, error: "JSON parse error", raw: text.slice(0, 500) };
    }

    return {
      ok: true,
      analysis: {
        whatHappened: parsed.whatHappened || "",
        whyItMatters: parsed.whyItMatters || "",
        whoIsAffected: parsed.whoIsAffected || [],
        investorImplications: parsed.investorImplications || "",
        relevantSectors: parsed.relevantSectors || [],
        relevantCompanies: parsed.relevantCompanies || [],
        whatToWatch: parsed.whatToWatch || [],
        whatWeCannotConclude: parsed.whatWeCannotConclude || [],
      },
      impactLevel: parsed.impactLevel || "MEDIUM",
      impactReason: parsed.impactReason || "",
      confidence: parsed.confidence || "MEDIUM",
      confidenceReason: parsed.confidenceReason || "",
      model: MODEL,
    };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}
