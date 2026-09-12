import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://wekeza-nasi.vercel.app"),
  title: {
    default: "WEKEZA NASI — Kujifunza Uwekezaji Tanzania",
    template: "%s — WEKEZA NASI",
  },
  description:
    "Elimu ya uwekezaji kwa Kiswahili rahisi. Academy (masomo 20), Uchambuzi wa Kampuni 8 za DSE, na Somo la Mwezi. Kuanzia Tanzania, kwa Afrika.",
  keywords: [
    "uwekezaji", "hisa", "DSE", "Dar es Salaam Stock Exchange",
    "soko la hisa", "Tanzania", "academy", "kujifunza uwekezaji",
    "uchambuzi wa kampuni", "CRDB", "NMB", "TBL", "Vodacom", "TCC",
  ],
  authors: [{ name: "WEKEZA NASI" }],
  creator: "WEKEZA NASI",
  publisher: "WEKEZA NASI",
  openGraph: {
    type: "website",
    locale: "sw_TZ",
    url: "https://wekeza-nasi.vercel.app",
    siteName: "WEKEZA NASI",
    title: "WEKEZA NASI — Kujifunza Uwekezaji Tanzania",
    description:
      "Elimu ya uwekezaji kwa Kiswahili rahisi. Academy, Uchambuzi wa Kampuni, na Somo la Mwezi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEKEZA NASI — Kujifunza Uwekezaji Tanzania",
    description:
      "Elimu ya uwekezaji kwa Kiswahili rahisi. Academy, Uchambuzi wa Kampuni, na Somo la Mwezi.",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "giho2hyCkM9aGq3Z5YQXfQwYz8ZK4hJ8Z1N6qB4lM0o",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sw" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
