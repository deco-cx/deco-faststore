
module.exports = {
  seo: {
  "title": "deco.cx + FastStore",
  "description": "A fast and performant store framework with a visual editor",
  "titleTemplate": "%s | deco.cx + FastStore",
  "author": "deco.cx"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "decopartnerbr",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://decopartnerbr.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/vestu%C3%A1rio",
    search: "/s?q=Deco",
    pdp: "/camisa-polo/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/camisa-polo/p",
      collection: "/vestu%C3%A1rio",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/camisa-polo/p",
      collection: "/vestu%C3%A1rio",
      collection_filtered: "/vestu%C3%A1rio/?category-1=vestu%C3%A1rio&brand=Deco&facets=category-1%2Cbrand%27",
      search: "/s?q=Deco",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://decopartnerbr.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
