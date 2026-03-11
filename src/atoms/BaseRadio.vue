<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Object],
    default: null,
  },
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
  name: {
    type: String,
    default: null, // Atribut name opsional tapi bagus untuk native browser form
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
    default: () => `radio-${Math.random().toString(36).substring(2, 9)}`,
  },
});

const emit = defineEmits(['update:modelValue']);

// Cukup gunakan computed getter, tidak perlu setter lagi
const isChecked = computed(() => props.modelValue === props.value);

// Fungsi untuk memancarkan perubahan secara manual
const handleChange = () => {
  if (!props.disabled) {
    emit('update:modelValue', props.value);
  }
};
</script>

<template>
  <div :class="['flex', hint ? 'items-start' : 'items-center']">
    <div class="flex items-center h-5" :class="hint ? 'mt-0.5' : ''">
      <div class="relative flex items-center justify-center w-[18px] h-[18px]">
        <input
          :id="id"
          type="radio"
          :name="name"
          :value="value"
          :checked="isChecked"
          @change="handleChange"
          :disabled="disabled"
          class="peer appearance-none w-[18px] h-[18px] m-0 rounded-full border-[1.5px] border-solid border-gray-300 bg-gray-50 cursor-pointer checked:border-[#2FAAE1] disabled:cursor-not-allowed disabled:opacity-50"
        />

        <div
          class="absolute w-2.5 h-2.5 rounded-full bg-[#2FAAE1] pointer-events-none opacity-0 peer-checked:opacity-100 transition-all transform scale-50 peer-checked:scale-100 duration-200"
        ></div>
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
