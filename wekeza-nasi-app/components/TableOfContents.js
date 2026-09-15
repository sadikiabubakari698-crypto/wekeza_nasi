"use client";
import { useState } from "react";

export default function TableOfContents({ items }) {
  const [open, setOpen] = useState(false);

  if (!items || items.length === 0) return null;

  const wrapperStyle = {
    background: "#f3f7fb",
    border: "1px solid #dfe8f2",
    borderRadius: "var(--radius-md)",
    padding: "0",
    margin: "1.5rem 0",
    overflow: "hidden",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.9rem 1.25rem",
    cursor: "pointer",
    userSelect: "none",
    background: open ? "#e8f0f8" : "transparent",
  };

  const titleStyle = {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#1a1a1a",
    margin: 0,
  };

  const chevronStyle = {
    fontSize: "0.85rem",
    color: "#1e7b4c",
    fontWeight: 700,
    transition: "transform 0.2s ease",
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0 1.25rem 1rem 1.25rem",
    margin: 0,
    display: open ? "block" : "none",
  };

  const linkStyle = {
    display: "block",
    padding: "0.5rem 0",
    color: "#1e7b4c",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    borderBottom: "1px solid #e9edf2",
  };

  return (
    <div style={wrapperStyle}>
      <div style={headerStyle} onClick={() => setOpen(!open)}>
        <p style={titleStyle}>Yaliyomo ({items.length} sehemu)</p>
        <span style={chevronStyle}>▼</span>
      </div>
      <ul style={listStyle}>
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.id}`}
              style={linkStyle}
              onClick={() => setOpen(false)}
            >
              {i + 1}. {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
