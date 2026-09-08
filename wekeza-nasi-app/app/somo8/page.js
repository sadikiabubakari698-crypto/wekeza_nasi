import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa kwa nini bei ya hisa hubadilika kila siku." },
  { title: "02. Swali la Kuanza", body: "Kama bei ya mahindi sokoni inaweza kupanda wakati wa ukame na kushuka wakati wa mavuno mengi, unadhani nini kinasababisha hisa kufanya vivyo hivyo?" },
  { title: "03. Maelezo Rahisi", body: "Bei ya hisa inaamuliwa na mahitaji na upatikanaji. Watu wengi wakitaka kununua hisa fulani zaidi ya wanaotaka kuuza, bei inapanda. Watu wengi wakitaka kuuza zaidi ya wanaotaka kununua, bei inashuka." },
  { title: "04. Mfano wa Tanzania", body: "Kampuni ikitangaza faida kubwa mwaka huo, watu wengi wanataka kununua hisa zake wakiamini itaendelea kukua, bei inapanda. Kampuni ikitangaza hasara au habari mbaya, watu wengi wanataka kuuza haraka, bei inashuka." },
  { title: "05. Jambo la Muhimu", list: ["Bei huamuliwa na mahitaji (demand) na upatikanaji (supply)", "Habari njema kuhusu kampuni huvutia wanunuzi, bei hupanda", "Habari mbaya huwafanya watu wengi wauze, bei hushuka", "Matarajio ya baadaye huathiri bei, si utendaji wa sasa pekee"] },
  { title: "06. Jaribu Kufikiri", body: "Kwa nini bei ya hisa inaweza kupanda hata kama kampuni bado haijapata faida halisi, kwa sababu tu watu wanaamini itafanya vizuri baadaye?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Nini kinachoamua bei ya hisa?", options: "(a) Serikali   (b) Mahitaji na upatikanaji   (c) Bahati", answer: "Jibu: (b) Mahitaji na upatikanaji" },
    { q: "Kampuni ikitangaza faida kubwa, kwa kawaida bei ya hisa?", options: "(a) Hushuka   (b) Hupanda   (c) Haibadiliki", answer: "Jibu: (b) Hupanda" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Bei ya hisa hubadilika kulingana na mahitaji na upatikanaji, kinachoathiriwa na habari za kampuni na matarajio ya wawekezaji." },
  { title: "09. Hatua Inayofuata", body: "Somo 9: Mwekezaji anapataje faida?" },
];

export default function Somo8() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 8: Bei ya hisa hupanda na kushuka kwa nini?</h2>
      <LessonStepper steps={steps} nextHref="/somo9" nextLabel="Somo la 9" />
    </main>
  );
}
