<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  state: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'success', 'error'].includes(v),
  },
  hint: {
    type: String,
    default: null,
  },
  errorMessage: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

// --- STATE PASSWORD VISIBILITY ---
const showPassword = ref(false);

const togglePassword = () => {
  if (!props.disabled && !props.readonly) {
    showPassword.value = !showPassword.value;
  }
};

const currentType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password';
  }
  return props.type;
});

// --- COMPUTED CLASSES ---
const inputClasses = computed(() => {
  let base =
    'block w-full transition-colors rounded-base outline-none border border-solid focus:ring-0';
  if (props.type === 'password') {
    base += ' pr-10';
  }

  const sizes = {
    sm: 'p-2 text-xs',
    md: 'p-2.5 text-sm',
    lg: 'p-3.5 text-base',
  };

  const states = {
    default: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-bsre-blue',
    success:
      'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:border-green-500',
    error:
      'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500',
  };

  if (props.disabled) {
    return [
      base,
      sizes[props.size],
      'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-80',
    ].join(' ');
  }

  return [base, sizes[props.size], states[props.state]].join(' ');
});

const labelClasses = computed(() => {
  if (props.disabled) return 'text-gray-400';
  if (props.state === 'success') return 'text-green-700';
  if (props.state === 'error') return 'text-red-700';
  return 'text-gray-900';
});
</script>

<template>
  <div class="w-full text-left font-sans">
    <label
      v-if="label"
      class="block !m-0 !mb-1.5 text-sm font-medium transition-colors leading-tight"
      :class="labelClasses"
    >
      {{ label }}
    </label>

    <div class="relative">
      <input
        :type="currentType"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :class="inputClasses"
      />

      <button
        v-if="type === 'password'"
        type="button"
        @click="togglePassword"
        tabindex="-1"
        class="absolute inset-y-0 right-0 flex items-center pr-3 transition-colors outline-none"
        :class="
          disabled || readonly
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-500 hover:text-bsre-blue cursor-pointer'
        "
      >
        <svg
          v-if="showPassword"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
          ></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      </button>
    </div>

    <p
      v-if="state === 'error' && errorMessage"
      class="!m-0 !mt-1.5 text-xs font-medium text-red-600 leading-tight"
    >
      {{ errorMessage }}
    </p>
    <p
      v-else-if="hint"
      class="!m-0 !mt-1.5 text-xs leading-tight"
      :class="
        state === 'success' ? 'text-green-600 font-medium' : 'text-gray-500'
      "
    >
      {{ hint }}
    </p>
  </div>
</template>
