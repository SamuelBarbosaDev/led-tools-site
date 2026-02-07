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
    head: {
      title: "Led Tools — Qualidade e preço justo",
      link: [
        { rel: "icon", type: "image/x-icon", href: "favicon.ico" }
      ],
      meta: [
        {
          name: "description",
          content: "Ferramentas, cadeiras, jardinagem e iluminação com qualidade e entrega rápida."
        }
      ]
    }
  },

  // Gera site estático
  nitro: {
    preset: "static",
  },
})
