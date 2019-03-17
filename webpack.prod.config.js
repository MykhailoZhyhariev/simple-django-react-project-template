const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const config = require('./webpack.base.config.js');

config.mode = 'production';

config.output.filename = '[name]-[hash].min.js';

config.plugins = config.plugins.concat([
  new MiniCssExtractPlugin({
    filename: '../css/style-[hash].min.css'
  }),

  // removes a lot of debugging code in React
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
  }}),

  new webpack.optimize.OccurrenceOrderPlugin(),

  new BundleTracker({filename: './webpack-stats-production.json'}),
])

// Images
config.module.rules[1].options.outputPath = '../img';

// Fonts
config.module.rules[2].options.outputPath = '../fonts';

config.module.rules.push({
  test: /\.(sa|sc|c)ss$/,
  use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('autoprefixer')({})
          ],
        }
      },
      'sass-loader',
  ]
})

config.optimization.minimizer = [
  new UglifyJsPlugin({
    uglifyOptions: {
      warnings: false,
      ie8: false,
      output: {
        comments: false
      }
    }
  }),
  new OptimizeCSSAssetsPlugin({}),
];

module.exports = config
