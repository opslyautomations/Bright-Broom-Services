'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { stateHubs } from '@/lib/data/locations'
import { services } from '@/lib/data/services'

const serviceLinks = services.map(s => ({
  name: s.name,
  href: `/services/${s.slug}`,
}))

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileLocOpen, setMobileLocOpen] = useState(false)
  const [mobileServOpen, setMobileServOpen] = useState(false)
  const [expandedState, setExpandedState] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [hoveredState, setHoveredState] = useState<string | null>(null)

  const servRef = useRef<HTMLDivElement>(null)
  const locRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (servRef.current && !servRef.current.contains(e.target as Node)) setServicesOpen(false)
      if (locRef.current && !locRef.current.contains(e.target as Node)) setLocationsOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}
      style={{ height: '70px' }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Bright Broom Service — Home">
          <Image src="/logo.png" alt="Bright Broom Service logo" width={56} height={56} priority className="h-14 w-14 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-brand transition-colors rounded-md">Home</Link>
          <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-brand transition-colors rounded-md">About</Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servRef}>
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-brand transition-colors rounded-md"
              onClick={() => { setServicesOpen(v => !v); setLocationsOpen(false) }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                <Link href="/services" className="block px-4 py-2 text-sm font-semibold text-navy-brand hover:bg-gray-50 border-b border-gray-100 mb-1" onClick={() => setServicesOpen(false)}>All Services</Link>
                {serviceLinks.map(s => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-brand" onClick={() => setServicesOpen(false)}>{s.name}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div className="relative" ref={locRef}>
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-brand transition-colors rounded-md"
              onClick={() => { setLocationsOpen(v => !v); setServicesOpen(false) }}
              aria-expanded={locationsOpen}
              aria-haspopup="true"
            >
              Locations
              <svg className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {locationsOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in flex" style={{ minWidth: '520px' }}>
                <div className="w-40 border-r border-gray-100">
                  {stateHubs.map(state => (
                    <button
                      key={state.slug}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${hoveredState === state.slug ? 'bg-teal-50 text-teal-brand' : 'text-gray-700 hover:bg-gray-50'}`}
                      onMouseEnter={() => setHoveredState(state.slug)}
                    >
                      {state.name}
                    </button>
                  ))}
                </div>
                <div className="flex-1 p-2">
                  {stateHubs.map(state => (
                    <div key={state.slug} className={hoveredState === state.slug ? 'block' : 'hidden'}>
                      <Link href={`/locations/${state.slug}`} className="block px-3 py-1.5 text-sm font-semibold text-teal-brand hover:underline mb-1" onClick={() => setLocationsOpen(false)}>All {state.name} Cities →</Link>
                      <div className="grid grid-cols-2 gap-0.5">
                        {state.cities.map(city => (
                          <Link key={city.slug} href={`/locations/${state.slug}/${city.slug}`} className="block px-3 py-1 text-xs text-gray-700 hover:text-teal-brand hover:bg-gray-50 rounded" onClick={() => setLocationsOpen(false)}>{city.name}</Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  {!hoveredState && (
                    <p className="px-3 py-2 text-xs text-gray-400">Hover a state to see cities</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link href="/reviews" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-brand transition-colors rounded-md">Reviews</Link>
          <Link href="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-brand transition-colors rounded-md">Blog</Link>
          <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-brand transition-colors rounded-md">Contact</Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="tel:+14805539464" className="btn-outline text-sm px-4 py-2" aria-label="Call Bright Broom Service">(480) 553-9464</a>
          <Link href="/contact#form" className="btn-primary text-sm px-4 py-2">Get a Quote</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          style={{ minHeight: '48px', minWidth: '48px' }}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto">
          <nav className="p-4 space-y-1" aria-label="Mobile navigation">
            <Link href="/" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/about" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg" onClick={() => setMobileOpen(false)}>About</Link>

            {/* Services Accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileServOpen(v => !v)}
                style={{ minHeight: '48px' }}
              >
                Services
                <svg className={`w-5 h-5 transition-transform ${mobileServOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileServOpen && (
                <div className="pl-4 space-y-0.5 mt-1">
                  <Link href="/services" className="block px-4 py-2 text-sm font-semibold text-teal-brand hover:bg-gray-50 rounded-lg" onClick={() => setMobileOpen(false)}>All Services</Link>
                  {serviceLinks.map(s => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setMobileOpen(false)}>{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileLocOpen(v => !v)}
                style={{ minHeight: '48px' }}
              >
                Locations
                <svg className={`w-5 h-5 transition-transform ${mobileLocOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileLocOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {stateHubs.map(state => (
                    <div key={state.slug}>
                      <button
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-navy-brand hover:bg-gray-50 rounded-lg"
                        onClick={() => setExpandedState(expandedState === state.slug ? null : state.slug)}
                        style={{ minHeight: '48px' }}
                      >
                        {state.name}
                        <svg className={`w-4 h-4 transition-transform ${expandedState === state.slug ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {expandedState === state.slug && (
                        <div className="pl-4 space-y-0.5">
                          <Link href={`/locations/${state.slug}`} className="block px-3 py-2 text-xs font-semibold text-teal-brand hover:bg-gray-50 rounded" onClick={() => setMobileOpen(false)}>All {state.name} Cities →</Link>
                          {state.cities.map(city => (
                            <Link key={city.slug} href={`/locations/${state.slug}/${city.slug}`} className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileOpen(false)}>{city.name}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/reviews" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg" onClick={() => setMobileOpen(false)}>Reviews</Link>
            <Link href="/blog" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/contact" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg" onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
              <a href="tel:+14805539464" className="btn-outline w-full text-center" onClick={() => setMobileOpen(false)}>(480) 553-9464</a>
              <Link href="/contact#form" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
