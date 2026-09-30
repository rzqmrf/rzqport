import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import GlowBackground from '@/components/GlowBackground';
import ScrollToTopAirplane from '@/components/ScrollToTopAirplane';
import ScrollPaperAirplane from '@/components/ScrollPaperAirplane';

export const metadata: Metadata = {
  metadataBase: new URL('https://rozaqmaruf.dev'),
  title: {
    default: "Muhammad Rozaq Ma'ruf — UI/UX Designer & Full-Stack Developer",
    template: "%s | Muhammad Rozaq Ma'ruf",
  },
  description: "Portfolio of Muhammad Rozaq Ma'ruf, UI/UX Designer and Full-Stack Developer. Designing intuitive digital experiences and building modern web applications.",
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
    'Laravel'
  ],
  authors: [{ name: "Muhammad Rozaq Ma'ruf", url: 'https://github.com/rzqmrf' }],
  creator: "Muhammad Rozaq Ma'ruf",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rozaqmaruf.dev',
    title: "Muhammad Rozaq Ma'ruf — UI/UX Designer & Full-Stack Developer",
    description: "Designing intuitive digital experiences and building modern web applications.",
    siteName: "Muhammad Rozaq Ma'ruf Portfolio",
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: "Muhammad Rozaq Ma'ruf Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muhammad Rozaq Ma'ruf — UI/UX Designer & Full-Stack Developer",
    description: "Designing intuitive digital experiences and building modern web applications.",
    images: ['/hero.jpg'],
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            opacity: 0.015,
            pointerEvents: 'none',
            zIndex: 999999,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <GlowBackground />
        <CustomCursor />
        <ScrollToTopAirplane />
        <ScrollPaperAirplane />
        <main>{children}</main>
      </body>
    </html>
  );
}

