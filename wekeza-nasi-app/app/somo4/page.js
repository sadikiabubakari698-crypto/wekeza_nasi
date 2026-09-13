import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa soko la hisa ni nini, kwa nini lipo, na jinsi linavyofanya kazi. Hii ni hatua muhimu kuelewa mahali hisa zinauzwa na kununuliwa." },
  { title: "02. Swali la Kuanza", body: "Ukihitaji kununua mkate, unaenda dukani. Ukihitaji kununua hisa, unaenda wapi?\n\nJibu: Soko la hisa — mahali ambapo wanunuzi na wauzaji wa hisa wanakutana." },
  { title: "03. Mchoro Mkuu", body: "SOKO LA HISA ni jukwaa la kukutanisha:\n\n• Makampuni yanayotaka kuuza hisa\n• Wawekezaji wanaotaka kununua hisa\n• Brokers — wa kati\n• Mdhibiti — anayesimamia\n\nKila siku, wanunuzi na wauzaji wanakutana, wanabadilishana hisa, na bei inaundwa.\n\nDSE (Dar es Salaam Stock Exchange) ni soko la hisa la Tanzania." },
  { title: "04. Maelezo Rahisi", body: "Soko la hisa linafanya kazi kama soko la kawaida:\n\n• Watu wanakuja na hisa au fedha\n• Wanakubaliana bei\n• Biashara inafanyika\n\nKuna soko la msingi (primary market) — kampuni inauza hisa kwa mara ya kwanza (IPO).\n\nNa soko la pili (secondary market) — wawekezaji wanauziana hisa kati yao.\n\nSoko la pili ndiyo linalofanya kazi kila siku — hili ni DSE." },
  { title: "05. Mfano wa Tanzania", body: "DSE ilianzishwa mwaka 1996. Ni soko la pekee la hisa Tanzania.\n\nKuna makampuni zaidi ya 28 yameorodheshwa DSE:\n\n• Benki: CRDB, NMB\n• Vinywaji: TBL\n• Mawasiliano: Vodacom\n• Saruji: TPCC, Tanga Cement\n• Nyingine: TCC, Swissport, DSE yenyewe\n\nKila siku ya kazi, DSE inafungua asubuhi, inafanya biashara, kisha inafunga mchana.\n\nBrokers wa DSE wanawawezesha Watanzania kununua na kuuza hisa." },
  { title: "06. Jambo la Muhimu", list: [
    "Soko la hisa = jukwaa la kukutanisha wanunuzi na wauzaji",
    "DSE ni soko la hisa la Tanzania — lilianzishwa 1996",
    "Kuna soko la msingi (IPO) na soko la pili (biashara ya kila siku)",
    "Makampuni 28+ yameorodheshwa DSE",
    "Brokers ni wa kati kati yako na soko"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Fikiria: Kwa nini soko la hisa ni muhimu kwa uchumi?\n\nJibu: Soko la hisa huwasaidia makampuni kupata mtaji wa kukua, na huwapa watu nafasi ya kuwekeza. Hii inachangia ukuaji wa uchumi, kuunda ajira, na kuboresha maisha ya watu.\n\nSoko la hisa lenye nguvu = uchumi wenye nguvu." },
  { title: "08. Muhtasari wa Dakika 1", body: "Soko la hisa ni jukwaa la kukutanisha wanunuzi na wauzaji wa hisa.\n\nDSE ni soko la hisa la Tanzania — lilianzishwa 1996, lina makampuni 28+.\n\nKuna soko la msingi (IPO) na soko la pili (biashara ya kila siku).\n\nBrokers ni wa kati. Soko la hisa linachangia ukuaji wa uchumi." },
  { title: "09. Hatua Inayofuata", body: "SOMO 5: Soko la hisa lipo chini ya nani?\n\nTutajifunza nani anasimamia soko la hisa Tanzania — CMSA, BOT, na jinsi udhibiti unavyofanya kazi." }
];

const quiz = [
  { q: "Soko la hisa ni nini?", options: "(a) Duka la hisa   (b) Jukwaa la kukutanisha wanunuzi na wauzaji   (c) Benki", answer: "Jibu: (b) Soko la hisa ni jukwaa la kukutanisha wanunuzi na wauzaji wa hisa." },
  { q: "DSE ilianzishwa mwaka gani?", options: "(a) 1990   (b) 1996   (c) 2005", answer: "Jibu: (b) DSE ilianzishwa mwaka 1996. Ni soko la pekee la hisa Tanzania." },
  { q: "Tofauti kati ya soko la msingi na soko la pili ni ipi?", options: "(a) Hakuna tofauti   (b) Msingi ni IPO, pili ni biashara ya kila siku   (c) Msingi ni DSE", answer: "Jibu: (b) Soko la msingi ni IPO (mara ya kwanza kampuni kuuza hisa). Soko la pili ni biashara ya kila siku kati ya wawekezaji." }
];

export default function Somo4() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 4: Soko la hisa ni nini?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 4: Soko la hisa ni nini?"
        lessonHref="/somo4"
        nextHref="/somo5"
        nextLabel="Somo la 5"
      />
    </main>
  );
}
