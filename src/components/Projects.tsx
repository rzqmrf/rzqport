'use client';
import { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Projects.module.css';

export interface ProjectData {
  id: string;
  num: string;
  title: string;
  catKey: string;
  tech: string[];
  image: string;
  link: string;
  featuredLead?: boolean;
}

const featuredProjects: ProjectData[] = [
  {
    id: 'tanos-erp',
    num: '01',
    title: 'Tanos ERP',
    catKey: 'Enterprise',
    tech: ['Figma', 'Laravel', 'Tailwind CSS', 'MySQL'],
    image: '/tanosss.png',
    link: '/work/tanos-erp',
    featuredLead: true,
  },
  {
    id: 'e-reserv',
    num: '02',
    title: 'E-Reserv',
    catKey: 'Web App',
    tech: ['Flutter', 'Laravel 12', 'MySQL', 'Midtrans'],
    image: '/ereserv.png',
    link: '/work/e-reserv',
  },
  {
    id: 'balang',
    num: '03',
    title: 'BALANG',
    catKey: 'Mobile',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    image: '/balang.png',
    link: '/work/balang',
  },
];

function TiltCard({
  project,
  desc,
  catLabel,
  viewLabel,
}: {
  project: ProjectData;
  desc: string;
  catLabel: string;
  viewLabel: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(900px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.matchMedia('(hover: none)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = project.featuredLead ? 2.5 : 4;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <motion.article
      ref={cardRef}
      className={`${styles.card} ${project.featuredLead ? styles.cardLead : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={project.link} className={styles.cardImage} aria-label={project.title}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={
            project.featuredLead
              ? '(max-width: 860px) 100vw, 680px'
              : '(max-width: 860px) 100vw, 540px'
          }
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.cardOverlay}>
          <span className={styles.cardNum}>{project.num}</span>
        </div>
      </Link>

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <span className={styles.cardCat}>{catLabel}</span>
          <h3 className={styles.cardTitle}>
            <Link href={project.link}>{project.title}</Link>
          </h3>
        </div>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardFooter}>
          <div className={styles.tags}>
            {project.tech.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
          <Link href={project.link} className={styles.cardLink}>
            {viewLabel}
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="featured" className="wrap" style={{ scrollMarginTop: '88px' }}>
      <div className="section-head">
        <div className="eyebrow">{t.featured.eyebrow}</div>
        <h2 className="section-title">
          {t.featured.title}{' '}
          <span className="section-title-serif">{t.featured.titleSerif}</span>.
        </h2>
        <p className="section-note">{t.featured.note}</p>
      </div>

      <div className={styles.grid}>
        {featuredProjects.map((p) => (
          <TiltCard
            key={p.id}
            project={p}
            desc={t.work.projects[p.id]?.desc || ''}
            catLabel={t.work.categories[p.catKey] || p.catKey}
            viewLabel={t.featured.viewCase}
          />
        ))}
      </div>

      <div className={styles.allProjectsWrapper}>
        <Link href="/work" className="btn btn--outline">
          {t.featured.exploreAll}
        </Link>
      </div>
    </section>
  );
}
