// Strukturierte Daten (schema.org, JSON-LD) für alle Seiten.
import { practitioners, social } from './practitioners.js'

export const SITE = 'https://www.massage-hilft.at'
export const SITE_NAME = 'Massage hilft!'
export const DEFAULT_IMAGE = `${SITE}/video/intro-poster.jpg`

const ctx = { '@context': 'https://schema.org' }
export const businessId = (p) => `${SITE}${p.slug}#praxis`
const personId = (p) => `${SITE}${p.slug}#person`

const address = (p) => ({
  '@type': 'PostalAddress',
  streetAddress: p.street,
  postalCode: '9020',
  addressLocality: 'Klagenfurt am Wörthersee',
  addressRegion: 'Kärnten',
  addressCountry: 'AT',
})

export const websiteSchema = () => ({
  ...ctx,
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  name: SITE_NAME,
  alternateName: 'Massage hilft! Klagenfurt',
  url: `${SITE}/`,
  inLanguage: 'de-AT',
})

export const localBusinessSchema = (p) => ({
  ...ctx,
  '@type': ['HealthAndBeautyBusiness', 'LocalBusiness'],
  '@id': businessId(p),
  name: `Massage hilft! – ${p.name}`,
  description: `${p.title} in Klagenfurt: Heilmassage und Massage nach Vereinbarung.`,
  url: `${SITE}${p.slug}`,
  telephone: p.phone,
  email: p.email,
  image: p.photo ? `${SITE}${p.photo}` : DEFAULT_IMAGE,
  logo: `${SITE}/favicon.png`,
  address: address(p),
  areaServed: { '@type': 'City', name: 'Klagenfurt am Wörthersee' },
  employee: { '@id': personId(p) },
  paymentAccepted: 'Cash',
  currenciesAccepted: 'EUR',
  priceRange: '€€',
  sameAs: [social.facebook, social.instagram],
})

export const personSchema = (p) => ({
  ...ctx,
  '@type': 'Person',
  '@id': personId(p),
  name: p.name,
  honorificSuffix: p.nameSuffix?.replace(/^,\s*/, '') || undefined,
  jobTitle: p.title,
  url: `${SITE}${p.slug}`,
  image: p.photo ? `${SITE}${p.photo}` : undefined,
  worksFor: { '@id': businessId(p) },
  workLocation: { '@type': 'Place', address: address(p) },
  knowsAbout: p.offers,
})

const toPrice = (s) => {
  const m = /([\d.]+),(\d{2})/.exec(s)
  return m ? `${m[1].replace('.', '')}.${m[2]}` : null
}

export const serviceSchema = (t) => ({
  ...ctx,
  '@type': 'Service',
  '@id': `${SITE}${t.path}#service`,
  name: t.eyebrow,
  serviceType: t.eyebrow,
  description: t.description,
  url: `${SITE}${t.path}`,
  areaServed: { '@type': 'City', name: 'Klagenfurt am Wörthersee' },
  provider: practitioners.map((p) => ({ '@id': businessId(p) })),
  offers: t.prices
    .map((pr) => ({ pr, price: toPrice(pr.price) }))
    .filter((x) => x.price)
    .map(({ pr, price }) => ({
      '@type': 'Offer',
      name: [pr.name, pr.dur].filter(Boolean).join(' · '),
      price,
      priceCurrency: 'EUR',
    })),
})

export const faqSchema = (items) => ({
  ...ctx,
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

// crumbs: [{ name, path }] – „Startseite“ wird automatisch vorangestellt
export const breadcrumbSchema = (crumbs) => ({
  ...ctx,
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Startseite', path: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE}${c.path}`,
  })),
})
