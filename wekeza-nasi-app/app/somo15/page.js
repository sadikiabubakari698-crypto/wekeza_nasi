import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa jinsi ya kufuatilia utendaji wa jumla wa soko la Tanzania kupitia kiashiria (index)." },
  { title: "02. Swali la Kuanza", body: "Kama una hisa za makampuni matano tofauti, unawezaje kujua kwa haraka kama soko kwa ujumla linafanya vizuri au vibaya, bila kuangalia kila kampuni moja moja?" },
  { title: "03. Maelezo Rahisi", body: "DSE ina kiashiria kiitwacho DSE All Share Index (DSEI), kinachofuatilia makampuni yote 28 yaliyoorodheshwa kwa pamoja. Kiashiria hiki kikipanda, maana yake bei za hisa nyingi kwa ujumla zinapanda; kikishuka, bei nyingi zinashuka. Unaweza kuona DSEI ya siku hiyo kwenye tovuti rasmi ya DSE (dse.co.tz), inayochapisha ripoti ya soko kila siku ya biashara." },
  { title: "04. Mfano wa Tanzania", body: "DSE ilitimiza miaka 30 tarehe 3 Julai 2026. Thamani jumla ya makampuni yote (market capitalization) ilifikia zaidi ya TZS trilioni 35 kufikia katikati ya 2026, ikiwa imeongezeka kwa zaidi ya asilimia 79 kutoka mwaka uliopita, kikiashiria imani kubwa ya wawekezaji na ukuaji wa uchumi." },
  { title: "05. Jambo la Muhimu", list: ["DSEI ni kiashiria kinachofuatilia makampuni yote 28 kwa pamoja", "Market capitalization ni thamani jumla ya makampuni yote yaliyoorodheshwa", "Soko linaweza kupanda au kushuka kutokana na uchumi, riba, au hali ya kisiasa", "Kupanda kwa index hakumaanishi kila hisa moja moja itapanda, baadhi zinaweza kushuka"] },
  { title: "06. Jaribu Kufikiri", body: "Kama DSEI imepanda kwa asilimia 70 mwaka mmoja, je hii inamaanisha hisa zote ulizonazo zimepanda kwa asilimia hiyo hiyo? Kwa nini au kwa nini hapana?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "DSEI inafuatilia nini?", options: "(a) Bei ya dola   (b) Makampuni yote 28 yaliyoorodheshwa DSE   (c) Bei ya dhahabu", answer: "Jibu: (b) Makampuni yote 28 yaliyoorodheshwa DSE" },
    { q: "Market capitalization ni nini?", options: "(a) Faida ya mwaka   (b) Thamani jumla ya makampuni yaliyoorodheshwa   (c) Kodi ya serikali", answer: "Jibu: (b) Thamani jumla ya makampuni yaliyoorodheshwa" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "DSEI ni kiashiria kinachoonyesha afya ya jumla ya soko la Tanzania kwa kufuatilia makampuni yote 28 pamoja." },
  { title: "09. Hatua Inayofuata", body: "Somo 16: Kuanza kuchambua kampuni" },
];

export default function Somo15() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 15: Soko la Tanzania linafanyaje kazi?</h2>
      <LessonStepper steps={steps} nextHref="/somo16" nextLabel="Somo la 16" />
    </main>
  );
}
