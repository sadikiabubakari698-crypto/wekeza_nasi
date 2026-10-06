// PLACEMENT TEST — WEKEZA NASI
export const PROGRESS_KEY = "wekeza_progress";
export const FINAL_START_LESSON = 16;

export const PLACEMENT_STAGES = [
  {
    firstLesson: 1,
    questions: [
      { q: "Ukinunua hisa ya kampuni, unakuwa nani kwa kampuni hiyo?", options: ["Mkopeshaji wa kampuni", "Mmiliki wa sehemu ndogo ya kampuni", "Mfanyakazi wa kampuni"], answer: 1 },
      { q: "Kwa nini kampuni huuza hisa kwa umma?", options: ["Kuwaondoa wateja", "Kuepuka kulipa wafanyakazi", "Kupata mtaji wa kukuza biashara"], answer: 2 },
      { q: "Soko la hisa ni nini?", options: ["Mahali ambapo hisa zinanunuliwa na kuuzwa kwa utaratibu", "Benki inayotoa mikopo", "Duka la bidhaa za kampuni"], answer: 0 },
    ],
  },
  {
    firstLesson: 6,
    questions: [
      { q: "Bei ya hisa huelekea kupanda pale ambapo:", options: ["Hakuna anayetaka kununua", "Kampuni imefungwa", "Wanunuzi ni wengi kuliko wauzaji"], answer: 2 },
      { q: "Mwekezaji anaweza kupataje faida kwenye hisa?", options: ["Kwa gawio na kwa bei kupanda", "Kwa kuhifadhi tu bila kitu kingine", "Kwa kulipa ada ya mwaka kwa kampuni"], answer: 0 },
      { q: "Kauli ipi ni sahihi kuhusu hatari?", options: ["Hisa za DSE hazina hatari", "Hisa zina hatari, bei inaweza kushuka na ukapoteza sehemu ya fedha", "Hatari ipo kwa wanaonunua nyingi tu"], answer: 1 },
    ],
  },
  {
    firstLesson: 11,
    questions: [
      { q: "Diversification ni nini?", options: ["Kuweka fedha zote kwenye kampuni moja", "Kusambaza uwekezaji kwenye vitu tofauti kupunguza hatari", "Kuuza hisa zote siku moja"], answer: 1 },
      { q: "IPO ni nini?", options: ["Mara ya kwanza kampuni inauza hisa zake kwa umma", "Gawio la mwaka", "Ripoti ya fedha"], answer: 0 },
      { q: "Kampuni ikifanya stock split, nini hutokea?", options: ["Thamani ya umiliki wako inaongezeka mara mbili mara moja", "Unapoteza nusu ya hisa", "Idadi ya hisa zako inaongezeka, bei ya hisa moja inapungua, thamani ya jumla haibadiliki kwa split yenyewe"], answer: 2 },
    ],
  },
];

// Fungua masomo 1 hadi (startLesson - 1) kwa kuandika kwenye wekeza_progress
export function savePlacementProgress(startLesson) {
  if (typeof window === "undefined" || startLesson <= 1) return false;
  try {
    let current = [];
    try {
      const parsed = JSON.parse(window.localStorage.getItem(PROGRESS_KEY));
      if (Array.isArray(parsed)) current = parsed;
    } catch (e) {}
    const set = new Set(current);
    for (let i = 1; i < startLesson; i++) set.add("somo" + i);
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(Array.from(set)));
    return true;
  } catch (e) {
    return false;
  }
}
