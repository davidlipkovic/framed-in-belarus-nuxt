import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // server: {
    //     port: process.env.NUXT_ENV_PORT
    // },

    head: {
        title: 'Framed in Belarus',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Framed in Belarus' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/atelier_animace_fav.png' }
        ]
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
