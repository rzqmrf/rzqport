export type Language = 'en' | 'id';

export interface Translations {
  nav: {
    home: string;
    work: string;
    about: string;
    contact: string;
    resume: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    resumeBtn: string;
    contactBtn: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    items: {
      period: string;
      role: string;
      company: string;
      desc: string;
    }[];
  };
  work: {
    eyebrow: string;
    title: string;
    titleSerif: string;
    subtitle: string;
    allCategory: string;
    caseStudyBtn: string;
    githubBtn: string;
    comingSoon: string;
    projects: Record<string, { desc: string }>;
  };
  footer: {
    designedBuilt: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'HOME',
      work: 'WORK',
      about: 'ABOUT',
      contact: 'CONTACT',
      resume: 'resume',
    },
    hero: {
      badge: 'Available for freelance & full-time roles',
      subtitle: 'UI/UX Designer & Full-Stack Developer crafting intuitive, high-performance digital experiences.',
      resumeBtn: 'Resume ↗',
      contactBtn: 'Get in touch',
    },
    experience: {
      eyebrow: 'Experience',
      title: "Where I've been.",
      items: [
        {
          period: 'June 2026 — Present',
          role: 'UI/UX Design Intern',
          company: 'Pelindo Solusi Digital (PSD)',
          desc: 'Redesigning enterprise logistics dashboards (Tanos ERP) for port freight coordination — from user research to hi-fi prototypes shipped in production.',
        },
        {
          period: 'August 2024 — Present',
          role: 'Informatics Engineering Student',
          company: 'Electronic Engineering Polytechnic Institute of Surabaya (PENS)',
          desc: 'Studying software engineering, database systems, HCI, and building various academic and real-world projects in web, mobile & IoT.',
        },
      ],
    },
    work: {
      eyebrow: 'Index of Projects',
      title: 'All',
      titleSerif: 'work',
      subtitle: 'Design files, prototypes, and applications built to solve real problems.',
      allCategory: 'All',
      caseStudyBtn: 'Case study →',
      githubBtn: 'GitHub ↗',
      comingSoon: 'Coming soon',
      projects: {
        'tanos-erp': {
          desc: 'Logistics dashboard designed for PT ILCS to monitor dispatch schedules and cargo fleet movements in real-time.',
        },
        'manfince': {
          desc: 'Modern personal finance & budget management web app featuring expense tracking, recurring bills, automated split-bill calculator, and savings target allocations.',
        },
        'flixora': {
          desc: 'Netflix-inspired movie streaming platform featuring TMDB catalog integration, genre filtering, custom video player (WatchPlayer), watchlist, and multi-profile accounts.',
        },
        'e-reserv': {
          desc: 'An integrated digital platform for sports field reservations connecting tenants and managers via a Flutter app & Laravel admin panel.',
        },
        'sistem-kasir': {
          desc: 'Comprehensive Point of Sale (POS) cashier application built with Laravel and Inertia.js React, featuring product inventory control, real-time sales transactions, and reporting.',
        },
        'stylebarber': {
          desc: 'Barbershop digital reservation and queue booking management web application backed by Prisma ORM and React 19.',
        },
        'balang': {
          desc: 'A crowd-sourced mobile application built with Flutter to report, verify, and map lost & found items in Indonesian neighborhoods using geolocation.',
        },
        'iot-toren': {
          desc: 'An IoT dashboard and hardware system utilizing ultrasonic sensors to monitor water tower levels, trigger automated pumps, and log real-time consumption data.',
        },
        'focusly': {
          desc: 'A modern, interactive task management web application featuring dark/light mode toggles, automated progress bars, and local storage persistence.',
        },
        'travelbudget': {
          desc: 'Travel expense estimator and trip budget planner web app equipped with automated itinerary expense calculations and PDF export reports.',
        },
      },
    },
    footer: {
      designedBuilt: 'Designed & built from scratch',
    },
  },
  id: {
    nav: {
      home: 'BERANDA',
      work: 'KARYA',
      about: 'TENTANG',
      contact: 'KONTAK',
      resume: 'resume',
    },
    hero: {
      badge: 'Tersedia untuk proyek freelance & kerja penuh waktu',
      subtitle: 'UI/UX Designer & Full-Stack Developer yang merancang pengalaman digital intuitif dan berkinerja tinggi.',
      resumeBtn: 'Resume ↗',
      contactBtn: 'Hubungi Saya',
    },
    experience: {
      eyebrow: 'Pengalaman',
      title: 'Perjalanan Karir & Studi.',
      items: [
        {
          period: 'Juni 2026 — Sekarang',
          role: 'UI/UX Design Intern',
          company: 'Pelindo Solusi Digital (PSD)',
          desc: 'Mendesain ulang dashboard logistik enterprise (Tanos ERP) untuk koordinasi kargo pelabuhan — mulai dari riset pengguna hingga prototipe hi-fi produksi.',
        },
        {
          period: 'Agustus 2024 — Sekarang',
          role: 'Mahasiswa Teknik Informatika',
          company: 'Politeknik Elektronika Negeri Surabaya (PENS)',
          desc: 'Mempelajari rekayasa perangkat lunak, sistem basis data, interaksi manusia & komputer, serta membangun berbagai proyek web, mobile & IoT.',
        },
      ],
    },
    work: {
      eyebrow: 'Indeks Proyek',
      title: 'Semua',
      titleSerif: 'karya',
      subtitle: 'Koleksi desain, prototipe, dan aplikasi yang dibangun untuk memecahkan masalah nyata.',
      allCategory: 'Semua',
      caseStudyBtn: 'Studi kasus →',
      githubBtn: 'GitHub ↗',
      comingSoon: 'Segera hadir',
      projects: {
        'tanos-erp': {
          desc: 'Dashboard logistik terpadu yang dirancang untuk PT ILCS memantau jadwal armada dan pergerakan kargo secara real-time.',
        },
        'manfince': {
          desc: 'Aplikasi manajemen finansial pribadi modern untuk pelacakan transaksi harian, tagihan rutin, kalkulator split-bill, dan alokasi tabungan.',
        },
        'flixora': {
          desc: 'Platform streaming film interaktif terinspirasi Netflix dengan integrasi katalog TMDB, pemutar video custom (WatchPlayer), watchlist, dan multi-profil.',
        },
        'e-reserv': {
          desc: 'Platform reservasi lapangan olahraga digital yang menghubungkan penyewa dan pengelola melalui aplikasi Flutter dan admin panel Laravel.',
        },
        'sistem-kasir': {
          desc: 'Aplikasi kasir (Point of Sale) modern berbasis Laravel dan Inertia.js React dengan kontrol inventaris produk dan riwayat transaksi penjualan.',
        },
        'stylebarber': {
          desc: 'Sistem reservasi dan antrean potong rambut barbershop digital dengan manajemen basis data Prisma ORM dan antarmuka React 19.',
        },
        'balang': {
          desc: 'Aplikasi mobile crowd-sourced berbasis Flutter untuk melaporkan, memverifikasi, dan memetakan barang hilang/ditemukan berbasis geolokasi.',
        },
        'iot-toren': {
          desc: 'Sistem IoT dan dashboard pemantau level air toren otomatis menggunakan sensor ultrasonik ESP8266 dan rekap data konsumsi harian.',
        },
        'focusly': {
          desc: 'Aplikasi manajemen tugas produktivitas interaktif dengan toggle tema gelap/terang, progress bar otomatis, dan penyimpanan lokal.',
        },
        'travelbudget': {
          desc: 'Aplikasi perencana dan kalkulator anggaran liburan yang dilengkapi estimasi biaya rencana perjalanan otomatis serta ekspor laporan PDF.',
        },
      },
    },
    footer: {
      designedBuilt: 'Dirancang & dibangun dari nol',
    },
  },
};
