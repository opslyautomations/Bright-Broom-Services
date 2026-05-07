import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  title: 'Terms of Service | Bright Broom Service',
  description: 'Terms of service for Bright Broom Service — the terms governing use of our website and cleaning services.',
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  openGraph: { title: 'Terms of Service | Bright Broom Service', url: `${SITE_URL}/terms-of-service` },
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Terms of Service', href: '/terms-of-service' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-navy-brand mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-slate-brand space-y-6">
            <p><strong>Last Updated:</strong> January 1, 2026</p>
            <p>By accessing our website or booking cleaning services with Bright Broom Service, you agree to these Terms of Service.</p>
            <h2 className="text-xl font-bold text-navy-brand">Services</h2>
            <p>Bright Broom Service provides residential, commercial, specialty, and post-construction cleaning services. All services are quote-based. Final pricing is confirmed before service begins. We reserve the right to adjust quotes if the scope of work differs significantly from what was described at time of booking.</p>
            <h2 className="text-xl font-bold text-navy-brand">Scheduling and Cancellation</h2>
            <p>We request at least 24 hours notice for cancellations or rescheduling. Same-day cancellations may be subject to a cancellation fee. Recurring service clients are asked to provide 30-day notice to discontinue service.</p>
            <h2 className="text-xl font-bold text-navy-brand">Access and Safety</h2>
            <p>Clients are responsible for ensuring safe access to the property at the scheduled time. Please secure pets and notify us of any hazards, fragile items, or special access instructions in advance.</p>
            <h2 className="text-xl font-bold text-navy-brand">Liability</h2>
            <p>Bright Broom Service carries general liability insurance and workers&apos; compensation coverage. Claims for damaged or missing items must be reported within 24 hours of service completion. We are not liable for pre-existing damage or conditions that were present before cleaning.</p>
            <h2 className="text-xl font-bold text-navy-brand">Satisfaction</h2>
            <p>If you are unsatisfied with any aspect of your cleaning, contact us within 24 hours and we will return to address the issue at no additional charge. We do not offer refunds for completed services.</p>
            <h2 className="text-xl font-bold text-navy-brand">Contact</h2>
            <p>Questions about these terms: info@brightbroomservice.com | (480) 553-9464</p>
          </div>
        </div>
      </section>
    </>
  )
}
