// ============================================================
// DATOS DE FAJAS BEST WAIST
// Edita este archivo para actualizar productos, precios,
// reseñas y datos de contacto sin tocar componentes.
// ============================================================

export interface ProductSize {
  label: string
  range: string
}

export interface Product {
  id: string
  slug: string
  name: string
  shortName: string
  category: 'hombre' | 'mujer'
  price: number
  originalPrice: number | null
  discount: number
  rating: number
  reviewCount: number
  soldCount: string
  badge: string | null
  color: string
  material: string
  description: string
  features: string[]
  sizes: ProductSize[]
  sizeInstruction: string
  images: string[]
  mlUrl: string
}

export interface Review {
  product: string
  rating: number
  text: string
  source: string
}

export const SITE_URL = 'https://www.fajasbestwaist.com'

export const BRAND = {
  name: 'Best Waist',
  fullName: 'Fajas Best Waist',
  tagline: 'Empresa 100% Mexicana',
  description:
    'Fajas de alta calidad diseñadas en México. Más de 15,000 fajas vendidas y 4.7 estrellas en Mercado Libre. Compra directo por WhatsApp sin intermediarios.',
  sellerBadge: 'MercadoLíder',
  totalSales: '+15,000',
  factura: true, // <-- CONFIRMAR: ¿el cliente emite CFDI?
} as const

export const CONTACT = {
  whatsapp: {
    number: '527296401937',
    message:
      'Hola, me interesa una faja Best Waist. ¿Me pueden dar información?',
  },
  email: 'ventas@fajasbestwaist.com', // <-- CONFIRMAR: email real del cliente
  tiktok: '@fajasbestwaist',
  tiktokUrl: 'https://www.tiktok.com/@fajasbestwaist',
  mercadoLibre: 'https://www.mercadolibre.com.mx/perfil/MAED6712799',
  facebook: 'https://www.facebook.com/FajasToluca',
} as const

export const HERO_PRODUCT_ID = 'faja-chaleco-hombre'

