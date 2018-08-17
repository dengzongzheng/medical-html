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
    ],
    script: [
      { src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8'}
    ],

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
    },postcss: [
      require('postcss-px2rem')({
        remUnit: 75 // 转换基本单位
      })
    ],
    vendor: ['mint-ui','axios','~/services/xhr/config'],
    css: [
      'mint-ui/lib/style.min.css', // 全部引用的时候需要用到
      'assets/css/main.css'
    ]
  },
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  plugins:[{src:'~/plugins/mint-ui',ssr:false}]
}

