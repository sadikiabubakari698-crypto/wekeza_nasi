import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa nini kinachoathiri bei ya hisa — kwa nini inapanda na kushuka kila siku." },
  { title: "02. Swali la Kuanza", body: "Jana CRDB ilikuwa TSh 2,600. Leo ni TSh 2,650. Kwa nini imepanda?\n\nJibu: Bei ya hisa inaathiriwa na mambo mengi — ugavi, mahitaji, habari, uchumi, na hisia za wawekezaji." },
  { title: "03. Mchoro Mkuu", body: "Bei ya hisa inaundwa na mambo manne makuu:\n\n1. UGAVI NA MAHITAJI\n2. HABARI ZA KAMPUNI\n3. HALI YA UCHUMI\n4. HISIA ZA WAWEKEZAJI\n\nKila kipengele kina mchango wake. Pamoja, vinaunda bei ya hisa." },
  { title: "04. Maelezo Rahisi", body: "1. UGAVI NA MAHITAJI\nWanunuzi wengi + wauzaji wachache = bei inapanda\nWanunuzi wachache + wauzaji wengi = bei inashuka\n\n2. HABARI ZA KAMPUNI\nFaida kubwa → bei inapanda\nHasara → bei inashuka\nGawio kubwa → bei inavutia\n\n3. HALI YA UCHUMI\nUchumi unakua → bei inapanda\nUchumi unashuka → bei inashuka\nRiba ikipanda → bei inaweza kushuka\n\n4. HISIA ZA WAWEKEZAJI\nHofu → wauzaji wengi → bei inashuka\nTamaa → wanunuzi wengi → bei inapanda" },
  { title: "05. Mfano wa Tanzania", body: "Hebu tuangalie CRDB:\n\n2020: Bei ilikuwa TSh 200+\n2023: Bei ilipanda hadi TSh 600+\n\nKwa nini?\n\n• Faida ilikua kwa miaka\n• NPL ilipungua\n• Uchumi wa Tanzania ulikua\n• Imani ya wawekezaji iliongezeka\n\nHii inaonyesha: bei ya hisa inafuata msingi wa kampuni kwa muda mrefu." },
  { title: "06. Jambo la Muhimu", list: [
    "Bei ya hisa inaundwa na ugavi na mahitaji",
    "Habari za kampuni zinaathiri bei — faida, hasara, gawio",
    "Uchumi wa nchi unaathiri hisa zote",
    "Hisia za wawekezaji zinaweza kuathiri bei kwa muda mfupi",
    "Kwa muda mrefu, bei inafuata msingi wa kampuni"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kwa nini bei ya hisa inaweza kubadilika sana kwa siku moja?\n\nJibu: Kwa sababu hisia za wawekezaji zinaweza kubadilika haraka. Habari moja — kama tangazo la faida au hasara — inaweza kusababisha wanunuzi au wauzaji wengi kwa wakati mmoja.\n\nLakini kwa muda mrefu (miaka), bei inafuata msingi wa kampuni — mapato, faida, na ukuaji." },
  { title: "08. Muhtasari wa Dakika 1", body: "Bei ya hisa inaathiriwa na:\n\n1. Ugavi na mahitaji\n2. Habari za kampuni (faida, hasara, gawio)\n3. Hali ya uchumi (ukuaji, riba, mfumuko)\n4. Hisia za wawekezaji (hofu, tamaa)\n\nKwa muda mfupi, hisia zinaweza kuathiri. Kwa muda mrefu, msingi wa kampuni ndio unaamua." },
  { title: "09. Hatua Inayofuata", body: "SOMO 9: Mwekezaji anapataje faida?\n\nTutajifunza njia mbili za faida — gawio na kupanda kwa bei ya hisa. Tutajifunza pia jinsi ya kuhesabu faida yako." }
];

const quiz = [
  { q: "Nini kinaathiri bei ya hisa?", options: "(a) Ugavi na mahitaji pekee   (b) Ugavi, mahitaji, habari, uchumi, hisia   (c) Bei ya dhahabu", answer: "Jibu: (b) Bei ya hisa inaathiriwa na mchanganyiko wa ugavi, mahitaji, habari za kampuni, uchumi, na hisia za wawekezaji." },
  { q: "Kwa muda mrefu, bei ya hisa inafuata nini?", options: "(a) Hisia za wawekezaji   (b) Msingi wa kampuni   (c) Bahati", answer: "Jibu: (b) Kwa muda mrefu, bei ya hisa inafuata msingi wa kampuni — mapato, faida, na ukuaji." },
  { q: "Faida kubwa ya kampuni inaathiri bei vipi?", options: "(a) Bei inapanda   (b) Bei inashuka   (c) Bei haibadiliki", answer: "Jibu: (a) Faida kubwa inavutia wawekezaji — wanunuzi wengi — bei inapanda." }
];

export default function Somo8() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 8: Bei ya hisa hupanda na kushuka kwa nini?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 8: Bei ya hisa hupanda na kushuka kwa nini?"
        lessonHref="/somo8"
        nextHref="/somo9"
        nextLabel="Somo la 9"
      />
    </main>
  );
}
