# INDIVIDU_WEBDEV
**Nama**: Brilliant Gibran Adhinata J.  
**NIM**: 25110300019  
**Mata Kuliah**: Web Application Development  
**Program Studi**: S1 Ilmu Komputer — Universitas Cakrawala  

---

## Daftar Progres Sesi Perkuliahan

| Sesi | Topik Materi | Status | Implementasi pada Proyek BrandKu |
| :--- | :--- | :---: | :--- |
| **Sesi 1** | *Intro to Frontend* | Selesai | Fondasi frontend, struktur project, setup environment dasar. |
| **Sesi 2** | *Tailwind + Intro React, Components + Routing* | Selesai | Setup Tailwind CSS v4, struktur modular komponen (`Header`, `Footer`, `Hero`), multi-page routing (`react-router`: `/`, `/about`, `/pricing`). |
| **Sesi 3** | *Props + use-state* | Selesai | Passing props data (`featureData`), state management interaktif dengan `useState` pada komponen navigasi & UI card. |
| **Sesi 4** | *use-effect + api-integration, local storage* | Selesai | Custom hook `useLocalStorageState` (sinkronisasi state ke `localStorage`), `useEffect` async data fetch FakeStore API, dan dynamic category filtering. |

---

## Tugas: Public API Implementation (Sesi: use-effect + api)

Implementasi integrasi Public API pada proyek e-commerce katalog produk **BrandKu** menggunakan **React**, **Vite**, dan **Tailwind CSS v4**.

### Sumber API
Public API yang digunakan: [FakeStore API](https://fakestoreapi.com)  
Endpoint: `https://fakestoreapi.com/products`

### Fitur yang Diimplementasikan
1. **Asynchronous Data Fetching**: Mengambil data produk secara otomatis saat komponen dimuat menggunakan `axios` dan hook `useEffect`.
2. **Pengolahan & Pemrosesan Data**:
   - Ekstraksi kategori unik secara dinamis dari response API menggunakan `Set`.
   - Filter produk interaktif berdasarkan kategori (*Semua Produk*, *Men's Clothing*, *Jewelery*, *Electronics*, *Women's Clothing*).
3. **Penyajian UI Komponen**:
   - Loading skeleton state saat data sedang di-fetch.
   - Error handling state jika terjadi kendala koneksi ke API.
   - Grid Card responsif yang menampilkan gambar produk, judul, tag kategori, rating bintang, jumlah ulasan, dan format harga.

---

### Bukti Pengumpulan Tugas

#### 1. Tampilan Hasil di Browser (Data Muncul Rapi)
![Screenshot UI](screenshots/screenshot_ui.png)

#### 2. Kode Program (Fetch & Pemrosesan Data)
![Screenshot Kode Program](screenshots/screenshot_code.png)

---

### Menjalankan Proyek Secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk produksi
npm run build
```
