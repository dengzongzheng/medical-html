module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '卫生监督',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '中国卫生监督' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#59cc93' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['mint-ui'],
    css: [
      'mint-ui/lib/style.min.css', // 全部引用的时候需要用到
      'assets/css/main.css'
    ]
  },
  plugins:[{src:'~/plugins/mint-ui'}]
}

