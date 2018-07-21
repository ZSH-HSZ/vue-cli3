module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/static/style.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.10.222:58080/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },
  }
}