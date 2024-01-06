// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'nuxt-svgo',
        ['@nuxtjs/google-fonts', {
            families: {
                'Cormorant Garamond': {wght: '300..700', ital: '300..700'},
                download: true,
                inject: true
            }
        }]
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/main.scss" as *;'
                }
            }
        }
    },
    css: [
        'normalize.css/normalize.css'
    ],
    postcss: {
        plugins: {
            cssnano:
                process.env.NODE_ENV === 'production'
                    ? {preset: ['default', {discardComments: {removeAll: true}}]}
                    : false, // disable cssnano when not in production
        },
    },
    runtimeConfig: {
        public: {
            googleApiKey: process.env.GOOGLE_API_KEY,
        },
    },
    app: {
        head: {
            title: 'Vagabond Festival',
            meta: [
                {
                    name: 'description',
                    content: 'Vagabond is a European festival that aims to change travel habits. By creating a space for exchange around \'Vagabond\' experiences, it allows for the rediscovery of mobility, inspires, and leads towards more responsible practices. It encourages taking the time to live new experiences.'
                }
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {rel: "icon", type: "image/png", href: "/favicon.png"}
            ]
        }
    },
})
