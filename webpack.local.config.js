const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');


const config = require('./webpack.base.config.js');

config.mode = 'development';

config.watch = true;

config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './app/frontend/js/main',
];

config.output.publicPath = 'http://localhost:3000/static/';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),

  new webpack.NamedModulesPlugin(),

  new webpack.NoEmitOnErrorsPlugin(),

  new BundleTracker({filename: './webpack-stats.json'}),
]);

config.module.rules.push({
  test: /\.(sa|sc|c)ss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader',
  ]
});

module.exports = config;
