export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
      port: process.env.NUXT_ENV_PORT
  },

  head: {
    title: '#Framed in Belarus',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Social art project dedicated to political prisoners in Belarus' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './fav.svg' },
      { rel: 'preconnect', href: "https://fonts.googleapis.com" },
      { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: true },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:wght@400;500;600;700&family=Roboto:wght@400;500&display=swap" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/reset.scss',
    '@/assets/style/general.scss',
  ],

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    // '@nuxtjs/tailwindcss'
  ],

  i18n: {
    baseUrl: 'https://framedinbelarus.net/',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        iso: 'en-EN',
        name: 'ENG'
      },
      // {
      //   code: 'ru',
      //   file: 'ru.json',
      //   iso: 'ru-RU',
      //   name: 'RU'
      // }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en'
  }
}
