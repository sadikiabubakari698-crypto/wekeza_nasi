"use client";
import { useEffect, useState } from "react";

export default function MonthlyContent({ items }) {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!items || items.length === 0) return;
    // Chukua ya kwanza (ya sasa)
    setCurrent(items[0]);
  }, [items]);

  if (!current) return null;

  return (
    <div className="area-card">
      <p style={{ fontSize: "0.8rem", color: "#1e7b4c", fontWeight: 600, margin: 0 }}>
        {current.month || "Somo la Mwezi"}
      </p>
      <h3 style={{ marginTop: "0.25rem" }}>{current.title}</h3>
      {current.subtitle && (
        <p style={{ fontStyle: "italic", color: "#555", marginTop: 0 }}>{current.subtitle}</p>
      )}
      <p>{current.executiveSummary?.substring(0, 200)}...</p>
      <a href={`/somo-la-mwezi/${current.slug}`}>Soma uchambuzi kamili &rarr;</a>
    </div>
  );
}
