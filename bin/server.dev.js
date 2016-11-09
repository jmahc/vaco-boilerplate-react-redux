// Node Modules
const express = require('express');
const ip = require('ip');
const open = require('open');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// Local files
const api = require('../api');
const config = require('../webpack.config');
const logger = require('./logger');

// Instantiate the express server
const app = express();
// Utilize Webpack's configuration settings for development
const compiler = webpack(config);

const port = process.env.PORT || 3000;
const root = `${process.cwd()}/static/`;
global.__DEVELOPMENT__ = true;
const urlLocation = `http://localhost:${port}`;

app.use(require('morgan')('short'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  inline: true,
  contentBase: root,
  lazy: false,
  publicPath: '/',
  noInfo: true,
  historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10,
}));

app.use('/api/', api);
app.use(express.static(root));
// app.use(fallback('index.html', { root: root }))

app.listen(port, () => {
  logger(ip, port, urlLocation);
  open(urlLocation); // Opens the site with your default web browser
});
