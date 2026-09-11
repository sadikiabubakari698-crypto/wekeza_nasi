"use client";
import { useEffect, useState } from "react";

const TEST_INTERVAL_MS = 10 * 60 * 1000; // dakika 10

export default function MonthlyContent({ items }) {
  const [current, setCurrent] = useState(null);
  const [now, setNow] = useState(null);

  useEffect(() => {
    const update = () => {
      const currentTime = new Date();
      setNow(currentTime);

      if (!items || items.length === 0) {
        setCurrent(null);
        return;
      }

      const isTest = items.some((item) => item.testMode === true);

      if (isTest) {
        const slot = Math.floor(Date.now() / TEST_INTERVAL_MS);
        const index = slot % items.length;
        setCurrent(items[index]);
      } else {
        const eligible = items
          .filter((item) => new Date(item.publishDate) <= currentTime)
          .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        setCurrent(eligible[0] || null);
      }
    };

    update();
    const interval = setInterval(update, 10 * 1000);
    return () => clearInterval(interval);
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
      {now && (
        <p style={{ fontSize: "0.7rem", color: "#999", marginTop: "0.5rem" }}>
          Muda: {now.toLocaleTimeString("sw-TZ")} (Test: kila dakika 10)
        </p>
      )}
    </div>
  );
}
