'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <section
        className="wrap"
        style={{
          minHeight: 'calc(100vh - 180px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingTop: '140px',
          paddingBottom: '100px',
        }}
      >
        <div className="eyebrow">{t.notFound.eyebrow}</div>
        <h1
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            marginBottom: '24px',
          }}
        >
          {t.notFound.title}{' '}
          <span className="section-title-serif">{t.notFound.titleSerif}</span>.
        </h1>
        <p
          style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '36px',
          }}
        >
          {t.notFound.desc}
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--fill">
            {t.notFound.homeBtn}
          </Link>
          <Link href="/work" className="btn btn--outline">
            {t.notFound.workBtn}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
