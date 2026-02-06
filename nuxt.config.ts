// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  // CSS global
  css: ["~/assets/css/style.css"],

  // IMPORTANTE: GitHub Pages usa /<repo>/
  app: {
    baseURL: "/led-tools-site/",
  },

  // Gera site estático
  nitro: {
    preset: "static",
  },
})
