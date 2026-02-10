<script setup lang="ts">
import BaseButton from './atoms/BaseButton.vue';
// Tidak perlu import CSS lagi karena sudah di main.ts/main.js
</script>

<template>
  <div class="min-h-screen bg-slate-50 p-10 font-sans">
    <h1 class="text-3xl font-bold text-bsre-text-primary mb-6">
      BSrE Design System Playground
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="p-6 rounded-xl bg-white shadow-sm border border-slate-200">
        <h2 class="text-lg font-semibold mb-4">Color Palette Test</h2>
        <div class="flex flex-wrap gap-4">
          <div
            class="w-16 h-16 rounded-base bg-bsre-blue flex items-center justify-center text-white text-xs"
          >
            Main
          </div>
          <div
            class="w-16 h-16 rounded-base bg-bsre-blue-light flex items-center justify-center text-white text-xs"
          >
            Light
          </div>
          <div
            class="w-16 h-16 rounded-base bg-bsre-blue-dark flex items-center justify-center text-white text-xs"
          >
            Dark
          </div>
          <div
            class="w-16 h-16 rounded-base bg-bsre-green flex items-center justify-center text-white text-xs"
          >
            Green
          </div>
          <div
            class="w-16 h-16 rounded-base bg-bsre-red flex items-center justify-center text-white text-xs"
          >
            Red
          </div>
          <div
            class="w-16 h-16 rounded-base bg-bsre-yellow flex items-center justify-center text-white text-xs"
          >
            Yellow
          </div>
        </div>
      </div>

      <div class="p-6 rounded-xl bg-white shadow-sm border border-slate-200">
        <h2 class="text-lg font-semibold mb-4">Typography & Hover Test</h2>
        <div class="space-y-2">
          <p class="text-bsre-text-primary">Ini teks Primary (100%)</p>
          <p class="text-bsre-text-secondary">Ini teks Secondary (70%)</p>
          <p class="text-bsre-text-disable">Ini teks Disable (40%)</p>

          <div class="mt-4 pt-4 border-t border-slate-100">
            <button
              class="px-4 py-2 rounded-base font-medium text-bsre-blue/80 hover:bg-bsre-blue/10 hover:text-bsre-blue transition-all"
            >
              Test Hover Menu (Native)
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6 rounded-xl bg-white shadow-sm border border-slate-200">
      <h2 class="text-lg font-semibold mb-6 border-b border-slate-100 pb-4">
        Button Gallery
      </h2>

      <div class="mb-8">
        <h3
          class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3"
        >
          Variants
        </h3>
        <div class="flex flex-wrap gap-4">
          <BaseButton variant="primary">Primary</BaseButton>
          <BaseButton variant="secondary">Secondary</BaseButton>
          <BaseButton variant="success">Success</BaseButton>
          <BaseButton variant="warning">Warning</BaseButton>
          <BaseButton variant="danger">Danger</BaseButton>
          <BaseButton variant="outline">Outline</BaseButton>
          <BaseButton variant="ghost">Ghost</BaseButton>
        </div>
      </div>

      <div class="mb-8">
        <h3
          class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3"
        >
          Sizes
        </h3>
        <div class="flex flex-wrap items-center gap-4">
          <BaseButton size="xs" variant="primary">Extra Small</BaseButton>
          <BaseButton size="sm" variant="primary">Small</BaseButton>
          <BaseButton size="md" variant="primary">Base (Medium)</BaseButton>
          <BaseButton size="lg" variant="primary">Large</BaseButton>
          <BaseButton size="xl" variant="primary">Extra Large</BaseButton>
        </div>
      </div>

      <div>
        <h3
          class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3"
        >
          States & Styles
        </h3>
        <div class="flex flex-wrap items-center gap-4 mb-4">
          <BaseButton :loading="true">Loading</BaseButton>
          <BaseButton disabled>Disabled</BaseButton>
          <BaseButton variant="outline" disabled>Disabled Outline</BaseButton>
        </div>

        <div class="max-w-md">
          <BaseButton block variant="primary"
            >Block Button (Full Width)</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
