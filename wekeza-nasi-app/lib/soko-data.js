// Soko Data — V2
// Chief anasasisha data kila jioni (baada ya DSE kufunga)
// Baadaye: itachukuliwa moja kwa moja kutoka DSE (Awamu 2)

export const SOKO_DATA = {
  // Tarehe ya data (inaonyeshwa kwa mtumiaji)
  tarehe: "2026-10-03",
  muda: "jioni",
  imesasishwaNa: "Chief",

  // DSEI — DSE All Share Index
  dsei: {
    value: 2450.32,
    change: 0.5,
  },

  // Bei za hisa (5-8 kubwa)
  hisa: [
    { ticker: "CRDB", jina: "CRDB Bank", bei: 2650, change: 1.9 },
    { ticker: "NMB", jina: "NMB Bank", bei: 3150, change: -0.8 },
    { ticker: "TBL", jina: "Tanzania Breweries", bei: 7200, change: 0.5 },
    { ticker: "VODA", jina: "Vodacom", bei: 690, change: 2.1 },
    { ticker: "TCC", jina: "Tanzania Cigarette", bei: 12500, change: -0.4 },
    { ticker: "TPCC", jina: "Twiga Cement", bei: 5800, change: 1.2 },
    { ticker: "SWIS", jina: "Swissport", bei: 3200, change: 0.0 },
    { ticker: "DSE", jina: "DSE Plc", bei: 2400, change: 0.3 },
  ],

  // Tukio la sasa (kama lipo)
  tukioLaSasa: {
    kichwa: "Kwa Nini Vodacom Imepanda 15% Wiki Hii?",
    muhtasari: "Vodacom imepanda kutoka TSh 600 hadi TSh 690 kati ya Sept 26 - Oktoba 3, 2026. Sababu: ripoti ya robo, mkataba wa M-Pesa, watumiaji wa data waliongezeka.",
    link: "/soko/kwa-nini-vodacom-imepanda",
  },

  // Tukio lijalo (kama lipo)
  tukioLijalo: {
    kichwa: "Wiki Ijayo: CRDB Yatangaza Ripoti ya Robo",
    muhtasari: "CRDB inatarajiwa kutangaza ripoti ya robo ya tatu wiki ijayo. Hii inaweza kubadilisha taswira ya sekta ya benki.",
    link: "/soko/zaidi",
  },
};

export function getSokoData() {
  return SOKO_DATA;
}
