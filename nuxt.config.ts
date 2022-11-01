import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Framed in Belarus',
            meta: [
                { name: 'description', content: 'Framed in Belarus' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'robots', content: 'noindex' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: './assets/media/fav.svg' }
            ]
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/style/reset.scss',
        '@/assets/style/fonts.scss',
        '@/assets/style/general.scss',
    ],

    modules: [
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        // '@nuxtjs/tailwindcss'
    ],

    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.json',
                name: 'ENG'
            },
            {
                code: 'ru',
                file: 'ru.json',
                name: 'RU'
            }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en'
    }
})
