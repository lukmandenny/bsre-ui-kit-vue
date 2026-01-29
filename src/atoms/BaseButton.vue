<template>
  <button :class="['bsre-button', size, variant]">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  size: { type: String, default: 'medium' }, // s, m, l
  variant: { type: String, default: 'primary' },
});
</script>

<style scoped>
.bsre-button {
  font-family: var(--bsre-font-main);
  border-radius: var(--bsre-radius);
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

/* Solusi anti-gepeng: Standarisasi padding & height */
.medium {
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
}
.small {
  height: 32px;
  padding: 0 12px;
  font-size: 12px;
}

.primary {
  background-color: var(--bsre-primary);
  color: white;
}
.primary:hover {
  background-color: var(--bsre-primary-hover);
}
</style>
