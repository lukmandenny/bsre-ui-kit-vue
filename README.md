# BSrE UI Kit

Pustaka komponen antarmuka (UI Component Library) resmi untuk ekosistem aplikasi digital **Balai Besar Sertifikasi Elektronik (BSrE)**. Dibangun di atas **Vue 3** dan **Tailwind CSS**, pustaka ini menjamin konsistensi visual, aksesibilitas, dan mempercepat proses *development* antarmuka pengguna.

---

## Fitur Utama
- **Vue 3 & Composition API:** Dibangun menggunakan standar Vue terbaru untuk performa maksimal.
- **Tailwind CSS Driven:** Terintegrasi penuh dengan ekosistem Tailwind melalui sistem desain "Base".
- **Aksesibel & Semantik:** Mengikuti standar UX/UI yang konsisten dan ramah aksesibilitas.
- **DM Sans Typography:** Menggunakan tipografi yang bersih dan berwibawa sesuai identitas BSrE.

---

## Instalasi

Tambahkan pustaka ini ke dalam *project* Vue Anda menggunakan *package manager* pilihan Anda:

```bash
# Menggunakan npm
npm install bsre-ui-kit

# Menggunakan yarn
yarn add bsre-ui-kit

# Menggunakan pnpm
pnpm add bsre-ui-kit
```

---

## Konfigurasi (Wajib)

Karena pustaka ini menggunakan token warna dan tipografi khusus dari **BSrE Design System**, Anda wajib melakukan sinkronisasi konfigurasi Tailwind dan *Font* di *project* utama Anda.

### 1. Integrasi Tailwind Preset
Buka file `tailwind.config.js` di *project* Anda, lalu tambahkan *preset* bawaan dari `bsre-ui-kit`:

```javascript
// tailwind.config.js
module.exports = {
  // Tambahkan baris presets ini
  presets: [
    require('bsre-ui-kit/tailwind.preset.js')
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // Wajib sertakan path library agar class Tailwind pada komponen ikut ter-compile
    "./node_modules/bsre-ui-kit/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Import Font DM Sans
Pastikan Anda memuat *font* **DM Sans** di file HTML utama Anda (misalnya di `index.html` atau `public/index.html`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap" rel="stylesheet">
```

---

## Cara Penggunaan

Anda dapat mengimpor komponen secara individual di dalam file `.vue` Anda:

```vue
<script setup>
import { BsreButton, BsreBadge } from 'bsre-ui-kit';
// Jika library membutuhkan file CSS global, import di sini atau di main.js:
import 'bsre-ui-kit/dist/style.css'; 
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Selamat Datang di BSrE</h1>
    
    <div class="flex gap-4">
      <BsreButton variant="primary">Kirim Dokumen</BsreButton>
      <BsreBadge variant="success">Tersertifikasi</BsreBadge>
    </div>
  </div>
</template>
```

---

## Dokumentasi
Untuk melihat panduan lengkap mengenai desain sistem (Colors, Typography, Layout) beserta interaksi masing-masing komponen, silakan kunjungi dokumentasi resmi kami:
👉 **[Tautan Dokumentasi BSrE Design System](#)** 

---

## 👨‍💻 Kontribusi
Pustaka ini dikelola oleh Tim Desain & *Development* BSrE. Jika Anda menemukan *bug* atau ingin mengajukan fitur baru, silakan buat *Issue* atau *Pull Request* di *repository* ini.

**Balai Besar Sertifikasi Elektronik (BSrE)** © 2026.
