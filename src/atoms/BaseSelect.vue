<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: 'Pilih salah satu...',
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
  id: {
    type: String,
    default: () => `select-${Math.random().toString(36).substring(2, 9)}`,
  },
});

const emit = defineEmits(['update:modelValue']);

// Computed v-model
const selectedValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

// Pintar menormalisasi input: Jika array isinya string, ubah jadi format object
const normalizedOptions = computed(() => {
  return props.options.map((opt) => {
    if (typeof opt === 'string' || typeof opt === 'number') {
      return { label: String(opt), value: opt };
    }
    return opt;
  });
});

// Penentuan warna border dan background berdasarkan state
const stateClasses = computed(() => {
  if (props.disabled)
    return 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-80';
  if (props.state === 'error')
    return 'bg-red-50 border-red-500 text-red-900  focus:border-red-500';
  if (props.state === 'success')
    return 'bg-green-50 border-green-500 text-green-900  focus:border-green-500';
  return 'bg-gray-50 border-gray-300 text-gray-900  focus:border-bsre-blue ';
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

    <div class="relative">
      <select
        :id="id"
        v-model="selectedValue"
        :disabled="disabled"
        :class="[
          'w-full p-2.5 pr-10 rounded-xl border border-solid text-sm outline-none appearance-none',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          stateClasses,
        ]"
      >
        <option value="" disabled hidden>{{ placeholder }}</option>

        <option
          v-for="(option, index) in normalizedOptions"
          :key="index"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <div
        class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-400"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>

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
