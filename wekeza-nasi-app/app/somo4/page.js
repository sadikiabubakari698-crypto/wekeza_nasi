import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa soko la hisa ni nini na kwa nini linahitajika." },
  { title: "02. Swali la Kuanza", body: "Kama watu wengi wananunua na kuuza hisa za makampuni tofauti, wanakutana wapi kufanya hivyo?" },
  { title: "03. Maelezo Rahisi", body: "Soko la hisa ni mahali maalum (halisi au la kidijitali) ambapo wanunuzi na wauzaji wa hisa za makampuni mbalimbali hukutana kufanya biashara. Ni kama soko kuu la kijiji, lakini badala ya mazao, kinachouzwa ni hisa za makampuni." },
  { title: "04. Mfano wa Tanzania", body: "Dar es Salaam Stock Exchange (DSE) ndilo soko rasmi la hisa Tanzania, mahali ambapo hisa za makampuni yaliyoorodheshwa (kama CRDB, TBL, NMB) zinauzwa na kununuliwa. DSE inafanya biashara Jumatatu hadi Ijumaa, kuanzia saa 10:00 asubuhi hadi saa 16:00 jioni." },
  { title: "05. Jambo la Muhimu", list: ["Soko la hisa huunganisha wanunuzi na wauzaji mahali pamoja", "Bila soko, itakuwa vigumu kupata mtu wa kuuziana hisa", "Soko huhakikisha bei zinawekwa wazi kwa kila mtu kuona", "Kila nchi kubwa ina soko lake la hisa, mfano NYSE Marekani, JSE Afrika Kusini"] },
  { title: "06. Jaribu Kufikiri", body: "Kama hakukuwa na soko rasmi la hisa, ungefanyaje ili kuuza hisa zako kwa mtu mwingine?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Soko la hisa ni nini?", options: "(a) Duka la mazao   (b) Mahali panapokutanisha wanunuzi na wauzaji wa hisa   (c) Benki", answer: "Jibu: (b) Mahali panapokutanisha wanunuzi na wauzaji wa hisa" },
    { q: "Soko la hisa Tanzania linaitwaje?", options: "(a) NYSE   (b) JSE   (c) DSE", answer: "Jibu: (c) DSE" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Soko la hisa ni mahali maalum linalounganisha wanunuzi na wauzaji wa hisa za makampuni mbalimbali, kama DSE hapa Tanzania." },
  { title: "09. Hatua Inayofuata", body: "Somo 5: Soko la hisa lipo chini ya nani?" },
];

export default function Somo4() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 4: Soko la hisa ni nini?</h2>
      <LessonStepper steps={steps} nextHref="/somo5" nextLabel="Somo la 5" />
    </main>
  );
}
