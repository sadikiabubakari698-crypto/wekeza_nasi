import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa kwa nini kampuni zinaamua kuuza hisa zake kwa umma — na jinsi hii inavyosaidia ukuaji wa biashara." },
  { title: "02. Swali la Kuanza", body: "Kampuni inataka kupanua biashara. Inahitaji fedha nyingi. Inaweza kukopa benki, au kuuza hisa.\n\nKwa nini kampuni nyingi zinachagua kuuza hisa badala ya kukopa?" },
  { title: "03. Mchoro Mkuu", body: "Kampuni ina njia mbili kuu za kupata mtaji:\n\n1. DENI (Kukopa) — Benki, bond. Inalipwa kwa riba.\n2. HISA (Umiliki) — Kuuza sehemu ya kampuni. Haina riba.\n\nKila njia ina faida na hasara.\n\nHisa inatoa mtaji bila deni. Lakini inagawanya umiliki." },
  { title: "04. Maelezo Rahisi", body: "KWA NINI KAMPUNI HUUZA HISA?\n\nSababu kuu nne:\n\n1. KUPATA MTAJI WA KUKUA\n   Kampuni inahitaji fedha kwa upanuzi, teknolojia, au miradi mipya. Hisa inatoa mtaji bila deni.\n\n2. KUPUNGUZA DENI\n   Fedha zilizopatikana zinaweza kulipa mikopo iliyopo — kupunguza gharama za riba.\n\n3. KUPANUA UMWILIKI\n   Wanahisa wengi wanamaanisha rasilimali zaidi, uzoefu mbalimbali, na mitandao.\n\n4. KUONGEZA THAMANI YA KAMPUNI\n   Kuorodheshwa kwenye soko la hisa (kama DSE) kunaongeza hadhi na uaminifu wa kampuni." },
  { title: "05. Mfano wa Tanzania", body: "NMB Bank ilifanya IPO (Initial Public Offering) mwaka 2008. Kwa nini?\n\nNMB ilikuwa inataka:\n• Kupata mtaji wa kupanua matawi\n• Kuboresha teknolojia ya benki\n• Kuongeza uaminifu wa umma\n\nSerikali iliuza asilimia 21 ya umiliki wake kwa umma. Fedha zilizopatikana zilisaidia NMB kukua kuwa benki ya pili kwa ukubwa Tanzania.\n\nKuorodheshwa DSE kuliipa NMB hadhi ya kitaifa na kimataifa." },
  { title: "06. Jambo la Muhimu", list: [
    "Kampuni huuza hisa ili kupata mtaji — sio kwa sababu haina fedha",
    "Hisa = umiliki. Deni = kukopa. Ni njia mbili tofauti za kupata mtaji",
    "Kuorodheshwa DSE kunaongeza hadhi ya kampuni",
    "Wanahisa wana haki ya kupiga kura kwenye mikutano ya wanahisa",
    "Kampuni inagawanya faida kama gawio kwa wanahisa"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Fikiria: Kama wewe ni mmiliki wa kampuni yenye mafanikio, ungeuza hisa kwa umma?\n\nFaida: Unapata mtaji wa kupanua biashara, unapunguza hatari yako binafsi.\n\nHasara: Unagawanya umiliki, unapoteza udhibiti kamili, unatoa taarifa za umma.\n\nUamuzi unategemea malengo yako na hali ya biashara." },
  { title: "08. Muhtasari wa Dakika 1", body: "Kampuni huuza hisa kwa sababu nne kuu:\n\n1. Kupata mtaji wa kukua\n2. Kupunguza deni\n3. Kupanua umiliki\n4. Kuongeza thamani ya kampuni\n\nHisa inatoa mtaji bila deni. Lakini inagawanya umiliki.\n\nMfano: NMB ilifanya IPO mwaka 2008 kwa sababu hizi hizi." },
  { title: "09. Hatua Inayofuata", body: "SOMO 3: Nani ananunua hisa?\n\nTutajifunza nani hasa ananunua hisa sokoni — wewe, benki, taasisi, na wengine. Tutajifunza makundi ya wawekezaji." }
];

const quiz = [
  { q: "Kwa nini kampuni huuza hisa?", options: "(a) Kupata mtaji   (b) Kupunguza wateja   (c) Kupoteza faida", answer: "Jibu: (a) Kampuni huuza hisa ili kupata mtaji wa kukua, kupanua biashara, au kufadhili miradi." },
  { q: "Tofauti kati ya hisa na deni ni ipi?", options: "(a) Hisa ni umiliki, deni ni kukopa   (b) Hazina tofauti   (c) Deni ni bora", answer: "Jibu: (a) Hisa ni umiliki wa sehemu ya kampuni. Deni ni kukopa — inalipwa kwa riba. Ni njia mbili tofauti za kupata mtaji." },
  { q: "NMB ilifanya IPO mwaka gani?", options: "(a) 2005   (b) 2008   (c) 2015", answer: "Jibu: (b) NMB ilifanya IPO mwaka 2008 — serikali iliuza asilimia 21 ya umiliki wake kwa umma." }
];

export default function Somo2() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 2: Kampuni kwa nini huuza hisa?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 2: Kampuni kwa nini huuza hisa?"
        lessonHref="/somo2"
        nextHref="/somo3"
        nextLabel="Somo la 3"
      />
    </main>
  );
}
