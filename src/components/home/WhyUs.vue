<script setup>
import Illu from '../Illu.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-24 sm:py-32">
    <Illu name="waves" class="pointer-events-none absolute -left-6 top-20 w-48 text-brand-200" />
    <div class="container-x">
      <div class="mx-auto max-w-3xl text-center">
        <p class="eyebrow justify-center">Warum wir</p>
        <h2 class="h2 mt-4">Zwei Heilmasseure. Zwei Praxen. Ein Anspruch.</h2>
        <p class="lead mt-6">
          Wir arbeiten jeweils in unserer eigenen Praxis in Klagenfurt, teilen aber dieselbe Überzeugung:
          <strong class="font-semibold text-ink">Eine gute Behandlung beginnt mit Zuhören.</strong>
          Erst wenn wir wissen, was Sie im Alltag begleitet, wissen wir auch, wo wir hingreifen müssen.
        </p>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-2">
        <article class="card relative overflow-hidden p-8 sm:p-10">
          <Illu name="hands" class="w-14 text-brand-500" />
          <h3 class="mt-6 text-2xl font-bold">Was heißt eigentlich „Heilmasseur“?</h3>
          <p class="mt-4 leading-relaxed text-muted">
            Heilmasseure haben eine gesetzlich geregelte Ausbildung im Gesundheitsbereich. Wir kennen Muskeln, Faszien und
            die Zusammenhänge im Körper sehr genau und dürfen auch therapeutisch arbeiten. Für Sie bedeutet das: Sie sind in
            fachkundigen Händen. Und mit ärztlicher Verordnung ist eine Kostenrückerstattung durch Ihre Krankenkasse möglich.
          </p>
        </article>
        <article class="relative overflow-hidden rounded-3xl bg-brand-500 p-8 text-white sm:p-10">
          <Illu name="rings" class="absolute -bottom-12 -right-12 w-56 text-white/20" />
          <div class="flex gap-2">
            <span class="grid size-12 place-items-center rounded-full bg-white font-display text-lg font-bold text-brand-600">T</span>
            <span class="grid size-12 place-items-center rounded-full bg-ink font-display text-lg font-bold text-white">E</span>
          </div>
          <h3 class="mt-6 text-2xl font-bold">Lieber Tanja oder lieber Elmar?</h3>
          <p class="relative mt-4 leading-relaxed text-white/90">
            Das entscheiden ganz Sie. Manche fühlen sich bei einer Frau wohler, andere bei einem Mann, und manche wählen
            einfach die Praxis, die näher liegt.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
