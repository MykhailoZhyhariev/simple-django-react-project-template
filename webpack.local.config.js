const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = require('./webpack.base.config.js');

config.mode = 'development';

config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './app/frontend/js/main',
];

config.output.publicPath = 'http://localhost:3000/static/';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new BundleTracker({filename: './webpack-stats.json'}),
  new ExtractTextPlugin('./app/css/style.css'),
]);

config.module.rules.push({
  test: /\.(sa|sc|c)ss$/,
  use: ExtractTextPlugin.extract({
    publicPath: 'http://127.0.0.1:8000/',
    fallback: 'style-loader',
    use: [
      'css-loader',
      'sass-loader',
    ]
  })
});

module.exports = config;
