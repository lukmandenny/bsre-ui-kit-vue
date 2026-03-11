<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [Boolean, Array],
    default: false,
  },
  value: {
    type: [String, Number, Boolean, Object],
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  hint: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: () => `checkbox-${Math.random().toString(36).substring(2, 9)}`,
  },
});

const emit = defineEmits(['update:modelValue']);

// Computed setter/getter agar v-model bekerja mulus baik sebagai Boolean maupun Array
const isChecked = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>

<template>
  <div :class="['flex', hint ? 'items-start' : 'items-center']">
    <div class="flex items-center h-5" :class="hint ? 'mt-0.5' : ''">
      <div class="relative flex items-center justify-center w-[18px] h-[18px]">
        <input
          :id="id"
          type="checkbox"
          :value="value"
          v-model="isChecked"
          :disabled="disabled"
          class="peer appearance-none w-[18px] h-[18px] m-0 rounded border-[1.5px] border-solid border-gray-300 bg-white cursor-pointer checked:bg-[#2FAAE1] checked:border-[#2FAAE1] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50"
        />
        <svg
          class="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>

    <div
      v-if="label || hint"
      class="ms-2.5 flex flex-col justify-center select-none"
      :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    >
      <label
        v-if="label"
        :for="id"
        class="!m-0 text-sm font-medium text-[#2F2B3D] transition-colors"
        :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
      >
        {{ label }}
      </label>
      <p v-if="hint" class="!m-0 !mt-0.5 text-xs text-gray-500">
        {{ hint }}
      </p>
    </div>
  </div>
</template>
