import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import '@/styles/globals.css';

const instrument = Instrument_Sans({
  variable: '--font-instrument',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Risyad Ziyan Arkham — Frontend developer',
  description:
    'Frontend developer in Serang, Indonesia. React, Next.js, TypeScript and Vue.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrument.variable}>{children}</body>
    </html>
  );
}
