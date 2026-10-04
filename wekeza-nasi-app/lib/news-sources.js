export const NEWS_SOURCES = {
  mwananchi: { jina: "Mwananchi", url: "https://www.mwananchi.co.tz/", rss: "https://www.mwananchi.co.tz/rss", lugha: "sw" },
  habari: { jina: "Habari Leo", url: "https://habarileo.co.tz/", rss: "https://habarileo.co.tz/feed/", lugha: "sw" },
  citizen: { jina: "The Citizen", url: "https://www.thecitizen.co.tz/", rss: "https://www.thecitizen.co.tz/rss", lugha: "en" },
  dailynews: { jina: "Daily News", url: "https://dailynews.co.tz/", rss: "https://dailynews.co.tz/feed/", lugha: "en" },
};

// KAMPUNI ZOTE 28 ZA DSE
export const DSE_COMPANIES = [
  // Benki
  "CRDB", "NMB", "NBC", "Stanbic", "Exim", "Absa", "DCB",
  // Viwanda & Vinywaji
  "TBL", "Tanzania Breweries", "TCC", "Tanzania Cigarette",
  "TPCC", "Twiga Cement", "Tanga Cement",
  // Mawasiliano
  "Vodacom", "VODA", "TTCL",
  // Huduma
  "Swissport", "SWIS", "TOL", "Jatu", "Precision Air", "DSE",
  // Fedha & Uwekezaji
  "Maendeleo Bank", "Mkombozi", "Yetu Microfinance", "Mwalimu Commercial Bank",
  // Kilimo & Nyingine
  "Tanzania Tea Packers", "Tanzania Portland Cement",
  "NICOL", "National Investment", "Tanzania Oxygen", "Coastal Aviation",
  // Jina kamili
  "Tanzania Breweries Limited", "Tanzania Cigarette Company",
  "Tanzania Portland Cement Company", "Swissport Tanzania",
];

// Maneno ya soko la hisa
export const MARKET_WORDS = [
  "hisa", "soko la hisa", "DSE", "Dar es Salaam Stock Exchange",
  "CMSA", "stock split", "gawio", "IPO", "uidhinishaji",
  "uorodheshaji", "bei ya hisa", "turnover", "volume ya hisa",
  "soko la mitaji", "wawekezaji wa hisa", "faida ya kampuni",
  "ripoti ya mwaka", "ripoti ya robo", "mapato ya kampuni",
];

// Kampuni za DSE + DSE + CMSA
export const ONLY_TANZANIA_MARKET = [
  "DSE", "Dar es Salaam Stock Exchange", "CMSA",
  // Benki
  "CRDB", "NMB", "NBC", "Stanbic", "Exim", "Absa", "DCB",
  // Viwanda
  "TBL", "Tanzania Breweries", "TCC", "Tanzania Cigarette",
  "TPCC", "Twiga Cement", "Tanga Cement",
  // Mawasiliano
  "Vodacom", "VODA", "TTCL",
  // Huduma
  "Swissport", "SWIS", "TOL", "Jatu", "Precision Air",
  // Fedha
  "Maendeleo Bank", "Mkombozi", "Yetu Microfinance", "Mwalimu Commercial Bank",
  // Nyingine
  "Tanzania Tea Packers", "Tanzania Portland Cement",
  "NICOL", "Tanzania Oxygen", "Coastal Aviation",
];

export const NEWS_KEYWORDS = {
  muhimuSana: ["uidhinishaji", "gawio", "faida", "hasara", "IPO", "stock split", "mapato"],
  muhimu: ["bei", "kupanda", "kushuka", "volume", "ripoti", "robo"],
  kawaida: ["hisa", "kampuni", "wawekezaji"],
};
