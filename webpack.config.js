require('react-hot-loader/patch');
const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const utility = require('./util');

module.exports = {
  context: path.join(__dirname),
  devtool: '#source-map',
  entry: {
    index: utility.entryPoint('index'),
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle-[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jordan McArdle\'s Sample React + Redux Application',
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['index'],
    }),
    new ProgressBarPlugin({
      format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),

    // activates HMR
    new webpack.HotModuleReplacementPlugin(),

    // Enables Hot Module Replacement.
    //  -- (This requires records data if not in dev-server mode, recordsPath)
    // Generates Hot Update Chunks of each chunk in the records.
    //  -- It also enables the API and makes __webpack_hash__ available in the bundle.
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),

    // allows you to create global constants which can be configured at compile time
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
      },
      // Imported SASS files that do NOT need to be modularized.
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
        exclude: [/node_modules/],
        include: [path.join(__dirname, 'src/styles')],
      },
      // This imports and 'css'-modularizes all code (with unique hashed names).
      // `styles` directory is ignored because those classnames must be specific & not hashed.
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
          'postcss',
          'sass?outputStyle=expanded&sourceMap',
        ],
        exclude: [path.join(__dirname, 'src/styles')],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file',
      },
    ],
  },

  sassLoader: {
    data: '@import "theme/_config.scss";',
    includePaths: [path.resolve(__dirname, './src')],
  },

  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    extensions: ['', '.json', '.js', '.jsx'],
  },
};
