<script setup>
import Illu from './Illu.vue'
defineProps({ eyebrow: String, title: String, lead: String, icon: { type: String, default: 'waves' } })
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pb-16 pt-16 sm:pb-20 sm:pt-24">
    <Illu name="blob" class="pointer-events-none absolute -right-32 -top-24 w-[30rem] text-brand-100" />
    <Illu name="dots" class="pointer-events-none absolute left-4 top-10 w-24 text-brand-200" />
    <div class="container-x relative grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
      <div>
        <p class="eyebrow"><span class="h-px w-8 bg-brand-400" />{{ eyebrow }}</p>
        <h1 class="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-6xl">{{ title }}</h1>
        <p v-if="lead" class="lead mt-6 max-w-2xl sm:text-xl">{{ lead }}</p>
        <div class="mt-8"><slot /></div>
      </div>
      <div class="relative hidden justify-self-center lg:block">
        <Illu name="rings" class="w-64 animate-[spin_50s_linear_infinite] text-brand-200" />
        <Illu :name="icon" class="absolute inset-0 m-auto w-24 text-brand-500" />
        <Illu name="sparkle" class="absolute right-2 top-4 w-6 animate-float text-brand-400" />
      </div>
    </div>
  </section>
</template>
