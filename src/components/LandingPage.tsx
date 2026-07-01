'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  MessageCircle,
  Star,
  Package,
  Truck,
  FileText,
  ShieldCheck,
  Users,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Award,
  Heart,
  Clock,
  CheckCircle2,
  BadgeCheck,
  Store,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import {
  BRAND,
  CONTACT,
  PRODUCTS,
  REVIEWS,
  FAQS,
  getHeroProduct,
  getProductsByCategory,
  getWhatsAppUrl,
  renderStars,
  type Product,
} from '@/data/site-data'


// ─── WhatsApp Float ───
function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full bg-wp flex items-center justify-center animate-pulse-wp hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  )
}

// ─── Size Guide Modal ───
function SizeModal({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  if (!product) return null

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="bg-brand-dark rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-brand-yellow/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h3 className="font-bold text-lg">Tallas: {product.shortName}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Cerrar">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5 space-y-5">
          <div>
            <h4 className="text-brand-yellow font-semibold text-sm mb-2">¿Cómo sacar tus medidas?</h4>
            <div className="bg-brand-yellow/5 border border-brand-yellow/15 rounded-lg p-4 text-sm text-gray-300 space-y-1">
              <p><strong className="text-brand-yellow">1.</strong> Usa una cinta métrica flexible.</p>
              <p><strong className="text-brand-yellow">2.</strong> {product.sizeInstruction}</p>
              <p><strong className="text-brand-yellow">3.</strong> No aprietes la cinta, déjala natural al ras de la piel.</p>
              <p><strong className="text-brand-yellow">4.</strong> Mide de pie con postura recta.</p>
            </div>
          </div>
          <div>
            <h4 className="text-brand-yellow font-semibold text-sm mb-2">Tabla de tallas</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-yellow/10">
                  <th className="text-left p-2.5 text-brand-yellow font-bold">Talla</th>
                  <th className="text-left p-2.5 text-brand-yellow font-bold">Medida</th>
                </tr>
              </thead>
              <tbody>
                {product.sizes.map((s) => (
                  <tr key={s.label} className="border-b border-white/5">
                    <td className="p-2.5 font-bold">{s.label}</td>
                    <td className="p-2.5">{s.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">¿Dudas con tu talla? Escríbenos por WhatsApp y te ayudamos.</p>
          <a
            href={getWhatsAppUrl(`Hola, necesito ayuda con mi talla para: ${product.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wp text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Ayuda con mi talla
          </a>
        </div>
      </div>
    </div>
  )
}



function ProductImageCarousel({ product }: { product: Product }) {
  const images = product.images?.filter(Boolean) ?? []

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Reinicia el carrusel cuando cambia el producto
  useEffect(() => {
    setActiveIndex(0)
  }, [product.id])

  // Cambio automático cada 4 segundos
  useEffect(() => {
    if (images.length <= 1 || isPaused) return

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      )
    }, 4000)

    return () => window.clearInterval(interval)
  }, [images.length, isPaused])

  const previousImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    )
  }

  const nextImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <div
      className="relative w-full aspect-square overflow-hidden bg-brand-dark2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.length > 0 ? (
        images.map((image, index) => (
          <div
            key={`${product.id}-${image}`}
            role="img"
            aria-label={`${product.name} - imagen ${index + 1}`}
            className={`
              absolute inset-0
              bg-center bg-no-repeat bg-contain
              transition-all duration-500 ease-in-out
              ${
                index === activeIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105 pointer-events-none'
              }
            `}
            style={{
              backgroundImage: `url("${image}")`,
            }}
          />
        ))
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-xs text-gray-500">
          Imagen no disponible:
          <br />
          {product.shortName}
        </div>
      )}

      {/* Oscurecimiento suave para mejorar contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Insignia */}
      {product.badge && (
        <span className="absolute z-20 top-3 left-3 bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-[0.65rem] font-extrabold uppercase flex items-center gap-1 shadow-lg">
          <Award className="w-3 h-3" />
          {product.badge}
        </span>
      )}

      {/* Controles */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label="Ver imagen anterior"
            className="
              absolute z-20 left-2 top-1/2 -translate-y-1/2
              w-9 h-9 rounded-full
              bg-black/50 backdrop-blur-sm
              border border-white/10
              flex items-center justify-center
              text-white
              opacity-0 group-hover:opacity-100
              hover:bg-brand-yellow hover:text-brand-black
              transition-all
            "
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Ver imagen siguiente"
            className="
              absolute z-20 right-2 top-1/2 -translate-y-1/2
              w-9 h-9 rounded-full
              bg-black/50 backdrop-blur-sm
              border border-white/10
              flex items-center justify-center
              text-white
              opacity-0 group-hover:opacity-100
              hover:bg-brand-yellow hover:text-brand-black
              transition-all
            "
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicadores */}
          <div className="absolute z-20 bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((image, index) => (
              <button
                key={`indicator-${image}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver imagen ${index + 1}`}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    activeIndex === index
                      ? 'w-6 bg-brand-yellow'
                      : 'w-2 bg-white/60 hover:bg-white'
                  }
                `}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Product Card ───
function ProductCard({
  product,
  onSizeGuide,
}: {
  product: Product
  onSizeGuide: (p: Product) => void
}) {
  return (
    <article className="group bg-brand-dark rounded-xl border border-white/[0.08] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/30 hover:shadow-xl">
      
      <ProductImageCarousel product={product} />

      <div className="p-5">
        <h3 className="font-bold text-sm leading-tight mb-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-2 text-sm">
          <span className="text-brand-yellow">
            {renderStars(product.rating)}
          </span>

          <strong>{product.rating}</strong>

          <span className="text-gray-500 text-xs">
            ({product.reviewCount.toLocaleString('es-MX')})
          </span>
        </div>

        <p className="text-xs text-wp font-semibold mb-3 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          {product.soldCount} vendidos en Mercado Libre
        </p>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-black text-brand-yellow">
            ${product.price.toLocaleString('es-MX')}
          </span>

          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toLocaleString('es-MX')}
            </span>
          )}

          {product.discount > 0 && (
            <span className="bg-wp text-white px-2 py-0.5 rounded text-[0.65rem] font-bold">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.sizes.map((size) => (
            <span
              key={size.label}
              className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold"
            >
              {size.label}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href={getWhatsAppUrl(
              `Hola, me interesa el producto: ${product.name}`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wp text-xs flex-1 justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Comprar
          </a>

          <button
            type="button"
            onClick={() => onSizeGuide(product)}
            className="px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-xs hover:border-brand-yellow hover:text-brand-yellow transition-colors"
          >
            Tallas
          </button>
        </div>
      </div>
    </article>
  )
}

// ─── FAQ Item ───
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/[0.08] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-semibold text-sm pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-brand-yellow shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

// ─── Main Landing Page ───
export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'hombre' | 'mujer' | 'todos'>('todos')
  const [sizeProduct, setSizeProduct] = useState<Product | null>(null)
  const [navOpen, setNavOpen] = useState(false)

  const hero = getHeroProduct()
  const filteredProducts = getProductsByCategory(activeTab)

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-brand-black/95 backdrop-blur-md border-b border-brand-yellow/15 py-3">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/img/best-waist-logo-web.webp"
                alt="Fajas Best Waist"
                width={40}
                height={40}
                priority
              />
            </div>
            <span className="text-white font-bold text-lg tracking-wide">Best <span className="text-brand-yellow">Waist</span></span>
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-brand-yellow/10 border border-brand-yellow/30 px-3 py-1 rounded-full text-[0.7rem] font-semibold text-brand-yellow">
              <BadgeCheck className="w-3.5 h-3.5" />
              100% Mexicano
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#productos" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-yellow transition">Productos</a>
            <a href="#como-comprar" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-yellow transition">Cómo Comprar</a>
            <Link href="/mayoreo" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-yellow transition">Mayoreo</Link>
            <a href="#opiniones" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-yellow transition">Opiniones</a>
            <a href="#contacto" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-yellow transition">Contacto</a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-wp">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Menú">
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {navOpen && (
          <div className="md:hidden bg-brand-dark border-b border-brand-yellow/10 p-5 flex flex-col gap-4">
            <a href="#productos" onClick={() => setNavOpen(false)} className="text-sm font-medium">Productos</a>
            <a href="#como-comprar" onClick={() => setNavOpen(false)} className="text-sm font-medium">Cómo Comprar</a>
            <Link href="/mayoreo" onClick={() => setNavOpen(false)} className="text-sm font-medium">Mayoreo</Link>
            <a href="#opiniones" onClick={() => setNavOpen(false)} className="text-sm font-medium">Opiniones</a>
            <a href="#contacto" onClick={() => setNavOpen(false)} className="text-sm font-medium">Contacto</a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-wp justify-center">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-[120px] pb-20 bg-gradient-to-br from-brand-black via-[#1a1400] to-brand-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,215,0,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-yellow mb-5">
              <Star className="w-3.5 h-3.5 fill-brand-yellow" />
              Producto Estrella en Mercado Libre
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-[1.1] mb-4">
              Faja Chaleco <span className="text-brand-yellow">Best Waist</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              La faja más vendida de México. Soporte para espalda, hombros y abdomen. Diseñada para carga, trabajo y uso diario.
            </p>

            <div className="flex justify-center md:justify-start gap-8 mb-8">
              {[
                { value: '+15,000', label: 'Vendidos' },
                { value: '4.7 ★', label: 'Calificación' },
                { value: '1,279', label: 'Opiniones' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-brand-yellow">{s.value}</div>
                  <div className="text-[0.7rem] text-gray-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href={getWhatsAppUrl('Hola, me interesa la Faja Chaleco Best Waist')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="w-5 h-5" />
                Comprar por WhatsApp
              </a>
              <a href="#productos" className="btn-secondary">Ver Productos</a>
            </div>
          </div>

       <div className="flex justify-center order-first md:order-last">
  <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[3/4] rounded-xl border-2 border-brand-yellow/15 overflow-hidden">
    <Image
      src="/img/faja-estrella.png"
      alt="Faja estrella Best Waist"
      fill
      priority
      sizes="(max-width: 768px) 320px, 400px"
      className="object-cover object-center"
    />
  </div>
</div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-brand-dark border-y border-brand-yellow/10 py-6">
        <div className="max-w-7xl mx-auto px-5 flex justify-center flex-wrap gap-6 md:gap-10">
          {[
            { icon: Star, label: '4.7 de calificación' },
            { icon: Package, label: '+15,000 ventas' },
            { icon: MapPin, label: '100% Mexicano' },
            { icon: FileText, label: 'Facturamos' },
            { icon: BadgeCheck, label: 'MercadoLíder' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 text-sm font-semibold">
              <span className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-brand-yellow" />
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── PRODUCTOS ── */}
      <section id="productos" className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              Nuestros <span className="text-brand-yellow">Productos</span>
            </h2>
            <p className="text-gray-500">Calidad comprobada por miles de clientes en Mercado Libre</p>
          </div>

          <div className="flex justify-center gap-3 mb-10">
            {([
              { key: 'todos', label: 'Todos', icon: Package },
              { key: 'hombre', label: 'Hombre', icon: Users },
              { key: 'mujer', label: 'Mujer', icon: Heart },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-full font-bold text-sm border-2 transition-all ${
                  activeTab === tab.key
                    ? 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow'
                    : 'bg-brand-dark text-gray-500 border-transparent hover:text-white hover:border-white/20'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onSizeGuide={setSizeProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO COMPRAR ── */}
      <section id="como-comprar" className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              Compra <span className="text-brand-yellow">fácil y directo</span>
            </h2>
            <p className="text-gray-500">Sin intermediarios, sin complicaciones</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: Package,
                title: 'Elige tu faja',
                desc: 'Explora nuestro catálogo y consulta la guía de tallas para encontrar tu medida.',
              },
              {
                step: '02',
                icon: MessageCircle,
                title: 'Escríbenos',
                desc: 'Contáctanos por WhatsApp. Te asesoramos con tu talla y resolvemos cualquier duda.',
              },
              {
                step: '03',
                icon: ShieldCheck,
                title: 'Confirma tu pedido',
                desc: 'Elige método de pago y confirma. Emitimos factura CFDI si la necesitas.',
              },
              {
                step: '04',
                icon: Truck,
                title: 'Recibe en casa',
                desc: 'Envío a todo México. Tu faja llega a la puerta de tu casa.',
              },
            ].map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="text-5xl font-black text-brand-yellow/10 mb-3">{s.step}</div>
                <div className="w-14 h-14 rounded-full bg-brand-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="w-5 h-5" />
              Iniciar mi compra
            </a>
          </div>
        </div>
      </section>

      {/* ── MAYOREO TEASER ── */}
      <section className="py-20 bg-gradient-to-r from-brand-yellow/[0.06] via-brand-black to-brand-yellow/[0.06]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-yellow mb-5">
            <Store className="w-3.5 h-3.5" />
            Programa de Mayoreo
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Compra por <span className="text-brand-yellow">mayoreo</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Precios escalonados por volumen desde 10 piezas. Surtimos tiendas, boutiques y distribuidores en todo México con factura CFDI y envío directo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Desde 15% de descuento', 'Pedido mínimo: 10 piezas', 'Factura CFDI', 'Envío nacional'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-wp" />
                {b}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/mayoreo" className="btn-primary">
              <TrendingUp className="w-5 h-5" />
              Ver Precios de Mayoreo
            </Link>
            <a
              href={getWhatsAppUrl('Hola, me interesa comprar por mayoreo')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wp"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── OPINIONES ── */}
      <section id="opiniones" className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              Lo que dicen nuestros <span className="text-brand-yellow">clientes</span>
            </h2>
            <p className="text-gray-500">Opiniones reales verificadas de Mercado Libre</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <blockquote key={i} className="bg-brand-dark rounded-xl p-6 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-brand-yellow text-base">{'★'.repeat(r.rating)}</span>
                  <span className="text-[0.65rem] text-gray-500 bg-white/5 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3 text-wp" />
                    {r.source}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE NOSOTROS ── */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Empresa <span className="text-brand-yellow">100% Mexicana</span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Somos una empresa mexicana dedicada al diseño y distribución de fajas de alta calidad. Con más de <strong className="text-white">15,000 ventas</strong> y una calificación de <strong className="text-white">4.7 estrellas</strong> en Mercado Libre, nos respalda la confianza de miles de clientes en todo el país.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Trabajamos directamente con productores nacionales para ofrecer los mejores precios sin intermediarios. Atendemos tanto a clientes individuales como a tiendas, boutiques y negocios que buscan surtirse por mayoreo.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Truck, label: 'Envío a todo México' },
                { icon: FileText, label: 'Facturamos (CFDI)' },
                { icon: Clock, label: 'Atención inmediata' },
                { icon: ShieldCheck, label: 'Calidad garantizada' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <f.icon className="w-5 h-5 text-brand-yellow shrink-0" />
                  <span className="text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            {/* Flag visual */}
            <div className="w-full max-w-sm bg-brand-black rounded-xl border border-brand-yellow/15 p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-2 bg-[#006847] rounded-l" />
                <div className="w-12 h-2 bg-white" />
                <div className="w-12 h-2 bg-[#CE1126] rounded-r" />
              </div>
              <p className="text-5xl font-black text-brand-yellow mb-2">+15,000</p>
              <p className="text-gray-400 text-sm mb-6">clientes satisfechos</p>
              <div className="space-y-3 text-left">
                {[
                  'Producción nacional',
                  'Precio directo sin intermediarios',
                  'MercadoLíder en Mercado Libre',
                  'Soporte personalizado',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-wp shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GARANTÍAS Y ENVÍOS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              Compra con <span className="text-brand-yellow">confianza</span>
            </h2>
            <p className="text-gray-500">Tu satisfacción es nuestra prioridad</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: 'Envío Nacional',
                desc: 'Enviamos a todo México. Tu pedido llega hasta la puerta de tu casa.',
              },
              {
                icon: FileText,
                title: 'Factura CFDI',
                desc: 'Emitimos factura fiscal para personas físicas y morales.',
              },
              {
                icon: ShieldCheck,
                title: 'Compra Segura',
                desc: 'Más de 15,000 ventas exitosas y calificación 4.7 en Mercado Libre.',
              },
              {
                icon: Phone,
                title: 'Soporte Directo',
                desc: 'Atención personalizada por WhatsApp. Te ayudamos con tu talla.',
              },
            ].map((g) => (
              <div key={g.title} className="bg-brand-dark rounded-xl p-6 border border-white/[0.06] text-center">
                <div className="w-14 h-14 rounded-full bg-brand-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <g.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h3 className="font-bold text-sm mb-2">{g.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              Preguntas <span className="text-brand-yellow">frecuentes</span>
            </h2>
            <p className="text-gray-500">Resolvemos tus dudas</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">¿Tienes otra pregunta?</p>
            <a href={getWhatsAppUrl('Hola, tengo una pregunta sobre sus fajas')} target="_blank" rel="noopener noreferrer" className="btn-wp">
              <MessageCircle className="w-4 h-4" />
              Pregúntanos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACTO / CTA ── */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-brand-yellow/[0.08] to-brand-black text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            ¿Listo para tu <span className="text-brand-yellow">Best Waist</span>?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Escríbenos por WhatsApp y te asesoramos con tu talla ideal. Respuesta inmediata.
          </p>

          <div className="flex justify-center mb-12">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
              <MessageCircle className="w-6 h-6" />
              Escribir por WhatsApp
            </a>
          </div>

          <div className="flex justify-center flex-wrap gap-4">
            {[
              { href: getWhatsAppUrl(), label: 'WhatsApp', icon: MessageCircle, external: true },
              { href: CONTACT.tiktokUrl, label: 'TikTok', icon: Star, external: true },
              { href: CONTACT.mercadoLibre, label: 'Mercado Libre', icon: Store, external: true },
              { href: `mailto:${CONTACT.email}`, label: CONTACT.email, icon: Mail, external: false },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2.5 bg-brand-dark px-5 py-3 rounded-full text-sm font-medium border border-white/[0.08] hover:border-brand-yellow transition"
              >
                <c.icon className="w-4 h-4 text-brand-yellow" />
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-brand-dark border-t border-brand-yellow/10 py-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/img/best-waist-logo-web.webp"
                    alt="Fajas Best Waist"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-white font-bold tracking-wide">Best <span className="text-brand-yellow">Waist</span></span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Empresa 100% mexicana. Fajas de alta calidad para hombre y mujer con más de 15,000 fajas vendidas en Mercado Libre.
              </p>
            </div>
            <div>
              <p className="font-bold text-sm mb-3 text-brand-yellow">Enlaces</p>
              <div className="space-y-2">
                <a href="#productos" className="block text-sm text-gray-400 hover:text-white transition">Productos</a>
                <Link href="/mayoreo" className="block text-sm text-gray-400 hover:text-white transition">Mayoreo</Link>
                <a href="#como-comprar" className="block text-sm text-gray-400 hover:text-white transition">Cómo Comprar</a>
                <a href="#faq" className="block text-sm text-gray-400 hover:text-white transition">Preguntas Frecuentes</a>
              </div>
            </div>
            <div>
              <p className="font-bold text-sm mb-3 text-brand-yellow">Contacto</p>
              <div className="space-y-2">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
                  <Mail className="w-4 h-4" /> {CONTACT.email}
                </a>
                <a href={CONTACT.mercadoLibre} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
                  <Store className="w-4 h-4" /> Mercado Libre
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-6 text-center">
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} {BRAND.fullName}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING & MODALS ── */}
      <WhatsAppFloat />
      <SizeModal product={sizeProduct} onClose={() => setSizeProduct(null)} />
    </>
  )
}
