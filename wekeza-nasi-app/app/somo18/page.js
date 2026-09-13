import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Katika Somo 17 tumejifunza kusoma muhtasari wa siku. Sasa tunaingia ndani zaidi: tunaangalia jinsi wanunuzi na wauzaji wanavyokutana kwenye soko. Utajifunza Bid, Offer, Spread, Liquidity, Limit Order, na Market Order." },
  { title: "02. Swali la Kuanza", body: "Fikiria uko sokoni unataka kununua embe. Muuzaji anasema 'nauza kwa TSh 1,000.' Wewe unasema 'nitanunua kwa TSh 800.' Hakuna anayekubali bado.\n\nNini kitatokea ili biashara ifanyike?\n\nHii ndiyo hali halisi ya soko la hisa kila siku." },
  { title: "03. Mchoro Mkuu", body: "Order Book ni orodha ya maagizo yote ya kununua na kuuza yaliyowekwa na wawekezaji kwa hisa fulani.\n\nWANUNUZI                  WAUZAJI\n   BID                       OFFER\n  2,610        ← →          2,620\n\"Nataka kununua\"        \"Nataka kuuza\"\n\nHapo kuna pengo: 2,620 − 2,610 = TSh 10\n\nHilo linaitwa SPREAD." },
  { title: "04. Maelezo Rahisi", body: "BID — Bei ambayo mnunuzi yuko tayari kulipa.\n\nOFFER — Bei ambayo muuzaji yuko tayari kukubali.\n\nSPREAD — Tofauti kati ya offer na bid. Spread ndogo = biashara rahisi. Spread kubwa = biashara ngumu.\n\nLIQUIDITY — Urahisi wa kununua au kuuza hisa bila kubadilisha bei sana.\n\nLIMIT ORDER — Maagizo ya kununua/kuuza kwa bei maalum unayochagua. Inaweza kuchukua muda kukamilika.\n\nMARKET ORDER — Maagizo ya kununua/kuuza papo hapo kwa bei yoyote iliyopo sokoni." },
  { title: "05. Mfano wa Tanzania", body: "Fikiria CRDB ina Best Bid = TSh 2,610 na Best Offer = TSh 2,620.\n\nHii ina maana:\n• Mnunuzi wa juu yuko tayari kulipa TSh 2,610\n• Muuzaji wa chini yuko tayari kupokea TSh 2,620\n• Spread = TSh 10\n\nHakuna biashara inayoweza kufanyika mara moja — kwa sababu mnunuzi hataki kulipa zaidi ya 2,610, na muuzaji hataki kupokea chini ya 2,620.\n\nKwa hisa za DSE kama CRDB na NMB, spread huwa ndogo (liquidity kubwa). Kwa hisa ndogo, spread inaweza kuwa kubwa (liquidity ndogo)." },
  { title: "06. Jambo la Muhimu", body: "Tunapoona Outstanding Bids kubwa (wanunuzi wengi), ni rahisi kufikiri 'bei itapanda kesho.' Hii SI kweli kila wakati.\n\n• Bid kubwa + Offer ndogo = shinikizo la kupanda\n• Bid ndogo + Offer kubwa = shinikizo la kushuka\n• Bid kubwa + Offer kubwa = biashara nyingi, bei inaweza kutulia\n\nKumbuka: Bid kubwa inaonyesha nia ya kununua, lakini kama wauzaji pia wapo wengi kwa bei hiyo hiyo, bei inaweza kubaki palepale.\n\nData ya leo haituambii bei ya kesho. Inatuambia hali ya sasa." },
  { title: "07. Jaribu Kufikiri", body: "Fikiria hali hii:\n\n• CRDB ina Best Bid = TSh 2,610\n• CRDB ina Best Offer = TSh 2,620\n• Spread = TSh 10\n\nMaswali:\n\n1. Je, biashara inaweza kufanyika papo hapo? Kwa nini?\n2. Je, spread ndogo ina maana gani kwa mwekezaji?\n3. Kama unataka kununua haraka, utatumia limit order au market order? Kwa nini?" },
  { title: "08. Muhtasari wa Dakika 1", body: "Order book inatuonyesha bids (wanunuzi) na offers (wauzaji).\n\n• Best Bid = bei ya juu ya mnunuzi\n• Best Offer = bei ya chini ya muuzaji\n• Spread = tofauti kati yao — ndogo ni nzuri\n• Liquidity = urahisi wa kubadilisha hisa kuwa fedha\n• Limit Order = bei yako\n• Market Order = bei ya soko\n\nKumbuka: Bid kubwa haipandishi bei yenyewe. Unganisha Bid na Offer ili kupata picha kamili." },
  { title: "09. Hatua Inayofuata", body: "SOMO 19: Kusoma Mwenendo wa Bei kwa Siku Nyingi.\n\nTutajifunza: jinsi ya kuunganisha data za siku tofauti, kuona mwelekeo, na kujiuliza maswali sahihi kabla ya kufikiri kuhusu uwekezaji." }
];

const quiz = [
  { q: "Bid ni nini?", options: "(a) Bei ambayo muuzaji yuko tayari kukubali   (b) Bei ambayo mnunuzi yuko tayari kulipa   (c) Bei ya jana", answer: "Jibu: (b) Bid ni bei ambayo mnunuzi yuko tayari kulipa." },
  { q: "Spread ni nini?", options: "(a) Offer − Bid   (b) Bid + Offer   (c) Volume × Deals", answer: "Jibu: (a) Spread = Offer − Bid. Ni tofauti kati ya bei ya muuzaji na bei ya mnunuzi." },
  { q: "Limit Order inamaanisha nini?", options: "(a) Kununua papo hapo kwa bei yoyote   (b) Kununua kwa bei maalum unayochagua   (c) Kuuza tu", answer: "Jibu: (b) Kununua/kuuza kwa bei maalum unayochagua. Inaweza kuchukua muda kukamilika." }
];

export default function Somo18() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 18: Jinsi ya Kusoma Data za DSE — Sehemu ya 2</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 18: Jinsi ya Kusoma Data za DSE — Sehemu ya 2"
        lessonHref="/somo18"
        nextHref="/somo19"
        nextLabel="Somo la 19"
      />
    </main>
  );
}
