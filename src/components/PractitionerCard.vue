<script setup>
import PersonPhoto from './PersonPhoto.vue'
import ContactActions from './ContactActions.vue'
import Icon from './Icon.vue'

defineProps({ p: { type: Object, required: true } })
</script>

<template>
  <article :id="`praxis-${p.id}`" class="card flex flex-col overflow-hidden p-3">
    <PersonPhoto :p="p" />
    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <p class="eyebrow">{{ p.title }}</p>
      <h3 class="mt-2 text-3xl font-bold">{{ p.name }}</h3>
      <p class="mt-2 font-hand text-2xl text-brand-600">{{ p.tagline }}</p>
      <p class="mt-3 leading-relaxed text-muted">{{ p.intro }}</p>
      <p class="mt-5 flex items-start gap-2 font-medium text-ink">
        <Icon name="pin" class="mt-0.5 size-5 shrink-0 text-brand-500" />
        {{ p.street }}, {{ p.city }}
      </p>
      <div class="mt-6">
        <ContactActions :p="p" />
      </div>
      <RouterLink :to="p.slug" class="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-brand-600 hover:text-brand-700">
        Mehr über {{ p.firstName }} <Icon name="arrow-right" class="size-4" />
      </RouterLink>
    </div>
  </article>
</template>
