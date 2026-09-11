"use client";
import { useEffect, useState } from "react";

export default function MonthlyContent({ items }) {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!items || items.length === 0) {
      setCurrent(null);
      return;
    }

    const now = new Date();

    // Chagua content ya mwisho iliyopublish (kwa mwezi wa sasa au nyuma)
    const eligible = items
      .filter((item) => new Date(item.publishDate) <= now)
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    setCurrent(eligible[0] || null);
  }, [items]);

  if (!current) {
    return (
      <div className="area-card">
        <p><em>Hakuna content kwa sasa.</em></p>
      </div>
    );
  }

  return (
    <div className="area-card">
      <p style={{ fontSize: "0.8rem", color: "#1e7b4c", fontWeight: 600, margin: 0 }}>
        SOMO LA MWEZI — {current.month?.toUpperCase()}
      </p>
      <h3 style={{ marginTop: "0.25rem" }}>{current.title}</h3>
      {current.subtitle && (
        <p style={{ fontStyle: "italic", color: "#555", marginTop: 0 }}>{current.subtitle}</p>
      )}
      <p>{current.executiveSummary?.substring(0, 180)}...</p>
      <a href={`/somo-la-mwezi/${current.slug}`}>Soma uchambuzi kamili &rarr;</a>
    </div>
  );
}
