"use client";
import { useEffect, useState } from "react";

export default function MonthlyContent({ items }) {
  const [current, setCurrent] = useState(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const update = () => {
      const currentTime = new Date();
      setNow(currentTime);
      const eligible = items
        .filter((item) => new Date(item.publishDate) <= currentTime)
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
      setCurrent(eligible[0] || null);
    };

    update();
    // Angalia kila sekunde 30
    const interval = setInterval(update, 30 * 1000);
    return () => clearInterval(interval);
  }, [items]);

  if (!current) {
    return (
      <div className="area-card">
        <p><em>Hakuna content kwa sasa.</em></p>
        <p style={{ fontSize: "0.75rem", color: "#999" }}>
          Muda wa sasa: {now.toLocaleString("sw-TZ")}
        </p>
      </div>
    );
  }

  return (
    <div className="area-card">
      <h3 style={{ marginTop: 0 }}>{current.title}</h3>
      <p>{current.excerpt}</p>
      {current.link && (
        <a href={current.link}>Soma zaidi &rarr;</a>
      )}
      <p style={{ fontSize: "0.7rem", color: "#999", marginTop: "0.5rem" }}>
        Imepublish: {new Date(current.publishDate).toLocaleString("sw-TZ")}
      </p>
    </div>
  );
}
