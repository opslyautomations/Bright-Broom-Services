import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import { breadcrumbSchema } from '@/lib/schema'
import { services } from '@/lib/data/services'

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  title: 'Cleaning Services | Bright Broom Service',
  description: 'Professional cleaning services across CA, AZ, NV, CO & VA — standard, deep, move-in/out, commercial, specialty & post-construction. All quote-based.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Cleaning Services | Bright Broom Service',
    description: 'All 6 professional cleaning services from Bright Broom — across 5 states.',
    url: `${SITE_URL}/services`,
    images: [{ url: `${SITE_URL}/og/services.png`, width: 1200, height: 630, alt: 'Bright Broom Service Cleaning Services' }],
  },
  twitter: { title: 'Cleaning Services | Bright Broom Service', description: '6 professional cleaning services across 5 states.', images: [`${SITE_URL}/og/services.png`] },
}

export default function ServicesIndexPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Cleaning Services — Bright Broom Service', url: `${SITE_URL}/services` }
  return (
    <>
      <Script id="schema-services-index" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-services-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }])) }} />
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />

      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand mb-4">Our Cleaning Services</h1>
          <p className="text-xl text-slate-brand">Six professional cleaning services, all quote-based with no hidden fees. Serving California, Arizona, Nevada, Colorado, and Virginia.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map(service => (
              <div key={service.slug} className="card hover:shadow-lg transition-shadow">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`/images/services/${service.slug}.webp`}
                    alt={service.heroAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-xl font-bold text-navy-brand mb-2">{service.name}</h2>
                <p className="text-slate-brand text-sm leading-relaxed mb-3">{service.tagline}</p>
                <ul className="space-y-1 mb-4">
                  {service.inclusions.slice(0, 3).map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-brand">
                      <svg className="w-3.5 h-3.5 text-teal-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {inc}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="btn-primary text-sm">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
