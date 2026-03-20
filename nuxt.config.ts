// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    devtools: { enabled: false },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Framed in Belarus',
            meta: [
                { property: 'og:image', content: '/main.jpg' },
                { name: 'description', content: 'Framed in Belarus' },
                { name: 'format-detection', content: 'telephone=no' },
                // { name: 'robots', content: 'noindex' }
            ],
            link: [
                { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/fav.svg' },
                { rel: 'apple-touch-icon-precomposed', type: 'image/x-icon', href: '/fav.svg' },
                { rel: 'icon', type: 'image/x-icon', href: '/fav.svg' },
                { rel: 'preconnect', href: "https://fonts.googleapis.com" },
                { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: true },
                { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:wght@400;500;600;700&family=Roboto:wght@400;500&display=swap" }
            ]
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/style/reset.scss',
        '@/assets/style/general.scss',
    ],

    compatibilityDate: '2024-07-05',

    modules: [
        '@nuxt/content',
        '@nuxt/image',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'floating-vue/nuxt',
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
                name: 'RUS'
            },
            {
                code: 'bl',
                file: 'bl.json',
                name: 'BEL'
            }
        ],
        lazy: true,
        defaultLocale: 'en'
    },

    ssr: false
})
