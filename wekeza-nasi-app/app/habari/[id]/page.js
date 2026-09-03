import contentData from "../../../content/content.json";

export default function Habari({ params }) {
  const item = contentData.find((c) => c.id === params.id);

  if (!item) {
    return (
      <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
        <p>Habari hii haikupatikana.</p>
        <p><a href="/soko">&larr; Rudi Soko</a></p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <div className="risk-box">
        <h2>&#128680; {item.title}</h2>
        <p>{item.body}</p>
        {item.link && <p><a href={item.link}>Ona uchambuzi kamili wa kampuni &rarr;</a></p>}
      </div>
      <p><a href="/soko">&larr; Rudi Soko</a></p>
    </main>
  );
}
