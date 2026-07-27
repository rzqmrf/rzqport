'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  vx: number;
  vy: number;
}

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Smooth trailing spring for the outer ring
  const springX = useSpring(x, { damping: 30, stiffness: 220, mass: 0.6 });
  const springY = useSpring(y, { damping: 30, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to fit viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle generator on cursor move
    const addParticles = (mx: number, my: number) => {
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x: mx,
          y: my,
          size: Math.random() * 2 + 1.2, // particle size
          color: '139, 92, 246', // purple accent color in rgb
          alpha: 0.8,
          decay: Math.random() * 0.02 + 0.015, // decay rate
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.4, // float slightly upward
        });
      }
    };

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      
      // Spawn trail particles
      addParticles(e.clientX, e.clientY);
    };

    const leave = () => setVisible(false);
    const enter = () => setHovered(true);
    const exit = () => setHovered(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);

    const bind = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', exit);
      });
    };

    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    // Animation render loop
    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

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
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      obs.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [mounted, x, y, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Canvas for the trailing glowing particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 99998,
        }}
      />
      {/* Tiny solid dot moving instantly */}
      <motion.div
        className={`${styles.dot} ${hovered ? styles.dotActive : ''}`}
        style={{ left: x, top: y }}
      />
      {/* Large trailing ring with spring damping physics */}
      <motion.div
        className={`${styles.ring} ${hovered ? styles.ringActive : ''}`}
        style={{ left: springX, top: springY }}
      />
    </>
  );
}
