export const metadata = {
  title: "Academy — Masomo 20 ya Uwekezaji",
  description:
    "Masomo 20 ya uwekezaji kwa Kiswahili — kuanzia Hisa ni nini hadi Kusoma Ripoti za Fedha. Jifunze hatua kwa hatua, bure.",
};

export default function Academy() {
  const lessons = [
    { href: "/somo1", title: "Somo 1: Hisa ni nini?" },
    { href: "/somo2", title: "Somo 2: Kampuni kwa nini huuza hisa?" },
    { href: "/somo3", title: "Somo 3: Nani ananunua hisa?" },
    { href: "/somo4", title: "Somo 4: Soko la hisa ni nini?" },
    { href: "/somo5", title: "Somo 5: Soko la hisa lipo chini ya nani?" },
    { href: "/somo6", title: "Somo 6: DSE ni nini?" },
    { href: "/somo7", title: "Somo 7: Hisa inanunuaje na kuuzwaje?" },
    { href: "/somo8", title: "Somo 8: Bei ya hisa hupanda na kushuka kwa nini?" },
    { href: "/somo9", title: "Somo 9: Mwekezaji anapataje faida?" },
    { href: "/somo10", title: "Somo 10: Hatari ya uwekezaji ni nini?" },
    { href: "/somo11", title: "Somo 11: Diversification" },
    { href: "/somo12", title: "Somo 12: Gawio - Masharti na Taratibu" },
    { href: "/somo13", title: "Somo 13: IPO ni nini?" },
    { href: "/somo14", title: "Somo 14: Stock Split ni nini?" },
    { href: "/somo15", title: "Somo 15: Soko la Tanzania linafanyaje kazi?" },
    { href: "/somo16", title: "Somo 16: Kuanza kuchambua kampuni" },
    { href: "/somo17", title: "Somo 17: Jinsi ya Kusoma Data za DSE" },
    { href: "/somo18", title: "Somo 18: Jinsi ya Kusoma Data za DSE — Sehemu ya 2" },
    { href: "/somo19", title: "Somo 19: Kusoma Mwenendo wa Bei kwa Siku Nyingi" },
    { href: "/somo20", title: "Somo 20: Kusoma Ripoti za Fedha (Financial Statements)" },
  ];

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "0.25rem", color: "#1a1a1a" }}>WEKEZA NASI</h1>
      <h2 style={{ marginTop: 0, color: "#1a1a1a" }}>Academy</h2>
      <p style={{ color: "#555" }}>Jifunze uwekezaji hatua kwa hatua — masomo 20.</p>

      <div style={{ marginTop: "1.5rem" }}>
        {lessons.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              display: "block",
              padding: "1rem 1.25rem",
              background: "#f7f7f7",
              borderRadius: "10px",
              marginBottom: "0.75rem",
              color: "#1a1a1a",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {l.title}
          </a>
        ))}
      </div>

      <p style={{ marginTop: "2rem" }}>
        <a href="/" style={{ color: "#1a1a1a" }}>← Rudi Nyumbani</a>
      </p>
    </main>
  );
}
