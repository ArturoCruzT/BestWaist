'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  MessageCircle,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Package,
  Truck,
  FileText,
  Users,
  Store,
  ShieldCheck,
  Phone,
  Zap,
  BadgeCheck,
  Star,
  Menu,
  X,
} from 'lucide-react'
import {
  BRAND,
  CONTACT,
  WHOLESALE,
  PRODUCTS,
  getWhatsAppUrl,
} from '@/data/site-data'
import { useState } from 'react'

export default function MayoreoPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-brand-black/95 backdrop-blur-md border-b border-brand-yellow/15 py-3">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:opacity-80 transition">
              <Image
                src="/img/best-waist-logo-web.webp"
                alt="Fajas Best Waist — Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-brand-yellow/10 border border-brand-yellow/30 px-3 py-1 rounded-full text-[0.7rem] font-semibold text-brand-yellow">
              <Store className="w-3.5 h-3.5" />
              Programa de Mayoreo
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-yellow transition flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Inicio
            </Link>
            <a href="#precios" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-yellow transition">Precios</a>
            <a href="#beneficios" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-yellow transition">Beneficios</a>
            <a href="#productos" className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-brand-yellow transition">Productos</a>
            <a
              href={getWhatsAppUrl('Hola, me interesa comprar por mayoreo')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wp"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar Mayoreo
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Menú">
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {navOpen && (
          <div className="md:hidden bg-brand-dark border-b border-brand-yellow/10 p-5 flex flex-col gap-4">
            <Link href="/" onClick={() => setNavOpen(false)} className="text-sm font-medium flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Inicio
            </Link>
            <a href="#precios" onClick={() => setNavOpen(false)} className="text-sm font-medium">Precios</a>
            <a href="#beneficios" onClick={() => setNavOpen(false)} className="text-sm font-medium">Beneficios</a>
            <a href="#productos" onClick={() => setNavOpen(false)} className="text-sm font-medium">Productos</a>
            <a href={getWhatsAppUrl('Hola, me interesa comprar por mayoreo')} target="_blank" rel="noopener noreferrer" className="btn-wp justify-center">
              <MessageCircle className="w-4 h-4" /> Cotizar Mayoreo
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO MAYOREO ── */}
      <section className="pt-[120px] pb-20 bg-gradient-to-br from-brand-black via-[#1a1400] to-brand-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,215,0,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-yellow mb-5">
            <TrendingUp className="w-3.5 h-3.5" />
            Programa de Mayoreo
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-[1.1] mb-4">
            Surte tu negocio con <span className="text-brand-yellow">Best Waist</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Abastece tu tienda, boutique o punto de venta con fajas de alta demanda. Precios por volumen desde {WHOLESALE.minOrder} piezas,
            facturación CFDI, envío a todo México y el respaldo de una marca con más de 15,000 ventas en Mercado Libre.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppUrl('Hola, me interesa su programa de mayoreo. ¿Me pueden enviar la lista de precios?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Lista de Precios
            </a>
            <a href="#precios" className="btn-secondary">
              Ver Descuentos
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-brand-dark border-y border-brand-yellow/10 py-6">
        <div className="max-w-7xl mx-auto px-5 flex justify-center flex-wrap gap-6 md:gap-10">
          {[
            { icon: Star, label: '4.7 ★ calificación' },
            { icon: Package, label: '+15,000 ventas' },
            { icon: Users, label: 'Clientes mayoristas' },
            { icon: FileText, label: 'Facturamos CFDI' },
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

      {/* ── PRECIOS ESCALONADOS ── */}
      <section id="precios" className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              Precios por <span className="text-brand-yellow">volumen</span>
            </h2>
            <p className="text-gray-500">Mientras más compras, más ganas. Descuentos aplicados sobre precio de lista.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHOLESALE.tiers.map((tier, i) => (
              <div
                key={tier.label}
                className={`rounded-xl p-6 border text-center transition-all hover:-translate-y-1 ${
                  i === 2
                    ? 'bg-brand-yellow/10 border-brand-yellow/40 ring-1 ring-brand-yellow/20'
                    : 'bg-brand-dark border-white/[0.08]'
                }`}
              >
                {i === 2 && (
                  <span className="inline-flex items-center gap-1 bg-brand-yellow text-brand-black px-3 py-0.5 rounded-full text-[0.65rem] font-extrabold uppercase mb-3">
                    <Zap className="w-3 h-3" />
                    Popular
                  </span>
                )}
                <p className="text-sm text-gray-400 mb-2 font-medium">{tier.label}</p>
                <p className="text-4xl font-black text-brand-yellow mb-1">{tier.discount}</p>
                <p className="text-xs text-gray-500 mb-4">de descuento</p>
                <p className="text-sm font-semibold text-white">{tier.priceNote}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-gray-500 mb-4">
              Los descuentos se aplican sobre el precio público. Mezcla modelos, tallas y colores libremente.
            </p>
            <a
              href={getWhatsAppUrl('Hola, quiero cotizar un pedido de mayoreo')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar mi Pedido
            </a>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section id="beneficios" className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              ¿Por qué surtirte con <span className="text-brand-yellow">Best Waist</span>?
            </h2>
            <p className="text-gray-500">Un proveedor confiable para tu tienda o negocio</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: 'Producto de alta rotación', desc: 'Más de 15,000 ventas y 4.7 estrellas en Mercado Libre. Mercancía que no se queda en tu estante.' },
              { icon: Package, title: 'Surtido flexible', desc: 'Mezcla modelos, tallas y colores en un solo pedido. Arma el lote que necesite tu negocio.' },
              { icon: FileText, title: 'Factura CFDI', desc: 'Emitimos factura fiscal para que deduzcas tu compra de inventario.' },
              { icon: Truck, title: 'Envío a todo México', desc: 'Recibe tu mercancía en cualquier punto del país con guía de rastreo.' },
              { icon: ShieldCheck, title: 'Calidad consistente', desc: 'Misma calidad en cada lote. Producto probado por miles de clientes con mínimas devoluciones.' },
              { icon: Zap, title: 'Reposición rápida', desc: 'Resurtimos tu inventario cuando lo necesites. Sin esperas largas.' },
              { icon: Store, title: 'Proveedor confiable', desc: 'Empresa mexicana establecida con trayectoria comprobable en Mercado Libre.' },
              { icon: Phone, title: 'Atención directa', desc: 'Comunicación por WhatsApp para cotizaciones, pedidos y seguimiento.' },
            ].map((b) => (
              <div key={b.title} className="bg-brand-black rounded-xl p-6 border border-white/[0.06]">
                <b.icon className="w-8 h-8 text-brand-yellow mb-4" />
                <h3 className="font-bold text-sm mb-2">{b.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS DISPONIBLES ── */}
      <section id="productos" className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              Catálogo para <span className="text-brand-yellow">mayoreo</span>
            </h2>
            <p className="text-gray-500">Todos nuestros modelos disponibles para pedidos por volumen</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="bg-brand-dark rounded-xl border border-white/[0.08] p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-sm mb-1">{p.name}</h3>
                    <span className="text-xs text-gray-500 capitalize bg-white/5 px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-brand-yellow">${p.price.toLocaleString('es-MX')}</p>
                    <p className="text-[0.65rem] text-gray-500">precio público</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.sizes.map((s) => (
                    <span key={s.label} className="px-2 py-0.5 rounded bg-white/5 text-[0.65rem] font-semibold">{s.label}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <BadgeCheck className="w-3.5 h-3.5 text-wp" />
                  {p.rating} ★ &bull; {p.reviewCount.toLocaleString()} opiniones &bull; {p.soldCount} vendidos
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              ¿Cómo hacer tu <span className="text-brand-yellow">primer pedido</span>?
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Escríbenos por WhatsApp', desc: 'Cuéntanos qué modelos, tallas y cantidades necesitas. Te enviamos cotización con precios de mayoreo.' },
              { step: '2', title: 'Confirma tu pedido', desc: 'Revisa la cotización, elige método de pago y confirma. Emitimos factura CFDI si la necesitas.' },
              { step: '3', title: 'Recibe tu mercancía', desc: 'Preparamos y enviamos tu pedido a cualquier punto de México. Te compartimos guía de rastreo.' },
              { step: '4', title: 'Surte tu negocio', desc: 'Recibe tu mercancía lista para exhibir y vender. Si necesitas material digital de apoyo, también lo proporcionamos.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center shrink-0">
                  <span className="text-brand-yellow font-black text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-gradient-to-br from-brand-yellow/[0.08] to-brand-black text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Surte tu inventario <span className="text-brand-yellow">hoy</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Escríbenos y recibe tu cotización personalizada. Pedido mínimo de {WHOLESALE.minOrder} piezas.
            Sin contrato, sin exclusividad, precios directos.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            <a
              href={getWhatsAppUrl('Hola, quiero iniciar a comprar por mayoreo. ¿Me pueden enviar la lista de precios y condiciones?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Cotización
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-wp" /> Sin contrato
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-wp" /> Sin exclusividad
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-wp" /> Factura CFDI
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-wp" /> Envío nacional
            </span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-brand-dark border-t border-brand-yellow/10 py-8 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <Link href="/" className="inline-block hover:opacity-80 transition">
            <Image
              src="/img/best-waist-logo-web.webp"
              alt="Fajas Best Waist — Logo"
              width={40}
              height={40}
              className="rounded-full mx-auto"
            />
          </Link>
          <p className="text-gray-500 text-xs mt-2">Empresa 100% Mexicana &bull; Facturamos &bull; MercadoLíder</p>
          <p className="text-gray-600 text-xs mt-1">
            &copy; {new Date().getFullYear()} {BRAND.fullName}. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href={getWhatsAppUrl('Hola, me interesa comprar por mayoreo')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp para mayoreo"
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full bg-wp flex items-center justify-center animate-pulse-wp hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </>
  )
}
