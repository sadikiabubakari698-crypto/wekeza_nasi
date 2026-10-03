// Vyanzo vya Habari — WEKEZA NASI
// Vyanzo vya habari za uwekezaji Tanzania

export const NEWS_SOURCES = {
  // ===== RASMI (Serikali) =====
  cmsa: {
    jina: "CMSA",
    aina: "rasmi",
    url: "https://www.cmsa.go.tz/",
    rss: null,
    keywords: ["uidhinishaji", "tangazo", "kanuni", "wawekezaji"],
  },
  bot: {
    jina: "Benki Kuu ya Tanzania",
    aina: "rasmi",
    url: "https://www.bot.go.tz/",
    rss: null,
    keywords: ["riba", "sera", "fedha", "mfumuko"],
  },
  tra: {
    jina: "TRA",
    aina: "rasmi",
    url: "https://www.tra.go.tz/",
    rss: null,
    keywords: ["kodi", "sera", "biashara"],
  },
  dse: {
    jina: "DSE",
    aina: "rasmi",
    url: "https://www.dse.co.tz/",
    rss: null,
    keywords: ["bei", "volume", "tangazo", "gawio"],
  },

  // ===== HABARI (Vyombo vya Habari) =====
  citizen: {
    jina: "The Citizen",
    aina: "habari",
    url: "https://www.thecitizen.co.tz/",
    rss: "https://www.thecitizen.co.tz/rss",
    keywords: ["uchumi", "biashara", "uwekezaji", "DSE"],
  },
  mwananchi: {
    jina: "Mwananchi",
    aina: "habari",
    url: "https://www.mwananchi.co.tz/",
    rss: "https://www.mwananchi.co.tz/rss",
    keywords: ["uchumi", "biashara", "uwekezaji"],
  },
  dailynews: {
    jina: "Daily News",
    aina: "habari",
    url: "https://dailynews.co.tz/",
    rss: "https://dailynews.co.tz/feed/",
    keywords: ["uchumi", "biashara", "uwekezaji"],
  },
};

// Vigezo vya habari muhimu
export const NEWS_KEYWORDS = {
  muhimuSana: [
    "uidhinishaji", "stock split", "gawio", "faida", "hasara",
    "riba", "sera", "kodi", "mkataba", "IPO",
  ],
  muhimu: [
    "bei", "kupanda", "kushuka", "volume", "deals",
    "ripoti", "robo", "mwaka", "uchumi",
  ],
  kawaida: [
    "soko", "hisa", "biashara", "kampuni", "wawekezaji",
  ],
};

// Aina za habari
export const NEWS_TYPES = {
  TANGAZO: "tangazo",
  RIPOTI: "ripoti",
  HABARI: "habari",
  UCHAMBUZI: "uchambuzi",
  TUKIO: "tukio",
};

export function getSources() {
  return Object.values(NEWS_SOURCES);
}

export function getSourcesByType(type) {
  return Object.values(NEWS_SOURCES).filter((s) => s.aina === type);
}
