import BaseButton from './atoms/BaseButton.vue';
import './assets/main.css'; // Memastikan warna #2faae1 dan font DM Sans ikut terbawa

// Ekspor komponen secara individual
export { BaseButton };

// Ekspor plugin untuk instalasi global (app.use)
export default {
  install: (app) => {
    app.component('BaseButton', BaseButton);
  },
};
