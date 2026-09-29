import Home from '../views/Home.vue'

export const treatmentSlugs = ['heilmassage', 'lymphdrainage', 'entspannungsmassage', 'hot-stone-massage', 'mannea-methode']

// Routen ohne Parameter werden von vite-ssg beim Build vorgerendert (siehe ssgOptions in vite.config.js).
// meta.noindex → Seite bekommt „noindex“ und landet nicht in der sitemap.xml
export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/tanja-paulic', name: 'tanja', component: () => import('../views/Practitioner.vue'), props: { id: 'tanja' } },
  { path: '/elmar-pasterk', name: 'elmar', component: () => import('../views/Practitioner.vue'), props: { id: 'elmar' } },
  ...treatmentSlugs.map((slug) => ({
    path: `/${slug}`,
    name: slug,
    component: () => import('../views/Treatment.vue'),
    props: { slug },
  })),
  { path: '/preise', name: 'preise', component: () => import('../views/Prices.vue') },
  { path: '/impressum', name: 'impressum', component: () => import('../views/Legal.vue'), props: { kind: 'impressum' }, meta: { noindex: true } },
  { path: '/datenschutz', name: 'datenschutz', component: () => import('../views/Legal.vue'), props: { kind: 'datenschutz' }, meta: { noindex: true } },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('../views/NotFound.vue') },
]

export function scrollBehavior(to, from, saved) {
  if (saved) return saved
  if (to.hash) return { el: to.hash, behavior: 'smooth', top: 88 }
  return { top: 0 }
}
