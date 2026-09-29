import { ref } from 'vue'

const STORAGE_KEY = 'cookie-consent'
const GA_ID = 'G-XXXXXXXXXX' // Replace with your Google Analytics ID

const isClient = typeof window !== 'undefined'

const consent = ref(isClient ? localStorage.getItem(STORAGE_KEY) : null)

function initAnalytics() {
    if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
        // No real property configured yet. Loading gtag.js against this placeholder ID
        // is what caused the "Cannot read properties of undefined (reading 'startTime')"
        // crash while navigating: Google's config fetch for a non-existent property fails,
        // leaving its internal Core Web Vitals reporting in a broken state that then throws
        // on every client-side route change. Skip loading entirely until a real ID is set.
        console.info('[analytics] Skipped: replace GA_ID in useCookieConsent.js with a real GA4 measurement ID first.')
        return
    }

    if (window.gtag) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []

    function gtag() {
        window.dataLayer.push(arguments)
    }

    window.gtag = gtag

    gtag('js', new Date())

    gtag('config', GA_ID, {
        anonymize_ip: true,
        send_page_view: false
    })
}

if (isClient && consent.value === 'accepted') {
    initAnalytics()
}

function accept() {
    consent.value = 'accepted'
    localStorage.setItem(STORAGE_KEY, 'accepted')
    initAnalytics()
}

function reject() {
    consent.value = 'rejected'
    localStorage.setItem(STORAGE_KEY, 'rejected')
}

function reset() {
    consent.value = null
    localStorage.removeItem(STORAGE_KEY)
}

export function useCookieConsent() {
    return { consent, accept, reject, reset }
}
