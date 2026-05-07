import Link from 'next/link'
import Image from 'next/image'
import { stateHubs } from '@/lib/data/locations'
import { services } from '@/lib/data/services'

export default function Footer() {
  return (
    <footer className="bg-navy-brand text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" aria-label="Bright Broom Service Home">
              <Image src="/logo.png" alt="Bright Broom Service" width={150} height={45} className="h-10 w-auto mb-4 brightness-0 invert" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">Family-owned cleaning, dependable in 5 states.</p>
            <address className="not-italic space-y-2">
              <a href="tel:+14805539464" className="flex items-center gap-2 text-gray-300 hover:text-teal-brand text-sm transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (480) 553-9464
              </a>
              <a href="mailto:info@brightbroomservice.com" className="flex items-center gap-2 text-gray-300 hover:text-teal-brand text-sm transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@brightbroomservice.com
              </a>
              <p className="flex items-start gap-2 text-gray-300 text-sm">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Mobile service — based in Santa Maria, CA
              </p>
            </address>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Bright Broom Service on Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-brand transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/brightbroomservices" target="_blank" rel="noopener noreferrer" aria-label="Bright Broom Service on Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-brand transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" aria-label="Bright Broom Service on Google" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-brand transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-gray-300 hover:text-teal-brand text-sm transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Locations</h3>
            <div className="space-y-3">
              {stateHubs.map(state => (
                <div key={state.slug}>
                  <Link href={`/locations/${state.slug}`} className="text-sm font-semibold text-white hover:text-teal-brand transition-colors">{state.name}</Link>
                  <div className="mt-1 flex flex-wrap gap-x-2 gap-y-0.5">
                    {state.cities.map(city => (
                      <Link key={city.slug} href={`/locations/${state.slug}/${city.slug}`} className="text-xs text-gray-400 hover:text-teal-brand transition-colors">{city.name}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {[
                { name: 'About', href: '/about' },
                { name: 'Reviews', href: '/reviews' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-teal-brand text-sm transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
            <Link href="/contact#form" className="btn-primary text-sm w-full text-center">Get a Quote</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2026 Bright Broom Service. All rights reserved.</p>
          <p>Built for service across CA, AZ, NV, CO, VA.</p>
        </div>
      </div>
    </footer>
  )
}
