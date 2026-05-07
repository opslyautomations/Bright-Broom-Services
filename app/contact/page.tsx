import type { Metadata } from 'next'
import Script from 'next/script'
import GHLForm from '@/components/GHLForm'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema'

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  title: 'Contact Bright Broom Service | Get a Free Quote',
  description:
    'Contact Bright Broom Service for a free cleaning quote. Call (480) 553-9464 or fill out our form. Serving CA, AZ, NV, CO & VA. Family-owned, fully insured.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact Bright Broom Service | Get a Free Quote',
    description: 'Contact us for a free cleaning quote. Serving CA, AZ, NV, CO & VA.',
    url: `${SITE_URL}/contact`,
    images: [{ url: `${SITE_URL}/og/contact.png`, width: 1200, height: 630, alt: 'Contact Bright Broom Service' }],
  },
  twitter: { title: 'Contact Bright Broom Service | Get a Free Quote', description: 'Contact us for a free cleaning quote.', images: [`${SITE_URL}/og/contact.png`] },
}

export default function ContactPage() {
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact Bright Broom Service', url: `${SITE_URL}/contact` },
    localBusinessSchema({ lat: 34.953, lng: -120.4357 }),
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]),
  ]
  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-contact-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />

      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand mb-4">Contact Bright Broom Service</h1>
          <p className="text-xl text-slate-brand">Get a free quote, ask a question, or check availability in your city.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: '📞', title: 'Phone', lines: ['(480) 553-9464', 'Call or text'], href: 'tel:+14805539464' },
              { icon: '✉️', title: 'Email', lines: ['info@brightbroomservice.com', 'Response within 24 hrs'], href: 'mailto:info@brightbroomservice.com' },
              { icon: '🕐', title: 'Hours', lines: ['By appointment', 'Flexible 7 days a week'], href: null },
              { icon: '📍', title: 'Service Area', lines: ['CA, AZ, NV, CO, VA', '31 cities served'], href: '/locations/california' },
            ].map(card => (
              <div key={card.title} className="card text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h2 className="font-bold text-navy-brand mb-1">{card.title}</h2>
                {card.href ? (
                  <a href={card.href} className="text-sm text-teal-brand hover:underline">{card.lines[0]}</a>
                ) : (
                  <p className="text-sm text-teal-brand">{card.lines[0]}</p>
                )}
                <p className="text-xs text-slate-brand mt-1">{card.lines[1]}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div id="form" className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-brand text-center mb-2">Request a Free Quote</h2>
            <p className="text-slate-brand text-center text-sm mb-6">Tell us about your space and we&apos;ll get back to you with a quote promptly.</p>
            <GHLForm id="inline-contact-form" />
          </div>

          <p className="text-center text-sm text-slate-brand mt-8">
            Don&apos;t see your city? Call us anyway — we may still serve your area.
          </p>
        </div>
      </section>
    </>
  )
}
