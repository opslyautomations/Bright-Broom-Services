import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const SITE_URL = 'https://www.brightbroomservice.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Bright Broom Service',
    default: 'Bright Broom Service — Professional Cleaning CA, AZ, NV, CO, VA',
  },
  description:
    'Family-owned professional cleaning services across California, Arizona, Nevada, Colorado, and Virginia. Residential, commercial, specialty & post-construction cleaning. Get a free quote.',
  keywords: ['house cleaning', 'cleaning services', 'deep cleaning', 'move out cleaning', 'commercial cleaning', 'janitorial services'],
  authors: [{ name: 'Bright Broom Service', url: SITE_URL }],
  creator: 'Bright Broom Service',
  publisher: 'Bright Broom Service',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Bright Broom Service',
    title: 'Bright Broom Service — Professional Cleaning CA, AZ, NV, CO, VA',
    description:
      'Family-owned professional cleaning services across California, Arizona, Nevada, Colorado, and Virginia. Residential, commercial, specialty & post-construction cleaning.',
    images: [
      {
        url: `${SITE_URL}/og/home.png`,
        width: 1200,
        height: 630,
        alt: 'Bright Broom Service — Professional Cleaning Across 5 States',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bright Broom Service — Professional Cleaning CA, AZ, NV, CO, VA',
    description:
      'Family-owned professional cleaning services across California, Arizona, Nevada, Colorado, and Virginia.',
    images: [`${SITE_URL}/og/home.png`],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.opslyautomations.com" />
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-brand focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" style={{ paddingTop: '70px' }}>
          {children}
        </main>
        <Footer />

        {/* GHL Form embed script — loaded once globally, lazyOnload */}
        <Script
          src="https://api.opslyautomations.com/js/form_embed.js"
          strategy="lazyOnload"
        />

        {/* GHL Chat Widget — afterInteractive to avoid blocking first paint */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69fcd3dd01f21cd2fbdb23d0"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
