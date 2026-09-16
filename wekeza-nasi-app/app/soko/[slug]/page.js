import { getSokoBySlug, getAllSokoItems } from "../../../lib/soko-engine";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import TableOfContents from "../../../components/TableOfContents";
import ShareButtons from "../../../components/ShareButtons";
import ArticleActions from "../../../components/ArticleActions";
import RelatedArticles from "../../../components/RelatedArticles";

export default async function SokoItem({ params }) {
  const { slug } = await params;
  const article = getSokoBySlug(slug);

  if (!article) return notFound();

  const pageStyle = { padding: "1.75rem", maxWidth: "700px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.7, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };
  const h2Style = { fontSize: "1.35rem", marginTop: "2rem", marginBottom: "0.75rem", color: "#1a1a1a", borderBottom: "2px solid #1e7b4c", paddingBottom: "0.4rem", scrollMarginTop: "80px" };
  const disclaimerStyle = { background: "#fef8ee", borderLeft: "5px solid #d48d3b", padding: "1rem 1.25rem", borderRadius: "8px", marginTop: "2.5rem", fontSize: "0.9rem", color: "#1a1a1a" };
  const partBadgeStyle = { display: "inline-block", background: "#e3f0ea", color: "#1e7b4c", fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "999px", marginBottom: "0.75rem" };
  const navBoxStyle = { background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1.5rem", marginTop: "2.5rem" };
  const btnPrimaryStyle = { display: "inline-block", background: "#1e7b4c", color: "#ffffff", padding: "0.75rem 1.5rem", borderRadius: "var(--radius-pill)", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" };
  const btnSecondaryStyle = { display: "inline-block", background: "transparent", color: "#1e7b4c", padding: "0.75rem 1.5rem", borderRadius: "var(--radius-pill)", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1.5px solid #1e7b4c" };

  const audioText = [
    article.title,
    article.subtitle || article.excerpt || "",
    ...(article.sections || []).map((s) => {
      let text = s.title + ". ";
      if (s.content) text += s.content + " ";
      if (s.items) text += s.items.join(". ") + ". ";
      if (s.quiz) text += s.quiz.map((q) => `${q.q} ${q.answer}`).join(" ") + " ";
      if (s.questions) text += s.questions.join(" ") + " ";
      return text;
    }),
  ].join("\n\n");

  const tocItems = (article.sections || []).map((s, i) => ({ id: `sec-${i}`, title: s.title }));

  const allItems = getAllSokoItems();
  const related = allItems
    .filter((item) => item.slug !== article.slug && (item.partNumber === 1 || !item.partNumber))
    .slice(0, 3)
    .map((item) => ({
      type: "Soko",
      title: item.title,
      href: `/soko/${item.slug}`,
      excerpt: item.subtitle || item.excerpt,
    }));

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
<TableOfContents items={tocItems} />

      {article.sections?.map((section, i) => {
        if (section.callout === "avoid") {
          return (
            <div key={i} id={`sec-${i}`} style={{ background: "#fef2f2", borderLeft: "4px solid #dc2626", borderRadius: "var(--radius-md)", padding: "1.25rem 1.5rem", margin: "1.5rem 0", scrollMarginTop: "80px" }}>
              <p style={{ margin: "0 0 0.75rem 0", fontWeight: 700, color: "#991b1b", fontSize: "1.05rem" }}>{section.title}</p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#7f1d1d" }}>
                {section.items?.map((item, j) => (
                  <li key={j} style={{ marginBottom: "0.5rem" }}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        if (section.callout === "good") {
          return (
            <div key={i} id={`sec-${i}`} style={{ background: "#f0fdf4", borderLeft: "4px solid #16a34a", borderRadius: "var(--radius-md)", padding: "1.25rem 1.5rem", margin: "1.5rem 0", scrollMarginTop: "80px" }}>
              <p style={{ margin: "0 0 0.75rem 0", fontWeight: 700, color: "#166534", fontSize: "1.05rem" }}>{section.title}</p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#14532d" }}>
                {section.items?.map((item, j) => (
                  <li key={j} style={{ marginBottom: "0.5rem" }}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <div key={i} id={`sec-${i}`} style={{ scrollMarginTop: "80px" }}>
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

      <div style={navBoxStyle}>
        {article.nextSlug ? (
          <>
            <p style={{ margin: "0 0 1rem 0", color: "#1a1a1a", fontWeight: 600 }}>
              Unaendelea vizuri. Endelea na sehemu inayofuata.
            </p>
            <a href={`/soko/${article.nextSlug}`} style={btnPrimaryStyle}>
              Endelea → Sehemu {article.partNumber + 1}
            </a>
          </>
        ) : (
          <>
            <p style={{ margin: "0 0 0.5rem 0", color: "#1e7b4c", fontWeight: 700, fontSize: "1.1rem" }}>
              🎉 Umekamilisha somo hili!
            </p>
            <p style={{ margin: "0 0 1rem 0", color: "#555555", fontSize: "0.95rem" }}>
              Umejifunza kitu cha maana. Endelea na safari.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              <a href="/soko" style={btnPrimaryStyle}>Rudi Soko →</a>
              <a href="/academy" style={btnSecondaryStyle}>Endelea Academy</a>
            </div>
          </>
        )}

        {article.prevSlug && (
          <p style={{ marginTop: "1rem", marginBottom: 0 }}>
            <a href={`/soko/${article.prevSlug}`} style={{ color: "#1e7b4c", fontSize: "0.9rem", textDecoration: "none" }}>
              ← Rudi Sehemu {article.partNumber - 1}
            </a>
          </p>
        )}
      </div>

      {article.disclaimer && (
        <div style={disclaimerStyle}>
          <strong>Kumbuka:</strong> {article.disclaimer}
        </div>
      )}

      {related.length > 0 && (
        <RelatedArticles items={related} title="Masomo Mengine ya Soko" />
      )}

      <ShareButtons title={article.title} path={`/soko/${article.slug}`} />

      <Footer />
          <ArticleActions title={article.title} path={`/soko/${article.slug}`} />

</main>
  );
}
