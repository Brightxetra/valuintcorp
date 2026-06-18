import type { Metadata } from "next";
import { Database, LockKeyhole, ShieldCheck } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi Valuintcorp untuk website marketing, layanan konsultasi, dan Valuintcorp ERP.",
};

const sections = [
  {
    id: "pengendali-prosesor",
    title: "Pengendali dan Prosesor Data",
    eyebrow: "Peran data",
    paragraphs: [
      "Untuk data akun pengguna, data prospek, komunikasi, keamanan, billing, dan operasional website/ERP, Valuintcorp bertindak sebagai Pengendali Data Pribadi karena menentukan tujuan dan cara pemrosesan data tersebut.",
      "Untuk data yang dimasukkan pelanggan ke dalam ERP, termasuk data pelanggan akhir, supplier, karyawan, payroll, transaksi, dokumen, dan laporan, pelanggan adalah Pengendali Data Pribadi dan Valuintcorp bertindak sebagai Prosesor Data Pribadi sepanjang Valuintcorp memproses data sesuai instruksi pelanggan.",
      "Pelanggan wajib memastikan bahwa data pihak ketiga yang dimasukkan ke ERP telah dikumpulkan dan diproses dengan dasar hukum yang sah, termasuk pemberitahuan kepada karyawan, pelanggan, supplier, atau pihak lain yang datanya diproses.",
    ],
  },
  {
    id: "jenis-data",
    title: "Jenis Data yang Kami Kumpulkan",
    eyebrow: "Data",
    paragraphs: [
      "Kami mengumpulkan data yang diperlukan untuk menjalankan website, konsultasi, akun, dan fitur ERP. Jenis data yang diproses bergantung pada fitur yang Anda gunakan.",
    ],
    bullets: [
      "Data kontak dan prospek: nama lengkap, alamat email, nomor WhatsApp/telepon, nama bisnis/perusahaan, kategori industri, estimasi transaksi bulanan, pesan konsultasi, serta isi komunikasi melalui email, WhatsApp, formulir, atau kanal lain.",
      "Data akun dan autentikasi: email, user id, nama atau metadata profil, status verifikasi email, role, business membership, email undangan, token sesi, dan aktivitas login. Password diproses melalui penyedia autentikasi dan tidak disimpan dalam bentuk terbaca oleh Valuintcorp.",
      "Data bisnis dan tenant: nama legal, nama display, nama pemilik, industri, NPWP/tax ID, logo, mata uang, periode laporan, chart of accounts, lokasi, gudang, fitur yang diaktifkan, dan konfigurasi sumber transaksi.",
      "Data master, transaksi, dan keuangan: data pelanggan/supplier, produk, SKU, invoice, purchase bill, pembayaran, jurnal, stok, import CSV POS/marketplace/bank, laporan, dan export XLSX/PDF.",
      "Data HR/payroll, pajak, dan aset tetap: nomor karyawan, nama, jabatan, kontrak, gaji, absensi, cuti, pajak, komponen BPJS, taxpayer type, aset, penyusutan, pelepasan aset, dan dokumen pendukung.",
      "File dan metadata upload: nama file, jenis file, ukuran, storage path, owner document, waktu upload, logo bisnis, dan isi file yang Anda unggah sebagai lampiran.",
      "Data teknis: alamat IP, user agent, log server/platform, error log, cookies sesi, preferensi localStorage, service worker cache untuk app shell, hCaptcha verification data, serta data teknis dari penyedia hosting, font, atau gambar.",
    ],
  },
  {
    id: "tujuan-pemrosesan",
    title: "Dasar dan Tujuan Pemrosesan",
    eyebrow: "Tujuan",
    paragraphs: [
      "Kami memproses data berdasarkan satu atau lebih dasar yang sah, termasuk persetujuan, pelaksanaan kontrak, pemenuhan kewajiban hukum, kepentingan sah yang seimbang, serta instruksi pelanggan saat kami bertindak sebagai prosesor.",
      "Tujuan pemrosesan meliputi penyediaan website dan ERP, pembuatan serta pengamanan akun, konsultasi awal, setup tenant bisnis, pembukuan dan laporan, modul payroll/pajak, export data, support, komunikasi layanan, pencegahan penyalahgunaan, pemenuhan kewajiban hukum, dan penegakan perjanjian.",
      "Kami tidak menjual data bisnis pelanggan. Kami juga tidak menggunakan data tenant ERP untuk iklan pihak ketiga kecuali pelanggan secara eksplisit memberikan instruksi atau persetujuan terpisah.",
    ],
  },
  {
    id: "cookies-storage",
    title: "Cookies, LocalStorage, dan Teknologi Serupa",
    eyebrow: "Teknologi",
    paragraphs: [
      "ERP menggunakan cookie HTTP-only valuintcorp.sb-access-token untuk menjaga sesi server sekitar 1 jam dan valuintcorp.active-business-id untuk mengingat bisnis aktif sekitar 30 hari. Cookie ini diperlukan untuk autentikasi, keamanan, dan pengalaman penggunaan.",
      "Browser dapat menyimpan bisnis aktif dan preferensi UI seperti navigasi favorit atau widget dashboard di localStorage. Data ini berada di perangkat Anda dan dapat dihapus melalui pengaturan browser.",
      "ERP mendaftarkan service worker untuk fungsi PWA. Service worker mengecualikan API dan respons JSON dari cache offline, tetapi dapat menyimpan app shell dan aset statis agar aplikasi tetap terbuka lebih cepat.",
      "Jika hCaptcha diaktifkan, penyedia captcha memproses sinyal teknis untuk membedakan pengguna sah dari bot. Website/ERP juga dapat memuat font atau gambar dari pihak ketiga seperti Google Fonts atau lh3.googleusercontent.com.",
    ],
  },
  {
    id: "pihak-ketiga",
    title: "Pengungkapan kepada Pihak Ketiga",
    eyebrow: "Subprocessor",
    paragraphs: [
      "Kami dapat mengungkap data kepada penyedia infrastruktur, hosting, database, storage, autentikasi, keamanan, captcha, komunikasi, backup, monitoring, akuntansi, penasihat hukum, atau konsultan yang membantu menyediakan layanan.",
      "Subprocessor yang digunakan dapat mencakup Supabase untuk auth, database, storage, dan service role tertentu; Vercel untuk hosting/deployment; hCaptcha untuk verifikasi bot jika diaktifkan; Google-hosted fonts/assets; serta WhatsApp/email jika pengguna memilih menghubungi kami melalui kanal tersebut.",
      "Kami dapat mengungkap data apabila diwajibkan hukum, perintah pengadilan, regulator, otoritas pajak, proses penegakan hukum, atau untuk melindungi hak, keamanan, dan integritas layanan.",
      "Dalam tenant ERP, data dapat dilihat oleh pengguna internal pelanggan sesuai role dan permission yang diberikan oleh owner/admin tenant. Pelanggan bertanggung jawab mengelola role dengan prinsip need-to-know.",
    ],
  },
  {
    id: "transfer-data",
    title: "Transfer dan Penyimpanan Lintas Negara",
    eyebrow: "Cloud",
    paragraphs: [
      "Penyedia cloud dan keamanan yang digunakan Valuintcorp dapat memproses atau menyimpan data di luar Indonesia. Jika demikian, Valuintcorp akan menggunakan dasar hukum yang sesuai, kontrak pemrosesan data, pengamanan teknis/organisasi, dan pemberitahuan yang memadai kepada pelanggan.",
      "Pelanggan memahami bahwa penggunaan layanan cloud global dapat melibatkan transfer data teknis dan data pelanggan lintas negara. Untuk pelanggan yang membutuhkan batasan region, ketentuan tersebut harus dicantumkan dalam order form, DPA, atau perjanjian khusus.",
    ],
  },
  {
    id: "keamanan-data",
    title: "Keamanan Data",
    eyebrow: "Proteksi",
    paragraphs: [
      "Kami menerapkan kontrol teknis dan operasional yang wajar sesuai risiko, termasuk autentikasi Supabase, bearer token, cookie HTTP-only dengan atribut secure pada produksi, role-based permission, Row Level Security multi-tenant, private storage bucket, signed upload/signed view URL, validasi input, audit log, dan cache-control no-store untuk API sensitif.",
      "Tidak ada sistem yang 100% aman. Pelanggan bertanggung jawab menjaga kerahasiaan kredensial, mengelola akses pengguna, menggunakan password yang kuat, mengeluarkan anggota yang tidak lagi berwenang, dan menghindari upload file berbahaya atau data yang tidak perlu.",
      "Jika terjadi kegagalan pelindungan data pribadi, kami akan melakukan investigasi, mitigasi, dan pemberitahuan sesuai hukum yang berlaku, termasuk pemberitahuan tertulis paling lambat 3 x 24 jam kepada subjek data dan lembaga berwenang apabila diwajibkan.",
    ],
  },
  {
    id: "retensi-penghapusan",
    title: "Retensi dan Penghapusan",
    eyebrow: "Retensi",
    paragraphs: [
      "Data prospek dan komunikasi konsultasi disimpan selama diperlukan untuk menindaklanjuti kebutuhan Anda, lazimnya sampai 24 bulan sejak interaksi terakhir, kecuali berubah menjadi hubungan kontraktual atau diperlukan lebih lama untuk pembuktian.",
      "Data akun dan tenant disimpan selama akun/subscription aktif dan untuk periode tambahan yang wajar setelah terminasi untuk backup, sengketa, audit, kepatuhan, dan pemulihan layanan.",
      "Data pembukuan, pajak, payroll, invoice, attachment, dan laporan dapat disimpan lebih lama sesuai instruksi pelanggan dan kewajiban penyimpanan dokumen pembukuan/perpajakan yang dapat mencapai 10 tahun di Indonesia.",
      "Data demo sandbox dapat di-reset harian atau sesuai kebijakan demo. Jangan memasukkan data riil, sensitif, atau rahasia ke akun demo kecuali Valuintcorp secara tertulis menyatakan sebaliknya.",
      "Permintaan penghapusan akan diproses sepanjang tidak bertentangan dengan kewajiban hukum, retensi arsip, kepentingan audit, penyelesaian sengketa, keamanan, atau instruksi pelanggan sebagai pengendali data.",
    ],
  },
  {
    id: "hak-subjek-data",
    title: "Hak Subjek Data",
    eyebrow: "Hak Anda",
    paragraphs: [
      "Sesuai hukum yang berlaku, Anda dapat meminta akses, salinan, koreksi, pembaruan, penghapusan, pemusnahan, penarikan persetujuan, pembatasan/penundaan pemrosesan, dan penjelasan mengenai pemrosesan data pribadi Anda.",
      "Kami dapat meminta verifikasi identitas dan informasi tambahan sebelum memenuhi permintaan. Untuk data yang berada di tenant pelanggan, kami dapat mengarahkan permintaan kepada pelanggan yang bertindak sebagai Pengendali Data Pribadi.",
      "Hak tertentu dapat dibatasi bila pemenuhan permintaan melanggar hukum, mengungkap data pihak lain, membahayakan keamanan, mengganggu audit/pembukuan/pajak, atau bertentangan dengan kontrak yang sah.",
    ],
  },
  {
    id: "anak-pihak-ketiga",
    title: "Anak dan Data Pihak Ketiga",
    eyebrow: "Pihak ketiga",
    paragraphs: [
      "Layanan Valuintcorp ditujukan untuk pelaku usaha dan pengguna profesional. Kami tidak menargetkan anak di bawah umur. Jika data anak harus diproses dalam konteks bisnis pelanggan, pelanggan wajib memastikan persetujuan orang tua/wali atau dasar hukum lain yang diwajibkan.",
      "Jika pelanggan memasukkan data karyawan, pelanggan, supplier, atau pihak ketiga lain, pelanggan menjamin telah memberi pemberitahuan privasi yang sesuai dan memperoleh dasar pemrosesan yang sah.",
    ],
  },
  {
    id: "perubahan-kebijakan",
    title: "Perubahan Kebijakan",
    eyebrow: "Pembaruan",
    paragraphs: [
      "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan dipublikasikan di website dan/atau ERP.",
      "Untuk perubahan material, kami akan memberikan pemberitahuan yang wajar melalui website, email, notifikasi aplikasi, atau kanal lain yang tersedia.",
    ],
  },
  {
    id: "kontak-privasi",
    title: "Kontak Privasi",
    eyebrow: "Kontak",
    paragraphs: [
      "Pertanyaan dan permintaan terkait privasi dapat dikirim ke info@valuintcorp.com. Untuk kebutuhan komunikasi cepat, Anda juga dapat menggunakan kanal kontak resmi Valuintcorp yang tersedia di website.",
    ],
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <LegalPage
      badge="Kebijakan Privasi"
      description="Kebijakan ini menjelaskan bagaimana Valuintcorp mengumpulkan, menggunakan, menyimpan, mengungkapkan, melindungi, dan menghapus data pribadi ketika Anda mengakses website, menghubungi kami, membuat akun, atau menggunakan Valuintcorp ERP."
      effectiveDate="18 Juni 2026"
      highlights={[
        {
          icon: ShieldCheck,
          title: "Privasi sebagai fondasi",
          description:
            "Kami membatasi pemrosesan data sesuai kebutuhan layanan, kontrak, keamanan, dan kewajiban hukum.",
        },
        {
          icon: Database,
          title: "Data bisnis tetap milik pelanggan",
          description:
            "Untuk data tenant ERP, pelanggan tetap menjadi pengendali data dan Valuintcorp memproses sesuai instruksi.",
        },
        {
          icon: LockKeyhole,
          title: "Kontrol keamanan berlapis",
          description:
            "Akses tenant, storage privat, audit log, dan cookie HTTP-only digunakan untuk mengurangi risiko penyalahgunaan.",
        },
      ]}
      relatedLink={{
        href: "/syarat-ketentuan",
        label: "Baca Syarat & Ketentuan",
      }}
      sections={sections}
      title="Kebijakan Privasi Valuintcorp"
      version="1.0"
    />
  );
}
