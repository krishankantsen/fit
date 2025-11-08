import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zenith Architecture & Engineering | Innovative Design Solutions',
  description: 'Multidisciplinary architecture, engineering, and construction firm specializing in sustainable design and innovative solutions.',
  keywords: 'architecture, engineering, construction, sustainable design, BIM',
  openGraph: {
    title: 'Zenith Architecture & Engineering',
    description: 'Multidisciplinary architecture, engineering, and construction firm',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
