import Link from "next/link";

export default function Breadcrumbs({ items }) {
  // items = [{ label: "Nyumbani", href: "/" }, { label: "Academy", href: "/academy" }, { label: "Somo 5" }]

  const navStyle = {
    fontSize: "0.85rem",
    color: "#555555",
    marginBottom: "1.25rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.35rem",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#1e7b4c",
    textDecoration: "none",
    fontWeight: 500,
  };

  const currentStyle = {
    color: "#1a1a1a",
    fontWeight: 600,
  };

  const sepStyle = {
    color: "#cccccc",
  };

  return (
    <nav style={navStyle} aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
            {isLast ? (
              <span style={currentStyle}>{item.label}</span>
            ) : (
              <Link href={item.href} style={linkStyle}>{item.label}</Link>
            )}
            {!isLast && <span style={sepStyle}>›</span>}
          </span>
        );
      })}
    </nav>
  );
}
