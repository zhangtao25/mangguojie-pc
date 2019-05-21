let proxyTarget = '';
if (process.env.NODE_ENV === 'development'){
  proxyTarget = 'http://localhost:3000'
} else {
  proxyTarget = 'http://101.132.46.146:3000'
}
console.log('111')

module.exports = {
  publicPath: '/',
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: proxyTarget,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
