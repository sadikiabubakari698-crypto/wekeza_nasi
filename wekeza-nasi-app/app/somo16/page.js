import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa vitu vya msingi vya kuangalia kabla ya kuamua kuwekeza kwenye kampuni fulani." },
  { title: "02. Swali la Kuanza", body: "Kabla ya kununua ng'ombe sokoni, unaangalia nini kwanza ili kujua ni mnyama mzuri?" },
  { title: "03. Maelezo Rahisi", body: "Kuchambua kampuni ni kuangalia taarifa zake kabla ya kuwekeza, badala ya kubahatisha tu. Vitu vya msingi vya kuangalia: ripoti ya mwaka (faida/hasara), historia ya gawio, mwenendo wa bei ya hisa, na habari za hivi karibuni." },
  { title: "04. Mfano wa Tanzania", body: "Kwa sasa, kupata ripoti hizi moja kwa moja kupitia tovuti za makampuni au DSE kunaweza kuwa na changamoto, taarifa hazipo kwa mpangilio rahisi kwa kila mtu. Hili ndilo hasa eneo ambalo WEKEZA NASI inalenga kulitatua siku zijazo, kukuletea uchambuzi wa makampuni yaliyorahisishwa, kampuni moja baada ya nyingine, papa hapa ndani ya app. Kwa sasa, unaweza kuanza na Uchambuzi wa Kampuni tulizoshaandaa." },
  { title: "05. Jambo la Muhimu", list: ["Soma ripoti ya mwaka, je kampuni ilipata faida au hasara?", "Angalia historia ya gawio, kampuni inalipa mara kwa mara?", "Fuatilia mwenendo wa bei, imepanda au kushuka miaka iliyopita?", "Soma habari za hivi karibuni kuhusu kampuni na sekta yake"] },
  { title: "06. Jaribu Kufikiri", body: "Kama kampuni A imepata faida kila mwaka kwa miaka mitano, na kampuni B imepata hasara mara tatu kati ya miaka mitano, ni ipi inayoonekana thabiti zaidi kuwekeza?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Wapi unaweza kupata ripoti ya mwaka ya kampuni?", options: "(a) Tovuti ya kampuni au DSE   (b) Duka la vitabu   (c) Ofisi ya Rais", answer: "Jibu: (a) Tovuti ya kampuni au DSE" },
    { q: "Nini kinachoashiria kampuni thabiti?", options: "(a) Faida ya mara kwa mara   (b) Hasara kila mwaka   (c) Kutokuwa na taarifa", answer: "Jibu: (a) Faida ya mara kwa mara" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Kuchambua kampuni kunahusisha kusoma ripoti ya mwaka, historia ya gawio, mwenendo wa bei, na habari za hivi karibuni kabla ya kuwekeza." },
  { title: "09. Hatua Inayofuata", body: "Hongera! Umemaliza masomo yote 16 ya msingi ya WEKEZA NASI Academy." },
];

export default function Somo16() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 16: Kuanza kuchambua kampuni</h2>
      <LessonStepper steps={steps} nextHref="/kampuni" nextLabel="Uchambuzi wa Kampuni" />
    </main>
  );
}
