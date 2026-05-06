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
                { name: 'description', content: 'Framed in Belarus is a participatory art project by Rufina Bazlova that brings together people around the world to create embroidered stories of Belarusian political prisoners and build an archive of solidarity.' },
                { name: 'keywords', content: '#FramedinBelarus, Framed in Belarus, Rufina Bazlova, participatory art project, embroidery art, political embroidery, Belarusian political prisoners, textile activism, socially engaged art, contemporary Belarusian art, craftivism, solidarity network, human rights, cultural memory, social impact' },
                { property: 'og:description', content: '#FramedinBelarus is a participatory art project by Rufina Bazlova, creating embroidered stories of Belarusian political prisoners and a growing archive of solidarity.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'Framed in Belarus' },
                { property: 'og:image', content: '/main.jpg' },
                { name: 'format-detection', content: 'telephone=no' },
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
        '@nuxtjs/sitemap',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'floating-vue/nuxt',
    ],

    i18n: {
        baseUrl: 'https://framedinbelarus.net',
        locales: [
            {
                code: 'en',
                file: 'en.json',
                name: 'ENG',
                language: 'en-UK'
            },
            {
                code: 'ru',
                file: 'ru.json',
                name: 'RUS',
                language: 'ru-RU'
            },
            {
                code: 'bl',
                file: 'bl.json',
                name: 'BEL',
                language: 'be-BY'
            }
        ],
        lazy: true,
        defaultLocale: 'en'
    },

    site: { 
        url: 'https://framedinbelarus.net', 
        name: 'Framed in Belarus' 
    }, 

    sitemap: {
        sources: ['/api/__sitemap__/urls'],
        exclude: [
            '/AboutUs',
            '/Corrections',
            '/Embroidery/**',
            '/Feedback',
            '/NotReady',
            '/Profile',
            '/SignIn',
            '/SignUp',
            '/VerifyEmail',
        ],
        cacheMaxAgeSeconds: 3600, // rebuild at most once per hour
        i18n: true,  // auto-adds hreflang for your 3 locales
    },

    ssr: false
})