export const PRODUCTS: Product[] = [
  // ===================== HOMBRE =====================
  {
    id: 'faja-chaleco-hombre',
    slug: 'faja-chaleco-hombre',
    name: 'Faja Chaleco Ideal Para Carga Y Trabajo',
    shortName: 'Faja Chaleco',
    category: 'hombre',
    price: 346.15,
    originalPrice: 387.9,
    discount: 10,
    rating: 4.7,
    reviewCount: 1279,
    soldCount: '+5,000',
    badge: 'Más Vendido',
    color: 'Negro',
    material: 'Elastano y Látex',
    description:
      'Diseñada especialmente para hombres adultos, se enfoca en la zona del abdomen brindando un ajuste seguro y eficaz. Diseño ergonómico tipo chaleco con soporte para espalda y hombros. Ideal para trabajo pesado y recuperación.',
    features: [
      'Diseño tipo chaleco con soporte para espalda y hombros',
      'Composición de elastano y látex',
      'Plegable y duradera',
      'Ideal para trabajo pesado y recuperación postquirúrgica',
      'Se usa bajo la ropa sin que se note',
    ],
    sizes: [
      { label: 'CH', range: '75-85 cm' },
      { label: 'M', range: '86-95 cm' },
      { label: 'G', range: '96-105 cm' },
      { label: 'XL', range: '106-115 cm' },
      { label: 'XXL', range: '116-125 cm' },
    ],
    sizeInstruction:
      'Mide la circunferencia de tu abdomen a la altura del ombligo.',
    images: ['/img/chaleco-hombre-1.png', '/img/chaleco-hombre-2.png', '/img/chaleco-hombre-3.png', '/img/chaleco-hombre-4.png', '/img/chaleco-hombre-5.png'],
    mlUrl:
      'https://www.mercadolibre.com.mx/faja-chaleco-ideal-para-carga-y-trabajo/p/MLM27903385',
  },
  // ===================== MUJER =====================
  {
    id: 'faja-colombiana-largo',
    slug: 'faja-colombiana-largo',
    name: 'Faja Tipo Colombiana De 3 Velcros Talle Largo',
    shortName: 'Faja Colombiana Larga',
    category: 'mujer',
    price: 312.39,
    originalPrice: 339,
    discount: 7,
    rating: 4.5,
    reviewCount: 455,
    soldCount: '+1,000',
    badge: 'Popular',
    color: 'Negro',
    material: 'Resorte de alta calidad',
    description:
      'Faja de triple ajuste con tres velcros, ideal para entrenamiento, gimnasio o en el hogar. Mejora tu postura con soporte lumbar, moldea y aplana el vientre. Talle de 32 cm, la más larga.',
    features: [
      '5 varillas para soporte lumbar',
      '18 cm de margen de ajuste',
      'No se dobla ni enrolla',
      'Ideal para ejercicio, dolor lumbar, post-operatorio y post-parto',
      'Talle de 32 cm (la más larga) en todas las tallas',
    ],
    sizes: [
      { label: 'XCH', range: '65-75 cm' },
      { label: 'CH', range: '76-85 cm' },
      { label: 'M', range: '86-95 cm' },
      { label: 'G', range: '96-105 cm' },
      { label: 'XG', range: '106-115 cm' },
      { label: 'XXG', range: '116-130 cm' },
    ],
    sizeInstruction:
      'Mide la circunferencia total a la altura del ombligo.',
    images: ['/img/3velcros-dama-largo-1.png', '/img/3velcros-dama-largo-2.png', '/img/3velcros-dama-largo-3.png', '/img/3velcros-dama-largo-4.png', '/img/3velcros-dama-largo-5.png'],
    mlUrl: 'https://articulo.mercadolibre.com.mx/MLM-1752943234-faja-reductora-para-dama-de-3-velcros-talle-largo-_JM', // <-- CONFIRMAR: verificar que sea la publicación correcta del vendedor MAED6712799
  },
  {
    id: 'chaleco-sauna-hombre',
    slug: 'chaleco-sauna-hombre',
    name: 'Chaleco Sauna Mexicano Ideal Para Reducir Tallas',
    shortName: 'Chaleco Sauna',
    category: 'hombre',
    price: 125.1,
    originalPrice: 139,
    discount: 10,
    rating: 4.5,
    reviewCount: 111,
    soldCount: '+500',
    badge: null,
    color: 'Negro',
    material: 'Plástico de alta densidad',
    description:
      'Chaleco de plástico ideal para bajar de peso. Diseñado para quemar calorías y sudar a un ritmo más elevado durante el ejercicio.',
    features: [
      'Material plástico resistente y grueso',
      'Ideal para ejercicio y entrenamiento',
      'Aumenta la sudoración',
      'Unitalla cómoda',
      'Usar con playera ligera para mejores resultados',
    ],
    sizes: [{ label: 'Unitalla', range: '50-90 kg' }],
    sizeInstruction:
      'Producto unitalla, se recomienda para personas de 50 a 90 kg.',
    images: ['/img/sauna-hombre-1.png', '/img/sauna-hombre-2.png', '/img/sauna-hombre-3.png', '/img/sauna-hombre-4.png', '/img/sauna-hombre-5.png'],
    mlUrl: 'https://www.mercadolibre.com.mx/perfil/MAED6712799', // <-- CONFIRMAR: URL específica del producto en ML
  },
  {
    id: 'faja-colombiana-corto',
    slug: 'faja-colombiana-corto',
    name: 'Faja Tipo Colombiana De 3 Velcros Talle Corto Modeladora',
    shortName: 'Faja Colombiana Corta',
    category: 'mujer',
    price: 199,
    originalPrice: null,
    discount: 0,
    rating: 5.0,
    reviewCount: 2,
    soldCount: '+25',
    badge: null,
    color: 'Negro',
    material: 'Resorte de alta calidad',
    description:
      'Diseñada para modelar la cintura, se adapta al cuerpo ofreciendo soporte en abdomen, cadera y cintura. Talle corto para mayor libertad de movimiento.',
    features: [
      '3 velcros ajustables',
      'Talle corto — ideal bajo cualquier prenda',
      'Soporte en abdomen, cadera y cintura',
      'Ayuda a recuperar figura post-parto',
      'Uso diario cómodo',
    ],
    sizes: [
      { label: 'XS', range: '65-75 cm' },
      { label: 'CH', range: '76-85 cm' },
      { label: 'M', range: '86-95 cm' },
      { label: 'G', range: '96-105 cm' },
      { label: 'XL', range: '106-115 cm' },
    ],
    sizeInstruction:
      'Mide la circunferencia total a la altura del ombligo.',
    images: ['/img/colombiana-corto-1.png', '/img/colombiana-corto-2.png', '/img/colombiana-corto-3.png', '/img/colombiana-corto-4.png', '/img/colombiana-corto-5.png'],
    mlUrl: 'https://www.mercadolibre.com.mx/perfil/MAED6712799', // <-- CONFIRMAR: URL específica del producto en ML
  },
  {
    id: 'chaleco-sauna-dama',
    slug: 'chaleco-sauna-dama',
    name: 'Chaleco Sauna Mexicano Para Dama Ideal Para Bajar De Peso',
    shortName: 'Chaleco Sauna Dama',
    category: 'mujer',
    price: 129,
    originalPrice: null,
    discount: 0,
    rating: 5.0,
    reviewCount: 8,
    soldCount: '+25',
    badge: null,
    color: 'Negro',
    material: 'Plástico de alta calidad',
    description:
      'Diseñado para el cuerpo femenino, genera calor y sudoración para favorecer la pérdida de peso. Ajuste ceñido que resalta la figura.',
    features: [
      'Aumenta temperatura corporal en zona del abdomen',
      'Facilita eliminación de toxinas',
      'Ajuste ceñido y cómodo',
      'Ideal para rutinas de ejercicio',
      'Usar con playera ligera para mejores resultados',
    ],
    sizes: [{ label: 'Unitalla', range: '50-90 kg' }],
    sizeInstruction:
      'Producto unitalla, se recomienda para personas de 50 a 90 kg.',
    images: ['/img/sauna-dama-1.png', '/img/sauna-dama-2.png', '/img/sauna-dama-3.png', '/img/sauna-dama-4.png', '/img/sauna-dama-5.png'],
    mlUrl: 'https://www.mercadolibre.com.mx/perfil/MAED6712799', // <-- CONFIRMAR: URL específica del producto en ML
  },
]

