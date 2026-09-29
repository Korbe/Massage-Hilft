<script setup>
import { whatsappUrl, mapsUrl } from '../data/practitioners.js'
import Icon from './Icon.vue'

defineProps({ p: { type: Object, required: true }, compact: Boolean })
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <a :href="`tel:${p.phone}`" class="btn-primary !px-4 !py-2.5 text-sm">
      <Icon name="phone" class="size-4" />
      <span>{{ compact ? 'Anrufen' : p.phoneDisplay }}</span>
    </a>
    <a
      v-if="p.whatsapp"
      :href="whatsappUrl(p)"
      target="_blank"
      rel="noopener"
      class="btn !px-4 !py-2.5 text-sm bg-[#25D366] text-white hover:bg-[#1ebe5b]"
    >
      <Icon name="whatsapp" class="size-4" /> WhatsApp
    </a>
    <a :href="`mailto:${p.email}`" class="btn-ghost !px-4 !py-2.5 text-sm">
      <Icon name="mail" class="size-4" /> Mail
    </a>
    <a v-if="!compact" :href="mapsUrl(p)" target="_blank" rel="noopener" class="btn-ghost !px-4 !py-2.5 text-sm">
      <Icon name="pin" class="size-4" /> Anfahrt
    </a>
  </div>
</template>
