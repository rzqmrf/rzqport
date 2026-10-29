'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';

function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 15, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    if (window.matchMedia('(hover: none)').matches) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const firstName = 'Muhammad';
  const middleName = 'Rozaq';
  const lastName = "Ma'ruf";

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.content}>
        <h1 className={styles.nameBlock} aria-label="Muhammad Rozaq Ma'ruf">
          <span className={styles.srOnly}>Muhammad Rozaq Ma&apos;ruf</span>
          <span className={styles.nameRow} aria-hidden="true">
            {firstName.split('').map((ch, i) => (
              <motion.span
                key={`a-${i}`}
                className={styles.letter}
                initial={{ y: '100%', opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.12 + i * 0.028, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
                }}
                whileHover={{ y: -14, scale: 1.12, rotate: 5, transition: { type: 'spring', stiffness: 300, damping: 12 } }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
          <span className={styles.nameRow} aria-hidden="true">
            {middleName.split('').map((ch, i) => (
              <motion.span
                key={`b-${i}`}
                className={`${styles.letter} ${styles.accent}`}
                initial={{ y: '100%', opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.34 + i * 0.035, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
                }}
                whileHover={{ y: -14, scale: 1.12, rotate: -5, transition: { type: 'spring', stiffness: 300, damping: 12 } }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
          <span className={styles.nameRow} aria-hidden="true">
            {lastName.split('').map((ch, i) => (
              <motion.span
                key={`c-${i}`}
                className={`${styles.letter} ${styles.serif}`}
                initial={{ y: '100%', opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.52 + i * 0.028, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
                }}
                whileHover={{ y: -14, scale: 1.12, rotate: 5, transition: { type: 'spring', stiffness: 300, damping: 12 } }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.78, duration: 0.7 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.55 }}
        >
          <Magnetic>
            <a href="#featured" className="btn btn--fill">
              {t.hero.exploreBtn}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              {t.hero.resumeBtn}
            </a>
          </Magnetic>
          <Magnetic>
            <Link href="/contact" className="btn btn--outline">
              {t.hero.contactBtn}
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <a href="#featured" className={styles.scrollHint} aria-label="Scroll to featured projects">
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
      </a>
    </section>
  );
}
