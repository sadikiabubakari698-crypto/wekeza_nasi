export const NEWS_SOURCES = {
  mwananchi: { jina: "Mwananchi", url: "https://www.mwananchi.co.tz/", rss: "https://www.mwananchi.co.tz/rss", lugha: "sw" },
  habari: { jina: "Habari Leo", url: "https://habarileo.co.tz/", rss: "https://habarileo.co.tz/feed/", lugha: "sw" },
  citizen: { jina: "The Citizen", url: "https://www.thecitizen.co.tz/", rss: "https://www.thecitizen.co.tz/rss", lugha: "en" },
  dailynews: { jina: "Daily News", url: "https://dailynews.co.tz/", rss: "https://dailynews.co.tz/feed/", lugha: "en" },
};

// Kampuni za DSE
export const DSE_COMPANIES = [
  "CRDB", "NMB", "TBL", "Vodacom", "VODA", "TCC", "TPCC",
  "Swissport", "SWIS", "DSE", "Tanga Cement", "TOL",
  "Jatu", "Mkombozi", "Maendeleo Bank", "Yetu Microfinance",
];

// Maneno ya soko la hisa
export const MARKET_WORDS = [
  "hisa", "soko la hisa", "DSE", "Dar es Salaam Stock Exchange",
  "CMSA", "stock split", "gawio", "IPO", "uidhinishaji",
  "uorodheshaji", "bei ya hisa", "turnover", "volume ya hisa",
  "soko la mitaji", "wawekezaji wa hisa", "faida ya kampuni",
  "ripoti ya mwaka", "ripoti ya robo", "mapato ya kampuni",
];

// TUNAPASWA kumpa uzito KAMPUNI ZA DSE na DSE/CMSA PEKEE
export const ONLY_TANZANIA_MARKET = [
  "DSE", "Dar es Salaam Stock Exchange", "CMSA",
  "CRDB", "NMB", "TBL", "Vodacom", "VODA", "TCC", "TPCC",
  "Swissport", "SWIS", "Tanga Cement", "TOL", "Jatu",
  "Mkombozi", "Maendeleo Bank", "Yetu Microfinance",
];

export const NEWS_KEYWORDS = {
  muhimuSana: ["uidhinishaji", "gawio", "faida", "hasara", "IPO", "stock split", "mapato"],
  muhimu: ["bei", "kupanda", "kushuka", "volume", "ripoti", "robo"],
  kawaida: ["hisa", "kampuni", "wawekezaji"],
};
