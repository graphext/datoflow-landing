import type { Metadata } from 'next';
import { Inter, DM_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const dmMono = DM_Mono({
  variable: '--font-mono',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
