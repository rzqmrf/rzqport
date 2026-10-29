'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WorkspaceMap.module.css';

const DESK_KEYS = [
  { id: 'monitor', className: styles.monitor },
  { id: 'laptop', className: styles.laptop },
  { id: 'keyboard', className: styles.keyboard },
  { id: 'mouse', className: styles.mouse },
  { id: 'notebook', className: styles.notebook },
  { id: 'coffee', className: styles.coffee },
] as const;

export default function WorkspaceMap() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeItem = activeId ? t.workspace.items[activeId] : null;

  return (
    <section className={`${styles.section} wrap`}>
      <div className="section-head">
        <div className="eyebrow">{t.workspace.eyebrow}</div>
        <h2 className="section-title">
          {t.workspace.title}{' '}
          <span className="section-title-serif">{t.workspace.titleSerif}</span>.
        </h2>
        <p className="section-note">{t.workspace.note}</p>
      </div>

      <div className={styles.blueprintShell}>
        <div className={styles.mapContainer}>
          <div className={styles.desk}>
            {DESK_KEYS.map((item) => {
              const translated = t.workspace.items[item.id];
              const isSelected = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.deskItem} ${item.className} ${isSelected ? styles.deskItemActive : ''}`}
                  aria-pressed={isSelected}
                  aria-label={translated.name}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setActiveId((prev) => (prev === item.id ? null : item.id))}
                >
                  <span className={styles.label}>{translated.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.readoutBar} aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId ?? 'default'}
              className={styles.readoutContent}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
            >
              <h3 className={styles.tooltipTitle}>
                {activeItem ? activeItem.name : t.workspace.inspectTitle}
              </h3>
              <p className={styles.tooltipDesc}>
                {activeItem ? activeItem.desc : t.workspace.inspectDefault}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
