<script setup>
import Icon from './Icon.vue'
defineProps({ items: { type: Array, required: true } })
</script>

<template>
  <div class="divide-y divide-brand-100 rounded-3xl bg-white ring-1 ring-brand-100">
    <details v-for="(f, i) in items" :key="f.q" class="group px-6 sm:px-8" :open="i === 0">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
        {{ f.q }}
        <span class="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-180 group-open:bg-brand-500 group-open:text-white">
          <Icon name="chevron" class="size-4" />
        </span>
      </summary>
      <p class="-mt-1 pb-6 pr-12 leading-relaxed text-muted">{{ f.a }}</p>
    </details>
  </div>
</template>
