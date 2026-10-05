// ============================================================
// WEKEZA NASI — NEWS ANALYSIS TEMPLATE v1
// ============================================================
// Template hii inatumika kwa kila habari inayoingia kwenye mfumo.
// AI inajaza sehemu hizi — sio kubuni.
// Founder anakagua kabla ya kuchapisha.
// ============================================================

export const ANALYSIS_TEMPLATE = {
  // ===== SEHEMU 1: SOURCE =====
  source: {
    jina: "",              // Mfano: "Bank of Tanzania"
    aina: "",              // rasmi | habari | kampuni | taasisi
    url: "",               // URL ya source
    tarehe: "",            // Tarehe ya tangazo (YYYY-MM-DD)
    lugha: "",             // sw | en
    originalDocument: "",  // Full text ya tangazo (kama ipo)
    originalLink: "",      // Link ya tangazo la awali
  },

  // ===== SEHEMU 2: HEADLINE & CONTENT =====
  headline: "",            // Kichwa cha habari
  content: "",             // Maudhui ya habari
  contentAvailable: "",    // full | partial | headline_only
  contentSource: "",       // Link au reference ya maudhui

  // ===== SEHEMU 3: FACTS (Kutoka Source) =====
  facts: [
    // {
    //   fact: "BOT imepandisha policy rate kutoka 5.5% hadi 6.0%",
    //   sourceQuote: "taken from original document",
    //   supported: true
    // }
  ],

  // ===== SEHEMU 4: UCHAMBUZI WA MASWALI 8 =====
  analysis: {
    // ① WHAT HAPPENED?
    whatHappened: "",

    // ② WHY DOES IT MATTER?
    whyItMatters: "",

    // ③ WHO IS AFFECTED?
    whoIsAffected: [
      // "Benki (Commercial banks)",
      // "Wakopaji (Borrowers)"
    ],

    // ④ HOW CAN IT AFFECT INVESTORS?
    investorImplications: "",

    // ⑤ WHICH COMPANIES/SECTORS MAY BE RELEVANT?
    relevantSectors: [
      // "Benki", "Fedha"
    ],
    relevantCompanies: [
      // "CRDB", "NMB"
    ],

    // ⑥ WHAT SHOULD INVESTORS WATCH?
    whatToWatch: [
      // "Interest income",
      // "Cost of funding"
    ],

    // ⑦ WHAT CAN WE NOT CONCLUDE?
    whatWeCannotConclude: [
      // "Hatuwezi kusema CRDB itapanda au itashuka",
      // "Athari halisi itategemea factors nyingine"
    ],

    // ⑧ SOURCE & EVIDENCE
    evidence: [
      // {
      //   claim: "BOT imepandisha policy rate",
      //   source: "BOT official statement",
      //   supported: true
      // },
      // {
      //   claim: "Hii itafanya CRDB share price ishuke",
      //   source: null,
      //   supported: false,
      //   reason: "Source haijasema hivyo"
      // }
    ],
  },

  // ===== SEHEMU 5: IMPACT LEVEL =====
  impactLevel: "",         // LOW | MEDIUM | HIGH
  impactReason: "",        // Kwa nini impact ni hiyo

  // ===== SEHEMU 6: CONFIDENCE =====
  confidence: "",          // LOW | MEDIUM | HIGH
  confidenceReason: "",    // Kwa nini confidence ni hiyo

  // ===== SEHEMU 7: WORKFLOW STATUS =====
  status: "",              // NEW | SCREENING | ANALYZING | AI_DRAFT | FACT_CHECK | FOUNDER_REVIEW | APPROVED | PUBLISHED | REJECTED | NEEDS_MORE_INFO
  statusHistory: [
    // { status: "NEW", tarehe: "2026-10-04T10:00:00Z" }
  ],

  // ===== SEHEMU 8: FOUNDER DECISION =====
  founderReview: {
    status: "PENDING",     // PENDING | APPROVED | REJECTED | NEEDS_MORE_INFO
    tarehe: null,
    maoni: "",
    edits: "",
  },

  // ===== METADATA =====
  id: "",
  createdAt: "",
  updatedAt: "",
  publishedAt: null,
};

// ============================================================
// HELPER: Unda template tupu
// ============================================================
export function createEmptyTemplate(id) {
  const now = new Date().toISOString();
  return {
    ...JSON.parse(JSON.stringify(ANALYSIS_TEMPLATE)),
    id: id || `news-${Date.now()}`,
    createdAt: now,
    updatedAt: now,
    status: "NEW",
    statusHistory: [{ status: "NEW", tarehe: now }],
  };
}

// ============================================================
// HELPER: Update status
// ============================================================
export function updateStatus(template, newStatus) {
  const now = new Date().toISOString();
  return {
    ...template,
    status: newStatus,
    updatedAt: now,
    statusHistory: [
      ...template.statusHistory,
      { status: newStatus, tarehe: now },
    ],
  };
}

// ============================================================
// HELPER: Angalia kama template imekamilika
// ============================================================
export function isComplete(template) {
  const checks = [
    template.source?.jina,
    template.source?.url,
    template.headline,
    template.content,
    template.facts?.length > 0,
    template.analysis?.whatHappened,
    template.analysis?.whyItMatters,
    template.analysis?.whatWeCannotConclude?.length > 0,
    template.impactLevel,
    template.confidence,
  ];
  return checks.every(Boolean);
}

// ============================================================
// HELPER: Angalia kama AI inaweza kuchambua
// ============================================================
export function canAnalyze(template) {
  // Hatuwezi kuchambua kama tuna headline tu
  if (template.contentAvailable === "headline_only") {
    return {
      ok: false,
      reason: "Taarifa ni kichwa tu. Hatuwezi kufanya uchambuzi kamili.",
    };
  }
  // Hatuwezi kuchambua kama hakuna facts
  if (!template.facts || template.facts.length === 0) {
    return {
      ok: false,
      reason: "Hakuna facts zilizothibitishwa kutoka source.",
    };
  }
  return { ok: true };
}

// ============================================================
// STATUSES ZOTE ZINAZORUHUSIWA
// ============================================================
export const STATUSES = {
  NEW: "NEW",
  SCREENING: "SCREENING",
  ANALYZING: "ANALYZING",
  AI_DRAFT: "AI_DRAFT",
  FACT_CHECK: "FACT_CHECK",
  FOUNDER_REVIEW: "FOUNDER_REVIEW",
  APPROVED: "APPROVED",
  PUBLISHED: "PUBLISHED",
  REJECTED: "REJECTED",
  NEEDS_MORE_INFO: "NEEDS_MORE_INFO",
};

export const IMPACT_LEVELS = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
};

export const CONFIDENCE_LEVELS = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
};
