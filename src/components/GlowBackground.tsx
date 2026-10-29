'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useHydrated, useMediaQuery } from '@/lib/clientStore';
import styles from './GlowBackground.module.css';

export default function GlowBackground() {
  const hydrated = useHydrated();
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)');

  const x = useMotionValue(-700);
  const y = useMotionValue(-700);

  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (!hydrated || !finePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 350);
      y.set(e.clientY - 350);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hydrated, finePointer, x, y]);

  if (!hydrated) return null;

  return (
    <div className={styles.container} aria-hidden="true">
      <motion.div
        className={styles.spotlight}
        style={{
          x: springX,
          y: springY,
        }}
      />
      <div className={styles.blob1} />
      <div className={styles.blob2} />
    </div>
  );
}
