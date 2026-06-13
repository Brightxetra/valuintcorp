import Image from 'next/image';
import Link from 'next/link';
import { X, Receipt, BarChart2, Lightbulb, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full px-6 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">Solusi Keuangan Terpercaya</span>
            <h1 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight tracking-tight">
              Bookkeeping dan Advisory Keuangan untuk UMKM yang Ingin Tumbuh Lebih Tertata
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Kami hadir sebagai partner strategis untuk merapikan pembukuan, menyajikan laporan yang mudah dipahami, dan memberikan insight berharga untuk kemajuan bisnis Anda.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/kontak" className="bg-secondary text-white px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-md text-center">
                Konsultasi Gratis
              </Link>
              <Link href="/layanan" className="bg-transparent border border-outline text-on-surface px-8 py-3 rounded-full text-sm font-semibold hover:bg-surface-container-low transition-colors text-center">
                Lihat Layanan Kami
              </Link>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/10 border border-outline-variant/20">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO0P-rWX7mPvYTUQk5_Tn02gofllJWtRd-YuCK2txDf0lP3YVFrfkb44iu9ofqMIGzfeuyIh5amOxfDt1-lchH-GqKqpZq3o8HP58bHS6vpJNQwe-zp7jgjd67FAQ13evJx3CFmw2Aaez-UOh3rtsjd6tXOZMuJnm_p_HbbWMrPR8O2ULqZPtk57eQQAOa8BlPlGU1nYXqcF6WZQKyQ4LDh14mEUupWCk-zJDrAUS69U7TQ_x6SCrXHpN5coCbCCC_65COj3FkQFdQ" 
              alt="Hero Illustration" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full bg-surface-container-lowest py-16 md:py-24 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6 tracking-tight">Apakah Keuangan Usaha Anda Masih Sulit Dibaca?</h2>
            <p className="text-base text-on-surface-variant">Banyak pelaku UMKM yang terjebak pada masalah operasional dan mengabaikan administrasi keuangan, padahal data tersebut sangat krusial.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Pencatatan Berantakan', desc: 'Transaksi masih dicampur aduk atau hanya diingat di kepala tanpa dokumentasi rapi.' },
              { title: 'Sulit Hitung Profit', desc: 'Omset besar tapi tidak tahu persis berapa keuntungan bersih yang sebenarnya didapat.' },
              { title: 'Waktu Habis untuk Admin', desc: 'Terlalu banyak waktu terbuang untuk urusan rekap data manual setiap akhir bulan.' },
              { title: 'Takut Urusan Pajak', desc: 'Khawatir salah lapor atau denda karena tidak paham regulasi perpajakan yang berlaku.' },
              { title: 'Keputusan Tanpa Data', desc: 'Mengambil langkah bisnis hanya berdasarkan insting, bukan analisis angka riil.' },
              { title: 'Kesulitan Ajukan Pinjaman', desc: 'Ditolak bank atau investor karena tidak memiliki laporan keuangan yang standar dan valid.' }
            ].map((item, i) => (
              <div key={i} className="bg-surface p-6 rounded-xl border border-surface-variant flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="bg-error-container text-on-error-container p-2 rounded-full shrink-0">
                  <X size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-on-surface mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="w-full py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6 tracking-tight">Kami Membantu Anda Mengubah Transaksi Menjadi Informasi Bisnis</h2>
            <p className="text-base text-on-surface-variant">Pendekatan kami lebih dari sekadar mencatat; kami menyajikan wawasan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-lg border border-transparent hover:border-surface-variant shadow-indigo-900/5 hover:-translate-y-1 transition-all text-center">
              <div className="w-16 h-16 bg-[#F4B740]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Receipt className="text-[#F4B740]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Pembukuan Lebih Rapi</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">Setiap transaksi terklasifikasi dengan benar sesuai standar akuntansi, meminimalisir kesalahan dan kehilangan data.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-lg border-t-4 border-t-secondary shadow-indigo-900/5 hover:-translate-y-1 transition-all text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart2 className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Laporan Mudah Dipahami</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">Laporan disajikan dalam format visual yang jelas, tidak berbelit, sehingga mudah dimengerti meski tanpa latar belakang akuntansi.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-lg border border-transparent hover:border-surface-variant shadow-indigo-900/5 hover:-translate-y-1 transition-all text-center">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Keputusan Lebih Percaya Diri</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">Dengan data yang akurat dan tepat waktu, Anda dapat mengambil langkah strategis bisnis tanpa keraguan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-primary text-on-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Siap Membuat Keuangan Usaha Anda Lebih Tertata?</h2>
          <p className="text-lg text-primary-fixed-dim mb-10 max-w-2xl mx-auto">Jangan biarkan masalah pembukuan menghambat laju pertumbuhan bisnis Anda. Hubungi tim ahli kami sekarang untuk evaluasi awal.</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-secondary text-white px-10 py-4 rounded-full text-base font-bold hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-emerald-900/20">
            <Calendar size={24} />
            Jadwalkan Konsultasi Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
