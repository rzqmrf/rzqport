import type { Metadata } from 'next';
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
} from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import GlowBackground from '@/components/GlowBackground';
import ScrollToTopAirplane from '@/components/ScrollToTopAirplane';
import ScrollPaperAirplane from '@/components/ScrollPaperAirplane';
import { LanguageProvider } from '@/context/LanguageContext';

const displayFont = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const serifFont = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rozaqmaruf.dev'),
  title: {
    default: "Muhammad Rozaq Ma'ruf · UI/UX Designer & Full-Stack Developer",
    template: "%s | Muhammad Rozaq Ma'ruf",
  },
  description:
    "Portfolio of Muhammad Rozaq Ma'ruf, UI/UX Designer and Full-Stack Developer crafting intuitive digital products and modern web & mobile applications.",
  keywords: [
    'UI/UX Designer',
    'Full-Stack Developer',
    'Frontend Developer',
    'Muhammad Rozaq Maruf',
    'Web Development',
    'Figma',
    'React',
    'Next.js',
    'Flutter',
    'Laravel',
  ],
  authors: [{ name: "Muhammad Rozaq Ma'ruf", url: 'https://github.com/rzqmrf' }],
  creator: "Muhammad Rozaq Ma'ruf",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rozaqmaruf.dev',
    title: "Muhammad Rozaq Ma'ruf · UI/UX Designer & Full-Stack Developer",
    description: 'Designing intuitive digital experiences and building modern web & mobile applications.',
    siteName: "Muhammad Rozaq Ma'ruf Portfolio",
    images: [
      {
        url: '/hero.jpg',
        width: 768,
        height: 1364,
        alt: "Muhammad Rozaq Ma'ruf Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muhammad Rozaq Ma'ruf · UI/UX Designer & Full-Stack Developer",
    description: 'Designing intuitive digital experiences and building modern web & mobile applications.',
    images: ['/hero.jpg'],
  },
  icons: {
    icon: '/icon.png',
  },
};

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
    var savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang === 'id' || savedLang === 'en') {
      document.documentElement.lang = savedLang;
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = `${displayFont.variable} ${serifFont.variable} ${bodyFont.variable} ${monoFont.variable}`;

  return (
    <html lang="en" className={fontClasses} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <LanguageProvider>
          <GlowBackground />
          <CustomCursor />
          <ScrollToTopAirplane />
          <ScrollPaperAirplane />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
