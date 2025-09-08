// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    alias: {
        "@": '../client'
    },
    dir: {
        pages: './client/pages',
        layouts: './client/app/layouts',
    }
})
