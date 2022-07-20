export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  /*router: {
    base: './'
  },*/

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
  },

  image: {
    domains: ['http://localhost:3000']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-lazysizes.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    // Nuxt Image module https://image.nuxtjs.org/components/nuxt-img
    /*['@nuxt/image', {
      provider: 'static',
      dir: "assets/images",
    }],*/

    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',

    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    'vue-scrollto/nuxt',
    '@nuxtjs/redirect-module'
  ],

  redirect: [
    { from: '/en/', to:'/en', statusCode: 301 },
    { from: '/ru/', to:'/ru', statusCode: 301 },
    { from: '/uk/', to:'/uk', statusCode: 301 },
    { from: '/ja/', to:'/ja', statusCode: 301 },
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.js'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru-RU.js'
      },
      {
        code: 'uk',
        iso: 'uk-UA',
        name: 'Українська',
        file: 'uk-UA.js'
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        name: '日本語',
        file: 'ja-JP.js'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    langDir: '~/locales/',
  },

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    pngquant: {
      quality: [0.7, 0.8]
    },
    webp: {
      quality: 75
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '/'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: './_nuxt/',
    extend (config, { isDev, isClient, loaders: { vue } }) {
      vue.transformAssetUrls.img = ['data-src', 'src']
      vue.transformAssetUrls.source = ['data-srcset', 'srcset']
    }
  },

  watch: [
    '~/tailwind.config.js',
    '~/assets/images/*',
    '~/assets/images/**/*'
  ]
}
