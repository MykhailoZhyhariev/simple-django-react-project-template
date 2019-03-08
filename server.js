const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.local.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
  }
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) console.log(err);

  console.log('Listening at localhost:3000')
})
