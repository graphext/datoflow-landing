import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Agentation } from 'agentation';
import { LenisProvider } from '@/components/lenis-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Datoflow — Social Listening & PR for the AI era',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
}