export const REVIEWS: Review[] = [
  {
    product: 'faja-chaleco-hombre',
    rating: 5,
    text: 'Excelente calidad, me quedó justo a la medida. Muy reforzado, me encantó que es tipo chaleco de la parte de atrás porque le da soporte a la espalda y hombros. Lo recomiendo mucho, 10 de 10.',
    source: 'Mercado Libre',
  },
  {
    product: 'faja-chaleco-hombre',
    rating: 5,
    text: 'Excelente producto buena calidad de materiales, y me quedó a la perfección. Les sugiero que midan su cintura para ver medidas, a mí me quedó y eso que soy un poco más robusto de cuerpo.',
    source: 'Mercado Libre',
  },
  {
    product: 'faja-chaleco-hombre',
    rating: 5,
    text: 'De maravilla lo recomiendo al 100%, es cómodo fácil de ponértelo y me ha ayudado mucho pa mi trabajo que es cargar cosas pesadas, sin dudarlo compre el tuyo a tu medida.',
    source: 'Mercado Libre',
  },
  {
    product: 'faja-colombiana-largo',
    rating: 5,
    text: 'Muy buena calidad, es de tiro alto así que ténganlo a consideración. La talla es justo como aparece en la página.',
    source: 'Mercado Libre',
  },
  {
    product: 'faja-colombiana-largo',
    rating: 5,
    text: 'Está muy padre, la recomiendo. Hace mucha cintura y es duradera, yo la usó todos los días y me ha durado bastante.',
    source: 'Mercado Libre',
  },
  {
    product: 'faja-colombiana-largo',
    rating: 5,
    text: 'Muchas gracias, excelente material. Rápido dejé la talla M y ahora voy por la chica, me ayudó mucho con mi panza caída.',
    source: 'Mercado Libre',
  },
  {
    product: 'faja-colombiana-largo',
    rating: 5,
    text: 'Excelente súper compra muy buena calidad me encantó, abarca bastante bien toda mi zona lumbar y parte del vientre bajo.',
    source: 'Mercado Libre',
  },
  {
    product: 'chaleco-sauna-hombre',
    rating: 5,
    text: 'La calidad y grosor del plástico superó mis expectativas, el elástico es un poco rústico pero en general es de excelente calidad.',
    source: 'Mercado Libre',
  },
  {
    product: 'chaleco-sauna-hombre',
    rating: 5,
    text: 'Se ve resistente, pensé que sería super delgado pero está bien. Soy talla G y me quedó muy bien.',
    source: 'Mercado Libre',
  },
  {
    product: 'chaleco-sauna-dama',
    rating: 5,
    text: 'Estos chalecos me gustan, cuando corro lo uso y es muy durable.',
    source: 'Mercado Libre',
  },
]

