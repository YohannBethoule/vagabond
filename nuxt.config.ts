// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-svgo'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_colors.scss" as *;'
        }
      }
    }
  },
  css: [
    'normalize.css/normalize.css'
  ],
  runtimeConfig: {
    public: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" }
      ]
    }
  },
})
