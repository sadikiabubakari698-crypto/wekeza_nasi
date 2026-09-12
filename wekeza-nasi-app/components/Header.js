"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/academy", label: "Academy" },
    { href: "/somo-la-mwezi/crdb-2026-09", label: "Somo la Mwezi" },
    { href: "/kampuni", label: "Kampuni" },
    { href: "/soko", label: "Soko" },
  ];

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "#ffffff",
    borderBottom: "1px solid #e9edf2",
    padding: "0.75rem 1.5rem",
  };

  const innerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontWeight: 800,
    fontSize: "1rem",
    color: "#1e7b4c",
    textDecoration: "none",
    letterSpacing: "-0.01em",
  };

  const desktopNavStyle = {
    display: "flex",
    gap: "1.25rem",
    alignItems: "center",
  };

  const navLinkStyle = {
    color: "#1a1a1a",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
  };

  const menuBtnStyle = {
    background: "transparent",
    border: "none",
    fontSize: "1.5rem",
    lineHeight: 1,
    color: "#1a1a1a",
    padding: "0.25rem 0.5rem",
  };

  const mobileMenuStyle = {
    maxWidth: "600px",
    margin: "0.5rem auto 0",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    paddingTop: "0.75rem",
    borderTop: "1px solid #e9edf2",
  };

  return (
    <header style={headerStyle}>
      <div style={innerStyle}>
        <Link href="/" style={logoStyle}>WEKEZA NASI</Link>

        <nav style={desktopNavStyle} className="desktop-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={navLinkStyle}>{l.label}</Link>
          ))}
        </nav>

        <button
          style={menuBtnStyle}
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={mobileMenuStyle}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ ...navLinkStyle, fontSize: "1rem", fontWeight: 600 }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style jsx global>{`
        .desktop-nav { display: none; }
        .mobile-menu-btn { display: block; }
        @media (min-width: 640px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
