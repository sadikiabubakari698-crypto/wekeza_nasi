// ============================================================
// GROQ AI HELPER — WEKEZA NASI
// ============================================================
// Inachambua habari kwa template yetu ya uchambuzi.
// Groq ni bure na haraka — Llama 3, Mixtral.
// ============================================================

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.3-70b-versatile";

// ============================================================
// Prompt — inafuata template yetu
// ============================================================
function buildPrompt(headline, content, sourceName) {
  return `Wewe ni mchambuzi wa soko la hisa Tanzania kwa WEKEZA NASI.

KANUNI ZAKO:
1. USIBUNI facts. Chukua tu kutoka habari iliyotolewa.
2. USITOE ushauri wa kununua/kukata.
3. Kama habari haitoshi — sema "Taarifa haitoshi kwa uchambuzi wa kuaminika".
4. Jibu kwa Kiswahili rahisi.
5. Fuata template yetu — jibu sehemu zote.

HABARI:
Chanzo: ${sourceName}
Kichwa: ${headline}
Maudhui: ${content}

JIBU KWA MUUNDO HUU (JSON):
{
  "whatHappened": "...",
  "whyItMatters": "...",
  "whoIsAffected": ["...", "..."],
  "investorImplications": "...",
  "relevantSectors": ["...", "..."],
  "relevantCompanies": ["...", "..."],
  "whatToWatch": ["...", "..."],
  "whatWeCannotConclude": ["...", "..."],
  "impactLevel": "LOW|MEDIUM|HIGH",
  "impactReason": "...",
  "confidence": "LOW|MEDIUM|HIGH",
  "confidenceReason": "..."
}

Jibu JSON tu — bila maelezo mengine.`;
}

// ============================================================
// Function kuu — analyzeNews
// ============================================================
export async function analyzeNews(headline, content, sourceName) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "GROQ_API_KEY haipo" };
  }

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
          { role: "system", content: "Wewe ni mchambuzi wa soko la hisa Tanzania. Jibu kwa Kiswahili rahisi. Jibu JSON tu." },
          { role: "user", content: buildPrompt(headline, content, sourceName) },
        ],
        temperature: 0.5,
        max_tokens: 2000,
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return { ok: false, error: `Groq error: ${res.status}`, details: err.slice(0, 300) };
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content || "";

    if (!text) {
      return { ok: false, error: "Groq hakutoa jibu" };
    }

    // Parse JSON
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      // Tafuta JSON kwenye text
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          parsed = JSON.parse(match[0]);
        } catch (e2) {
          return { ok: false, error: "JSON parse error", raw: text.slice(0, 500) };
        }
      } else {
        return { ok: false, error: "JSON parse error", raw: text.slice(0, 500) };
      }
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
