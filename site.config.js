const siteMetadata = {
  title: "Electronicos",
  author: {
    name: "Tomas Vasquez",
    summary: "who works building clean user interfaces with React.",
  },
  description: "A blog created with Next.js and Tailwind.css",
  siteUrl: "https://nextjs-starter-blog-demo.netlify.app/",
  language: "es-ES",
  social: {
    twitter: "tomasdetloging",
  },
};

const navbar = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Favoritos",
    url: "/whiteList",
  },
  {
    title: "Buscar...",
    url: "/search?word=Arduino",
  },
  {
    title: "Preguntas frecuentes",
    url: "/content/preguntas",
  },
  {
    title: "Acerca de...",
    url: "/content/about",
  },
];
const banner = [
  {
    title: "🚀 ¡haz realidad tu proyecto! 🚀",
    text: "Transforma tus ideas en realidad con la plataforma líder en electrónica DIY. En nuestra tienda, encontrarás todo lo que necesitas para tus proyectos Arduino:",
    imageUrl: "/5035199.jpg",
    bottomText: "Empieza con lo basico",
    bottomUrl: "/placas/arduino",
  },
  {
    title: "🔧 Componentes de Calidad 🔧",
    text: "Desde placas Arduino hasta sensores y actuadores, ofrecemos una amplia gama de componentes confiables.",
    imageUrl: "/3793117.jpg",
    bottomText: "Empieza con lo basico",
    bottomUrl: "/placas/arduino",
  },
  {
    title: "🏍️ ¡Envío Rápido! 🏍️",
    text: "Recibe tus componentes Arduino directamente en tu puerta.",
    imageUrl: "/8841406.jpg",
    bottomText: "Descubre mas acerca",
    bottomUrl: "/content/envio",
  },
  {
    title: "👩‍💻 Asesoramiento 👩‍💻",
    text: "Nuestro equipo de expertos está listo para ayudarte en cada paso del camino. ¿Tienes preguntas? ¡Estamos aquí para responderlas!",
    imageUrl: "/5124556.jpg",
    bottomText: "Descubre mas acerca",
    bottomUrl: "/content/envio",
  },
];

const search = {
  title: "Resultados de la busqueda",
  searchPlaceholder: "Buscar...",
  labelResults: "resultados:",
};

const footer = {
  aboutText: "Comprometidos en darte el mejor contenido gratuito de internet.",
  LinksTitle: "Enlaces",
  links: [
    {
      title: "Acerca de nosotros",
      url: "/content/about",
    },
    {
      title: "Servicio de envio",
      url: "/content/envio",
    },
    {
      title: "Preguntas frecuentes",
      url: "/content/terminos-condiciones",
    },
    {
      title: "Politica de privacidad",
      url: "/content/politica-privacidad",
    },
    {
      title: "Terminos y condiciones",
      url: "/content/terminos-condiciones",
    },
  ],
  newsLetterTitle: "NewsLetter",
  newsLetterText: "Registrate y recive las ultimas novedades por tu correo.",
};

module.exports = {
  navbar,
  banner,
  contact: {
    email: "tomasdetloging@gmail.com",
    phone: "(+591) 60008852",
  },
  exchangeRates: [
    {
      type: "USD",
      country: "UUEE",
    },
    {
      type: "BS",
      country: "Bolivia",
    },
  ],

  currentExchangeRateIndex: 1,

  shippingCost: [
    {
      amount: 77,
      type: "BS",
    },
    {
      amount: 11,
      type: "USD",
    },
  ],
  siteMetadata,
  footer,
  search,
};
