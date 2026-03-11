<script setup>
import { computed, useSlots } from 'vue';

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false, // Jika true, garisnya akan membentang dari atas ke bawah
  },
  align: {
    type: String,
    default: 'center', // Posisi teks: start, center, end
  },
  type: {
    type: String,
    default: 'solid', // Gaya garis: solid, dashed, dotted
  },
});

const slots = useSlots();
const hasContent = computed(() => !!slots.default);

// Menentukan style garis
const borderStyleClass = computed(() => {
  if (props.type === 'dashed') return 'border-dashed';
  if (props.type === 'dotted') return 'border-dotted';
  return 'border-solid';
});

// Menentukan panjang garis sebelum teks
const beforeClass = computed(() => {
  if (!hasContent.value) return 'w-full border-t';
  if (props.align === 'start') return 'w-4 border-t'; // Garis pendek jika teks di kiri
  return 'flex-grow border-t';
});

// Menentukan panjang garis setelah teks
const afterClass = computed(() => {
  if (!hasContent.value) return 'hidden';
  if (props.align === 'end') return 'w-4 border-t'; // Garis pendek jika teks di kanan
  return 'flex-grow border-t';
});
</script>

<template>
  <div
    v-if="!vertical"
    class="flex items-center w-full my-4"
    role="separator"
    aria-orientation="horizontal"
  >
    <div
      :class="[
        'border-gray-200 transition-colors duration-200',
        borderStyleClass,
        beforeClass,
      ]"
    ></div>

    <div
      v-if="hasContent"
      class="px-3 text-sm font-medium text-gray-400 select-none whitespace-nowrap"
    >
      <slot />
    </div>

    <div
      :class="[
        'border-gray-200 transition-colors duration-200',
        borderStyleClass,
        afterClass,
      ]"
    ></div>
  </div>

  <div
    v-else
    class="inline-flex items-center mx-4 h-full min-h-[1em] self-stretch"
    role="separator"
    aria-orientation="vertical"
  >
    <div
      :class="[
        'h-full border-l border-gray-200 transition-colors duration-200',
        borderStyleClass,
      ]"
    ></div>
  </div>
</template>
