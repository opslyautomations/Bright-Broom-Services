import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import GHLForm from '@/components/GHLForm'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'
import { stateHubs, getStateBySlug, getCityBySlug } from '@/lib/data/locations'
import { services } from '@/lib/data/services'
import { localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const SITE_URL = 'https://www.brightbroomservice.com'

export async function generateStaticParams() {
  return stateHubs.flatMap(state =>
    state.cities.map(city => ({ state: state.slug, city: city.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; city: string }> }): Promise<Metadata> {
  const { state, city } = await params
  const cityData = getCityBySlug(state, city)
  if (!cityData) return {}
  return {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    alternates: { canonical: `${SITE_URL}/locations/${state}/${city}` },
    openGraph: {
      title: cityData.metaTitle,
      description: cityData.metaDescription,
      url: `${SITE_URL}/locations/${state}/${city}`,
      images: [{ url: `${SITE_URL}/og/city-${city}.png`, width: 1200, height: 630, alt: `Cleaning Services in ${cityData.name}, ${cityData.stateAbbr}` }],
    },
    twitter: { title: cityData.metaTitle, description: cityData.metaDescription, images: [`${SITE_URL}/og/city-${city}.png`] },
  }
}

export default async function CityPage({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state, city } = await params
  const stateData = getStateBySlug(state)
  const cityData = getCityBySlug(state, city)
  if (!stateData || !cityData) notFound()

  const nearbyFull = cityData.nearbySlugs.map(ns => {
    for (const sh of stateHubs) {
      const found = sh.cities.find(c => c.slug === ns)
      if (found) return { city: found, state: sh }
    }
    return null
  }).filter(Boolean) as { city: typeof cityData; state: typeof stateData }[]

  const schemas = [
    localBusinessSchema({
      name: `Bright Broom Service — ${cityData.name}, ${cityData.stateAbbr}`,
      addressLocality: cityData.name,
      addressRegion: cityData.stateAbbr,
      lat: cityData.lat,
      lng: cityData.lng,
      url: `${SITE_URL}/locations/${state}/${city}`,
      description: cityData.metaDescription,
    }),
    ...services.map(s => serviceSchema({
      name: `${s.name} in ${cityData.name}, ${cityData.stateAbbr}`,
      description: `${s.description} Serving ${cityData.name}, ${cityData.state}.`,
      url: `${SITE_URL}/services/${s.slug}`,
    })),
    faqSchema(cityData.faqs),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: stateData.name, url: `/locations/${state}` },
      { name: cityData.name, url: `/locations/${state}/${city}` },
    ]),
  ]

  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-city-${city}-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: stateData.name, href: `/locations/${state}` }, { name: cityData.name, href: `/locations/${state}/${city}` }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-brand font-semibold text-sm mb-2">{cityData.state} · Professional Cleaning</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand mb-4">
                Professional Cleaning Services in {cityData.name}, {cityData.stateAbbr}
              </h1>
              <p className="text-lg text-slate-brand mb-6 leading-relaxed">{cityData.intro[0]}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#form" className="btn-primary">Get a Free Quote</Link>
                <a href="tel:+14805539464" className="btn-outline">(480) 553-9464</a>
              </div>
              {cityData.zipCodes && (
                <p className="text-xs text-slate-brand mt-4">Serving ZIP codes: {cityData.zipCodes}</p>
              )}
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`/images/locations/${state}/${city}.webp`}
                alt={`Professional cleaning services in ${cityData.name}, ${cityData.stateAbbr}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* City Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-6">Cleaning Services Built for {cityData.name} Homes</h2>
          <div className="space-y-4 text-slate-brand leading-relaxed">
            {cityData.intro.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          {cityData.neighborhoods.length > 0 && (
            <div className="mt-6 p-4 bg-teal-50 rounded-xl">
              <p className="text-sm font-semibold text-navy-brand mb-2">Neighborhoods We Serve in {cityData.name}:</p>
              <p className="text-sm text-slate-brand">{cityData.neighborhoods.join(' · ')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Services in City */}
      <section className="py-16 bg-gray-soft">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-8">Services Offered in {cityData.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card hover:shadow-md transition-shadow group p-4">
                <h3 className="font-bold text-navy-brand group-hover:text-teal-brand">{s.name}</h3>
                <p className="text-xs text-slate-brand mt-1 leading-relaxed">{s.tagline}</p>
                <span className="text-teal-brand text-xs font-semibold mt-2 block">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose (city-specific) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-8">Why {cityData.name} Homeowners and Businesses Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-bold text-navy-brand mb-2">Local Knowledge</h3>
              <p className="text-sm text-slate-brand leading-relaxed">{cityData.weatherContext}</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy-brand mb-2">Right for Your Home Type</h3>
              <p className="text-sm text-slate-brand leading-relaxed">{cityData.homeTypes}</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy-brand mb-2">Family-Owned Quality</h3>
              <p className="text-sm text-slate-brand leading-relaxed">Bright Broom Service is not a franchise or a faceless corporation. You get personal accountability and consistent quality on every visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Examples */}
      <section className="py-16 bg-teal-brand text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Cleaning Examples in {cityData.name}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cityData.serviceExamples.map((ex, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6">
                <p className="font-semibold mb-2">{ex.scenario}</p>
                <p className="text-white/80 text-sm leading-relaxed">{ex.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyFull.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-brand mb-6">Nearby Areas We Also Serve</h2>
            <div className="flex flex-wrap gap-3">
              {nearbyFull.map(({ city: nc, state: ns }) => (
                <Link key={nc.slug} href={`/locations/${ns.slug}/${nc.slug}`} className="bg-gray-soft hover:bg-teal-50 hover:text-teal-brand text-slate-brand text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  {nc.name}, {nc.stateAbbr}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-gray-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-brand mb-8">Cleaning Services in {cityData.name} — FAQ</h2>
          <FAQAccordion faqs={cityData.faqs} />
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-brand text-center mb-2">Get a Free Quote in {cityData.name}</h2>
          <p className="text-slate-brand text-center text-sm mb-6">Serving {cityData.name}, {cityData.stateAbbr} and surrounding areas. All services quote-based — no hidden fees.</p>
          <GHLForm id={`inline-city-${city}-form`} />
        </div>
      </section>

      <CTASection heading={`Ready for a Cleaner ${cityData.name} Home?`} sub={`Bright Broom Service delivers professional cleaning in ${cityData.name}, ${cityData.state}. Get your free quote today.`} />
    </>
  )
}
