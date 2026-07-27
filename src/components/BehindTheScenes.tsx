'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import styles from './BehindTheScenes.module.css';

const photos = [
  { 
    src: '/photo-beach.jpg', 
    caption: 'Sunset vibes', 
    aspect: '16/10', 
    position: 'center 85%',
    story: 'Recharging by the coast. I find that taking steps back to observe natural horizons helps clear design blockages and brings fresh perspectives to layout problems.'
  },
  { 
    src: '/photo-campus.jpg', 
    caption: 'Campus life', 
    aspect: '3/4', 
    position: 'center',
    story: 'Electronic Engineering Polytechnic Institute of Surabaya (EEPIS/PENS). Navigating informatics assignments, user discovery workshops, and collaborating on academic projects.'
  },
  { 
    src: '/photo-hiking.jpg', 
    caption: 'Exploring peaks', 
    aspect: '1/1', 
    position: 'center',
    story: 'Ascending high ridges in East Java. Hiking forces me to focus on step-by-step progress, a principle I apply daily when refactoring large codebase systems.'
  },
  { 
    src: '/photo-river.jpg', 
    caption: 'Chasing waterfalls', 
    aspect: '4/3', 
    position: 'center 95%',
    story: 'Seeking hidden rivers and waterfalls. The organic flow of water in nature serves as inspiration for creating fluid and natural motion transitions in user interfaces.'
  },
  { 
    src: '/photo-code.jpg', 
    caption: 'Late night code', 
    aspect: '16/10', 
    position: 'center',
    story: 'Writing React hooks, configuring SQL schemas, and tuning UI styles. Often accompanied by black coffee and low-fidelity chillhop beats.'
  },
  { 
    src: '/photo-class.jpg', 
    caption: 'Presenting ideas', 
    aspect: '3/4', 
    position: 'center',
    story: 'Sharing wireframes and project architectures during classroom pitches. Communication is key to explaining the value of design decisions to non-designers.'
  },
  { 
    src: '/photo-futsal.jpg', 
    caption: 'Game day', 
    aspect: '1/1', 
    position: 'center',
    story: 'A quick futsal match with college friends. Great for cardiovascular health, building strong team reflexes, and clearing design fatigue.'
  },
  { 
    src: '/photo-mall.jpg', 
    caption: 'Off duty', 
    aspect: '3/4', 
    position: 'center',
    story: 'Hanging out and exploring local spots. Stepping into urban spaces offers inspiration from physical signs, architecture, and interior design patterns.'
  },
];

function GalleryCell({ photo, index, onClick }: { photo: typeof photos[0]; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    setIsHoverable(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 180, damping: 20 });
  const imgScale = useSpring(1, { stiffness: 180, damping: 22 });

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isHoverable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
    imgScale.set(1.08);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    imgScale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.cell}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 60, scale: 0.92, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        type: "spring", 
        stiffness: 80, 
        damping: 18, 
        delay: index * 0.05 
      }}
      style={{ 
        aspectRatio: photo.aspect,
        rotateX: isHoverable ? rotateX : 0,
        rotateY: isHoverable ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <motion.img 
        src={photo.src} 
        alt={photo.caption} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          objectPosition: photo.position,
          scale: imgScale,
          transform: isHoverable ? 'translateZ(-15px)' : 'none',
          transition: 'filter 0.3s ease'
        }} 
      />
      <div 
        className={styles.overlay}
        style={{ 
          transform: isHoverable ? 'translateZ(10px)' : 'none', 
          transformStyle: 'preserve-3d',
          opacity: isHoverable ? undefined : 1
        }}
      >
        <span 
          className={styles.caption}
          style={{ transform: isHoverable ? 'translateZ(25px)' : 'none' }}
        >
          {photo.caption}
        </span>
      </div>
    </motion.div>
  );
}

export default function BehindTheScenes() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  // Disable main body scroll when modal lightbox is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhoto]);

  return (
    <section id="gallery" className="wrap">
      <div className="section-head">
        <div className="eyebrow">Behind the Scenes</div>
        <h2 className="section-title">
          Beyond the <span className={styles.serif}>pixels</span>.
        </h2>
        <p className="section-note">When I'm not pushing commits — hiking, exploring, or just vibing. Click any photo to see its story.</p>
      </div>

      <div className={styles.masonry}>
        {photos.map((photo, i) => (
          <GalleryCell key={photo.src} photo={photo} index={i} onClick={() => setSelectedPhoto(photo)} />
        ))}
      </div>

      {/* Lightbox Modal Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedPhoto(null)}>
                &times;
              </button>
              <div className={styles.lightboxImageWrapper}>
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className={styles.lightboxImg}
                />
              </div>
              <div className={styles.lightboxInfo}>
                <span className="eyebrow">Photo Story</span>
                <h3 className={styles.lightboxCaption}>{selectedPhoto.caption}</h3>
                <p className={styles.lightboxStory}>{selectedPhoto.story}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
