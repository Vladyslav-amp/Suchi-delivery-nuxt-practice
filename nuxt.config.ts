// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/base.scss";',
        },
      },
    },
  },
  app: {
    head: {
      title: 'Suchi Run | Delivery',
      meta: [
        // og tags
        { property: 'og:title', content: 'Suchi Run | Delivery' },
        { property: 'og:site_name', content: 'Suchi Run | Delivery' },
        { property: 'og:description', content: 'Suchi Delivery' },
        { property: 'og:type', content: 'restaurant.menu' },

        // favicon
        { name: 'msapplication-TileColor', content: '#f2bb2d' },
        { name: 'theme-color', content: '#f2bb2d' },
      ],

      link: [
        // favicon
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: './favicon.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          href: './favicon.png',
          color: '#f2bb2d',
        },
      ],
     
      htmlAttrs: {
        // og tags
        prefix: 'og: http://ogp.me/ns#'
      },

    },

    baseURL: '/suchi-delivery-nuxt-practice/',
    buildAssetsDir: 'assets',
  }
})
