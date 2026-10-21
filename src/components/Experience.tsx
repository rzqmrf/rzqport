'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Experience.module.css';

const companyLogos = ['/psd.png', '/pens.png'];

export default function Experience() {
  const { t } = useLanguage();
  const [failedLogos, setFailedLogos] = useState<Record<number, boolean>>({});

  return (
    <section id="experience" className="wrap">
      <div className="section-head">
        <div className="eyebrow">{t.experience.eyebrow}</div>
        <h2 className="section-title">{t.experience.title}</h2>
      </div>

      <div className={styles.timeline}>
        {t.experience.items.map((item, i) => {
          const hasFailed = failedLogos[i];
          const logoSrc = companyLogos[i] || '/psd.png';

          return (
            <motion.div
              key={i}
              className={styles.row}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 15,
                delay: i * 0.12,
              }}
            >
              <div className={styles.left}>
                <div className={styles.logoFrame}>
                  {!hasFailed ? (
                    <Image
                      src={logoSrc}
                      alt={item.company}
                      fill
                      style={{ objectFit: 'contain' }}
                      onError={() => {
                        setFailedLogos((prev) => ({ ...prev, [i]: true }));
                      }}
                    />
                  ) : (
                    <span className={styles.logoFallback}>{item.company.charAt(0)}</span>
                  )}
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.roleRow}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <span className={styles.company}>{item.company}</span>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
