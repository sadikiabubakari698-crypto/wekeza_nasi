// Vyanzo vya Habari — WEKEZA NASI
// Vyanzo vya Kiswahili kwanza

export const NEWS_SOURCES = {
  // ===== HABARI ZA KISWAHILI =====
  mwananchi: {
    jina: "Mwananchi",
    aina: "habari",
    url: "https://www.mwananchi.co.tz/",
    rss: "https://www.mwananchi.co.tz/rss",
    lugha: "sw",
  },
  habari: {
    jina: "Habari Leo",
    aina: "habari",
    url: "https://habarileo.co.tz/",
    rss: "https://habarileo.co.tz/feed/",
    lugha: "sw",
  },
  
  // ===== RASMI =====
  cmsa: {
    jina: "CMSA",
    aina: "rasmi",
    url: "https://www.cmsa.go.tz/",
    rss: null,
    lugha: "sw",
  },
  bot: {
    jina: "Benki Kuu",
    aina: "rasmi",
    url: "https://www.bot.go.tz/",
    rss: null,
    lugha: "sw",
  },
  dse: {
    jina: "DSE",
    aina: "rasmi",
    url: "https://www.dse.co.tz/",
    rss: null,
    lugha: "sw",
  },
  
  // ===== HABARI ZA KIINGEREZA (Baadaye) =====
  citizen: {
    jina: "The Citizen",
    aina: "habari",
    url: "https://www.thecitizen.co.tz/",
    rss: "https://www.thecitizen.co.tz/rss",
    lugha: "en",
  },
  dailynews: {
    jina: "Daily News",
    aina: "habari",
    url: "https://dailynews.co.tz/",
    rss: "https://dailynews.co.tz/feed/",
    lugha: "en",
  },
};

export const NEWS_KEYWORDS = {
  muhimuSana: [
    "uidhinishaji", "gawio", "faida", "hasara",
    "riba", "sera", "kodi", "mkataba", "IPO",
    "stock split", "mapato",
  ],
  muhimu: [
    "bei", "kupanda", "kushuka", "volume", "deals",
    "ripoti", "robo", "mwaka", "uchumi", "uwekezaji",
    "biashara", "soko",
  ],
  kawaida: [
    "hisa", "kampuni", "wawekezaji", "benki",
    "viwanda", "kilimo", "utalii",
  ],
};

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

export function getSwahiliSources() {
  return Object.values(NEWS_SOURCES).filter((s) => s.lugha === "sw");
}

export function getEnglishSources() {
  return Object.values(NEWS_SOURCES).filter((s) => s.lugha === "en");
}
