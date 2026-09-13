import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa IPO ni nini, kwa nini kampuni huifanya, na jinsi mwekezaji anaweza kushiriki." },
  { title: "02. Swali la Kuanza", body: "Kabla kampuni haijaorodheshwa DSE, inawezaje kuuza hisa zake kwa umma kwa mara ya kwanza?\n\nJibu: Kwa IPO — Initial Public Offering." },
  { title: "03. Mchoro Mkuu", body: "IPO (Initial Public Offering) ni mara ya kwanza kampuni kuuza hisa zake kwa umma.\n\nKabla ya IPO: Kampuni inamilikiwa na wamiliki wachache.\nBaada ya IPO: Kampuni inakuwa ya umma — yeyote anaweza kununua hisa.\n\nHatua:\n1. Kampuni inaamua kufanya IPO\n2. Inaidhinishwa na CMSA\n3. Inatangazwa kwa umma\n4. Wawekezaji wananunua hisa\n5. Hisa zinaanza kubiashara DSE" },
  { title: "04. Maelezo Rahisi", body: "KWA NINI KAMPUNI HIFANYA IPO?\n\n1. KUPATA MTAJI\nFedha nyingi kwa upanuzi wa biashara.\n\n2. KUPUNGUZA DENI\nFedha zinaweza kulipa mikopo.\n\n3. KUONGEZA HADHI\nKuorodheshwa DSE kunaongeza uaminifu.\n\n4. KUWAWEZESHA WALIOANZISHA KUONDOKA\nWaanzilishi wanaweza kuuza sehemu ya hisa zao.\n\nFAIDA KWA MWEKEZAJI:\n• Kununua hisa kwa bei ya awali\n• Kuwa sehemu ya kampuni mapema\n• Nafasi ya kupanda kwa bei" },
  { title: "05. Mfano wa Tanzania", body: "NMB Bank ilifanya IPO mwaka 2008.\n\nSerikali iliuza asilimia 21 ya umiliki wake kwa umma.\n\nWawekezaji wengi walishiriki — walinunua hisa kwa bei ya awali.\n\nBaada ya miaka, bei ya hisa ilipanda. Wawekezaji wa awali walipata faida.\n\nTBL pia iliingia DSE kupitia IPO — ikawa kampuni ya pili kuorodheshwa.\n\nIPO ni fursa kwa mwekezaji kuingia kwenye kampuni mapema." },
  { title: "06. Jambo la Muhimu", list: [
    "IPO = mara ya kwanza kampuni kuuza hisa kwa umma",
    "Inaidhinishwa na CMSA",
    "Kabla ya IPO, kampuni ni binafsi",
    "Baada ya IPO, kampuni inakuwa ya umma na kuorodheshwa DSE",
    "IPO husaidia kampuni kupata mtaji mkubwa kwa mara moja"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kwa nini serikali iliamua kuuza sehemu ya umiliki wake wa NMB kwa umma badala ya kubaki na umiliki wote?\n\nJibu: Ili:\n• Kupata mtaji wa kupanua NMB\n• Kuwaruhusu Watanzania kuwa wamiliki wa benki\n• Kuboresha uwazi na utawala wa benki\n• Kukuza soko la hisa la Tanzania" },
  { title: "08. Muhtasari wa Dakika 1", body: "IPO (Initial Public Offering) ni mara ya kwanza kampuni kuuza hisa kwa umma.\n\nKampuni hufanya IPO ili kupata mtaji, kupunguza deni, na kuongeza hadhi.\n\nMwekezaji anaweza kushiriki — kununua hisa kwa bei ya awali.\n\nBaada ya IPO, kampuni inakuwa ya umma na kuorodheshwa DSE." },
  { title: "09. Hatua Inayofuata", body: "SOMO 14: Stock Split ni nini?\n\nTutajifunza stock split — jinsi kampuni inavyogawanya hisa zake ili kufanya bei kuwa nafuu. Hii ni mada muhimu kwa mwekezaji." }
];

const quiz = [
  { q: "IPO inasimama kwa nini?", options: "(a) Initial Public Offering   (b) International Payment Order   (c) Investment Profit Outcome", answer: "Jibu: (a) IPO inasimama kwa Initial Public Offering — mara ya kwanza kampuni kuuza hisa kwa umma." },
  { q: "NMB Bank ilifanya IPO mwaka gani?", options: "(a) 1998   (b) 2008   (c) 2016", answer: "Jibu: (b) 2008 — serikali iliuza asilimia 21 ya umiliki wake kwa umma." },
  { q: "Kwa nini kampuni hufanya IPO?", options: "(a) Kupata mtaji   (b) Kupunguza wateja   (c) Kupoteza fedha", answer: "Jibu: (a) Kupata mtaji — na pia kupunguza deni, kuongeza hadhi, na kuwawezesha waanzilishi kuondoka." }
];

export default function Somo13() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 13: IPO ni nini?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 13: IPO ni nini?"
        lessonHref="/somo13"
        nextHref="/somo14"
        nextLabel="Somo la 14"
      />
    </main>
  );
}
