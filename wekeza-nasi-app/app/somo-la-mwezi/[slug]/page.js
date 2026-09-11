import { getAllPlannedItems } from "../../../lib/content-engine";
import { notFound } from "next/navigation";

export default function SomoLaMwezi({ params }) {
  const items = getAllPlannedItems();
  const article = items.find((item) => item.slug === params.slug);

  if (!article) return notFound();

  return (
    <main style={{ padding: "2rem", maxWidth: "750px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.7 }}>
      <a href="/" style={{ color: "#1e7b4c", fontWeight: 600 }}>← Rudi Nyumbani</a>

      <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "#1e7b4c", fontWeight: 600, letterSpacing: "0.05em" }}>
        SOMO LA MWEZI — {article.month?.toUpperCase()}
      </p>
      <h1 style={{ fontSize: "2rem", marginTop: "0.25rem", marginBottom: "0.25rem" }}>{article.title}</h1>
      {article.subtitle && (
        <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#444", marginTop: 0 }}>{article.subtitle}</p>
      )}

      {article.company && (
        <div style={{ background: "#f3f7fb", borderRadius: "10px", padding: "1rem 1.25rem", margin: "1.5rem 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
          <div><strong>Sekta:</strong> {article.company.sector}</div>
          <div><strong>Ticker:</strong> {article.company.ticker}</div>
          <div><strong>Iliorodheshwa:</strong> {article.company.listed}</div>
          <div><strong>Matawi:</strong> {article.company.branches || article.company.brands || "—"}</div>
        </div>
      )}

      <h2 style={{ marginTop: "2rem" }}>Muhtasari wa Mtendaji</h2>
      <p>{article.executiveSummary}</p>

      {article.sections?.map((section, i) => (
        <div key={i}>
          <h2 style={{ marginTop: "2rem" }}>{i + 1}. {section.title}</h2>

          {section.content && (
            <div style={{ whiteSpace: "pre-line" }}>{section.content}</div>
          )}

          {section.ratios && (
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
              <thead>
                <tr style={{ background: "#f3f7fb" }}>
                  <th style={{ padding: "0.6rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Uwiano</th>
                  <th style={{ padding: "0.6rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Kiwango</th>
                  <th style={{ padding: "0.6rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Maana</th>
                </tr>
              </thead>
              <tbody>
                {section.ratios.map((r, j) => (
                  <tr key={j}>
                    <td style={{ padding: "0.6rem", borderBottom: "1px solid #eee" }}><strong>{r.name}</strong></td>
                    <td style={{ padding: "0.6rem", borderBottom: "1px solid #eee" }}>{r.value}</td>
                    <td style={{ padding: "0.6rem", borderBottom: "1px solid #eee" }}>{r.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {section.risks && (
            <ul style={{ marginTop: "0.5rem" }}>
              {section.risks.map((r, j) => (
                <li key={j} style={{ marginBottom: "0.5rem" }}>
                  <strong>{r.type}:</strong> {r.detail}
                </li>
              ))}
            </ul>
          )}

          {section.drivers && (
            <ul style={{ marginTop: "0.5rem" }}>
              {section.drivers.map((d, j) => <li key={j} style={{ marginBottom: "0.4rem" }}>{d}</li>)}
            </ul>
          )}

          {section.questions && (
            <ol style={{ marginTop: "0.5rem" }}>
              {section.questions.map((q, j) => <li key={j} style={{ marginBottom: "0.5rem" }}>{q}</li>)}
            </ol>
          )}

          {section.sources && (
            <ul style={{ marginTop: "0.5rem" }}>
              {section.sources.map((s, j) => <li key={j} style={{ marginBottom: "0.4rem" }}>{s}</li>)}
            </ul>
          )}
        </div>
      ))}

      {article.disclaimer && (
        <div style={{ background: "#fef8ee", borderLeft: "5px solid #d48d3b", padding: "1rem 1.25rem", borderRadius: "8px", marginTop: "2.5rem", fontSize: "0.9rem" }}>
          <strong>Kumbuka:</strong> {article.disclaimer}
        </div>
      )}

      <p style={{ marginTop: "2.5rem" }}>
        <a href="/" style={{ color: "#1e7b4c", fontWeight: 600 }}>← Rudi Nyumbani</a>
      </p>
    </main>
  );
}
