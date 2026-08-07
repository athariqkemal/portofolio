# Portofolio — Athariq Kemal Pasha

Website portofolio statis (HTML/CSS/JS, tanpa build tools) siap dihosting gratis di GitHub Pages. Sudah diisi dengan 6 proyek asli kamu (D'Celup Chicken Crispy, Mandarin Mulai Nol, English Academy Center, Ruang Samping, BeBan Crispy, Goodstuffle), section **Certifications** berisi 14 sertifikat, foto profil kamu, dan galeri lightbox yang bisa diklik untuk semua itu.

## Update terbaru di versi ini
- **Bug diperbaiki**: tag `</span>` nyasar di logo header (sempat merusak tampilan nav/CTA di beberapa browser), dan class `contact-email` yang sebelumnya kepisah jadi `contactemail` (garis bawah hijau di email kontak sekarang muncul lagi).
- **Foto profil ditambahkan**: `images/profile-photo.jpg`, sudah di-crop & dikompres, dipasang di section About.
- **Section baru: Certifications** (link nav "CERTIFICATIONS" ditambahkan) — 14 kartu sertifikat (klik untuk lihat gambar penuh lewat lightbox yang sama dipakai galeri Work), dikelompokkan otomatis dari nama kelasnya:
  - Digital Marketing: WhatsApp Business, WhatsApp Marketing, Copywriting Fundamentals, Jualan Online di Shopee, Jualan Online di TikTok Shop
  - Graphic Design: Desain dengan Canva (Smartphone & Desktop)
  - Video/Content Editing: Video Editing CapCut (Smartphone & Desktop)
  - Productivity Tools: Microsoft Excel, PowerPoint, Word Lanjutan
  - Educational Consultant: Sales Trainee Academy (STAR) by Ruangguru — English Academy
  - AI-Powered Creative: AI for Work & Career Readiness with Google AI Products (Hacktiv8 × Google.org)
  - 2 sertifikat yang aslinya PDF (STAR & AI Google) sudah dikonversi jadi gambar supaya bisa tampil di lightbox.
- **Goodstuffle**: galeri kerja ditambah 1 foto bukti chat WhatsApp Business (`goodstuffle-wa-chats.jpg`) sesuai yang kamu kirim.

## Kalau gambar nggak muncul di GitHub Pages
Penyebab paling umum: folder `images/` nggak ikut ter-upload, atau ke-upload tapi di lokasi yang salah. Cek ini:

1. **Buka repo kamu di GitHub** (bukan hasil "save page", tapi langsung ke `github.com/USERNAME/NAMA-REPO`). Pastikan ada **folder `images`** sejajar dengan `index.html`, bukan di dalam folder lain.
2. Klik masuk ke folder `images` — harus ada 20 file gambar di dalamnya (dcc-hero.jpg, goodstuffle-web.jpg, dst).
3. Kalau folder `images` belum ada / kosong: ulangi upload — kali ini **drag seluruh folder `images`** (bukan cuma isinya satu-satu) ke halaman "Add file → Upload files" di GitHub, bareng dengan `index.html`, `styles.css`, `script.js`.
4. Setelah upload, tunggu 1-2 menit lalu **hard refresh** browser (Ctrl+Shift+R / Cmd+Shift+R) — GitHub Pages suka nyimpan cache lama.
5. Buka Console browser (klik kanan → Inspect → tab Console) di halaman situs kamu — kalau ada error "404" pada path gambar, itu konfirmasi filenya belum ada di server / salah folder.

## Isi file
- `index.html` — struktur & konten halaman (termasuk section Certifications)
- `styles.css` — tampilan visual (termasuk style kartu sertifikat)
- `script.js` — data proyek + data sertifikat + logic galeri lightbox (dipakai bareng untuk Work & Certifications) + tahun otomatis di footer
- `images/` — semua gambar proyek dan sertifikat (sudah dikompres supaya ringan), termasuk bukti kerja nyata Goodstuffle (dashboard Shopee, riwayat pesanan, chat WhatsApp Business) dan foto profil kamu

## Yang mungkin masih perlu dicek/diedit
- Link **Instagram** di bagian Kontak masih pakai `@athariqkemal` (dari handle yang muncul di salah satu desain kamu) — ganti kalau itu bukan akun pribadi kamu.
- Bagian **Tentang** masih pakai deskripsi umum — boleh diperhalus jadi cerita personal kamu.
- Proyek **Ruang Samping** masih menunggu 3 gambar (`ruangsamping-logo.png`, `ruangsamping-eskulkul.jpg`, `ruangsamping-menu.jpg`) — belum pernah dikirim, jadi kartunya akan tampil rusak (broken image) sampai file itu ditambahkan ke folder `images/`.
- Kalau ada proyek atau sertifikat lain yang mau ditambahkan, lihat panduan di bawah.

## Cara publish ke GitHub Pages

**1. Buat repo baru di GitHub**
   - Nama bebas, misal `portofolio` atau `username.github.io` (kalau pakai format ini, situs langsung jadi domain utama kamu tanpa subfolder).

**2. Upload semua file & folder ke repo**
   Cara termudah tanpa terminal:
   - Buka repo di GitHub → tombol **Add file** → **Upload files**
   - Drag & drop `index.html`, `styles.css`, `script.js`, dan seluruh folder `images/`
   - Klik **Commit changes**

   Atau lewat terminal (kalau `git` sudah terpasang):
   ```bash
   git init
   git add .
   git commit -m "Portofolio pertama"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```

**3. Aktifkan GitHub Pages**
   - Di repo → **Settings** → **Pages**
   - Bagian "Build and deployment" → Source: **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → **Save**

**4. Tunggu 1–2 menit**
   Situs akan aktif di:
   `https://USERNAME.github.io/NAMA-REPO/`
   (atau `https://USERNAME.github.io/` kalau nama repo-nya `username.github.io`)

## Cara nambah proyek baru
1. Taruh gambar proyek baru di folder `images/`.
2. Di `script.js`, tambah entri baru ke objek `projects`, contoh:
   ```js
   proyekBaru: {
     title: "Nama Proyek Baru",
     images: ["images/proyek-baru-1.jpg", "images/proyek-baru-2.jpg"],
   },
   ```
3. Di `index.html`, salin satu blok `<button class="work-card" data-project="...">` di bagian Karya, ganti `data-project` ke key baru (`proyekBaru`), ganti gambar cover, judul, dan tag disiplinnya.

## Cara nambah sertifikat baru
1. Taruh gambar sertifikat baru di folder `images/` (kalau aslinya PDF, convert dulu ke JPG/PNG).
2. Di `script.js`, tambah entri baru ke objek `certificates`, contoh:
   ```js
   sertifikatBaru: {
     title: "Nama Kelas/Sertifikat",
     caption: "Penerbit — info nilai/tanggal",
     images: ["images/sertifikat-baru.jpg"],
   },
   ```
3. Di `index.html`, salin satu blok `<button class="cert-card" data-cert="...">` di bagian Certifications, ganti `data-cert` ke key baru (`sertifikatBaru`), ganti issuer, skor/status, judul, dan meta-nya.

## Tips lanjutan
- Warna aksen (highlight hijau-lime) diatur di `styles.css` lewat variabel `--accent` — gampang diganti ke warna lain kalau mau.
- Font pakai Google Fonts (Fraunces, Inter, IBM Plex Mono), sudah dimuat otomatis, tidak perlu instal apa-apa.
- Galeri lightbox bisa dinavigasi pakai tombol panah keyboard (← →) atau Esc untuk menutup.
