# Tugas Individu - Web Application Development

**Nama**: Brilliant Gibran Adhinata J.  
**NIM**: 25110300019  
**Mata Kuliah**: Web Application Development (WAD04)  
**Program Studi**: S1 Ilmu Komputer — Universitas Cakrawala  

---

## Deskripsi Project
Project ini dibuat untuk memenuhi tugas mata kuliah Web Application Development, yaitu implementasi **Public API** ke dalam aplikasi web berbasis **React + Vite** dan **Tailwind CSS**.

Pada project **BrandKu** ini, data produk diambil secara online dari [FakeStore API](https://fakestoreapi.com) (`https://fakestoreapi.com/products`) menggunakan library `axios`.

---

## Fitur yang Diterapkan
1. **Integrasi Public API**: Mengambil data produk dari FakeStore API menggunakan `useEffect` dan `axios` saat halaman pertama kali dimuat.
2. **Filter Kategori Produk**: Pengguna dapat memfilter tampilan produk berdasarkan kategori (*electronics*, *jewelery*, *men's clothing*, *women's clothing*, dan *semua produk*).
3. **Card Produk Dinamis**: Menampilkan data yang didapat dari API (gambar produk, judul, kategori, rating, harga, dan deskripsi) menggunakan komponen React modular dan props.
4. **Local Storage (Sesi 4)**: Menyimpan state angka interaktif pada tombol Hero ke `localStorage` agar tidak hilang saat halaman di-refresh.
5. **Loading & Error State**: Menampilkan indikator loading saat data sedang diambil serta pesan error apabila koneksi gagal.

---

## Cara Menjalankan Project

1. Pastikan sudah menginstall Node.js di komputer.
2. Buka terminal di folder project ini, lalu install dependensi:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Buka tautan lokal yang muncul di terminal (biasanya `http://localhost:5173`) pada browser.

---

## Bukti Pengerjaan (Screenshots)

### 1. Tampilan UI di Browser
![Screenshot UI](screenshots/screenshot_ui.png)

### 2. Bagian Kode Program (Fetch & Filter Data)
![Screenshot Kode Program](screenshots/screenshot_code.png)
