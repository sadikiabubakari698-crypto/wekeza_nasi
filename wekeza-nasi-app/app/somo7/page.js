import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa hatua kwa hatua jinsi ya kununua na kuuza hisa kupitia broker kwenye DSE." },
  { title: "02. Swali la Kuanza", body: "Umefungua akaunti ya benki. Sasa unataka kununua hisa za CRDB. Unaanza wapi?\n\nJibu: Unahitaji broker — mtu wa kati kati yako na DSE." },
  { title: "03. Mchoro Mkuu", body: "Mchakato wa kununua hisa:\n\n1. Chagua broker\n2. Fungua akaunti ya broker\n3. Weka fedha kwenye akaunti\n4. Chagua hisa unayotaka\n5. Weka order (bei na kiasi)\n6. Order inakwenda DSE\n7. Biashara inafanyika\n8. Hisa zinaingia kwenye akaunti yako" },
  { title: "04. Maelezo Rahisi", body: "BROKER ni nani?\nBroker ni kampuni au mtu aliyeidhinishwa na CMSA kufanya biashara ya hisa kwa niaba yako.\n\nHatua za kuanza:\n\n1. CHAGUA BROKER\n   Kuna brokers kadhaa Tanzania: Orbit Securities, Vertex International, Core Securities, n.k.\n\n2. FUNGUA AKAUNTI\n   Unahitaji:\n   • Kitambulisho (NIDA)\n   • TIN\n   • Picha\n   • Fomu ya KYC\n\n3. WEKA FEDHA\n   Unaweka fedha kwenye akaunti yako ya broker.\n\n4. WEKA ORDER\n   Unachagua hisa, bei, na kiasi. Order inakwenda DSE.\n\n5. TEKELEZA\n   Kama kuna muuzaji kwa bei hiyo, biashara inafanyika." },
  { title: "05. Mfano wa Tanzania", body: "Mfano: Unataka kununua hisa 100 za CRDB.\n\nHatua:\n1. Unaingia kwenye akaunti yako ya broker\n2. Unaweka order: \"Nunua CRDB hisa 100 kwa TSh 2,600 kila moja\"\n3. Order inakwenda DSE\n4. Kama kuna muuzaji wa TSh 2,600, biashara inafanyika\n5. Hisa zinaingia kwenye akaunti yako\n6. Fedha zinatoka kwenye akaunti yako\n\nKumbuka: Unalipa commission ya broker — kawaida 1-2% ya thamani." },
  { title: "06. Jambo la Muhimu", list: [
    "Broker ni lazima — hauwezi kununua hisa moja kwa moja",
    "Unahitaji NIDA, TIN, na fomu ya KYC",
    "Order inaweza kuwa Limit Order au Market Order",
    "Commission ya broker ni 1-2% ya thamani",
    "Hisa zinaingia kwenye akaunti yako ya CDS"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kwa nini ni muhimu kuchagua broker mzuri?\n\nJibu: Broker mzuri:\n• Ana leseni halali kutoka CMSA\n• Ana commission nafuu\n• Ana huduma nzuri kwa wateja\n• Ana jukwaa la kisasa la biashara\n• Ana ushauri wa kitaalamu\n\nBroker mbaya anaweza kukugharimu fedha na muda." },
  { title: "08. Muhtasari wa Dakika 1", body: "Kununua hisa kunahitaji:\n\n1. Broker — aliyeidhinishwa na CMSA\n2. Akaunti — NIDA, TIN, KYC\n3. Fedha — kuweka kwenye akaunti\n4. Order — bei na kiasi\n5. Utekelezaji — DSE inafanya biashara\n\nCommission ya broker ni 1-2%. Hisa zinaingia kwenye akaunti yako ya CDS." },
  { title: "09. Hatua Inayofuata", body: "SOMO 8: Bei ya hisa hupanda na kushuka kwa nini?\n\nTutajifunza nini kinachoathiri bei ya hisa — ugavi na mahitaji, habari za kampuni, uchumi, na mambo mengine." }
];

const quiz = [
  { q: "Broker ni nani?", options: "(a) Benki   (b) Mtu wa kati aliyeidhinishwa kufanya biashara ya hisa   (c) Serikali", answer: "Jibu: (b) Broker ni mtu wa kati aliyeidhinishwa na CMSA kufanya biashara ya hisa kwa niaba yako." },
  { q: "Unahitaji nini kufungua akaunti ya broker?", options: "(a) NIDA, TIN, KYC   (b) Pesa nyingi   (c) Leseni", answer: "Jibu: (a) Unahitaji NIDA, TIN, picha, na fomu ya KYC — ili kuthibitisha utambulisho wako." },
  { q: "Commission ya broker ni kiasi gani?", options: "(a) 10%   (b) 1-2%   (c) 0%", answer: "Jibu: (b) Commission ya broker ni kawaida 1-2% ya thamani ya biashara." }
];

export default function Somo7() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 7: Hisa inanunuaje na kuuzwaje?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 7: Hisa inanunuaje na kuuzwaje?"
        lessonHref="/somo7"
        nextHref="/somo8"
        nextLabel="Somo la 8"
      />
    </main>
  );
}
