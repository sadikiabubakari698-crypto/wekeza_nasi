// Search Index — V2
// Scoring bora + keyword suggestions

export const SEARCH_INDEX = [
  // ===== ACADEMY =====
  { type: "Somo", title: "Somo 1: Hisa ni nini?", href: "/somo1", keywords: "hisa umiliki kampuni hisa ni nini sehemu ya kampuni" },
  { type: "Somo", title: "Somo 2: Kampuni kwa nini huuza hisa?", href: "/somo2", keywords: "kampuni kuuza hisa mtaji IPO upanuzi" },
  { type: "Somo", title: "Somo 3: Nani ananunua hisa?", href: "/somo3", keywords: "wanunuzi wawekezaji binafsi taasisi NSSF pension" },
  { type: "Somo", title: "Somo 4: Soko la hisa ni nini?", href: "/somo4", keywords: "soko hisa DSE jukwaa biashara masoko" },
  { type: "Somo", title: "Somo 5: Soko la hisa lipo chini ya nani?", href: "/somo5", keywords: "CMSA BOT udhibiti msimamizi kanuni" },
  { type: "Somo", title: "Somo 6: DSE ni nini?", href: "/somo6", keywords: "DSE Dar es Salaam Stock Exchange 1996 soko" },
  { type: "Somo", title: "Somo 7: Hisa inanunuaje na kuuzwaje?", href: "/somo7", keywords: "broker kununua kuuza CDS order commission" },
  { type: "Somo", title: "Somo 8: Bei ya hisa hupanda na kushuka kwa nini?", href: "/somo8", keywords: "bei kupanda kushuka ugavi mahitaji habari uchumi" },
  { type: "Somo", title: "Somo 9: Mwekezaji anapataje faida?", href: "/somo9", keywords: "faida gawio capital gain mapato" },
  { type: "Somo", title: "Somo 10: Hatari ya uwekezaji ni nini?", href: "/somo10", keywords: "hatari risk soko kampuni sekta ukwasi mfumuko" },
  { type: "Somo", title: "Somo 11: Diversification", href: "/somo11", keywords: "diversification mayai kikapu hatari kuwekeza mengi" },
  { type: "Somo", title: "Somo 12: Gawio — Masharti na Taratibu", href: "/somo12", keywords: "gawio dividend KYC TIN cum ex record malipo" },
  { type: "Somo", title: "Somo 13: IPO ni nini?", href: "/somo13", keywords: "IPO Initial Public Offering NMB 2008" },
  { type: "Somo", title: "Somo 14: Stock Split ni nini?", href: "/somo14", keywords: "stock split kugawanya hisa NMB 1:10" },
  { type: "Somo", title: "Somo 15: Soko la Tanzania linafanyaje kazi?", href: "/somo15", keywords: "DSEI index market cap Tanzania ukuaji" },
  { type: "Somo", title: "Somo 16: Kuanza kuchambua kampuni", href: "/somo16", keywords: "kuchambua ripoti faida hasara mwaka" },
  { type: "Somo", title: "Somo 17: Jinsi ya Kusoma Data za DSE — 1", href: "/somo17", keywords: "DSE data opening high low closing volume deals turnover" },
  { type: "Somo", title: "Somo 18: Jinsi ya Kusoma Data za DSE — 2", href: "/somo18", keywords: "bid offer spread liquidity limit market order book" },
  { type: "Somo", title: "Somo 19: Kusoma Mwenendo wa Bei", href: "/somo19", keywords: "mwenendo trend multi-day fair value market price" },
  { type: "Somo", title: "Somo 20: Kusoma Ripoti za Fedha", href: "/somo20", keywords: "ripoti fedha income statement balance sheet cash flow" },

  // ===== KAMPUNI =====
  { type: "Kampuni", title: "CRDB Bank Plc", href: "/kampuni/crdb", keywords: "CRDB benki kubwa Tanzania mkopo gawio simbanking" },
  { type: "Kampuni", title: "NMB Bank Plc", href: "/kampuni/nmb", keywords: "NMB benki faida stock split 1:10" },
  { type: "Kampuni", title: "Tanzania Breweries (TBL)", href: "/kampuni/tbl", keywords: "TBL bia Safari Kilimanjaro Tusker gawio" },
  { type: "Kampuni", title: "Vodacom Tanzania Plc", href: "/kampuni/vodacom", keywords: "Vodacom mawasiliano M-Pesa simu intaneti" },
  { type: "Kampuni", title: "Tanzania Cigarette (TCC)", href: "/kampuni/tcc", keywords: "TCC sigara gawio Portsman" },
  { type: "Kampuni", title: "TPCC — Twiga Cement", href: "/kampuni/tpcc", keywords: "TPCC Twiga saruji ujenzi cement" },
  { type: "Kampuni", title: "Swissport Tanzania Plc", href: "/kampuni/swissport", keywords: "Swissport anga uwanja ndege aviation" },
  { type: "Kampuni", title: "DSE Plc", href: "/kampuni/dse", keywords: "DSE soko hisa meta self-listing" },

  // ===== SOKO =====
  { type: "Soko", title: "Jinsi ya Kuuliza Maswali Sahihi", href: "/soko/jinsi-ya-kuuliza-maswali-sahihi", keywords: "maswali ukweli maoni framework nini lini nani kwa nini ushahidi" },
  { type: "Soko", title: "Kwa Nini Bid Kubwa Haipandishi Bei", href: "/soko/kwa-nini-bid-kubwa-haipandishi-bei", keywords: "bid offer framework soko bei spread" },
  { type: "Soko", title: "Kwa Nini NMB Ilifanya Stock Split", href: "/soko/kwa-nini-nmb-ilifanya-stock-split", keywords: "NMB case study stock split 1:10" },
  { type: "Soko", title: "Kwa Nini TBL Ilipanda 40% 2023", href: "/soko/kwa-nini-tbl-ilipanda-40-2023", keywords: "TBL case study kupanda 2023 bia" },
  { type: "Soko", title: "Kwa Nini CRDB Ilipanda 60% 2022-2023", href: "/soko/kwa-nini-crdb-ilipanda-60-2022-2023", keywords: "CRDB case study kupanda benki" },
  { type: "Soko", title: "Kwa Nini Vodacom Ilipoteza Soko", href: "/soko/kwa-nini-vodacom-ilipoteza-soko-2018-2022", keywords: "Vodacom Airtel case study ushindani mawasiliano" },
  { type: "Soko", title: "Kwa Nini TCC Inatoa Gawio Kubwa", href: "/soko/kwa-nini-tcc-inatoa-gawio-kubwa-lakini-sekta-inapungua", keywords: "TCC gawio sigara case study sekta" },

  // ===== SOMO LA MWEZI =====
  { type: "Somo la Mwezi", title: "CRDB Bank Plc — Uchambuzi wa Kina", href: "/somo-la-mwezi/crdb-2026-09", keywords: "CRDB somo la mwezi uchambuzi benki" },
  { type: "Somo la Mwezi", title: "NMB Bank Plc — Uchambuzi wa Kina", href: "/somo-la-mwezi/nmb-2026-10", keywords: "NMB somo la mwezi uchambuzi benki" },
  { type: "Somo la Mwezi", title: "TBL — Uchambuzi wa Kina", href: "/somo-la-mwezi/tbl-2026-11", keywords: "TBL somo la mwezi uchambuzi bia" },
];

