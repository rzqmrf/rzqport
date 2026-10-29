'use client';
import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Contact.module.css';

const contactLinks = [
  {
    num: '01',
    label: 'Email',
    value: 'rozaqmaruf06@gmail.com',
    href: 'mailto:rozaqmaruf06@gmail.com',
    isEmail: true,
  },
  {
    num: '02',
    label: 'LinkedIn',
    value: "Muhammad Rozaq Ma'ruf",
    href: 'https://www.linkedin.com/in/muhammad-rozaq-ma-ruf-59a88033b',
  },
  {
    num: '03',
    label: 'GitHub',
    value: 'rzqmrf',
    href: 'https://github.com/rzqmrf',
  },
  {
    num: '04',
    label: 'Instagram',
    value: '@rozaq.mrf',
    href: 'https://www.instagram.com/rozaq.mrf',
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'error' | 'sent'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('rozaqmaruf06@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setFormState('error');
      return;
    }
    setFormState('sent');
    const mailSubject = encodeURIComponent(
      subject.trim() ? `${subject.trim()} — from ${name.trim()}` : `Portfolio Inquiry from ${name.trim()}`
    );
    const mailBody = encodeURIComponent(`Hi Rozaq,\n\n${message.trim()}\n\nBest regards,\n${name.trim()}`);
    window.location.href = `mailto:rozaqmaruf06@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h1 className={styles.headline}>
            {t.contact.headline}
            <br />
            <span className={styles.serif}>{t.contact.headlineSerif}</span>
          </h1>
          <p className={styles.subtitle}>{t.contact.subtitle}</p>
        </div>

        <div className={styles.list}>
          {contactLinks.map((link, idx) =>
            link.isEmail ? (
              <motion.div
                key={link.label}
                className={styles.row}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.rowLeft}>
                  <span className={styles.num}>{link.num}</span>
                  <span className={styles.label}>{link.label}</span>
                </div>
                <div className={styles.rowRight}>
                  <a href={link.href} className={styles.valueLink}>
                    <span className={styles.value}>{link.value}</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={styles.copyBtn}
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? t.contact.copiedBtn : t.contact.copyBtn}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.row}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.rowLeft}>
                  <span className={styles.num}>{link.num}</span>
                  <span className={styles.label}>{link.label}</span>
                </div>
                <div className={styles.rowRight}>
                  <span className={styles.value}>{link.value}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </div>
              </motion.a>
            )
          )}
        </div>

        <div className={styles.formBlock}>
          <div className={styles.formIntro}>
            <div className="eyebrow">{t.contact.formEyebrow}</div>
            <h2 className={styles.formTitle}>{t.contact.formTitle}</h2>
            <p className={styles.formDesc}>{t.contact.formDesc}</p>
          </div>

          <form className={styles.form} onSubmit={handleComposeSubmit} noValidate>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.fieldLabel}>
                  {t.contact.nameLabel} *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (formState !== 'idle') setFormState('idle');
                  }}
                  placeholder={t.contact.namePlaceholder}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-subject" className={styles.fieldLabel}>
                  {t.contact.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t.contact.subjectPlaceholder}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.fieldLabel}>
                {t.contact.messageLabel} *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (formState !== 'idle') setFormState('idle');
                }}
                placeholder={t.contact.messagePlaceholder}
                className={styles.textarea}
                required
              />
            </div>

            {formState === 'error' && (
              <p className={styles.formFeedbackError} role="alert">
                {t.contact.validationError}
              </p>
            )}
            {formState === 'sent' && (
              <p className={styles.formFeedbackSuccess} aria-live="polite">
                {t.contact.sentFeedback}
              </p>
            )}

            <div className={styles.formActions}>
              <button type="submit" className="btn btn--fill">
                {t.contact.sendBtn}
              </button>
            </div>
          </form>
        </div>

        <AnimatePresence>
          {copied && (
            <motion.div
              className={styles.toast}
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {t.contact.toastMsg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
