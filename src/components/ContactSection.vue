<script setup>
import { practitioners, mapsUrl } from '../data/practitioners.js'
import ContactActions from './ContactActions.vue'
import Illu from './Illu.vue'
import Icon from './Icon.vue'

defineProps({
  only: { type: String, default: null },
  headline: { type: String, default: 'Ihr Körper trägt Sie jeden Tag. Zeit, ihm etwas zurückzugeben.' },
  text: {
    type: String,
    default: 'Warten Sie nicht, bis aus dem Zwicken ein Dauergast wird. Melden Sie sich einfach bei der Praxis, die zu Ihnen passt.',
  },
})
</script>

<template>
  <section id="kontakt" class="px-3 py-10 sm:px-4 sm:py-16">
    <div class="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 py-20 sm:py-28">
      <Illu name="blob" class="pointer-events-none absolute -right-40 -top-40 -z-10 w-[36rem] text-white/10" />
      <Illu name="waves" class="pointer-events-none absolute bottom-10 left-6 -z-10 w-56 text-white/15" />
      <Illu name="sparkle" class="pointer-events-none absolute left-[12%] top-16 w-6 animate-float text-white/60" />
      <Illu name="sparkle" class="pointer-events-none absolute right-[20%] top-[40%] w-4 animate-float-slow text-white/50" />

      <div class="container-x">
        <div class="mx-auto max-w-3xl text-center text-white">
          <h2 class="font-display text-4xl font-bold leading-tight sm:text-5xl">{{ headline }}</h2>
          <p class="mx-auto mt-6 max-w-xl text-lg text-white/85">{{ text }}</p>
          <div v-if="!only" class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#kontakt-tanja" class="btn bg-white text-brand-700 hover:bg-brand-50">Termin bei Tanja</a>
            <a href="#kontakt-elmar" class="btn bg-ink text-white hover:bg-brand-900">Termin bei Elmar</a>
          </div>
        </div>

        <div class="mx-auto mt-14 grid gap-5" :class="only ? 'max-w-xl' : 'max-w-5xl md:grid-cols-2'">
          <article
            v-for="p in practitioners.filter((x) => !only || x.id === only)"
            :id="`kontakt-${p.id}`"
            :key="p.id"
            class="rounded-3xl bg-white p-7 sm:p-8"
          >
            <p class="eyebrow">Massage hilft! · {{ p.title }}</p>
            <h3 class="mt-2 text-2xl font-bold">{{ p.name }}</h3>
            <address class="mt-4 space-y-2 not-italic text-muted">
              <a :href="mapsUrl(p)" target="_blank" rel="noopener" class="flex items-start gap-2 hover:text-brand-700">
                <Icon name="pin" class="mt-0.5 size-5 shrink-0 text-brand-500" />
                <span>{{ p.street }}, {{ p.city }}</span>
              </a>
              <a :href="`tel:${p.phone}`" class="flex items-center gap-2 hover:text-brand-700">
                <Icon name="phone" class="size-5 text-brand-500" /> {{ p.phoneDisplay }}
              </a>
              <a :href="`mailto:${p.email}`" class="flex items-center gap-2 break-all hover:text-brand-700">
                <Icon name="mail" class="size-5 shrink-0 text-brand-500" /> {{ p.email }}
              </a>
            </address>
            <div class="mt-6"><ContactActions :p="p" compact /></div>
            <a :href="mapsUrl(p)" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
              Anfahrt planen <Icon name="arrow-right" class="size-3.5" />
            </a>
          </article>
        </div>

        <p class="mt-10 text-center text-sm text-white/80">
          Termine nach Vereinbarung · Gratis Parkplätze vorhanden · Nur Barzahlung möglich
        </p>
        <p v-if="!only || only === 'tanja'" class="mx-auto mt-2 max-w-xl text-center text-xs text-white/65">
          Bitte senden Sie keine Befunde oder Gesundheitsdaten per WhatsApp – die besprechen wir lieber persönlich in der Praxis.
        </p>
      </div>
    </div>
  </section>
</template>
