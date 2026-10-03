// Soko Data — V1
// Data ya bei za hisa — inasasishwa na Chief kila siku (jioni)
// Baadaye: itachukuliwa moja kwa moja kutoka DSE (Awamu 2)

export const SOKO_DATA = {
  // Tarehe ya data (inaonyeshwa kwa mtumiaji)
  tarehe: "2026-10-03",
  muda: "jioni",

  // DSEI — DSE All Share Index
  dsei: {
    value: 2450.32,
    change: 0.5, // asilimia
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
};

export function getSokoData() {
  return SOKO_DATA;
}
