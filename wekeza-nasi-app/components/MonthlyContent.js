"use client";
import { useEffect, useState } from "react";

const TEST_INTERVAL_MS = 10 * 60 * 1000;

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
      <h3 style={{ marginTop: 0 }}>{current.title}</h3>
      <p>{current.excerpt}</p>
      {current.link && <a href={current.link}>Soma zaidi &rarr;</a>}
      {now && (
        <p style={{ fontSize: "0.7rem", color: "#999", marginTop: "0.5rem" }}>
          Muda: {now.toLocaleTimeString("sw-TZ")} (Test: kila dakika 10)
        </p>
      )}
    </div>
  );
}
