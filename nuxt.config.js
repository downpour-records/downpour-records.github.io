export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  /*router: {
    base: './'
  },*/

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Downpour Records - Official label website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Downpour Records label. We provide a range of services for the creation of original musical projects: studio mixing, mastering and distribution.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileImage', content: '/favicon-270x270-min.png' }
    ],
    /*script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
      }
    ],*/
    link: [
      { rel: 'icon', sizes: "16x16", href: '/favicon-16x16-min.png' },
      { rel: 'icon', sizes: "32x32", href: '/favicon-32x32-min.png' },
      { rel: 'icon', sizes: "192x192", href: '/favicon-192x192-min.png' },
      { rel: 'icon', sizes: "512x512", href: '/favicon-512x512-min.png' },
      { rel: 'apple-touch-icon', href: '/favicon-180x180-min.png' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: ''
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
      }
    ],
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
  ],

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
      quality: [0.65, 0.8]
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
