'use client';
import styles from './Footer.module.css';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>
            rozaq<span>.</span>
          </Link>
          <div className={styles.nav}>
            <Link href="/work">{t.nav.work}</Link>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Muhammad Rozaq Ma&apos;ruf</span>
          <span>{t.footer.designedBuilt}</span>
        </div>
      </div>
    </footer>
  );
}
