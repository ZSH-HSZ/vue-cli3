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
        target: 'http://localhost:3001/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },
  }
}