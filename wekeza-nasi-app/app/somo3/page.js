import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa nani hasa ananunua hisa sokoni, na jinsi wawekezaji mbalimbali wanavyoshiriki kwenye soko la hisa." },
  { title: "02. Swali la Kuanza", body: "Fikiria soko la hisa. Nani hasa ananunua? Je, ni matajiri tu? Au ni kila mtu? Na kwa nini wanunue?" },
  { title: "03. Mchoro Mkuu", body: "Wanunuzi wa hisa wanaweza kugawanywa katika makundi manne:\n\n1. Wawekezaji binafsi (watu) — wanaonunua kwa akaunti zao.\n2. Taasisi za kifedha — benki, pension funds, bima.\n3. Makampuni — yanayowekeza kwa akaunti zao.\n4. Serikali — kupitia taasisi zake." },
  { title: "04. Maelezo Rahisi", body: "WEWE (Mwekezaji Binafsi):\nWatu wa kawaida — kama wewe — wanaweza kununua hisa. Unafungua akaunti kwa broker, kisha unaweza kununua hisa za kampuni yoyote iliyoorodheshwa DSE.\n\nTAASISI ZA KIFEDHA:\nHizi ni taasisi zinazowekeza fedha za watu wengi. Mfano: NSSF (pension fund), benki, kampuni za bima. Zinawekeza fedha nyingi kwenye hisa.\n\nMAKAMPUNI:\nKampuni zinaweza kuwekeza kwenye hisa za kampuni nyingine. Hii inaitwa 'cross-holding.'\n\nSERIKALI:\nSerikali inaweza kuwa na hisa kwenye makampuni — mfano, kupitia Treasury Registrar." },
  { title: "05. Mfano wa Tanzania", body: "Kwenye DSE, wawekezaji wakuu ni:\n\n• Watu binafsi — wawekezaji wadogo na wakubwa\n• NSSF, PPF, LAPF — pension funds\n• Benki — CRDB, NMB (kupitia akaunti zao)\n• Makampuni — yanayowekeza kwa muda mrefu\n• Wawekezaji wa kigeni — kutoka nje ya Tanzania\n\nKila mmoja ana mchango wake kwenye soko." },
  { title: "06. Jambo la Muhimu", list: [
    "Hisa zinaweza kununuliwa na MTU YEYOTE mwenye akaunti ya benki na kiasi cha fedha",
    "Haijalishi una kiasi gani — unaweza kuanza na hisa chache",
    "Wawekezaji wa kitaasisi wanawekeza fedha nyingi, lakini wawekezaji binafsi ni wengi",
    "Broker ndiye mtu wa kati kati yako na soko",
    "Kila mnunuzi ana lengo lake — mapato ya gawio, ukuaji wa bei, au wote wawili"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kama wewe ni mwanafunzi, unaweza kuanza kuwekeza kwenye hisa?\n\nJibu: Ndiyo. Unaweza kuanza na kiasi kidogo — hata TSh 10,000. Brokers wengi wa DSE wanaruhusu wawekezaji kuanza na kiasi kidogo. Muhimu ni kujifunza kwanza, kisha kuanza." },
  { title: "08. Muhtasari wa Dakika 1", body: "Wanunuzi wa hisa ni:\n\n• Watu binafsi (kama wewe)\n• Taasisi za kifedha (NSSF, benki, bima)\n• Makampuni mengine\n• Serikali\n\nKila mtu mwenye akaunti na kiasi cha fedha anaweza kuwekeza. Broker ni mtu wa kati. Wawekezaji wana malengo tofauti." },
  { title: "09. Hatua Inayofuata", body: "SOMO 4: Soko la hisa ni nini?\n\nTutajifunza mahali ambapo hisa zinauzwa na kununuliwa — soko la hisa lenyewe. Tutajifunza jinsi DSE inavyofanya kazi, na kwa nini soko ni muhimu kwa uchumi." }
];

const quiz = [
  { q: "Nani anaweza kununua hisa?", options: "(a) Matajiri tu   (b) Yeyote mwenye akaunti ya benki   (c) Serikali pekee", answer: "Jibu: (b) Yeyote mwenye akaunti ya benki na kiasi cha fedha anaweza kuwekeza." },
  { q: "NSSF ni mfano wa nani?", options: "(a) Mfuko wa pensheni   (b) Benki   (c) Kampuni ya simu", answer: "Jibu: (a) NSSF ni mfuko wa pensheni — taasisi ya kifedha inayowekeza fedha za wanachama." }
];

export default function Somo3() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 3: Nani ananunua hisa?</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo 3: Nani ananunua hisa?"
        lessonHref="/somo3"
        nextHref="/somo4"
        nextLabel="Somo la 4"
      />
    </main>
  );
}
