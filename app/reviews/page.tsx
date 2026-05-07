import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import ReviewCard from '@/components/ReviewCard'
import GHLForm from '@/components/GHLForm'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import { breadcrumbSchema, reviewSchema, aggregateRatingSchema } from '@/lib/schema'

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  title: 'Client Reviews | Bright Broom Service',
  description:
    'Read 5-star reviews from Bright Broom Service clients across CA, AZ, NV, CO & VA. See what homeowners and businesses say about our cleaning service.',
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    title: 'Client Reviews | Bright Broom Service',
    description: '5-star reviews from clients across 5 states.',
    url: `${SITE_URL}/reviews`,
    images: [{ url: `${SITE_URL}/og/reviews.png`, width: 1200, height: 630, alt: 'Bright Broom Service Client Reviews' }],
  },
  twitter: { title: 'Client Reviews | Bright Broom Service', description: '5-star reviews from clients across 5 states.', images: [`${SITE_URL}/og/reviews.png`] },
}

const allReviews = [
  { name: 'Maria L.', city: 'Santa Maria, CA', rating: 5, text: "We've used Bright Broom for our bi-weekly cleanings for almost a year now and they've been incredible. Justin's team is always on time, friendly, and the house genuinely smells fresh when they leave. Worth every dollar.", date: '2024-09-01' },
  { name: 'Daniel R.', city: 'San Luis Obispo, CA', rating: 5, text: "Hired them for a deep clean before listing our house and the place looked brand new. The realtor commented on it. They got into spots I hadn't even thought about. Highly recommend.", date: '2024-08-10' },
  { name: 'Jessica T.', city: 'Phoenix, AZ', rating: 5, text: "Booked a move-out clean and got our full deposit back from the landlord. The team was professional, communicated well, and worked through everything on the checklist without me having to ask. Will use again.", date: '2024-08-15' },
  { name: 'Robert K.', city: 'Las Vegas, NV', rating: 5, text: "We run a small office and Bright Broom handles our weekly janitorial. Always reliable, never have to follow up. The bathrooms are spotless every Monday morning. That's all I needed.", date: '2024-07-05' },
  { name: 'Amanda S.', city: 'Denver, CO', rating: 5, text: "Post-construction cleaning after a kitchen remodel — they removed dust I didn't even know was there. Cabinets, vents, baseboards, every surface. We could move back in the same day.", date: '2024-07-20' },
  { name: 'Christopher H.', city: 'Arlington, VA', rating: 5, text: "Our Airbnb turnover schedule is tight and Bright Broom never misses. Fast, thorough, and the guests consistently mention how clean the place is in their reviews. Game-changer for our rental.", date: '2024-06-15' },
]

export default function ReviewsPage() {
  const schemas = [
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Reviews', url: '/reviews' }]),
    aggregateRatingSchema(),
    ...reviewSchema(allReviews),
  ]
  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-reviews-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Reviews', href: '/reviews' }]} />

      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand mb-4">What Our Clients Are Saying</h1>
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
            <span className="ml-2 text-xl font-bold text-navy-brand">4.9 / 5</span>
          </div>
          <p className="text-slate-brand">⚠️ Note: These are placeholder reviews. Justin — replace with real Google Business Profile reviews before launch.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {allReviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>

          <div className="text-center bg-teal-50 rounded-2xl p-8">
            <p className="font-bold text-navy-brand text-lg mb-2">Loved your clean?</p>
            <p className="text-slate-brand mb-4">Help other homeowners find us by leaving a review on Google.</p>
            <a href="#" className="btn-primary" aria-label="Leave a review on Google">Leave a Google Review →</a>
            <p className="text-xs text-slate-brand mt-3">(Justin: replace the # above with your real Google Business Profile review URL before launch.)</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-brand text-center mb-6">Ready to Experience 5-Star Cleaning?</h2>
          <GHLForm id="inline-reviews-form" />
        </div>
      </section>

      <CTASection />
    </>
  )
}
