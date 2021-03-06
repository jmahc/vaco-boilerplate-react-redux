module.exports = function entryPointResolver(page) {
  return [
    'react-hot-loader/patch',
    // activate HMR for React
    // should be first in the entries array after upgrade from 1.3 -> 3.0.0@beta

    'babel-polyfill',

    'eventsource-polyfill', // necessary for hot reloading with IE

    'webpack-hot-middleware/client?path=/__webpack_hmr',

    './src/styles/grid/all.scss', // include MDL's grid on each page (PurifyCSS removes if unused).

    `./src/pages/${page}.jsx`,
  ];
};
