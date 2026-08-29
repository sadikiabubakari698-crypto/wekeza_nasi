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
  ];
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <img src="/icons/chipukizi.svg" alt="" width="36" height="36" />
        <h1 style={{ margin: 0 }}>WEKEZA NASI</h1>
      </div>
      <h2>Academy</h2>
      <p>Chagua somo la kuanza:</p>

      {lessons.map((l) => (
        <a key={l.href} href={l.href} style={link}>
          <img src={`/icons/${l.icon}.svg`} alt="" width="28" height="28" />
          <span>{l.title}</span>
        </a>
      ))}

      <h2 style={{ marginTop: "2rem" }}>Rasilimali</h2>
      <a href="/madalali" style={link}>Madalali Walioidhinishwa</a>
    </main>
  );
}
