import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import GlowBackground from '@/components/GlowBackground';
import ScrollToTopAirplane from '@/components/ScrollToTopAirplane';
import ScrollPaperAirplane from '@/components/ScrollPaperAirplane';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: "Muhammad Rozaq Ma'ruf — UI/UX Designer & Full-Stack Developer",
  description: 'Portfolio of Muhammad Rozaq Ma\'ruf, UI/UX Designer and Full-Stack Developer. Designing intuitive digital experiences and building modern web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Subtle, premium editorial film grain noise overlay */}
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
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}

