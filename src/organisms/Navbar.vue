<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Mode tampilan: 'light' (Default putih) atau 'transparent' (Buat di atas gambar)
  mode: {
    type: String,
    default: 'light',
    validator: (val) => ['light', 'transparent', 'dark'].includes(val),
  },
  // Apakah navbar nempel di atas saat scroll?
  sticky: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => {
  const base = 'w-full transition-all duration-300 z-50 px-6 py-4';

  // Logic Warna Background
  const modes = {
    light: 'bg-white border-b border-slate-200 text-bsre-text-primary',
    dark: 'bg-slate-900 border-b border-slate-800 text-white',
    transparent:
      'bg-transparent text-white absolute top-0 left-0 border-b border-white/10',
  };

  // Logic Sticky
  const stickyClass = props.sticky
    ? 'sticky top-0 backdrop-blur-md bg-white/90 supports-[backdrop-filter]:bg-white/60'
    : '';

  return [
    base,
    modes[props.mode],
    // Kalau transparent, jangan kasih sticky class biar gak konflik logic-nya (sederhana dulu)
    props.mode !== 'transparent' ? stickyClass : '',
  ].join(' ');
});
</script>

<template>
  <nav :class="classes">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div
        class="flex-shrink-0 font-bold text-xl tracking-tight flex items-center gap-2"
      >
        <slot name="logo">
          <span>BSrE UI</span>
        </slot>
      </div>

      <div class="hidden md:flex items-center gap-1">
        <slot name="menu" />
      </div>

      <div class="flex items-center gap-3">
        <slot name="action" />
      </div>
    </div>
  </nav>
</template>
