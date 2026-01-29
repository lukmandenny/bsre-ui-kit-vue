import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Mengarahkan ke file index.js di struktur folder Anda
      entry: resolve(__dirname, 'src/index.js'),
      name: 'BsreUiKit',
      fileName: 'bsre-ui-kit',
    },
    rollupOptions: {
      // Pastikan Vue tidak ikut terbungkus (external)
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
