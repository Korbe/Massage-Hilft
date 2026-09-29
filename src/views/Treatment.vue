<script setup>
import { computed } from 'vue'
import { treatments } from '../data/treatments.js'
import { serviceSchema, faqSchema } from '../data/schema.js'
import { useSeo } from '../composables/useSeo.js'
import PageHero from '../components/PageHero.vue'
import PriceTable from '../components/PriceTable.vue'
import FaqList from '../components/FaqList.vue'
import ContactSection from '../components/ContactSection.vue'
import Icon from '../components/Icon.vue'

const props = defineProps({ slug: { type: String, required: true } })
const t = computed(() => treatments[props.slug])

useSeo({
  title: t.value.title,
  description: t.value.description,
  path: t.value.path,
  schema: [serviceSchema(t.value), faqSchema(t.value.faq)],
  breadcrumbs: [{ name: t.value.eyebrow, path: t.value.path }],
})

const others = computed(() =>
  Object.entries(treatments)
    .filter(([k]) => k !== props.slug)
    .map(([, v]) => v),
)
</script>

<template>
  <PageHero :eyebrow="t.eyebrow" :title="t.h1" :lead="t.lead" :icon="t.icon">
    <RouterLink :to="{ path: $route.path, hash: '#kontakt' }" class="btn-primary">Termin vereinbaren <Icon name="arrow-right" class="size-4" /></RouterLink>
  </PageHero>

  <section class="py-16 sm:py-24">
    <div class="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
      <div class="space-y-14">
        <article v-for="s in t.sections" :key="s.h">
          <h2 class="text-2xl font-bold sm:text-3xl">{{ s.h }}</h2>
          <div class="prose-mh mt-4">
            <p v-for="(p, i) in s.p" :key="i">{{ p }}</p>
          </div>
          <ul v-if="s.list" class="mt-2 grid gap-2 sm:grid-cols-2">
            <li v-for="l in s.list" :key="l" class="flex items-center gap-2.5 rounded-xl bg-brand-50 px-4 py-3 text-ink">
              <Icon name="check" class="size-4 shrink-0 text-brand-500" /> {{ l }}
            </li>
          </ul>
        </article>
      </div>

      <aside class="space-y-6 lg:sticky lg:top-28 lg:self-start">
        <PriceTable title="Preise" :items="t.prices" note="Alle Preise inkl. MwSt. Nur Barzahlung möglich." />
        <div class="rounded-3xl bg-ink p-6 text-white sm:p-8">
          <p class="font-display text-xl font-bold">Weitere Behandlungen</p>
          <ul class="mt-4 space-y-1">
            <li v-for="o in others" :key="o.path">
              <RouterLink :to="o.path" class="flex items-center justify-between rounded-xl px-3 py-2.5 text-white/85 transition hover:bg-white/10 hover:text-white">
                {{ o.eyebrow }} <Icon name="arrow-right" class="size-4" />
              </RouterLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>

  <section class="bg-brand-50/60 py-20 sm:py-24">
    <div class="container-x max-w-4xl">
      <p class="eyebrow">Häufige Fragen</p>
      <h2 class="h2 mt-4 mb-10">{{ t.eyebrow }}: Gut zu wissen</h2>
      <FaqList :items="t.faq" />
    </div>
  </section>

  <ContactSection />
</template>
