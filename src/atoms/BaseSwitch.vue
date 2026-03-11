<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
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
    default: () => `switch-${Math.random().toString(36).substring(2, 9)}`,
  },
});

const emit = defineEmits(['update:modelValue']);

// Computed untuk two-way binding dengan input checkbox
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
    <div :class="['relative flex items-center h-5', hint ? 'mt-0.5' : '']">
      <label
        :for="id"
        class="relative inline-flex items-center"
        :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
      >
        <input
          :id="id"
          type="checkbox"
          v-model="isChecked"
          :disabled="disabled"
          class="sr-only peer"
        />
        <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:outline-none peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2FAAE1] peer-disabled:opacity-50"
        ></div>
      </label>
    </div>

    <div
      v-if="label || hint"
      class="ms-3 flex flex-col justify-center select-none"
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
