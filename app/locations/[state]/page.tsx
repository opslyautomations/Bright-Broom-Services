import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import GHLForm from '@/components/GHLForm'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'
import { stateHubs, getStateBySlug } from '@/lib/data/locations'
import { services } from '@/lib/data/services'
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const SITE_URL = 'https://www.brightbroomservice.com'

export async function generateStaticParams() {
  return stateHubs.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params
  const hub = getStateBySlug(state)
  if (!hub) return {}
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: { canonical: `${SITE_URL}/locations/${state}` },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: `${SITE_URL}/locations/${state}`,
      images: [{ url: `${SITE_URL}/og/state-${state}.png`, width: 1200, height: 630, alt: `Cleaning Services in ${hub.name}` }],
    },
    twitter: { title: hub.metaTitle, description: hub.metaDescription, images: [`${SITE_URL}/og/state-${state}.png`] },
  }
}

export default async function StateHubPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const hub = getStateBySlug(state)
  if (!hub) notFound()

  const schemas = [
    localBusinessSchema({
      name: `Bright Broom Service — ${hub.name}`,
      addressLocality: hub.cities[0]?.name,
      addressRegion: hub.abbr,
      lat: hub.lat,
      lng: hub.lng,
      url: `${SITE_URL}/locations/${state}`,
      description: hub.metaDescription,
    }),
    faqSchema(hub.faqs),
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Locations', url: '/locations/california' }, { name: hub.name, url: `/locations/${state}` }]),
  ]

  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-state-${state}-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: hub.name, href: `/locations/${state}` }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-brand font-semibold text-sm mb-2">Serving {hub.cities.length} Cities</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand mb-4">
                House &amp; Commercial Cleaning Across {hub.name}
              </h1>
              <p className="text-lg text-slate-brand mb-6 leading-relaxed">{hub.intro[0]}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#form" className="btn-primary">Get a Free Quote</Link>
                <a href="tel:+14805539464" className="btn-outline">(480) 553-9464</a>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`/images/states/${state}.webp`}
                alt={`Professional cleaning services in ${hub.name}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* State Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-6">{hub.name} Cleaning You Can Count On</h2>
          <div className="space-y-4 text-slate-brand leading-relaxed">
            {hub.intro.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 bg-gray-soft">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-2">Cities We Serve in {hub.name}</h2>
          <p className="text-slate-brand mb-8">Click any city for location-specific cleaning information and service details.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hub.cities.map(city => (
              <Link key={city.slug} href={`/locations/${state}/${city.slug}`} className="card hover:shadow-md hover:-translate-y-0.5 transition-all group p-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                  <Image
                    src={`/images/locations/${state}/${city.slug}.webp`}
                    alt={`Cleaning services in ${city.name}, ${hub.abbr}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-navy-brand group-hover:text-teal-brand text-sm">{city.name}</h3>
                <p className="text-xs text-slate-brand mt-1 line-clamp-2">{city.intro[0].slice(0, 80)}...</p>
                <span className="text-teal-brand text-xs font-semibold mt-2 block">View Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services in State */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-8">Services Available in {hub.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card hover:shadow-md transition-shadow group p-4">
                <h3 className="font-bold text-navy-brand group-hover:text-teal-brand">{s.name}</h3>
                <p className="text-xs text-slate-brand mt-1">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-teal-brand text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why {hub.name} Clients Choose Bright Broom</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hub.whyChoose.map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-8">{hub.name} Cleaning — FAQ</h2>
          <FAQAccordion faqs={hub.faqs} />
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-brand text-center mb-6">Get a Free Quote in {hub.name}</h2>
          <GHLForm id={`inline-state-${state}-form`} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
