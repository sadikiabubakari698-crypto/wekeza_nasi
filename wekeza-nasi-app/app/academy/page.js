export default function Academy() {
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
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Academy</h2>
      <p>Jifunze uwekezaji hatua kwa hatua, kutoka msingi.</p>
      {lessons.map((l) => (
        <a key={l.href} href={l.href} style={link}>
          <img src={`/icons/${l.icon}.svg`} alt="" width="28" height="28" />
          <span>{l.title}</span>
        </a>
      ))}
      <p><a href="/">&larr; Rudi Nyumbani</a></p>
    </main>
  );
}
