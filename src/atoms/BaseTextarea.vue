<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: null,
  },
  errorMessage: {
    type: String,
    default: null,
  },
  state: {
    type: String,
    default: 'default', // 'default', 'success', 'error'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: [Number, String],
    default: 3, // Tinggi bawaan 3 baris
  },
  id: {
    type: String,
    default: () => `textarea-${Math.random().toString(36).substring(2, 9)}`,
  },
});

const emit = defineEmits(['update:modelValue']);

// Computed v-model
const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

// Penentuan warna border dan background berdasarkan state
const stateClasses = computed(() => {
  if (props.disabled)
    return 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-80';
  if (props.state === 'error')
    return 'bg-red-50 border-red-500 text-red-900 focus:ring-2 focus:ring-red-500/40 focus:border-red-500';
  if (props.state === 'success')
    return 'bg-green-50 border-green-500 text-green-900 focus:ring-2 focus:ring-green-500/40 focus:border-green-500';
  return 'bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#2FAAE1]/40 focus:border-[#2FAAE1] hover:border-[#2FAAE1]/50';
});
</script>

<template>
  <div class="w-full flex flex-col gap-1.5">
    <label
      v-if="label"
      :for="id"
      class="!m-0 text-sm font-medium text-[#2F2B3D] transition-colors"
    >
      {{ label }}
    </label>

    <textarea
      :id="id"
      v-model="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :class="[
        'w-full p-3 rounded-xl border border-solid text-sm transition-all outline-none resize-y min-h-[80px]',
        stateClasses,
      ]"
    ></textarea>

    <p
      v-if="state === 'error' && errorMessage"
      class="!m-0 text-xs font-medium text-red-600"
    >
      {{ errorMessage }}
    </p>
    <p v-else-if="hint" class="!m-0 text-xs text-gray-500">
      {{ hint }}
    </p>
  </div>
</template>
