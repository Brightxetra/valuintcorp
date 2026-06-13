'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Apa itu Valuintcorp?",
    a: "Valuintcorp adalah layanan konsultasi keuangan dan manajemen strategis yang didedikasikan secara khusus untuk memberdayakan dan mempercepat pertumbuhan Usaha Kecil dan Menengah (UKM) di Indonesia melalui pendekatan yang profesional, terukur, dan aplikatif."
  },
  {
    q: "Layanan utama apa saja yang ditawarkan?",
    a: "Fokus utama kami mencakup Perencanaan Keuangan Strategis, Analisis Kelayakan Bisnis, Optimalisasi Arus Kas (Cash Flow), Valuasi Bisnis, dan Restrukturisasi Keuangan untuk membantu perusahaan menghadapi tantangan pasar."
  },
  {
    q: "Siapa yang paling diuntungkan dari layanan ini?",
    a: "Layanan kami dirancang secara spesifik untuk pemilik UMKM, pendiri startup tahap awal hingga berkembang, serta perusahaan keluarga yang ingin merapikan struktur keuangan mereka atau bersiap untuk mencari pendanaan eksternal."
  },
  {
    q: "Bagaimana struktur biaya konsultasinya?",
    a: "Kami mengadopsi model penetapan harga yang transparan. Biaya disesuaikan dengan skala kompleksitas proyek dan durasi pendampingan. Anda dapat melihat estimasi pada halaman \"Paket Harga\" atau menghubungi kami untuk penawaran khusus."
  },
  {
    q: "Apakah tersedia sesi konsultasi awal tanpa biaya?",
    a: "Ya, kami menyediakan Sesi Penilaian Awal secara gratis (30-45 menit). Sesi ini digunakan untuk mendiagnosis masalah utama bisnis Anda dan menentukan apakah layanan kami adalah solusi yang tepat sebelum adanya komitmen finansial."
  },
  {
    q: "Bagaimana langkah pertama untuk memulai?",
    a: "Langkah termudah adalah memencet tombol \"Konsultasi Gratis\" di pojok kanan atas layar Anda atau menggunakan fitur \"Chat with an Expert\" di sudut bawah. Tim representatif kami akan segera mengatur jadwal pertemuan dengan Anda."
  },
  {
    q: "Berapa lama rata-rata proses pendampingan berlangsung?",
    a: "Durasi sangat bergantung pada ruang lingkup pekerjaan. Proyek audit cepat bisa selesai dalam 2-4 minggu, sementara restrukturisasi penuh atau persiapan pendanaan dapat memakan waktu 3 hingga 6 bulan pendampingan intensif."
  },
  {
    q: "Bagaimana Anda menjamin kerahasiaan data perusahaan saya?",
    a: "Keamanan dan privasi data klien adalah prioritas mutlak. Sebelum pertukaran data sensitif apa pun terjadi, kami selalu menerbitkan dan menandatangani Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) yang mengikat secara hukum."
  },
  {
    q: "Apakah Anda melayani klien di luar wilayah Jakarta?",
    a: "Tentu saja. Meskipun kantor pusat kami berada di Jakarta, kami memiliki infrastruktur konsultasi digital yang kuat, memungkinkan kami melayani dan mendampingi klien UMKM dari seluruh penjuru Nusantara secara efektif secara daring."
  },
  {
    q: "Apakah hasil analisis dijamin akan meningkatkan laba?",
    a: "Meskipun kami tidak dapat memberikan jaminan absolut terhadap kondisi pasar eksternal, kami menjamin bahwa strategi dan infrastruktur keuangan yang kami bangun didasarkan pada data faktual dan praktik terbaik industri, yang secara signifikan memitigasi risiko dan mengoptimalkan potensi profitabilitas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <section className="text-center mb-16 pt-16 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">Pertanyaan yang Sering Diajukan</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Temukan jawaban cepat untuk pertanyaan umum mengenai layanan konsultasi dan pendekatan kami untuk membantu pertumbuhan bisnis UKM Anda.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-32 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${isOpen ? 'bg-surface-container-low border-surface-variant' : 'bg-surface-container-lowest border-transparent hover:border-surface-variant'}`}
            >
              <button 
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-bold text-on-surface pr-8">{faq.q}</span>
                <ChevronDown className={`text-outline shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={24} />
              </button>
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-base text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
