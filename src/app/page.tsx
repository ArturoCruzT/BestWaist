import { BRAND, PRODUCTS, FAQS } from '@/data/site-data'
import LandingPage from '@/components/LandingPage'

// Product JSON-LD for each product
function ProductsJsonLd() {
  const jsonLd = PRODUCTS.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    brand: {
      '@type': 'Brand',
      name: BRAND.fullName,
    },
    offers: {
      '@type': 'Offer',
      price: p.price,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: BRAND.fullName,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: p.rating,
      reviewCount: p.reviewCount,
    },
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// FAQ JSON-LD — sourced from centralized FAQS data
function FaqJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function HomePage() {
  return (
    <>
      <ProductsJsonLd />
      <FaqJsonLd />
      <main>
        <LandingPage />
      </main>
    </>
  )
}
