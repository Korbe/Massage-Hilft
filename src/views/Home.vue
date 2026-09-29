<script setup>
import { useSeo } from '../composables/useSeo.js'
import { homeFaq } from '../data/home.js'
import { practitioners } from '../data/practitioners.js'
import { websiteSchema, localBusinessSchema, personSchema, faqSchema } from '../data/schema.js'
import IntroVideo from '../components/home/IntroVideo.vue'
import HeroSection from '../components/home/HeroSection.vue'
import PainPoint from '../components/home/PainPoint.vue'
import BodyMap from '../components/home/BodyMap.vue'
import WhyUs from '../components/home/WhyUs.vue'
import OfferSection from '../components/home/OfferSection.vue'
import ReviewsSection from '../components/home/ReviewsSection.vue'
import FaqList from '../components/FaqList.vue'
import ContactSection from '../components/ContactSection.vue'
import Illu from '../components/Illu.vue'

useSeo({
  title: 'Heilmassage Klagenfurt | Massage hilft! – Tanja Paulic & Elmar Pasterk',
  description:
    'Heilmassage, Lymphdrainage und MANNEA-Methode in Klagenfurt: Tanja Paulic und Elmar Pasterk sind ausgebildete Heilmasseure mit eigenen Praxen. Gezielte Behandlung bei Nacken-, Rücken- und Gelenkbeschwerden. Kostenrückerstattung mit ärztlicher Verordnung möglich.',
  path: '/',
  imageAlt: 'Massage hilft! – Heilmassage in Klagenfurt',
  schema: [websiteSchema(), faqSchema(homeFaq), ...practitioners.map(localBusinessSchema), ...practitioners.map(personSchema)],
})
</script>

<template>
  <IntroVideo />
  <HeroSection />
  <PainPoint />
  <BodyMap />
  <WhyUs />
  <OfferSection />
  <ReviewsSection />

  <section id="faq" class="relative py-24 sm:py-32">
    <Illu name="leaf" class="pointer-events-none absolute right-8 top-24 hidden w-24 rotate-12 text-brand-200 lg:block" />
    <div class="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <p class="eyebrow">Häufige Fragen</p>
        <h2 class="h2 mt-4">Gut zu wissen, bevor Sie kommen.</h2>
        <p class="lead mt-5">Ihre Frage ist nicht dabei? Rufen Sie einfach an – wir nehmen uns gerne Zeit.</p>
      </div>
      <FaqList :items="homeFaq" />
    </div>
  </section>

  <ContactSection />
</template>
