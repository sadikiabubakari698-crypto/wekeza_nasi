import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa DSE (Dar es Salaam Stock Exchange) ni nini, historia yake, muundo wake, na jinsi inavyofanya kazi." },
  { title: "02. Swali la Kuanza", body: "Kama unataka kuwekeza Tanzania, unafanyaje? Unaenda wapi? Unaanza vipi?\n\nJibu: Unaenda DSE — Dar es Salaam Stock Exchange. Ni soko kuu la hisa Tanzania." },
  { title: "03. Mchoro Mkuu", body: "DSE ilianzishwa mwaka 1996. Ni taasisi inayotoa:\n\n• Jukwaa la biashara ya hisa\n• Uorodheshaji wa makampuni\n• Uwazi wa taarifa\n• Kinga ya wawekezaji\n\nMakampuni 28+ yameorodheshwa.\n\nMakao makuu yapo Dar es Salaam." },
  { title: "04. Maelezo Rahisi", body: "DSE — Soko la Hisa la Dar es Salaam:\n\nIlianzishwa: 1996\nAina: Soko la hisa (stock exchange)\nMsimamizi: CMSA\nMakao makuu: Dar es Salaam\n\nMakampuni yameorodheshwa kwenye sekta mbalimbali:\n• Benki: CRDB, NMB\n• Vinywaji: TBL\n• Mawasiliano: Vodacom\n• Saruji: TPCC\n• Sigara: TCC\n• Huduma: Swissport, DSE\n\nDSE inafanya kazi kama soko la kawaida — wanunuzi na wauzaji wanakutana, wanakubaliana bei, biashara inafanyika." },
  { title: "05. Mfano wa Tanzania", body: "Kwa miaka 30, DSE imekua kwa kiasi kikubwa.\n\nMarket capitalization ilifikia zaidi ya TSh trilioni 35 kufikia katikati ya 2026, ikiwa imeongezeka kwa zaidi ya asilimia 79 kutoka mwaka uliopita.\n\nHii inaonyesha imani kubwa ya wawekezaji kwenye soko la Tanzania.\n\nDSE ilianzisha pia DSEI (DSE All Share Index) — kipimo cha afya ya jumla ya soko." },
  { title: "06. Jambo la Muhimu", list: [
    "DSE ilianzishwa 1996 — soko la pekee la hisa Tanzania",
    "Inasimamiwa na CMSA",
    "Makampuni 28+ yameorodheshwa",
    "Market capitalization ilifikia TSh trilioni 35+ (2026)",
    "DSEI ni kipimo cha afya ya jumla ya soko"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kwa nini DSE ni muhimu kwa uchumi wa Tanzania?\n\nJibu: DSE:\n• Inasaidia makampuni kupata mtaji\n• Inatoa nafasi kwa Watanzania kuwekeza\n• Inaongeza uwazi wa makampuni\n• Inavutia wawekezaji wa kimataifa\n• Inachangia ukuaji wa uchumi na ajira" },
  { title: "08. Muhtasari wa Dakika 1", body: "DSE ni soko la hisa la Tanzania — lilianzishwa 1996.\n\nInasimamiwa na CMSA. Makampuni 28+ yameorodheshwa.\n\nMarket capitalization ilifikia TSh trilioni 35+ (2026).\n\nDSE ni muhimu kwa uchumi — inasaidia makampuni kupata mtaji, na Watanzania kuwekeza." },
  { title: "09. Hatua Inayofuata", body: "SOMO 7: Hisa inanunuaje na kuuzwaje?\n\nTutajifunza hatua kwa hatua jinsi unavyoweza kununua na kuuza hisa kupitia broker kwenye DSE." }
];

const quiz = [
  { q: "DSE ilianzishwa mwaka gani?", options: "(a) 1990   (b) 1996   (c) 2005", answer: "Jibu: (b) DSE ilianzishwa mwaka 1996. Ni soko la pekee la hisa Tanzania." },
  { q: "DSE inasimamiwa na nani?", options: "(a) BOT   (b) CMSA   (c) Serikali", answer: "Jibu: (b) DSE inasimamiwa na CMSA (Capital Markets and Securities Authority)." },
  { q: "DSEI ni nini?", options: "(a) Kipimo cha afya ya jumla ya soko   (b) Broker   (c) Kampuni", answer: "Jibu: (a) DSEI (DSE All Share Index) ni kipimo cha afya ya jumla ya soko — inafuatilia makampuni yote pamoja." }
];

export default function Somo6() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 6: DSE ni nini?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 6: DSE ni nini?"
        lessonHref="/somo6"
        nextHref="/somo7"
        nextLabel="Somo la 7"
      />
    </main>
  );
}
