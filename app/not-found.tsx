import Link from 'next/link'
import { stateHubs } from '@/lib/data/locations'
import { services } from '@/lib/data/services'

export default function NotFound() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-8xl font-extrabold text-teal-brand mb-4">404</div>
        <h1 className="text-3xl font-bold text-navy-brand mb-4">Page Not Found</h1>
        <p className="text-slate-brand text-lg mb-8">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/contact" className="btn-outline">Get a Quote</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="font-bold text-navy-brand mb-3">Our Services</h2>
            <ul className="space-y-1">
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-teal-brand hover:underline text-sm">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-navy-brand mb-3">Service Areas</h2>
            <ul className="space-y-1">
              {stateHubs.map(state => (
                <li key={state.slug}>
                  <Link href={`/locations/${state.slug}`} className="text-teal-brand hover:underline text-sm">{state.name} ({state.cities.length} cities)</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
