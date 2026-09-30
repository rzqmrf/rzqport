'use client';
import { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

export interface ProjectData {
  num: string;
  title: string;
  cat: string;
  desc: string;
  tech: string[];
  image: string;
  link: string;
}

const featuredProjects: ProjectData[] = [
  {
    num: '01',
    title: 'Tanos ERP',
    cat: 'Enterprise',
    desc: 'Logistics dashboard designed for PT ILCS to monitor dispatch schedules and cargo fleet movements in real-time.',
    tech: ['Figma', 'Laravel', 'Tailwind', 'MySQL'],
    image: '/tanosss.png',
    link: '/work/tanos-erp',
  },
  {
    num: '02',
    title: 'E-Reserv',
    cat: 'Web App',
    desc: 'An integrated digital platform for sports field reservations connecting tenants and managers with slot automation.',
    tech: ['Flutter', 'Laravel 12', 'MySQL', 'Midtrans'],
    image: '/ereserv.png',
    link: '/work/e-reserv',
  },
  {
    num: '03',
    title: 'BALANG',
    cat: 'Mobile UX',
    desc: 'Community crowd-sourced mobile app built with Flutter to report, verify, and map lost & found items.',
    tech: ['Flutter', 'Firebase', 'Figma'],
    image: '/balang.png',
    link: '/work/balang',
  },
];

function TiltCard({ project }: { project: ProjectData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.matchMedia('(hover: none)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.cardImage}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.cardOverlay}>
          <span className={styles.cardNum}>{project.num}</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={styles.cardCat}>{project.cat}</span>
        </div>
        <p className={styles.cardDesc}>{project.desc}</p>
        <div className={styles.cardFooter}>
          <div className={styles.tags}>
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          {project.link !== '#' && (
            <Link href={project.link} className={styles.cardLink}>
              View case →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="featured" className="wrap" style={{ scrollMarginTop: '100px' }}>
      <div className="section-head">
        <div className="eyebrow">Selected Work</div>
        <h2 className="section-title">Featured projects.</h2>
        <p className="section-note">
          A selection of enterprise dashboards, mobile applications, and web platforms built to solve real-world problems.
        </p>
      </div>

      <div className={styles.grid}>
        {featuredProjects.map((p) => (
          <TiltCard key={p.num} project={p} />
        ))}
      </div>

      <div className={styles.allProjectsWrapper}>
        <Link href="/work" className="btn btn--outline">
          Explore all projects & case studies →
        </Link>
      </div>
    </section>
  );
}
