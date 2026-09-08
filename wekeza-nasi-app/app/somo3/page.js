import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa ni akina nani wanaonunua hisa na kwa nini wanafanya hivyo." },
  { title: "02. Swali la Kuanza", body: "Je, unadhani ni watu wa aina gani wananunua hisa, matajiri tu, au mtu yeyote anaweza?" },
  { title: "03. Maelezo Rahisi", body: "Mnunuzi wa hisa ni yeyote anayetaka kuwekeza fedha zake ili zikue kwa muda, badala ya kuziacha tu benki au nyumbani. Anaweza kuwa mtu binafsi, mfuko wa pensheni, mkulima anayeuza mazao yake, au hata kampuni kubwa." },
  { title: "04. Mfano wa Tanzania", body: "Mifuko kama NSSF na PSSSF huwekeza fedha za wanachama kwenye hisa za makampuni ya DSE ili kukuza fedha hizo kwa ajili ya mafao ya baadaye. Pia raia wa kawaida wananunua hisa kupitia madalali." },
  { title: "05. Jambo la Muhimu", list: ["Yeyote mwenye Kitambulisho cha Taifa (NIDA) na akaunti ya benki anaweza kununua hisa", "Sio lazima uwe tajiri kuanza, unaweza kuanza na kiasi kidogo", "Wawekezaji wakubwa na wadogo wote wananunua kwenye soko moja", "Kila mnunuzi ana lengo tofauti, wengine faida ya haraka, wengine muda mrefu"] },
  { title: "06. Jaribu Kufikiri", body: "Kwa nini mfuko wa pensheni unaweza kuchagua kuwekeza kwa muda mrefu zaidi kuliko mtu binafsi anayehitaji fedha haraka?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Nani anaweza kununua hisa?", options: "(a) Matajiri tu   (b) Yeyote mwenye akaunti ya benki   (c) Serikali pekee", answer: "Jibu: (b) Yeyote mwenye akaunti ya benki" },
    { q: "NSSF ni mfano wa nani?", options: "(a) Mfuko wa pensheni   (b) Benki   (c) Kampuni ya simu", answer: "Jibu: (a) Mfuko wa pensheni" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Mnunuzi wa hisa ni yeyote, mtu binafsi, mfuko wa pensheni, au kampuni, anayetaka kuwekeza fedha ili zikue." },
  { title: "09. Hatua Inayofuata", body: "Somo 4: Soko la hisa ni nini?" },
];

export default function Somo3() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 3: Nani ananunua hisa?</h2>
      <LessonStepper steps={steps} nextHref="/somo4" nextLabel="Somo la 4" />
    </main>
  );
}
