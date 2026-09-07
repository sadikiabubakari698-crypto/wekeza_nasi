import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Mwisho wa somo hili, utaelewa hisa ni nini na kwa nini watu huwekeza kwenye soko la hisa." },
  { title: "02. Swali la Kuanza", body: "Je, umeshawahi kufikiria kumiliki sehemu ya biashara bila kuwa na fedha nyingi za kuianzisha peke yako?" },
  { title: "03. Maelezo Rahisi", body: "Fikiria shamba kubwa la mazao. Badala ya mtu mmoja kumiliki shamba lote, wamiliki kadhaa wanaweza kugawana shamba hilo, kila mmoja akimiliki sehemu yake. Sehemu hiyo ya umiliki ndicho kinachoitwa hisa.", image: "/somo1-hisa.png", imageAlt: "Hisa ni nini - mfano wa shamba" },
  { title: "04. Mfano wa Tanzania", body: "Makampuni kama CRDB Bank na TBL yameorodheshwa kwenye Soko la Hisa la Dar es Salaam (DSE). Mtanzania yeyote anaweza kununua hisa za makampuni haya na kuwa mmiliki mdogo wa kampuni hizo." },
  { title: "05. Jambo la Muhimu", list: ["Hisa ni sehemu ya umiliki, si mkopo", "Faida (gawio) hutegemea utendaji wa kampuni", "Thamani ya hisa inaweza kupanda au kushuka", "Uwekezaji wa hisa unahitaji uvumilivu na uelewa"] },
  { title: "06. Jaribu Kufikiri", body: "Kama kampuni A ina hisa 1,000 zote, na wewe unamiliki hisa 10, ni asilimia ngapi ya kampuni unayomiliki?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Hisa ni nini?", options: "(a) Mkopo   (b) Sehemu ya umiliki   (c) Zawadi", answer: "Jibu: (b) Sehemu ya umiliki" },
    { q: "Gawio ni nini?", options: "(a) Adhabu   (b) Sehemu ya faida   (c) Kodi", answer: "Jibu: (b) Sehemu ya faida" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Hisa = umiliki mdogo wa kampuni. Kampuni ikifanya vizuri, wewe unafaidika." },
  { title: "09. Hatua Inayofuata", body: "Somo 2: Kampuni kwa nini huuza hisa?" },
];

export default function Somo1() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 1: Hisa ni nini?</h2>
      <LessonStepper steps={steps} nextHref="/somo2" nextLabel="Somo la 2" />
    </main>
  );
}
