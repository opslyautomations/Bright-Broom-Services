import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTASection from '@/components/CTASection'
import { breadcrumbSchema } from '@/lib/schema'
import { blogPosts } from '@/lib/data/blog'

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  title: 'Cleaning Tips & Guides | Bright Broom Blog',
  description: 'The Bright Broom Service blog — cleaning guides, service tips, how-to articles, and local resources for homeowners and businesses across CA, AZ, NV, CO & VA.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Cleaning Tips & Guides | Bright Broom Blog',
    description: 'Cleaning guides and tips from Bright Broom Service across 5 states.',
    url: `${SITE_URL}/blog`,
    images: [{ url: `${SITE_URL}/og/blog.png`, width: 1200, height: 630, alt: 'Bright Broom Service Blog' }],
  },
  twitter: { title: 'Cleaning Tips & Guides | Bright Broom Blog', description: 'Cleaning guides from Bright Broom Service.', images: [`${SITE_URL}/og/blog.png`] },
}

const categories = ['All', 'Services', 'Locations', 'Tips & Guides'] as const

export default function BlogIndexPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  const schemas = [
    { '@context': 'https://schema.org', '@type': 'Blog', name: 'Bright Broom Service Blog', url: `${SITE_URL}/blog` },
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]),
  ]

  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-blog-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />

      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-brand mb-4">The Bright Broom Blog</h1>
          <p className="text-xl text-slate-brand">Cleaning guides, service tips, and local resources for homeowners and businesses across 5 states.</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-sm font-bold text-teal-brand uppercase tracking-widest mb-4">Featured Post</h2>
          <Link href={`/blog/${featured.slug}`} className="grid md:grid-cols-2 gap-8 card hover:shadow-lg transition-shadow group">
            <div className="bg-gradient-to-br from-teal-100 to-navy-brand/10 rounded-xl aspect-video flex items-center justify-center">
              <p className="text-teal-brand font-bold text-center px-4">{featured.category}</p>
            </div>
            <div className="flex flex-col justify-center py-2">
              <span className="text-xs font-semibold text-teal-brand bg-teal-50 px-2 py-1 rounded w-fit mb-3">{featured.category}</span>
              <h3 className="text-2xl font-bold text-navy-brand group-hover:text-teal-brand mb-3">{featured.title}</h3>
              <p className="text-slate-brand text-sm leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-slate-brand">
                <span>{new Date(featured.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>·</span>
                <span>{featured.readTime} min read</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-gray-soft">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <span key={cat} className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-slate-brand cursor-default hover:border-teal-brand hover:text-teal-brand transition-colors">
                {cat}
              </span>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col">
                <div className="bg-gradient-to-br from-teal-50 to-navy-brand/5 rounded-lg aspect-video flex items-center justify-center mb-4">
                  <p className="text-xs font-semibold text-teal-brand px-3 text-center">{post.category}</p>
                </div>
                <span className="text-xs font-semibold text-teal-brand bg-teal-50 px-2 py-0.5 rounded w-fit mb-2">{post.category}</span>
                <h3 className="font-bold text-navy-brand group-hover:text-teal-brand text-sm leading-snug mb-2 flex-1">{post.title}</h3>
                <p className="text-xs text-slate-brand leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-slate-brand mt-auto">
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>·</span>
                  <span>{post.readTime} min</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
