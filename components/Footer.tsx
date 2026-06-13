import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full py-16 px-6 bg-surface-container-highest/50 border-t border-outline-variant/20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Brand / Logo Area */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <Link href="/" className="font-bold text-2xl text-on-surface flex items-center gap-2">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwxK-31h5FG9XZ7TYKAz8XzFfzZi4ZP-F2WmCYQQK2-j2xe5irryKlHc0WLvkZsx7wenXglxVxuh9m2N2j_zTVP7LsVh88Eoil2CtNPXyd2cbsOKRwL06vs3tKxNDeBEtD19wTeCtQM6uGcW2HD4f1jthIcA6faD5VfAEk_3RGDqveOsJgdpIU5B0yIMhoGI9iQwW4mKL3pwnn3YJN8T7kyJ9wJAHjTCL4Xc00SGOAEjej1cSUHBcS99WpX8b0tIUu-H0rVj8jrUvm" alt="Valuintcorp" width={40} height={40} className="rounded" />
            <span>Valuintcorp</span>
          </Link>
          <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
            Partner bookkeeping & advisory keuangan terpercaya untuk pertumbuhan UMKM yang berkelanjutan.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-sm text-on-surface font-bold uppercase tracking-wider mb-2">Legal</h4>
          <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200">Kebijakan Privasi</Link>
          <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200">Syarat & Ketentuan</Link>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-sm text-on-surface font-bold uppercase tracking-wider mb-2">Kontak</h4>
          <a href="mailto:info@valuintcorp.com" className="text-on-surface-variant hover:text-secondary transition-colors duration-200">Email: info@valuintcorp.com</a>
          <a href="https://wa.me/6281234567890" className="text-on-surface-variant hover:text-secondary transition-colors duration-200">WhatsApp: +62 812-3456-7890</a>
          <span className="text-on-surface-variant">Lokasi: Indonesia</span>
        </div>

        {/* Socials */}
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-sm text-on-surface font-bold uppercase tracking-wider mb-2">Sosial Media</h4>
          <div className="flex flex-col gap-2">
            <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200">Instagram</Link>
            <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200">LinkedIn</Link>
            <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200">TikTok</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/30 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-on-surface-variant">&copy; 2024 Valuintcorp. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
