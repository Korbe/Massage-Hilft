<script setup>
import Illu from './Illu.vue'
defineProps({ p: { type: Object, required: true }, size: { type: String, default: 'md' } })
</script>

<!-- TODO: Durch echte Fotos ersetzen, sobald vorhanden (p.photo) -->
<template>
  <div
    class="relative isolate overflow-hidden bg-gradient-to-br from-brand-100 via-brand-50 to-white ring-1 ring-brand-100"
    :class="size === 'lg' ? 'aspect-[4/5] rounded-[2rem]' : 'aspect-[4/3] rounded-3xl'"
  >
    <img v-if="p.photo" :src="p.photo" :alt="`${p.name}, ${p.title} in Klagenfurt`" class="absolute inset-0 size-full object-cover" />
    <template v-else>
      <Illu name="blob" class="absolute -right-10 -top-10 w-3/4 text-brand-200/70" />
      <Illu name="waves" class="absolute bottom-6 left-6 w-24 text-brand-300" />
      <Illu name="sparkle" class="absolute right-8 top-8 w-5 animate-float text-brand-400" />
      <div class="absolute inset-0 grid place-items-center">
        <div class="text-center">
          <div class="mx-auto grid size-24 place-items-center rounded-full bg-white font-display text-3xl font-bold text-brand-600 shadow-lg shadow-brand-500/10 ring-4 ring-white">
            {{ p.initials }}
          </div>
          <p class="mt-3 font-hand text-2xl text-brand-700">Foto folgt</p>
        </div>
      </div>
    </template>
  </div>
</template>
