// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-directus', '@nuxtjs/strapi', '@nuxtjs/tailwindcss'],
  strapi: {
    url: process.env.NUXT_PUBLIC_STRAPI_URL
  }
})
