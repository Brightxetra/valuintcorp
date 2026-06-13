import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Building2, Handshake, Search, WalletCards, type LucideIcon } from 'lucide-react';

type Post = {
  tag: string;
  title: string;
  desc: string;
  date: string;
  img?: string;
  icon?: LucideIcon;
};

const posts: Post[] = [
  {
    tag: "Bookkeeping Dasar",
    title: "5 Kesalahan Umum Pembukuan yang Sering Dilakukan UMKM",
    desc: "Hindari jebakan pencatatan keuangan yang dapat merugikan arus kas bisnis kecil Anda di masa depan.",
    date: "Okt 12, 2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDACB1A-0Qq3dUQrj4LtFek3M2FcNgvP1NQJ_DnrWSoTjFEINj3-MCIX_diDyUjEjEwfhfKzxKnxkGMRkU9a8_ziSKTOjgLRuj-BRgmH2yhSze3GIF2H4G6IaiU4wBudldXbWbTSCphft8QWQx4Wa5bPEa-TG8IAvUiI5E2Z-xQz_cUA0i1PZhmSjjueXXQSaY2dV_0LFmgPUZvR0Se52eywD6Rp9KCBLnYzCwCqE82gpTa19Ni5MYC3Z7wIkTu8n6SvItqwVUtrxND"
  },
  {
    tag: "Manajemen Arus Kas",
    title: "Strategi Manajemen Arus Kas untuk Bertahan di Masa Krisis",
    desc: "Teknik praktis mempertahankan likuiditas saat penjualan menurun atau ketidakpastian ekonomi melanda.",
    date: "Okt 05, 2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMRYqmlvCJc8NwJC-Gs6HQYrzae2BtXM9LyqDspgnYSWBlqA-RqqVPLPXyM1jxZk-wJJGVmxccurDDBrRndPTOwTWaqHg-I64mYnfYdih6PJ2zBH7SrdaZbVLhtZua9U6UUT9UZ5DGkN1GHAWYXAujiKN3J4lU-5r-ApP975LKLrrD53Z5IShEIVy8K01OWEACAdF78lE8aK35a9JSwXMGDqqN6Kf3Ciqst8Uv7rKsoXfRn0OhOaDPz03yrjuqVp0vQUMPPvzuzWoe"
  },
  {
    tag: "Perencanaan Pajak",
    title: "Panduan Lengkap Perencanaan Pajak Akhir Tahun",
    desc: "Langkah-langkah legal dan efisien untuk mengoptimalkan kewajiban pajak bisnis Anda sebelum tutup buku.",
    date: "Sep 28, 2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9hGFfJ7I-OHsJv4L-7-euj8-qUTQJ6zX-pdAa33WItfQEM-oUZYVV7G0onwnGvz1w_gVQ-kGasO9AQYm3AT1l36XG5Jmr9pMF0AlU9x4McmL3nYfJBf6ciIHDgzMZzW9BFv0BVKLeH0-xPSy2uBtph0p7Zo3X_JGY5gPx_wIOYvCb-FBsVx4nEbFkj0qhOBaujEf-AftqP22P56gJ5qhDJhpiD6v78v6ATLPOCuEqHB3d3bBgAIW6F4IwdeaYvHw1lVARWHmqvKP9"
  },
  {
    tag: "Strategi Pendanaan",
    title: "Cara Mendapatkan Pendanaan Modal Ventura untuk Startup Anda",
    desc: "Persiapkan pitch deck dan metriks keuangan yang tepat untuk memikat hati investor institusional.",
    date: "Sep 15, 2024",
    icon: Building2
  },
  {
    tag: "Bookkeeping Dasar",
    title: "Mengapa Pisahkan Rekening Pribadi dan Bisnis Itu Wajib?",
    desc: "Langkah pertama menuju profesionalisme finansial dan kemudahan pelacakan aset perusahaan.",
    date: "Sep 02, 2024",
    icon: WalletCards
  },
  {
    tag: "Manajemen Arus Kas",
    title: "Tips Negosiasi Termin Pembayaran dengan Pemasok",
    desc: "Perpanjang napas kas Anda tanpa merusak hubungan baik dengan vendor utama.",
    date: "Agt 20, 2024",
    icon: Handshake
  }
];

