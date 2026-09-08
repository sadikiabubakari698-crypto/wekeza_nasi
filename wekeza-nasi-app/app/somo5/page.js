import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa ni taasisi gani inayosimamia soko la hisa Tanzania na kwa nini usimamizi huo ni muhimu." },
  { title: "02. Swali la Kuanza", body: "Kama hakuna mtu wa kusimamia soko la hisa, nini kingeweza kutokea kwa wawekezaji?" },
  { title: "03. Mchoro Mkuu", svgImage: "/diagrams/somo5-ngazi.svg", imageAlt: "Ngazi ya usimamizi wa soko la hisa" },
  { title: "04. Maelezo Rahisi", body: "Soko la hisa halifanyi kazi lenyewe bila usimamizi. Kuna taasisi ya serikali inayohakikisha kila mtu anafuata sheria, makampuni yanatoa taarifa za kweli, madalali wanafanya kazi kwa uadilifu, na wawekezaji wanalindwa dhidi ya udanganyifu." },
  { title: "05. Mfano wa Tanzania", body: "Tanzania, taasisi hiyo inaitwa Capital Markets and Securities Authority (CMSA), iliyoanzishwa mwaka 1995. CMSA inatoa leseni kwa madalali, inasimamia DSE, na inachunguza malalamiko ya wawekezaji." },
  { title: "06. Jambo la Muhimu", list: ["CMSA ndiyo mlinzi mkuu wa soko la hisa Tanzania", "Kila broker lazima awe na leseni kutoka CMSA", "CMSA inalinda wawekezaji dhidi ya udanganyifu na taarifa za uongo", "Makampuni yaliyoorodheshwa DSE lazima yatoe taarifa za fedha mara kwa mara"] },
  { title: "07. Jaribu Kufikiri", body: "Kwa nini ni muhimu broker awe na leseni rasmi badala ya mtu yeyote kuweza kuuza au kununua hisa kwa niaba yako?" },
  { title: "08. Kipimo Kidogo", quiz: [
    { q: "CMSA inasimamia nini?", options: "(a) Mabenki   (b) Soko la hisa na masuala ya mitaji   (c) Kodi", answer: "Jibu: (b) Soko la hisa na masuala ya mitaji" },
    { q: "Broker anahitaji nini kufanya kazi kihalali?", options: "(a) Shahada   (b) Leseni kutoka CMSA   (c) Gari", answer: "Jibu: (b) Leseni kutoka CMSA" }
  ]},
  { title: "09. Muhtasari wa Dakika 1", body: "CMSA ndiyo taasisi inayosimamia soko la hisa Tanzania, ikihakikisha usalama na uwazi kwa wawekezaji wote." },
  { title: "10. Hatua Inayofuata", body: "Somo 6: DSE ni nini?" },
];

export default function Somo5() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 5: Soko la hisa lipo chini ya nani?</h2>
      <LessonStepper steps={steps} nextHref="/somo6" nextLabel="Somo la 6" />
    </main>
  );
}
