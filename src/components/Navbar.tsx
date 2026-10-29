'use client';
import { useState, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Navbar.module.css';

const THEME_KEY = 'theme';
const THEME_EVENT = 'portfolio-theme-change';

function subscribeTheme(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {};
  const handler = () => onStoreChange();
  window.addEventListener('storage', handler);
  window.addEventListener(THEME_EVENT, handler);
  return () => {
    window.removeEventListener('storage', handler);
    window.removeEventListener(THEME_EVENT, handler);
  };
}

function getThemeSnapshot(): string {
  if (typeof window === 'undefined') return 'dark';
  return localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
}

function getThemeServerSnapshot(): string {
  return 'dark';
}

export default function Navbar() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const currentTheme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const { lang, toggleLang, t } = useLanguage();

  const isOpen = openForPath === pathname;

  const fullNavItems = [
    { num: '01', path: '/', label: t.nav.home },
    { num: '02', path: '/work', label: t.nav.work },
    { num: '03', path: '/about', label: t.nav.about },
    { num: '04', path: '/contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenForPath(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const selectTheme = (themeId: string) => {
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem(THEME_KEY, themeId);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const toggleMenu = () => {
    setOpenForPath((prev) => (prev === pathname ? null : pathname));
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logoGroup} onClick={() => setOpenForPath(null)}>
            <span className={styles.logoMonogram}>
              R<span>.</span>
            </span>
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  className={styles.logoFullName}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  rzq / muhammad rozaq ma&apos;ruf
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <nav className={styles.desktopQuickNav} aria-label="Primary navigation">
            {fullNavItems.slice(1).map((item) => {
              const isActive =
                pathname === item.path || (item.path === '/work' && pathname.startsWith('/work'));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${styles.desktopLink} ${isActive ? styles.desktopLinkActive : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.rightActions}>
            <button
              type="button"
              onClick={toggleLang}
              className={styles.langToggleBtn}
              aria-label={`Switch language to ${lang === 'en' ? 'Bahasa Indonesia' : 'English'}`}
              title={`Switch language to ${lang === 'en' ? 'Bahasa Indonesia' : 'English'}`}
            >
              <span>{lang === 'en' ? 'EN' : 'ID'}</span>
            </button>

            <button
              type="button"
              onClick={() => selectTheme(currentTheme === 'dark' ? 'light' : 'dark')}
              className={styles.themeToggleBtn}
              aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <span className={styles.themeIcon}>
                {currentTheme === 'dark' ? '☼' : '☾'}
              </span>
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className={`${styles.menuToggleBtn} ${isOpen ? styles.menuOpen : ''}`}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.svg
                    key="close"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </motion.svg>
                ) : (
                  <motion.div
                    key="bento"
                    className={styles.bentoIcon}
                    initial={{ rotate: 90, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.6, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                  >
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.overlayContent}>
              <nav className={styles.navLinksList}>
                {fullNavItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    className={styles.navItemRow}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + idx * 0.06,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className={styles.navItemNum}>{item.num}</span>
                    <Link
                      href={item.path}
                      className={`${styles.navItemTitle} ${pathname === item.path ? styles.activeNavItemTitle : ''}`}
                      onClick={() => setOpenForPath(null)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className={styles.socialFooter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.45 }}
              >
                <a
                  href="https://www.instagram.com/rozaq.mrf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  ↗ instagram
                </a>
                <a
                  href="https://github.com/rzqmrf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  ↗ github
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-rozaq-ma-ruf-59a88033b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  ↗ linkedin
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  ↗ {t.nav.resume}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
