export type Language = 'en' | 'id';

export interface DeskItemTranslation {
  name: string;
  label: string;
  desc: string;
}

export interface GalleryPhotoTranslation {
  caption: string;
  story: string;
}

export interface Translations {
  nav: {
    home: string;
    work: string;
    about: string;
    contact: string;
    resume: string;
  };
  hero: {
    subtitle: string;
    exploreBtn: string;
    resumeBtn: string;
    contactBtn: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    titleSerif: string;
    note: string;
    viewCase: string;
    exploreAll: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    titleSerif: string;
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
    categories: Record<string, string>;
    caseStudyBtn: string;
    githubBtn: string;
    comingSoon: string;
    projects: Record<string, { desc: string }>;
  };
  about: {
    eyebrow: string;
    leadBefore: string;
    leadSerif: string;
    leadAfter: string;
    p1: string;
    p2: string;
    tags: string[];
    handwrittenNote: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    titleSerif: string;
    categories: {
      label: string;
      skills: string[];
    }[];
  };
  workspace: {
    eyebrow: string;
    title: string;
    titleSerif: string;
    note: string;
    inspectTitle: string;
    inspectDefault: string;
    items: Record<string, DeskItemTranslation>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    titleSerif: string;
    note: string;
    photoStory: string;
    closeLabel: string;
    items: GalleryPhotoTranslation[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    headlineSerif: string;
    subtitle: string;
    copyBtn: string;
    copiedBtn: string;
    toastMsg: string;
    formEyebrow: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    validationError: string;
    sentFeedback: string;
  };
  caseStudyUi: {
    backBtn: string;
    githubBtn: string;
    indexTitle: string;
    continueExploring: string;
    beforeLabel: string;
    afterLabel: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    titleSerif: string;
    desc: string;
    homeBtn: string;
    workBtn: string;
  };
  loader: {
    skip: string;
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
      subtitle: 'UI/UX Designer & Full-Stack Developer crafting intuitive, high-performance digital products.',
      exploreBtn: 'Selected Work ↓',
      resumeBtn: 'Resume ↗',
      contactBtn: 'Get in touch',
    },
    featured: {
      eyebrow: 'Selected Work',
      title: 'Featured',
      titleSerif: 'projects',
      note: 'Enterprise dashboards, mobile applications, and web platforms designed and engineered to solve real operational bottlenecks.',
      viewCase: 'Read case study →',
      exploreAll: 'View all 10 projects & case studies →',
    },
    experience: {
      eyebrow: 'Experience',
      title: "Where I've",
      titleSerif: 'been',
      items: [
        {
          period: 'June 2026 – Present',
          role: 'UI/UX Design Intern',
          company: 'Pelindo Solusi Digital (PSD) · Assigned to PT ILCS',
          desc: 'Redesigning enterprise logistics dashboards (Tanos ERP) for port freight coordination, spanning on-site user research, information architecture, and hi-fi Figma systems shipped to production.',
        },
        {
          period: 'August 2024 – Present',
          role: 'Informatics Engineering Student',
          company: 'Electronic Engineering Polytechnic Institute of Surabaya (PENS)',
          desc: 'Studying software engineering, relational databases, and human-computer interaction while building real-world applications across web, mobile, and IoT.',
        },
      ],
    },
    work: {
      eyebrow: 'Index of Projects',
      title: 'All',
      titleSerif: 'work',
      subtitle: 'Design systems, interactive prototypes, and full-stack applications built to solve real problems.',
      categories: {
        All: 'All',
        Enterprise: 'Enterprise',
        'Web App': 'Web App',
        Mobile: 'Mobile',
        IoT: 'IoT',
      },
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
          desc: 'Movie streaming web platform featuring TMDB catalog integration, genre filtering, custom WatchPlayer video controls, watchlist, and multi-profile accounts.',
        },
        'e-reserv': {
          desc: 'Integrated digital platform for sports field reservations connecting tenants and venue managers via a Flutter mobile app and Laravel 12 admin panel.',
        },
        'sistem-kasir': {
          desc: 'Point of Sale (POS) cashier application built with Laravel and Inertia.js React, featuring inventory control, real-time sales transactions, and reporting.',
        },
        'stylebarber': {
          desc: 'Barbershop digital reservation and queue management web application backed by Prisma ORM, Next.js, and React 19.',
        },
        'balang': {
          desc: 'Crowd-sourced mobile application built with Flutter to report, verify, and map lost & found items in Indonesian neighborhoods using geolocation.',
        },
        'iot-toren': {
          desc: 'IoT dashboard and hardware system utilizing ultrasonic sensors to monitor water tower levels, trigger automated alerts, and log consumption data.',
        },
        'focusly': {
          desc: 'Interactive task management web application featuring dark/light mode toggles, real-time completion progress bars, and local storage persistence.',
        },
        'travelbudget': {
          desc: 'Travel expense estimator and trip budget planner web app equipped with automated itinerary calculations and PDF report exports.',
        },
      },
    },
    about: {
      eyebrow: 'About',
      leadBefore: 'I care about the small decisions that make a product feel ',
      leadSerif: 'effortless',
      leadAfter: ' to use.',
      p1: 'I am a UI/UX Designer and Full-Stack Developer currently interning at Pelindo Solusi Digital (PSD), assigned to PT Integrasi Logistik Cipta Solusi (ILCS), where I lead enterprise dashboard redesigns from on-site user discovery and wireframes to production-ready interfaces.',
      p2: 'What drives my work is the intersection of design and engineering: understanding operational pain points deeply enough to shape clear interfaces, then bringing them to life with clean, maintainable code. I am currently pursuing Informatics Engineering at Electronic Engineering Polytechnic Institute of Surabaya (PENS).',
      tags: ['UI/UX Design', 'Full-Stack Dev', 'Design Systems', 'Product Architecture'],
      handwrittenNote: '"Thanks for stopping by! Let\'s build something remarkable together."',
    },
    skills: {
      eyebrow: 'Toolkit',
      title: 'What I work',
      titleSerif: 'with',
      categories: [
        {
          label: 'Design',
          skills: ['Figma', 'Design Systems', 'Wireframing', 'Interactive Prototyping', 'User Research', 'Information Architecture'],
        },
        {
          label: 'Frontend',
          skills: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5 / CSS3'],
        },
        {
          label: 'Backend & Mobile',
          skills: ['Laravel', 'Flutter', 'Prisma ORM', 'PHP', 'MySQL / PostgreSQL', 'Firebase & REST API'],
        },
        {
          label: 'Workflow & IoT',
          skills: ['Git / GitHub', 'VS Code', 'Postman', 'ESP8266 / Arduino', 'Notion', 'Agile Sprint'],
        },
      ],
    },
    workspace: {
      eyebrow: 'Workspace Blueprint',
      title: 'My digital',
      titleSerif: 'workshop',
      note: 'Select or hover over any item on the interactive desk blueprint below to inspect my daily hardware and analog setup.',
      inspectTitle: 'Inspect Workspace',
      inspectDefault: 'Select or hover over any desk element above to explore my physical and analog workstation setup.',
      items: {
        monitor: {
          name: 'Samsung Essential S3 24"',
          label: 'Samsung 24" Display',
          desc: 'External display aligned vertically above my laptop to inspect documentation, database schemas, and long code files without context switching.',
        },
        laptop: {
          name: 'HP Pavilion Laptop',
          label: 'HP Pavilion',
          desc: 'Primary workstation for Figma design systems, local Next.js & Laravel compilation, and full-stack testing.',
        },
        keyboard: {
          name: 'Mechanical Keyboard',
          label: 'Keyboard',
          desc: 'Compact tactile mechanical keyboard built for comfortable, distraction-free coding sprints.',
        },
        mouse: {
          name: 'Logitech Pebble M350',
          label: 'Pebble',
          desc: 'Silent, low-profile wireless mouse that keeps canvas navigation precise and the desk quiet.',
        },
        notebook: {
          name: 'Analog Sketchbook',
          label: 'Sketchbook',
          desc: 'Where user flows, relational table schemas, and early wireframe layouts are sketched on paper before opening Figma.',
        },
        coffee: {
          name: 'Double Espresso Mug',
          label: '☕',
          desc: 'Daily fuel for morning architecture reviews and late-night interface polish.',
        },
      },
    },
    gallery: {
      eyebrow: 'Behind the Scenes',
      title: 'Beyond the',
      titleSerif: 'pixels',
      note: 'Life outside the code editor: campus moments, mountain ridges, and team matches. Select any photo to read its story.',
      photoStory: 'Photo Story',
      closeLabel: 'Close photo dialog',
      items: [
        {
          caption: 'Campus life',
          story: 'Electronic Engineering Polytechnic Institute of Surabaya (EEPIS/PENS). Navigating informatics labs, user discovery workshops, and collaborating on engineering projects.',
        },
        {
          caption: 'Sunset vibes',
          story: 'Recharging by the coast. Stepping back to watch open horizons helps clear creative blockages and brings fresh perspective to complex layout problems.',
        },
        {
          caption: 'Exploring peaks',
          story: 'Ascending high ridges in East Java. Hiking reinforces steady, step-by-step discipline, the same mindset I apply when refactoring large codebases.',
        },
        {
          caption: 'Chasing waterfalls',
          story: 'Exploring hidden rivers and waterfalls. Observing natural motion inspires fluid, unhurried transitions in user interfaces.',
        },
        {
          caption: 'Late night code',
          story: 'Building React components, tuning SQL queries, and refining micro-interactions alongside black coffee.',
        },
        {
          caption: 'Presenting ideas',
          story: 'Pitching wireframes and system architectures in class. Clear communication turns technical decisions into shared team alignment.',
        },
        {
          caption: 'Game day',
          story: 'Weekly futsal match with college teammates. Keeps energy sharp, builds quick team reflexes, and resets screen fatigue.',
        },
        {
          caption: 'Off duty',
          story: 'Exploring city spaces on weekends, observing signage systems, wayfinding, and spatial design details.',
        },
      ],
    },
    contact: {
      eyebrow: 'Get In Touch',
      headline: "Let's create something",
      headlineSerif: 'memorable.',
      subtitle: 'Open for UI/UX design collaborations, full-stack web & mobile projects, or internship and full-time opportunities.',
      copyBtn: 'Copy email',
      copiedBtn: 'Copied ✓',
      toastMsg: '✓ Email address copied to clipboard!',
      formEyebrow: 'Direct Message',
      formTitle: 'Send a quick brief.',
      formDesc: 'Fill out the fields below to open a pre-formatted email directly in your mail client, no sign-up required.',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Budi Santoso / Acme Team',
      subjectLabel: 'Project or Role',
      subjectPlaceholder: 'e.g. UI/UX Redesign / Full-Stack Collaboration',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me briefly about your timeline, goals, or role...',
      sendBtn: 'Compose Email ↗',
      validationError: 'Please fill in your name and message before sending.',
      sentFeedback: 'Opening your email client with your message ready to send.',
    },
    caseStudyUi: {
      backBtn: '← Back to All Projects',
      githubBtn: 'GitHub Repository ↗',
      indexTitle: 'INDEX',
      continueExploring: 'Continue Exploring',
      beforeLabel: 'Before',
      afterLabel: 'After',
    },
    notFound: {
      eyebrow: 'Error 404',
      title: 'Page not',
      titleSerif: 'found',
      desc: 'The route you requested does not exist or may have moved. Head back home or explore the project archive.',
      homeBtn: 'Back to Home',
      workBtn: 'Browse Work →',
    },
    loader: {
      skip: 'Skip intro',
    },
    footer: {
      designedBuilt: 'Designed & engineered from scratch',
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
      subtitle: 'UI/UX Designer & Full-Stack Developer yang merancang produk digital intuitif dan berkinerja tinggi.',
      exploreBtn: 'Karya Pilihan ↓',
      resumeBtn: 'Resume ↗',
      contactBtn: 'Hubungi Saya',
    },
    featured: {
      eyebrow: 'Karya Pilihan',
      title: 'Proyek',
      titleSerif: 'unggulan',
      note: 'Pilihan dashboard enterprise, aplikasi mobile, dan platform web yang dirancang serta dibangun untuk menyelesaikan masalah operasional nyata.',
      viewCase: 'Baca studi kasus →',
      exploreAll: 'Lihat semua 10 proyek & studi kasus →',
    },
    experience: {
      eyebrow: 'Pengalaman',
      title: 'Perjalanan',
      titleSerif: 'karier',
      items: [
        {
          period: 'Juni 2026 – Sekarang',
          role: 'UI/UX Design Intern',
          company: 'Pelindo Solusi Digital (PSD) · Penugasan PT ILCS',
          desc: 'Merancang ulang sistem antarmuka dashboard logistik enterprise (Tanos ERP) untuk koordinasi armada pelabuhan, mulai dari riset lapangan, arsitektur informasi, hingga prototipe hi-fi produksi.',
        },
        {
          period: 'Agustus 2024 – Sekarang',
          role: 'Mahasiswa Teknik Informatika',
          company: 'Politeknik Elektronika Negeri Surabaya (PENS)',
          desc: 'Mendalami rekayasa perangkat lunak, sistem basis data relasional, dan interaksi manusia-komputer sembari membangun aplikasi web, mobile, dan IoT.',
        },
      ],
    },
    work: {
      eyebrow: 'Indeks Proyek',
      title: 'Semua',
      titleSerif: 'karya',
      subtitle: 'Sistem desain, prototipe interaktif, dan aplikasi full-stack yang dibangun untuk memecahkan masalah nyata.',
      categories: {
        All: 'Semua',
        Enterprise: 'Enterprise',
        'Web App': 'Aplikasi Web',
        Mobile: 'Mobile',
        IoT: 'IoT',
      },
      caseStudyBtn: 'Studi kasus →',
      githubBtn: 'GitHub ↗',
      comingSoon: 'Segera hadir',
      projects: {
        'tanos-erp': {
          desc: 'Dashboard logistik terpadu untuk PT ILCS guna memantau jadwal pengiriman dan pergerakan armada kargo secara real-time.',
        },
        'manfince': {
          desc: 'Aplikasi manajemen keuangan pribadi modern untuk pelacakan pengeluaran, tagihan rutin, kalkulator split-bill otomatis, dan target tabungan.',
        },
        'flixora': {
          desc: 'Platform streaming film interaktif dengan integrasi katalog TMDB, filter genre, pemutar video kustom WatchPlayer, watchlist, dan multi-profil.',
        },
        'e-reserv': {
          desc: 'Platform reservasi lapangan olahraga terintegrasi yang menghubungkan penyewa dan pengelola melalui aplikasi Flutter dan panel admin Laravel 12.',
        },
        'sistem-kasir': {
          desc: 'Aplikasi kasir Point of Sale (POS) berbasis Laravel dan Inertia.js React dengan manajemen stok produk, transaksi real-time, dan laporan penjualan.',
        },
        'stylebarber': {
          desc: 'Aplikasi web reservasi dan manajemen antrean barbershop digital berbasis Next.js, React 19, dan Prisma ORM.',
        },
        'balang': {
          desc: 'Aplikasi mobile crowd-sourced berbasis Flutter untuk melaporkan, memverifikasi, dan memetakan barang hilang/temuan dengan geolokasi.',
        },
        'iot-toren': {
          desc: 'Sistem hardware dan dashboard IoT berbasis sensor ultrasonik ESP8266 untuk memantau level air toren serta mengirim peringatan otomatis.',
        },
        'focusly': {
          desc: 'Aplikasi web manajemen tugas interaktif dengan mode gelap/terang, indikator progres real-time, dan penyimpanan lokal.',
        },
        'travelbudget': {
          desc: 'Aplikasi perencana anggaran perjalanan dengan kalkulasi estimasi biaya itinerary otomatis serta ekspor laporan PDF.',
        },
      },
    },
    about: {
      eyebrow: 'Tentang Saya',
      leadBefore: 'Saya peduli pada keputusan-keputusan kecil yang membuat sebuah produk terasa ',
      leadSerif: 'mudah & alami',
      leadAfter: ' saat digunakan.',
      p1: 'Saya adalah UI/UX Designer dan Full-Stack Developer yang saat ini menjalani magang di Pelindo Solusi Digital (PSD) dengan penugasan pada PT Integrasi Logistik Cipta Solusi (ILCS), menangani perancangan ulang dashboard enterprise mulai dari observasi pengguna di lapangan hingga antarmuka siap produksi.',
      p2: 'Hal yang membuat saya antusias di bidang ini adalah titik temu antara desain dan kode: memahami akar masalah secara mendalam untuk merancang solusi visual yang tepat, lalu mewujudkannya lewat kode yang rapi dan terukur. Saat ini saya menempuh studi Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS).',
      tags: ['Desain UI/UX', 'Full-Stack Dev', 'Design Systems', 'Arsitektur Produk'],
      handwrittenNote: '"Terima kasih sudah mampir! Mari berkolaborasi membangun karya yang berdampak."',
    },
    skills: {
      eyebrow: 'Perangkat & Keahlian',
      title: 'Teknologi',
      titleSerif: 'andalan',
      categories: [
        {
          label: 'Desain',
          skills: ['Figma', 'Design Systems', 'Wireframing', 'Prototyping Interaktif', 'Riset Pengguna', 'Arsitektur Informasi'],
        },
        {
          label: 'Frontend',
          skills: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5 / CSS3'],
        },
        {
          label: 'Backend & Mobile',
          skills: ['Laravel', 'Flutter', 'Prisma ORM', 'PHP', 'MySQL / PostgreSQL', 'Firebase & REST API'],
        },
        {
          label: 'Alur Kerja & IoT',
          skills: ['Git / GitHub', 'VS Code', 'Postman', 'ESP8266 / Arduino', 'Notion', 'Agile Sprint'],
        },
      ],
    },
    workspace: {
      eyebrow: 'Blueprint Meja Kerja',
      title: 'Ruang kerja',
      titleSerif: 'digital',
      note: 'Ketuk atau arahkan kursor pada elemen meja interaktif di bawah ini untuk melihat perangkat keras dan alat analog yang saya gunakan sehari-hari.',
      inspectTitle: 'Inspeksi Meja Kerja',
      inspectDefault: 'Ketuk atau arahkan kursor ke salah satu perangkat di atas untuk melihat detail spesifikasi ruang kerja saya.',
      items: {
        monitor: {
          name: 'Samsung Essential S3 24"',
          label: 'Monitor Samsung 24"',
          desc: 'Layar eksternal yang disusun vertikal untuk membaca dokumentasi teknis, skema database, dan struktur kode panjang tanpa berpindah jendela.',
        },
        laptop: {
          name: 'Laptop HP Pavilion',
          label: 'HP Pavilion',
          desc: 'Perangkat utama untuk merancang sistem desain di Figma, kompilasi lokal Next.js & Laravel, serta pengujian full-stack.',
        },
        keyboard: {
          name: 'Mechanical Keyboard',
          label: 'Keyboard',
          desc: 'Keyboard mekanikal ringkas untuk kenyamanan mengetik tanpa distraksi selama sesi pengembangan panjang.',
        },
        mouse: {
          name: 'Logitech Pebble M350',
          label: 'Pebble',
          desc: 'Mouse nirkabel senyap dan presisi untuk navigasi kanvas Figma yang mulus.',
        },
        notebook: {
          name: 'Buku Sketsa Analog',
          label: 'Buku Sketsa',
          desc: 'Tempat seluruh user flow, relasi tabel database, dan sketsa wireframe awal digambar tangan sebelum masuk ke perangkat lunak.',
        },
        coffee: {
          name: 'Cangkir Double Espresso',
          label: '☕',
          desc: 'Bahan bakar utama saat sesi review kode pagi hari dan penyempurnaan prototipe visual.',
        },
      },
    },
    gallery: {
      eyebrow: 'Di Balik Layar',
      title: 'Di luar',
      titleSerif: 'piksel',
      note: 'Keseharian di luar editor kode: aktivitas kampus, mendaki gunung, hingga futsal bersama tim. Klik foto mana pun untuk membaca ceritanya.',
      photoStory: 'Cerita Foto',
      closeLabel: 'Tutup jendela foto',
      items: [
        {
          caption: 'Kehidupan kampus',
          story: 'Politeknik Elektronika Negeri Surabaya (PENS). Menjalani praktikum informatika, diskusi riset pengguna, dan kolaborasi proyek rekayasa perangkat lunak.',
        },
        {
          caption: 'Senja di pantai',
          story: 'Mengisi ulang energi di tepi pantai. Mengamati cakrawala terbuka membantu menjernihkan kebuntuan desain dan memberi sudut pandang segar.',
        },
        {
          caption: 'Menjelajah puncak',
          story: 'Mendaki punggungan gunung di Jawa Timur. Pendakian melatih fokus selangkah demi selangkah, prinsip yang sama saat merapikan arsitektur kode besar.',
        },
        {
          caption: 'Menyusuri sungai',
          story: 'Menjelajahi aliran sungai dan air terjun alami yang menginspirasi transisi animasi antarmuka yang mengalir lembut.',
        },
        {
          caption: 'Ngoding larut malam',
          story: 'Merakit komponen React, merancang skema SQL, dan menyempurnakan detail antarmuka ditemani kopi hitam.',
        },
        {
          caption: 'Presentasi gagasan',
          story: 'Mempresentasikan wireframe dan arsitektur sistem di kelas. Komunikasi yang jernih menjembatani keputusan desain dengan kebutuhan pengguna.',
        },
        {
          caption: 'Hari pertandingan',
          story: 'Pertandingan futsal rutin bersama rekan kuliah untuk menjaga kebugaran, refleks kerja tim, dan menyegarkan pikiran.',
        },
        {
          caption: 'Akhir pekan',
          story: 'Menjelajahi ruang kota sambil mengamati tipografi papan petunjuk, tata ruang, dan pola interaksi publik.',
        },
      ],
    },
    contact: {
      eyebrow: 'Hubungi Saya',
      headline: 'Mari wujudkan karya yang',
      headlineSerif: 'berkesan.',
      subtitle: 'Terbuka untuk kolaborasi desain UI/UX, pengembangan aplikasi web & mobile full-stack, maupun peluang magang dan kerja penuh waktu.',
      copyBtn: 'Salin email',
      copiedBtn: 'Tersalin ✓',
      toastMsg: '✓ Alamat email berhasil disalin ke clipboard!',
      formEyebrow: 'Pesan Langsung',
      formTitle: 'Kirim ringkasan kebutuhan.',
      formDesc: 'Isi formulir singkat di bawah untuk membuka draf email terstruktur langsung di aplikasi email Anda tanpa perlu registrasi.',
      nameLabel: 'Nama Anda',
      namePlaceholder: 'mis. Budi Santoso / Tim Produk',
      subjectLabel: 'Keperluan / Proyek',
      subjectPlaceholder: 'mis. Redesign UI/UX / Kolaborasi Web App',
      messageLabel: 'Pesan',
      messagePlaceholder: 'Ceritakan secara singkat tujuan proyek, timeline, atau posisi yang ditawarkan...',
      sendBtn: 'Tulis Email ↗',
      validationError: 'Mohon isi nama dan pesan Anda terlebih dahulu.',
      sentFeedback: 'Membuka aplikasi email Anda dengan draf pesan yang sudah disiapkan.',
    },
    caseStudyUi: {
      backBtn: '← Kembali ke Semua Karya',
      githubBtn: 'Repositori GitHub ↗',
      indexTitle: 'DAFTAR ISI',
      continueExploring: 'Lanjutkan Menjelajah',
      beforeLabel: 'Sebelum',
      afterLabel: 'Sesudah',
    },
    notFound: {
      eyebrow: 'Kesalahan 404',
      title: 'Halaman tidak',
      titleSerif: 'ditemukan',
      desc: 'Alamat halaman yang Anda tuju tidak tersedia atau telah berpindah. Silakan kembali ke beranda atau jelajahi indeks karya.',
      homeBtn: 'Kembali ke Beranda',
      workBtn: 'Lihat Karya →',
    },
    loader: {
      skip: 'Lewati intro',
    },
    footer: {
      designedBuilt: 'Dirancang & dibangun dari nol',
    },
  },
};
