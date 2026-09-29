import { watch } from 'vue'
import { useCookieConsent } from './useCookieConsent'

// Sendet page_view-Events an GA4. window.gtag existiert nur, wenn useCookieConsent
// Analytics nach Einwilligung geladen hat – ohne Zustimmung passiert hier nichts.
export function trackPageView(path = location.pathname + location.search) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'page_view', { page_path: path, page_location: location.href, page_title: document.title })
}

// Nach dem Klick auf „Akzeptieren“ auch die aktuell geöffnete Seite zählen
const { consent } = useCookieConsent()
watch(consent, (v) => v === 'accepted' && setTimeout(() => trackPageView(), 0))
