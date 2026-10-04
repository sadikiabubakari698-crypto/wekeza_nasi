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

// Maneno ya soko la hisa — KALI
export const DSE_ONLY_KEYWORDS = [
  "DSE", "soko la hisa", "Dar es Salaam Stock Exchange",
  "CMSA", "stock split", "gawio", "IPO", "uidhinishaji",
  "uorodheshaji", "bei ya hisa", "turnover", "volume ya hisa",
  "soko la mitaji", "wawekezaji wa hisa", "hisa za DSE",
  "faida ya kampuni", "ripoti ya mwaka", "ripoti ya robo",
];

export const NEWS_KEYWORDS = {
  muhimuSana: ["uidhinishaji", "gawio", "faida", "hasara", "riba", "sera", "IPO", "stock split", "mapato"],
  muhimu: ["bei", "kupanda", "kushuka", "volume", "ripoti", "robo"],
  kawaida: ["hisa", "kampuni", "wawekezaji"],
};
