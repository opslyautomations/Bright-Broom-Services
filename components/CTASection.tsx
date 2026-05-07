import Link from 'next/link'

type Props = {
  heading?: string
  sub?: string
  primaryHref?: string
  primaryLabel?: string
  showPhone?: boolean
}

export default function CTASection({
  heading = 'Ready to Experience a Clean Space?',
  sub = 'Get a free quote from Bright Broom Service — family-owned cleaning across California, Arizona, Nevada, Colorado, and Virginia.',
  primaryHref = '/contact#form',
  primaryLabel = 'Get a Free Quote',
  showPhone = true,
}: Props) {
  return (
    <section className="bg-gradient-teal-navy py-16 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg text-white/80 mb-8">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryHref} className="btn-primary bg-white !text-teal-brand hover:!bg-gray-100 text-base px-8 py-3">
            {primaryLabel}
          </Link>
          {showPhone && (
            <a href="tel:+14805539464" className="btn-outline border-white text-white hover:bg-white hover:!text-teal-brand text-base px-8 py-3">
              (480) 553-9464
            </a>
          )}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <a
            href="https://www.instagram.com/brightbroomservices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            aria-label="Follow Bright Broom Service on Instagram"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            Follow us @brightbroomservices
          </a>
        </div>
      </div>
    </section>
  )
}
