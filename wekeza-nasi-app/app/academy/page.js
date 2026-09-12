import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Academy — Masomo 20 ya Uwekezaji",
  description:
    "Masomo 20 ya uwekezaji kwa Kiswahili — kuanzia Hisa ni nini hadi Kusoma Ripoti za Fedha. Jifunze hatua kwa hatua.",
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
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <Breadcrumbs items={[
        { label: "Nyumbani", href: "/" },
        { label: "Academy" },
      ]} />

      <h1 style={{ marginBottom: "0.25rem", color: "#1a1a1a" }}>Academy</h1>
      <p style={{ color: "#555555", marginTop: 0 }}>Jifunze uwekezaji hatua kwa hatua — masomo 20.</p>

      <div style={{ marginTop: "1.5rem" }}>
        {lessons.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              display: "block",
              padding: "1rem 1.25rem",
              background: "#ffffff",
              border: "1px solid #e9edf2",
              borderRadius: "var(--radius-md)",
              marginBottom: "0.6rem",
              color: "#1a1a1a",
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {l.title}
          </a>
        ))}
      </div>

      <Footer />
    </main>
  );
}
