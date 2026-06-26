import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BRAND, CONTACT, SITE_URL } from '@/data/site-data'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.fullName} — Fajas para Hombre y Mujer | ${BRAND.tagline}`,
    template: `%s | ${BRAND.fullName}`,
  },
  description: BRAND.description,
  keywords: [
    'fajas para hombre',
    'fajas para mujer',
    'faja chaleco',
    'faja colombiana',
    'fajas mexicanas',
    'faja modeladora',
    'chaleco sauna',
    'faja post parto',
    'faja lumbar',
    'Best Waist',
  ],
  authors: [{ name: BRAND.fullName }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/img/best-waist-logo-web.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: BRAND.fullName,
    title: `${BRAND.fullName} — Fajas para Hombre y Mujer`,
    description: BRAND.description,
    images: [
      {
        url: '/img/best-waist-logo-web.webp',
        width: 800,
        height: 800,
        alt: `${BRAND.fullName} — Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.fullName} — Fajas para Hombre y Mujer`,
    description: BRAND.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

// JSON-LD Organization
function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.fullName,
    url: SITE_URL,
    logo: `${SITE_URL}/img/best-waist-logo-web.webp`,
    description: BRAND.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+${CONTACT.whatsapp.number}`,
      contactType: 'sales',
      availableLanguage: 'Spanish',
    },
    sameAs: [
      CONTACT.facebook,
      CONTACT.tiktokUrl,
      CONTACT.mercadoLibre,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
