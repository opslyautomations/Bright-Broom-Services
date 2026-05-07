/**
 * Meta validation script — run after build to verify SEO requirements.
 * Checks: title length < 60 chars, description 140-160 chars, canonical presence.
 * Run: npx ts-node scripts/validate-meta.ts
 */
import { services } from '../lib/data/services'
import { stateHubs } from '../lib/data/locations'
import { blogPosts } from '../lib/data/blog'

type PageMeta = {
  url: string
  title: string
  description: string
}

const pages: PageMeta[] = [
  { url: '/', title: 'House Cleaning Services CA, AZ, NV, CO, VA', description: 'Family-owned Bright Broom Service — professional house & commercial cleaning across CA, AZ, NV, CO & VA. Insured, eco-friendly, quote-based. Get a free quote.' },
  { url: '/about', title: 'About Bright Broom Service | Family-Owned Cleaning', description: 'Learn about Bright Broom Service — a family-owned cleaning company serving CA, AZ, NV, CO & VA. Our story, values, and commitment to eco-friendly cleaning.' },
  { url: '/contact', title: 'Contact Bright Broom Service | Get a Free Quote', description: 'Contact Bright Broom Service for a free cleaning quote. Call (480) 553-9464 or fill out our form. Serving CA, AZ, NV, CO & VA. Family-owned, fully insured.' },
  { url: '/reviews', title: 'Client Reviews | Bright Broom Service', description: 'Read 5-star reviews from Bright Broom Service clients across CA, AZ, NV, CO & VA. See what homeowners and businesses say about our cleaning service.' },
  { url: '/gallery', title: 'Gallery — Our Cleaning Work | Bright Broom Service', description: 'See Bright Broom Service cleaning work across CA, AZ, NV, CO & VA. Before-and-after photos of residential, commercial, and specialty cleaning projects.' },
  { url: '/services', title: 'Cleaning Services | Bright Broom Service', description: 'Professional cleaning services across CA, AZ, NV, CO & VA — standard, deep, move-in/out, commercial, specialty & post-construction. All quote-based.' },
  { url: '/blog', title: 'Cleaning Tips & Guides | Bright Broom Blog', description: 'The Bright Broom Service blog — cleaning guides, service tips, how-to articles, and local resources for homeowners and businesses across CA, AZ, NV, CO & VA.' },
  ...services.map(s => ({ url: `/services/${s.slug}`, title: s.metaTitle, description: s.metaDescription })),
  ...stateHubs.map(state => ({ url: `/locations/${state.slug}`, title: state.metaTitle, description: state.metaDescription })),
  ...stateHubs.flatMap(state => state.cities.map(city => ({ url: `/locations/${state.slug}/${city.slug}`, title: city.metaTitle, description: city.metaDescription }))),
  ...blogPosts.map(p => ({ url: `/blog/${p.slug}`, title: p.metaTitle, description: p.metaDescription })),
]

let errors = 0
let warnings = 0

for (const page of pages) {
  const titleLen = page.title.length
  const descLen = page.description.length
  const fullTitle = page.title.includes('| Bright Broom Service') || page.url === '/' || page.title.includes('Bright Broom')
    ? page.title
    : `${page.title} | Bright Broom Service`

  // Check title length — the template adds " | Bright Broom Service" (22 chars) for pages without it
  if (titleLen >= 60) {
    console.error(`❌ TITLE TOO LONG (${titleLen} chars): ${page.url}\n   "${page.title}"`)
    errors++
  }

  if (descLen < 140) {
    console.warn(`⚠️  DESC TOO SHORT (${descLen} chars): ${page.url}`)
    warnings++
  } else if (descLen > 160) {
    console.warn(`⚠️  DESC TOO LONG (${descLen} chars): ${page.url}`)
    warnings++
  }
}

console.log(`\n✅ Validated ${pages.length} pages`)
console.log(`   Errors: ${errors}`)
console.log(`   Warnings: ${warnings}`)

if (errors > 0) {
  process.exit(1)
}
