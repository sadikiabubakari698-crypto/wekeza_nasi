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
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid var(--color-border)",
    padding: "0.75rem 1.75rem",
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
    fontSize: "1.05rem",
    color: "var(--color-primary)",
    textDecoration: "none",
    letterSpacing: "-0.01em",
  };

  const desktopNavStyle = {
    display: "flex",
    gap: "1.25rem",
    alignItems: "center",
  };

  const navLinkStyle = {
    color: "var(--color-text)",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
  };

  const menuBtnStyle = {
    background: "transparent",
    border: "none",
    fontSize: "1.5rem",
    lineHeight: 1,
    color: "var(--color-text)",
    padding: "0.25rem 0.5rem",
  };

  const mobileMenuStyle = {
    maxWidth: "600px",
    margin: "0.5rem auto 0",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    paddingTop: "0.75rem",
    borderTop: "1px solid var(--color-border)",
  };

  return (
    <header style={headerStyle}>
      <div style={innerStyle}>
        <Link href="/" style={logoStyle}>WEKEZA NASI</Link>

        {/* Desktop nav (hidden on small screens via CSS-in-JS trick) */}
        <nav style={desktopNavStyle} className="desktop-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={navLinkStyle}>{l.label}</Link>
          ))}
        </nav>

        {/* Mobile menu button */}
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
