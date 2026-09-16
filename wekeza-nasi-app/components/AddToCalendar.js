"use client";
import { useState } from "react";

export default function AddToCalendar({ title, description, startDate, url }) {
  const [showMenu, setShowMenu] = useState(false);

  // Tengeneza tarehe — default wiki moja kutoka sasa
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 7);
  const start = startDate ? new Date(startDate) : defaultDate;

  // Format: 20260923T090000Z (Google Calendar)
  const formatDate = (date) => {
    const pad = (n) => String(n).padStart(2, "0");
    return (
      date.getUTCFullYear() +
      pad(date.getUTCMonth() + 1) +
      pad(date.getUTCDate()) +
      "T" +
      pad(date.getUTCHours()) +
      pad(date.getUTCMinutes()) +
      "00Z"
    );
  };

  const end = new Date(start.getTime() + 60 * 60 * 1000); // + 1 hour
  const startStr = formatDate(start);
  const endStr = formatDate(end);

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startStr}/${endStr}&details=${encodeURIComponent(description + "\n\n" + url)}&location=${encodeURIComponent("WEKEZA NASI")}`;

  // ICS file kwa Apple Calendar / Outlook
  const downloadICS = () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//WEKEZA NASI//Somo la Mwezi//SW",
      "BEGIN:VEVENT",
      `UID:wekeza-${Date.now()}@wekeza-nasi.vercel.app`,
      `DTSTAMP:${formatDate(new Date())}`,
      `DTSTART:${startStr}`,
      `DTEND:${endStr}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}\\n\\n${url}`,
      "LOCATION:WEKEZA NASI",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "wekeza-somo-la-mwezi.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowMenu(false);
  };

  const wrapperStyle = {
    background: "#f3f7fb",
    border: "1px solid #dfe8f2",
    borderRadius: "var(--radius-md)",
    padding: "0.9rem 1.1rem",
    margin: "1rem 0",
    position: "relative",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
  };

  const labelStyle = {
    fontSize: "0.85rem",
    color: "#1a1a1a",
    fontWeight: 600,
    margin: 0,
  };

  const subStyle = {
    fontSize: "0.75rem",
    color: "#666666",
    margin: "0.25rem 0 0 0",
  };

  const btnStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.3rem",
    padding: "0.5rem 1rem",
    background: "#1e7b4c",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "0.8rem",
    borderRadius: "var(--radius-pill)",
    border: "none",
    cursor: "pointer",
    flexShrink: 0,
  };

  const menuStyle = {
    position: "absolute",
    top: "calc(100% + 0.4rem)",
    right: "1.1rem",
    background: "#ffffff",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    padding: "0.4rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    zIndex: 20,
    minWidth: "200px",
  };

  const menuItemStyle = {
    display: "block",
    width: "100%",
    padding: "0.6rem 0.9rem",
    background: "transparent",
    color: "#1a1a1a",
    border: "none",
    borderRadius: "var(--radius-sm)",
    fontSize: "0.85rem",
    fontWeight: 500,
    textAlign: "left",
    cursor: "pointer",
  };

  return (
    <div style={wrapperStyle}>
      <div style={headerStyle}>
        <div>
          <p style={labelStyle}>📅 Kumbusha Somo la Mwezi</p>
          <p style={subStyle}>
            Ongeza kwenye kalenda yako. Somo linatoka {start.toLocaleDateString("sw-TZ", { day: "numeric", month: "long", year: "numeric" })}.
          </p>
        </div>
        <button style={btnStyle} onClick={() => setShowMenu(!showMenu)}>
          Kumbusha
        </button>
      </div>

      {showMenu && (
        <div style={menuStyle}>
          <a href={googleUrl} target="_blank" rel="noopener noreferrer" style={{ ...menuItemStyle, textDecoration: "none", display: "block" }}>
            Google Calendar
          </a>
          <button style={menuItemStyle} onClick={downloadICS}>
            Apple Calendar (iPhone)
          </button>
          <button style={menuItemStyle} onClick={downloadICS}>
            Outlook / Nyingine
          </button>
        </div>
      )}
    </div>
  );
}
