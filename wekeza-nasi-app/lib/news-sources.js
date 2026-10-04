export const NEWS_SOURCES = {
  // Habari za Kiswahili
  mwananchi: { jina: "Mwananchi", url: "https://www.mwananchi.co.tz/", rss: "https://www.mwananchi.co.tz/rss", lugha: "sw", aina: "habari" },
  habari: { jina: "Habari Leo", url: "https://habarileo.co.tz/", rss: "https://habarileo.co.tz/feed/", lugha: "sw", aina: "habari" },
  nipashe: { jina: "Nipashe", url: "https://www.nipashe.co.tz/", rss: "https://www.nipashe.co.tz/rss", lugha: "sw", aina: "habari" },
  global: { jina: "Global Publishers", url: "https://globalpublishers.co.tz/", rss: "https://globalpublishers.co.tz/feed/", lugha: "sw", aina: "habari" },
  
  // Habari za Kiingereza
  citizen: { jina: "The Citizen", url: "https://www.thecitizen.co.tz/", rss: "https://www.thecitizen.co.tz/rss", lugha: "en", aina: "habari" },
  dailynews: { jina: "Daily News", url: "https://dailynews.co.tz/", rss: "https://dailynews.co.tz/feed/", lugha: "en", aina: "habari" },
  
  // Rasmi
  cmsa: { jina: "CMSA", url: "https://www.cmsa.go.tz/", rss: null, lugha: "sw", aina: "rasmi" },
  bot: { jina: "BOT", url: "https://www.bot.go.tz/", rss: null, lugha: "sw", aina: "rasmi" },
};

export const DSE_COMPANIES = [
  "CRDB", "NMB", "NBC", "Stanbic", "Exim", "Absa", "DCB",
  "TBL", "Tanzania Breweries", "TCC", "Tanzania Cigarette",
  "TPCC", "Twiga Cement", "Tanga Cement",
  "Vodacom", "VODA", "TTCL",
  "Swissport", "SWIS", "TOL", "Jatu", "Precision Air", "DSE",
  "Maendeleo Bank", "Mkombozi", "Yetu Microfinance", "Mwalimu Commercial Bank",
  "Tanzania Tea Packers", "Tanzania Portland Cement",
  "NICOL", "National Investment", "Tanzania Oxygen", "Coastal Aviation",
];

export const MARKET_WORDS = [
  "hisa", "soko la hisa", "DSE", "Dar es Salaam Stock Exchange",
  "CMSA", "stock split", "gawio", "IPO", "uidhinishaji",
  "uorodheshaji", "bei ya hisa", "turnover", "volume ya hisa",
  "soko la mitaji", "wawekezaji wa hisa", "faida ya kampuni",
  "ripoti ya mwaka", "ripoti ya robo", "mapato ya kampuni",
  "riba", "sera ya fedha",
];

export const ONLY_TANZANIA_MARKET = [
  "DSE", "Dar es Salaam Stock Exchange", "CMSA", "BOT",
  "CRDB", "NMB", "NBC", "Stanbic", "Exim", "Absa", "DCB",
  "TBL", "Tanzania Breweries", "TCC", "Tanzania Cigarette",
  "TPCC", "Twiga Cement", "Tanga Cement",
  "Vodacom", "VODA", "TTCL",
  "Swissport", "SWIS", "TOL", "Jatu", "Precision Air",
  "Maendeleo Bank", "Mkombozi", "Yetu Microfinance", "Mwalimu Commercial Bank",
  "Tanzania Tea Packers", "Tanzania Portland Cement",
  "NICOL", "Tanzania Oxygen", "Coastal Aviation",
];

export const NEWS_KEYWORDS = {
  muhimuSana: ["uidhinishaji", "gawio", "faida", "hasara", "IPO", "stock split", "mapato", "riba"],
  muhimu: ["bei", "kupanda", "kushuka", "volume", "ripoti", "robo", "sera"],
  kawaida: ["hisa", "kampuni", "wawekezaji"],
};
