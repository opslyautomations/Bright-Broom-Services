import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import GHLForm from '@/components/GHLForm'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'
import { services, getServiceBySlug, getRelatedServices } from '@/lib/data/services'
import { stateHubs } from '@/lib/data/locations'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const SITE_URL = 'https://www.brightbroomservice.com'

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${slug}`,
      images: [{ url: `${SITE_URL}/og/service-${slug}.png`, width: 1200, height: 630, alt: `${service.name} — Bright Broom Service` }],
    },
    twitter: { title: service.metaTitle, description: service.metaDescription, images: [`${SITE_URL}/og/service-${slug}.png`] },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const related = getRelatedServices(service.relatedSlugs)
  const schemas = [
    serviceSchema({ name: service.name, description: service.description, url: `${SITE_URL}/services/${slug}` }),
    faqSchema(service.faqs),
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: service.name, url: `/services/${slug}` }]),
  ]

  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-service-${slug}-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: service.name, href: `/services/${slug}` }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand mb-4">{service.name} Services</h1>
              <p className="text-lg text-slate-brand mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#form" className="btn-primary">Get a Free Quote</Link>
                <a href="tel:+14805539464" className="btn-outline">(480) 553-9464</a>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`/images/services/${slug}.webp`}
                alt={service.heroAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-6">What&apos;s Included in {service.name}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.inclusions.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-soft rounded-lg px-4 py-3">
                <svg className="w-4 h-4 text-teal-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-soft">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand text-center mb-10">Why Choose Professional {service.shortName} Cleaning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <div key={i} className="card text-center">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-teal-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-bold text-navy-brand mb-2">{b.title}</h3>
                <p className="text-sm text-slate-brand leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-navy-brand text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What to Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-teal-brand flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">{step.step}</div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-2">{service.name} Available Across All Service Areas</h2>
          <p className="text-slate-brand mb-8">We provide {service.name.toLowerCase()} in 31 cities across 5 states.</p>
          <div className="grid md:grid-cols-5 gap-4">
            {stateHubs.map(state => (
              <div key={state.slug} className="card p-4">
                <Link href={`/locations/${state.slug}`} className="font-bold text-navy-brand hover:text-teal-brand text-sm block mb-2">{state.name}</Link>
                <div className="space-y-1">
                  {state.cities.map(city => (
                    <Link key={city.slug} href={`/locations/${state.slug}/${city.slug}`} className="block text-xs text-slate-brand hover:text-teal-brand">{city.name}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-8">{service.name} — Frequently Asked Questions</h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-brand mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(rel => (
              <Link key={rel.slug} href={`/services/${rel.slug}`} className="card hover:shadow-md transition-shadow group">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                  <Image src={`/images/services/${rel.slug}.webp`} alt={rel.heroAlt} fill className="object-cover group-hover:scale-105 transition-transform" sizes="33vw" loading="lazy" />
                </div>
                <h3 className="font-bold text-navy-brand group-hover:text-teal-brand">{rel.name}</h3>
                <p className="text-xs text-slate-brand mt-1">{rel.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-16 bg-gray-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-brand text-center mb-2">Get a Free {service.name} Quote</h2>
          <p className="text-slate-brand text-center mb-6">No prices on the website — every job is quoted to fit your specific space and needs.</p>
          <GHLForm id={`inline-service-${slug}-form`} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
