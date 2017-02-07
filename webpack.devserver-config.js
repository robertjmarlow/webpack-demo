var webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/main.js'
  ],

  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/',
    path: __dirname + '/public/built'
  },

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
