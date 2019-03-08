const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');


module.exports = {
  context: __dirname,

  entry: './app/frontend/js/main.js',

  mode: 'development',

  output: {
      path: path.resolve('./app/static/js/'),
      filename: '[name]-[hash].js'
  },

  plugins: [],

  module: {
    rules: [{
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/env",
                "@babel/react"
              ]
            }
          }
        ]
      }]
  },

  optimization: {},

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.sass']
  },
}
