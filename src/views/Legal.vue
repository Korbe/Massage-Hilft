<script setup>
import { computed } from 'vue'
import { useSeo } from '../composables/useSeo.js'
import { imprints } from '../data/practitioners.js'
import { privacySections, privacyUpdated } from '../data/privacy.js'
import Icon from '../components/Icon.vue'

const props = defineProps({ kind: { type: String, required: true } })
const isImprint = computed(() => props.kind === 'impressum')

useSeo({
  title: `${isImprint.value ? 'Impressum' : 'Datenschutz'} | Massage hilft!`,
  description: isImprint.value ? 'Impressum von Massage hilft! Klagenfurt.' : 'Datenschutzerklärung von Massage hilft! Klagenfurt.',
  path: `/${props.kind}`,
  noindex: true,
})
</script>

<!-- TODO: Impressum Tanja (src/data/practitioners.js) ergänzen, Datenschutz (src/data/privacy.js) prüfen lassen -->
<template>
  <section class="py-20 sm:py-28">
    <div class="container-x max-w-3xl">
      <h1 class="text-4xl font-extrabold sm:text-5xl">{{ isImprint ? 'Impressum' : 'Datenschutzerklärung' }}</h1>
      <div v-if="isImprint" class="mt-10 space-y-8">
        <article v-for="im in imprints" :key="im.id" class="card p-6 sm:p-8">
          <p class="eyebrow">Massage hilft!</p>
          <h2 class="mt-2 text-2xl font-bold">{{ im.company }}</h2>
          <dl class="mt-6 divide-y divide-brand-100">
            <div v-for="r in im.rows" :key="r.label" class="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt class="text-sm font-semibold text-ink">{{ r.label }}</dt>
              <dd class="text-muted">
                <span v-if="r.value === null" class="italic text-muted/70">wird ergänzt</span>
                <template v-else-if="Array.isArray(r.value)">
                  <span v-for="v in r.value" :key="v" class="block">{{ v }}</span>
                </template>
                <a v-else-if="r.href" :href="r.href" class="hover:text-brand-700">{{ r.value }}</a>
                <template v-else>{{ r.value }}</template>
              </dd>
            </div>
          </dl>
        </article>
      </div>
      <template v-else>
        <p class="lead mt-4">Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO – Stand: {{ privacyUpdated }}</p>

        <nav class="mt-10 rounded-3xl bg-brand-50 p-6" aria-label="Inhalt">
          <p class="eyebrow">Inhalt</p>
          <ol class="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            <li v-for="(s, i) in privacySections" :key="s.h">
              <a :href="`#ds-${i}`" class="text-ink hover:text-brand-700">{{ i + 1 }}. {{ s.h }}</a>
            </li>
          </ol>
        </nav>

        <div class="legal mt-12 space-y-12">
          <section v-for="(s, i) in privacySections" :id="`ds-${i}`" :key="s.h">
            <h2 class="text-2xl font-bold">{{ i + 1 }}. {{ s.h }}</h2>
            <p v-for="(t, j) in s.p" :key="j" class="mt-4 leading-relaxed text-muted" v-html="t" />
            <ul v-if="s.list" class="mt-4 space-y-1.5">
              <li v-for="l in s.list" :key="l" class="flex items-center gap-2.5 text-muted">
                <Icon name="check" class="size-4 shrink-0 text-brand-500" /> {{ l }}
              </li>
            </ul>
            <p v-for="(t, j) in s.after" :key="'a' + j" class="mt-4 leading-relaxed text-muted" v-html="t" />
            <div v-if="s.contacts" class="mt-5 grid gap-4 sm:grid-cols-2">
              <div v-for="c in s.contacts" :key="c.name" class="rounded-2xl bg-white p-5 ring-1 ring-brand-100">
                <p class="font-semibold text-ink">{{ c.name }}</p>
                <p v-for="l in c.lines" :key="l" class="mt-1 text-sm text-muted">{{ l }}</p>
                <p v-if="c.phone" class="mt-2 text-sm text-muted">Telefon: {{ c.phone }}</p>
                <p v-if="c.email" class="text-sm text-muted">E-Mail: <a :href="`mailto:${c.email}`">{{ c.email }}</a></p>
              </div>
            </div>
          </section>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.legal :deep(a) {
  color: var(--color-brand-600);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.legal :deep(strong) {
  color: var(--color-ink);
  font-weight: 600;
}
</style>
