<script setup>
import { ref, onMounted } from 'vue'
import Icon from '../Icon.vue'

const video = ref(null)
const muted = ref(true)
const playing = ref(false)

// Browsers only allow autoplay when muted; set the property explicitly before play()
function start() {
  if (!video.value || !video.value.paused) return
  video.value.muted = muted.value
  video.value.play().catch(() => {})
}

onMounted(() => {
  start()
  video.value?.addEventListener('canplay', start, { once: true })
})

function toggleSound() {
  muted.value = !muted.value
  video.value.muted = muted.value
  if (!muted.value && video.value.paused) video.value.play()
}
function togglePlay() {
  video.value.paused ? video.value.play() : video.value.pause()
}
</script>

<template>
  <section class="px-3 pt-1 sm:px-4" aria-label="Einblick in Massage hilft!">
    <div class="relative isolate h-[68svh] min-h-[420px] overflow-hidden rounded-[2rem] bg-ink sm:h-[min(82svh,56vw)] sm:max-h-[860px]">
      <video
        ref="video"
        class="absolute inset-0 size-full object-cover"
        src="/video/massage-hilft.mp4"
        poster="/video/intro-poster.jpg"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        @play="playing = true"
        @pause="playing = false"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-transparent" />

      <div class="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
        <p class="font-hand text-2xl text-brand-200 sm:text-3xl">Willkommen bei Massage hilft!</p>
        <p class="mt-1 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
          Das original Kärntner Massage-Institut in Klagenfurt.
        </p>
        <a href="#start" class="btn mt-6 bg-white/95 !py-3 text-ink hover:bg-white">
          Wo zwickt’s? <Icon name="arrow-down" class="size-4" />
        </a>
      </div>

      <div class="absolute right-4 top-4 flex gap-2 sm:right-6 sm:top-6">
        <button
          class="grid size-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30"
          :aria-label="playing ? 'Video pausieren' : 'Video abspielen'"
          @click="togglePlay"
        >
          <Icon :name="playing ? 'pause' : 'play'" class="size-5" />
        </button>
        <button
          class="grid size-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30"
          :aria-label="muted ? 'Ton einschalten' : 'Ton ausschalten'"
          @click="toggleSound"
        >
          <Icon :name="muted ? 'mute' : 'volume'" class="size-5" />
        </button>
      </div>
    </div>
  </section>
</template>
