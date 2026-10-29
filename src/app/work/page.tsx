'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WorkPage.module.css';

const PROJECTS_DATA = [
  {
    id: 'tanos-erp',
    num: '01',
    title: 'Tanos ERP',
    category: 'Enterprise',
    tech: ['Figma', 'Laravel', 'Tailwind CSS', 'MySQL'],
    image: '/tanosss.png',
    link: '/work/tanos-erp',
  },
  {
    id: 'manfince',
    num: '02',
    title: 'Manfince',
    category: 'Web App',
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'TypeScript'],
    image: '/manfince.svg',
    link: 'https://github.com/rzqmrf/Manfince',
  },
  {
    id: 'flixora',
    num: '03',
    title: 'Flixora',
    category: 'Web App',
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'TMDB API'],
    image: '/flixora.svg',
    link: 'https://github.com/rzqmrf/Flixora',
  },
  {
    id: 'e-reserv',
    num: '04',
    title: 'E-Reserv',
    category: 'Web App',
    tech: ['Flutter', 'Laravel 12', 'MySQL', 'Midtrans'],
    image: '/ereserv.png',
    link: '/work/e-reserv',
  },
  {
    id: 'sistem-kasir',
    num: '05',
    title: 'Sistem Kasir (POS)',
    category: 'Enterprise',
    tech: ['Laravel', 'Inertia.js', 'React', 'Tailwind CSS', 'Vite'],
    image: '/sistem-kasir.svg',
    link: 'https://github.com/rzqmrf/Sistem-Kasir',
  },
  {
    id: 'stylebarber',
    num: '06',
    title: 'StyleBarber',
    category: 'Web App',
    tech: ['Next.js', 'React 19', 'Prisma ORM', 'Tailwind CSS'],
    image: '/stylebarber.svg',
    link: 'https://github.com/rzqmrf/StyleBarber',
  },
  {
    id: 'balang',
    num: '07',
    title: 'BALANG',
    category: 'Mobile',
    tech: ['Flutter', 'Firebase', 'Figma'],
    image: '/balang.png',
    link: '/work/balang',
  },
  {
    id: 'iot-toren',
    num: '08',
    title: 'Monitoring Toren',
    category: 'IoT',
    tech: ['Arduino', 'ESP8266', 'PHP Native', 'MySQL', 'Bootstrap'],
    image: '/dashboard.png',
    link: '/work/iot-toren',
  },
  {
    id: 'focusly',
    num: '09',
    title: 'Focusly',
    category: 'Web App',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    image: '/focusly.png',
    link: '/work/focusly',
  },
  {
    id: 'travelbudget',
    num: '10',
    title: 'Travelbudget',
    category: 'Web App',
    tech: ['Laravel 13', 'PHP 8.3', 'Blade', 'DomPDF'],
    image: '/travelbudget.svg',
    link: 'https://github.com/rzqmrf/Travelbudget',
  },
];

const categories = ['All', 'Enterprise', 'Web App', 'Mobile', 'IoT'];

export default function WorkPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className="wrap">
          <header className={styles.header}>
            <div className="eyebrow">{t.work.eyebrow}</div>
            <h1 className={styles.title}>
              {t.work.title} <span className={styles.serif}>{t.work.titleSerif}</span>.
            </h1>
            <p className={styles.subtitle}>{t.work.subtitle}</p>

            <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                >
                  {t.work.categories[cat] || cat}
                </button>
              ))}
            </div>
          </header>

          <div className={styles.list}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const localizedDesc = t.work.projects[project.id]?.desc || '';
                const localizedCat = t.work.categories[project.category] || project.category;

                return (
                  <motion.article
                    key={project.id}
                    className={styles.row}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.04, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={styles.rowImg}>
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 860px) 220px, 160px"
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div className={styles.rowBody}>
                      <div className={styles.rowMeta}>
                        <span className={styles.num}>{project.num}</span>
                        <span className={styles.cat}>{localizedCat}</span>
                      </div>
                      <h2 className={styles.rowTitle}>{project.title}</h2>
                      <p className={styles.rowDesc}>{localizedDesc}</p>
                      <div className={styles.tags}>
                        {project.tech.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.rowAction}>
                      {project.link !== '#' ? (
                        <Link
                          href={project.link}
                          className="btn btn--outline"
                          {...(project.link.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {project.link.startsWith('http') ? t.work.githubBtn : t.work.caseStudyBtn}
                        </Link>
                      ) : (
                        <span className={styles.coming}>{t.work.comingSoon}</span>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
