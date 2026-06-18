import type { Metadata } from "next";
import { FileCheck2, Scale, ShieldAlert } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan Ketentuan Valuintcorp untuk website, layanan bookkeeping/advisory, dan Valuintcorp ERP.",
};

const sections = [
  {
    id: "definisi",
    title: "Definisi",
    eyebrow: "Istilah",
    bullets: [
      "Valuintcorp, kami, atau Penyedia berarti pihak yang mengoperasikan website dan/atau ERP Valuintcorp.",
      "Pengguna berarti individu yang mengakses website, menggunakan ERP, atau berkomunikasi dengan Valuintcorp.",
      "Pelanggan berarti badan usaha, pemilik usaha, atau pihak yang berlangganan/menerima layanan Valuintcorp.",
      "Data Pelanggan berarti data, file, dokumen, transaksi, laporan, dan informasi lain yang diunggah atau dimasukkan oleh Pelanggan atau pengguna yang diberi akses oleh Pelanggan.",
      "ERP berarti aplikasi Valuintcorp ERP untuk pencatatan operasional, pembukuan, laporan, HR/payroll, pajak, aset tetap, import, dan modul terkait.",
    ],
  },
  {
    id: "lingkup-layanan",
    title: "Lingkup Layanan",
    eyebrow: "Layanan",
    paragraphs: [
      "Valuintcorp menyediakan layanan bookkeeping, financial reporting, cash flow monitoring, setup sistem pembukuan, business financial review, advisory keuangan, dan akses ERP sesuai paket, proposal, order form, atau perjanjian yang disepakati.",
      "ERP mendukung pencatatan sales invoice, purchase bill, pembayaran, stok, jurnal, laporan, payroll, persiapan Coretax, import CSV, attachment, aset tetap, dan demo sandbox. Modul dapat berubah, ditambah, dibatasi, atau dihentikan sesuai roadmap dan paket layanan.",
      "Kecuali disepakati tertulis, layanan Valuintcorp bukan jasa audit publik, bukan jasa hukum, bukan penasihat investasi, bukan penjamin pembiayaan, dan bukan penyelenggara pelaporan pajak langsung ke Coretax. Output pajak/Coretax adalah paket persiapan untuk ditinjau dan disubmit oleh pelanggan atau kuasa resmi.",
    ],
  },
  {
    id: "akun-akses",
    title: "Akun, Akses, dan Otorisasi",
    eyebrow: "Akses",
    paragraphs: [
      "Pengguna wajib memberikan informasi akun yang benar, menjaga kredensial, dan segera memberitahu kami jika terjadi akses tidak sah.",
      "Owner/admin tenant bertanggung jawab mengundang pengguna, menetapkan role, mencabut akses, dan memastikan setiap pengguna hanya mengakses data yang diperlukan.",
      "Valuintcorp dapat menolak, menangguhkan, atau mencabut akses bila terdapat indikasi pelanggaran keamanan, penyalahgunaan, pelanggaran hukum, pelanggaran ketentuan ini, atau permintaan regulator/otoritas.",
      "Pengguna tidak boleh membagikan akun pribadi, mencoba mengakses tenant lain, melewati kontrol akses, melakukan scraping tanpa izin, mengunggah malware, menguji keamanan tanpa otorisasi tertulis, atau menggunakan layanan untuk aktivitas ilegal.",
    ],
  },
  {
    id: "kewajiban-data",
    title: "Kewajiban Pelanggan atas Data",
    eyebrow: "Data",
    paragraphs: [
      "Pelanggan bertanggung jawab atas keakuratan, kelengkapan, legalitas, dan hak penggunaan Data Pelanggan yang dimasukkan ke layanan.",
      "Pelanggan menjamin memiliki dasar hukum yang sah untuk memasukkan dan memproses data pelanggan akhir, supplier, karyawan, payroll, pajak, bank/POS/marketplace, dan dokumen pihak ketiga.",
      "Pelanggan bertanggung jawab melakukan review atas laporan, jurnal, import CSV, mapping, payroll, pajak, dan output lain sebelum digunakan untuk keputusan bisnis, pengajuan pinjaman, investor, pajak, atau pelaporan resmi.",
      "Pelanggan wajib menyimpan backup atau export yang diperlukan untuk kepatuhan internal dan hukum. Valuintcorp dapat membantu menyediakan export tetapi tidak menggantikan kewajiban arsip pelanggan kecuali disepakati tertulis.",
    ],
  },
  {
    id: "demo-trial-beta",
    title: "Paket Demo, Trial, dan Beta",
    eyebrow: "Demo",
    paragraphs: [
      "Paket yang ditampilkan sebagai gratis, project demo, trial, atau beta bersifat terbatas dan dapat berubah sewaktu-waktu sebelum ada kontrak berbayar atau order form.",
      "Akun demo/sandbox dapat diisi data contoh, di-reset harian/manual, dibatasi fitur, dan tidak dirancang untuk data riil. Jangan memasukkan data rahasia, data payroll riil, data pelanggan riil, atau dokumen sensitif ke demo kecuali ada persetujuan tertulis.",
      "Fitur beta dapat memiliki error, perubahan desain, keterbatasan data, atau perubahan API. Penggunaan fitur beta dilakukan atas risiko pelanggan dan tidak boleh menjadi satu-satunya dasar keputusan material tanpa review manual.",
    ],
  },
  {
    id: "biaya-pembayaran",
    title: "Biaya, Pajak, dan Pembayaran",
    eyebrow: "Komersial",
    paragraphs: [
      "Biaya layanan mengikuti proposal, paket harga, invoice, order form, atau perjanjian tertulis. Harga yang tertera di website adalah estimasi awal dan dapat berubah berdasarkan kompleksitas bisnis, volume transaksi, jumlah entitas, modul, kebutuhan migrasi, dan tingkat advisory.",
      "Biaya belum termasuk pajak, pungutan, biaya bank, biaya pihak ketiga, biaya implementasi khusus, biaya migrasi data, atau biaya support tambahan kecuali dinyatakan lain.",
      "Jika pembayaran terlambat, Valuintcorp dapat menunda pekerjaan, membatasi akses, menahan deliverable, atau mengenakan biaya keterlambatan sepanjang diperbolehkan hukum dan disepakati dalam invoice/order form.",
      "Refund, pembatalan, dan perubahan paket mengikuti order form atau kebijakan komersial yang berlaku pada saat transaksi.",
    ],
  },
  {
    id: "kerahasiaan",
    title: "Kerahasiaan",
    eyebrow: "Rahasia",
    paragraphs: [
      "Masing-masing pihak wajib menjaga informasi rahasia pihak lain, termasuk data keuangan, strategi bisnis, kredensial, data payroll, data pelanggan/supplier, dokumen pajak, kode, proses, dan informasi non-publik lain.",
      "Kewajiban kerahasiaan tidak berlaku untuk informasi yang telah publik tanpa pelanggaran, diterima sah dari pihak ketiga, dikembangkan sendiri tanpa menggunakan informasi rahasia, atau wajib diungkap berdasarkan hukum.",
      "Jika diperlukan untuk proyek advisory/bookkeeping yang intensif, para pihak dapat menandatangani NDA atau DPA terpisah. Jika ada konflik, dokumen khusus yang ditandatangani akan mengesampingkan ketentuan umum ini untuk ruang lingkup yang sama.",
    ],
  },
  {
    id: "kekayaan-intelektual",
    title: "Hak Kekayaan Intelektual",
    eyebrow: "IP",
    paragraphs: [
      "Website, ERP, desain, kode, workflow, template umum, dokumentasi, merek, logo, dan materi Valuintcorp adalah milik Valuintcorp atau pemberi lisensinya.",
      "Data Pelanggan tetap menjadi milik Pelanggan. Pelanggan memberikan lisensi terbatas kepada Valuintcorp untuk memproses Data Pelanggan sejauh diperlukan untuk menyediakan, mengamankan, mendukung, memperbaiki, dan mengembangkan layanan sesuai perjanjian.",
      "Pelanggan tidak boleh menyalin, menjual kembali, reverse engineer, membuat produk turunan dari ERP, atau menggunakan materi Valuintcorp di luar izin yang diberikan.",
    ],
  },
  {
    id: "output-batasan",
    title: "Output, Laporan, dan Batasan Profesional",
    eyebrow: "Batasan",
    paragraphs: [
      "Laporan keuangan, dashboard, rekomendasi, proyeksi, dan advisory disusun berdasarkan data yang tersedia dan asumsi yang diketahui saat pekerjaan dilakukan. Output dapat berubah jika data dasar berubah atau ditemukan informasi baru.",
      "Valuintcorp tidak menjamin kenaikan laba, persetujuan investor/bank, hasil pajak tertentu, tidak adanya denda pajak, atau keberhasilan bisnis. Keputusan bisnis tetap menjadi tanggung jawab Pelanggan.",
      "Pelanggan wajib berkonsultasi dengan akuntan publik, konsultan pajak, penasihat hukum, atau pihak profesional berizin bila output akan digunakan untuk audit, sengketa, transaksi material, pelaporan pajak resmi, merger/akuisisi, atau pembiayaan.",
    ],
  },
  {
    id: "ketersediaan",
    title: "Ketersediaan, Maintenance, dan Perubahan Layanan",
    eyebrow: "Operasional",
    paragraphs: [
      "Kami berupaya menjaga layanan tersedia dan aman, tetapi tidak menjamin layanan bebas gangguan. Gangguan dapat terjadi karena maintenance, internet, penyedia cloud, Supabase, Vercel, hCaptcha, browser, perangkat pengguna, force majeure, atau tindakan pihak ketiga.",
      "Valuintcorp dapat melakukan maintenance terjadwal atau darurat, memperbarui fitur, memperbaiki bug, mengubah UI, menambah validasi, atau mengganti penyedia infrastruktur sepanjang wajar untuk keamanan dan keberlanjutan layanan.",
      "SLA khusus, jam support, backup, RTO/RPO, dan dukungan prioritas hanya berlaku bila dinyatakan dalam order form atau perjanjian terpisah.",
    ],
  },
  {
    id: "tanggung-jawab",
    title: "Pembatasan Tanggung Jawab",
    eyebrow: "Liabilitas",
    paragraphs: [
      "Sepanjang diperbolehkan hukum, Valuintcorp tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan, kehilangan peluang bisnis, kehilangan goodwill, data yang dimasukkan salah oleh pelanggan, keputusan yang dibuat tanpa review, atau kegagalan pihak ketiga di luar kendali wajar kami.",
      "Total tanggung jawab Valuintcorp atas klaim yang timbul dari layanan dibatasi sebesar total biaya yang dibayarkan pelanggan kepada Valuintcorp untuk layanan yang menjadi sumber klaim dalam 3 bulan terakhir sebelum kejadian, kecuali ditentukan berbeda dalam perjanjian tertulis atau diwajibkan hukum.",
      "Pembatasan ini tidak membatasi tanggung jawab yang tidak dapat dibatasi menurut hukum, termasuk penipuan, kesengajaan, atau pelanggaran kerahasiaan yang terbukti oleh putusan final.",
    ],
  },
  {
    id: "ganti-rugi",
    title: "Ganti Rugi",
    eyebrow: "Indemnity",
    paragraphs: [
      "Pelanggan setuju membebaskan dan mengganti rugi Valuintcorp dari klaim pihak ketiga yang timbul akibat Data Pelanggan yang melanggar hukum, pelanggaran hak pihak ketiga, penggunaan layanan yang tidak sah, pelanggaran ketentuan ini, atau keputusan bisnis/pajak yang dibuat tanpa review profesional yang diperlukan.",
      "Valuintcorp akan memberi pemberitahuan wajar atas klaim yang relevan dan bekerja sama secara wajar dalam pembelaan, sepanjang pelanggan menanggung biaya yang disepakati.",
    ],
  },
  {
    id: "pengakhiran",
    title: "Penangguhan dan Pengakhiran",
    eyebrow: "Terminasi",
    paragraphs: [
      "Pelanggan dapat berhenti menggunakan layanan sesuai ketentuan paket/order form. Setelah pengakhiran, akses dapat dibatasi dan pelanggan harus mengekspor data yang diperlukan sebelum tanggal efektif pengakhiran.",
      "Valuintcorp dapat menangguhkan atau mengakhiri layanan bila pelanggan melanggar pembayaran, menyalahgunakan layanan, melanggar hukum, mengganggu keamanan, mengunggah konten berbahaya, atau terus menimbulkan risiko hukum/operasional.",
      "Setelah pengakhiran, data dapat dihapus atau dipertahankan sesuai kebijakan retensi, backup, kewajiban hukum, dan kebutuhan penyelesaian sengketa.",
    ],
  },
  {
    id: "perubahan-ketentuan",
    title: "Perubahan Ketentuan",
    eyebrow: "Pembaruan",
    paragraphs: [
      "Kami dapat memperbarui Syarat dan Ketentuan ini. Perubahan berlaku setelah dipublikasikan atau diberitahukan, kecuali hukum mensyaratkan periode pemberitahuan tertentu.",
      "Penggunaan layanan setelah perubahan berarti Anda menerima ketentuan terbaru.",
    ],
  },
  {
    id: "hukum-sengketa",
    title: "Hukum yang Berlaku dan Penyelesaian Sengketa",
    eyebrow: "Sengketa",
    paragraphs: [
      "Ketentuan ini diatur oleh hukum Republik Indonesia.",
      "Para pihak akan terlebih dahulu menyelesaikan sengketa melalui musyawarah selama 30 hari kalender sejak pemberitahuan tertulis. Jika tidak tercapai penyelesaian, sengketa diajukan ke pengadilan negeri pada domisili hukum Valuintcorp sebagaimana tercantum dalam perjanjian/order form; jika belum ditentukan, Pengadilan Negeri Jakarta Selatan, kecuali para pihak menyepakati forum lain secara tertulis.",
    ],
  },
  {
    id: "kontak",
    title: "Kontak",
    eyebrow: "Hubungi kami",
    paragraphs: [
      "Pertanyaan mengenai layanan, invoice, atau ketentuan ini dapat dikirim ke info@valuintcorp.com atau kanal kontak resmi yang dipublikasikan di website Valuintcorp.",
    ],
  },
];

