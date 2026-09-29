<script setup>
import { reviews } from '../../data/home.js'
import Icon from '../Icon.vue'
import Illu from '../Illu.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-brand-50 py-24 sm:py-28">
    <Illu name="rings" class="pointer-events-none absolute -left-20 bottom-0 w-72 text-brand-200" />
    <div class="container-x relative">
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p class="eyebrow">Stimmen aus der Praxis</p>
          <h2 class="h2 mt-4">„Top Massage, hilft wirklich!“</h2>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex text-amber-400">
            <Icon v-for="n in 5" :key="n" name="star" class="size-5" />
          </div>
          <span class="text-sm font-semibold text-muted">Rezensionen auf Google</span>
        </div>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <figure v-for="r in reviews" :key="r.name" class="card flex flex-col p-6">
          <div class="flex text-amber-400" aria-label="5 von 5 Sternen">
            <Icon v-for="n in 5" :key="n" name="star" class="size-4" />
          </div>
          <blockquote class="mt-4 flex-1 leading-relaxed text-ink">{{ r.text }}</blockquote>
          <figcaption class="mt-5 flex items-center gap-3 border-t border-brand-100 pt-4">
            <span class="grid size-10 place-items-center rounded-full bg-brand-100 font-display font-bold text-brand-700">
              {{ r.name.charAt(0) }}
            </span>
            <span class="text-sm">
              <span class="block font-semibold">{{ r.name }}</span>
              <span class="text-muted">Google</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
