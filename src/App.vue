<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import MobileCallBar from './components/MobileCallBar.vue'
import CookieBanner from './components/CookieBanner.vue'
import { ref, onMounted } from 'vue'

// Cookie-Banner erst im Browser rendern (Auswahl liegt im localStorage – beim Vorrendern unbekannt)
const mounted = ref(false)
onMounted(() => (mounted.value = true))
</script>

<template>
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow">
    Zum Inhalt springen
  </a>
  <SiteHeader />
  <main id="main">
    <RouterView :key="$route.path" />
  </main>
  <SiteFooter />
  <MobileCallBar />
  <CookieBanner v-if="mounted" />
</template>