export default function Insight() {
  return (
    <div className="w-full">
      <section className="text-center max-w-3xl mx-auto px-6 pt-16 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">Insight Keuangan untuk UMKM</h1>
        <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
          Temukan panduan, tips praktis, dan analisis ahli untuk membantu bisnis Anda tumbuh secara berkelanjutan. Dari pembukuan dasar hingga strategi pendanaan.
        </p>
        
        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-outline" size={20} />
          <input 
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-full py-4 pl-14 pr-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow shadow-md text-base" 
            placeholder="Cari artikel, topik, atau panduan..." 
            type="text" 
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-6 py-2.5 rounded-full bg-secondary text-white text-sm font-semibold transition-all shadow-md">Semua Topik</button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-secondary hover:text-secondary text-sm font-semibold transition-all">Bookkeeping Dasar</button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-secondary hover:text-secondary text-sm font-semibold transition-all">Manajemen Arus Kas</button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-secondary hover:text-secondary text-sm font-semibold transition-all">Perencanaan Pajak</button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-secondary hover:text-secondary text-sm font-semibold transition-all">Strategi Pendanaan</button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <article className="col-span-1 md:col-span-2 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-lg shadow-indigo-900/5 flex flex-col md:flex-row group transition-all duration-300 border border-surface-variant hover:shadow-xl">
          <div className="md:w-1/2 h-72 md:h-auto bg-surface-container overflow-hidden relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCegTa3dBHO2hJtScfwaO86rXmKK-jGPuRxu1aT98sYV1WCd4Z4B9Xbi80T8V4xHjsIhXD-AvvA05u_eJM1dt2PplwtdRTZNfBtKi7qSFJw2sEJnQQlhpg6z5SY9CIw7NVTecrG2yT3OCYvkkdKlOauI0xBMRi8wBxAidpHJCeBs3Mbij1TtyX3GMSzJx5RZWIPZ5BLqo00b3xNBTz4Rcngi54KhV4bUB70dTgq-JZ2SjAukhprFJqUBMMPbNzbX2N02-8vZvVP8fYS" 
              alt="Featured Post" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">Strategi Pendanaan</span>
              <span className="text-on-surface-variant text-sm font-semibold">5 Menit Membaca</span>
            </div>
            <h2 className="text-3xl font-bold text-on-surface mb-6 group-hover:text-secondary transition-colors leading-tight">
              Membangun Laporan Keuangan yang Menarik Perhatian Investor
            </h2>
            <p className="text-base text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
              Bagi UMKM yang ingin naik kelas, laporan keuangan bukan sekadar kewajiban administratif, melainkan alat komunikasi utama dengan calon investor. Pelajari komponen kunci yang selalu dicari oleh pemodal ventura.
            </p>
            <Link href="#" className="text-sm font-semibold text-secondary flex items-center gap-2 hover:gap-3 transition-all">
              Baca Selengkapnya
              <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {posts.map((post, i) => {
          const Icon = post.icon;

          return (
          <article key={i} className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-lg shadow-indigo-900/5 flex flex-col group transition-all duration-300 border border-surface-variant hover:-translate-y-1">
            <div className="h-56 overflow-hidden relative bg-gradient-to-br from-surface-container-high to-surface-container-low flex items-center justify-center">
              {post.img ? (
                <Image 
                  src={post.img} 
                  alt={`Blog Post ${i + 1}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              ) : Icon ? (
                <Icon className="text-primary-fixed-dim shrink-0" size={64} />
              ) : null}
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-secondary text-xs uppercase font-bold tracking-wider mb-4">{post.tag}</span>
              <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-sm text-on-surface-variant mb-8 line-clamp-2 flex-grow leading-relaxed">{post.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-surface-variant">
                <span className="text-on-surface-variant text-sm font-medium">{post.date}</span>
                <Link href="#" className="text-secondary hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </article>
        )})}
      </section>

      <div className="flex justify-center items-center gap-3 mb-32">
        <button className="w-12 h-12 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors">
          <ArrowLeft size={18} />
        </button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary text-white text-sm font-bold shadow-md">1</button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors text-sm font-bold">2</button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors text-sm font-bold">3</button>
        <span className="text-on-surface-variant px-2">...</span>
        <button className="w-12 h-12 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
