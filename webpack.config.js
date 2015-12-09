var webpack = require('webpack')

module.exports = {
  entry: './src/route.js',
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.(css|styl)$/,
        loader: 'style!css!stylus'
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'file?name=[name].[ext]?[hash]'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devServer: {
    proxy: {
      '/api/*': 'http://101.200.177.95:8001'
    }
  }
}
