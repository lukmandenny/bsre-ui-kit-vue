<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: 'User', // Digunakan untuk inisial dan atribut alt
  },
  size: {
    type: String,
    default: 'md', // Pilihan: sm, md, lg, xl
  },
  shape: {
    type: String,
    default: 'circle', // Pilihan: circle, square
  },
});

const imageError = ref(false);

const onImageError = () => {
  imageError.value = true;
};

// Logika untuk mengambil maksimal 2 huruf inisial dari nama
const initials = computed(() => {
  if (!props.name) return '?';
  const words = props.name.trim().split(' ');
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return props.name.substring(0, 2).toUpperCase();
});

// Pemetaan ukuran
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };
  return sizes[props.size] || sizes.md;
});

// Pemetaan bentuk
const shapeClasses = computed(() => {
  return props.shape === 'square' ? 'rounded-xl' : 'rounded-full';
});
</script>

<template>
  <div
    :class="[
      'relative inline-flex items-center justify-center shrink-0 overflow-hidden bg-[#2FAAE1]/10 text-[#2FAAE1] font-bold border border-[#2FAAE1]/20 select-none',
      sizeClasses,
      shapeClasses,
    ]"
    :title="name"
  >
    <img
      v-if="src && !imageError"
      :src="src"
      :alt="name"
      @error="onImageError"
      class="w-full h-full object-cover"
    />

    <span v-else>{{ initials }}</span>
  </div>
</template>
