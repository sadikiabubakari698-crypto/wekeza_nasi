export const NEWS_SOURCES = {
  mwananchi: { jina: "Mwananchi", url: "https://www.mwananchi.co.tz/", rss: "https://www.mwananchi.co.tz/rss", lugha: "sw" },
  habari: { jina: "Habari Leo", url: "https://habarileo.co.tz/", rss: "https://habarileo.co.tz/feed/", lugha: "sw" },
  citizen: { jina: "The Citizen", url: "https://www.thecitizen.co.tz/", rss: "https://www.thecitizen.co.tz/rss", lugha: "en" },
  dailynews: { jina: "Daily News", url: "https://dailynews.co.tz/", rss: "https://dailynews.co.tz/feed/", lugha: "en" },
};

// Kampuni zote za DSE
export const DSE_COMPANIES = [
  "CRDB", "NMB", "TBL", "Vodacom", "VODA", "TCC", "TPCC",
  "Swissport", "SWIS", "DSE", "Tanga Cement", "TOL",
  "Jatu", "Mkombozi", "Maendeleo Bank", "Yetu Microfinance",
  "Mwalimu Commercial Bank", "DCB Commercial Bank",
];

// Maneno ya soko — LAZIMA yawe soko la hisa, sio "hisa" pekee
export const DSE_ONLY_KEYWORDS = [
  "DSE", "soko la hisa", "Dar es Salaam Stock Exchange",
  "CMSA", "BOT", "Benki Kuu", "stock split", "gawio",
  "IPO", "uidhinishaji", "uorodheshaji", "bei ya hisa",
  "turnover", "volume ya hisa", "faida ya kampuni",
  "ripoti ya mwaka", "ripoti ya robo", "mapato ya kampuni",
];

export const NEWS_KEYWORDS = {
  muhimuSana: ["uidhinishaji", "gawio", "faida", "hasara", "riba", "sera", "mkataba", "IPO", "stock split", "mapato"],
  muhimu: ["bei", "kupanda", "kushuka", "volume", "ripoti", "robo", "uchumi", "uwekezaji"],
  kawaida: ["hisa", "kampuni", "wawekezaji", "benki"],
};
