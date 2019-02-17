const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
      },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.svg$/, loader: 'svg-inline-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  resolve: {
    modules: [
      path.resolve('./scss'),
      path.resolve('./node_modules'),
      path.resolve('./components'),
      path.resolve('./img'),
      path.resolve('./common')
    ]
  },
}