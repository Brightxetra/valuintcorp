'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const erpLoginUrl = 'https://valuintcorp-erp.vercel.app/login';

  const links = [
    { href: '/', label: 'Home' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/paket-harga', label: 'Paket Harga' },
    { href: '/tentang-kami', label: 'Tentang Kami' },
    { href: '/insight', label: 'Insight' },
    { href: '/faq', label: 'FAQ' },
    { href: '/kontak', label: 'Kontak' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-sm transition-all border-b border-outline-variant/20">
      <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="font-bold text-2xl text-on-surface flex items-center gap-2">
          <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwxK-31h5FG9XZ7TYKAz8XzFfzZi4ZP-F2WmCYQQK2-j2xe5irryKlHc0WLvkZsx7wenXglxVxuh9m2N2j_zTVP7LsVh88Eoil2CtNPXyd2cbsOKRwL06vs3tKxNDeBEtD19wTeCtQM6uGcW2HD4f1jthIcA6faD5VfAEk_3RGDqveOsJgdpIU5B0yIMhoGI9iQwW4mKL3pwnn3YJN8T7kyJ9wJAHjTCL4Xc00SGOAEjej1cSUHBcS99WpX8b0tIUu-H0rVj8jrUvm" alt="Valuintcorp" width={40} height={40} className="rounded" />
          <span>Valuintcorp</span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden xl:flex items-center gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-secondary border-b-2 border-secondary pb-1 opacity-80'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Primary Action */}
        <div className="hidden xl:flex items-center">
          <Link href={erpLoginUrl} className="bg-transparent border border-secondary text-secondary px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-surface-container-low transition-colors mr-4">
            Login
          </Link>
          <Link href="/kontak" className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
            Konsultasi Gratis
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          className="xl:hidden text-on-surface p-2"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div id="mobile-navigation" className="xl:hidden bg-surface-container-lowest border-t border-outline-variant/20 py-4 px-6 flex flex-col gap-4 shadow-lg absolute w-full">
           {links.map((link) => (
             <Link
               key={link.href}
               href={link.href}
               className={`text-base font-semibold ${pathname === link.href ? 'text-secondary' : 'text-on-surface-variant'}`}
               onClick={() => setIsOpen(false)}
             >
               {link.label}
             </Link>
           ))}
           <div className="border-t border-outline-variant/20 pt-4 flex flex-col gap-3">
             <Link href={erpLoginUrl} className="text-center bg-transparent border border-secondary text-secondary px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-surface-container-low transition-colors" onClick={() => setIsOpen(false)}>Login ERP</Link>
             <Link href="/kontak" className="text-center bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex-1" onClick={() => setIsOpen(false)}>Konsultasi Gratis</Link>
           </div>
        </div>
      )}
    </nav>
  );
}
