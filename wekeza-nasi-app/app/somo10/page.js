import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa aina za hatari zinazoweza kuathiri uwekezaji wako wa hisa." },
  { title: "02. Swali la Kuanza", body: "Je, umeshawahi kusikia mtu akipoteza fedha kwenye uwekezaji? Unadhani ni kwa nini?" },
  { title: "03. Maelezo Rahisi", body: "Hatari ya uwekezaji ni uwezekano wa kupoteza fedha badala ya kupata faida. Kuna aina kadhaa: hatari ya soko (bei ya hisa zote kushuka wakati wa matatizo ya kiuchumi), hatari ya kampuni (kampuni mahususi kufanya vibaya), na hatari ya ukwasi (kutopata mnunuzi haraka ukitaka kuuza)." },
  { title: "04. Mfano wa Tanzania", body: "Wakati wa changamoto za kiuchumi za kimataifa, bei za hisa nyingi DSE zinaweza kushuka kwa pamoja, hii ni hatari ya soko. Kampuni moja ikipata hasara kutokana na uongozi mbaya, hisa zake pekee zinaweza kushuka bila kuathiri nyingine, hatari ya kampuni." },
  { title: "05. Jambo la Muhimu", list: ["Hatari ya soko, inaathiri hisa zote kwa pamoja", "Hatari ya kampuni, inaathiri kampuni moja tu", "Hatari ya ukwasi, kutopata mnunuzi wa haraka", "Hakuna uwekezaji usio na hatari kabisa"] },
  { title: "06. Jaribu Kufikiri", body: "Kwa nini ni hatari zaidi kuwekeza fedha zote kwenye kampuni moja tu badala ya kadhaa?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Hatari inayoathiri hisa zote kwa pamoja inaitwaje?", options: "(a) Hatari ya kampuni   (b) Hatari ya soko   (c) Hatari ya ukwasi", answer: "Jibu: (b) Hatari ya soko" },
    { q: "Hatari ya ukwasi ni nini?", options: "(a) Kutopata mnunuzi haraka   (b) Kampuni kufilisika   (c) Serikali kuingilia", answer: "Jibu: (a) Kutopata mnunuzi haraka" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Uwekezaji wa hisa una hatari za soko, kampuni, na ukwasi, hakuna uwekezaji usio na hatari kabisa." },
  { title: "09. Hatua Inayofuata", body: "Somo 11: Diversification" },
];

export default function Somo10() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 10: Hatari ya uwekezaji ni nini?</h2>
      <LessonStepper steps={steps} nextHref="/somo11" nextLabel="Somo la 11" />
    </main>
  );
}
