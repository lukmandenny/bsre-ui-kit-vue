# BSrE Design System (Vue 3 + Tailwind)

UI Kit resmi untuk pengembangan aplikasi di lingkungan BSrE. Dibangun menggunakan **Vue 3** dan **Tailwind CSS**, menyediakan komponen yang aksesibel, konsisten, dan siap pakai sesuai standar SPBE.

## 📦 Fitur

- ⚡ **Vue 3 Support:** Kompatibel penuh dengan Vue 3 (Composition API).
- 🎨 **Tailwind CSS:** Styling modern, ringan, dan mudah dikustomisasi.
- 🧩 **Atomic Design:** Struktur modular mulai dari Atom, Molekul, hingga Organisme.

---

## 🚀 Instalasi

### Menggunakan NPM (Recommended)

Jika library sudah dipublish ke registry NPM:

```bash
npm install bsre-ui-kit
```

## 🛠 Konfigurasi Project

### Agar komponen dapat digunakan dan styling-nya muncul dengan benar, kamu wajib mendaftarkannya di entry point aplikasi (biasanya main.js atau main.ts).

Update src/main.js

```bash
import { createApp } from 'vue'
import App from './App.vue'

// 1. Import Library Plugin
import BSrEUiKit from 'bsre-ui-kit'

// 2. WAJIB: Import File CSS (Hasil Build)
// File ini berisi semua utility class Tailwind yang digunakan oleh komponen
import 'bsre-ui-kit/dist/style.css'

const app = createApp(App)

// 3. Gunakan sebagai Plugin Global
app.use(BSrEUiKit)

app.mount('#app')
```
