<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'text', // Pilihan: text, circular, rectangular
  },
  width: {
    type: [String, Number],
    default: null, // Jika kosong, akan menggunakan ukuran bawaan sesuai tipe
  },
  height: {
    type: [String, Number],
    default: null,
  },
  animated: {
    type: Boolean,
    default: true, // Animasi berkedip (pulse)
  },
});

// Menentukan ukuran bawaan jika user tidak memberikan prop width/height
const defaultDimensions = computed(() => {
  if (props.type === 'circular') return { w: '3rem', h: '3rem' }; // 48px
  if (props.type === 'rectangular') return { w: '100%', h: '8rem' }; // 128px
  return { w: '100%', h: '1rem' }; // text (16px)
});

// Helper untuk format angka menjadi pixel (misal: 40 -> '40px')
const formatDimension = (val) => {
  if (!val) return null;
  return typeof val === 'number' || !isNaN(Number(val)) ? `${val}px` : val;
};

// Menggabungkan ukuran kustom dan bawaan
const skeletonStyle = computed(() => ({
  width: formatDimension(props.width) || defaultDimensions.value.w,
  height: formatDimension(props.height) || defaultDimensions.value.h,
}));

// Menentukan kelas bentuk dan animasi dari Tailwind
const skeletonClass = computed(() => {
  const base = 'bg-slate-200 shrink-0';
  const animation = props.animated ? 'animate-pulse' : '';

  let shape = 'rounded-md'; // Untuk teks
  if (props.type === 'circular') shape = 'rounded-full';
  if (props.type === 'rectangular') shape = 'rounded-xl'; // Untuk gambar/kartu

  return [base, animation, shape].filter(Boolean).join(' ');
});
</script>

<template>
  <div :class="skeletonClass" :style="skeletonStyle" aria-hidden="true"></div>
</template>
