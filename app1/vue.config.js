// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  configureWebpack:{
    devtool: 'cheap-source-map',
    watch: true,
    output: {
      // 把子应用打包成 umd 库格式
      library: '__REMOTE_LOADED_APP__',
      filename: 'js/[name].js',
      libraryTarget: 'umd',
      // globalObject: 'this'
    },
    externals: {
      vue: 'Vue'
    },
    plugins: [
      // new BundleAnalyzerPlugin()
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        extractComments: true,
        terserOptions: {
          output: {
            comments: false
          },
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      })]
    }
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
  },
  css: {
    extract: false
  },
  devServer: {
    port: 5000
  }
}
