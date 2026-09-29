<script setup>
import { computed } from 'vue'
import { bodyAreas } from '../../data/home.js'
import { useBodyMap } from '../../composables/useBodyMap.js'
import Illu from '../Illu.vue'
import Icon from '../Icon.vue'

const { activeArea } = useBodyMap()
const active = computed(() => bodyAreas.find((a) => a.id === activeArea.value) ?? bodyAreas[0])

function select(id) {
  // On phones a second tap closes the tile again
  activeArea.value = activeArea.value === id && window.innerWidth < 1024 ? null : id
}
</script>

<template>
  <section id="koerperkarte" class="relative py-24 sm:py-32">
    <Illu name="dots" class="pointer-events-none absolute right-6 top-16 hidden w-28 text-brand-200 sm:block" />
    <div class="container-x">
      <div class="max-w-2xl">
        <p class="eyebrow">Die Körperkarte</p>
        <h2 class="h2 mt-4">Wo spüren Sie es?</h2>
        <p class="lead mt-4">Klicken Sie auf den Bereich, der sich meldet.</p>
      </div>

      <div class="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <!-- Detail panel (desktop) -->
        <div class="hidden lg:block">
          <div class="card sticky top-28 overflow-hidden">
            <Transition mode="out-in" enter-active-class="transition duration-300" enter-from-class="opacity-0 translate-y-2" leave-active-class="transition duration-150" leave-to-class="opacity-0">
              <div :key="active.id">
                <div class="relative bg-gradient-to-b from-brand-50 to-white">
                  <img :src="active.image" :alt="`Körperbereich: ${active.name}`" class="mx-auto aspect-square w-4/5 object-contain mix-blend-multiply" loading="lazy" width="600" height="600" />
                </div>
                <div class="p-8 pt-2">
                  <p class="eyebrow">{{ active.name }}</p>
                  <p class="mt-3 font-display text-2xl font-bold leading-snug text-ink">{{ active.headline }}</p>
                  <p class="mt-4 leading-relaxed text-muted">{{ active.text }}</p>
                  <RouterLink :to="{ path: '/', hash: '#angebot' }" class="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700">
                    Termin vereinbaren <Icon name="arrow-right" class="size-4" />
                  </RouterLink>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Tiles -->
        <ul class="grid gap-4 sm:grid-cols-2">
          <li v-for="a in bodyAreas" :id="`bereich-${a.id}`" :key="a.id">
            <button
              class="group grid h-full w-full grid-cols-[6.5rem_1fr] overflow-hidden rounded-3xl bg-white text-left ring-1 transition duration-200"
              :class="activeArea === a.id ? 'ring-2 ring-brand-500 shadow-xl shadow-brand-500/15' : 'ring-brand-100 hover:-translate-y-0.5 hover:ring-brand-300 hover:shadow-lg hover:shadow-brand-500/10'"
              :aria-expanded="activeArea === a.id"
              :aria-controls="`text-${a.id}`"
              @click="select(a.id)"
            >
              <div class="relative bg-brand-50/60 sm:col-span-2">
                <img :src="a.image" :alt="`Körperkarte: ${a.name}`" class="mx-auto aspect-square h-full w-full object-contain p-1 mix-blend-multiply sm:aspect-[4/3] sm:h-auto sm:p-2" loading="lazy" width="600" height="600" />
                <span
                  class="absolute right-3 top-3 hidden size-8 sm:grid place-items-center rounded-full shadow transition"
                  :class="activeArea === a.id ? 'rotate-180 bg-brand-500 text-white' : 'bg-white text-brand-600'"
                >
                  <Icon name="chevron" class="size-4" />
                </span>
              </div>
              <div class="flex flex-1 flex-col p-4 sm:col-span-2 sm:p-5">
                <h3>
                  <span class="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-600">{{ a.keyword }}</span>
                  <span class="mt-2 block text-sm font-semibold text-muted">{{ a.name }}</span>
                  <span class="mt-1.5 block font-display text-base font-bold sm:text-lg leading-snug text-ink">{{ a.headline }}</span>
                </h3>
                <p v-show="activeArea === a.id" :id="`text-${a.id}`" class="mt-3 text-[0.95rem] leading-relaxed text-muted lg:hidden">
                  {{ a.text }}
                </p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
