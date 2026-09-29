<script setup>
import { useRoute } from 'vue-router'
import logo from '../assets/logo.png'
import { practitioners, social, mapsUrl } from '../data/practitioners.js'
import Icon from './Icon.vue'
import Illu from './Illu.vue'
import { useCookieConsent } from '../composables/useCookieConsent'

const { reset: openCookieSettings } = useCookieConsent()

const year = new Date().getFullYear()

// Auf der Startseite navigiert der Router nicht erneut – dann selbst nach oben scrollen
const route = useRoute()
const toTop = () => route.path === '/' && window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <footer class="relative overflow-hidden bg-ink pb-28 pt-20 text-white/80 md:pb-10">
    <Illu name="waves" class="pointer-events-none absolute -right-10 top-10 w-72 text-brand-500/20" />
    <Illu name="rings" class="pointer-events-none absolute -bottom-16 -left-16 w-64 text-brand-500/15" />
    <div class="container-x relative">
      <div class="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr]">
        <div>
          <RouterLink
            to="/"
            class="inline-block rounded-2xl bg-white px-4 py-3 transition hover:ring-4 hover:ring-brand-500/40"
            aria-label="Massage hilft! – zur Startseite"
            @click="toTop"
          >
            <img :src="logo" alt="Massage hilft!" class="h-10 w-auto" width="300" height="80" loading="lazy" />
          </RouterLink>
          <p class="mt-5 max-w-xs leading-relaxed">
            Heilmassage, Lymphdrainage und MANNEA-Methode in Klagenfurt – in zwei eigenständigen Praxen.
          </p>
          <ul class="mt-5 space-y-1.5 text-sm">
            <li class="flex items-center gap-2"><Icon name="check" class="size-4 text-brand-400" /> Termine nach Vereinbarung</li>
            <li class="flex items-center gap-2"><Icon name="check" class="size-4 text-brand-400" /> Gratis Parkplätze vorhanden</li>
            <li class="flex items-center gap-2"><Icon name="check" class="size-4 text-brand-400" /> Nur Barzahlung möglich</li>
          </ul>
        </div>

        <div v-for="p in practitioners" :key="p.id">
          <h2 class="font-display text-lg font-semibold text-white">{{ p.name }}</h2>
          <p class="text-sm text-brand-300">{{ p.title }}</p>
          <address class="mt-4 space-y-2 not-italic text-sm">
            <a :href="mapsUrl(p)" target="_blank" rel="noopener" class="flex gap-2 hover:text-white">
              <Icon name="pin" class="mt-0.5 size-4 shrink-0 text-brand-400" />
              <span>{{ p.street }}<br />{{ p.city }}</span>
            </a>
            <a :href="`tel:${p.phone}`" class="flex gap-2 hover:text-white"><Icon name="phone" class="size-4 text-brand-400" />{{ p.phoneDisplay }}</a>
            <a :href="`mailto:${p.email}`" class="flex gap-2 break-all hover:text-white"><Icon name="mail" class="size-4 shrink-0 text-brand-400" />{{ p.email }}</a>
          </address>
        </div>

        <div>
          <h2 class="font-display text-lg font-semibold text-white">Mehr</h2>
          <ul class="mt-4 space-y-2 text-sm">
            <li><RouterLink to="/heilmassage" class="hover:text-white">Heilmassage</RouterLink></li>
            <li><RouterLink to="/lymphdrainage" class="hover:text-white">Lymphdrainage</RouterLink></li>
            <li><RouterLink to="/mannea-methode" class="hover:text-white">MANNEA-Methode</RouterLink></li>
            <li><RouterLink to="/entspannungsmassage" class="hover:text-white">Entspannungsmassage</RouterLink></li>
            <li><RouterLink to="/hot-stone-massage" class="hover:text-white">Hot Stone Massage</RouterLink></li>
            <li><RouterLink to="/preise" class="hover:text-white">Preise & Gutscheine</RouterLink></li>
          </ul>
          <div class="mt-6 flex gap-2">
            <a :href="social.facebook" target="_blank" rel="noopener" class="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-brand-500" aria-label="Massage hilft! auf Facebook">
              <Icon name="facebook" class="size-5" />
            </a>
            <a :href="social.instagram" target="_blank" rel="noopener" class="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-brand-500" aria-label="Massage hilft! auf Instagram">
              <Icon name="instagram" class="size-5" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Massage hilft! · Klagenfurt am Wörthersee</p>
        <div class="flex gap-5">
          <RouterLink to="/impressum" class="hover:text-white">Impressum</RouterLink>
          <RouterLink to="/datenschutz" class="hover:text-white">Datenschutz</RouterLink>
          <button class="hover:text-white" @click="openCookieSettings">Cookie-Einstellungen</button>
        </div>
      </div>

      <p class="mt-8 text-center text-sm text-white/60 sm:text-base">
        Developed with
        <span class="inline-block text-brand-400 motion-safe:animate-pulse" aria-label="Liebe">♥</span>
        by
        <a
          href="https://korbitsch.at"
          target="_blank"
          rel="noopener"
          class="font-semibold text-white/80 underline-offset-4 transition hover:text-white hover:underline"
        >Ing. Lukas Korbitsch</a>
      </p>
    </div>
  </footer>
</template>
