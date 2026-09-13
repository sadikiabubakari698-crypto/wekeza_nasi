import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa hisa ni nini, kwa nini zipo, na kwa nini watu wanazinunua. Hii ni hatua yako ya kwanza kwenye safari ya uwekezaji." },
  { title: "02. Swali la Kuanza", body: "Fikiria kampuni kubwa kama CRDB. Inamilikiwa na nani?\n\nJibu linashangaza wengi: inamilikiwa na maelfu ya Watanzania — kwa kupitia hisa. Hisa ni sehemu ndogo ya umiliki wa kampuni.\n\nLakini hisa ni nini hasa? Na kwa nini ipo?" },
  { title: "03. Mchoro Mkuu", body: "Fikiria kampuni ni keki kubwa. Kila kipande cha keki ni hisa.\n\nKampuni inagawanya umiliki wake katika vipande vidogo — hisa. Mtu anayenunua hisa anamiliki kipande cha kampuni.\n\nHisa 1,000 = kipande kimoja cha kampuni.\nHisa 1,000,000 = kipande kikubwa.\n\nUmiliki wako = idadi ya hisa unazomiliki ÷ jumla ya hisa zote." },
  { title: "04. Maelezo Rahisi", body: "HISA ni sehemu ya umiliki wa kampuni. Ukinunua hisa, unakuwa mmiliki wa sehemu ya kampuni.\n\nKwa nini kampuni huuza hisa?\n\n• Kupata mtaji wa kukua\n• Kupanua biashara\n• Kufadhili miradi mipya\n\nKwa nini watu wananunua hisa?\n\n• Kupata gawio (sehemu ya faida)\n• Kupanda kwa bei ya hisa\n• Kuwa sehemu ya kampuni\n\nHisa ni kama nyumba — unaweza kuinunua, kuiuza, au kuishi nayo kwa muda mrefu." },
  { title: "05. Mfano wa Tanzania", body: "CRDB Bank Plc ni mfano mzuri.\n\nMnamo 2009, CRDB iliorodheshwa DSE. Wakati huo, Watanzania waliweza kununua hisa za CRDB.\n\nMtu aliyenunua hisa za CRDB mwaka 2009 kwa TSh 100 kila moja, leo ana hisa zenye thamani kubwa zaidi.\n\nHii ni nguvu ya hisa — uwekezaji wa muda mrefu unaweza kuzaa matunda." },
  { title: "06. Jambo la Muhimu", list: [
    "Hisa = sehemu ya umiliki wa kampuni",
    "Kampuni huuza hisa ili kupata mtaji",
    "Watu wananunua hisa kwa gawio na kupanda kwa bei",
    "Hisa zinaweza kununuliwa kwenye soko la hisa (DSE)",
    "Uwekezaji wa hisa unahitaji uvumilivu — sio njia ya haraka ya kupata fedha"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Fikiria: kama wewe ni mmiliki wa kampuni ndogo ya mkate, na unataka kupanua biashara, ungewezaje kupata mtaji?\n\nJibu: Unaweza kuuza sehemu ya umiliki wako kwa wawekezaji — hiyo ni hisa. Wewe unapata mtaji, wao wanapata sehemu ya faida ya baadaye." },
  { title: "08. Muhtasari wa Dakika 1", body: "Hisa ni sehemu ya umiliki wa kampuni. Ukinunua hisa, unakuwa mmiliki wa sehemu ya kampuni.\n\nKampuni huuza hisa ili kupata mtaji. Watu wananunua hisa kwa gawio na kupanda kwa bei.\n\nHisa ni msingi wa uwekezaji. Kila kitu tunachojifunza baadaye kinaanzia hapa." },
  { title: "09. Hatua Inayofuata", body: "SOMO 2: Kampuni kwa nini huuza hisa?\n\nTutajifunza kwa undani kwa nini kampuni zinaamua kuuza hisa, na jinsi hii inavyosaidia ukuaji wa biashara." }
];

const quiz = [
  { q: "Hisa ni nini?", options: "(a) Mkopo   (b) Sehemu ya umiliki wa kampuni   (c) Kodi", answer: "Jibu: (b) Hisa ni sehemu ya umiliki wa kampuni. Ukinunua hisa, unakuwa mmiliki wa sehemu ya kampuni." },
  { q: "Kwa nini kampuni huuza hisa?", options: "(a) Kupata mtaji   (b) Kupunguza faida   (c) Kupoteza wateja", answer: "Jibu: (a) Kampuni huuza hisa ili kupata mtaji wa kukua, kupanua biashara, au kufadhili miradi mipya." },
  { q: "Watu wananunua hisa kwa sababu gani?", options: "(a) Kupata gawio na kupanda kwa bei   (b) Kupoteza fedha   (c) Kupata kodi", answer: "Jibu: (a) Watu wananunua hisa kwa gawio (sehemu ya faida) na kupanda kwa bei ya hisa." }
];

export default function Somo1() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 1: Hisa ni nini?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 1: Hisa ni nini?"
        lessonHref="/somo1"
        nextHref="/somo2"
        nextLabel="Somo la 2"
      />
    </main>
  );
}
