import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa stock split ni nini, kwa nini kampuni huifanya, na athari zake kwa mwekezaji." },
  { title: "02. Swali la Kuanza", body: "Kama una noti moja ya TSh 10,000, ukiibadilisha kuwa noti kumi za TSh 1,000, je thamani yako imebadilika?\n\nJibu: Hapana. Thamani ni ile ile — TSh 10,000. Stock split ni kitu kama hiki." },
  { title: "03. Mchoro Mkuu", body: "STOCK SPLIT ni kugawanya hisa zilizopo ili kupunguza bei ya kila hisa, bila kubadilisha thamani jumla ya uwekezaji.\n\nMfano: Split ya 1:10\n• Kila hisa 1 inakuwa hisa 10\n• Bei ya kila hisa inapungua kwa sehemu ya kumi\n• Thamani jumla haibadiliki" },
  { title: "04. Maelezo Rahisi", body: "KWA NINI KAMPUNI HIFANYA STOCK SPLIT?\n\n1. KUPUNGUZA BEI YA KILA HISA\nBei ya juu inaweza kuwa vigumu kwa wawekezaji wadogo.\n\n2. KUONGEZA UKWASI\nHisa nyingi sokoni = biashara nyingi = ukwasi zaidi.\n\n3. KUVUTIA WAWEKEZAJI ZAIDI\nBei nafuu inavutia wawekezaji wapya.\n\nMFANO RAHISI:\n\nKabla ya split:\nHisa 100 × TSh 3,000 = TSh 300,000\n\nBaada ya split 1:10:\nHisa 1,000 × TSh 300 = TSh 300,000\n\nThamani ni sawa — TSh 300,000." },
  { title: "05. Mfano wa Tanzania", body: "NMB Bank ilifanya stock split ya 1:10 Julai 2026.\n\nIlioidhinishwa na CMSA Julai 24, 2026.\nIlitangazwa rasmi Julai 27, 2026.\n\nLengo: Kufanya hisa ziwe nafuu kwa wawekezaji wengi zaidi.\n\nMatokeo:\n• Hisa zilizoidhinishwa: kutoka milioni 625 hadi bilioni 6.25\n• Bei ya kila hisa mpya: sehemu ya kumi ya bei ya zamani\n• Wawekezaji wapya walivutiwa" },
  { title: "06. Jambo la Muhimu", list: [
    "Stock split haiongezi wala kupunguza thamani yako",
    "Inafanya bei ya kila hisa kuwa nafuu",
    "Idadi ya hisa unazomiliki huongezeka (mfano 1:10)",
    "Baada ya split, biashara (turnover) ya hisa mara nyingi huongezeka",
    "Lengo kuu ni kuongeza ukwasi, sio kukupa faida ya haraka"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kwa nini NMB iliamua kufanya stock split badala ya kuacha bei ya hisa ikiwa juu?\n\nJibu: Ili:\n• Kuvutia wawekezaji wadogo wanaotafuta bei nafuu\n• Kuongeza biashara ya hisa (turnover)\n• Kuboresha ukwasi wa soko\n• Kufanya hisa zipatikane kwa watu wengi\n\nHii ni mkakati wa makusudi wa kuongeza upatikanaji wa hisa." },
  { title: "08. Muhtasari wa Dakika 1", body: "Stock split ni kugawanya hisa zilizopo ili kupunguza bei ya kila moja.\n\nThamani jumla ya uwekezaji wako HAIBADILIKI.\n\nLengo: Kuongeza ukwasi na kuvutia wawekezaji wengi.\n\nMfano: NMB ilifanya split ya 1:10 Julai 2026." },
  { title: "09. Hatua Inayofuata", body: "SOMO 15: Soko la Tanzania linafanyaje kazi?\n\nTutajifunza jinsi soko la Tanzania linafanya kazi kwa ujumla — kupitia DSEI (DSE All Share Index) na viashiria vingine." }
];

const quiz = [
  { q: "Stock split ya 1:10 inamaanisha nini?", options: "(a) Hisa 1 inakuwa hisa 10   (b) Bei inapanda mara 10   (c) Unapoteza hisa 9 kati ya 10", answer: "Jibu: (a) Hisa 1 inakuwa hisa 10. Bei ya kila hisa inapungua kwa sehemu ya kumi." },
  { q: "Baada ya stock split, thamani jumla ya uwekezaji wako?", options: "(a) Inaongezeka   (b) Haibadiliki   (c) Inapungua", answer: "Jibu: (b) Haibadiliki. Stock split haiongezi wala kupunguza thamani — inagawanya hisa tu." },
  { q: "Kwa nini kampuni hufanya stock split?", options: "(a) Kupunguza bei ya kila hisa na kuongeza ukwasi   (b) Kupoteza fedha   (c) Kupunguza wateja", answer: "Jibu: (a) Kupunguza bei ya kila hisa na kuongeza ukwasi — ili kuvutia wawekezaji wengi zaidi." }
];

export default function Somo14() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 14: Stock Split ni nini?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 14: Stock Split ni nini?"
        lessonHref="/somo14"
        nextHref="/somo15"
        nextLabel="Somo la 15"
      />
    </main>
  );
}
