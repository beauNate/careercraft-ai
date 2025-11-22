import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'CareerCraft AI - AI-Powered Resume Analysis',
  description:
    'Transform your resume with AI-powered insights. Get ATS scoring, keyword optimization, and expert suggestions.',
  keywords: ['resume', 'AI', 'career', 'ATS', 'optimization', 'job search'],
  authors: [{ name: 'CareerCraft AI' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0070f3',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
