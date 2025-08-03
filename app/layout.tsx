import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ghanshyam Murti Bhandar - Divine Car Dashboard Murtis & Spiritual Items',
  description: 'Premium quality car dashboard murtis, home temple accessories, and spiritual items. Trusted since 2010. Free shipping on orders above ₹999. Authentic products guaranteed.',
  keywords: 'car dashboard murti, spiritual items, religious accessories, hindu deities, temple items, ganesha murti, spiritual store india',
  authors: [{ name: 'Ghanshyam Murti Bhandar' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Ghanshyam Murti Bhandar - Divine Car Dashboard Murtis & Spiritual Items',
    description: 'Premium quality car dashboard murtis, home temple accessories, and spiritual items. Trusted since 2010.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Ghanshyam Murti Bhandar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghanshyam Murti Bhandar - Divine Car Dashboard Murtis & Spiritual Items',
    description: 'Premium quality car dashboard murtis, home temple accessories, and spiritual items. Trusted since 2010.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://ghanshyammurtibhandar.com" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}