<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/logo.png'
import Icon from './Icon.vue'
import Illu from './Illu.vue'

const open = ref(false)
const dropdown = ref(false)
const mobileSub = ref(false)
let closeTimer
const openDropdown = () => { clearTimeout(closeTimer); dropdown.value = true }
const closeDropdown = () => { closeTimer = setTimeout(() => (dropdown.value = false), 120) }
const scrolled = ref(false)
const route = useRoute()

const massages = [
  { label: 'Heilmassage', to: '/heilmassage', icon: 'hands', text: 'Gezielt bei Verspannungen & Schmerzen' },
  { label: 'Lymphdrainage', to: '/lymphdrainage', icon: 'drops', text: 'Sanft bei Schwellungen & Stauungen' },
  { label: 'Entspannungsmassage', to: '/entspannungsmassage', icon: 'waves', text: 'Teil- & Ganzkörper, Zirbenöl, Raindrop®' },
  { label: 'Hot Stone Massage', to: '/hot-stone-massage', icon: 'stones', text: 'Warme Steine, tiefe Entspannung' },
  { label: 'MANNEA-Methode', to: '/mannea-methode', icon: 'leaf', text: 'Ganzheitlich & sehr sanft' },
]

const nav = [
  { label: 'Wo zwickt’s?', to: { path: '/', hash: '#koerperkarte' } },
  { label: 'Massagen', children: massages },
  { label: 'Tanja', to: '/tanja-paulic' },
  { label: 'Elmar', to: '/elmar-pasterk' },
  { label: 'Preise', to: '/preise' },
  { label: 'Kontakt', to: { path: '/', hash: '#angebot' } },
]

const onScroll = () => (scrolled.value = window.scrollY > 12)
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
watch(() => route.fullPath, () => { open.value = false; dropdown.value = false })
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="scrolled || open ? 'bg-white shadow-[0_1px_0_rgba(15,42,64,0.06)]' : 'bg-white'"
  >
    <div class="container-x flex h-18 items-center justify-between gap-6 py-3">
      <RouterLink to="/" class="shrink-0" aria-label="Massage hilft! – Startseite">
        <img :src="logo" alt="Massage hilft! – Das original Kärntner Massage-Institut" class="h-10 w-auto mix-blend-multiply sm:h-11" width="300" height="80" />
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
        <template v-for="item in nav" :key="item.label">
          <div
            v-if="item.children"
            class="relative"
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown"
            @keydown.esc="dropdown = false"
            @focusout="(e) => !e.currentTarget.contains(e.relatedTarget) && (dropdown = false)"
          >
            <button
              class="flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition hover:bg-brand-50 hover:text-brand-700"
              :class="dropdown || massages.some((m) => m.to === route.path) ? 'bg-brand-50 text-brand-700' : 'text-ink/80'"
              :aria-expanded="dropdown"
              aria-haspopup="true"
              aria-controls="massagen-menu"
              @click="dropdown = !dropdown"
            >
              {{ item.label }}
              <Icon name="chevron" class="size-4 transition" :class="dropdown && 'rotate-180'" />
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              leave-active-class="transition duration-150 ease-in"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div v-show="dropdown" id="massagen-menu" class="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3">
                <ul class="card overflow-hidden p-2">
                  <li v-for="m in item.children" :key="m.to">
                    <RouterLink
                      :to="m.to"
                      class="group flex items-center gap-4 rounded-2xl p-3 transition hover:bg-brand-50"
                      active-class="bg-brand-50"
                    >
                      <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white">
                        <Illu :name="m.icon" class="size-7" />
                      </span>
                      <span>
                        <span class="block font-semibold text-ink">{{ m.label }}</span>
                        <span class="block text-sm text-muted">{{ m.text }}</span>
                      </span>
                    </RouterLink>
                  </li>
                  <li class="mt-1 border-t border-brand-100 pt-1">
                    <RouterLink to="/preise" class="flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-50">
                      Alle Preise &amp; Gutscheine <Icon name="arrow-right" class="size-4" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
          <RouterLink
            v-else
            :to="item.to"
            class="rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-ink/80 transition hover:bg-brand-50 hover:text-brand-700"
          >
            {{ item.label }}
          </RouterLink>
        </template>
      </nav>

      <div class="flex items-center gap-2">
        <RouterLink :to="{ path: '/', hash: '#kontakt' }" class="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
          Termin vereinbaren
        </RouterLink>
        <button
          class="grid size-11 place-items-center rounded-full text-ink ring-1 ring-brand-100 lg:hidden"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          @click="open = !open"
        >
          <span class="sr-only">Menü</span>
          <Icon :name="open ? 'close' : 'menu'" class="size-5" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="open" id="mobile-nav" class="border-t border-brand-100 bg-white lg:hidden" aria-label="Mobile Navigation">
        <div class="container-x flex flex-col py-3">
          <template v-for="item in nav" :key="item.label">
            <div v-if="item.children">
              <button
                class="flex w-full items-center justify-between rounded-xl px-3 py-3 text-lg font-medium text-ink hover:bg-brand-50"
                :aria-expanded="mobileSub"
                @click="mobileSub = !mobileSub"
              >
                {{ item.label }}
                <Icon name="chevron" class="size-5 text-brand-600 transition" :class="mobileSub && 'rotate-180'" />
              </button>
              <ul v-show="mobileSub" class="mb-2 ml-3 border-l-2 border-brand-100 pl-2">
                <li v-for="m in item.children" :key="m.to">
                  <RouterLink :to="m.to" class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-ink hover:bg-brand-50">
                    <Illu :name="m.icon" class="size-6 text-brand-500" />
                    {{ m.label }}
                  </RouterLink>
                </li>
              </ul>
            </div>
            <RouterLink v-else :to="item.to" class="rounded-xl px-3 py-3 text-lg font-medium text-ink hover:bg-brand-50">
              {{ item.label }}
            </RouterLink>
          </template>
          <RouterLink :to="{ path: '/', hash: '#kontakt' }" class="btn-primary mt-3">Termin vereinbaren</RouterLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>
