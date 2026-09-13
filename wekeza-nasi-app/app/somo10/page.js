import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa hatari mbalimbali za uwekezaji — hatari ya soko, hatari ya kampuni, hatari ya sekta, na jinsi ya kuzipunguza." },
  { title: "02. Swali la Kuanza", body: "Kama uwekezaji hauna hatari, kila mtu angewekeza. Kwa nini watu wengi hawaweki?\n\nJibu: Kwa sababu kuna hatari. Uwekezaji unaweza kupoteza thamani. Lakini hatari inaweza kudhibitiwa." },
  { title: "03. Mchoro Mkuu", body: "Aina kuu za hatari:\n\n1. HATARI YA SOKO (Market Risk)\n2. HATARI YA KAMPUNI (Company Risk)\n3. HATARI YA SEKTA (Sector Risk)\n4. HATARI YA UKWASI (Liquidity Risk)\n5. HATARI YA Mfumuko (Inflation Risk)\n\nKila aina ina jinsi ya kuipunguza." },
  { title: "04. Maelezo Rahisi", body: "1. HATARI YA SOKO\nSoko linaweza kushuka kwa ujumla. Hii inaathiri hisa zote. Jinsi ya kupunguza: uwekezaji wa muda mrefu.\n\n2. HATARI YA KAMPUNI\nKampuni moja inaweza kushindwa. Jinsi ya kupunguza: diversification (kuwekeza kwenye kampuni nyingi).\n\n3. HATARI YA SEKTA\nSekta moja inaweza kushuka (mfano, sekta ya sigara). Jinsi ya kupunguza: kuwekeza kwenye sekta tofauti.\n\n4. HATARI YA UKWASI\nHisa inaweza kuwa vigumu kuuza. Jinsi ya kupunguza: kuchagua hisa zenye liquidity kubwa.\n\n5. HATARI YA MFUMUKO\nMfumuko wa bei unapunguza thamani ya fedha. Jinsi ya kupunguza: kuwekeza kwenye hisa (ambazo zinaweza kupanda na mfumuko)." },
  { title: "05. Mfano wa Tanzania", body: "Mfano: COVID-19 (2020)\n\nWakati wa janga la COVID-19, soko la hisa Tanzania liliathirika. Bei za hisa zilishuka.\n\nHii ilikuwa hatari ya soko — ilikuwa inaathiri hisa zote, sio kampuni moja.\n\nLakini baada ya 2021, soko lilipona. Bei zilipanda.\n\nSomo: Hatari ya soko inaweza kuwa ya muda. Kwa mwekezaji wa muda mrefu, uvumilivu ni muhimu." },
  { title: "06. Jambo la Muhimu", list: [
    "Kuna aina tano kuu za hatari",
    "Diversification (kuwekeza kwenye mengi) inapunguza hatari",
    "Hatari ya soko inaweza kuwa ya muda — uvumilivu ni muhimu",
    "Uwekezaji wa muda mrefu unapunguza hatari ya soko",
    "Kila uwekezaji una hatari — kukubali hatari ni sehemu ya uwekezaji"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kama mwekezaji mwenye hisa nyingi, ulipunguza hatari vipi?\n\nJibu: Kwa diversification — kuwekeza kwenye:\n• Kampuni tofauti (CRDB, NMB, TBL, Vodacom)\n• Sekta tofauti (benki, vinywaji, mawasiliano)\n• Aina tofauti za hisa (kubwa, ndogo)\n\nDiversification ni kanuni muhimu ya uwekezaji wa busara." },
  { title: "08. Muhtasari wa Dakika 1", body: "Aina tano kuu za hatari:\n\n1. Hatari ya soko — soko linashuka kwa ujumla\n2. Hatari ya kampuni — kampuni moja inashindwa\n3. Hatari ya sekta — sekta moja inashuka\n4. Hatari ya ukwasi — hisa vigumu kuuza\n5. Hatari ya mfumuko — thamani ya fedha inapungua\n\nDiversification na uvumilivu ni zana zako za kupunguza hatari." },
  { title: "09. Hatua Inayofuata", body: "SOMO 11: Diversification.\n\nTutajifunza kwa kina jinsi ya kuwekeza kwenye makampuni mengi ili kupunguza hatari. Hii ni kanuni ya msingi ya uwekezaji wa busara." }
];

const quiz = [
  { q: "Aina kuu tano za hatari ni zipi?", options: "(a) Soko, kampuni, sekta, ukwasi, mfumuko   (b) Kodi, ada, riba   (c) Faida, gawio", answer: "Jibu: (a) Aina kuu tano ni: hatari ya soko, ya kampuni, ya sekta, ya ukwasi, na ya mfumuko." },
  { q: "Diversification inapunguza hatari vipi?", options: "(a) Kwa kuwekeza kwenye mengi   (b) Kwa kuwekeza kwenye kimoja   (c) Kwa kukopa", answer: "Jibu: (a) Diversification ni kuwekeza kwenye makampuni na sekta tofauti — hivyo hatari ya kampuni moja au sekta moja inapunguzwa." },
  { q: "Hatari ya soko inaweza kudhibitiwa vipi?", options: "(a) Kwa uvumilivu na uwekezaji wa muda mrefu   (b) Kwa kuuza haraka   (c) Kwa kukopa", answer: "Jibu: (a) Kwa uvumilivu na uwekezaji wa muda mrefu — hatari ya soko mara nyingi ni ya muda." }
];

export default function Somo10() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 10: Hatari ya uwekezaji ni nini?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 10: Hatari ya uwekezaji ni nini?"
        lessonHref="/somo10"
        nextHref="/somo11"
        nextLabel="Somo la 11"
      />
    </main>
  );
}
