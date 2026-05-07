import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Bright Broom Service',
  description: 'Thank you for contacting Bright Broom Service. We will be in touch shortly.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-teal-50 to-white py-20">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-teal-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy-brand mb-4">Thank You!</h1>
        <p className="text-lg text-slate-brand mb-8">Your quote request has been received. Our team will review your information and get back to you shortly.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <a href="tel:+14805539464" className="btn-outline">(480) 553-9464</a>
        </div>
      </div>
    </section>
  )
}
