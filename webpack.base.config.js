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
                ["@babel/preset-env", {
                  modules: false
                }],
                "@babel/react"
              ]
            }
          },
          "eslint-loader"
        ]
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      }, {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      }]
  },

  optimization: {},

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.sass']
  },
}
