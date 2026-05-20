// Centralized site config. Swap API_BASE_URL when wiring Laravel.
export const SITE = {
  name: "THE  STUDIO",
  tagline: "We craft brands that move.",
  email: "hello@lumenco.agency",
  phone: "+1 (415) 555-0142",
  address: "Studio 4, 21 Foundry Lane, San Francisco",
  whatsapp: "01014780569",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    behance: "https://behance.net",
  },
};
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "/api";
