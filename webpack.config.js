const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const utility = require('./util');

module.exports = {
  context: path.join(__dirname),
  devtool: 'inline-source-map',
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
      chunks: ['index'],
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      // Options - akin to handlebars.  Referenced via:
      // <%= htmlWebpackPlugin.options.title %>
      title: 'Jordan McArdle\'s Sample React + Redux Application',
    }),
    new ProgressBarPlugin({
      format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }),

    // Assign the module and chunk ids by occurrence count.
    // Ids that are used often get lower (shorter) ids.
    // This make ids predictable, reduces total file size and is recommended.
    //
    // new webpack.optimize.OccurenceOrderPlugin(),
    //
    // This is on by default.
    // new webpack.optimize.OccurrenceOrderPlugin(preferEntry)
    // preferEntry (boolean) give entry chunks higher priority.
    // This make entry chunks smaller but increases the overall size. (recommended)


    // new webpack.optimize.UglifyJsPlugin([options])
    // Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
    // You can pass an object containing UglifyJS options.
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   sourceMap: true,
    // }),

    new webpack.HotModuleReplacementPlugin(),
    // activates HMR

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoErrorsPlugin(),

    // This plugin will allow you to reference environment variables through process.env
    // In your code:
    //
    // var env = process.env.NODE_ENV;
    //
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),

    // allows you to create global constants which can be configured at compile time
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          data: '@import "theme/_config.scss";',
          includePaths: [path.resolve(__dirname, './src')],
          outputStyle: 'expanded',
          sourceMap: true,
        },
        context: path.join(__dirname),
      },
    }),

    // **********
    // Localization
    //
    // TODO
    //
    // Create bundles with translations baked in.
    // Then you can serve the translated bundle to your clients.
    // new I18nPlugin(translations: Object, fnName = "__": String)
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        include: path.join(__dirname, 'src'),
        exclude: [
          /node_modules/,
        ],
      },
      {
        test: /\.json$/,
        use: [
          'json-loader',
        ],
        exclude: [
          /node_modules/,
        ],
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        exclude: [
          /node_modules/,
        ],
        include: [
          path.join(__dirname, 'src/styles'),
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // Style

        // 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]',
              modules: true,
              sourceMap: true,
            },
          },
          // CSS

          'postcss-loader',
          // PostCSS

          {
            loader: 'sass-loader',
            // options: {
            //   data: '@import "theme/_config.scss";',
            //   includePaths: [path.resolve(__dirname, './src')],
            //   outputStyle: 'expanded',
            //   sourceMap: true,
            // },
          },
          // 'sass-loader',
          // SASS
        ],
        exclude: [
          path.join(__dirname, 'src/styles'),
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  // Deprecated in webpack 2
  // sassLoader: {
  //   data: '@import "theme/_config.scss";',
  //   includePaths: [path.resolve(__dirname, './src')],
  // },

  // Deprecated in webpack 2
  // progress: true,
  recordsPath: path.resolve(__dirname, './recordsPath.json'),
  resolve: {
    extensions: [
      // '',
      '.json',
      '.js',
      '.jsx',
    ],
    // These extensions are tried when resolving a file

    descriptionFiles: [
      'package.json',
    ],
    // These JSON files are read in directories

    enforceExtension: false,
    // If false it will also try to use no extension from above

    modules: [
      'src',
      'node_modules',
    ],
    // (was split into `root`, `modulesDirectories` and `fallback` in the old options)
    // In which folders the resolver look for modules
    // relative paths are looked up in every parent folder (like node_modules)
    // absolute paths are looked up directly
    // the order is respected

    moduleExtensions: [
      '-loaders',
    ],
    // These extensions are tried when resolving a module
  },
};
