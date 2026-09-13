import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa gawio ni nini, masharti yake, na jinsi ya kulipokea kutoka kwa kampuni uliyowekeza." },
  { title: "02. Swali la Kuanza", body: "Kama kampuni imetangaza itatoa gawio, unadhani utahitaji nini ili uweze kulipokea?\n\nJibu: Unahitaji kuwa mwanahisa KABLA ya tarehe maalum (Cum-Dividend), na uwe na taarifa sahihi za KYC na TIN." },
  { title: "03. Mchoro Mkuu", body: "Mchakato wa gawio una hatua 5:\n\n1. TANGAZO — Kampuni yatangaza gawio\n2. CUM-DIVIDEND — Siku ya mwisho ya kununua\n3. EX-DIVIDEND — Baada ya hapa, hupati gawio hilo\n4. RECORD DATE — Orodha ya wanaostahili inafungwa\n5. TAREHE YA MALIPO — Pesa zinaingia" },
  { title: "04. Maelezo Rahisi", body: "GAWIO ni nini?\nSehemu ya faida ya kampuni inayolipwa kwa wanahisa.\n\nTARATIBU:\n\n1. TANGAZO\nKampuni yatangaza itatoa gawio la kiasi gani na lini.\n\n2. CUM-DIVIDEND\nHii ni siku ya mwisho ya kununua hisa ili ustahili gawio.\n\n3. EX-DIVIDEND\nBaada ya siku hii, unakinunua hisa BILA gawio.\n\n4. RECORD DATE\nKampuni inaangalia orodha ya wanahisa wanaostahili gawio.\n\n5. TAREHE YA MALIPO\nPesa zinaingia kwenye akaunti yako.\n\nKODI:\nGawio la makampuni ya DSE linatozwa kodi ya zuio ya 5% (badala ya 10% ya kawaida)." },
  { title: "05. Mfano wa Tanzania", body: "Mfano: CRDB ilitangaza gawio la TSh 42 kwa hisa mwaka 2025.\n\nKama unamiliki hisa 1,000:\nGawio lako = 1,000 × 42 = TSh 42,000\nKodi ya zuio (5%) = TSh 2,100\nUnalipwa = TSh 39,900\n\nKama hukukamilisha KYC, gawio lako linabaki kwenye akaunti maalum. Unaweza kulidai baadaye.\n\nHatari: Kama hujulikani kwa miaka 12, hisa zako zinaweza kuuzwa na fedha kuhamishiwa Serikalini." },
  { title: "06. Jambo la Muhimu", list: [
    "Gawio = sehemu ya faida inayolipwa kwa wanahisa",
    "Lazima uwe mwanahisa kabla ya Cum-Dividend",
    "Kodi ya zuio kwa DSE ni 5% (badala ya 10%)",
    "Jaza KYC na uwe na TIN ili kupokea gawio",
    "Gawio halilipwi kwenye akaunti ya CDS — unahitaji benki au hundi"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kwa nini serikali imepunguza kodi ya gawio kwa DSE (5%) badala ya kiwango cha kawaida (10%)?\n\nJibu: Ili kuhamasisha uwekezaji kupitia soko la hisa. Kodi ndogo inavutia wawekezaji zaidi, na hivyo kukuza soko la hisa Tanzania." },
  { title: "08. Muhtasari wa Dakika 1", body: "Gawio ni sehemu ya faida ya kampuni inayolipwa kwa wanahisa.\n\nMchakato: Tangazo → Cum-Dividend → Ex-Dividend → Record Date → Malipo.\n\nKodi: 5% kwa DSE.\n\nMuhimu: Jaza KYC, uwe na TIN, na nunua hisa kabla ya Cum-Dividend." },
  { title: "09. Hatua Inayofuata", body: "SOMO 13: IPO ni nini?\n\nTutajifunza IPO (Initial Public Offering) — mara ya kwanza kampuni kuuza hisa kwa umma. Tutajifunza jinsi IPO inafanyika, na jinsi mwekezaji anaweza kushiriki." }
];

const quiz = [
  { q: "Ukinunua hisa siku ya Ex-Dividend, je utapata gawio linalofuata?", options: "(a) Ndiyo   (b) Hapana   (c) Nusu tu", answer: "Jibu: (b) Hapana. Ex-Dividend inamaanisha umechelewa — hupati gawio hilo." },
  { q: "Kodi ya zuio kwenye gawio la makampuni ya DSE ni asilimia ngapi?", options: "(a) 10%   (b) 5%   (c) 20%", answer: "Jibu: (b) 5% — hii ni motisha ya serikali kuhamasisha uwekezaji kupitia soko la hisa." },
  { q: "Unahitaji nini ili kupokea gawio?", options: "(a) KYC, TIN, na hisa kabla ya Cum-Dividend   (b) Pesa nyingi   (c) Broker pekee", answer: "Jibu: (a) Unahitaji KYC iliyojazwa, TIN kwa kodi, na kununua hisa kabla ya Cum-Dividend." }
];

export default function Somo12() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 12: Gawio — Masharti na Taratibu</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 12: Gawio — Masharti na Taratibu"
        lessonHref="/somo12"
        nextHref="/somo13"
        nextLabel="Somo la 13"
      />
    </main>
  );
}
