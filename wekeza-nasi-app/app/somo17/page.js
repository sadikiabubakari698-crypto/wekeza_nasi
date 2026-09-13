import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa jinsi ya kusoma jedwali la DSE kwa macho, kujua kila namba inamaanisha nini, na kutofautisha kile data inachosema na kile ambacho data haijasema. Mfano wetu ni data halisi ya CRDB kutoka DSE ya 31 July 2026." },
  { title: "02. Swali la Kuanza", body: "\"Leo CRDB imefungua 2,630, imefika 2,630, imeshuka 2,600 na imefungwa 2,620.\"\n\nUnajua hii inamaanisha nini?\n\n• Je, 2,630 ndiyo bei ambayo kila mtu alinunua?\n• Je, CRDB imepanda au kushuka?\n• Je, unaweza kusema kampuni ni nzuri au mbaya?\n\nMwisho wa somo utajibu maswali haya kwa urahisi." },
  { title: "03. Mchoro Mkuu", body: "Angalia jedwali hili la CRDB:\n\nCRDB        TSh / Idadi\nOpening     2,630\nHigh        2,630\nLow         2,600\nClosing     2,620\nTurnover    1.127B\nDeals       1,784\nVolume      429,799\n\nHizi ni namba nane tofauti. Kila moja ina maana yake." },
  { title: "04. Maelezo Rahisi", body: "OPENING PRICE — Soko liliaanza wapi?\n= TSh 2,630. Hii ni bei ya kuanzia biashara siku hiyo.\n\nHIGH — Bei ya juu zaidi\n= TSh 2,630. Kiwango cha juu kilichofikiwa siku hiyo.\n\nLOW — Bei ya chini zaidi\n= TSh 2,600. Kiwango cha chini kilichofikiwa siku hiyo.\n\nCLOSING PRICE — Soko lilimalizia wapi?\n= TSh 2,620. Kwa DSE, ni VWAP ya trades za session ikiwa shares 100+ zime-trade. Ni bei rasmi ya kufunga siku.\n\nVOLUME — Shares ngapi?\n= 429,799. Idadi ya shares zilizotrade, sio idadi ya watu.\n\nDEALS — Miamala mingapi?\n= 1,784. Idadi ya trades zilizorekodiwa.\n\nTURNOVER — Fedha kiasi gani?\n= TSh 1.127B. Thamani ya fedha iliyohusika.\n\nBei ilibadilika ndani ya range ya TSh 30 tu siku hiyo. HATUWEZI kusema \"imepanda sana\" au \"imeanguka sana.\"" },
  { title: "05. Mfano wa Tanzania", body: "Hebu tuangalie data halisi ya CRDB kutoka DSE ya 31 July 2026:\n\n• Ilianza: TSh 2,630\n• Ilifika juu: TSh 2,630\n• Ilishuka hadi: TSh 2,600\n• Ikafunga: TSh 2,620\n• Shares zilizotrade: 429,799\n• Miamala: 1,784\n• Thamani: TSh 1.127B\n\nHii ni picha kamili ya siku moja ya biashara ya CRDB." },
  { title: "06. Jambo la Muhimu", list: [
    "DATA HII HAJAKUAMBIA:",
    "CRDB ina thamani halisi kiasi gani",
    "Kampuni itapanda kesho au kushuka",
    "Kampuni ni nzuri au mbaya",
    "TSh 2,620 ni bei nafuu au ghali",
    "Kwa nini watu walinunua au kuuza",
    "",
    "Kumbuka: Data inakupa taarifa. Lakini analysis inahitaji hatua nyingine."
  ]},
  { title: "07. Jaribu Kufikiri", body: "Angalia data hii ya CRDB:\n\nOpening: 2,630\nHigh: 2,630\nLow: 2,600\nClosing: 2,620\nVolume: 429,799\nDeals: 1,784\nTurnover: 1.127B\n\nMaswali:\n\n1. Je, bei ilibadilika kiasi gani katika siku hiyo?\n2. Je, ni shares ngapi zilihusika katika biashara?\n3. Je, unaweza kusema CRDB ni kampuni nzuri? Kwa nini?" },
  { title: "08. Muhtasari wa Dakika 1", body: "Ukiona DSE data, anza na maswali haya:\n\nOpening — Ilianza wapi? → 2,630\nHigh — Ilifika juu kiasi gani? → 2,630\nLow — Ilishuka kiasi gani? → 2,600\nClosing — Siku ilifungwaje? → 2,620\nVolume — Shares ngapi? → 429,799\nDeals — Trades ngapi? → 1,784\nTurnover — Fedha kiasi gani? → 1.127B\n\nUsikimbilie kufanya uamuzi. Kwanza elewa namba." },
  { title: "09. Hatua Inayofuata", body: "SOMO 18: Jinsi ya Kusoma Data za DSE — Sehemu ya 2.\n\nTutajifunza: Outstanding Bids, Outstanding Offers, Spread, Liquidity, Limit Order, na Market Order.\n\nPia, tayari unaweza kuanza Uchambuzi wa Kampuni — CRDB, NMB, TBL, Vodacom, TCC, TPCC, Swissport, DSE Plc." }
];

const quiz = [
  { q: "CRDB ikiwa na Opening = 2,630 na Low = 2,600, hiyo inatuambia nini?", options: "(a) Bei haikubadilika   (b) Bei ilifikia chini ya TSh 2,600   (c) Bei ilifikia TSh 2,600 wakati fulani", answer: "Jibu: (c) Bei ilifikia TSh 2,600 wakati fulani. Low ni bei ya chini zaidi iliyofikiwa siku hiyo." },
  { q: "Volume = 429,799 inamaanisha nini?", options: "(a) Watu 429,799 walinunua   (b) Shares 429,799 zilitrade   (c) Deals 429,799 zilifanyika", answer: "Jibu: (b) Shares 429,799 zilitrade. Volume ni idadi ya shares, sio idadi ya watu au deals." },
  { q: "Turnover inatueleza nini?", options: "(a) Idadi ya shareholders   (b) Bei ya juu zaidi   (c) Thamani ya fedha iliyohusika katika trades", answer: "Jibu: (c) Thamani ya fedha iliyohusika katika trades. Turnover ni jumla ya thamani ya biashara." }
];

export default function Somo17() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 17: Jinsi ya Kusoma Data za DSE — Sehemu ya 1</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 17: Jinsi ya Kusoma Data za DSE — Sehemu ya 1"
        lessonHref="/somo17"
        nextHref="/somo18"
        nextLabel="Somo la 18"
      />
    </main>
  );
}
