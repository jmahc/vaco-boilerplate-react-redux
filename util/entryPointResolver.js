module.exports = function entryPointResolver(page) {
  return [
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    `./src/pages/${page}.jsx`,
  ];
};
