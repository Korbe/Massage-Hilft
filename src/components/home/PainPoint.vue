<script setup>
import Illu from '../Illu.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-sand py-24 sm:py-32">
    <Illu name="rings" class="pointer-events-none absolute -right-24 top-1/2 hidden w-80 -translate-y-1/2 text-brand-200 lg:block" />
    <div class="container-x relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div>
        <p class="eyebrow">Kennen Sie das?</p>
        <h2 class="h2 mt-4">Dort, wo es weh tut, liegt selten die Ursache.</h2>
        <Illu name="waves" class="mt-10 hidden w-36 text-brand-300 lg:block" />
      </div>
      <div class="space-y-6 text-lg leading-relaxed text-muted">
        <p class="font-display text-2xl font-medium leading-snug text-ink sm:text-[1.7rem]">
          Das „Uff“ beim Aufstehen. Der Nacken, der beim Ausparken nicht mehr mitspielt. Die Schultern, die sich
          irgendwann heimlich Richtung Ohren verabschiedet haben.
        </p>
        <p>
          Viele Menschen gewöhnen sich an solche Beschwerden. Man reibt ein bisschen, streckt sich ein bisschen und hofft,
          dass es von selbst vergeht. Manchmal tut es das. Oft kommt es wieder, weil die eigentliche Ursache ganz woanders
          sitzt.
        </p>
        <p class="relative inline-block font-display text-2xl font-bold text-brand-600">
          Sie müssen sich nicht damit abfinden.
          <Illu name="squiggle" class="absolute -bottom-3 left-0 h-3 w-full text-brand-300" />
        </p>
      </div>
    </div>
  </section>
</template>
