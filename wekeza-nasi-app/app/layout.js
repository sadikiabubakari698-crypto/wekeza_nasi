import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WEKEZA NASI Academy - Jifunze Uwekezaji wa Hisa Tanzania",
  description: "Jifunze hisa, soko la Dar es Salaam Stock Exchange (DSE), na uwekezaji kwa lugha rahisi ya Kiswahili. Masomo ya bure, uchambuzi wa makampuni, na tahadhari za utapeli.",
  verification: { google: "gihoAfK3IJnkiIhfgYLUVDaPj6VCpADAWxFRClqzM_8" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
