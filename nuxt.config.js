export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '程序员98K | 分享记录日常技术问题',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' },
      { name: 'renderer', content: 'webkit' },
      {
        hid: 'description',
        name: 'description',
        content: '程序员AK47'
      }
    ],
    link: [
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_1660213_2mui7ez7rpx.css' },
      { rel: 'bookmark', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#009a61' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/global.scss',
    '@/assets/responsive.scss',
    '@/assets/markdown.css',
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vue-lazyload'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    analyze: false,
    babel: {
      'plugins': [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    },
    extend(config, { isClient }) {
      // if (isClient) {
      //   console.log(config.optimization)
      //   Object.assign(config.optimization.splitChunks.cacheGroups,
      //     config.optimization.splitChunks.cacheGroups, 
      //   {
      //     elementui: {
      //       test: /node_modules[\\/]element-ui/,
      //       chunks: 'all',
      //       priority: 20,
      //       name: true
      //     }
      //   })
      //   console.log(config.optimization)
      // }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  router: {
    middleware: 'page'
  }
}
