import { getSokoBySlug } from "../../../lib/soko-engine";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default async function SokoItem({ params }) {
  const { slug } = await params;
  const article = getSokoBySlug(slug);

  if (!article) return notFound();

  const pageStyle = { padding: "1.75rem", maxWidth: "700px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.7, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };
  const h2Style = { fontSize: "1.4rem", marginTop: "2rem", marginBottom: "0.75rem", color: "#1a1a1a", borderBottom: "2px solid #1e7b4c", paddingBottom: "0.4rem" };
  const disclaimerStyle = { background: "#fef8ee", borderLeft: "5px solid #d48d3b", padding: "1rem 1.25rem", borderRadius: "8px", marginTop: "2.5rem", fontSize: "0.9rem", color: "#1a1a1a" };

  const badgeStyle = {
    display: "inline-block",
    fontSize: "0.7rem",
    fontWeight: 700,
    padding: "0.15rem 0.6rem",
    borderRadius: "999px",
    marginBottom: "0.5rem",
    letterSpacing: "0.05em",
  };

  return (
    <main style={pageStyle}>
      <Breadcrumbs items={[
        { label: "Nyumbani", href: "/" },
        { label: "Soko", href: "/soko" },
        { label: article.title },
      ]} />

      <span style={{
        ...badgeStyle,
        background: article.category === "timely" ? "#d48d3b" : article.type === "case-study" ? "#1e7b4c" : "#e3f0ea",
        color: article.category === "timely" ? "#ffffff" : article.type === "case-study" ? "#ffffff" : "#1e7b4c",
      }}>
        {article.category === "timely" ? "TIMELY" : article.type === "case-study" ? "CASE STUDY" : "FRAMEWORK"}
      </span>

      <h1 style={{ fontSize: "1.85rem", marginTop: "0.25rem", color: "#1a1a1a" }}>{article.title}</h1>
      {article.excerpt && (
        <p style={{ fontSize: "1.05rem", fontStyle: "italic", color: "#555555" }}>{article.excerpt}</p>
      )}

      {article.sections?.map((section, i) => (
        <div key={i}>
          <h2 style={h2Style}>{section.title}</h2>
          {section.content && (
            <div style={{ whiteSpace: "pre-line", color: "#1a1a1a" }}>{section.content}</div>
          )}

          {section.quiz && (
            <div style={{ marginTop: "1rem" }}>
              {section.quiz.map((q, j) => (
                <div key={j} style={{ background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", marginBottom: "0.75rem" }}>
                  <p style={{ margin: "0 0 0.5rem 0", fontWeight: 600, color: "#1a1a1a" }}>{q.q}</p>
                  <p style={{ margin: "0 0 0.5rem 0", color: "#555555", fontSize: "0.9rem" }}>{q.options}</p>
                  <p style={{ margin: 0, color: "#1e7b4c", fontWeight: 600, fontSize: "0.9rem" }}>{q.answer}</p>
                </div>
              ))}
            </div>
          )}

          {section.questions && (
            <ol style={{ marginTop: "0.5rem", color: "#1a1a1a", paddingLeft: "1.5rem" }}>
              {section.questions.map((q, j) => (
                <li key={j} style={{ marginBottom: "0.5rem" }}>{q}</li>
              ))}
            </ol>
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
