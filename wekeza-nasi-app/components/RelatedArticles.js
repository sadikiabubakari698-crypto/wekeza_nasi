import Link from "next/link";

export default function RelatedArticles({ items, title = "Soma Pia" }) {
  if (!items || items.length === 0) return null;

  const containerStyle = { margin: "2.5rem 0 0 0", padding: "1.5rem 0 0 0", borderTop: "1px solid #e9edf2" };
  const headerStyle = { fontSize: "1.15rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 1rem 0" };
  const cardStyle = { display: "block", padding: "1rem 1.25rem", background: "#ffffff", border: "1px solid #e9edf2", borderRadius: "var(--radius-md)", marginBottom: "0.6rem", color: "#1a1a1a", textDecoration: "none", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" };
  const badgeStyle = (type) => {
    const colors = {
      "Somo": { bg: "#e3f0ea", color: "#1e7b4c" },
      "Kampuni": { bg: "#fef8ee", color: "#d48d3b" },
      "Soko": { bg: "#e8f0f8", color: "#16633d" },
      "Somo la Mwezi": { bg: "#f3e8fd", color: "#6b21a8" },
    };
    return colors[type] || { bg: "#f0f0f0", color: "#555555" };
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>{title}</h3>
      {items.map((item, i) => {
        const badge = badgeStyle(item.type);
        return (
          <Link key={i} href={item.href} style={cardStyle}>
            {item.type && (
              <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", marginBottom: "0.5rem", background: badge.bg, color: badge.color, letterSpacing: "0.03em" }}>
                {item.type}
              </span>
            )}
            <h4 style={{ margin: "0 0 0.25rem 0", color: "#1a1a1a", fontSize: "1rem", fontWeight: 700 }}>{item.title}</h4>
            {item.excerpt && <p style={{ margin: 0, fontSize: "0.85rem", color: "#555555" }}>{item.excerpt}</p>}
          </Link>
        );
      })}
    </div>
  );
}
