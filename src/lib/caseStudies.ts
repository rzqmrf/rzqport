import type { Language } from './translations';

export type CaseStudySlug = 'tanos-erp' | 'e-reserv' | 'balang' | 'iot-toren' | 'focusly';

export interface CaseStudySection {
  id: string;
  tocLabel: string;
  num: string;
  heading: string;
  body: string;
  codeTokens?: string[];
}

export interface CaseStudyTransformation {
  title: string;
  beforePoints: string[];
  afterPoints: string[];
  pipelineSteps: string[];
}

export interface CaseStudyMetric {
  num: string;
  label: string;
}

export interface CaseStudyTeaser {
  href: string;
  label: string;
  title: string;
  desc: string;
}

export interface CaseStudyLocaleData {
  eyebrow: string;
  titleMain: string;
  titleSerif: string;
  subtitle: string;
  githubUrl: string;
  coverSrc: string;
  coverAlt: string;
  coverWidth: number;
  coverHeight: number;
  meta: { label: string; value: string }[];
  transformation: CaseStudyTransformation;
  sections: CaseStudySection[];
  metrics: CaseStudyMetric[];
  nextProjects: CaseStudyTeaser[];
}

export const CASE_STUDIES: Record<CaseStudySlug, Record<Language, CaseStudyLocaleData>> = {
  'tanos-erp': {
    en: {
      eyebrow: 'CASE STUDY // 01',
      titleMain: 'Tanos',
      titleSerif: 'ERP.',
      subtitle: 'An enterprise dispatch planning application designed to coordinate fleet movements and port cargo logistics under a single unified workstation.',
      githubUrl: 'https://github.com/rzqmrf/Tanos',
      coverSrc: '/tanosss.png',
      coverAlt: 'Tanos ERP Case Study Cover',
      coverWidth: 1024,
      coverHeight: 682,
      meta: [
        { label: 'CLIENT', value: 'PT Integrasi Logistik Cipta Solusi (ILCS)' },
        { label: 'ROLE', value: 'UI/UX Design Intern (via PSD)' },
        { label: 'TIMELINE', value: '3 Months' },
        { label: 'STACK', value: 'Figma, Laravel, Tailwind CSS' },
      ],
      transformation: {
        title: 'Workflow Redesign Comparison',
        beforePoints: [
          'Manual data entry across multiple disconnected spreadsheets',
          '~15 minutes required per cargo dispatch sequence',
          'No active warning state when vessel or fleet coordinates overlapped',
        ],
        afterPoints: [
          'Single-viewport dispatch console with collapsible context panels',
          'Under 5 minutes average dispatch completion time (73% faster)',
          'Real-time conflict badges and atomic high-contrast status tokens',
        ],
        pipelineSteps: ['On-Site Shadowing', 'Journey Mapping', 'Figma Token System', 'Laravel + Tailwind Handoff'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / OVERVIEW',
          num: '01 /',
          heading: 'Overview',
          body: 'PT Integrasi Logistik Cipta Solusi (ILCS) is an Indonesian port logistics enterprise. During my UI/UX internship at Pelindo Solusi Digital (PSD), I was assigned to overhaul the interface system of Tanos ERP, their proprietary logistics scheduling application, replacing scattered spreadsheet workflows with a unified visual workstation.',
        },
        {
          id: 'problem',
          tocLabel: '02 / THE CHALLENGE',
          num: '02 /',
          heading: 'The Challenge',
          body: 'Before the redesign, scheduling operations were slow and error-prone. Fleet coordinators manually cross-checked records across separate spreadsheets, resulting in double-bookings and delayed dispatches. Our primary design target was reducing cargo dispatch sequences from 15 minutes down to under 5 minutes.',
        },
        {
          id: 'research',
          tocLabel: '03 / USER DISCOVERY',
          num: '03 /',
          heading: 'User Discovery',
          body: 'I spent a week shadowing operations coordinators on-site. Watching real 8-hour shifts revealed two critical bottlenecks: operators constantly switched tabs to verify fleet availability, and overlapping schedule coordinates triggered zero visual warnings until a conflict had already occurred.',
        },
        {
          id: 'flow',
          tocLabel: '04 / ARCHITECTURE',
          num: '04 /',
          heading: 'Information Architecture',
          body: 'I restructured the operational flow to eliminate tab switching. By grouping dispatch parameters logically and introducing collapsible inspection drawers, every mandatory fleet metric stays visible on a single viewport without visual clutter.',
        },
        {
          id: 'ui',
          tocLabel: '05 / INTERFACE SYSTEM',
          num: '05 /',
          heading: 'Interface System',
          body: 'We crafted a data-dense design system in Figma tailored for long control-room shifts. High-contrast purple accents highlight primary actions and conflict states while muted neutrals keep dense table values scannable. Atomic table rows, status pills, and form controls were documented for direct translation into Blade and Tailwind CSS.',
        },
        {
          id: 'result',
          tocLabel: '06 / METRICS & OUTCOME',
          num: '06 /',
          heading: 'Outcome & Impact',
          body: 'The redesigned system was handed off and implemented with Laravel and Tailwind CSS. Post-launch testing recorded substantial scheduling speedups, near-zero route conflict incidents, and lower visual fatigue across 8-hour coordinator shifts.',
        },
      ],
      metrics: [
        { num: '73%', label: 'Reduction in dispatch scheduling time' },
        { num: '< 5m', label: 'Average dispatch time per vessel' },
      ],
      nextProjects: [
        {
          href: '/work/e-reserv',
          label: 'Web App // 02',
          title: 'E-Reserv Hub →',
          desc: 'Sports field booking portal with dynamic slot generation & automated Midtrans settlement.',
        },
        {
          href: '/work/balang',
          label: 'Mobile // 03',
          title: 'BALANG App →',
          desc: 'Community lost-and-found mobile client built with Flutter & Firebase geolocation.',
        },
      ],
    },
    id: {
      eyebrow: 'STUDI KASUS // 01',
      titleMain: 'Tanos',
      titleSerif: 'ERP.',
      subtitle: 'Aplikasi perencanaan pengiriman logistik enterprise yang dirancang untuk mengoordinasikan pergerakan armada dan kargo pelabuhan dalam satu konsol terpadu.',
      githubUrl: 'https://github.com/rzqmrf/Tanos',
      coverSrc: '/tanosss.png',
      coverAlt: 'Sampul Studi Kasus Tanos ERP',
      coverWidth: 1024,
      coverHeight: 682,
      meta: [
        { label: 'KLIEN', value: 'PT Integrasi Logistik Cipta Solusi (ILCS)' },
        { label: 'PERAN', value: 'UI/UX Design Intern (via PSD)' },
        { label: 'DURASI', value: '3 Bulan' },
        { label: 'TEKNOLOGI', value: 'Figma, Laravel, Tailwind CSS' },
      ],
      transformation: {
        title: 'Perbandingan Transformasi Alur Kerja',
        beforePoints: [
          'Input data manual di berbagai file spreadsheet yang terpisah',
          'Membutuhkan ~15 menit untuk satu siklus penjadwalan armada',
          'Tidak ada peringatan visual aktif saat jadwal atau rute bertabrakan',
        ],
        afterPoints: [
          'Konsol pengiriman satu layar penuh dengan panel detail lipat',
          'Rata-rata waktu penjadwalan turun ke bawah 5 menit (73% lebih cepat)',
          'Indikator konflik real-time dan komponen tabel atomik kontras tinggi',
        ],
        pipelineSteps: ['Observasi Lapangan', 'Pemetaan Alur', 'Design System Figma', 'Implementasi Laravel + Tailwind'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / RINGKASAN',
          num: '01 /',
          heading: 'Ringkasan Proyek',
          body: 'PT Integrasi Logistik Cipta Solusi (ILCS) adalah perusahaan solusi logistik kepelabuhanan di Indonesia. Selama magang UI/UX di Pelindo Solusi Digital (PSD), saya ditugaskan merombak sistem antarmuka Tanos ERP untuk menggantikan alur kerja spreadsheet yang terpecah menjadi satu workstation visual terpadu.',
        },
        {
          id: 'problem',
          tocLabel: '02 / TANTANGAN',
          num: '02 /',
          heading: 'Tantangan Utama',
          body: 'Sebelum perancangan ulang, operasional penjadwalan berjalan lambat dan rawan salah ketik. Koordinator armada harus mencocokkan data secara manual di banyak lembar kerja sehingga memicu jadwal ganda dan keterlambatan. Target desain utama kami adalah memangkas waktu penjadwalan dari 15 menit menjadi di bawah 5 menit.',
        },
        {
          id: 'research',
          tocLabel: '03 / RISET PENGGUNA',
          num: '03 /',
          heading: 'Riset & Observasi Lapangan',
          body: 'Saya mendampingi langsung koordinator operasional di lapangan selama satu minggu penuh. Dari pengamatan shift 8 jam ditemukan dua hambatan kritis: mata operator terus berpindah antar-layar untuk mengecek ketersediaan unit, serta ketiadaan status peringatan aktif ketika koordinat jadwal saling bertumpuk.',
        },
        {
          id: 'flow',
          tocLabel: '04 / ARSITEKTUR',
          num: '04 /',
          heading: 'Arsitektur Informasi',
          body: 'Saya memetakan ulang alur kerja operasional untuk memangkas klik berlebih. Dengan mengelompokkan parameter pengiriman secara logis dan merancang panel samping yang dapat dilipat, seluruh metrik wajib dapat dipantau dalam satu layar tanpa kepadatan berlebih.',
        },
        {
          id: 'ui',
          tocLabel: '05 / SISTEM ANTARMUKA',
          num: '05 /',
          heading: 'Sistem Antarmuka',
          body: 'Kami membangun sistem desain padat-data di Figma yang nyaman untuk pemakaian berjam-jam. Aksen ungu kontras tinggi menandai aksi utama dan indikator konflik, sedangkan warna abu-abu terukur menjaga keterbacaan tabel. Komponen baris tabel atomik, lencana status, dan kontrol form disiapkan agar langsung siap diterjemahkan ke kode.',
        },
        {
          id: 'result',
          tocLabel: '06 / HASIL & DAMPAK',
          num: '06 /',
          heading: 'Hasil & Dampak Operasional',
          body: 'Desain akhir diserahkan dan diimplementasikan menggunakan Laravel serta Tailwind CSS. Pengujian pasca-peluncuran mencatat percepatan signifikan pada durasi penjadwalan, tingkat konflik rute mendekati nol, dan penurunan kelelahan visual operator.',
        },
      ],
      metrics: [
        { num: '73%', label: 'Penurunan waktu penjadwalan pengiriman kargo' },
        { num: '< 5m', label: 'Rata-rata waktu penjadwalan per kapal/armada' },
      ],
      nextProjects: [
        {
          href: '/work/e-reserv',
          label: 'Aplikasi Web // 02',
          title: 'E-Reserv Hub →',
          desc: 'Portal reservasi lapangan olahraga dengan pembuatan slot dinamis & pembayaran otomatis Midtrans.',
        },
        {
          href: '/work/balang',
          label: 'Mobile // 03',
          title: 'BALANG App →',
          desc: 'Aplikasi mobile komunitas barang hilang & temuan berbasis Flutter dan geolokasi Firebase.',
        },
      ],
    },
  },
  'e-reserv': {
    en: {
      eyebrow: 'CASE STUDY // 02',
      titleMain: 'E-Reserv',
      titleSerif: 'Hub.',
      subtitle: 'An integrated digital platform streamlining sports field reservations by connecting tenants and managers via a Flutter mobile app and Laravel 12 admin panel.',
      githubUrl: 'https://github.com/rzqmrf/E-Reserv',
      coverSrc: '/ereserv.png',
      coverAlt: 'E-Reserv Dashboard Cover',
      coverWidth: 1536,
      coverHeight: 1024,
      meta: [
        { label: 'PROJECT TYPE', value: 'Academic Project (PENS Surabaya)' },
        { label: 'ROLE', value: 'Full-Stack Developer & Designer' },
        { label: 'TIMELINE', value: '3 Months' },
        { label: 'STACK', value: 'Flutter, Laravel 12, MySQL, Midtrans' },
      ],
      transformation: {
        title: 'Reservation Workflow Comparison',
        beforePoints: [
          'Manual WhatsApp availability checks and bank receipt photo uploads',
          'Frequent double-bookings during peak evening court hours',
          'Empty off-peak courts when solo players lacked teammates',
        ],
        afterPoints: [
          'Instant Midtrans webhook verification with zero manual receipt checks',
          'Query-level slot locking preventing concurrent booking race conditions',
          'Host-Joiner public match mode + 7-day MLPRegressor revenue forecast',
        ],
        pipelineSteps: ['MySQL Slot Engine', 'Laravel 12 REST API', 'Flutter Client', 'Midtrans Webhook'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / OVERVIEW',
          num: '01 /',
          heading: 'Overview',
          body: 'E-Reserv connects sports venue tenants with facility managers through a cross-platform Flutter mobile client for real-time slot booking and a Laravel 12 administration dashboard integrated with Midtrans payment webhooks and revenue forecasting.',
        },
        {
          id: 'problem',
          tocLabel: '02 / THE BOTTLENECK',
          num: '02 /',
          heading: 'The Bottleneck',
          body: 'Conventional venue booking workflows suffered from double-bookings caused by delayed manual schedule updates. Players had to ask via chat, transfer manually, and send receipt screenshots. Meanwhile, off-peak court occupancy stayed low because solo players struggled to gather enough teammates.',
        },
        {
          id: 'architecture',
          tocLabel: '03 / DB STRUCTURE',
          num: '03 /',
          heading: 'Database Architecture',
          body: 'I designed a normalized MySQL schema centered on six core entities to dynamically generate 1-hour slots and block overlapping reservations at the query level, preventing race conditions even during simultaneous payment settlements.',
          codeTokens: ['users', 'fields', 'schedules', 'slots', 'bookings', 'payments'],
        },
        {
          id: 'ui',
          tocLabel: '04 / INTERFACE SYSTEM',
          num: '04 /',
          heading: 'Interface System',
          body: 'Both the Flutter mobile app and Laravel admin dashboard share a cohesive dark-sporty visual language featuring interactive daily slot calendars, live court capacity indicators, clear booking state badges, and Chart.js financial analytics.',
        },
        {
          id: 'result',
          tocLabel: '05 / RESULT & IMPACT',
          num: '05 /',
          heading: 'Outcome & Impact',
          body: 'E-Reserv automated the reservation lifecycle end-to-end: tenants pay instantly via Midtrans, solo players join open community matches via the Host-Joiner feature, and venue managers project 7-day revenue using an integrated MLPRegressor model.',
        },
      ],
      metrics: [
        { num: '98%', label: 'Reduction in payment verification turnaround time' },
        { num: '0%', label: 'Schedule overlap conflict rate in testing' },
      ],
      nextProjects: [
        {
          href: '/work/balang',
          label: 'Mobile // 03',
          title: 'BALANG App →',
          desc: 'Community lost-and-found mobile client built with Flutter & Firebase.',
        },
        {
          href: '/work/iot-toren',
          label: 'IoT // 04',
          title: 'Monitoring Toren →',
          desc: 'Real-time water tower sensor dashboard with hardware telemetry logs.',
        },
      ],
    },
    id: {
      eyebrow: 'STUDI KASUS // 02',
      titleMain: 'E-Reserv',
      titleSerif: 'Hub.',
      subtitle: 'Platform digital terintegrasi untuk reservasi lapangan olahraga yang menghubungkan penyewa dan pengelola melalui aplikasi Flutter dan panel admin Laravel 12.',
      githubUrl: 'https://github.com/rzqmrf/E-Reserv',
      coverSrc: '/ereserv.png',
      coverAlt: 'Sampul Dashboard E-Reserv',
      coverWidth: 1536,
      coverHeight: 1024,
      meta: [
        { label: 'JENIS PROYEK', value: 'Proyek Akademik (PENS Surabaya)' },
        { label: 'PERAN', value: 'Full-Stack Developer & Designer' },
        { label: 'DURASI', value: '3 Bulan' },
        { label: 'TEKNOLOGI', value: 'Flutter, Laravel 12, MySQL, Midtrans' },
      ],
      transformation: {
        title: 'Perbandingan Alur Reservasi',
        beforePoints: [
          'Cek jadwal manual lewat chat dan kirim foto bukti transfer bank',
          'Rawan jadwal bentrok (double-booking) pada jam ramai malam hari',
          'Lapangan sepi di jam non-reguler karena pemain sulit mencari teman main',
        ],
        afterPoints: [
          'Verifikasi pembayaran otomatis via webhook Midtrans tanpa cek manual',
          'Validasi kunci slot di level query database mencegah kondisi balapan (race condition)',
          'Fitur mabar terbuka Host-Joiner + prediksi pendapatan 7 hari (MLPRegressor)',
        ],
        pipelineSteps: ['Skema Slot MySQL', 'REST API Laravel 12', 'Aplikasi Flutter', 'Webhook Midtrans'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / RINGKASAN',
          num: '01 /',
          heading: 'Ringkasan Proyek',
          body: 'E-Reserv menghubungkan penyewa lapangan olahraga dengan pengelola fasilitas melalui aplikasi mobile Flutter untuk pemesanan slot real-time serta panel administrasi web Laravel 12 yang dilengkapi pembayaran otomatis Midtrans dan prediksi pendapatan.',
        },
        {
          id: 'problem',
          tocLabel: '02 / HAMBATAN',
          num: '02 /',
          heading: 'Hambatan Awal',
          body: 'Pemesanan lapangan konvensional sering mengalami bentrok jadwal akibat pencatatan asinkron. Penyewa harus menanyakan jam kosong lewat chat, transfer manual, lalu menunggu konfirmasi bukti bayar. Selain itu, okupansi jam sepi rendah karena pemain individu kesulitan mencari rekan tanding.',
        },
        {
          id: 'architecture',
          tocLabel: '03 / STRUKTUR DB',
          num: '03 /',
          heading: 'Arsitektur Basis Data',
          body: 'Saya merancang skema relasional MySQL dengan enam tabel inti yang membangkitkan slot waktu 1 jam secara dinamis dan memblokir tumpang tindih pemesanan langsung di level query database, sehingga aman dari konflik saat terjadi pembayaran bersamaan.',
          codeTokens: ['users', 'fields', 'schedules', 'slots', 'bookings', 'payments'],
        },
        {
          id: 'ui',
          tocLabel: '04 / SISTEM ANTARMUKA',
          num: '04 /',
          heading: 'Sistem Antarmuka',
          body: 'Aplikasi Flutter dan dashboard admin Laravel mengusung bahasa visual gelap bernuansa sporty dengan kalender slot harian interaktif, indikator sisa kapasitas lapangan, lencana status transaksi, serta grafik analitik keuangan Chart.js.',
        },
        {
          id: 'result',
          tocLabel: '05 / HASIL & DAMPAK',
          num: '05 /',
          heading: 'Hasil & Dampak',
          body: 'E-Reserv mengotomatiskan siklus reservasi dari hulu ke hilir: penyewa membayar instan via Midtrans, pemain lain dapat bergabung ke sesi publik lewat model Host-Joiner, dan pengelola memproyeksikan tren pendapatan 7 hari ke depan dengan model MLPRegressor.',
        },
      ],
      metrics: [
        { num: '98%', label: 'Pemangkasan waktu verifikasi pembayaran' },
        { num: '0%', label: 'Tingkat bentrok jadwal pada pengujian sistem' },
      ],
      nextProjects: [
        {
          href: '/work/balang',
          label: 'Mobile // 03',
          title: 'BALANG App →',
          desc: 'Aplikasi mobile komunitas barang hilang & temuan berbasis Flutter dan Firebase.',
        },
        {
          href: '/work/iot-toren',
          label: 'IoT // 04',
          title: 'Monitoring Toren →',
          desc: 'Dashboard sensor level air toren real-time dengan rekap telemetri perangkat keras.',
        },
      ],
    },
  },
  balang: {
    en: {
      eyebrow: 'CASE STUDY // 03',
      titleMain: 'BALANG',
      titleSerif: 'App.',
      subtitle: 'A crowd-sourced mobile application built with Flutter to report, verify, and map lost & found items across Indonesian neighborhoods using geolocation.',
      githubUrl: 'https://github.com/Aiboo13/Balang',
      coverSrc: '/balang.png',
      coverAlt: 'BALANG App Interface Cover',
      coverWidth: 1536,
      coverHeight: 1024,
      meta: [
        { label: 'PROJECT TYPE', value: 'Academic Project (PENS Surabaya)' },
        { label: 'ROLE', value: 'Mobile Developer & UI Designer' },
        { label: 'TIMELINE', value: '3 Months' },
        { label: 'STACK', value: 'Flutter, Firebase, Google Maps API' },
      ],
      transformation: {
        title: 'Community Reporting Comparison',
        beforePoints: [
          'Lost item announcements buried inside noisy WhatsApp & Facebook chats',
          'Vague text descriptions with no exact discovery coordinates',
          'Unstructured claim verification prone to miscommunication',
        ],
        afterPoints: [
          'Interactive map pins marking exact discovery or loss coordinates',
          'Under 2 minutes to publish a geo-tagged photo report',
          'Dedicated in-app verification chat and structured item status sheets',
        ],
        pipelineSteps: ['Photo & Pin Capture', 'Google Maps SDK', 'Firebase Realtime DB', 'In-App Claim Chat'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / OVERVIEW',
          num: '01 /',
          heading: 'Overview',
          body: 'BALANG is a community-driven mobile application built to simplify recovering lost belongings. Acting as a neighborhood lost-and-found hub, it connects residents who lost items with finders through interactive map pins and instant updates.',
        },
        {
          id: 'problem',
          tocLabel: '02 / THE BOTTLENECK',
          num: '02 /',
          heading: 'The Bottleneck',
          body: 'Neighborhood lost-item announcements traditionally relied on fragmented WhatsApp or social media groups where posts were quickly buried, lacked precise map coordinates, and offered no structured verification workflow.',
        },
        {
          id: 'architecture',
          tocLabel: '03 / ARCHITECTURE',
          num: '03 /',
          heading: 'System Architecture',
          body: 'I implemented a reactive mobile architecture in Flutter backed by Firebase Realtime Database for live feed synchronization and direct claim messaging, paired with the Google Maps Flutter SDK for accurate pin placement.',
        },
        {
          id: 'ui',
          tocLabel: '04 / INTERFACE SYSTEM',
          num: '04 /',
          heading: 'Interface System',
          body: 'The mobile UI centers around a map-first exploration screen with bottom sheets for item inspection, quick category filters, photo attachment previews, and a direct verification chat flow.',
        },
        {
          id: 'result',
          tocLabel: '05 / RESULT & IMPACT',
          num: '05 /',
          heading: 'Outcome & Impact',
          body: 'BALANG delivered a focused, easy-to-navigate recovery portal enabling residents to publish geo-tagged reports in under two minutes and coordinate item returns safely.',
        },
      ],
      metrics: [
        { num: '85%', label: 'Recovery rate improvement in pilot testing' },
        { num: '< 2m', label: 'Average time required to post a report' },
      ],
      nextProjects: [
        {
          href: '/work/iot-toren',
          label: 'IoT // 04',
          title: 'Monitoring Toren →',
          desc: 'Real-time water tower level sensor dashboard with hardware control logs.',
        },
        {
          href: '/work/focusly',
          label: 'Web App // 05',
          title: 'Focusly App →',
          desc: 'Task management web app featuring LocalStorage persistence & theme modes.',
        },
      ],
    },
    id: {
      eyebrow: 'STUDI KASUS // 03',
      titleMain: 'BALANG',
      titleSerif: 'App.',
      subtitle: 'Aplikasi mobile crowd-sourced berbasis Flutter untuk melaporkan, memverifikasi, dan memetakan barang hilang maupun temuan menggunakan geolokasi.',
      githubUrl: 'https://github.com/Aiboo13/Balang',
      coverSrc: '/balang.png',
      coverAlt: 'Sampul Antarmuka Aplikasi BALANG',
      coverWidth: 1536,
      coverHeight: 1024,
      meta: [
        { label: 'JENIS PROYEK', value: 'Proyek Akademik (PENS Surabaya)' },
        { label: 'PERAN', value: 'Mobile Developer & UI Designer' },
        { label: 'DURASI', value: '3 Bulan' },
        { label: 'TEKNOLOGI', value: 'Flutter, Firebase, Google Maps API' },
      ],
      transformation: {
        title: 'Perbandingan Pelaporan Komunitas',
        beforePoints: [
          'Info barang hilang cepat tenggelam di grup WhatsApp atau media sosial',
          'Lokasi penemuan hanya berupa deskripsi teks tanpa titik koordinat akurat',
          'Proses klaim kepemilikan tidak terstruktur dan rawan salah paham',
        ],
        afterPoints: [
          'Pin peta interaktif yang menandai titik penemuan/kehilangan secara presisi',
          'Laporan lengkap dengan foto & koordinat selesai kurang dari 2 menit',
          'Bottom sheet detail barang dan ruang chat verifikasi klaim terintegrasi',
        ],
        pipelineSteps: ['Foto & Titik Lokasi', 'Google Maps SDK', 'Firebase Realtime DB', 'Chat Verifikasi Klaim'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / RINGKASAN',
          num: '01 /',
          heading: 'Ringkasan Proyek',
          body: 'BALANG adalah aplikasi mobile berbasis komunitas untuk mempermudah pencarian barang hilang. Aplikasi ini mempertemukan warga yang kehilangan barang dengan penemu melalui peta interaktif dan pembaruan instan.',
        },
        {
          id: 'problem',
          tocLabel: '02 / HAMBATAN',
          num: '02 /',
          heading: 'Hambatan Awal',
          body: 'Pengumuman barang hilang di lingkungan sekitar umumnya mengandalkan grup pesan singkat yang cepat tertumpuk percakapan lain, tidak menyertakan titik koordinat peta, serta menyulitkan proses verifikasi klaim.',
        },
        {
          id: 'architecture',
          tocLabel: '03 / ARSITEKTUR',
          num: '03 /',
          heading: 'Arsitektur Sistem',
          body: 'Saya merancang arsitektur reaktif menggunakan Flutter dengan Firebase Realtime Database untuk sinkronisasi linimasa dan pesan klaim instan, dipadukan dengan Google Maps Flutter SDK untuk penandaan koordinat presisi.',
        },
        {
          id: 'ui',
          tocLabel: '04 / SISTEM ANTARMUKA',
          num: '04 /',
          heading: 'Sistem Antarmuka',
          body: 'Antarmuka mobile dirancang berpusat pada eksplorasi peta dengan komponen bottom sheet untuk rincian barang, unggah lampiran foto yang ringkas, serta modul percakapan untuk verifikasi pengembalian.',
        },
        {
          id: 'result',
          tocLabel: '05 / HASIL & DAMPAK',
          num: '05 /',
          heading: 'Hasil & Dampak',
          body: 'BALANG menghadirkan alur pelaporan yang intuitif sehingga pengguna dapat mempublikasikan laporan bertanda lokasi kurang dari dua menit dan mengoordinasikan pengembalian barang secara aman.',
        },
      ],
      metrics: [
        { num: '85%', label: 'Peningkatan rasio pengembalian pada uji coba komunitas' },
        { num: '< 2m', label: 'Waktu rata-rata pembuatan laporan baru' },
      ],
      nextProjects: [
        {
          href: '/work/iot-toren',
          label: 'IoT // 04',
          title: 'Monitoring Toren →',
          desc: 'Dashboard sensor level air toren real-time dengan rekap telemetri perangkat keras.',
        },
        {
          href: '/work/focusly',
          label: 'Aplikasi Web // 05',
          title: 'Focusly App →',
          desc: 'Aplikasi manajemen tugas modern dengan penyimpanan lokal & mode tema.',
        },
      ],
    },
  },
  'iot-toren': {
    en: {
      eyebrow: 'CASE STUDY // 04',
      titleMain: 'Monitoring',
      titleSerif: 'Toren.',
      subtitle: 'An IoT telemetry dashboard and hardware system using ultrasonic & flow sensors to monitor water tower levels, estimate utility costs, and dispatch Telegram alerts.',
      githubUrl: 'https://github.com/rzqmrf/monitoring_IOT',
      coverSrc: '/dashboard.png',
      coverAlt: 'Water level indicator dashboard',
      coverWidth: 705,
      coverHeight: 651,
      meta: [
        { label: 'PROJECT TYPE', value: 'Academic Project (PENS Surabaya)' },
        { label: 'ROLE', value: 'IoT Developer & Dashboard Designer' },
        { label: 'TIMELINE', value: '2 Months' },
        { label: 'STACK', value: 'Arduino, ESP8266, PHP Native, MySQL' },
      ],
      transformation: {
        title: 'Water Reserve Monitoring Comparison',
        beforePoints: [
          'Climbing tower ladders manually just to inspect remaining water',
          'Unnoticed pump overflows wasting clean water and electricity',
          'Zero historical visibility into daily household water consumption',
        ],
        afterPoints: [
          'Live web dashboard showing volume, percentage, and fluid level visuals',
          'Instant Telegram Bot alerts when levels drop <10% or exceed >95%',
          'Chart.js historical consumption trends and automated bill estimation',
        ],
        pipelineSteps: ['HC-SR04 + Flow Sensor', 'NodeMCU ESP8266', 'PHP + MySQL Telemetry', 'Web UI & Telegram Bot'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / OVERVIEW',
          num: '01 /',
          heading: 'Overview',
          body: 'Monitoring Toren combines microcontroller sensors with a web telemetry dashboard and automated Telegram notifications to give homeowners real-time visibility into water reserves and daily usage.',
        },
        {
          id: 'problem',
          tocLabel: '02 / THE BOTTLENECK',
          num: '02 /',
          heading: 'The Bottleneck',
          body: 'Household water towers frequently overflowed or ran dry without warning, while checking levels manually meant climbing elevated tanks. Residents needed remote visibility and threshold alerts.',
        },
        {
          id: 'architecture',
          tocLabel: '03 / SYSTEM ARCHITECTURE',
          num: '03 /',
          heading: 'System Architecture',
          body: 'I programmed a NodeMCU ESP8266 in C++ (Arduino IDE) connected to an HC-SR04 ultrasonic distance sensor and water flow sensor. Telemetry is sent via HTTP POST to a PHP backend, persisted in MySQL, and forwarded to the Telegram Bot API upon critical thresholds.',
        },
        {
          id: 'ui',
          tocLabel: '04 / INTERFACE DESIGN',
          num: '04 /',
          heading: 'Interface Design',
          body: 'The web interface pairs animated fluid-level indicators with real-time cards (height, volume, percentage, estimated cost), Chart.js consumption graphs, and a responsive dark/light theme toggle.',
        },
        {
          id: 'result',
          tocLabel: '05 / RESULT & IMPACT',
          num: '05 /',
          heading: 'Outcome & Impact',
          body: 'Deploying the sensor pipeline eliminated manual tank climbs and overflow waste, alerting residents immediately on Telegram whenever capacity drops below 10% or surpasses 95%.',
        },
      ],
      metrics: [
        { num: '100%', label: 'Prevention of overflow incidents via threshold alerts' },
        { num: '0', label: 'Manual physical tower inspections needed' },
      ],
      nextProjects: [
        {
          href: '/work/focusly',
          label: 'Web App // 05',
          title: 'Focusly App →',
          desc: 'Task management web app featuring LocalStorage persistence & theme modes.',
        },
        {
          href: '/work/tanos-erp',
          label: 'Enterprise // 01',
          title: 'Tanos ERP →',
          desc: 'Enterprise logistics dashboard built for PT ILCS cargo fleet coordination.',
        },
      ],
    },
    id: {
      eyebrow: 'STUDI KASUS // 04',
      titleMain: 'Monitoring',
      titleSerif: 'Toren.',
      subtitle: 'Sistem perangkat keras dan dashboard telemetri IoT berbasis sensor ultrasonik & aliran air untuk memantau level toren, estimasi biaya, dan peringatan Telegram otomatis.',
      githubUrl: 'https://github.com/rzqmrf/monitoring_IOT',
      coverSrc: '/dashboard.png',
      coverAlt: 'Dashboard indikator level air toren',
      coverWidth: 705,
      coverHeight: 651,
      meta: [
        { label: 'JENIS PROYEK', value: 'Proyek Akademik (PENS Surabaya)' },
        { label: 'PERAN', value: 'IoT Developer & Dashboard Designer' },
        { label: 'DURASI', value: '2 Bulan' },
        { label: 'TEKNOLOGI', value: 'Arduino, ESP8266, PHP Native, MySQL' },
      ],
      transformation: {
        title: 'Perbandingan Pemantauan Cadangan Air',
        beforePoints: [
          'Pemeriksaan sisa air mengharuskan memanjat menara toren secara manual',
          'Air kerap meluber tanpa disadari sehingga membuang air bersih & listrik',
          'Tidak ada catatan historis pemakaian air harian rumah tangga',
        ],
        afterPoints: [
          'Dashboard web real-time menampilkan volume, persentase, dan animasi tinggi air',
          'Notifikasi instan Telegram Bot saat kapasitas turun <10% atau melebihi >95%',
          'Grafik tren konsumsi Chart.js beserta estimasi biaya tagihan air',
        ],
        pipelineSteps: ['Sensor HC-SR04 + Flow', 'NodeMCU ESP8266', 'Telemetri PHP + MySQL', 'Web UI & Telegram Bot'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / RINGKASAN',
          num: '01 /',
          heading: 'Ringkasan Proyek',
          body: 'Monitoring Toren memadukan sensor mikrokontroler dengan dashboard web dan notifikasi Telegram otomatis untuk memberikan visibilitas cadangan serta konsumsi air rumah tangga secara real-time.',
        },
        {
          id: 'problem',
          tocLabel: '02 / HAMBATAN',
          num: '02 /',
          heading: 'Hambatan Awal',
          body: 'Toren air rumah tangga sering kali meluber atau habis mendadak tanpa peringatan, sedangkan pengecekan manual berisiko dan tidak efisien. Penghuni membutuhkan pemantauan jarak jauh dan peringatan ambang batas otomatis.',
        },
        {
          id: 'architecture',
          tocLabel: '03 / ARSITEKTUR SISTEM',
          num: '03 /',
          heading: 'Arsitektur Sistem',
          body: 'Saya memprogram mikrokontroler NodeMCU ESP8266 dalam bahasa C++ (Arduino IDE) yang membaca sensor jarak ultrasonik HC-SR04 serta sensor debit air. Data dikirim melalui HTTP POST ke backend PHP Native, disimpan ke MySQL, dan memicu pesan Telegram Bot API pada ambang kritis.',
        },
        {
          id: 'ui',
          tocLabel: '04 / DESAIN ANTARMUKA',
          num: '04 /',
          heading: 'Desain Antarmuka',
          body: 'Antarmuka web menampilkan visualisasi gelombang level air, kartu metrik langsung (ketinggian, volume, persentase, dan estimasi biaya), grafik tren Chart.js, serta dukungan tema gelap dan terang.',
        },
        {
          id: 'result',
          tocLabel: '05 / HASIL & DAMPAK',
          num: '05 /',
          heading: 'Hasil & Dampak',
          body: 'Penerapan sistem ini meniadakan kebutuhan inspeksi fisik ke atas menara dan mencegah pemborosan air melalui peringatan instan di Telegram ketika kapasitas berada di bawah 10% atau di atas 95%.',
        },
      ],
      metrics: [
        { num: '100%', label: 'Pencegahan insiden toren meluber berkat peringatan otomatis' },
        { num: '0', label: 'Inspeksi fisik manual ke atas menara toren' },
      ],
      nextProjects: [
        {
          href: '/work/focusly',
          label: 'Aplikasi Web // 05',
          title: 'Focusly App →',
          desc: 'Aplikasi manajemen tugas modern dengan penyimpanan lokal & mode tema.',
        },
        {
          href: '/work/tanos-erp',
          label: 'Enterprise // 01',
          title: 'Tanos ERP →',
          desc: 'Dashboard logistik enterprise PT ILCS untuk koordinasi jadwal armada kargo.',
        },
      ],
    },
  },
  focusly: {
    en: {
      eyebrow: 'CASE STUDY // 05',
      titleMain: 'Focusly',
      titleSerif: 'App.',
      subtitle: 'A lightweight, zero-dependency task management web application featuring dark/light theme toggles, live completion progress bars, and LocalStorage persistence.',
      githubUrl: 'https://github.com/rzqmrf/Focusly',
      coverSrc: '/focusly.png',
      coverAlt: 'Focusly Web Application Interface',
      coverWidth: 1024,
      coverHeight: 502,
      meta: [
        { label: 'PROJECT TYPE', value: 'Personal Project' },
        { label: 'ROLE', value: 'Frontend Developer & Designer' },
        { label: 'TIMELINE', value: '1 Week' },
        { label: 'STACK', value: 'HTML5, CSS3, ES6 JavaScript' },
      ],
      transformation: {
        title: 'Task Experience Comparison',
        beforePoints: [
          'Bloated productivity apps requiring mandatory account sign-ups',
          'Basic to-do lists losing task state after accidental tab refreshes',
          'Static checklists with no visual feedback on daily completion momentum',
        ],
        afterPoints: [
          'Zero-dependency ES6 architecture opening instantaneously (<100ms)',
          'Automatic Web Storage serialization preserving tasks across sessions',
          'Live percentage progress bar, status filters, and smooth theme switching',
        ],
        pipelineSteps: ['Task Input Event', 'ES6 State Reducer', 'LocalStorage Sync', 'DOM Progress Render'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / OVERVIEW',
          num: '01 /',
          heading: 'Overview',
          body: 'Focusly is a responsive web-based task manager built from scratch with vanilla HTML5, CSS3, and modular ES6 JavaScript to help users organize daily priorities without account friction.',
        },
        {
          id: 'problem',
          tocLabel: '02 / THE BOTTLENECK',
          num: '02 /',
          heading: 'The Bottleneck',
          body: 'Many lightweight to-do demos lose data on refresh, while full productivity suites hide simple checklists behind slow onboarding walls. Users needed an instant workspace that remembers tasks locally and rewards completion visually.',
        },
        {
          id: 'architecture',
          tocLabel: '03 / CODE STRUCTURE',
          num: '03 /',
          heading: 'Code Architecture',
          body: 'I structured the app around modular ES6 functions backed by the HTML5 Web Storage API (LocalStorage). Every task mutation serializes cleanly to local storage and hydrates immediately on load with zero external runtime dependencies.',
        },
        {
          id: 'ui',
          tocLabel: '04 / INTERFACE SYSTEM',
          num: '04 /',
          heading: 'Interface System',
          body: 'The interface includes a smooth dark/light theme switcher, a real-time completion progress bar that recalculates as tasks are checked off, custom checkboxes, and instant All / Active / Done filters.',
        },
        {
          id: 'result',
          tocLabel: '05 / RESULT & IMPACT',
          num: '05 /',
          heading: 'Outcome & Impact',
          body: 'Focusly delivers sub-100ms initial render times, reliable offline-friendly local persistence, and a calm, distraction-free daily planning interface.',
        },
      ],
      metrics: [
        { num: '< 100ms', label: 'Initial page load and task list hydration' },
        { num: '100%', label: 'Client-side persistence with zero external dependencies' },
      ],
      nextProjects: [
        {
          href: '/work/tanos-erp',
          label: 'Enterprise // 01',
          title: 'Tanos ERP →',
          desc: 'Enterprise logistics dashboard built for PT ILCS cargo fleet coordination.',
        },
        {
          href: '/work/e-reserv',
          label: 'Web App // 02',
          title: 'E-Reserv Hub →',
          desc: 'Sports field booking portal with dynamic slot generation & Midtrans payments.',
        },
      ],
    },
    id: {
      eyebrow: 'STUDI KASUS // 05',
      titleMain: 'Focusly',
      titleSerif: 'App.',
      subtitle: 'Aplikasi web manajemen tugas ringan tanpa dependensi eksternal yang dilengkapi mode gelap/terang, progress bar real-time, dan penyimpanan LocalStorage.',
      githubUrl: 'https://github.com/rzqmrf/Focusly',
      coverSrc: '/focusly.png',
      coverAlt: 'Antarmuka Aplikasi Web Focusly',
      coverWidth: 1024,
      coverHeight: 502,
      meta: [
        { label: 'JENIS PROYEK', value: 'Proyek Mandiri' },
        { label: 'PERAN', value: 'Frontend Developer & Designer' },
        { label: 'DURASI', value: '1 Minggu' },
        { label: 'TEKNOLOGI', value: 'HTML5, CSS3, ES6 JavaScript' },
      ],
      transformation: {
        title: 'Perbandingan Pengalaman Manajemen Tugas',
        beforePoints: [
          'Aplikasi produktivitas berat yang mewajibkan registrasi akun di awal',
          'Daftar tugas sederhana kehilangan seluruh data saat halaman dimuat ulang',
          'Daftar centang kaku tanpa umpan balik visual atas progres harian',
        ],
        afterPoints: [
          'Arsitektur ES6 murni tanpa library tambahan yang terbuka instan (<100ms)',
          'Sinkronisasi otomatis Web Storage menjaga data tetap utuh antar-sesi',
          'Indikator progres persentase langsung, filter status, dan transisi tema halus',
        ],
        pipelineSteps: ['Input Tugas', 'State Modular ES6', 'Sinkronisasi LocalStorage', 'Render Progres DOM'],
      },
      sections: [
        {
          id: 'overview',
          tocLabel: '01 / RINGKASAN',
          num: '01 /',
          heading: 'Ringkasan Proyek',
          body: 'Focusly adalah aplikasi manajemen tugas berbasis web responsif yang dibangun dari nol menggunakan HTML5, CSS3, dan ES6 JavaScript murni agar pengguna dapat mengatur prioritas harian secara instan.',
        },
        {
          id: 'problem',
          tocLabel: '02 / HAMBATAN',
          num: '02 /',
          heading: 'Hambatan Awal',
          body: 'Aplikasi catatan sederhana kerap kehilangan data ketika tab di-refresh, sementara aplikasi besar menuntut pendaftaran akun yang panjang. Pengguna membutuhkan ruang kerja cepat yang menyimpan progres secara lokal.',
        },
        {
          id: 'architecture',
          tocLabel: '03 / STRUKTUR KODE',
          num: '03 /',
          heading: 'Arsitektur Kode',
          body: 'Saya menyusun kode dengan modul ES6 bersih yang terhubung ke HTML5 Web Storage API (LocalStorage). Setiap perubahan status tugas langsung diserialisasi ke penyimpanan lokal dan dipulihkan seketika saat halaman dibuka kembali.',
        },
        {
          id: 'ui',
          tocLabel: '04 / SISTEM ANTARMUKA',
          num: '04 /',
          heading: 'Sistem Antarmuka',
          body: 'Antarmuka menyediakan pengalih tema gelap/terang yang lembut, bilah progres otomatis yang menghitung persentase penyelesaian secara langsung, kotak centang kustom, serta filter Semua / Aktif / Selesai.',
        },
        {
          id: 'result',
          tocLabel: '05 / HASIL & DAMPAK',
          num: '05 /',
          heading: 'Hasil & Dampak',
          body: 'Focusly menghasilkan waktu muat di bawah 100 milidetik, ketahanan data lokal yang andal tanpa database eksternal, serta ruang fokus bebas distraksi.',
        },
      ],
      metrics: [
        { num: '< 100ms', label: 'Kecepatan muat awal dan pemulihan daftar tugas' },
        { num: '100%', label: 'Persistensi data lokal tanpa ketergantungan database eksternal' },
      ],
      nextProjects: [
        {
          href: '/work/tanos-erp',
          label: 'Enterprise // 01',
          title: 'Tanos ERP →',
          desc: 'Dashboard logistik enterprise PT ILCS untuk koordinasi jadwal armada kargo.',
        },
        {
          href: '/work/e-reserv',
          label: 'Aplikasi Web // 02',
          title: 'E-Reserv Hub →',
          desc: 'Portal reservasi lapangan olahraga dengan slot dinamis & pembayaran Midtrans.',
        },
      ],
    },
  },
};
