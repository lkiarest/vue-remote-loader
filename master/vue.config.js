module.exports = {
  configureWebpack:{
    devtool: 'cheap-source-map',
    externals: {
      vue: 'Vue'
    }
  },
  devServer: {
    proxy: {
      app1: {
        target: 'http://localhost:5000',
        pathRewrite: { '/app1': '' }
      },
      app2: {
        target: 'http://localhost:5002',
        pathRewrite: { '/app2': '' }
      }
    }
  }
}
