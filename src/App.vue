<template>
  <div class="playground">
    <h1>POC BSrE UI Kit</h1>

    <section>
      <h2>Button Variants</h2>
      <div class="row">
        <BaseButton variant="primary">Primary Action</BaseButton>

        <BaseButton variant="danger">Delete Data</BaseButton>
      </div>
    </section>

    <section>
      <h2>Button Sizes (Anti-Gepeng Test)</h2>
      <div class="row">
        <BaseButton size="small">Small (32px)</BaseButton>

        <BaseButton size="medium">Medium (40px)</BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import langsung dari source untuk testing cepat
import { BaseButton } from './index.js';
</script>

<style scoped>
.playground {
  padding: 40px;
  font-family: 'DM Sans', sans-serif;
}
.row {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 10px;
}
section {
  margin-bottom: 30px;
}
h2 {
  font-size: 18px;
  color: #666;
}
</style>
