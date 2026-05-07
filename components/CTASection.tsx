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
      </div>
    </section>
  )
}
