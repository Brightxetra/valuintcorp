import Image from 'next/image';
import { Compass, Eye, Flag, Lightbulb, Sparkles, ShieldCheck, Wrench, TrendingUp, Handshake, User } from 'lucide-react';

export default function TentangKami() {
  return (
    <div className="w-full">
      <section className="text-center max-w-3xl mx-auto px-6 pt-16 mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Tentang Valuintcorp</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Menjembatani kesenjangan antara strategi bisnis dan wawasan finansial. Kami berdedikasi untuk memberdayakan UMKM melalui analisis data, kejelasan, dan kemitraan strategis.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 md:mb-32">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight leading-tight">
            Dibangun untuk Membantu Pemilik UMKM Memahami Angka Bisnisnya
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full"></div>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Banyak bisnis kecil dan menengah di Indonesia memiliki potensi besar namun seringkali tersandung oleh kurangnya transparansi finansial dan sistem pembukuan yang rumit. Valuintcorp lahir dari visi untuk menyederhanakan kompleksitas tersebut.
          </p>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Kami tidak hanya sekadar menyusun laporan keuangan; kami menerjemahkannya menjadi wawasan yang dapat ditindaklanjuti. Dengan pendekatan profesional yang hangat dan ramah, kami meruntuhkan stigma &quot;kaku&quot; pada layanan konsultasi keuangan, menjadikannya mitra pertumbuhan yang dapat diandalkan.
          </p>
        </div>
        <div className="lg:col-span-7 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 h-[400px] md:h-[500px]">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxqTenbOz79LNSe_9WLKzUhH89btcZS-PCJmQPMS4WvKTwa5LX_fjeUO0YVJ5TWC94hONj8lF-18laPgjS0Zz-VUSorDFjMJO6t1E47qkomib3o-tj3SBnEFsuTKnYV3pm4Fu1ISENMz_I5JL7vq4cagyySBZvw6HoqCFrgGZ-GvcP52Pc91KiLjIlwx5cz1jUagLYehf-YRSRIq6YMFywbEHP0NaPtvFzCzhXr8R2KYi3RZFp5Cim0PU3_ewMswKvSHyZrYaDeHqE" 
              alt="Tim konsultan sedang berdiskusi hangat dengan pemilik UMKM" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-fixed rounded-full mix-blend-multiply opacity-50 blur-2xl z-[-1]"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-32">
        <div className="bg-surface-container-lowest p-10 md:p-12 rounded-3xl shadow-xl border border-surface-variant/80 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <Compass size={120} className="text-secondary" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-primary-fixed text-primary flex items-center justify-center rounded-2xl mb-8">
              <Flag size={28} />
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-4">Misi Kami</h3>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Menyediakan layanan konsultasi finansial dan akuntansi yang praktis, transparan, dan terjangkau bagi UMKM. Kami berkomitmen untuk mengubah data mentah menjadi narasi bisnis yang mudah dipahami, memungkinkan setiap pengusaha mengambil keputusan dengan penuh percaya diri.
            </p>
          </div>
        </div>

        <div className="bg-secondary p-10 md:p-12 rounded-3xl shadow-2xl shadow-emerald-900/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Eye className="text-white" size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 text-white flex items-center justify-center rounded-2xl mb-8 backdrop-blur-sm">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Visi Kami</h3>
            <p className="text-base text-white/90 leading-relaxed">
              Menjadi katalisator utama pertumbuhan dan stabilitas UMKM di Indonesia, menciptakan ekosistem bisnis di mana setiap pemilik usaha memiliki literasi keuangan yang kuat dan fondasi ekonomi yang tangguh untuk menghadapi masa depan.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">Nilai Inti Perusahaan</h2>
          <p className="text-base text-on-surface-variant">Prinsip yang membimbing setiap analisis, keputusan, dan interaksi kami dengan mitra klien.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-md border border-outline-variant/30 group hover:border-secondary/30 transition-colors">
            <Sparkles className="text-secondary mb-6" size={32} />
            <h4 className="text-xl font-bold text-on-surface mb-3">Clarity</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Menghadirkan kejelasan di tengah angka-angka yang membingungkan. Laporan kami bebas jargon dan langsung pada intinya.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-md border border-outline-variant/30 group hover:border-secondary/30 transition-colors">
            <ShieldCheck className="text-secondary mb-6" size={32} />
            <h4 className="text-xl font-bold text-on-surface mb-3">Integrity</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Kepatuhan dan kejujuran tanpa kompromi. Kami menjaga rahasia dapur bisnis Anda dengan standar etika tertinggi.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-md border border-outline-variant/30 group hover:border-secondary/30 transition-colors">
            <Wrench className="text-secondary mb-6" size={32} />
            <h4 className="text-xl font-bold text-on-surface mb-3">Practicality</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Solusi yang dapat diterapkan secara realistis sesuai dengan skala dan sumber daya spesifik yang dimiliki UMKM.</p>
          </div>
          <div className="lg:col-start-2 lg:col-span-1 bg-surface-container-lowest p-8 rounded-2xl shadow-md border border-outline-variant/30 group hover:border-secondary/30 transition-colors">
            <TrendingUp className="text-secondary mb-6" size={32} />
            <h4 className="text-xl font-bold text-on-surface mb-3">Growth-Oriented</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Setiap metrik yang kami ukur ditujukan untuk satu tujuan: mendorong profitabilitas dan skalabilitas bisnis Anda ke tahap selanjutnya.</p>
          </div>
          <div className="lg:col-span-1 bg-surface-container-lowest p-8 rounded-2xl shadow-md border border-outline-variant/30 group hover:border-secondary/30 transition-colors">
            <Handshake className="text-secondary mb-6" size={32} />
            <h4 className="text-xl font-bold text-on-surface mb-3">Partnership</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Bukan sekadar vendor, melainkan rekan seperjuangan. Kami mendengarkan, memahami, dan berjalan beriringan bersama Anda.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low rounded-[3rem] p-12 md:p-24 text-center max-w-7xl mx-auto px-6 mb-24 md:mb-32 mx-4 md:mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-16 tracking-tight">Tim Kepemimpinan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-xl text-center group border border-surface-variant">
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-8 border-4 border-surface-variant group-hover:border-secondary transition-colors duration-300">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR7TPhZpdqYtxfRfYdgxPY0bG2Sq6IsFqJSUysZBo78PYv30SeUalhKgTKEyG15VhHN8D0-ZiekCqlGY5lGIo68Dp2m_BKBW6hPgWv3-Q_Gc28hjW2EVEpXDBeC_F4JSSbiyUUnfzPvC621Fx2Z0GDqUNk6q7eQllcscWf7pp4MLzE1HJUGnPueGFsGCYtLdv-sjs_7anHgTrXkDWcQnC42eb0Tl_uowdkocFaUt2B0XjcoDYUCC2fDUNWTgysPEBwFWrxQqdLHbqP" 
                alt="Founder" 
                width={144} height={144} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-bold text-on-surface">Founder</h3>
            <p className="text-sm font-semibold text-secondary mt-2 mb-6">Founder & Principal Advisor</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Dengan pengalaman lebih dari satu dekade di bidang audit dan konsultasi manajemen, mendedikasikan keahliannya untuk membangun fondasi keuangan yang kuat bagi pengusaha lokal.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-xl text-center group border border-surface-variant">
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-8 border-4 border-surface-variant group-hover:border-secondary transition-colors duration-300">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUcNWmZjE0bja0rvV_ASTehMrZIolobm4DhfU53N-a6rf1CEoxpaOBYWLWqU-HrNbNGVT2wkBJC5C-AQqOtO8oTnZamHB1f8jnbObwbV3NovOmIvm3AqMcxNMBLixcfGl3s5SfU0WAIzuXtFVs_y2_f5qD_g0eEMu6Bkl3Mo4aj7t02LEtwSB2fx0G2l1KUZrahYL81CcIKL3bIQNkjOKwlIiWxgUS06Q-uEPuVufnn7_6AbIVWSYJrD4NUaDQXlQzn0xoSxgRN9FH" 
                alt="Co-Founder" 
                width={144} height={144} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-bold text-on-surface">Co-Founder</h3>
            <p className="text-sm font-semibold text-secondary mt-2 mb-6">Operations & Strategy</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Pakar operasional yang memastikan sistem pencatatan klien berjalan efisien dan terintegrasi. Memiliki pengalaman luas dalam manajemen proses bisnis untuk UMKM.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-xl text-center group border border-surface-variant">
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-8 border-4 border-surface-variant group-hover:border-secondary transition-colors duration-300 bg-surface flex items-center justify-center">
              <User className="text-outline-variant" size={64} />
            </div>
            <h3 className="text-2xl font-bold text-on-surface">Co-Founder</h3>
            <p className="text-sm font-semibold text-secondary mt-2 mb-6">Partner & Operations</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Pakar strategis yang memastikan operasional klien berjalan secara efisien. Membawa pengalaman luas dalam restrukturisasi bisnis dan efisiensi pajak bagi sektor UMKM.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
