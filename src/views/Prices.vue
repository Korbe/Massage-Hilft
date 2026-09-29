<script setup>
import { priceGroups } from '../data/treatments.js'
import { useSeo } from '../composables/useSeo.js'
import PageHero from '../components/PageHero.vue'
import PriceTable from '../components/PriceTable.vue'
import ContactSection from '../components/ContactSection.vue'
import Illu from '../components/Illu.vue'

useSeo({
  title: 'Preise Heilmassage & Massage Klagenfurt | Massage hilft!',
  description: 'Preise für Heilmassage, Lymphdrainage, Entspannungsmassage, Hot Stone Massage und MANNEA-Methode bei Massage hilft! in Klagenfurt. Gutscheine ab € 10,–.',
  path: '/preise',
  breadcrumbs: [{ name: 'Preise & Gutscheine', path: '/preise' }],
})
</script>

<template>
  <PageHero eyebrow="Preise" title="Preise & Gutscheine" lead="Alle Preise inkl. MwSt. Termine nach Vereinbarung, nur Barzahlung möglich." icon="stones" />

  <section class="pb-10">
    <div class="container-x grid gap-6 md:grid-cols-2">
      <PriceTable v-for="g in priceGroups" :key="g.title" :title="g.title" :items="g.items" :note="g.note" />

      <div class="relative overflow-hidden rounded-3xl bg-brand-500 p-8 text-white md:col-span-2 sm:p-10">
        <Illu name="blob" class="absolute -right-20 -top-24 w-80 text-white/10" />
        <Illu name="hands" class="absolute bottom-6 right-8 hidden w-24 text-white/40 sm:block" />
        <p class="font-hand text-3xl text-brand-100">Geschenkidee</p>
        <h2 class="mt-1 font-display text-3xl font-bold">Gutscheine – erhältlich ab einem Wert von € 10,–</h2>
        <p class="mt-3 max-w-xl text-white/85">Schenken Sie eine Auszeit für Körper und Geist. Gutscheine erhalten Sie direkt in beiden Praxen.</p>
      </div>
    </div>
  </section>

  <ContactSection />
</template>
