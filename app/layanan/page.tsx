import Image from 'next/image';
import Link from 'next/link';
import { Receipt, BarChart, Wallet, Settings, PieChart, CheckCircle2, Target } from 'lucide-react';

export default function Layanan() {
  return (
    <div className="w-full">
      <header className="max-w-3xl mx-auto text-center px-6 pt-16 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight tracking-tight">
          Layanan Bookkeeping dan Advisory untuk UMKM
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Solusi keuangan komprehensif yang dirancang khusus untuk memastikan bisnis Anda tumbuh dengan fondasi finansial yang kuat dan terukur.
        </p>
      </header>

      <div className="space-y-24 max-w-7xl mx-auto px-6 mb-32">
        {/* Monthly Bookkeeping */}
        <section className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-surface-container border border-outline-variant/20 rounded-3xl overflow-hidden relative group shadow-xl shadow-slate-200/50">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlzqZGOvHpAGpPcohz3nFbnCVSZM5_JUxlcU9c3U_3AfDYzFz6sne_nMxQ5gDvDkFn3D5cd58FWWhsUDHfez_mKJD0KvWbKPjFpYsHhcmQ7iWFDakx4KoAScUgI-OpEpKLdUwOH3I5L8dLqNQ0Kz0nJ0W6Ot7Lu9KSwkIAaSDC6hqh_W9i43pD426IgGnL7mUJlv09Ni7hAv_lGQvT53uExWPIgogiqOQlyrNEWcx64f5lwUYtWqKYN9ExMfVhYPaHVxMbDY_WFHX9" 
              alt="Monthly Bookkeeping" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-fixed text-on-primary-fixed rounded-full text-sm font-semibold mb-6">
              <Receipt size={18} />
              Core Service
            </div>
            <h2 className="text-3xl font-bold text-on-surface mb-4">Monthly Bookkeeping</h2>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Pencatatan transaksi harian yang rapi dan akurat untuk memastikan tidak ada data keuangan yang terlewat. Kami mengelola tumpukan nota Anda menjadi data terstruktur.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-secondary" size={20} />
                  Termasuk
                </h3>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>Pencatatan Jurnal Harian</li>
                  <li>Rekonsiliasi Bank Bulanan</li>
                  <li>Penyusunan Buku Besar</li>
                  <li>Manajemen Hutang Piutang</li>
                </ul>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <Target className="text-tertiary-fixed-dim shrink-0" size={20} />
                  Cocok Untuk
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  UMKM Retail, F&B, dan Jasa yang memiliki volume transaksi harian tinggi namun belum memiliki staf admin keuangan khusus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Reporting */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-surface-container border border-outline-variant/20 rounded-3xl overflow-hidden relative group shadow-xl shadow-slate-200/50">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB02H62K6EA7XLjHvCa2gVAPMArTp_wn4NYhZOYH2Cob6bUz_OY3XKDh-NLUFTeP4AiFUVGnlfV5mgrPUr4Pk5cXwKStXeuyoIX2lHTdrygqPIZcnR5qJ6YyHx9knlTV1TCZwwlEDI0paxP24UFyOV1kWJR_RKEwpb8QMW9w8IV31BN_4h4aWdGMSQ5zlEY2il4J1UhNSh6okmS3CWl0h_SZsRb_p2smZpxNloIOBbYmJQOTQZ7sGBaY8pXAMNr9D_8TcvLS-2lRNi" 
              alt="Financial Reporting" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-fixed text-on-primary-fixed rounded-full text-sm font-semibold mb-6">
              <BarChart size={18} />
              Core Service
            </div>
            <h2 className="text-3xl font-bold text-on-surface mb-4">Financial Reporting</h2>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Laporan keuangan bulanan komprehensif yang mudah dibaca. Didesain untuk memberikan insight langsung kepada pemilik bisnis dalam pengambilan keputusan strategis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-secondary" size={20} />
                  Termasuk
                </h3>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>Laporan Laba/Rugi (P&L)</li>
                  <li>Neraca Keuangan (Balance Sheet)</li>
                  <li>Laporan Perubahan Modal</li>
                  <li>Executive Summary Bulanan</li>
                </ul>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <Target className="text-tertiary-fixed-dim shrink-0" size={20} />
                  Cocok Untuk
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Bisnis yang bersiap untuk scale-up, membutuhkan pendanaan dari bank/investor, atau ingin mengevaluasi profitabilitas secara akurat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cash Flow Monitoring */}
        <section className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-surface-container border border-outline-variant/20 rounded-3xl overflow-hidden relative group shadow-xl shadow-slate-200/50">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_nqmACC3Ikdyvxeg9pbLaOXfsz2beLUQuNrPqC2vBRvfv3ucWr2A8X5riMsqP92NNnSuM4ftmGqmiRSp20Ji-UUynSm1I7nx0Wb85XpIV53jX5rEF1hMgGu8pdOfVsGv75qXsaJx2B-8V3pwHJdGgyCrFkiY3WzhlPm1FYN7JqANYlxsuR27D6tuQTeN55SwNmztleZsD9NJIZBESMUchGJjNy4VoEbu7WFEqq0rLjs3j7-lgF5h9eNcJsyVGBMbqATDmJvkdxMUQ" 
              alt="Cash Flow Monitoring" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold mb-6">
              <Wallet size={18} />
              Advisory
            </div>
            <h2 className="text-3xl font-bold text-on-surface mb-4">Cash Flow Monitoring</h2>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Pantau pergerakan uang tunai Anda secara real-time. Kami membantu memproyeksikan arus kas ke depan agar bisnis Anda terhindar dari risiko kehabisan modal operasional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-secondary" size={20} />
                  Termasuk
                </h3>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>Laporan Arus Kas (Cash Flow)</li>
                  <li>Proyeksi Kas 3-6 Bulan</li>
                  <li>Analisis Tren Pengeluaran</li>
                  <li>Alert Saldo Kritis</li>
                </ul>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <Target className="text-tertiary-fixed-dim shrink-0" size={20} />
                  Cocok Untuk
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Startup, Agensi Kreatif, dan Perusahaan B2B dengan siklus pembayaran klien yang panjang atau fluktuatif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Setup Sistem Pembukuan */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-surface-container border border-outline-variant/20 rounded-3xl overflow-hidden relative group shadow-xl shadow-slate-200/50">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxKgWctpchL0ZSc9rgEsXiomNf2MdCmcaOPqsu4KGDNJ5tp7ZIJEDvVTYKcwdHkxl1XTEP8k7oo3rHUL5m6NLsVnXYpbqioCyddPlgz40T7FqQIRlFd9X_F1oU9bFPLb6uSyqZyp7HybjikCeDtCQLyghKLanBsaFxHLmpnGMluK-YAc-iXM6gg0kb4lE2snh-JAXYamWKS4Zi7xCp_FjLr223OWlNtKHWcS5n0hJi4oDOC3cE-wRECS2-5iQ2VVlAycRDt4JCbyN3" 
              alt="Setup Sistem Pembukuan" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-variant text-on-surface-variant rounded-full text-sm font-semibold mb-6">
              <Settings size={18} />
              Implementation
            </div>
            <h2 className="text-3xl font-bold text-on-surface mb-4">Setup Sistem Pembukuan</h2>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Membangun fondasi tata kelola keuangan dari nol menggunakan software akuntansi cloud modern. Transisi mulus dari pencatatan manual ke sistem digital yang otomatis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-secondary" size={20} />
                  Termasuk
                </h3>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>Pemilihan Software (Xero/Jurnal)</li>
                  <li>Desain Chart of Accounts (COA)</li>
                  <li>Migrasi Data Awal</li>
                  <li>Training Tim Internal Anda</li>
                </ul>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <Target className="text-tertiary-fixed-dim shrink-0" size={20} />
                  Cocok Untuk
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Bisnis baru yang ingin rapi sejak awal, atau UMKM mapan yang lelah dengan pencatatan excel manual dan rentan error.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Financial Review */}
        <section className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-surface-container border border-outline-variant/20 rounded-3xl overflow-hidden relative group shadow-xl shadow-slate-200/50">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbVt_zKCVsgT0yNBiPDe9WxTFKt6MPA0bh9S5ycro-itwzU67gkbkAXWhGGqdypSmkIDdJwX64cz9b09ERmIh7DnJ7hyfPGObHBkteDt-Hxu0tINqka_Sx_ZeUc3nR0znqPunWxKZZJMvd-IlNDk6V9MPZSCEqlGjfQTzY1BiosNjeH9ivF5H4i9DdEdZimC93m9wMSlvIm_-Sslh09zGcwjn3AZDnFzC3-jiL6VXFC835Vn_ZjQDMwByZ6a0hHxDpELi5EIqhR7lu" 
              alt="Business Financial Review" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold mb-6">
              <PieChart size={18} />
              Advisory
            </div>
            <h2 className="text-3xl font-bold text-on-surface mb-4">Business Financial Review</h2>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Audit internal dan analisis mendalam terhadap kesehatan finansial bisnis Anda. Kami mengidentifikasi inefisiensi, kebocoran biaya, dan peluang optimalisasi profit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-secondary" size={20} />
                  Termasuk
                </h3>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>Analisis Rasio Keuangan</li>
                  <li>Identifikasi Cost Inefficiency</li>
                  <li>Review Margin Profit</li>
                  <li>Sesi Konsultasi Strategis 1-on-1</li>
                </ul>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                  <Target className="text-tertiary-fixed-dim shrink-0" size={20} />
                  Cocok Untuk
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Pemilik bisnis yang merasa &quot;omzet besar tapi uangnya tidak terlihat&quot;, atau bisnis yang sedang merencanakan ekspansi masif.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-surface-container-highest/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl border border-surface-variant/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-lowest/40 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6 relative z-10">Belum Tahu Layanan Mana yang Cocok?</h2>
          <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Ceritakan kondisi bisnis Anda, dan tim expert kami akan merekomendasikan solusi pembukuan dan advisory yang paling tepat untuk kebutuhan Anda saat ini.
          </p>
          <Link href="/kontak" className="inline-flex items-center justify-center bg-secondary text-white px-8 py-4 rounded-full text-base font-bold hover:bg-emerald-700 transition-transform hover:-translate-y-1 shadow-lg relative z-10 duration-300">
            Konsultasi Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
