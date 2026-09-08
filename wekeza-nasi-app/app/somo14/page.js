import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa stock split ni nini na kwa nini kampuni huifanya." },
  { title: "02. Swali la Kuanza", body: "Kama una noti moja ya TSh 10,000, ukiibadilisha kuwa noti kumi za TSh 1,000, je thamani yako imebadilika?" },
  { title: "03. Maelezo Rahisi", body: "Stock split ni pale kampuni inapoongeza idadi ya hisa zilizopo kwa kuzigawanya, bila kubadilisha thamani jumla ya umiliki wa mwanahisa. Kwa mfano split ya 1:10, kila hisa moja inakuwa hisa 10, lakini bei ya kila moja inapungua kwa mara 10 ili thamani jumla ibaki sawa." },
  { title: "04. Mfano wa Tanzania", body: "NMB Bank ilifanya share split ya 1:10 iliyoidhinishwa na CMSA Julai 2026, ikiongeza hisa zilizoidhinishwa kutoka milioni 625 hadi bilioni 6.25. Lengo lilikuwa kufanya hisa za NMB kuwa nafuu zaidi na rahisi kufikiwa na wawekezaji wengi zaidi." },
  { title: "05. Jambo la Muhimu", list: ["Stock split haiongezi wala kupunguza thamani yako halisi ya uwekezaji", "Inafanya bei ya kila hisa kuwa nafuu, hivyo watu wengi zaidi wanaweza kununua", "Idadi ya hisa unazomiliki huongezeka kulingana na uwiano (mfano 1:10)", "Baada ya split, biashara (turnover) ya hisa hiyo mara nyingi huongezeka"] },
  { title: "06. Jaribu Kufikiri", body: "Kwa nini NMB Bank iliamua kufanya stock split badala ya kuacha bei ya hisa ikiwa juu?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Stock split ya 1:10 inamaanisha nini?", options: "(a) Hisa 1 inakuwa hisa 10   (b) Bei inapanda mara 10   (c) Unapoteza hisa 9 kati ya 10", answer: "Jibu: (a) Hisa 1 inakuwa hisa 10" },
    { q: "Baada ya stock split, thamani jumla ya uwekezaji wako?", options: "(a) Inaongezeka   (b) Haibadiliki   (c) Inapungua", answer: "Jibu: (b) Haibadiliki" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Stock split ni kugawanya hisa zilizopo ili kupunguza bei ya kila moja, bila kubadilisha thamani jumla ya uwekezaji wako." },
  { title: "09. Hatua Inayofuata", body: "Somo 15: Soko la Tanzania linafanyaje kazi?" },
];

export default function Somo14() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 14: Stock Split ni nini?</h2>
      <LessonStepper steps={steps} nextHref="/somo15" nextLabel="Somo la 15" />
    </main>
  );
}
