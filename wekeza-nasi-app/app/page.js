import { getTimelyContent, getPlannedContent } from "../lib/content-engine";

export default function Home() {
  const link = { display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem", background: "#f7f7f7", borderRadius: "10px", marginBottom: "1rem", color: "#1a1a1a", textDecoration: "none", fontWeight: "bold" };
  const lessons = [
    { href: "/somo1", title: "Somo 1: Hisa ni nini?", icon: "mbegu" },
    { href: "/somo2", title: "Somo 2: Kampuni kwa nini huuza hisa?", icon: "mbegu" },
    { href: "/somo3", title: "Somo 3: Nani ananunua hisa?", icon: "mbegu" },
    { href: "/somo4", title: "Somo 4: Soko la hisa ni nini?", icon: "mche" },
    { href: "/somo5", title: "Somo 5: Soko la hisa lipo chini ya nani?", icon: "mche" },
    { href: "/somo6", title: "Somo 6: DSE ni nini?", icon: "mche" },
    { href: "/somo7", title: "Somo 7: Hisa inanunuaje na kuuzwaje?", icon: "mche" },
    { href: "/somo8", title: "Somo 8: Bei ya hisa hupanda na kushuka kwa nini?", icon: "mti" },
    { href: "/somo9", title: "Somo 9: Mwekezaji anapataje faida?", icon: "mti" },
    { href: "/somo10", title: "Somo 10: Hatari ya uwekezaji ni nini?", icon: "mti" },
    { href: "/somo11", title: "Somo 11: Diversification", icon: "mti-mkubwa" },
    { href: "/somo12", title: "Somo 12: Gawio - Masharti na Taratibu", icon: "mti-mkubwa" },
    { href: "/somo13", title: "Somo 13: IPO ni nini?", icon: "mti-mkubwa" },
    { href: "/somo14", title: "Somo 14: Stock Split ni nini?", icon: "mti-mkubwa" },
    { href: "/somo15", title: "Somo 15: Soko la Tanzania linafanyaje kazi?", icon: "mti-mkubwa" },
    { href: "/somo16", title: "Somo 16: Kuanza kuchambua kampuni", icon: "taji" },
  ];

  const timely = getTimelyContent();
  const planned = getPlannedContent();

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <img src="/icons/chipukizi.svg" alt="" width="36" height="36" />
        <h1 style={{ margin: 0 }}>WEKEZA NASI</h1>
      </div>
      <p>Jenga maarifa. Jenga uwezo.</p>

      <div className="anza-hapa">
        <h2 style={{ marginTop: 0 }}>Mpya WEKEZA NASI?</h2>
        <p>Tuanze safari yetu hapa, hatua kwa hatua.</p>
        <a href="/somo1">Anza na Somo la 1: Hisa ni nini? &rarr;</a>
      </div>

      <h2 style={{ marginTop: "2rem" }}>Safari Yangu</h2>
      <a href="/academy" className="area-card">
        <h3>Academy</h3>
        <p style={{ margin: 0 }}>Jifunze uwekezaji hatua kwa hatua.</p>
      </a>
      <a href="/soko" className="area-card">
        <h3>Uchambuzi wa Soko</h3>
        <p style={{ margin: 0 }}>Nini kimetokea? Kwa nini? Ushahidi unasemaje?</p>
      </a>
      <a href="/kampuni" className="area-card">
        <h3>Uchambuzi wa Kampuni</h3>
        <p style={{ margin: 0 }}>Jifunze kampuni zinavyofanya kazi na kutengeneza fedha.</p>
      </a>
      <div className="area-card-soon">
        <h3>AI</h3>
        <p style={{ margin: 0 }}>Inakuja hivi karibuni.</p>
      </div>
      <div className="area-card-soon">
        <h3>Community</h3>
        <p style={{ margin: 0 }}>Inakuja hivi karibuni.</p>
      </div>

      {timely.length > 0 && (
        <div className="risk-box">
          <h3>Kinachoendelea Sasa</h3>
          {timely.map((item) => (
            <div key={item.id} style={{ marginBottom: "0.5rem" }}>
              <p style={{ fontWeight: "bold", margin: 0 }}>{item.title}</p>
              <a href={`/habari/${item.id}`}>Soma uchambuzi &rarr;</a>
            </div>
          ))}
        </div>
      )}

      {planned.length > 0 && (
        <div className="lesson-box">
          <h3>Mwezi Huu</h3>
          {planned.map((item) => (
            <div key={item.id} style={{ marginBottom: "0.5rem" }}>
              <p style={{ fontWeight: "bold", margin: 0 }}>{item.title}</p>
              <a href={item.link}>Fungua &rarr;</a>
            </div>
          ))}
        </div>
      )}

      <div className="lesson-box" style={{ fontStyle: "italic" }}>
        <h3>Fikiria Miaka Mitano Kutoka Sasa</h3>
        <p>
          Leo, huenda hujui hisa ni nini, au unaogopa kuuliza kwa hofu ya
          kuonekana &quot;hujui.&quot; Hilo ni sawa kabisa, kila mwekezaji
          mkubwa aliwahi kuwa hapo ulipo.
        </p>
        <p>
          Fikiria: baada ya kujifunza hatua kwa hatua, kuelewa jinsi soko
          linavyofanya kazi, na kuanza kuwekeza kidogo kidogo kwa uelewa,
          si kwa bahati, unajikuta na uwezo wa kufanya maamuzi ya kifedha
          kwa kujiamini. Si kwa sababu ulikuwa na fedha nyingi za kuanzia,
          bali kwa sababu ulianza.
        </p>
        <p><strong>Safari haianzi na fedha nyingi. Inaanza na hatua moja.</strong></p>
      </div>

      <h2 style={{ marginTop: "2rem" }}>Rasilimali</h2>
      <a href="/madalali" style={link}>Jinsi ya Kuchagua Broker</a>
      <a href="/tahadhari" style={link}>Tahadhari za Utapeli wa Uwekezaji</a>
      <a href="/kuhusu" style={link}>Kuhusu Sisi</a>
    </main>
  );
}
