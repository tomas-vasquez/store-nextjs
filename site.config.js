const apiUrl = process.env.API_URL || "http://localhost:3001";

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

const socialIcons = [
  {
    id: 0,
    icon: "github",
    url: "https://github.com/tomasdetloging",
  },
  {
    id: 356,
    icon: "youtube",
    url: "https://www.facebook.com/tomasdetloging",
  },
  {
    id: 3,
    icon: "linkedin",
    url: "https://www.linkedin.com/in/tomasdetloging/",
  },
  {
    id: 2,
    icon: "instagram",
    url: "https://www.instagram.com/tomasdetloging/",
  },
  {
    id: 4,
    icon: "twitter",
    url: "https://www.twitter.com/tomasdetloging/",
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
      title: "Inicio",
      url: "/",
    },
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Inicio",
      url: "/",
    },
  ],
  newsLetterTitle: "NewsLetter",
  newsLetterText: "Registrate y recive las ultimas novedades por tu correo.",
};

module.exports = {
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
  socialIcons,
  siteMetadata,

  footer,
  search,
};
