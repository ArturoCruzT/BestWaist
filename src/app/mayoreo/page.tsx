import type { Metadata } from 'next'
import { BRAND, SITE_URL, WHOLESALE, CONTACT } from '@/data/site-data'
import MayoreoPage from './MayoreoClient'

export const metadata: Metadata = {
  title: 'Mayoreo — Fajas por Volumen para tu Negocio',
  description:
    'Compra fajas Best Waist por mayoreo desde 10 piezas. Precios por volumen, factura CFDI y envío a todo México. Surte tu tienda, boutique o punto de venta con producto de alta rotación.',
  keywords: [
    'fajas por mayoreo',
    'fajas al por mayor México',
    'proveedor de fajas México',
    'fajas precio mayoreo',
    'comprar fajas por volumen',
    'surtir tienda de fajas',
    'fajas para negocio',
    'mayoreo fajas colombianas México',
  ],
  alternates: {
    canonical: `${SITE_URL}/mayoreo`,
  },
  openGraph: {
    title: `Mayoreo — ${BRAND.fullName}`,
    description:
      'Precios por volumen desde 10 piezas. Facturamos CFDI, enviamos a todo México. Surte tu negocio con producto de alta rotación.',
    url: `${SITE_URL}/mayoreo`,
  },
}

// JSON-LD for wholesale page
function WholesaleJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Programa de Mayoreo — ${BRAND.fullName}`,
    description:
      'Compra fajas Best Waist por mayoreo con precios escalonados desde 10 piezas.',
    url: `${SITE_URL}/mayoreo`,
    mainEntity: {
      '@type': 'Offer',
      name: 'Programa de Mayoreo Best Waist',
      description:
        'Precios por volumen para tiendas, boutiques y negocios de fajas en México.',
      seller: {
        '@type': 'Organization',
        name: BRAND.fullName,
      },
      areaServed: {
        '@type': 'Country',
        name: 'México',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function Page() {
  return (
    <>
      <WholesaleJsonLd />
      <main>
        <MayoreoPage />
      </main>
    </>
  )
}
