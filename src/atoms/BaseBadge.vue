<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'primary', // Pilihan: primary, success, danger, warning, info, gray
  },
  size: {
    type: String,
    default: 'md', // Pilihan: sm, md
  },
  pill: {
    type: Boolean,
    default: false, // Jika true, bentuknya jadi bulat oval penuh (rounded-full)
  },
});

// Pemetaan warna "Soft" dengan teks pekat dan border tipis
const colorClasses = computed(() => {
  const colors = {
    primary: 'bg-[#2FAAE1]/10 text-[#2FAAE1] border-[#2FAAE1]/20',
    success: 'bg-green-50 text-green-700 border-green-200',
    danger: 'bg-red-50 text-red-700 border-red-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    gray: 'bg-gray-50 text-gray-700 border-gray-200',
  };
  return colors[props.color] || colors.primary;
});

// Pemetaan ukuran (padding dan ukuran font)
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-2 py-0.5 text-[11px] leading-4',
    md: 'px-2.5 py-1 text-xs',
  };
  return sizes[props.size] || sizes.md;
});
</script>

<template>
  <span
    :class="[
      'inline-flex items-center justify-center font-semibold border border-solid',
      pill ? 'rounded-full' : 'rounded-md',
      colorClasses,
      sizeClasses,
    ]"
  >
    <slot />
  </span>
</template>
