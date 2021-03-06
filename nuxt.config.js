import { defineNuxtConfig } from '@nuxt/bridge'
export default defineNuxtConfig ({
  ssr: false,
  head: {
    title: 'nuxt_project_starter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {},
  build: {
  }
})
