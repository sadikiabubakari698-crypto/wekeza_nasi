import LessonStepper from "../../components/LessonStepper";

const steps = [
  {
    title: "01. Lengo la Somo",
    body: "Katika Somo 19 tumejifunza kusoma mwenendo wa bei kwa siku nyingi. Lakini bei peke yake haitoshi — tunahitaji kujua kampuni inafanya kazi vipi kifedha. Katika somo hili, utajifunza kusoma ripoti tatu muhimu za fedha: Income Statement, Balance Sheet, na Cash Flow Statement."
  },
  {
    title: "02. Swali la Kuanza",
    body: "Kampuni inasema 'imepata faida mwaka huu.' Unawezaje kuthibitisha hilo? Unaangalia wapi?\n\nKuna taarifa tatu ambazo kila mwekezaji wa kweli anaziangalia:\n\n1) Kampuni ilipata mapato kiasi gani?\n2) Ina mali na madeni kiasi gani?\n3) Fedha zinaingia na kutoka vipi?\n\nHizi zote zipo kwenye ripoti za fedha — na tunajifunza kuzisoma leo."
  },
  {
    title: "03. Mchoro Mkuu",
    body: "Kila kampuni iliyoorodheshwa DSE inachapisha ripoti tatu kuu kila mwaka:\n\n1. INCOME STATEMENT — Inaonyesha mapato, gharama, na faida kwa kipindi fulani (robo mwaka au mwaka).\n\n2. BALANCE SHEET — Inaonyesha mali, madeni, na mtaji wa wanahisa kwa tarehe fulani.\n\n3. CASH FLOW STATEMENT — Inaonyesha jinsi fedha zinaingia na kutoka kwenye kampuni.\n\nZote tatu zinaunganishwa. Ukisoma moja tu, hupati picha kamili."
  },
  {
    title: "04. Maelezo Rahisi",
    body: "INCOME STATEMENT — Kampuni inapata faida?\n\nMAPATO (Revenue) — fedha zote zilizoingia kutoka mauzo.\nGHARAMA (Expenses) — gharama za uendeshaji, mishahara, kodi, riba.\nFAIDA (Profit) — kinachobaki baada ya gharama zote.\n\nMfano: Mapato 100B − Gharama 70B = Faida 30B\n\nBALANCE SHEET — Mali na madeni?\n\nMALI (Assets) — fedha, mikopo kwa wateja, majengo, mashine.\nMADENI (Liabilities) — mikopo ya benki, kodi, malipo kwa wafanyakazi.\nMTAJI (Equity) — kinachobaki kwa wanahisa baada ya madeni yote kulipwa.\n\nFomula: MALI = MADENI + MTAJI\n\nCASH FLOW — Fedha zinaingia na kutoka vipi?\n\n1. Operating — kutokana na mauzo.\n2. Investing — kununua/kukuza mali.\n3. Financing — mikopo, gawio.\n\nKwa nini Cash Flow ni muhimu? Kwa sababu kampuni inaweza kuonyesha 'faida' kwenye Income Statement lakini haina fedha halisi mkononi."
  },
  {
    title: "05. Mfano wa Tanzania",
    body: "Hebu tuangalie CRDB Bank:\n\nINCOME STATEMENT (2025):\n• Mapato: TSh trilioni 2+\n• Gharama: TSh trilioni 1.5\n• Faida: TSh bilioni 500+\n\nBALANCE SHEET (2025):\n• Mali: TSh trilioni 10+\n• Madeni: TSh trilioni 9\n• Mtaji: TSh trilioni 1+\n\nCASH FLOW (2025):\n• Kutoka uendeshaji: Chanya (fedha zinaingia)\n• Kutoka uwekezaji: Hasi (fedha zinatoka kwa ukuaji)\n• Kutoka ufadhili: Chanya (mikopo na gawio)\n\nNambari hizi zinaonyesha CRDB ni benki yenye afya nzuri ya kifedha."
  },
  {
    title: "06. Jambo la Muhimu",
    body: "Ripoti za fedha zinaonyesha yaliyopita — sio ya baadaye.\n\nKampuni iliyokuwa na faida mwaka jana inaweza kupata hasara mwaka huu. Ripoti ni zana ya kuanzia, sio hitimisho.\n\nLazima uangalie pia:\n• Ushindani wa sekta\n• Hali ya uchumi\n• Mabadiliko ya sera\n• Mwenendo wa soko\n\nData ya kifedha + muktadha wa soko = uchambuzi kamili.\n\nHatua kwa hatua:\n1. Angalia MAPATO — yamekua au yamepungua?\n2. Angalia FAIDA — faida au hasara?\n3. Angalia MADENI — yameongezeka au yamepungua?\n4. Angalia CASH FLOW — fedha zinaingia au zinatoka?\n5. Linganisha na makampuni mengine kwenye sekta.\n6. Jiulize: Kwa nini nambari zimebadilika?"
  },
  {
    title: "07. Jaribu Kufikiri",
    body: "Fikiria hali hii:\n\nKampuni X:\n• Income Statement inaonyesha faida ya TSh bilioni 50\n• Cash Flow inaonyesha fedha zinatoka TSh bilioni 30\n\nMaswali:\n\n1. Inawezekana vipi kampuni iwe na faida kwenye karatasi lakini haina fedha? Kwa nini?\n2. Kama wewe ni mwekezaji, ungependa kuangalia ripoti ipi kwanza? Kwa nini?\n3. Kwa nini ni muhimu kuangalia ripoti zote tatu pamoja?"
  },
  {
    title: "08. Kipimo Kidogo",
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
      },
      {
        q: "Ripoti za fedha zinaonyesha nini?",
        options: "(a) Ya baadaye   (b) Yaliyopita   (c) Ya sasa tu",
        answer: "Jibu: (b) Yaliyopita. Ni zana ya kuanzia, sio hitimisho."
      }
    ]
  },
  {
    title: "09. Muhtasari wa Dakika 1",
    body: "Ripoti tatu muhimu za fedha:\n\n1. INCOME STATEMENT — Mapato, gharama, faida.\n2. BALANCE SHEET — Mali = Madeni + Mtaji.\n3. CASH FLOW — Fedha halisi zinazoingia na kutoka.\n\nKusoma ripoti hizi ni hatua ya kwanza ya uchambuzi wa kampuni.\n\nKumbuka: ripoti zinaonyesha yaliyopita, sio ya baadaye. Unganisha na muktadha wa soko na sekta."
  },
  {
    title: "10. Hatua Inayofuata",
    body: "SOMO 21: Tutaanza kuchambua sekta moja kwa moja — tutachagua sekta ya benki na kuilinganisha CRDB, NMB, na benki nyingine.\n\nTutajifunza jinsi ya kuweka makampuni katika muktadha wa sekta yake, na jinsi ya kuchagua kampuni bora kwenye sekta moja.\n\nPia, tayari unaweza kuanza Uchambuzi wa Kampuni — CRDB, NMB, TBL, Vodacom, TCC, TPCC, Swissport, DSE Plc."
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
