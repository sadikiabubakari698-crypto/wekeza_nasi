export default function Home() {
  const link = { display: "block", padding: "1rem", background: "#f7f7f7", borderRadius: "10px", marginBottom: "1rem", color: "#1a1a1a", textDecoration: "none", fontWeight: "bold" };
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Academy</h2>
      <p>Chagua somo la kuanza:</p>

      <a href="/somo1" style={link}>Somo 1: Hisa ni nini?</a>
      <a href="/somo2" style={link}>Somo 2: Kampuni kwa nini huuza hisa?</a>
      <a href="/somo3" style={link}>Somo 3: Nani ananunua hisa?</a>
      <a href="/somo4" style={link}>Somo 4: Soko la hisa ni nini?</a>
    </main>
  );
}
