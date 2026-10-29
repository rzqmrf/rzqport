'use client';
import { useEffect, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useHydrated, useMediaQuery } from '@/lib/clientStore';
import styles from './IntroLoader.module.css';

const INTRO_KEY = 'intro-loaded';
const INTRO_EVENT = 'portfolio-intro-done';

function subscribeIntro(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(INTRO_EVENT, onStoreChange);
  return () => window.removeEventListener(INTRO_EVENT, onStoreChange);
}

function getIntroSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(INTRO_KEY) === 'true';
}

function getIntroServerSnapshot(): boolean {
  return false;
}

function completeIntro() {
  try {
    sessionStorage.setItem(INTRO_KEY, 'true');
  } catch {}
  window.dispatchEvent(new Event(INTRO_EVENT));
}

export default function IntroLoader() {
  const { t } = useLanguage();
  const hydrated = useHydrated();
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const hasLoaded = useSyncExternalStore(subscribeIntro, getIntroSnapshot, getIntroServerSnapshot);

  const loading = !hasLoaded && !reducedMotion;

  useEffect(() => {
    if (!hydrated || !loading) return;

    const finishTimer = setTimeout(() => {
      completeIntro();
    }, 1850);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        completeIntro();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(finishTimer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [hydrated, loading]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  const path =
    'M 30,90 C 30,90 25,140 45,140 C 65,140 60,95 80,95 C 100,95 95,140 95,140 C 95,140 110,100 120,100 C 130,100 125,140 120,140 C 115,140 110,120 120,120 C 130,120 135,140 135,140 C 135,140 145,50 155,50 C 165,50 155,140 155,140 C 155,140 165,50 175,50 C 185,50 175,140 175,140 C 175,140 190,100 200,100 C 210,100 210,140 200,140 C 190,140 190,100 200,100 C 210,100 230,110 250,90';

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.loader}
          onClick={completeIntro}
          exit={{
            y: '-100vh',
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className={styles.container}>
            <svg
              className={styles.svg}
              viewBox="0 0 280 180"
              width="280"
              height="180"
              aria-hidden="true"
            >
              {hydrated && (
                <motion.path
                  d={path}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.45, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </svg>

            {hydrated && (
              <div className={styles.airplaneWrapper} aria-hidden="true">
                <svg
                  className={styles.airplane}
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    d="M2 21l21-9L2 3v7l15 2-15 2v7z"
                    fill="var(--accent)"
                  />
                </svg>
              </div>
            )}
          </div>

          <button
            type="button"
            className={styles.skipBtn}
            onClick={(e) => {
              e.stopPropagation();
              completeIntro();
            }}
          >
            {t.loader.skip} →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
