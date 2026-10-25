import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  verification: {
    google: 'gihoAfK3IJnkiIhfgYLUVDaPj6VCpADAWxFRClqzM_8',
  },
  title: {
    template: '%s — WEKEZA NASI',
    default: 'WEKEZA NASI',
  },
  description: 'Elimu ya uwekezaji kwa Kiswahili rahisi. Tanzania.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sw">
      <body style={{ backgroundColor: '#ffffff', color: '#1a1a1a', margin: 0, padding: 0 }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
