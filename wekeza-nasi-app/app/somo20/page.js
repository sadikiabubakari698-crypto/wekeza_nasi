import LessonStepper from "../../components/LessonStepper";

const steps = [
  {
    title: "01. Lengo la Somo",
    body: "Katika Somo 19 tumejifunza kusoma mwenendo wa bei kwa siku nyingi. Lakini bei peke yake haitoshi — tunahitaji kujua kampuni inafanya kazi vipi kifedha. Katika somo hili, utajifunza kusoma ripoti tatu muhimu za fedha: Income Statement, Balance Sheet, na Cash Flow Statement."
  },
  {
    title: "02. Swali la Kuanza",
    body: "Kampuni inasema 'imepata faida mwaka huu.' Unawezaje kuthibitisha hilo? Unaangalia wapi? Kuna taarifa tatu ambazo kila mwekezaji wa kweli anaziangalia: 1) Kampuni ilipata mapato kiasi gani? 2) Ina mali na madeni kiasi gani? 3) Fedha zinaingia na kutoka vipi?"
  },
  {
    title: "03. Ripoti Tatu Muhimu",
    body: "Kila kampuni iliyoorodheshwa DSE inachapisha ripoti tatu kuu kila mwaka:\n\n1. INCOME STATEMENT — Inaonyesha mapato, gharama, na faida kwa kipindi fulani.\n\n2. BALANCE SHEET — Inaonyesha mali, madeni, na mtaji wa wanahisa kwa tarehe fulani.\n\n3. CASH FLOW STATEMENT — Inaonyesha jinsi fedha zinaingia na kutoka kwenye kampuni.\n\nZote tatu zinaunganishwa."
  },
  {
    title: "04. Income Statement",
    body: "Income Statement inaonyesha:\n\nMAPATO (Revenue) — fedha zote zilizoingia kutokana na mauzo.\n\nGHARAMA (Expenses) — gharama za uendeshaji, mishahara, kodi, riba.\n\nFAIDA (Profit) — kinachobaki baada ya gharama zote.\n\nMfano rahisi:\nMapato: TSh bilioni 100\nGharama: TSh bilioni 70\nFaida: TSh bilioni 30\n\nKama faida ni kubwa, kampuni inafanya vizuri."
  },
  {
    title: "05. Balance Sheet",
    body: "Balance Sheet inaonyesha:\n\nMALI (Assets) — kila kitu kampuni inamiliki: fedha, mikopo kwa wateja, majengo, mashine.\n\nMADENI (Liabilities) — kila kitu kampuni inadaiwa: mikopo ya benki, kodi, malipo kwa wafanyakazi.\n\nMTAJI (Equity) — kinachobaki kwa wanahisa baada ya madeni yote kulipwa.\n\nFomula: MALI = MADENI + MTAJI"
  },
  {
    title: "06. Cash Flow Statement",
    body: "Cash Flow Statement inaonyesha fedha halisi zinazotembea:\n\n1. Kutoka shughuli za uendeshaji (Operating) — kutokana na mauzo.\n2. Kutoka uwekezaji (Investing) — kununua/kukuza mali.\n3. Kutoka ufadhili (Financing) — mikopo, gawio.\n\nKwa nini ni muhimu? Kwa sababu kampuni inaweza kuonyesha 'faida' kwenye Income Statement lakini haina fedha halisi mkononi."
  },
  {
    title: "07. Mfano wa Tanzania",
    body: "Hebu tuangalie CRDB Bank:\n\nIncome Statement (2025):\n- Mapato: TSh trilioni 2+\n- Gharama: TSh trilioni 1.5\n- Faida: TSh bilioni 500+\n\nBalance Sheet (2025):\n- Mali: TSh trilioni 10+\n- Madeni: TSh trilioni 9\n- Mtaji: TSh trilioni 1+\n\nCash Flow (2025):\n- Kutoka uendeshaji: Chanya\n- Kutoka uwekezaji: Hasi (ukuaji)\n- Kutoka ufadhili: Chanya"
  },
  {
    title: "08. Jinsi ya Kusoma",
    body: "Hatua kwa hatua:\n\n1. Angalia MAPATO — yamekua au yamepungua?\n2. Angalia FAIDA — faida au hasara?\n3. Angalia MADENI — yameongezeka au yamepungua?\n4. Angalia CASH FLOW — fedha zinaingia au zinatoka?\n5. Linganisha na makampuni mengine kwenye sekta.\n6. Jiulize: Kwa nini nambari zimebadilika?"
  },
  {
    title: "09. Jambo la Muhimu",
    body: "Ripoti za fedha zinaonyesha yaliyopita — sio ya baadaye. Kampuni iliyokuwa na faida mwaka jana inaweza kupata hasara mwaka huu. Ripoti ni zana ya kuanzia, sio hitimisho. Lazima uangalie pia: ushindani wa sekta, hali ya uchumi, mabadiliko ya sera, na mwenendo wa soko."
  },
  {
    title: "10. Kipimo Kidogo",
    quiz: [
      {
        q: "Income Statement inaonyesha nini?",
        options: "(a) Mali na madeni   (b) Mapato, gharama, na faida   (c) Fedha zinazoingia na kutoka",
        answer: "Jibu: (b) Mapato, gharama, na faida."
      },
      {
        q: "Fomula ya Balance Sheet ni ipi?",
        options: "(a) Mali = Madeni + Mtaji   (b) Mapato = Gharama + Faida   (c) Fedha = Mali - Madeni",
        answer: "Jibu: (a) Mali = Madeni + Mtaji."
      },
      {
        q: "Kwa nini Cash Flow ni muhimu?",
        options: "(a) Inaonyesha faida   (b) Inaonyesha fedha halisi   (c) Inaonyesha wafanyakazi",
        answer: "Jibu: (b) Inaonyesha fedha halisi zinazotembea."
      }
    ]
  },
  {
    title: "11. Muhtasari wa Dakika 1",
    body: "Ripoti tatu muhimu za fedha:\n\n1. INCOME STATEMENT — Mapato, gharama, faida.\n2. BALANCE SHEET — Mali = Madeni + Mtaji.\n3. CASH FLOW — Fedha halisi zinazoingia na kutoka.\n\nKusoma ripoti hizi ni hatua ya kwanza ya uchambuzi wa kampuni."
  },
  {
    title: "12. Hatua Inayofuata",
    body: "SOMO 21: Tutaanza kuchambua sekta moja kwa moja — tutachagua sekta ya benki na kuilinganisha CRDB, NMB, na benki nyingine. Pia, tayari unaweza kuanza Uchambuzi wa Kampuni — CRDB, NMB, TBL, Vodacom, TCC."
  }
];

export default function Somo20() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 20: Kusoma Ripoti za Fedha (Financial Statements)</h2>
      <LessonStepper steps={steps} nextHref="/somo21" nextLabel="Somo la 21" />
    </main>
  );
}
