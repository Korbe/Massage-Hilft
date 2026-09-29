<script setup>
defineProps({ title: String, items: { type: Array, required: true }, note: String })
</script>

<template>
  <div class="card p-6 sm:p-8">
    <h3 v-if="title" class="text-xl font-bold">{{ title }}</h3>
    <ul class="mt-4 divide-y divide-dashed divide-brand-100">
      <li v-for="(it, i) in items" :key="i" class="flex items-baseline justify-between gap-4 py-3">
        <span class="text-ink">
          {{ it.name }}
          <span v-if="it.dur" class="ml-1 whitespace-nowrap text-sm text-muted">· {{ it.dur }}</span>
        </span>
        <span class="shrink-0 text-right font-display font-bold text-brand-700">{{ it.price }}</span>
      </li>
    </ul>
    <p v-if="note" class="mt-4 text-xs leading-relaxed text-muted">{{ note }}</p>
  </div>
</template>
