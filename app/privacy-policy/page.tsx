import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bright Broom Service',
  description: 'Privacy policy for Bright Broom Service — how we collect, use, and protect your personal information.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: { title: 'Privacy Policy | Bright Broom Service', url: `${SITE_URL}/privacy-policy` },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy', href: '/privacy-policy' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-navy-brand mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-slate-brand space-y-6">
            <p><strong>Last Updated:</strong> January 1, 2026</p>
            <p>Bright Broom Service (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website brightbroomservice.com or contact us for cleaning services.</p>
            <h2 className="text-xl font-bold text-navy-brand">Information We Collect</h2>
            <p>We collect information you provide directly to us, including: name, email address, phone number, service address, and details about your cleaning needs when you submit a quote request.</p>
            <p>We also collect non-personal information automatically, including IP addresses, browser type, and pages visited, through standard web analytics.</p>
            <h2 className="text-xl font-bold text-navy-brand">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your quote requests and service inquiries</li>
              <li>To schedule and confirm cleaning appointments</li>
              <li>To communicate about your service, including confirmations and follow-ups</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
            <h2 className="text-xl font-bold text-navy-brand">Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in our business operations (such as CRM and scheduling software) under strict confidentiality agreements.</p>
            <h2 className="text-xl font-bold text-navy-brand">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
            <h2 className="text-xl font-bold text-navy-brand">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information by contacting us at info@brightbroomservice.com.</p>
            <h2 className="text-xl font-bold text-navy-brand">Contact Us</h2>
            <p>For privacy-related questions, contact us at:<br />Email: info@brightbroomservice.com<br />Phone: (480) 553-9464</p>
          </div>
        </div>
      </section>
    </>
  )
}
