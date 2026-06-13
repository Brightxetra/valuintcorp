import { Leaf, TrendingUp, LineChart, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PaketHarga() {
  return (
    <div className="w-full">
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
          Paket Bookkeeping yang Fleksibel untuk UMKM
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Solusi keuangan profesional yang dirancang khusus untuk mendukung pertumbuhan bisnis Anda dengan biaya yang terjangkau dan transparan.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 text-center">
          <span className="text-sm font-semibold text-secondary">Penawaran Terbatas: Akses Gratis untuk Klien Terpilih (Project Demo)</span>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col hover:-translate-y-1 transition-all duration-300 border border-surface-variant shadow-lg shadow-indigo-900/5">
            <div className="mb-6">
              <Leaf className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold text-on-surface mb-2">Paket Starter</h3>
              <p className="text-base text-on-surface-variant">Khusus Project Demo</p>
            </div>
            <div className="mb-8">
              <span className="text-base text-on-surface-variant">Mulai</span>
              <div className="text-4xl font-bold text-on-surface mt-1">GRATIS</div>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Pencatatan hingga 100 transaksi</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Laporan Laba Rugi Bulanan</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Rekonsiliasi 1 Rekening Bank</span>
              </li>
            </ul>
            <Link href="/kontak" className="w-full py-4 text-center rounded-xl text-sm font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
              Daftar Demo Gratis
            </Link>
          </div>

          {/* Growth Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 border-2 border-secondary shadow-xl shadow-indigo-900/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
              Paling Populer
            </div>
            <div className="mb-6">
              <TrendingUp className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold text-on-surface mb-2">Paket Growth</h3>
              <p className="text-base text-on-surface-variant">Khusus Project Demo</p>
            </div>
            <div className="mb-8">
              <span className="text-base text-on-surface-variant">Mulai</span>
              <div className="text-4xl font-bold text-on-surface mt-1">GRATIS</div>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Pencatatan hingga 500 transaksi</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Laporan Keuangan Lengkap</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Rekonsiliasi hingga 3 Rekening</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Sesi Review Bulanan (1 Jam)</span>
              </li>
            </ul>
            <Link href="/kontak" className="w-full py-4 text-center rounded-xl text-sm font-bold bg-secondary text-white hover:opacity-90 transition-opacity">
              Daftar Demo Gratis
            </Link>
          </div>

          {/* Advisory Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col hover:-translate-y-1 transition-all duration-300 border border-surface-variant shadow-lg shadow-indigo-900/5">
            <div className="mb-6">
              <LineChart className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold text-on-surface mb-2">Paket Advisory</h3>
              <p className="text-base text-on-surface-variant">Khusus Project Demo</p>
            </div>
            <div className="mb-8">
              <span className="text-base text-on-surface-variant">Mulai</span>
              <div className="text-4xl font-bold text-on-surface mt-1">GRATIS</div>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Pencatatan transaksi tidak terbatas*</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Analisis Rasio Keuangan & KPI</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Perencanaan Pajak Dasar</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-base text-on-surface-variant">Sesi Advisory Intensif</span>
              </li>
            </ul>
            <Link href="/kontak" className="w-full py-4 text-center rounded-xl text-sm font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
              Daftar Demo Gratis
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-primary text-on-primary rounded-2xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-8 md:mb-0 md:mr-10 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Butuh Paket Khusus?</h2>
            <p className="text-lg text-on-primary/80 max-w-xl leading-relaxed">
              Kami memahami setiap bisnis memiliki keunikan. Diskusikan kebutuhan spesifik Anda dengan tim konsultan kami untuk merancang paket yang paling sesuai.
            </p>
          </div>
          <Link href="/kontak" className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full text-base font-bold hover:bg-surface-container transition-colors whitespace-nowrap">
            Hubungi Kami
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <p className="text-sm font-semibold text-on-surface-variant leading-relaxed">
          *Harga yang tertera merupakan harga estimasi awal dan dapat menyesuaikan dengan kompleksitas bisnis Anda. Harga belum termasuk pajak yang berlaku. S&K Berlaku.
        </p>
      </section>
    </div>
  );
}
