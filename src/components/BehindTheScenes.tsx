'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useMediaQuery } from '@/lib/clientStore';
import styles from './BehindTheScenes.module.css';

const PHOTO_ASSETS = [
  { src: '/photo-beach.jpg', aspect: '16/10', position: 'center 85%' },
  { src: '/photo-campus.jpg', aspect: '3/4', position: 'center' },
  { src: '/photo-hiking.jpg', aspect: '1/1', position: 'center' },
  { src: '/photo-river.jpg', aspect: '4/3', position: 'center 95%' },
  { src: '/photo-code.jpg', aspect: '16/10', position: 'center' },
  { src: '/photo-class.jpg', aspect: '3/4', position: 'center' },
  { src: '/photo-futsal.jpg', aspect: '1/1', position: 'center' },
  { src: '/photo-mall.jpg', aspect: '3/4', position: 'center' },
];

function GalleryCell({
  asset,
  caption,
  index,
  isHoverable,
  onClick,
}: {
  asset: (typeof PHOTO_ASSETS)[0];
  caption: string;
  index: number;
  isHoverable: boolean;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isHoverable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type="button"
      ref={cardRef}
      className={styles.cell}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      aria-label={caption}
      initial={{ opacity: 0, y: 50, scale: 0.94, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 18,
        delay: index * 0.045,
      }}
      style={{
        aspectRatio: asset.aspect,
        rotateX: isHoverable ? rotateX : 0,
        rotateY: isHoverable ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <Image
        src={asset.src}
        alt={caption}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        style={{
          objectFit: 'cover',
          objectPosition: asset.position,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div
        className={styles.overlay}
        style={{
          transform: isHoverable ? 'translateZ(10px)' : 'none',
          transformStyle: 'preserve-3d',
          opacity: isHoverable ? undefined : 1,
        }}
      >
        <span
          className={styles.caption}
          style={{ transform: isHoverable ? 'translateZ(25px)' : 'none' }}
        >
          {caption}
        </span>
      </div>
    </motion.button>
  );
}

export default function BehindTheScenes() {
  const { t } = useLanguage();
  const isHoverable = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % PHOTO_ASSETS.length));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + PHOTO_ASSETS.length) % PHOTO_ASSETS.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex]);

  const selectedAsset = selectedIndex !== null ? PHOTO_ASSETS[selectedIndex] : null;
  const selectedText = selectedIndex !== null ? t.gallery.items[selectedIndex] : null;

  return (
    <section id="gallery" className="wrap">
      <div className="section-head">
        <div className="eyebrow">{t.gallery.eyebrow}</div>
        <h2 className="section-title">
          {t.gallery.title}{' '}
          <span className={styles.serif}>{t.gallery.titleSerif}</span>.
        </h2>
        <p className="section-note">{t.gallery.note}</p>
      </div>

      <div className={styles.masonry}>
        {PHOTO_ASSETS.map((asset, i) => {
          const itemText = t.gallery.items[i] || { caption: '', story: '' };
          return (
            <GalleryCell
              key={asset.src}
              asset={asset}
              caption={itemText.caption}
              index={i}
              isHoverable={isHoverable}
              onClick={() => setSelectedIndex(i)}
            />
          );
        })}
      </div>

      <AnimatePresence>
        {selectedAsset && selectedText && (
          <motion.div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={selectedText.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setSelectedIndex(null)}
                aria-label={t.gallery.closeLabel}
              >
                ×
              </button>
              <div className={styles.lightboxImageWrapper}>
                <Image
                  src={selectedAsset.src}
                  alt={selectedText.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  style={{ objectFit: 'cover', objectPosition: selectedAsset.position }}
                />
              </div>
              <div className={styles.lightboxInfo}>
                <span className="eyebrow">{t.gallery.photoStory}</span>
                <h3 className={styles.lightboxCaption}>{selectedText.caption}</h3>
                <p className={styles.lightboxStory}>{selectedText.story}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
