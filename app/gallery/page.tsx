import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import GHLForm from '@/components/GHLForm'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import { breadcrumbSchema } from '@/lib/schema'

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  title: 'Gallery — Our Cleaning Work | Bright Broom Service',
  description:
    'See Bright Broom Service cleaning work across CA, AZ, NV, CO & VA. Before-and-after photos of residential, commercial, and specialty cleaning projects.',
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: 'Gallery — Our Cleaning Work | Bright Broom Service',
    description: 'Before-and-after cleaning photos from Bright Broom Service across 5 states.',
    url: `${SITE_URL}/gallery`,
    images: [{ url: `${SITE_URL}/og/gallery.png`, width: 1200, height: 630, alt: 'Bright Broom Service Gallery' }],
  },
  twitter: { title: 'Gallery — Our Cleaning Work | Bright Broom Service', description: 'Before-and-after cleaning photos.', images: [`${SITE_URL}/og/gallery.png`] },
}

const galleryItems = [
  { category: 'Residential', alt: 'Clean kitchen after professional deep cleaning service', state: 'california' },
  { category: 'Residential', alt: 'Sparkling clean bathroom after standard cleaning', state: 'arizona' },
  { category: 'Commercial', alt: 'Clean office space after professional janitorial service', state: 'virginia' },
  { category: 'Move-In/Out', alt: 'Empty clean apartment after move-out cleaning service', state: 'nevada' },
  { category: 'Post-Construction', alt: 'Clean newly renovated kitchen after post-construction cleaning', state: 'colorado' },
  { category: 'Specialty', alt: 'Clean vacation rental living room after Airbnb turnover cleaning', state: 'california' },
  { category: 'Residential', alt: 'Clean living room after bi-weekly standard cleaning', state: 'arizona' },
  { category: 'Commercial', alt: 'Sanitized office restroom after commercial janitorial service', state: 'virginia' },
  { category: 'Move-In/Out', alt: 'Clean kitchen cabinets and appliances after move-out cleaning', state: 'california' },
  { category: 'Post-Construction', alt: 'Clean floors and fixtures after post-construction final clean', state: 'colorado' },
  { category: 'Specialty', alt: 'Restored tile grout after specialty cleaning service', state: 'california' },
  { category: 'Residential', alt: 'Fresh clean bedroom after professional house cleaning', state: 'nevada' },
]

export default function GalleryPage() {
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'ImageGallery', name: 'Bright Broom Service Gallery', url: `${SITE_URL}/gallery` },
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Gallery', url: '/gallery' }]),
  ]
  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-gallery-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Gallery', href: '/gallery' }]} />

      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand mb-4">Our Work</h1>
          <p className="text-xl text-slate-brand">Before-and-after results from residential, commercial, and specialty cleaning projects across 5 states.</p>
          <p className="text-sm text-amber-600 mt-3 bg-amber-50 rounded-lg px-4 py-2 inline-block">📸 Placeholder images — replace with real before/after photos before launch.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="card p-0 overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src={`/images/states/${item.state}.webp`}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <span className="text-xs font-semibold text-white bg-teal-brand/80 px-2 py-0.5 rounded">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-brand text-center mb-6">Ready to See This Quality in Your Home?</h2>
          <GHLForm id="inline-gallery-form" />
        </div>
      </section>

      <CTASection />
    </>
  )
}
