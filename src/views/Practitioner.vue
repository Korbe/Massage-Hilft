<script setup>
import { computed } from 'vue'
import { byId, practitioners, mapsUrl } from '../data/practitioners.js'
import { localBusinessSchema, personSchema } from '../data/schema.js'
import { useSeo } from '../composables/useSeo.js'
import PersonPhoto from '../components/PersonPhoto.vue'
import ContactActions from '../components/ContactActions.vue'
import ContactSection from '../components/ContactSection.vue'
import Illu from '../components/Illu.vue'
import Icon from '../components/Icon.vue'

const props = defineProps({ id: { type: String, required: true } })
const p = computed(() => byId(props.id))
const other = computed(() => practitioners.find((x) => x.id !== props.id))

useSeo({
  title: `${p.value.name} – ${p.value.title} in Klagenfurt | Massage hilft!`,
  description: `${p.value.name}, ${p.value.title} in Klagenfurt, ${p.value.street}. Heilmassage und Massage nach Vereinbarung – Termin per Telefon${p.value.whatsapp ? ', WhatsApp' : ''} oder Mail.`,
  path: p.value.slug,
  type: 'profile',
  schema: [localBusinessSchema(p.value), personSchema(p.value)],
  breadcrumbs: [{ name: p.value.name, path: p.value.slug }],
})
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pb-20 pt-14 sm:pt-20">
    <Illu name="blob" class="pointer-events-none absolute -left-40 top-0 w-[32rem] text-brand-100" />
    <div class="container-x relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div class="relative mx-auto w-full max-w-md">
        <PersonPhoto :p="p" size="lg" />
        <Illu name="rings" class="absolute -bottom-8 -right-8 w-32 text-brand-300" />
      </div>
      <div>
        <p class="eyebrow"><span class="h-px w-8 bg-brand-400" />{{ p.title }} in Klagenfurt</p>
        <h1 class="mt-4 text-5xl font-extrabold leading-[1.02] sm:text-6xl">{{ p.name }}<span class="text-3xl font-bold text-muted">{{ p.nameSuffix }}</span></h1>
        <p class="mt-4 font-hand text-3xl text-brand-600">{{ p.tagline }}</p>
        <p class="lead mt-6">{{ p.intro }}</p>
        <a :href="mapsUrl(p)" target="_blank" rel="noopener" class="mt-6 flex items-center gap-2 font-medium text-ink hover:text-brand-700">
          <Icon name="pin" class="size-5 text-brand-500" /> Massage hilft! · {{ p.street }}, {{ p.city }}
        </a>
        <div class="mt-8"><ContactActions :p="p" /></div>
      </div>
    </div>
  </section>

  <section class="py-16 sm:py-24">
    <div class="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div>
        <h2 class="h2">Über {{ p.firstName }}</h2>
        <div class="prose-mh mt-6 text-lg">
          <p v-for="(b, i) in p.bio" :key="i">{{ b }}</p>
        </div>
      </div>
      <aside class="card self-start p-8">
        <h2 class="font-display text-xl font-bold">Behandlungen {{ p.pronoun }}</h2>
        <ul class="mt-5 space-y-2.5">
          <li v-for="o in p.offers" :key="o" class="flex items-center gap-3 text-ink">
            <span class="grid size-7 place-items-center rounded-full bg-brand-100 text-brand-600"><Icon name="check" class="size-4" /></span>
            {{ o }}
          </li>
        </ul>
        <RouterLink to="/preise" class="btn-ghost mt-8 w-full">Alle Preise ansehen</RouterLink>
      </aside>
    </div>
  </section>

  <ContactSection :only="p.id" :headline="`Termin bei ${p.firstName} vereinbaren`" text="Einfach anrufen oder schreiben – gemeinsam finden wir heraus, was Ihnen guttut." />

  <section class="pb-24 pt-6">
    <div class="container-x">
      <RouterLink :to="other.slug" class="card group flex items-center justify-between gap-6 p-6 transition hover:ring-brand-300 sm:p-8">
        <div>
          <p class="text-sm text-muted">Lieber zu {{ other.firstName }}?</p>
          <p class="mt-1 font-display text-2xl font-bold">{{ other.name }} · {{ other.street }}</p>
        </div>
        <span class="grid size-12 shrink-0 place-items-center rounded-full bg-brand-500 text-white transition group-hover:translate-x-1">
          <Icon name="arrow-right" class="size-5" />
        </span>
      </RouterLink>
    </div>
  </section>
</template>
