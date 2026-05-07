import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import GHLForm from '@/components/GHLForm'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import CTASection from '@/components/CTASection'
import { services } from '@/lib/data/services'
import { stateHubs } from '@/lib/data/locations'
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  faqSchema,
  aggregateRatingSchema,
} from '@/lib/schema'

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  title: 'House Cleaning Services CA, AZ, NV, CO, VA',
  description:
    'Family-owned Bright Broom Service — professional house & commercial cleaning across CA, AZ, NV, CO & VA. Insured, eco-friendly, quote-based. Get a free quote.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'House Cleaning Services CA, AZ, NV, CO, VA',
    description:
      'Family-owned Bright Broom Service offers professional house & commercial cleaning across 5 states. Insured, eco-friendly, quote-based.',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/og/home.png`, width: 1200, height: 630, alt: 'Bright Broom Service — Professional Cleaning Across 5 States' }],
  },
  twitter: {
    title: 'House Cleaning Services CA, AZ, NV, CO, VA',
    description: 'Family-owned Bright Broom Service — professional house & commercial cleaning across 5 states.',
    images: [`${SITE_URL}/og/home.png`],
  },
}

const homeFaqs = [
  { q: "What's included in a standard cleaning?", a: "Our standard cleaning covers kitchens, bathrooms, dusting all surfaces, vacuuming, mopping, trash removal, bed making, and baseboard wipe-down. Supplies and equipment included." },
  { q: "Do you bring your own cleaning supplies?", a: "Yes. We arrive fully equipped with professional-grade, family-safe cleaning products and all necessary equipment." },
  { q: "Are your products safe for pets and kids?", a: "Yes. We specifically select family-safe, low-VOC, pet-safe cleaning products. Let us know about any sensitivities when you book." },
  { q: "How do I book a cleaning?", a: "Fill out the quote form on this page or call us at (480) 553-9464. We'll confirm your service details and get you on the calendar." },
  { q: "Do you serve my city?", a: "We serve 31 cities across California, Arizona, Nevada, Colorado, and Virginia. Check our Locations page to find your city." },
  { q: "Are you insured and bonded?", a: "Yes. Bright Broom Service is fully insured with general liability coverage and workers' compensation in all states we operate." },
]

const reviews = [
  { name: 'Maria L.', city: 'Santa Maria, CA', rating: 5, text: "We've used Bright Broom for our bi-weekly cleanings for almost a year now and they've been incredible. Justin's team is always on time, friendly, and the house genuinely smells fresh when they leave. Worth every dollar.", date: '2024-09-01' },
  { name: 'Jessica T.', city: 'Phoenix, AZ', rating: 5, text: "Booked a move-out clean and got our full deposit back from the landlord. The team was professional, communicated well, and worked through everything on the checklist without me having to ask. Will use again.", date: '2024-08-15' },
  { name: 'Amanda S.', city: 'Denver, CO', rating: 5, text: "Post-construction cleaning after a kitchen remodel — they removed dust I didn't even know was there. Cabinets, vents, baseboards, every surface. We could move back in the same day.", date: '2024-07-20' },
]

const serviceIcons: Record<string, string> = {
  'standard-cleaning': '🏠',
  'deep-cleaning': '🧹',
  'move-in-move-out-cleaning': '📦',
  'commercial-janitorial-cleaning': '🏢',
  'specialty-cleaning': '✨',
  'post-construction-cleaning': '🔨',
}

export default function HomePage() {
  const schemas = [
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema({ lat: 34.953, lng: -120.4357 }),
    faqSchema(homeFaqs),
    aggregateRatingSchema(),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <Script key={i} id={`schema-home-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <span>★★★★★</span>
                <span>5-Star Rated · Family-Owned · Insured & Bonded</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand leading-tight mb-5">
                Trusted House &amp; Commercial Cleaning<br />
                <span className="text-teal-brand">Across 5 States</span>
              </h1>
              <p className="text-lg text-slate-brand mb-6 leading-relaxed">
                Family-owned, professionally trained, fully insured. Serving California, Arizona, Nevada, Colorado, and Virginia with residential, commercial, and specialty cleaning — all quote-based, no hidden fees.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/contact#form" className="btn-primary text-base px-7 py-3">Get a Free Quote</Link>
                <a href="tel:+14805539464" className="btn-outline text-base px-7 py-3">Call (480) 553-9464</a>
              </div>
              {/* Trust bar */}
              <div className="flex flex-wrap gap-4">
                {['5★ Rated', 'Family-Owned', 'Insured & Bonded', 'Eco-Friendly', '7-Day Scheduling'].map(item => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-slate-brand">
                    <svg className="w-4 h-4 text-teal-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-2">
                <p className="text-center font-semibold text-navy-brand mb-2 pt-2">Request a Free Quote</p>
                <GHLForm id="inline-hero-form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Trust Bar */}
      <section className="bg-teal-brand py-5" aria-label="Trust indicators">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              { stat: '500+', label: 'Homes Cleaned' },
              { stat: '5', label: 'States Served' },
              { stat: '31', label: 'Cities' },
              { stat: '5★', label: 'Rated' },
              { stat: '100%', label: 'Insured & Bonded' },
              { stat: '7-Day', label: 'Scheduling' },
            ].map(item => (
              <div key={item.label} className="text-center text-white">
                <p className="text-2xl font-bold">{item.stat}</p>
                <p className="text-sm text-teal-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Cleaning Services</h2>
            <p className="section-sub mx-auto">Professional cleaning for every need — residential, commercial, specialty, and post-construction. All services are quote-based with no hidden fees.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="card group hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl">
                  {serviceIcons[service.slug] ?? '✓'}
                </div>
                <h3 className="text-lg font-bold text-navy-brand group-hover:text-teal-brand transition-colors">{service.name}</h3>
                <p className="text-sm text-slate-brand flex-1">{service.tagline}</p>
                <span className="text-teal-brand text-sm font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Homeowners Choose Bright Broom</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📅', title: 'Reliable Scheduling', body: 'We show up when we say we will, every time. Flexible weekly, bi-weekly, or monthly scheduling that works around your calendar.' },
              { icon: '🔒', title: 'Trained & Vetted Team', body: 'Every team member is professionally trained, background-checked, and fully insured. Your home is in good hands.' },
              { icon: '🌿', title: 'Family-Safe Products', body: 'We use professional-grade, eco-friendly, and family-safe products — safe for pets, children, and allergy-sensitive households.' },
            ].map(item => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy-brand mb-2">{item.title}</h3>
                <p className="text-slate-brand text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Cleaning Services Across 5 States</h2>
            <p className="section-sub mx-auto">We serve 31 cities across California, Arizona, Nevada, Colorado, and Virginia. Family-owned quality, locally delivered.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stateHubs.map(state => (
              <Link key={state.slug} href={`/locations/${state.slug}`} className="card hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center group">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                  <Image
                    src={`/images/states/${state.slug}.webp`}
                    alt={`Cleaning services in ${state.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <h3 className="font-bold text-navy-brand group-hover:text-teal-brand transition-colors">{state.name}</h3>
                <p className="text-xs text-slate-brand mt-1">{state.cities.length} cities served</p>
                <span className="text-teal-brand text-xs font-semibold mt-2 block">View Cities →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-navy-brand text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-white/70 text-lg mb-12">Three simple steps from quote to spotless space.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Request a Quote', body: 'Fill out our short form or call us. We gather your home details and schedule preferences.' },
              { step: '2', title: 'We Schedule & Clean', body: 'We confirm your appointment, assign your team, and arrive on time — equipped and ready.' },
              { step: '3', title: 'Enjoy a Spotless Space', body: 'Come home to a fresh, professionally cleaned space. Recurring clients get the same team every visit.' },
            ].map(item => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-teal-brand flex items-center justify-center text-white text-xl font-bold mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 bg-gray-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
              <span className="ml-2 text-slate-brand font-semibold">4.9 / 5 — 6 Reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn-outline">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Frequently Asked Questions</h2>
          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* Instagram Follow */}
      <section className="py-12 bg-gray-soft">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <a
            href="https://www.instagram.com/brightbroomservices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-md px-8 py-5 hover:shadow-lg transition-shadow group"
            aria-label="Follow Bright Broom Service on Instagram"
          >
            <svg className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            <div className="text-left">
              <p className="font-bold text-navy-brand">Follow us on Instagram</p>
              <p className="text-sm text-slate-brand">@brightbroomservices — cleaning tips, before &amp; afters, and more</p>
            </div>
            <svg className="w-5 h-5 text-slate-brand ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      <CTASection />
    </>
  )
}
