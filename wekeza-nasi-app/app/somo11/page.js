import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa diversification ni nini, kwa nini ni muhimu, na jinsi ya kuiweka kwenye vitendo." },
  { title: "02. Swali la Kuanza", body: "Fikiria unaweka mayai yote kwenye kikapu kimoja. Kikapu kikaanguka, nini kinatokea?\n\nJibu: Mayai yote yanavunjika. Ndio maana tunasema: 'Usiweke mayai yote kwenye kikapu kimoja.' Hii ni diversification." },
  { title: "03. Mchoro Mkuu", body: "DIVERSIFICATION ni kuwekeza kwenye vitu tofauti ili kupunguza hatari:\n\n• Kampuni tofauti\n• Sekta tofauti\n• Aina tofauti za hisa\n• Mikoa tofauti\n\nLengo: Kama moja inashuka, nyingine zinaweza kupanda." },
  { title: "04. Maelezo Rahisi", body: "Jinsi ya kufanya diversification:\n\n1. KAMPUNI TOFAUTI\nUsiweke kwenye CRDB pekee. Weka pia NMB, TBL, Vodacom.\n\n2. SEKTA TOFAUTI\nUsiweke kwenye benki pekee. Weka pia kwenye vinywaji, mawasiliano, saruji.\n\n3. AIA TOFAUTI ZA HISA\nHisa kubwa (stable) + hisa ndogo (growth).\n\n4. MIKOA TOFAUTI\nKama unaweza — hisa za Tanzania + hisa za nje.\n\nLengo: Kupunguza hatari ya kampuni moja au sekta moja." },
  { title: "05. Mfano wa Tanzania", body: "Fikiria una TSh 1,000,000.\n\nNjia A (Bila Diversification):\nWeka zote kwenye CRDB.\nKama CRDB inashuka 20%, unapoteza TSh 200,000.\n\nNjia B (Diversification):\nWeka TSh 250,000 kwenye CRDB\nWeka TSh 250,000 kwenye TBL\nWeka TSh 250,000 kwenye Vodacom\nWeka TSh 250,000 kwenye NMB\n\nKama CRDB inashuka 20%, lakini TBL inapanda 10%, Vodacom inapanda 5%, na NMB inabaki — hasara yako inapungua sana.\n\nHii ni nguvu ya diversification." },
  { title: "06. Jambo la Muhimu", list: [
    "Diversification ni kuwekeza kwenye vitu tofauti",
    "Inapunguza hatari ya kampuni moja au sekta moja",
    "Haiondoi hatari yote — inapunguza tu",
    "Kanuni: 'Usiweke mayai yote kwenye kikapu kimoja'",
    "Diversification ni kanuni ya msingi ya uwekezaji wa busara"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kwa nini diversification ni muhimu?\n\nJibu: Kwa sababu:\n• Kampuni moja inaweza kushindwa\n• Sekta moja inaweza kushuka\n• Soko linaweza kushuka kwa ujumla\n\nDiversification inapunguza athari za matukio haya. Kwa muda mrefu, portfolio iliyogawanywa ina uwezekano mkubwa wa kukua." },
  { title: "08. Muhtasari wa Dakika 1", body: "Diversification ni kuwekeza kwenye:\n\n• Kampuni tofauti\n• Sekta tofauti\n• Aina tofauti za hisa\n• Mikoa tofauti\n\nLengo: Kupunguza hatari. Kanuni: 'Usiweke mayai yote kwenye kikapu kimoja.'\n\nDiversification haiondoi hatari yote — inapunguza tu. Ni kanuni ya msingi ya uwekezaji wa busara." },
  { title: "09. Hatua Inayofuata", body: "SOMO 12: Gawio — Masharti na Taratibu.\n\nTutajifunza kwa kina kuhusu gawio — jinsi linavyolipwa, masharti yake, na jinsi ya kulipokea." }
];

const quiz = [
  { q: "Diversification ni nini?", options: "(a) Kuwekeza kwenye kitu kimoja   (b) Kuwekeza kwenye vitu tofauti   (c) Kukopa", answer: "Jibu: (b) Diversification ni kuwekeza kwenye vitu tofauti (kampuni, sekta, aina) ili kupunguza hatari." },
  { q: "Kwa nini diversification ni muhimu?", options: "(a) Inapunguza hatari   (b) Inaongeza hatari   (c) Haifanyi kitu", answer: "Jibu: (a) Inapunguza hatari — kama moja inashuka, nyingine zinaweza kupanda." },
  { q: "Kanuni ya diversification ni ipi?", options: "(a) Usiweke mayai yote kwenye kikapu kimoja   (b) Weka mayai yote kwenye kikapu kimoja   (c) Usiweke mayai", answer: "Jibu: (a) Usiweke mayai yote kwenye kikapu kimoja — usiweke fedha zote kwenye kitu kimoja." }
];

export default function Somo11() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 11: Diversification</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 11: Diversification"
        lessonHref="/somo11"
        nextHref="/somo12"
        nextLabel="Somo la 12"
      />
    </main>
  );
}
