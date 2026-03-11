<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md', // Pilihan: sm, md, lg, xl
  },
  color: {
    type: String,
    default: 'primary', // Pilihan: primary, white, success, danger, warning, info, gray
  },
});

// Pemetaan ukuran (lebar dan tinggi SVG)
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };
  return sizes[props.size] || sizes.md;
});

// Pemetaan warna garis SVG
const colorClasses = computed(() => {
  const colors = {
    primary: 'text-[#2FAAE1]',
    white: 'text-white', // Sangat berguna untuk diletakkan di dalam tombol berwarna gelap
    success: 'text-green-500',
    danger: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500',
    gray: 'text-gray-400',
  };
  return colors[props.color] || colors.primary;
});
</script>

<template>
  <svg
    :class="['animate-spin inline-block shrink-0', sizeClasses, colorClasses]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
    <span class="sr-only">Loading...</span>
  </svg>
</template>
