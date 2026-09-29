<script setup>
import { practitioners, whatsappUrl } from '../data/practitioners.js'
import Icon from './Icon.vue'

const [tanja, elmar] = practitioners
</script>

<!-- Sticky click-to-call bar on phones -->
<template>
  <div class="fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur md:hidden">
    <div class="grid grid-cols-[1fr_auto_1fr] gap-2">
      <a :href="`tel:${tanja.phone}`" class="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-3 py-3 text-sm font-semibold text-white">
        <Icon name="phone" class="size-4" /> Tanja
      </a>
      <a
        :href="whatsappUrl(tanja)"
        target="_blank"
        rel="noopener"
        class="grid size-11 place-items-center rounded-full bg-[#25D366] text-white"
        aria-label="WhatsApp an Tanja"
      >
        <Icon name="whatsapp" class="size-5" />
      </a>
      <a :href="`tel:${elmar.phone}`" class="flex items-center justify-center gap-2 rounded-full bg-ink px-3 py-3 text-sm font-semibold text-white">
        <Icon name="phone" class="size-4" /> Elmar
      </a>
    </div>
  </div>
</template>
