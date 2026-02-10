// 1. Import Komponen
import BaseButton from './atoms/BaseButton.vue';

// 2. Import CSS (Wajib agar Tailwind terbawa)
import './assets/main.css';

// 3. Kumpulkan komponen dalam satu objek (untuk looping installer)
const components = {
  BaseButton,
  NavbarItem,
};

// 4. Export Satuan (Named Export)
// Memungkinkan user import spesifik: import { BaseButton } from 'bsre-ui-kit'
export { BaseButton };

// 5. Export Plugin (Default Export)
// Memungkinkan user install global: app.use(BsreUiKit)
export default {
  install: (app) => {
    // Loop semua komponen dan daftarkan ke Vue
    for (const prop in components) {
      app.component(prop, components[prop]);
    }
  },
};
