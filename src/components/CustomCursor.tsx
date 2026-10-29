'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useHydrated, useMediaQuery } from '@/lib/clientStore';
import styles from './CustomCursor.module.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  decay: number;
  vx: number;
  vy: number;
}

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select';

export default function CustomCursor() {
  const hydrated = useHydrated();
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { damping: 30, stiffness: 240, mass: 0.55 });
  const springY = useSpring(y, { damping: 30, stiffness: 240, mass: 0.55 });

  const enabled = hydrated && finePointer && !reducedMotion;

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const renderLoop = () => {
      if (!ctx || !canvas) {
        rafRef.current = null;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const rgb = isLight ? '109, 40, 217' : '139, 92, 246';

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.fill();
      }

      if (particles.length > 0) {
        rafRef.current = requestAnimationFrame(renderLoop);
      } else {
        rafRef.current = null;
      }
    };

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible((prev) => (prev ? prev : true));

      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 1.8 + 1.1,
        alpha: 0.65,
        decay: Math.random() * 0.025 + 0.02,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2 - 0.3,
      });

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(renderLoop);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setHovered(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', leave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        className={`${styles.dot} ${hovered ? styles.dotActive : ''}`}
        style={{ left: x, top: y, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className={`${styles.ring} ${hovered ? styles.ringActive : ''}`}
        style={{ left: springX, top: springY, opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
