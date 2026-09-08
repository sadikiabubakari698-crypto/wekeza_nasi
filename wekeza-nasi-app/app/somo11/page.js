import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa dhana ya diversification (kugawanya uwekezaji) na kwa nini ni muhimu." },
  { title: "02. Swali la Kuanza", body: "Kama mfugaji ana mbuzi wa aina moja tu, na ugonjwa ukashambulia aina hiyo, nini kitatokea kwa mifugo yake yote?" },
  { title: "03. Maelezo Rahisi", body: "Diversification (kugawanya) ni kuwekeza kwenye makampuni au sekta tofauti badala ya moja tu, kama mfugaji mwenye aina tofauti za mifugo (mbuzi, ng'ombe, kuku). Ugonjwa ukishambulia mbuzi, bado ana ng'ombe na kuku wa kumtegemea. Vivyo hivyo, kampuni moja ikifanya vibaya, mengine yanaweza kukusaidia kutopoteza fedha zako zote kwa pamoja." },
  { title: "04. Mfano wa Tanzania", body: "Badala ya kununua hisa za kampuni moja tu (mfano benki moja), unaweza kununua hisa za benki, kampuni ya bia, na kampuni ya mawasiliano, sekta tofauti. Benki ikipata changamoto, bado unaweza kufaidika na makampuni mengine." },
  { title: "05. Jambo la Muhimu", list: ["Usiweke fedha zote kwenye kampuni moja", "Wekeza kwenye sekta tofauti (benki, viwanda, mawasiliano n.k.)", "Diversification haiondoi hatari kabisa, lakini inaipunguza", "Ni kama mfugaji asiyefuga aina moja tu ya mifugo"] },
  { title: "06. Jaribu Kufikiri", body: "Kama una TSh 100,000 za kuwekeza, ungegawaje kwenye makampuni matatu tofauti badala ya kuweka zote kwenye moja?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Diversification ni nini?", options: "(a) Kuwekeza kwenye kampuni moja   (b) Kugawanya uwekezaji kwenye makampuni/sekta tofauti   (c) Kuuza hisa zote", answer: "Jibu: (b) Kugawanya uwekezaji kwenye makampuni/sekta tofauti" },
    { q: "Kwa nini diversification ni muhimu?", options: "(a) Inaongeza faida moja kwa moja   (b) Inapunguza hatari ya kupoteza fedha zote   (c) Ni sheria ya CMSA", answer: "Jibu: (b) Inapunguza hatari ya kupoteza fedha zote" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Diversification ni kugawanya uwekezaji kwenye makampuni au sekta tofauti ili kupunguza hatari ya kupoteza kila kitu." },
  { title: "09. Hatua Inayofuata", body: "Somo 12: Gawio - Masharti na Taratibu" },
];

export default function Somo11() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 11: Diversification (Kugawanya Uwekezaji)</h2>
      <LessonStepper steps={steps} nextHref="/somo12" nextLabel="Somo la 12" />
    </main>
  );
}
