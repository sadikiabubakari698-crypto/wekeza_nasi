// Gemini API Helper — WEKEZA NASI
// Inachambua habari kwa Kiswahili

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export async function analyzeNews(title, description) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "GEMINI_API_KEY haipo" };
  }

  const prompt = `Wewe ni mchambuzi wa soko la hisa Tanzania kwa WEKEZA NASI.

Habari:
Kichwa: ${title}
Maelezo: ${description}

Toa uchambuzi kwa Kiswahili rahisi, kwa muundo huu:

MUHTASARI:
[Sentensi 2-3 za muhtasari]

UCHAMBUZI:
[Sentensi 2-3 — maana kwa soko la hisa. USITOE ushauri wa kununua/kukata. Sema "inaweza kuwa", "tunahitaji kuangalia"]

MASWALI:
1. [Swali la kujitafakari]
2. [Swali la kujitafakari]

KANUNI:
- Kiswahili rahisi
- Bila emoji
- Bila "NUNUA" au "KATA"
- Sema "tunahitaji kuangalia" badala ya "nunua"
- Kama habari haihusiani na soko la hisa, sema "Hii haihusiani moja kwa moja na soko la hisa"`;

  try {
    const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return { ok: false, error: `Gemini error: ${res.status}`, details: err };
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!text) {
      return { ok: false, error: "Gemini hakutoa jibu" };
    }

    // Parse sections
    const muhtasari = extractSection(text, "MUHTASARI");
    const uchambuzi = extractSection(text, "UCHAMBUZI");
    const maswaliText = extractSection(text, "MASWALI");
    const maswali = maswaliText
      .split("\n")
      .map((l) => l.replace(/^\d+\.\s*/, "").trim())
      .filter((l) => l.length > 0);

    return {
      ok: true,
      muhtasari: muhtasari || text,
      uchambuzi: uchambuzi || "",
      maswali: maswali.length > 0 ? maswali : [],
      raw: text,
    };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

function extractSection(text, sectionName) {
  const regex = new RegExp(`${sectionName}:\\s*([\\s\\S]*?)(?=(?:MUHTASARI|UCHAMBUZI|MASWALI):|$)`, "i");
  const match = text.match(regex);
  return match ? match[1].trim() : "";
}
