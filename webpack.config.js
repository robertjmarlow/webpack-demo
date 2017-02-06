var webpack = require('webpack');

module.exports = {
  entry: [
    // app: ['webpack/hot/dev-server', './src/js/main.js'],
    './src/js/main.js'
  ],

  output: {
  //   path: './public/built',
  //   filename: 'bundle.js',
  //   publicPath: 'http://localhost:8081/built/'
    filename: 'bundle.js',
    path: './public/built'
  },



  // devServer: {
  //   contentBase: './public',
  //   publicPath: 'http://localhost:8081/built/',
  //   port: 8081
  // },

  // enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    extensions: ['.js']
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=built/img/[name].[ext]" }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
