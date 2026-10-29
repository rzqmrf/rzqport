'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="wrap">
      <div className={styles.grid}>
        <motion.div
          className={styles.photo}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/hero.jpg"
            alt="Muhammad Rozaq Ma'ruf"
            fill
            priority
            sizes="(max-width: 860px) 100vw, 400px"
            style={{
              objectFit: 'cover',
            }}
          />
        </motion.div>

        <div className={styles.story}>
          <div className="eyebrow">{t.about.eyebrow}</div>
          <motion.h1
            className={styles.lead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.about.leadBefore}
            <span className={styles.serif}>{t.about.leadSerif}</span>
            {t.about.leadAfter}
          </motion.h1>

          <motion.div
            className={styles.body}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </motion.div>

          <motion.div
            className={styles.interests}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.about.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            className={styles.signatureSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className={styles.handwrittenNote}>{t.about.handwrittenNote}</p>
            <div className={styles.signatureWrapper} aria-hidden="true">
              <svg viewBox="0 0 200 100" width="100%" height="100%">
                <motion.path
                  d="M 75,30 C 65,22 55,25 55,42 L 55,78 M 55,45 C 55,30 65,10 75,10 C 85,10 82,32 75,45 C 68,58 55,48 55,48 C 55,48 62,38 72,40 C 82,42 78,54 86,40 C 90,32 94,48 98,40"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0.4, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 25,82 L 175,32"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 1.6, ease: 'easeOut' }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
