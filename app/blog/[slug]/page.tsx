import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Link from 'next/link'
import GHLForm from '@/components/GHLForm'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'
import { blogPosts, getBlogPostBySlug } from '@/lib/data/blog'
import { blogPostingSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const SITE_URL = 'https://www.brightbroomservice.com'

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `${SITE_URL}/blog/${slug}`,
      images: [{ url: `${SITE_URL}/og/blog-${slug}.png`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { title: post.metaTitle, description: post.metaDescription, images: [`${SITE_URL}/og/blog-${slug}.png`] },
  }
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-navy-brand mt-8 mb-3">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-navy-brand mt-6 mb-2">$1</h3>')
    .replace(/^\*\*(.+?)\*\*$/gm, '<p class="font-semibold text-navy-brand mt-4">$1</p>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-teal-brand hover:underline font-medium">$1</a>')
    .replace(/^- \[ \] (.+)$/gm, '<li class="flex items-start gap-2 mb-1"><span class="mt-1 w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></span><span>$1</span></li>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 mb-1"><span class="text-teal-brand mt-1">•</span><span>$1</span></li>')
    .replace(/^\| (.+) \|$/gm, (m, row) => {
      const cells = row.split(' | ').map((c: string) => `<td class="px-4 py-2 border border-gray-200 text-sm text-slate-brand">${c}</td>`)
      return `<tr>${cells.join('')}</tr>`
    })
    .replace(/^(<tr>.+<\/tr>)$/gm, '$1')
    .replace(/^\d+\. (.+)$/gm, '<li class="mb-1">$1</li>')
    .replace(/^(.+)$/gm, (m) => {
      if (m.startsWith('<') || m.trim() === '') return m
      return `<p class="text-slate-brand leading-relaxed mb-4">${m}</p>`
    })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const postIndex = blogPosts.findIndex(p => p.slug === slug)
  const related = blogPosts.filter((p, i) => i !== postIndex && p.category === post.category).slice(0, 3)
  const fallbackRelated = blogPosts.filter((_, i) => i !== postIndex).slice(0, 3)
  const relatedPosts = related.length >= 3 ? related : fallbackRelated

  // Extract FAQ sections from content
  const faqMatches = [...post.content.matchAll(/\*\*(.+?)\*\*\n(.+?)(?=\n\*\*|\n##|$)/gs)]
  const faqs = faqMatches.slice(0, 4).map(m => ({ q: m[1].replace(/[?]/g, '?'), a: m[2].trim() })).filter(f => f.q.endsWith('?'))

  const schemas = [
    blogPostingSchema({ title: post.title, slug: post.slug, publishDate: post.publishDate, excerpt: post.excerpt, imageAlt: post.featuredImageAlt }),
    ...(faqs.length > 0 ? [faqSchema(faqs)] : []),
    breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: post.title, url: `/blog/${slug}` }]),
  ]

  const htmlContent = renderMarkdown(post.content)

  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-blog-post-${slug}-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${slug}` }]} />

      <article>
        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-50 to-white py-16">
          <div className="max-w-3xl mx-auto px-4">
            <span className="text-xs font-semibold text-teal-brand bg-teal-50 px-3 py-1 rounded-full">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-brand mt-4 mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-slate-brand">
              <span>Bright Broom Service Team</span>
              <span>·</span>
              <time dateTime={post.publishDate}>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
            <div className="mt-4 bg-gradient-to-r from-teal-100 to-navy-brand/10 rounded-xl aspect-video flex items-center justify-center">
              <p className="text-sm font-medium text-teal-700 text-center px-6">{post.featuredImageAlt}</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Internal CTA */}
            <div className="mt-12 p-6 bg-teal-50 rounded-2xl border border-teal-100">
              <h3 className="font-bold text-navy-brand mb-2">Ready to Book?</h3>
              <p className="text-sm text-slate-brand mb-4">Bright Broom Service serves homes and businesses across California, Arizona, Nevada, Colorado, and Virginia. All services are quote-based — no hidden fees.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#form" className="btn-primary text-sm">Get a Free Quote</Link>
                <a href="tel:+14805539464" className="btn-outline text-sm">(480) 553-9464</a>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-brand border-t border-gray-100 pt-4">
              <span className="font-semibold">Author:</span> Bright Broom Service Team · <span className="font-semibold">Published:</span> {new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="py-12 bg-gray-soft">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-navy-brand mb-6">Frequently Asked Questions</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </section>
        )}

        {/* Related Posts */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-brand mb-6">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(rp => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="card hover:shadow-md transition-shadow group">
                  <span className="text-xs font-semibold text-teal-brand bg-teal-50 px-2 py-0.5 rounded mb-2 inline-block">{rp.category}</span>
                  <h3 className="font-bold text-navy-brand group-hover:text-teal-brand text-sm leading-snug mb-2">{rp.title}</h3>
                  <p className="text-xs text-slate-brand">{rp.readTime} min read</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="py-12 bg-gray-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-brand text-center mb-6">Get a Free Quote</h2>
          <GHLForm id={`inline-blog-${slug}-form`} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
