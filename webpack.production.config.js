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
    team: path.join(__dirname, 'src', 'pages', 'team.jsx'),
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
    new HtmlWebpackPlugin({
      title: 'INDEX.HTML',
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'TEAM HTML',
      filename: 'team.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['team'],
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
    // **********
    // Production
    // **********
    // TODO

    // Search for equal or similar files and deduplicate them in the output.
    // This comes with some overhead for the entry chunk, but can reduce file size effectively.
    //
    // new webpack.optimize.DedupePlugin()
    //

    // new CommonsChunkPlugin('commons', 'commons.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
    }),
  ],
};
