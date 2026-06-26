// ============================================================
// DATOS DE FAJAS BEST WAIST - Landing Page
// Edita este archivo para actualizar productos, precios,
// reseñas y datos de contacto sin tocar el HTML.
// ============================================================

const SITE_DATA = {

  // --- MARCA ---
  brand: {
    name: "Best Waist",
    fullName: "Fajas Best Waist",
    tagline: "Empresa 100% Mexicana",
    description: "Fajas de alta calidad diseñadas en México para moldear, sostener y acompañarte en tu día a día.",
    sellerBadge: "MercadoLíder",
    totalSales: "+5,000",
    factura: true,
  },

  // --- CONTACTO (ACTUALIZAR CON DATOS REALES) ---
  contact: {
    whatsapp: {
      number: "5217221234567",           // <-- CAMBIAR: número con código de país sin +
      message: "Hola, me interesa una faja Best Waist. ¿Me pueden dar información?",
    },
    email: "ventas@fajasbestwaist.com",   // Nota: el usuario escribió "vetas" pero probablemente es "ventas"
    tiktok: "@fajasbestwaist",            // <-- CAMBIAR: usuario real de TikTok
    mercadoLibre: "https://www.mercadolibre.com.mx/perfil/MAED6712799",
    facebook: "https://www.facebook.com/FajasToluca",
  },

  // --- PRODUCTO ESTRELLA (HERO) ---
  heroProduct: "faja-chaleco-hombre",     // slug del producto a mostrar en el hero

  // --- PRODUCTOS ---
  products: [

    // ===================== HOMBRE =====================
    {
      id: "faja-chaleco-hombre",
      slug: "faja-chaleco-hombre",
      name: "Faja Chaleco Ideal Para Carga Y Trabajo",
      shortName: "Faja Chaleco",
      category: "hombre",
      price: 346.15,
      originalPrice: 387.90,
      discount: 10,
      rating: 4.7,
      reviewCount: 1279,
      commentCount: 499,
      soldCount: "+5,000",
      badge: "Más Vendido",
      color: "Negro",
      material: "Elastano y Látex",
      description: "Diseñada especialmente para hombres adultos, se enfoca en la zona del abdomen brindando un ajuste seguro y eficaz. Plegable, no tiene vencimiento. Diseño ergonómico que se adapta a diferentes tipos de cuerpo. Ideal para reducir tallas y mejorar postura.",
      features: [
        "Diseño tipo chaleco con soporte para espalda y hombros",
        "Composición de elastano y látex",
        "Plegable y duradera",
        "Ideal para trabajo pesado y recuperación postquirúrgica",
        "Se usa bajo la ropa sin que se note",
      ],
      sizes: [
        { label: "CH", range: "75-85 cm" },
        { label: "M",  range: "86-95 cm" },
        { label: "G",  range: "96-105 cm" },
        { label: "XL", range: "106-115 cm" },
        { label: "XXL",range: "116-125 cm" },
      ],
      sizeInstruction: "Mide la circunferencia de tu abdomen a la altura del ombligo.",
      images: [
        "img/chaleco-hombre-1.jpg",
        "img/chaleco-hombre-2.jpg",
        "img/chaleco-hombre-3.jpg",
        "img/chaleco-hombre-4.jpg",
        "img/chaleco-hombre-5.jpg",
      ],
      mlUrl: "https://www.mercadolibre.com.mx/faja-chaleco-ideal-para-carga-y-trabajo/p/MLM27903385",
    },

    {
      id: "chaleco-sauna-hombre",
      slug: "chaleco-sauna-hombre",
      name: "Chaleco Sauna Mexicano Ideal Para Reducir Tallas",
      shortName: "Chaleco Sauna",
      category: "hombre",
      price: 125.10,
      originalPrice: 139,
      discount: 10,
      rating: 4.5,
      reviewCount: 111,
      commentCount: 66,
      soldCount: "+500",
      badge: null,
      color: "Negro",
      material: "Plástico de alta densidad",
      description: "Chaleco de plástico ideal para bajar de peso, desde el alto rendimiento hasta el principiante. Diseñado para quemar calorías y sudar a un ritmo más elevado.",
      features: [
        "Material plástico resistente y grueso",
        "Ideal para ejercicio y entrenamiento",
        "Aumenta la sudoración",
        "Unitalla cómoda",
        "Usar con playera ligera para mejores resultados",
      ],
      sizes: [
        { label: "Unitalla", range: "50-90 kg" },
      ],
      sizeInstruction: "Producto unitalla, se recomienda para personas de 50 a 90 kg.",
      images: [
        "img/sauna-hombre-1.jpg",
        "img/sauna-hombre-2.jpg",
        "img/sauna-hombre-3.jpg",
        "img/sauna-hombre-4.jpg",
        "img/sauna-hombre-5.jpg",
      ],
      mlUrl: "#", // <-- CAMBIAR: URL real de Mercado Libre
    },

    // ===================== MUJER =====================
    {
      id: "faja-3velcros-dama-largo",
      slug: "faja-3velcros-dama-largo",
      name: "Faja De 3 Velcros Para Dama Talle Largo",
      shortName: "Faja 3 Velcros Largo",
      category: "mujer",
      price: 312.39,
      originalPrice: 339,
      discount: 7,
      rating: 4.5,
      reviewCount: 455,
      commentCount: 157,
      soldCount: "+100",
      badge: null,
      color: "Negro",
      material: "Resorte de alta calidad",
      description: "Faja de triple ajuste con tres velcros, ideal para entrenamiento, gimnasio o en el hogar. Mejora tu postura con soporte lumbar, moldea y aplana el vientre.",
      features: [
        "5 varillas para soporte lumbar",
        "18 cm de margen de ajuste",
        "No se dobla ni enrolla",
        "Ideal para post-operatorio y post-parto",
        "Talle de 32 cm en todas las tallas",
      ],
      sizes: [
        { label: "XCH", range: "65-75 cm" },
        { label: "CH",  range: "76-85 cm" },
        { label: "M",   range: "86-95 cm" },
        { label: "G",   range: "96-105 cm" },
        { label: "XG",  range: "106-115 cm" },
        { label: "XXG", range: "116-126 cm" },
      ],
      sizeInstruction: "Mide la circunferencia total a la altura del ombligo.",
      images: [
        "img/3velcros-dama-largo-1.jpg",
        "img/3velcros-dama-largo-2.jpg",
        "img/3velcros-dama-largo-3.jpg",
        "img/3velcros-dama-largo-4.jpg",
        "img/3velcros-dama-largo-5.jpg",
      ],
      mlUrl: "#", // <-- CAMBIAR
    },

    {
      id: "faja-colombiana-corto",
      slug: "faja-colombiana-corto",
      name: "Faja Tipo Colombiana De 3 Velcros Talle Corto Modeladora",
      shortName: "Faja Colombiana Corta",
      category: "mujer",
      price: 199,
      originalPrice: null,
      discount: 0,
      rating: 5.0,
      reviewCount: 2,
      commentCount: 0,
      soldCount: "+25",
      badge: null,
      color: "Negro",
      material: "Resorte de alta calidad",
      description: "Diseñada para modelar la cintura, se adapta perfectamente al cuerpo ofreciendo soporte óptimo en abdomen, cadera y cintura. Talle corto para mayor libertad de movimiento.",
      features: [
        "3 velcros ajustables",
        "Talle corto — ideal bajo cualquier prenda",
        "Soporte en abdomen, cadera y cintura",
        "Ayuda a recuperar figura post-parto",
        "Uso diario cómodo",
      ],
      sizes: [
        { label: "CH",  range: "76-85 cm" },
        { label: "XS",  range: "65-75 cm" },
        { label: "M",   range: "86-95 cm" },
        { label: "G",   range: "96-105 cm" },
        { label: "XL",  range: "106-115 cm" },
      ],
      sizeInstruction: "Mide la circunferencia total a la altura del ombligo.",
      images: [
        "img/colombiana-corto-1.jpg",
        "img/colombiana-corto-2.jpg",
        "img/colombiana-corto-3.jpg",
        "img/colombiana-corto-4.jpg",
        "img/colombiana-corto-5.jpg",
      ],
      mlUrl: "#", // <-- CAMBIAR
    },

    {
      id: "faja-colombiana-largo",
      slug: "faja-colombiana-largo",
      name: "Faja Tipo Colombiana De 3 Velcros Talle Largo",
      shortName: "Faja Colombiana Larga",
      category: "mujer",
      price: 249,
      originalPrice: null,
      discount: 0,
      rating: 4.5,
      reviewCount: 326,
      commentCount: 152,
      soldCount: "+1,000",
      badge: "Popular",
      color: "Negro",
      material: "Resorte de alta calidad",
      description: "Faja de triple ajuste con tres velcros, ideal para entrenamiento, gimnasio o en el hogar. Mejora tu postura con soporte lumbar, moldea y aplana el vientre.",
      features: [
        "5 varillas para soporte lumbar",
        "18 cm de margen de ajuste",
        "No se dobla ni enrolla",
        "Ideal para ejercicio, dolor lumbar, post-operatoria, post-parto",
        "Talle de 32 cm (la más larga) en todas las tallas",
      ],
      sizes: [
        { label: "XCH", range: "65-75 cm" },
        { label: "CH",  range: "76-85 cm" },
        { label: "M",   range: "86-95 cm" },
        { label: "G",   range: "96-105 cm" },
        { label: "XG",  range: "106-115 cm" },
        { label: "XXG", range: "116-130 cm" },
      ],
      sizeInstruction: "Mide la circunferencia total a la altura del ombligo.",
      images: [
        "img/colombiana-largo-1.jpg",
        "img/colombiana-largo-2.jpg",
        "img/colombiana-largo-3.jpg",
        "img/colombiana-largo-4.jpg",
        "img/colombiana-largo-5.jpg",
      ],
      mlUrl: "#", // <-- CAMBIAR
    },

    {
      id: "chaleco-sauna-dama",
      slug: "chaleco-sauna-dama",
      name: "Chaleco Sauna Mexicano Para Dama Ideal Para Bajar De Peso",
      shortName: "Chaleco Sauna Dama",
      category: "mujer",
      price: 129,
      originalPrice: null,
      discount: 0,
      rating: 5.0,
      reviewCount: 8,
      commentCount: 3,
      soldCount: "+25",
      badge: null,
      color: "Negro",
      material: "Plástico de alta calidad",
      description: "Diseñado especialmente para el cuerpo femenino, genera calor y sudoración para favorecer la pérdida de peso. Ajuste ceñido que resalta la figura sin sacrificar comodidad.",
      features: [
        "Aumenta temperatura corporal en zona del abdomen",
        "Facilita eliminación de toxinas",
        "Ajuste ceñido y cómodo",
        "Ideal para rutinas de ejercicio",
        "Usar con playera ligera para mejores resultados",
      ],
      sizes: [
        { label: "Unitalla", range: "50-90 kg" },
      ],
      sizeInstruction: "Producto unitalla, se recomienda para personas de 50 a 90 kg.",
      images: [
        "img/sauna-dama-1.jpg",
        "img/sauna-dama-2.jpg",
        "img/sauna-dama-3.jpg",
        "img/sauna-dama-4.jpg",
        "img/sauna-dama-5.jpg",
      ],
      mlUrl: "#", // <-- CAMBIAR
    },
  ],

  // --- RESEÑAS DESTACADAS DE MERCADO LIBRE ---
  reviews: [
    {
      product: "faja-chaleco-hombre",
      rating: 5,
      text: "Excelente calidad, me quedó justo a la medida. Muy reforzado, me encantó que es tipo chaleco de la parte de atrás porque le da soporte a la espalda y hombros. Lo recomiendo mucho, 10 de 10. Excelente compra!!",
      source: "Mercado Libre",
    },
    {
      product: "faja-chaleco-hombre",
      rating: 5,
      text: "Excelente producto buena calidad de materiales, y me quedó a la perfección. Les sugiero que midan su cintura para ver medidas, a mí me quedó y eso que soy un poco más robusto de cuerpo.",
      source: "Mercado Libre",
    },
    {
      product: "faja-chaleco-hombre",
      rating: 5,
      text: "De maravilla lo recomiendo al 100%, es cómodo fácil de ponértelo y me ha ayudado mucho pa mi trabajo que es cargar cosas pesadas, sin dudarlo compre el tuyo a tu medida.",
      source: "Mercado Libre",
    },
    {
      product: "faja-colombiana-largo",
      rating: 5,
      text: "Muy buena calidad, es de tiro alto así que ténganlo a consideración. La talla es justo como aparece en la página.",
      source: "Mercado Libre",
    },
    {
      product: "faja-colombiana-largo",
      rating: 5,
      text: "Está muy padre, la recomiendo. Hace mucha cintura y es duradera, yo la usó todos los días y me ha durado bastante.",
      source: "Mercado Libre",
    },
    {
      product: "faja-colombiana-largo",
      rating: 5,
      text: "Muchas gracias, excelente material. Rápido dejé la talla M y ahora voy por la chica, me ayudó mucho con mi panza caída.",
      source: "Mercado Libre",
    },
    {
      product: "faja-3velcros-dama-largo",
      rating: 5,
      text: "Excelente súper compra muy buena calidad me encantó, abarca bastante bien toda mi zona lumbar y parte del vientre bajo.",
      source: "Mercado Libre",
    },
    {
      product: "chaleco-sauna-hombre",
      rating: 5,
      text: "La calidad y grosor del plástico superó mis expectativas, el elástico es un poco rústico pero en general es de excelente calidad.",
      source: "Mercado Libre",
    },
    {
      product: "chaleco-sauna-hombre",
      rating: 5,
      text: "Se ve resistente, pensé que sería super delgado pero está bien. Soy talla G y me quedó muy bien.",
      source: "Mercado Libre",
    },
    {
      product: "chaleco-sauna-dama",
      rating: 5,
      text: "Estos chalecos me gustan, cuando corro lo uso y es muy durable.",
      source: "Mercado Libre",
    },
  ],

  // --- RESÚMENES IA DE MERCADO LIBRE ---
  aiSummaries: {
    "faja-chaleco-hombre": "La faja ofrece buena calidad y comodidad, ajustándose perfectamente y proporcionando el soporte necesario. Su diseño de chaleco permite una gran diferencia respecto a las fajas convencionales, siendo muy útil para corregir la postura y prevenir dolores de espalda.",
    "faja-colombiana-largo": "La faja ofrece un excelente ajuste y compresión, siendo ideal para el uso diario y el ejercicio. Está fabricada con materiales de alta calidad, proporcionando soporte y durabilidad.",
    "faja-3velcros-dama-largo": "Es muy cómoda y práctica de usar, ajustándose bien al cuerpo y permitiendo libertad de movimiento. Ofrece una excelente compresión que moldea la figura y corrige la postura, siendo ideal para el ejercicio.",
  },
};
