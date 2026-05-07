'use client'

import { useState } from 'react'

type FAQ = { q: string; a: string }

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-navy-brand hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
            style={{ minHeight: '56px' }}
          >
            <span>{faq.q}</span>
            <svg
              className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${open === idx ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === idx && (
            <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
