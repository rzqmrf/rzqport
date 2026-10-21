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
    desc: 'Logistics dashboard designed for PT ILCS to monitor dispatch schedules and cargo fleet movements in real-time.',
    tech: ['Figma', 'Laravel', 'Tailwind', 'MySQL'],
    image: '/tanosss.png',
    link: '/work/tanos-erp',
  },
  {
    id: 'manfince',
    num: '02',
    title: 'Manfince',
    category: 'Web App',
    desc: 'Modern personal finance & budget management web app featuring expense tracking, recurring bills, automated split-bill calculator, and savings target allocations.',
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'Lucide'],
    image: '/manfince.svg',
    link: 'https://github.com/rzqmrf/Manfince',
  },
  {
    id: 'flixora',
    num: '03',
    title: 'Flixora',
    category: 'Web App',
    desc: 'Netflix-inspired movie streaming platform featuring TMDB catalog integration, genre filtering, custom video player (WatchPlayer), watchlist, and multi-profile accounts.',
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'TMDB API'],
    image: '/flixora.svg',
    link: 'https://github.com/rzqmrf/Flixora',
  },
  {
    id: 'e-reserv',
    num: '04',
    title: 'E-Reserv',
    category: 'Web App',
    desc: 'An integrated digital platform for sports field reservations connecting tenants and managers via a Flutter app & Laravel admin panel.',
    tech: ['Flutter', 'Laravel 12', 'MySQL', 'Midtrans'],
    image: '/ereserv.png',
    link: '/work/e-reserv',
  },
  {
    id: 'sistem-kasir',
    num: '05',
    title: 'Sistem Kasir (POS)',
    category: 'Enterprise',
    desc: 'Comprehensive Point of Sale (POS) cashier application built with Laravel and Inertia.js React, featuring product inventory control, real-time sales transactions, and reporting.',
    tech: ['Laravel', 'Inertia.js', 'React', 'Tailwind CSS', 'Vite'],
    image: '/sistem-kasir.svg',
    link: 'https://github.com/rzqmrf/Sistem-Kasir',
  },
  {
    id: 'stylebarber',
    num: '06',
    title: 'StyleBarber',
    category: 'Web App',
    desc: 'Barbershop digital reservation and queue booking management web application backed by Prisma ORM and React 19.',
    tech: ['Next.js', 'React 19', 'Prisma ORM', 'Tailwind CSS'],
    image: '/stylebarber.svg',
    link: 'https://github.com/rzqmrf/StyleBarber',
  },
  {
    id: 'balang',
    num: '07',
    title: 'BALANG',
    category: 'Mobile',
    desc: 'A crowd-sourced mobile application built with Flutter to report, verify, and map lost & found items in Indonesian neighborhoods using geolocation.',
    tech: ['Flutter', 'Firebase', 'Figma'],
    image: '/balang.png',
    link: '/work/balang',
  },
  {
    id: 'iot-toren',
    num: '08',
    title: 'Monitoring Toren',
    category: 'IoT',
    desc: 'An IoT dashboard and hardware system utilizing ultrasonic sensors to monitor water tower levels, trigger automated pumps, and log real-time consumption data.',
    tech: ['Arduino', 'ESP8266', 'PHP Native', 'MySQL', 'Bootstrap'],
    image: '/dashboard.png',
    link: '/work/iot-toren',
  },
  {
    id: 'focusly',
    num: '09',
    title: 'Focusly',
    category: 'Web App',
    desc: 'A modern, interactive task management web application featuring dark/light mode toggles, automated progress bars, and local storage persistence.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    image: '/focusly.png',
    link: '/work/focusly',
  },
  {
    id: 'travelbudget',
    num: '10',
    title: 'Travelbudget',
    category: 'Web App',
    desc: 'Travel expense estimator and trip budget planner web app equipped with automated itinerary expense calculations and PDF export reports.',
    tech: ['Laravel 13', 'PHP 8.3', 'Blade', 'DomPDF'],
    image: '/travelbudget.svg',
    link: 'https://github.com/rzqmrf/Travelbudget',
  },
];

const categories = ['All', 'Enterprise', 'Web App', 'Mobile', 'IoT'];

export default function WorkPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
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

            <div className={styles.filters}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                >
                  {cat === 'All' ? t.work.allCategory : cat}
                </button>
              ))}
            </div>
          </header>

          <div className={styles.list}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const localizedDesc = t.work.projects[project.id]?.desc || project.desc;

                return (
                  <motion.div
                    key={project.id}
                    className={styles.row}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={styles.rowImg}>
                      {project.image && (
                        <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                      )}
                    </div>
                    <div className={styles.rowBody}>
                      <div className={styles.rowMeta}>
                        <span className={styles.num}>{project.num}</span>
                        <span className={styles.cat}>{project.category}</span>
                      </div>
                      <h3 className={styles.rowTitle}>{project.title}</h3>
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
                  </motion.div>
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
