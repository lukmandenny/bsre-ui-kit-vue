<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Menerima komponen Vue dari Phosphor Icons
  icon: {
    type: [Object, Function],
    required: true,
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg, xl
  },
  color: {
    type: String,
    default: 'default', // default (inherit), primary, success, danger, warning, info, gray
  },
  weight: {
    type: String,
    default: 'regular', // thin, light, regular, bold, fill, duotone
  },
});

// Standarisasi ukuran (Design Tokens)
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-4 h-4', // 16px
    md: 'w-5 h-5', // 20px
    lg: 'w-6 h-6', // 24px
    xl: 'w-8 h-8', // 32px
  };
  return sizes[props.size] || sizes.md;
});

// Standarisasi warna
const colorClasses = computed(() => {
  const colors = {
    default: 'text-current', // Mengikuti warna teks parent-nya
    primary: 'text-[#2FAAE1]',
    success: 'text-green-500',
    danger: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500',
    gray: 'text-gray-400',
  };
  return colors[props.color] || colors.default;
});
</script>

<template>
  <component
    :is="icon"
    :class="[
      'inline-block shrink-0 transition-colors',
      sizeClasses,
      colorClasses,
    ]"
    :weight="weight"
    aria-hidden="true"
  />
</template>
