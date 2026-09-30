'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Contact.module.css';

const contactLinks = [
  { num: '01', label: 'Email', value: 'rozaqmaruf06@gmail.com', href: 'mailto:rozaqmaruf06@gmail.com', isEmail: true },
  { num: '02', label: 'LinkedIn', value: 'Muhammad Rozaq Maruf', href: 'https://www.linkedin.com/in/muhammad-rozaq-ma-ruf-59a88033b?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { num: '03', label: 'GitHub', value: 'rzqmrf', href: 'https://github.com/rzqmrf' },
  { num: '04', label: 'Instagram', value: '@rozaq.mrf', href: 'https://www.instagram.com/rozaq.mrf?igsh=dHg0anl4dm0xcGJw' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('rozaqmaruf06@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="eyebrow">Get In Touch</div>
          <h2 className={styles.headline}>
            Let's create something<br />
            <span className={styles.serif}>memorable.</span>
          </h2>
        </div>

        <div className={styles.list}>
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={styles.row}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.rowLeft}>
                <span className={styles.num}>{link.num}</span>
                <span className={styles.label}>{link.label}</span>
              </div>
              <div className={styles.rowRight}>
                <span className={styles.value}>{link.value}</span>
                {link.isEmail ? (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={styles.copyBtn}
                    title="Copy email to clipboard"
                  >
                    {copied ? 'Copied ✓' : 'Copy 📋'}
                  </button>
                ) : (
                  <span className={styles.arrow}>→</span>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {copied && (
            <motion.div
              className={styles.toast}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              ✓ Email address copied to clipboard!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
