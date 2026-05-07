import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import GHLForm from '@/components/GHLForm'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'
import { organizationSchema, breadcrumbSchema } from '@/lib/schema'

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  title: 'About Bright Broom Service | Family-Owned Cleaning',
  description:
    'Learn about Bright Broom Service — a family-owned cleaning company serving CA, AZ, NV, CO & VA. Our story, values, and commitment to eco-friendly cleaning.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Bright Broom Service | Family-Owned Cleaning',
    description: 'Family-owned cleaning company serving 5 states. Learn our story, values, and commitment to professional cleaning.',
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/og/about.png`, width: 1200, height: 630, alt: 'About Bright Broom Service' }],
  },
  twitter: { title: 'About Bright Broom Service | Family-Owned Cleaning', description: 'Family-owned cleaning company serving 5 states.', images: [`${SITE_URL}/og/about.png`] },
}

const values = [
  { icon: '✓', name: 'Reliability', desc: 'We show up when we say we will, every single time.' },
  { icon: '🎯', name: 'Precision', desc: 'Every detail matters. We clean to a standard, not a clock.' },
  { icon: '🤝', name: 'Integrity', desc: 'Honest communication, fair pricing, and no surprises.' },
  { icon: '🌿', name: 'Family-Safe', desc: 'Products chosen for safety alongside effectiveness.' },
  { icon: '💬', name: 'Communication', desc: 'We keep you informed before, during, and after every clean.' },
]

export default function AboutPage() {
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Bright Broom Service', url: `${SITE_URL}/about` },
    organizationSchema(),
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]),
  ]
  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-about-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand mb-4">About Bright Broom Service</h1>
          <p className="text-xl text-slate-brand leading-relaxed">Family-owned professional cleaning across California, Arizona, Nevada, Colorado, and Virginia.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-6">Our Story</h2>
          <div className="prose prose-lg text-slate-brand max-w-none space-y-4">
            <p>Bright Broom Service is a family-owned cleaning company built on a simple idea: every space deserves the same care we&apos;d give our own home. What started as a small local operation has grown into a trusted multi-state cleaning service, but our standard hasn&apos;t changed — show up on time, clean like it matters, and treat every client&apos;s space with respect.</p>
            <p>We serve homes and businesses across California, Arizona, Nevada, Colorado, and Virginia, offering everything from recurring residential cleanings to large-scale post-construction cleanup. Whether it&apos;s a weekly tidy, a deep refresh before guests arrive, or a turnover before move-in day, our team brings the same precision, dependable service, and attention to detail.</p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-6">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Scheduling Around You', body: 'We work around your calendar — not the other way around. Weekly, bi-weekly, monthly, or one-time. Evenings and weekends available.' },
              { title: 'We Bring Everything', body: 'Professional-grade equipment and thoughtfully chosen, family-safe cleaning products arrive with our team. Nothing for you to buy or prepare.' },
              { title: 'Clear Communication', body: 'We communicate proactively — confirming appointments, notifying of any changes, and following up if anything requires attention after a visit.' },
              { title: 'Consistent Follow-Up', body: 'Recurring clients stay with us because we keep our promises. We check in, adjust to your preferences over time, and address any concerns promptly.' },
            ].map(item => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-navy-brand mb-2">{item.title}</h3>
                <p className="text-slate-brand text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-6">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Multi-State Service', body: 'We operate across 5 states and 31 cities — providing the same standard everywhere, with local teams who know their communities.' },
              { title: 'Family-Owned', body: 'This is Justin\'s business, not a franchise. You get personal accountability and direct communication — not a call center.' },
              { title: 'Insured & Bonded', body: 'Full general liability insurance and workers\' compensation coverage in every state we operate. You are protected.' },
              { title: 'Eco-Friendly Products', body: 'We use low-VOC, biodegradable, family-safe cleaning products that are effective without the harsh chemicals.' },
            ].map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-teal-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy-brand mb-1">{item.title}</h3>
                  <p className="text-slate-brand text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-teal-brand">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {values.map(v => (
              <div key={v.name} className="bg-white/10 rounded-xl px-6 py-5 text-center text-white w-44">
                <div className="text-3xl mb-2">{v.icon}</div>
                <p className="font-bold text-lg">{v.name}</p>
                <p className="text-xs text-white/80 mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Footprint */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-6">Our Service Footprint</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {[
              { state: 'California', cities: 14, href: '/locations/california' },
              { state: 'Arizona', cities: 5, href: '/locations/arizona' },
              { state: 'Nevada', cities: 3, href: '/locations/nevada' },
              { state: 'Colorado', cities: 4, href: '/locations/colorado' },
              { state: 'Virginia / DC Metro', cities: 5, href: '/locations/virginia' },
            ].map(item => (
              <Link key={item.state} href={item.href} className="card hover:shadow-md hover:-translate-y-0.5 transition-all text-center group">
                <p className="font-bold text-navy-brand group-hover:text-teal-brand">{item.state}</p>
                <p className="text-teal-brand text-sm">{item.cities} cities</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/locations/california" className="btn-outline">See All Locations →</Link>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-16 bg-gray-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand text-center mb-2">Get to Know Us — Get a Quote</h2>
          <p className="text-slate-brand text-center mb-8">Ready to experience the Bright Broom difference? Request a free quote and we'll get back to you quickly.</p>
          <GHLForm id="inline-about-form" />
        </div>
      </section>

      <CTASection heading="Experience the Bright Broom Standard" />
    </>
  )
}
