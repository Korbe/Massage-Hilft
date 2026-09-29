import { useHead } from '@unhead/vue'
import { SITE, SITE_NAME, DEFAULT_IMAGE, breadcrumbSchema } from '../data/schema.js'

/**
 * SEO pro Seite: Title, Description, Canonical, Robots, Open Graph, Twitter Card und JSON-LD.
 * @param {object} o
 * @param {string} o.title        – 50–60 Zeichen, Keyword vorne
 * @param {string} o.description  – ca. 140–160 Zeichen
 * @param {string} o.path         – kanonischer Pfad, z. B. '/heilmassage'
 * @param {Array}  [o.schema]     – JSON-LD-Objekte
 * @param {Array}  [o.breadcrumbs]– [{ name, path }] → BreadcrumbList
 * @param {string} [o.image]      – absolute Bild-URL für Social Sharing
 * @param {string} [o.imageAlt]
 * @param {string} [o.type]       – og:type (website | profile)
 * @param {boolean}[o.noindex]    – Seite nicht indexieren
 */
export function useSeo({ title, description, path = '/', schema = [], breadcrumbs, image = DEFAULT_IMAGE, imageAlt, type = 'website', noindex = false }) {
  const url = SITE + path
  const ld = breadcrumbs ? [...schema, breadcrumbSchema(breadcrumbs)] : schema

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'de_AT' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:alt', content: imageAlt || title },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'geo.region', content: 'AT-2' },
      { name: 'geo.placename', content: 'Klagenfurt am Wörthersee' },
    ],
    link: path === '/404' ? [] : [{ rel: 'canonical', href: url }],
    script: ld.map((s) => ({ type: 'application/ld+json', innerHTML: JSON.stringify(s) })),
  })
}
