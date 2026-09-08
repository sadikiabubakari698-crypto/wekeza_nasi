import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa IPO ni nini na kwa nini kampuni huamua kuifanya." },
  { title: "02. Swali la Kuanza", body: "Kabla kampuni haijaorodheshwa DSE, inawezaje kuuza hisa zake kwa umma kwa mara ya kwanza?" },
  { title: "03. Maelezo Rahisi", body: "IPO (Initial Public Offering) ni mara ya kwanza kampuni kuuza hisa zake kwa umma. Kabla ya hapo, kampuni inamilikiwa na wamiliki wachache (familia au wawekezaji binafsi). IPO inaifanya kampuni ya umma, yeyote anaweza kununua hisa zake." },
  { title: "04. Mfano wa Tanzania", body: "NMB Bank ilifanya IPO mwaka 2008, serikali ikiuza asilimia 21 ya umiliki wake kwa umma kupitia DSE. Tanzania Breweries (TBL) pia iliingia DSE kupitia IPO, ikawa kampuni ya pili kuorodheshwa baada ya TOL Gas." },
  { title: "05. Jambo la Muhimu", list: ["IPO ni mara ya kwanza kampuni kuuza hisa kwa umma", "Kabla ya IPO, kampuni ni binafsi (private)", "Baada ya IPO, kampuni inakuwa ya umma na inaweza kuorodheshwa DSE", "IPO husaidia kampuni kupata mtaji mkubwa kwa mara moja"] },
  { title: "06. Jaribu Kufikiri", body: "Kwa nini serikali iliamua kuuza sehemu ya umiliki wake wa NMB Bank kwa umma badala ya kubaki na umiliki wote?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "IPO inasimama kwa nini?", options: "(a) Initial Public Offering   (b) International Payment Order   (c) Investment Profit Outcome", answer: "Jibu: (a) Initial Public Offering" },
    { q: "NMB Bank ilifanya IPO mwaka gani?", options: "(a) 1998   (b) 2008   (c) 2016", answer: "Jibu: (b) 2008" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "IPO ni mara ya kwanza kampuni kuuza hisa zake kwa umma, ikiifanya kuwa kampuni ya umma inayoweza kuorodheshwa DSE." },
  { title: "09. Hatua Inayofuata", body: "Somo 14: Stock Split ni nini?" },
];

export default function Somo13() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 13: IPO ni nini?</h2>
      <LessonStepper steps={steps} nextHref="/somo14" nextLabel="Somo la 14" />
    </main>
  );
}
