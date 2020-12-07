import webpack from 'webpack'

export default {
  target: 'static',
  ssr: true,
  head: {
    htmlAttrs: {
      lang: process.env.NUXT_LOCALE,
      dir: ['fa', 'ar', 'he'].includes(process.env.NUXT_LOCALE) ? 'rtl' : 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'NuxtJS' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'NuxtJS'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css'
      }
    ],
    bodyAttrs: {
      class: [
        'font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear'
      ]
    }
  },
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    // Disabled, waiting for https://github.com/nuxt-community/eslint-module/pull/46 to be released
    // '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/netlify-files-module
    '@nuxtjs/netlify-files',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/Atinux/nuxt-tailwindcss/
    '@nuxtjs/tailwindcss',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa'
  ],
  modules: [
    '~/modules/releases',
    '@nuxt/http',
    '@nuxt/content',
    'nuxt-i18n',
    'vue-scrollto/nuxt'
  ],

  pwa: {
    manifest: {
      name: 'NhonNguyenDev'
    }
  },

  // Auto import components, see https://github.com/nuxt/components
  components: true,
  colorMode: {
    preference: 'light' // disable system
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  css: ['~/assets/css/main.scss'],
  plugins: [
    '~/plugins/i18n',
    '~/plugins/directives',
    '~/plugins/intersection-observer.client.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/vue-scrollactive'
  ],
  env: {
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL || false,
    URL: process.env.URL || false,
    DOC_SEARCH_API_KEY:
      process.env.DOC_SEARCH_API_KEY || '796eb8959922e227f34887a20b77509d',
    NUXT_API: process.env.NUXT_API || 'https://api.nuxtjs.com'
  },
  publicRuntimeConfig: {
    nuxtLocale: process.env.NUXT_LOCALE || 'vi',
    nuxtVersion: '2.14.7',
    nuxtStars: '32K+'
  },
  loading: { color: '#41B883' },
  generate: {
    fallback: false,
    routes: ['/', '404']
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'vi',
        iso: 'vi-VN',
        file: 'vi-VN.js',
        name: 'Tiếng Việt',
        domain: 'https://nuxtjs.org'
      }
    ],
    vueI18n: {
      fallbackLocale: 'vi'
    },
    defaultLocale: 'vi',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/'
  },
  build: {
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    ]
  },
  hooks: {
    'content:file:beforeInsert': item => {
      const stats = require('reading-time')(item.text)

      item.readingTime = stats
    }
  }
}
