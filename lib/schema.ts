const SITE_URL = 'https://www.brightbroomservice.com'
const BUSINESS_NAME = 'Bright Broom Service'
const PHONE = '+14805539464'
const EMAIL = 'info@brightbroomservice.com'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    telephone: PHONE,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Maria',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    sameAs: ['https://www.facebook.com/', 'https://www.instagram.com/'],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function localBusinessSchema(overrides?: {
  name?: string
  addressLocality?: string
  addressRegion?: string
  lat?: number
  lng?: number
  url?: string
  description?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    additionalType: 'https://schema.org/CleaningService',
    name: overrides?.name ?? BUSINESS_NAME,
    url: overrides?.url ?? SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    priceRange: 'Quote on request',
    description:
      overrides?.description ??
      'Family-owned professional cleaning services for residential, commercial, specialty, and post-construction cleaning across California, Arizona, Nevada, Colorado, and Virginia.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: overrides?.addressLocality ?? 'Santa Maria',
      addressRegion: overrides?.addressRegion ?? 'CA',
      addressCountry: 'US',
    },
    ...(overrides?.lat && overrides?.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: overrides.lat,
            longitude: overrides.lng,
          },
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: overrides.lat,
              longitude: overrides.lng,
            },
            geoRadius: '24140',
          },
        }
      : {}),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '6',
      bestRating: '5',
    },
  }
}

export function serviceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    areaServed: [
      { '@type': 'State', name: 'California' },
      { '@type': 'State', name: 'Arizona' },
      { '@type': 'State', name: 'Nevada' },
      { '@type': 'State', name: 'Colorado' },
      { '@type': 'State', name: 'Virginia' },
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        description: 'Quote on request',
      },
    },
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function blogPostingSchema(post: {
  title: string
  slug: string
  publishDate: string
  excerpt: string
  imageAlt: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og/blog-${post.slug}.png`,
      width: 1200,
      height: 630,
    },
  }
}

export function aggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
    },
    ratingValue: '4.9',
    reviewCount: '6',
    bestRating: '5',
    worstRating: '1',
  }
}

export function reviewSchema(reviews: {
  name: string
  city: string
  rating: number
  text: string
  date: string
}[]) {
  return reviews.map(r => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
    },
    author: {
      '@type': 'Person',
      name: r.name,
    },
    reviewBody: r.text,
    datePublished: r.date,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
    },
  }))
}
