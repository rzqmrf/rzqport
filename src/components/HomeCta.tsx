'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './HomeCta.module.css';

export default function HomeCta() {
  return (
    <section className={`${styles.ctaSection} wrap`}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.glow} />
        <div className={styles.eyebrow}>Let's Collaborate</div>
        <h2 className={styles.title}>
          Have an idea or a project in mind? Let's build something <span className={styles.serif}>remarkable.</span>
        </h2>
        <p className={styles.desc}>
          Whether you need a full product design, a high-converting web platform, or full-stack engineering support — I'm open for conversations.
        </p>
        <div className={styles.buttons}>
          <Link href="/contact" className="btn btn--fill">
            Start a conversation →
          </Link>
          <a
            href="mailto:rozaqmaruf06@gmail.com"
            className="btn btn--outline"
          >
            rozaqmaruf06@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
