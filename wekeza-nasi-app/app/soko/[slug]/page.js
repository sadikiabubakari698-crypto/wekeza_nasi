import { getSokoBySlug } from "../../../lib/soko-engine";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";

export default async function SokoItem({ params }) {
  const { slug } = await params;
  const article = getSokoBySlug(slug);

  if (!article) return notFound();

  const pageStyle = { padding: "1.75rem", maxWidth: "700px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.7, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };
  const h2Style = { fontSize: "1.35rem", marginTop: "2rem", marginBottom: "0.75rem", color: "#1a1a1a", borderBottom: "2px solid #1e7b4c", paddingBottom: "0.4rem" };
  const disclaimerStyle = { background: "#fef8ee", borderLeft: "5px solid #d48d3b", padding: "1rem 1.25rem", borderRadius: "8px", marginTop: "2.5rem", fontSize: "0.9rem", color: "#1a1a1a" };
  const partBadgeStyle = { display: "inline-block", background: "#e3f0ea", color: "#1e7b4c", fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "999px", marginBottom: "0.75rem" };
  const navBoxStyle = { background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1.5rem", marginTop: "2.5rem" };
  const btnPrimaryStyle = { display: "inline-block", background: "#1e7b4c", color: "#ffffff", padding: "0.75rem 1.5rem", borderRadius: "var(--radius-pill)", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" };
  const btnSecondaryStyle = { display: "inline-block", background: "transparent", color: "#1e7b4c", padding: "0.75rem 1.5rem", borderRadius: "var(--radius-pill)", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1.5px solid #1e7b4c" };

  return (
    <main style={pageStyle}>
      <Breadcrumbs items={[
        { label: "Nyumbani", href: "/" },
        { label: "Soko", href: "/soko" },
        { label: article.title },
      ]} />

      {article.partNumber && article.totalParts && (
        <div style={partBadgeStyle}>
          Sehemu {article.partNumber} kati ya {article.totalParts}
        </div>
      )}

      <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", marginBottom: "0.5rem", letterSpacing: "0.05em", background: article.type === "case-study" ? "#1e7b4c" : "#e3f0ea", color: article.type === "case-study" ? "#ffffff" : "#1e7b4c" }}>
        {article.type === "case-study" ? "CASE STUDY" : "FRAMEWORK"}
      </span>

      <h1 style={{ fontSize: "1.85rem", marginTop: "0.25rem", color: "#1a1a1a" }}>{article.title}</h1>
      {article.subtitle && (
        <p style={{ fontSize: "1.05rem", fontStyle: "italic", color: "#555555", marginTop: "0.25rem" }}>{article.subtitle}</p>
      )}

      {article.sections?.map((section, i) => {
        // Callout: avoid (nyekundu)
        if (section.callout === "avoid") {
          return (
            <div key={i} style={{ background: "#fef2f2", borderLeft: "4px solid #dc2626", borderRadius: "var(--radius-md)", padding: "1.25rem 1.5rem", margin: "1.5rem 0" }}>
              <p style={{ margin: "0 0 0.75rem 0", fontWeight: 700, color: "#991b1b", fontSize: "1.05rem" }}>{section.title}</p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#7f1d1d" }}>
                {section.items?.map((item, j) => (
                  <li key={j} style={{ marginBottom: "0.5rem" }}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        // Callout: good (kijani)
        if (section.callout === "good") {
          return (
            <div key={i} style={{ background: "#f0fdf4", borderLeft: "4px solid #16a34a", borderRadius: "var(--radius-md)", padding: "1.25rem 1.5rem", margin: "1.5rem 0" }}>
              <p style={{ margin: "0 0 0.75rem 0", fontWeight: 700, color: "#166534", fontSize: "1.05rem" }}>{section.title}</p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#14532d" }}>
                {section.items?.map((item, j) => (
                  <li key={j} style={{ marginBottom: "0.5rem" }}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        // Kawaida
        return (
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
        );
      })}

      {/* NAVIGATION: Prev / Next / Mwisho */}
      <div style={navBoxStyle}>
        {article.nextSlug ? (
          <>
            <p style={{ margin: "0 0 1rem 0", color: "#1a1a1a", fontWeight: 600 }}>
              Unaendelea vizuri. Endelea na sehemu inayofuata.
            </p>
            <Link href={`/soko/${article.nextSlug}`} style={btnPrimaryStyle}>
              Endelea → Sehemu {article.partNumber + 1}
            </Link>
          </>
        ) : (
          <>
            <p style={{ margin: "0 0 0.5rem 0", color: "#1e7b4c", fontWeight: 700, fontSize: "1.1rem" }}>
              🎉 Umekamilisha somo hili!
            </p>
            <p style={{ margin: "0 0 1rem 0", color: "#555555", fontSize: "0.95rem" }}>
              Umejifunza kitu cha maana. Endelea na safari — kuna masomo mengine yanayokungoja.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              <Link href="/soko" style={btnPrimaryStyle}>Rudi Soko →</Link>
              <Link href="/academy" style={btnSecondaryStyle}>Endelea Academy</Link>
            </div>
          </>
        )}

        {article.prevSlug && (
          <p style={{ marginTop: "1rem", marginBottom: 0 }}>
            <Link href={`/soko/${article.prevSlug}`} style={{ color: "#1e7b4c", fontSize: "0.9rem", textDecoration: "none" }}>
              ← Rudi Sehemu {article.partNumber - 1}
            </Link>
          </p>
        )}
      </div>

      {article.disclaimer && (
        <div style={disclaimerStyle}>
          <strong>Kumbuka:</strong> {article.disclaimer}
        </div>
      )}

      <Footer />
    </main>
  );
}
