import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa jinsi ya kufuatilia utendaji wa jumla wa soko la Tanzania kupitia kiashiria (index)." },
  { title: "02. Swali la Kuanza", body: "Kama una hisa za makampuni matano tofauti, unawezaje kujua kwa haraka kama soko kwa ujumla linafanya vizuri au vibaya, bila kuangalia kila kampuni moja moja?\n\nJibu: Kwa kutumia index — kiashiria cha utendaji wa jumla." },
  { title: "03. Mchoro Mkuu", body: "DSE ina kiashiria kiitwacho DSE All Share Index (DSEI):\n\n• Inafuatilia makampuni yote 28+ pamoja\n• Kikipanda, bei za hisa nyingi zinapanda\n• Kikishuka, bei nyingi zinashuka\n\nUnaweza kuona DSEI ya siku kwenye tovuti rasmi ya DSE (dse.co.tz)." },
  { title: "04. Maelezo Rahisi", body: "DSEI (DSE All Share Index):\nNi kipimo cha afya ya jumla ya soko la hisa Tanzania.\n\nInafuatilia:\n• Bei za hisa za makampuni yote\n• Kwa kupima mabadiliko kwa ujumla\n\nMARKET CAPITALIZATION:\nNi thamani jumla ya makampuni yote yaliyoorodheshwa.\n\nMfano: Market cap ya TSh trilioni 35+ inamaanisha makampuni yote DSE yana thamani ya TSh trilioni 35+." },
  { title: "05. Mfano wa Tanzania", body: "DSE ilitimiza miaka 30 tarehe 3 Julai 2026.\n\nThamani jumla ya makampuni yote (market capitalization) ilifikia zaidi ya TZS trilioni 35 kufikia katikati ya 2026.\n\nHii ni ongezeko la zaidi ya asilimia 79 kutoka mwaka uliopita.\n\nInaashiria:\n• Imani kubwa ya wawekezaji\n• Ukuaji wa uchumi\n• Uwekezaji mkubwa kwenye soko la hisa" },
  { title: "06. Jambo la Muhimu", list: [
    "DSEI ni kiashiria kinachofuatilia makampuni yote 28+ pamoja",
    "Market capitalization ni thamani jumla ya makampuni yote yaliyoorodheshwa",
    "Soko linaweza kupanda au kushuka kutokana na uchumi, riba, au hali ya kisiasa",
    "Kupanda kwa index hakumaanishi kila hisa moja moja itapanda",
    "DSEI inapatikana kwenye tovuti ya DSE (dse.co.tz)"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kama DSEI imepanda kwa asilimia 70 mwaka mmoja, je hii inamaanisha hisa zote ulizonazo zimepanda kwa asilimia hiyo hiyo?\n\nJibu: Hapana. DSEI ni wastani. Hisa zako zinaweza kupanda zaidi au chini ya wastani. Kuna hisa zinaweza kushuka hata kama index imepanda.\n\nHii ni kwa sababu index inachukua wastani wa soko lote, sio kila hisa binafsi." },
  { title: "08. Muhtasari wa Dakika 1", body: "DSEI ni kiashiria kinachoonyesha afya ya jumla ya soko la Tanzania.\n\nInafuatilia makampuni yote 28+ pamoja.\n\nMarket capitalization ilifikia TSh trilioni 35+ (2026).\n\nKupanda kwa index hakumaanishi kila hisa imepanda. Ni wastani wa soko." },
  { title: "09. Hatua Inayofuata", body: "SOMO 16: Kuanza kuchambua kampuni.\n\nTutaanza kujifunza jinsi ya kuchambua kampuni — vitu vya msingi vya kuangalia kabla ya kuwekeza." }
];

const quiz = [
  { q: "DSEI inafuatilia nini?", options: "(a) Bei ya dola   (b) Makampuni yote 28+ yaliyoorodheshwa DSE   (c) Bei ya dhahabu", answer: "Jibu: (b) DSEI inafuatilia makampuni yote 28+ yaliyoorodheshwa DSE — kwa pamoja." },
  { q: "Market capitalization ni nini?", options: "(a) Faida ya mwaka   (b) Thamani jumla ya makampuni yaliyoorodheshwa   (c) Kodi ya serikali", answer: "Jibu: (b) Market capitalization ni thamani jumla ya makampuni yote yaliyoorodheshwa kwenye soko." },
  { q: "Kama DSEI imepanda, inamaanisha kila hisa imepanda?", options: "(a) Ndiyo   (b) Hapana — ni wastani   (c) Inategemea", answer: "Jibu: (b) Hapana. DSEI ni wastani. Hisa binafsi zinaweza kupanda zaidi au chini ya wastani." }
];

export default function Somo15() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 15: Soko la Tanzania linafanyaje kazi?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 15: Soko la Tanzania linafanyaje kazi?"
        lessonHref="/somo15"
        nextHref="/somo16"
        nextLabel="Somo la 16"
      />
    </main>
  );
}
