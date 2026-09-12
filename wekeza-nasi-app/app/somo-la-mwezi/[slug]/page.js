import { getAllPlannedItems } from "../../../lib/content-engine";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default async function SomoLaMwezi({ params }) {
  const { slug } = await params;
  const items = getAllPlannedItems();
  const article = items.find((item) => item.slug === slug);

  if (!article) return notFound();

  const pageStyle = { padding: "1.75rem", maxWidth: "750px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.7, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };
  const h2Style = { fontSize: "1.4rem", marginTop: "2rem", marginBottom: "0.75rem", color: "#1a1a1a", borderBottom: "2px solid #1e7b4c", paddingBottom: "0.4rem" };
  const infoBoxStyle = { background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", margin: "1.5rem 0", color: "#1a1a1a" };
  const tableHeaderStyle = { padding: "0.6rem", textAlign: "left", borderBottom: "1px solid #ddd", color: "#1a1a1a", background: "#f3f7fb" };
  const tableCellStyle = { padding: "0.6rem", borderBottom: "1px solid #eee", color: "#1a1a1a" };
  const disclaimerStyle = { background: "#fef8ee", borderLeft: "5px solid #d48d3b", padding: "1rem 1.25rem", borderRadius: "8px", marginTop: "2.5rem", fontSize: "0.9rem", color: "#1a1a1a" };

  return (
    <main style={pageStyle}>
      <Breadcrumbs items={[
        { label: "Nyumbani", href: "/" },
        { label: "Somo (Mwezi)", href: "/somo-la-mwezi/crdb-2026-09" },
        { label: article.title },
      ]} />

      <p style={{ marginTop: "0", fontSize: "0.85rem", color: "#1e7b4c", fontWeight: 600 }}>
        SOMO (MWEZI) — {article.month?.toUpperCase()}
      </p>
      <h1 style={{ fontSize: "2rem", marginTop: "0.25rem", color: "#1a1a1a" }}>{article.title}</h1>
      {article.subtitle && (
        <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555555" }}>{article.subtitle}</p>
      )}

      {article.company && (
        <div style={infoBoxStyle}>
          <div><strong>Sekta:</strong> {article.company.sector}</div>
          <div><strong>Ticker:</strong> {article.company.ticker}</div>
          <div><strong>Iliorodheshwa:</strong> {article.company.listed}</div>
        </div>
      )}

      <h2 style={h2Style}>Muhtasari wa Mtendaji</h2>
      <p style={{ color: "#1a1a1a" }}>{article.executiveSummary}</p>

      {article.sections?.map((section, i) => (
        <div key={i}>
          <h2 style={h2Style}>{i + 1}. {section.title}</h2>
          {section.content && (
            <div style={{ whiteSpace: "pre-line", color: "#1a1a1a" }}>{section.content}</div>
          )}

          {section.ratios && (
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem", color: "#1a1a1a" }}>
              <thead>
                <tr>
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
            <ul style={{ marginTop: "0.5rem", color: "#1a1a1a", paddingLeft: "1.5rem" }}>
              {section.risks.map((r, j) => (
                <li key={j} style={{ marginBottom: "0.5rem" }}>
                  <strong>{r.type}:</strong> {r.detail}
                </li>
              ))}
            </ul>
          )}

          {section.drivers && (
            <ul style={{ marginTop: "0.5rem", color: "#1a1a1a", paddingLeft: "1.5rem" }}>
              {section.drivers.map((d, j) => (
                <li key={j} style={{ marginBottom: "0.4rem" }}>{d}</li>
              ))}
            </ul>
          )}

          {section.questions && (
            <ol style={{ marginTop: "0.5rem", color: "#1a1a1a", paddingLeft: "1.5rem" }}>
              {section.questions.map((q, j) => (
                <li key={j} style={{ marginBottom: "0.5rem" }}>{q}</li>
              ))}
            </ol>
          )}

          {section.sources && (
            <ul style={{ marginTop: "0.5rem", color: "#1a1a1a", paddingLeft: "1.5rem" }}>
              {section.sources.map((s, j) => (
                <li key={j} style={{ marginBottom: "0.4rem" }}>{s}</li>
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
    </main>
  );
}
