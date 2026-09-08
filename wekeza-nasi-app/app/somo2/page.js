import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa ni kwa nini makampuni huamua kuuza sehemu ya umiliki wao (hisa) kwa umma badala ya kubaki na umiliki wote." },
  { title: "02. Swali la Kuanza", body: "Kama una shamba dogo na unataka kulipanua kuwa kubwa zaidi, lakini huna fedha za kutosha, utafanyaje?" },
  { title: "03. Maelezo Rahisi", body: "Kampuni inapohitaji fedha nyingi za kukua, ina njia mbili: kukopa benki na kulipa riba, au kuuza sehemu ya umiliki wake kwa wawekezaji (hisa). Wakiuza hisa, hawana deni la kulipa riba, lakini wanashiriki umiliki na faida na wamiliki wapya." },
  { title: "04. Mfano wa Tanzania", body: "CRDB Bank iliuza hisa zake kwa umma ili kupata mtaji wa kupanua matawi yake nchi nzima, badala ya kutegemea mikopo pekee." },
  { title: "05. Jambo la Muhimu", list: ["Kuuza hisa ni njia ya kampuni kupata mtaji bila kukopa", "Kampuni ikiuza hisa, wamiliki wapya wanashiriki umiliki na faida", "Hii ni tofauti na mkopo, hakuna riba ya kulipa", "Mwenye hisa nyingi zaidi ana sauti kubwa zaidi kwenye maamuzi"] },
  { title: "06. Jaribu Kufikiri", body: "Kwa nini baadhi ya wamiliki wa kampuni wangependa kukopa benki badala ya kuuza hisa, hata ikiwa watalipa riba?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Kampuni ikiuza hisa, inapata nini?", options: "(a) Deni   (b) Mtaji   (c) Riba", answer: "Jibu: (b) Mtaji" },
    { q: "Tofauti kuu kati ya mkopo na kuuza hisa ni ipi?", options: "(a) Hakuna tofauti   (b) Mkopo una riba, hisa hazina   (c) Hisa ni ghali zaidi", answer: "Jibu: (b) Mkopo una riba, hisa hazina" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Kampuni huuza hisa ili kupata mtaji wa kukua bila kukopa, badala ya riba, wanashiriki umiliki na faida na wawekezaji wapya." },
  { title: "09. Hatua Inayofuata", body: "Somo 3: Nani ananunua hisa?" },
];

export default function Somo2() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 2: Kampuni kwa nini huuza hisa?</h2>
      <LessonStepper steps={steps} nextHref="/somo3" nextLabel="Somo la 3" />
    </main>
  );
}
