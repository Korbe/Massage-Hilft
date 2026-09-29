<script setup>
import { practitioners } from '../../data/practitioners.js'
import { services, moreServices, steps } from '../../data/home.js'
import PractitionerCard from '../PractitionerCard.vue'
import Illu from '../Illu.vue'
import Icon from '../Icon.vue'

const mainServices = services.filter((s) => !s.feature)
const feature = services.find((s) => s.feature)
</script>

<template>
  <section id="angebot" class="relative py-24 sm:py-32">
    <div class="container-x">
      <div class="max-w-2xl">
        <p class="eyebrow">Angebot &amp; Plan</p>
        <h2 class="h2 mt-4">Was wir für Sie tun können</h2>
      </div>

      <!-- Practitioners -->
      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <PractitionerCard v-for="p in practitioners" :key="p.id" :p="p" />
      </div>

      <!-- Services -->
      <div class="mt-20 grid gap-6 lg:grid-cols-3">
        <RouterLink
          v-for="s in mainServices"
          :key="s.id"
          :to="s.to"
          class="card group flex flex-col p-8 transition hover:-translate-y-1 hover:ring-brand-300"
        >
          <span class="grid size-16 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white">
            <Illu :name="s.icon" class="size-10" />
          </span>
          <h3 class="mt-6 text-2xl font-bold">{{ s.title }}</h3>
          <p class="mt-3 flex-1 leading-relaxed text-muted">{{ s.text }}</p>
          <span class="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600">
            Mehr erfahren <Icon name="arrow-right" class="size-4 transition group-hover:translate-x-1" />
          </span>
        </RouterLink>

        <!-- MANNEA: no photo yet, so a mood illustration panel -->
        <RouterLink
          :to="feature.to"
          class="group relative flex flex-col overflow-hidden rounded-3xl bg-ink p-8 text-white transition hover:-translate-y-1 lg:row-span-1"
        >
          <div class="pointer-events-none absolute inset-0">
            <Illu name="blob" class="absolute -right-16 -top-20 w-80 text-brand-600/40" />
            <Illu name="leaf" class="absolute right-6 top-6 w-24 rotate-12 animate-float-slow text-brand-300" />
            <Illu name="waves" class="absolute -bottom-10 -right-6 w-48 text-brand-400/20" />
            <Illu name="sparkle" class="absolute right-32 top-24 w-3 animate-float text-brand-200" />
          </div>
          <span class="relative inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-200">Ganzheitlich</span>
          <h3 class="relative mt-24 text-2xl font-bold">{{ feature.title }}</h3>
          <p class="relative mt-3 flex-1 leading-relaxed text-white/80">{{ feature.text }}</p>
          <span class="relative mt-6 inline-flex items-center gap-2 font-semibold text-brand-300">
            Mehr erfahren <Icon name="arrow-right" class="size-4 transition group-hover:translate-x-1" />
          </span>
        </RouterLink>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-3">
        <RouterLink
          v-for="m in moreServices"
          :key="m.to"
          :to="m.to"
          class="group flex items-start justify-between gap-4 rounded-2xl bg-brand-50 p-6 transition hover:bg-brand-100"
        >
          <div>
            <h3 class="text-lg font-bold">{{ m.title }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-muted">{{ m.text }}</p>
          </div>
          <Icon name="arrow-right" class="mt-1 size-5 shrink-0 text-brand-600 transition group-hover:translate-x-1" />
        </RouterLink>
      </div>

      <!-- Steps -->
      <div class="relative mt-24 overflow-hidden rounded-[2rem] bg-sand px-6 py-14 sm:px-12">
        <Illu name="dots" class="pointer-events-none absolute -right-4 -top-4 w-32 text-brand-200" />
        <h3 class="text-center font-display text-3xl font-bold sm:text-4xl">So einfach geht’s</h3>
        <ol class="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          <div class="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-brand-200 md:block" aria-hidden="true" />
          <li v-for="(s, i) in steps" :key="s.title" class="relative text-center">
            <span class="relative mx-auto grid size-16 place-items-center rounded-full bg-white font-display text-2xl font-bold text-brand-500 shadow-lg shadow-brand-500/10 ring-4 ring-sand">
              {{ i + 1 }}
            </span>
            <p class="mt-5 font-display text-xl font-bold">{{ s.title }}</p>
            <p class="mx-auto mt-2 max-w-xs text-muted">{{ s.text }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
