const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    index: path.join(__dirname, 'src', 'pages', 'index.jsx'),
    about: path.join(__dirname, 'src', 'pages', 'about.jsx'),
  },
  output: {
    path: path.join(__dirname, '/tmp/public'),
    filename: '[name]-[hash].js',
    sourceMapFilename: '[name].js',
    publicPath: './',
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      }, {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss!sass'
        ),
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

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, 'public', 'index.html'),
    // }),
    new HtmlWebpackPlugin({
      title: 'Welcome To the VACO React/Redux Starter',
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'About Us',
      filename: 'about.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['about'],
    }),
    new PurifyCSSPlugin({
      basePath: process.cwd(),
      paths: [path.join(__dirname, 'src')],
      purifyOptions: {
        minify: false,
        info: false,
        rejected: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
    }),
  ],
};
