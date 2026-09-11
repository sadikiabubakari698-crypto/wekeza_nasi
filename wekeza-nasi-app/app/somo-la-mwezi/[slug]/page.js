import { getAllPlannedItems } from "../../../lib/content-engine";
import { notFound } from "next/navigation";

export default async function SomoLaMwezi({ params }) {
  const { slug } = await params;
  const items = getAllPlannedItems();
  const article = items.find((item) => item.slug === slug);

  if (!article) return notFound();

  const pageStyle = {
    padding: "2rem",
    maxWidth: "750px",
    margin: "0 auto",
    fontFamily: "sans-serif",
    lineHeight: 1.7,
    color: "#1a1a1a",
    background: "#ffffff",
    minHeight: "100vh"
  };

  const infoBoxStyle = {
    background: "#f3f7fb",
    borderRadius: "10px",
    padding: "1rem 1.25rem",
    margin: "1.5rem 0",
    color: "#1a1a1a"
  };

  const tableHeaderStyle = {
    padding: "0.6rem",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    color: "#1a1a1a"
  };

  const tableCellStyle = {
    padding: "0.6rem",
    borderBottom: "1px solid #eee",
    color: "#1a1a1a"
  };

  const disclaimerStyle = {
    background: "#fef8ee",
    borderLeft: "5px solid #d48d3b",
    padding: "1rem 1.25rem",
    borderRadius: "8px",
    marginTop: "2.5rem",
    fontSize: "0.9rem",
    color: "#1a1a1a"
  };

  return (
    <main style={pageStyle}>
      <a href="/" style={{ color: "#1e7b4c", fontWeight: 600 }}>← Rudi Nyumbani</a>
      <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "#1e7b4c", fontWeight: 600 }}>
        SOMO LA MWEZI — {article.month?.toUpperCase()}
      </p>
      <h1 style={{ fontSize: "2rem", marginTop: "0.25rem", color: "#1a1a1a" }}>{article.title}</h1>
      {article.subtitle && (
        <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555" }}>{article.subtitle}</p>
      )}

      {article.company && (
        <div style={infoBoxStyle}>
          <div><strong style={{ color: "#1a1a1a" }}>Sekta:</strong> <span style={{ color: "#1a1a1a" }}>{article.company.sector}</span></div>
          <div><strong style={{ color: "#1a1a1a" }}>Ticker:</strong> <span style={{ color: "#1a1a1a" }}>{article.company.ticker}</span></div>
          <div><strong style={{ color: "#1a1a1a" }}>Iliorodheshwa:</strong> <span style={{ color: "#1a1a1a" }}>{article.company.listed}</span></div>
        </div>
      )}

      <h2 style={{ marginTop: "2rem", color: "#1a1a1a" }}>Muhtasari wa Mtendaji</h2>
      <p style={{ color: "#1a1a1a" }}>{article.executiveSummary}</p>

      {article.sections?.map((section, i) => (
        <div key={i}>
          <h2 style={{ marginTop: "2rem", color: "#1a1a1a" }}>{i + 1}. {section.title}</h2>
          {section.content && (
            <div style={{ whiteSpace: "pre-line", color: "#1a1a1a" }}>{section.content}</div>
          )}

          {section.ratios && (
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem", color: "#1a1a1a" }}>
              <thead>
                <tr style={{ background: "#f3f7fb" }}>
                  <th style={tableHeaderStyle}>Uwiano</th>
                  <th style={tableHeaderStyle}>Kiwango</th>
                  <th style={tableHeaderStyle}>Maana</th>
                </tr>
              </thead>
              <tbody>
                {section.ratios.map((r, j) => (
                  <tr key={j}>
                    <td style={tableCellStyle}><strong>{r.name}</strong></td>
                    <td style={tableCellStyle}>{r.value}</td>
                    <td style={tableCellStyle}>{r.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {section.risks && (
            <ul style={{ marginTop: "0.5rem", color: "#1a1a1a" }}>
              {section.risks.map((r, j) => (
                <li key={j} style={{ marginBottom: "0.5rem", color: "#1a1a1a" }}>
                  <strong>{r.type}:</strong> {r.detail}
                </li>
              ))}
            </ul>
          )}

          {section.drivers && (
            <ul style={{ marginTop: "0.5rem", color: "#1a1a1a" }}>
              {section.drivers.map((d, j) => (
                <li key={j} style={{ marginBottom: "0.4rem", color: "#1a1a1a" }}>{d}</li>
              ))}
            </ul>
          )}

          {section.questions && (
            <ol style={{ marginTop: "0.5rem", color: "#1a1a1a" }}>
              {section.questions.map((q, j) => (
                <li key={j} style={{ marginBottom: "0.5rem", color: "#1a1a1a" }}>{q}</li>
              ))}
            </ol>
          )}

          {section.sources && (
            <ul style={{ marginTop: "0.5rem", color: "#1a1a1a" }}>
              {section.sources.map((s, j) => (
                <li key={j} style={{ marginBottom: "0.4rem", color: "#1a1a1a" }}>{s}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {article.disclaimer && (
        <div style={disclaimerStyle}>
          <strong>Kumbuka:</strong> {article.disclaimer}
        </div>
      )}

      <p style={{ marginTop: "2.5rem" }}>
        <a href="/" style={{ color: "#1e7b4c", fontWeight: 600 }}>← Rudi Nyumbani</a>
      </p>
    </main>
  );
}
