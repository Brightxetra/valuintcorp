import { Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Kontak() {
  return (
    <div className="w-full">
      <div className="text-center mb-16 pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
          Mari Rapikan Keuangan Usaha Anda
        </h1>
        <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed px-6">
          Tinggalkan pengelolaan keuangan yang rumit. Tim ahli kami siap membantu Anda membangun sistem akuntansi yang kokoh, transparan, dan mendukung pertumbuhan bisnis yang berkelanjutan.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        {/* Form Section */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden border border-surface-variant">
          <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-8 tracking-tight">Mulai Transformasi Bisnis Anda</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2" htmlFor="nama">Nama Lengkap</label>
                <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" id="nama" placeholder="Masukkan nama Anda" type="text" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2" htmlFor="email">Alamat Email</label>
                <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" id="email" placeholder="email@contoh.com" type="email" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2" htmlFor="wa">Nomor WhatsApp</label>
                <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" id="wa" placeholder="+62 8xx xxxx xxxx" type="tel" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2" htmlFor="bisnis">Nama Bisnis / Perusahaan</label>
                <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" id="bisnis" placeholder="Nama entitas bisnis" type="text" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2" htmlFor="jenis">Kategori Industri</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none text-on-surface" id="jenis" defaultValue="">
                  <option disabled value="">Pilih kategori industri</option>
                  <option value="retail">Retail / F&B</option>
                  <option value="jasa">Jasa / Profesional</option>
                  <option value="manufaktur">Manufaktur / Produksi</option>
                  <option value="tech">Teknologi / Startup</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2" htmlFor="transaksi">Estimasi Transaksi per Bulan</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none text-on-surface" id="transaksi" defaultValue="">
                  <option disabled value="">Pilih rentang transaksi</option>
                  <option value="<50">&lt; 50 Transaksi</option>
                  <option value="50-200">50 - 200 Transaksi</option>
                  <option value="200-500">200 - 500 Transaksi</option>
                  <option value=">500">&gt; 500 Transaksi</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-on-surface-variant mb-2" htmlFor="pesan">Ceritakan Tantangan Keuangan Anda</label>
              <textarea className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none" id="pesan" placeholder="Apa yang bisa kami bantu rapikan?" rows={4}></textarea>
            </div>
            
            <div className="pt-4">
              <button className="w-full md:w-auto bg-secondary text-white px-8 py-4 rounded-xl text-sm font-bold hover:opacity-90 transition-colors shadow-lg" type="button">
                Kirim Permintaan Konsultasi
              </button>
            </div>
          </form>
        </div>

        {/* Side Info Section */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-highest/30 rounded-2xl p-8 border border-surface-variant h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-on-surface mb-4">Ingin Konsultasi Lebih Cepat?</h3>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Tim advisor kami siap merespons pertanyaan Anda melalui WhatsApp untuk diskusi singkat mengenai kebutuhan bisnis Anda.
            </p>
            <Link href="#" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl text-sm font-bold hover:bg-[#1DA851] transition-colors shadow-md">
              <MessageCircle size={20} />
              Hubungi via WhatsApp
            </Link>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-surface-variant shadow-sm">
            <h3 className="text-xs font-bold text-on-surface mb-6 uppercase tracking-wider opacity-70">Informasi Kantor</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-on-surface-variant">
                <Mail className="mt-1 text-secondary" size={24} />
                <div>
                  <span className="block text-sm font-bold text-on-surface mb-1">Email</span>
                  <a className="text-base hover:text-secondary transition-colors" href="mailto:info@valuintcorp.com">info@valuintcorp.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-on-surface-variant">
                <MapPin className="mt-1 text-secondary" size={24} />
                <div>
                  <span className="block text-sm font-bold text-on-surface mb-1">Lokasi</span>
                  <span className="text-base leading-relaxed">Jakarta, Indonesia<br/>(Konsultasi Online Tersedia)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
