import type { Metadata } from 'next';
import { Geist, DM_Serif_Display } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const dmSerif = DM_Serif_Display({
  variable: '--font-serif',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Datoflow — AI-native PR & market research intelligence',
    template: '%s | Datoflow',
  },
  description:
    'The social media and news intelligence platform for PR and research teams. AI-powered semantic filtering, emotion analysis, and prompt-driven reports. Pay per use, not per year.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://datoflow.com'
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
