import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa njia mbili kuu za mwekezaji kupata faida kutoka kwenye hisa." },
  { title: "02. Swali la Kuanza", body: "Kama umenunua hisa mwaka jana na thamani yake imeongezeka, utapataje faida hiyo?" },
  { title: "03. Maelezo Rahisi", body: "Mwekezaji anapata faida kwa njia mbili kuu: kuuza hisa kwa bei ya juu kuliko alivyoinunua (faida ya mtaji), na kupokea sehemu ya faida ya kampuni (gawio) bila hata kuuza hisa. Muhimu: kama vile faida inawezekana, hasara pia inawezekana, thamani ya hisa inaweza kushuka chini ya bei uliyonunulia. Tutaangalia hatari kwa undani zaidi somo linalofuata." },
  { title: "04. Mfano wa Tanzania", body: "Habari njema: hakuna kodi ya faida ya mtaji kwa mwekezaji anayemiliki chini ya asilimia 25 ya kampuni kwenye hisa za DSE, kivutio maalum cha serikali kuhamasisha uwekezaji. CRDB Bank hulipa gawio kila mwaka kwa wanahisa wake kutokana na faida ya benki. Mtu aliyenunua hisa za CRDB miaka iliyopita kwa bei ya chini, akizihifadhi hadi thamani ikapanda, angeweza kuziuza sasa kwa faida." },
  { title: "05. Jambo la Muhimu", list: ["Njia ya kwanza: kuuza hisa kwa bei ya juu (faida ya mtaji)", "Njia ya pili: kupokea gawio bila kuuza", "Sio kila kampuni hulipa gawio kila mwaka", "Thamani ya hisa inaweza pia kushuka, hasara inawezekana"] },
  { title: "06. Jaribu Kufikiri", body: "Kama kampuni haitoi gawio lakini bei ya hisa yake inaongezeka kila mwaka, je bado ni uwekezaji mzuri? Kwa nini?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Faida ya kuuza hisa kwa bei ya juu inaitwaje?", options: "(a) Gawio   (b) Faida ya mtaji   (c) Riba", answer: "Jibu: (b) Faida ya mtaji" },
    { q: "Gawio ni nini?", options: "(a) Deni la kulipa   (b) Sehemu ya faida ya kampuni kwa wanahisa   (c) Kodi", answer: "Jibu: (b) Sehemu ya faida ya kampuni kwa wanahisa" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Mwekezaji anapata faida kwa kuuza hisa kwa bei ya juu au kupokea gawio, lakini hasara pia inawezekana." },
  { title: "09. Hatua Inayofuata", body: "Somo 10: Hatari ya uwekezaji ni nini?" },
];

export default function Somo9() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 9: Mwekezaji anapataje faida?</h2>
      <LessonStepper steps={steps} nextHref="/somo10" nextLabel="Somo la 10" />
    </main>
  );
}
