import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa nani anasimamia soko la hisa Tanzania — taasisi zinazohakikisha soko linafanya kazi kwa haki na uwazi." },
  { title: "02. Swali la Kuanza", body: "Kama soko la hisa halina msimamizi, nini kinaweza kutokea?\n\nJibu: Watu wanaweza kudanganya, kufanya biashara isiyo halali, au kutumia taarifa za ndani. Ndio maana kuna wasimamizi." },
  { title: "03. Mchoro Mkuu", body: "Soko la hisa Tanzania linasimamiwa na taasisi tatu kuu:\n\n1. CMSA — Capital Markets and Securities Authority\n2. BOT — Benki Kuu ya Tanzania\n3. DSE — Soko lenyewe (linasimamia kanuni zake)\n\nKila mmoja ana jukumu lake." },
  { title: "04. Maelezo Rahisi", body: "CMSA (Capital Markets and Securities Authority):\nHii ni taasisi kuu inayosimamia soko la mitaji Tanzania. Inasimamia:\n• Uorodheshaji wa makampuni\n• Uwazi wa taarifa\n• Kinga ya wawekezaji\n• Leseni za brokers\n\nBOT (Benki Kuu ya Tanzania):\nInasimamia sekta ya benki na fedha. Inahakikisha utulivu wa kifedha.\n\nDSE:\nInasimamia biashara ya kila siku — kanuni za soko, ufuatiliaji wa biashara." },
  { title: "05. Mfano wa Tanzania", body: "CMSA ilianzishwa mwaka 1994 kwa sheria ya Capital Markets and Securities Act.\n\nMfano wa kazi ya CMSA:\n\n• Ilioidhinisha stock split ya NMB Julai 2026\n• Inasimamia IPO za makampuni\n• Inachunguza malalamiko ya wawekezaji\n• Inatoa leseni kwa brokers\n\nCMSA inahakikisha soko la Tanzania linafuata viwango vya kimataifa." },
  { title: "06. Jambo la Muhimu", list: [
    "CMSA ni msimamizi mkuu wa soko la mitaji Tanzania",
    "BOT inasimamia sekta ya benki na fedha",
    "DSE inasimamia biashara ya kila siku",
    "Wasimamizi wanahakikisha soko linafanya kazi kwa haki",
    "Kinga ya wawekezaji ni jukumu la msingi la wasimamizi"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kwa nini ni muhimu kuwa na wasimamizi wa soko la hisa?\n\nJibu: Wasimamizi wanahakikisha:\n• Uwazi — taarifa zote zinatolewa\n• Haki — kila mtu anapata nafasi sawa\n• Usalama — wawekezaji wanalindwa\n• Uaminifu — soko linaaminika\n\nBila wasimamizi, soko lingekuwa la hofu na watu wasinge wekeza." },
  { title: "08. Muhtasari wa Dakika 1", body: "Soko la hisa Tanzania linasimamiwa na:\n\n• CMSA — msimamizi mkuu wa soko la mitaji\n• BOT — msimamizi wa benki na fedha\n• DSE — msimamizi wa biashara ya kila siku\n\nWasimamizi wanahakikisha haki, uwazi, na usalama kwa wawekezaji wote." },
  { title: "09. Hatua Inayofuata", body: "SOMO 6: DSE ni nini?\n\nTutajifunza kwa kina kuhusu Soko la Hisa la Dar es Salaam — historia yake, muundo wake, na jinsi linafanya kazi." }
];

const quiz = [
  { q: "CMSA inasimamia nini?", options: "(a) Benki   (b) Soko la mitaji   (c) Maduka", answer: "Jibu: (b) CMSA inasimamia soko la mitaji Tanzania — uorodheshaji, uwazi, kinga ya wawekezaji, leseni za brokers." },
  { q: "Kwa nini wasimamizi wa soko ni muhimu?", options: "(a) Kuhakikisha haki, uwazi, na usalama   (b) Kupunguza wawekezaji   (c) Kupandisha bei", answer: "Jibu: (a) Wasimamizi wanahakikisha haki, uwazi, na usalama — ili wawekezaji wawe na imani kwenye soko." },
  { q: "BOT inasimamia nini?", options: "(a) Soko la hisa   (b) Sekta ya benki na fedha   (c) Maduka", answer: "Jibu: (b) BOT inasimamia sekta ya benki na fedha — inahakikisha utulivu wa kifedha." }
];

export default function Somo5() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 5: Soko la hisa lipo chini ya nani?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 5: Soko la hisa lipo chini ya nani?"
        lessonHref="/somo5"
        nextHref="/somo6"
        nextLabel="Somo la 6"
      />
    </main>
  );
}
