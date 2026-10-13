'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const fullNavItems = [
  { num: '01', path: '/', label: 'HOME' },
  { num: '02', path: '/work', label: 'WORK' },
  { num: '03', path: '/about', label: 'ABOUT' },
  { num: '04', path: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    // Muat tema dari localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll saat fullscreen menu terbuka
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

  // Tutup menu saat rute berubah atau tombol Escape ditekan
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const selectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('theme', themeId);
  };

  return (
    <>
      {/* Top Floating / Fixed Bar */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logoGroup} onClick={() => setIsOpen(false)}>
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
                  rzq / muhammad rozaq ma'ruf
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <div className={styles.rightActions}>
            {/* Theme Toggle Button */}
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

            {/* Hamburger / Bento Morphing Button (Inspirasi itssharl.ee) */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
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

      {/* Fullscreen Overlay Menu Drawer (Inspirasi itssharl.ee) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
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
                      delay: 0.12 + idx * 0.07,
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className={styles.navItemNum}>{item.num}</span>
                    <Link
                      href={item.path}
                      className={`${styles.navItemTitle} ${pathname === item.path ? styles.activeNavItemTitle : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Social / Portfolio Links at Bottom */}
              <motion.div
                className={styles.socialFooter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.5 }}
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
                  ↗ resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
