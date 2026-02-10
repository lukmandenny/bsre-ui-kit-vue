<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      [
        'primary',
        'secondary',
        'danger',
        'success',
        'warning',
        'ghost',
        'outline',
      ].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    // Kita update validatornya biar support xs dan xl
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'button',
  },
});

const classes = computed(() => {
  // Base styles: Flowbite pakai font-medium dan rounded-lg (di config kita)
  const base =
    'inline-flex items-center justify-center rounded-base font-regular text-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  // 1. Variants (Sesuaikan ring color dengan brand)
  const variants = {
    primary:
      'bg-bsre-blue text-white hover:bg-bsre-blue-dark  border border-transparent',
    secondary:
      'bg-bsre-blue-lightest text-bsre-blue hover:bg-bsre-blue-lighter  border border-transparent',
    danger:
      'bg-bsre-red text-white hover:bg-bsre-red-dark  border border-transparent',
    success:
      'bg-bsre-green text-white hover:bg-bsre-green-dark  border border-transparent',
    warning:
      'bg-bsre-yellow text-white hover:bg-bsre-yellow-dark border border-transparent',
    ghost:
      'bg-transparent text-bsre-text-primary hover:bg-bsre-gray/10  border border-transparent',
    outline:
      'bg-transparent border border-bsre-gray/30 text-bsre-text-primary hover:bg-bsre-gray/5 ',
  };

  // 2. Sizes (ADAPTASI FLOWBITE)
  const sizes = {
    // Extra Small (px-3 py-1.5 text-xs)
    xs: 'px-3 py-1.5 text-xs leading-5 gap-1.5',

    // Small (px-3 py-2 text-sm)
    sm: 'px-3 py-2 text-sm leading-5 gap-2',

    // Base/Medium (px-4 py-2.5 text-sm) -> Ini defaultnya
    md: 'px-4 py-2.5 text-sm leading-5 gap-2',

    // Large (px-5 py-3 text-base)
    lg: 'px-5 py-3 text-base leading-6 gap-2.5',

    // Extra Large (px-6 py-3.5 text-base)
    xl: 'px-6 py-3.5 text-base leading-6 gap-3',
  };

  const widthClass = props.block ? 'w-full' : '';

  return [
    base,
    variants[props.variant] || variants.primary,
    sizes[props.size] || sizes.md,
    widthClass,
  ].join(' ');
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :disabled="disabled || loading"
    :class="classes"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 h-[1em] w-[1em] text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
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
    </svg>

    <slot name="prefix" v-if="!loading" />
    <slot />
    <slot name="suffix" />
  </component>
</template>
