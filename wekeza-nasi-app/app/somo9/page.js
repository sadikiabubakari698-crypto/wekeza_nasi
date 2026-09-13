import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa njia mbili kuu ambazo mwekezaji anapata faida kwenye hisa — gawio na kupanda kwa bei." },
  { title: "02. Swali la Kuanza", body: "Unanunua hisa. Unatarajia kupata faida vipi?\n\nJibu: Kuna njia mbili kuu — gawio (mapato ya mara kwa mara) na kupanda kwa bei ya hisa (ukuaji wa mtaji)." },
  { title: "03. Mchoro Mkuu", body: "Mwekezaji anapata faida kwa njia mbili:\n\n1. GAWIO (Dividends)\n   Sehemu ya faida ya kampuni inayolipwa kwa wanahisa.\n\n2. KUPANDA KWA BEI (Capital Gains)\n   Bei ya hisa inapanda, mwekezaji anaweza kuuza kwa faida.\n\nWengine wanapata faida kwa njia zote mbili." },
  { title: "04. Maelezo Rahisi", body: "GAWIO:\nKampuni inapata faida. Sehemu ya faida inagawiwa kwa wanahisa kama gawio.\n\nMfano: TBL inagawia asilimia 60-80 ya faida kama gawio.\n\nGawio linalipwa kwa:\n• Kila hisa unayomiliki\n• Kila mwaka (au robo mwaka)\n\nKUPANDA KWA BEI:\nBei ya hisa inapanda. Mwekezaji anaweza kuuza kwa faida.\n\nMfano: Unanunua hisa kwa TSh 1,000. Miaka 3 baadaye, inakuwa TSh 2,000. Ukiuza, unapata faida ya TSh 1,000 kwa hisa.\n\nHii inaitwa capital gain." },
  { title: "05. Mfano wa Tanzania", body: "Mfano 1: CRDB\n\nUkinunua hisa 1,000 za CRDB kwa TSh 500 kila moja (2022) = TSh 500,000.\n\nBaada ya miaka 2, bei ni TSh 700.\n\nThamani yako: 1,000 × 700 = TSh 700,000.\n\nFaida ya mtaji: TSh 200,000.\n\nPamoja na gawio (kama TSh 20 kwa hisa), unaongeza TSh 20,000 kwa mwaka.\n\nJumla ya faida = Faida ya mtaji + Gawio." },
  { title: "06. Jambo la Muhimu", list: [
    "Gawio = mapato ya mara kwa mara kutoka faida ya kampuni",
    "Kupanda kwa bei = faida ya mtaji unapouza",
    "Wawekezaji wengine wanatafuta gawio, wengine ukuaji",
    "Faida yako = (Bei ya kuuza - Bei ya kununua) + Gawio",
    "Uwekezaji wa muda mrefu unaweza kuongeza faida yote miwili"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kama kampuni haitoi gawio, ungewekeza?\n\nJibu: Inategemea. Kama kampuni inatumia faida kwa ukuaji (reinvestment), inaweza kukua kwa kasi zaidi. Bei ya hisa inaweza kupanda zaidi.\n\nKwa mwekezaji wa muda mrefu, ukuaji wa mtaji unaweza kuwa bora kuliko gawio." },
  { title: "08. Muhtasari wa Dakika 1", body: "Mwekezaji anapata faida kwa njia mbili:\n\n1. GAWIO — sehemu ya faida inayolipwa kwa wanahisa\n2. KUPANDA KWA BEI — faida ya mtaji unapouza\n\nFaida yako = (Bei ya kuuza - Bei ya kununua) + Gawio.\n\nWawekezaji tofauti wanatafuta faida tofauti. Uwekezaji wa muda mrefu unaweza kuongeza zote mbili." },
  { title: "09. Hatua Inayofuata", body: "SOMO 10: Hatari ya uwekezaji ni nini?\n\nTutajifunza hatari mbalimbali za uwekezaji — hatari ya soko, hatari ya kampuni, hatari ya sekta, na jinsi ya kuzipunguza." }
];

const quiz = [
  { q: "Njia kuu mbili za faida ya hisa ni zipi?", options: "(a) Gawio na kupanda kwa bei   (b) Kukopa na kulipa   (c) Kodi na ada", answer: "Jibu: (a) Njia kuu mbili ni gawio (mapato ya mara kwa mara) na kupanda kwa bei (faida ya mtaji)." },
  { q: "Gawio ni nini?", options: "(a) Sehemu ya faida ya kampuni inayolipwa kwa wanahisa   (b) Kodi   (c) Mkopo", answer: "Jibu: (a) Gawio ni sehemu ya faida ya kampuni inayolipwa kwa wanahisa — kwa kila hisa unayomiliki." },
  { q: "Faida ya mtaji (capital gain) ni nini?", options: "(a) Kupanda kwa bei ya hisa unapouza   (b) Gawio   (c) Ada", answer: "Jibu: (a) Faida ya mtaji ni kupanda kwa bei ya hisa — unapouza kwa bei ya juu kuliko uliyonunua." }
];

export default function Somo9() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 9: Mwekezaji anapataje faida?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 9: Mwekezaji anapataje faida?"
        lessonHref="/somo9"
        nextHref="/somo10"
        nextLabel="Somo la 10"
      />
    </main>
  );
}