export default function SyaratKetentuanPage() {
  return (
    <LegalPage
      badge="Syarat & Ketentuan"
      description="Ketentuan ini mengatur akses dan penggunaan website Valuintcorp, layanan konsultasi/bookkeeping/advisory, dan aplikasi Valuintcorp ERP."
      effectiveDate="18 Juni 2026"
      highlights={[
        {
          icon: FileCheck2,
          title: "Ruang lingkup jelas",
          description:
            "Ketentuan mencakup website, konsultasi, bookkeeping/advisory, ERP, demo sandbox, dan modul operasional terkait.",
        },
        {
          icon: Scale,
          title: "Tanggung jawab seimbang",
          description:
            "Pelanggan bertanggung jawab atas akurasi dan legalitas data, sementara Valuintcorp menyediakan layanan sesuai perjanjian.",
        },
        {
          icon: ShieldAlert,
          title: "Batasan risiko transparan",
          description:
            "Output laporan dan advisory perlu direview sebelum dipakai untuk keputusan material, pajak, audit, atau pembiayaan.",
        },
      ]}
      relatedLink={{
        href: "/kebijakan-privasi",
        label: "Baca Kebijakan Privasi",
      }}
      sections={sections}
      title="Syarat & Ketentuan Valuintcorp"
      version="1.0"
    />
  );
}
