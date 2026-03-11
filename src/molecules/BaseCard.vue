<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: null, // Tetap kita sediakan di komponen jaga-jaga ke depannya butuh
  },
  imgSrc: {
    type: String,
    default: null,
  },
  imgAlt: {
    type: String,
    default: '',
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: 'left', // Opsi: 'left', 'center'
  },
  imageType: {
    type: String,
    default: 'cover', // Opsi: 'cover', 'icon'
  },
});

const isInteractive = computed(() => !!props.href);
const componentType = computed(() => (isInteractive.value ? 'a' : 'div'));

// Class untuk container utama
const cardClasses = computed(() => {
  const base = 'bg-white border border-gray-100 overflow-hidden';
  const style = 'rounded-[20px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]';
  const layout = props.horizontal
    ? 'flex flex-col md:flex-row'
    : 'flex flex-col';
  const interactive = isInteractive.value
    ? 'hover:bg-gray-50 transition-colors duration-200 block cursor-pointer'
    : '';

  return [base, style, layout, interactive].filter(Boolean).join(' ');
});

// Class untuk area gambar agar menyesuaikan mode 'cover' atau 'icon'
const imgClasses = computed(() => {
  let classes = 'shrink-0';

  if (props.imageType === 'icon') {
    // Mode Ikon (Kecil di atas)
    classes += props.align === 'center' ? ' mx-auto' : ' mx-6';
    classes += ' w-[60px] h-[60px] mt-8 object-contain';
  } else if (props.horizontal) {
    // Mode Cover Landscape
    classes +=
      ' object-cover w-full h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-[20px]';
  } else {
    // Mode Cover Portrait
    classes += ' object-cover w-full h-48 md:h-64 rounded-t-[20px]';
  }

  return classes;
});

// Class untuk area konten agar bisa rata tengah
const contentClasses = computed(() => {
  let classes = 'flex flex-col p-6 pb-8 leading-normal flex-1 gap-1';
  if (props.align === 'center') {
    classes += ' text-center items-center';
  }
  return classes;
});
</script>

<template>
  <component :is="componentType" :href="href" :class="cardClasses">
    <slot name="image">
      <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt" :class="imgClasses" />
    </slot>

    <div :class="contentClasses">
      <slot />
    </div>
  </component>
</template>
