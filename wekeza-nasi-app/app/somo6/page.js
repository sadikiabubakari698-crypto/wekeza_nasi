import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa historia fupi ya DSE na jinsi ilivyoundwa kwa undani zaidi." },
  { title: "02. Swali la Kuanza", body: "Je, unadhani DSE ilianzishwa lini, na ni makampuni mangapi yameorodheshwa humo leo?" },
  { title: "03. Mchoro Mkuu", svgImage: "/diagrams/somo6-historia.svg", imageAlt: "Historia ya DSE" },
  { title: "04. Maelezo Rahisi", body: "DSE ni kampuni yenyewe (siyo idara ya serikali) inayoendesha soko la hisa Tanzania. Ilianzishwa 1996 kwa lengo la kuboresha mfumo wa mitaji nchini, kuwapa makampuni njia rahisi ya kupata mtaji wa kukua, na kuwapa wananchi fursa ya kuwekeza na kushiriki katika ukuaji wa uchumi wa taifa. Biashara halisi ikaanza 1998, kampuni ya kwanza kuorodheshwa ikiwa TOL Gas." },
  { title: "05. Mfano wa Tanzania", body: "Leo DSE ina makampuni 28 yaliyoorodheshwa, ikiwa na sehemu tatu za soko: Sehemu Kuu (kwa makampuni makubwa yaliyothibitika), Sehemu ya Ukuaji (kwa biashara ndogo zinazokua), na Sehemu ya Hatifungani (bonds). DSE yenyewe iliorodhesha hisa zake mwaka 2016, ikawa soko la tatu Afrika kufanya hivyo baada ya Johannesburg na Nairobi." },
  { title: "06. Jambo la Muhimu", list: ["DSE ilianzishwa 1996, biashara ikaanza 1998", "Ina makampuni 28 yaliyoorodheshwa", "Ina sehemu tatu: makampuni makubwa, madogo yanayokua, na hatifungani", "DSE ni kampuni ya umma yenyewe, hisa zake pia zinauzwa DSE"] },
  { title: "07. Jaribu Kufikiri", body: "Kwa nini DSE iliamua kuunda sehemu maalum kwa makampuni madogo yanayokua, badala ya kuyachanganya na makampuni makubwa?" },
  { title: "08. Kipimo Kidogo", quiz: [
    { q: "DSE ilianzishwa mwaka gani?", options: "(a) 1996   (b) 2006   (c) 2016", answer: "Jibu: (a) 1996" },
    { q: "Sehemu ya Ukuaji ni ya makampuni gani?", options: "(a) Makubwa   (b) Madogo yanayokua   (c) Ya serikali", answer: "Jibu: (b) Madogo yanayokua" }
  ]},
  { title: "09. Muhtasari wa Dakika 1", body: "DSE ni kampuni inayoendesha soko la hisa Tanzania tangu 1996, ikiwa na makampuni 28, na yenyewe pia imeorodheshwa DSE." },
  { title: "10. Hatua Inayofuata", body: "Somo 7: Hisa inanunuaje na kuuzwaje?" },
];

export default function Somo6() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 6: DSE ni nini?</h2>
      <LessonStepper steps={steps} nextHref="/somo7" nextLabel="Somo la 7" />
    </main>
  );
}