function normalize(text) {
  return String(text).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function searchAll(query, limit = 30) {
  if (!query || query.length < 2) return [];
  const q = normalize(query);
  const words = q.split(/\s+/).filter(Boolean);
  const results = [];

  for (const item of SEARCH_INDEX) {
    const titleNorm = normalize(item.title);
    const keywordsNorm = normalize(item.keywords || "");
    let score = 0;

    // Exact title match — juu sana
    if (titleNorm === q) score += 100;

    // Title inaanza na query
    if (titleNorm.startsWith(q)) score += 50;

    // Title ina query
    if (titleNorm.includes(q)) score += 30;

    // Keywords zina query nzima
    if (keywordsNorm.includes(q)) score += 20;

    // Kila neno — partial matching
    for (const word of words) {
      if (word.length < 2) continue;
      if (titleNorm.includes(word)) score += 10;
      if (keywordsNorm.includes(word)) score += 5;
    }

    if (score > 0) {
      results.push({ ...item, score });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

export function getCategories() {
  return ["Somo", "Kampuni", "Soko", "Somo la Mwezi"];
}

// Suggestions — popular searches
export const POPULAR_SEARCHES = [
  "CRDB",
  "Gawio",
  "IPO",
  "Stock Split",
  "DSE",
  "NMB",
  "Diversification",
  "Hatari",
];
