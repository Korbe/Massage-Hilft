<script setup>
import { ref } from 'vue'
import heroImg from '../../assets/koerper/hero.png'
import { heroHotspots } from '../../data/home.js'
import { useBodyMap } from '../../composables/useBodyMap.js'
import Illu from '../Illu.vue'
import Icon from '../Icon.vue'

const { focusArea } = useBodyMap()
const hovered = ref(null)
const trust = ['Ausgebildete Heilmasseure', 'Zwei Praxen in Klagenfurt', 'Kostenrückerstattung möglich']
</script>

<template>
  <section id="start" class="relative overflow-hidden pb-24 pt-14 sm:pt-20 lg:pb-32">
    <Illu name="dots" class="pointer-events-none absolute -left-8 top-10 hidden w-40 text-brand-200 lg:block" />
    <Illu name="waves" class="pointer-events-none absolute bottom-10 left-[38%] hidden w-40 text-brand-200 lg:block" />

    <div class="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
      <div class="relative">
        <h1 class="eyebrow">
          <span class="h-px w-8 bg-brand-400" />
          Heilmassage in Klagenfurt – Massage hilft!
        </h1>
        <p
          class="mt-5 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
          Wo
          <span class="relative inline-block text-brand-500">
            zwickt’s?
            <Illu name="squiggle" class="absolute -bottom-3 left-0 h-4 w-full text-brand-300" />
          </span>
        </p>
        <p class="lead mt-8 max-w-xl sm:text-xl">
          Sie kennen Ihren Körper genau. Wir wissen, wie alles zusammenhängt. Gemeinsam finden wir die Übeltäter, die
          Ihre Schmerzen verursachen – und tun, was Ihnen wirklich hilft.
        </p>
        <p class="mt-5 font-semibold text-ink">Tanja Paulic &amp; Elmar Pasterk – Heilmasseure in Klagenfurt</p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <RouterLink :to="{ path: '/', hash: '#praxis-tanja' }" class="btn-primary">
            Termin bei Tanja
            <Icon name="arrow-right" class="size-4" />
          </RouterLink>
          <RouterLink :to="{ path: '/', hash: '#praxis-elmar' }" class="btn-dark">
            Termin bei Elmar
            <Icon name="arrow-right" class="size-4" />
          </RouterLink>
        </div>

        <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-brand-100 pt-6 text-sm font-medium text-muted">
          <li v-for="t in trust" :key="t" class="flex items-center gap-2">
            <span class="grid size-6 place-items-center rounded-full bg-brand-100 text-brand-600">
              <Icon name="check" class="size-3.5" />
            </span>
            {{ t }}
          </li>
        </ul>
      </div>

      <!-- Body illustration with clickable hotspots -->
      <div class="relative mx-auto w-full max-w-[560px]">
        <Illu name="blob" class="absolute inset-[-6%] text-brand-100" />
        <Illu name="rings" class="absolute -right-4 -top-8 w-32 animate-[spin_40s_linear_infinite] text-brand-300" />
        <Illu name="sparkle" class="absolute left-2 top-6 w-6 animate-float text-brand-400" />
        <Illu name="sparkle" class="absolute bottom-16 right-0 w-4 animate-float-slow text-brand-500" />
        <Illu name="leaf" class="absolute -bottom-4 -left-4 w-20 -rotate-12 animate-float-slow text-brand-400" />
        <Illu name="drops" class="absolute -right-2 bottom-1/3 w-12 animate-float text-brand-300" />



        <div class="relative aspect-square">
          <img :src="heroImg" alt="Illustration eines Körpers von vorne und hinten"
            class="absolute inset-0 size-full object-contain mix-blend-multiply" width="600" height="600" />
          <button v-for="h in heroHotspots" :key="h.area" class="group absolute -translate-x-1/2 -translate-y-1/2 p-2"
            :style="{ left: h.x + '%', top: h.y + '%' }" :aria-label="`${h.label}: zur Körperkarte`"
            @mouseenter="hovered = h.area" @mouseleave="hovered = null" @focus="hovered = h.area" @blur="hovered = null"
            @click="focusArea(h.area)">
            <span class="absolute inset-2 rounded-full bg-brand-400 animate-ping-soft" />
            <span
              class="relative block size-4 rounded-full border-[3px] border-white bg-brand-500 shadow-md shadow-brand-600/40 transition group-hover:scale-125" />
            <span
              class="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white transition"
              :class="hovered === h.area ? 'opacity-100' : 'opacity-0'">
              {{ h.label }}
            </span>
          </button>
        </div>

        <div class="absolute -bottom-12 right-2 hidden items-center gap-2 text-brand-600 sm:flex">
          <p class="text-right font-hand text-2xl leading-none">Tippen Sie auf<br />Ihre Stelle</p>
          <Illu name="arrow" class="w-12 -translate-y-6 -rotate-90 -scale-y-100 text-brand-400" />
        </div>

      </div>
    </div>
  </section>
</template>
