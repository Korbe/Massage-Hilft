<script setup>
import { useSeo } from '../composables/useSeo.js'
import Illu from '../components/Illu.vue'

useSeo({
  title: 'Seite nicht gefunden | Massage hilft!',
  description: 'Diese Seite gibt es leider nicht (mehr). Zur Startseite von Massage hilft! – Heilmassage in Klagenfurt.',
  path: '/404',
  noindex: true,
})
</script>

<template>
  <section class="relative overflow-hidden py-32 text-center">
    <Illu name="rings" class="mx-auto w-40 text-brand-300" />
    <h1 class="mt-8 text-5xl font-extrabold">Hier zwickt’s leider.</h1>
    <p class="lead mx-auto mt-4 max-w-md">Diese Seite gibt es nicht (mehr). Aber wir helfen Ihnen gerne weiter.</p>
    <RouterLink to="/" class="btn-primary mt-8">Zur Startseite</RouterLink>
  </section>
</template>
