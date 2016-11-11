const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      }, {
        test: /\.json$/,
        loader: 'json',
      }, {
        test: /\.css/,
        loaders: ['style', 'css'],
      }, {
        test: /\.scss/,
        loaders: [
          'style',
          'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
          'postcss',
          'sass?outputStyle=expanded&sourceMap',
        ],
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file',
      },
    ],
  },
  postcss: {
    plugins: [autoprefixer({ browsers: ['last 2 versions'] })],
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
