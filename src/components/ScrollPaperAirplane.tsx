'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { useHydrated, useMediaQuery } from '@/lib/clientStore';
import styles from './ScrollPaperAirplane.module.css';

export default function ScrollPaperAirplane() {
  const { scrollY } = useScroll();
  const hydrated = useHydrated();
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const lastScrollY = useRef(0);
  const directionRef = useRef<'down' | 'up'>('down');

  const x = useSpring(0, { stiffness: 60, damping: 20 });
  const rotate = useSpring(-45, { stiffness: 50, damping: 18 });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!hydrated || reducedMotion) return;

    const diff = latest - lastScrollY.current;
    if (diff > 1) {
      directionRef.current = 'down';
    } else if (diff < -1) {
      directionRef.current = 'up';
    }
    lastScrollY.current = latest;

    const sway = Math.sin(latest / 160) * 45;
    x.set(sway);

    const baseAngle = directionRef.current === 'down' ? 135 : -45;
    const bank = Math.cos(latest / 160) * 15;
    rotate.set(baseAngle + bank);
  });

  if (!hydrated || reducedMotion) return null;

  return (
    <motion.div
      className={styles.airplaneWrapper}
      aria-hidden="true"
      style={{
        x,
        rotate,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        className={styles.airplane}
      >
        <path
          d="M2 21l21-9L2 3v7l15 2-15 2v7z"
          fill="currentColor"
        />
      </svg>
      <div className={styles.trail} />
    </motion.div>
  );
}
