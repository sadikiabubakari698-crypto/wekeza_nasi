import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa masharti na taratibu za kupokea gawio kutoka kwa kampuni uliyowekeza." },
  { title: "02. Swali la Kuanza", body: "Kama kampuni imetangaza itatoa gawio, unadhani utahitaji nini ili uweze kulipokea?" },
  { title: "03. Mchoro Mkuu", svgImage: "/diagrams/somo12-tarehe.svg", imageAlt: "Tarehe tano za mchakato wa gawio" },
  { title: "04. Maelezo Rahisi", list: [
    "Tangazo (kampuni yatangaza itatoa gawio na kiasi)",
    "Cum-Dividend (siku ya mwisho ya kununua)",
    "Ex-Dividend (baada ya hapa, hupati gawio hilo)",
    "Record Date (orodha ya wanaostahili inafungwa)",
    "Tarehe ya Malipo (pesa halisi zaingia akaunti yako)",
  ]},
  { title: "05. Mfano wa Tanzania", body: "Kwa makampuni yaliyoorodheshwa DSE, kodi ya zuio kwenye gawio ni asilimia 5 tu (badala ya asilimia 10 ya kawaida), hii ni motisha ya serikali kuhamasisha uwekezaji kupitia soko la hisa. TRA ndiyo inayosimamia TIN na makato haya." },
  { title: "06. Jambo la Muhimu", list: ["Jaza fomu ya KYC wakati wa kufungua akaunti ya CDS, ikijumuisha upendeleo wa malipo", "Lazima uwe na TIN kwa sababu gawio hutozwa kodi ya zuio ya 5% (makampuni ya DSE)", "Gawio halilipwi moja kwa moja kwenye akaunti ya CDS, unahitaji akaunti ya benki au hundi", "Nunua hisa KABLA ya Ex-Dividend ili ustahili gawio hilo"] },
  { title: "07. Jaribu Kufikiri", body: "Kwa nini serikali imepunguza kodi ya gawio kwa makampuni ya DSE (5%) badala ya kiwango cha kawaida (10%)?" },
  { title: "08. Kipimo Kidogo", quiz: [
    { q: "Ukinunua hisa siku ya Ex-Dividend, je utapata gawio linalofuata?", options: "(a) Ndiyo   (b) Hapana   (c) Nusu tu", answer: "Jibu: (b) Hapana" },
    { q: "Kodi ya zuio kwenye gawio la makampuni ya DSE ni asilimia ngapi?", options: "(a) 10%   (b) 5%   (c) 20%", answer: "Jibu: (b) 5%" }
  ]},
  { title: "09. Muhtasari wa Dakika 1", body: "Kupokea gawio kunahitaji KYC iliyojazwa, TIN kwa kodi ya zuio (5%), na kununua hisa kabla ya Ex-Dividend." },
  { title: "10. Cha Kuzingatia: Je, Nikichelewa Kukamilisha KYC?", list: [
    "Gawio lako halipotei, linabaki kwenye akaunti ya gawio lisilolipwa likisubiri wewe kukamilisha taarifa sahihi",
    "Ukikamilisha KYC baadaye, unaweza kudai gawio hilo lililobaki",
    "Hatari kubwa ni kwa watu waliopotea KABISA kimawasiliano kwa miaka 12, ambapo hisa zao zinaweza kuuzwa na fedha kuhamishiwa Serikalini",
    "Suluhisho: kamilisha KYC yako mapema na hakikisha taarifa za mawasiliano ni sahihi",
  ]},
  { title: "11. Hatua Inayofuata", body: "Somo 13: IPO ni nini?" },
];

export default function Somo12() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 12: Gawio - Masharti na Taratibu</h2>
      <LessonStepper steps={steps} nextHref="/somo13" nextLabel="Somo la 13" />
    </main>
  );
}
