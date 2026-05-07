import Link from 'next/link'

type Crumb = { name: string; href: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-gray-soft">
      <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-1 text-sm text-slate-brand">
        {crumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center gap-1">
            {idx < crumbs.length - 1 ? (
              <>
                <Link href={crumb.href} className="hover:text-teal-brand transition-colors">{crumb.name}</Link>
                <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </>
            ) : (
              <span className="text-navy-brand font-medium" aria-current="page">{crumb.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
