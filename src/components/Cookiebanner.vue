<template>
    <Transition name="fade">
        <div v-if="visible" class="fixed bottom-6 left-1/2 z-[9999] w-[95%] max-w-xl -translate-x-1/2">
            <div class="border border-neutral-200 bg-white/95 backdrop-blur rounded-2xl shadow-2xl overflow-hidden">

                <!-- Content -->
                <div class="p-6">

                    <!-- Top -->
                    <div class="flex items-start gap-4 mb-5">

                        <!-- Cookie Placeholder -->
                        <div
                            class="flex items-center justify-center h-14 w-14 rounded-xl bg-white border border-neutral-200 shrink-0 text-2xl">
                            🍪
                        </div>

                        <div>
                            <h2 class="text-neutral-900 text-lg font-semibold mb-2">
                                Cookies & Datenschutz
                            </h2>

                            <p class="text-neutral-600 text-sm leading-relaxed">
                                Diese Website verwendet Cookies um die Benutzererfahrung zu verbessern.
                                Du kannst selbst entscheiden, ob du zustimmen möchtest.
                            </p>
                        </div>

                    </div>

                    <!-- Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3">

                        <!-- Reject -->
                        <button @click="reject"
                            class="flex-1 border border-neutral-300 bg-white text-neutral-700 py-3 rounded-xl hover:bg-neutral-100 transition">
                            Ablehnen
                        </button>

                        <!-- Accept -->
                        <button @click="accept"
                            class="flex-1 transition px-4 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-brand hover:bg-brand/80 sm:px-8">
                            Akzeptieren
                        </button>

                    </div>

                    <!-- Footer -->
                    <div class="mt-4 text-xs text-neutral-500 text-center">
                        Mehr Infos findest du in der
                        <a href="/datenschutz" class="text-brand underline">
                            Datenschutzerklärung
                        </a>.
                    </div>

                </div>

            </div>
        </div>
    </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { useCookieConsent } from '@/composables/useCookieConsent'

const { consent, accept, reject } = useCookieConsent()

const visible = computed(() => !consent.value)
</script>