// ===================== MAYOREO =====================
export interface WholesaleTier {
  minQty: number
  label: string
  discount: string
  priceNote: string
}

export const WHOLESALE = {
  minOrder: 10, // <-- CONFIRMAR: pedido mínimo real
  tiers: [ // <-- CONFIRMAR: descuentos y rangos reales del cliente
    { minQty: 10, label: '10–24 piezas', discount: '15%', priceNote: 'Precio preferencial' },
    { minQty: 25, label: '25–49 piezas', discount: '20%', priceNote: 'Precio mayorista' },
    { minQty: 50, label: '50–99 piezas', discount: '25%', priceNote: 'Precio distribuidor' },
    { minQty: 100, label: '100+ piezas', discount: '30%', priceNote: 'Precio especial' },
  ] as WholesaleTier[],
  benefits: [
    'Precios por volumen directos',
    'Facturación CFDI',
    'Envío a todo México',
    'Surtido flexible de modelos, tallas y colores',
    'Atención directa por WhatsApp',
    'Reposición rápida de inventario',
    'Producto de alta rotación comprobada',
    'Sin contrato ni exclusividad',
  ],
} as const

// ===================== FAQ =====================
export const FAQS = [
  {
    question: '¿Cómo elijo mi talla de faja?',
    answer:
      'Mide tu cintura o la zona indicada con cinta métrica flexible sin apretar. Consulta la tabla de tallas de cada producto o escríbenos por WhatsApp para asesoría personalizada.',
  },
  {
    question: '¿Hacen envíos a todo México?',
    answer:
      'Sí, realizamos envíos a todo el territorio mexicano. También puedes comprar a través de Mercado Libre con envío gratis.',
  },
  {
    question: '¿Emiten factura?',
    answer: 'Sí, emitimos CFDI. Solicita tu factura al momento de tu compra por WhatsApp.',
  },
  {
    question: '¿Cuál es la diferencia entre comprar por WhatsApp y Mercado Libre?',
    answer:
      'Al comprar directamente por WhatsApp obtienes precio directo sin intermediarios y atención personalizada. En Mercado Libre cuentas con la protección de compra de la plataforma.',
  },
  {
    question: '¿Venden por mayoreo?',
    answer:
      'Sí, surtimos tiendas, boutiques y negocios en todo México. Manejamos precios por volumen desde 10 piezas con factura CFDI. Visita nuestra sección de mayoreo o escríbenos por WhatsApp.',
  },
] as const

// Helpers
export function getWhatsAppUrl(customMessage?: string): string {
  const msg = customMessage || CONTACT.whatsapp.message
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`
}

export function getHeroProduct(): Product {
  return PRODUCTS.find((p) => p.id === HERO_PRODUCT_ID) || PRODUCTS[0]
}

export function getProductsByCategory(
  category: 'hombre' | 'mujer' | 'todos'
): Product[] {
  if (category === 'todos') return PRODUCTS
  return PRODUCTS.filter((p) => p.category === category)
}

export function renderStars(rating: number): string {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5 ? 1 : 0
  return '★'.repeat(full) + (half ? '☆' : '') + '☆'.repeat(5 - full - half)
}
