import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import '@fontsource-variable/bricolage-grotesque/opsz.css'
import '@fontsource-variable/figtree/wght.css'
import '@fontsource-variable/figtree/wght-italic.css'
import '@fontsource/caveat/latin-500.css'
import '@fontsource/caveat/latin-700.css'
import './style.css'
import { trackPageView } from './composables/usePageTracking.js'

// vite-ssg: im Browser wird das vorgerenderte HTML hydriert, beim Build wird jede Route als HTML erzeugt
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ router }) => {
    if (import.meta.env.SSR) return
    // SPA: Seitenaufrufe nach jedem Routenwechsel an GA melden (nur wenn gtag nach Einwilligung geladen ist)
    router.afterEach((to, from) => {
      if (to.path !== from.path) setTimeout(() => trackPageView(to.fullPath), 0)
    })
  },
  // Hydration nur im Build – im Dev-Server gibt es kein vorgerendertes HTML
  { hydration: import.meta.env.PROD },
)
