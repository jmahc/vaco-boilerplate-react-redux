const port = process.env.PORT || 3000;

module.exports = function entryPointResolver(page) {
  return [
    'react-hot-loader/patch',
    // activate HMR for React
    // should be first in the entries array after upgrade from 1.3 -> 3.0.0@beta

    'babel-polyfill',

    // 'eventsource-polyfill', // necessary for hot reloading with IE

    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // Options:
    // path - The path which the middleware is serving the event stream on
    // timeout - The time to wait after a disconnection before attempting to reconnect (ms)
    // overlay - Set to `false` to disable the DOM-based client-side overlay.
    // reload - Set to `true` to auto-reload the page when webpack gets stuck.
    // noInfo - Set to `true` to disable informational console logging.
    // quiet - Set to `true` to disable all console logging.
    // dynamicPublicPath - Set to `true` to use webpack publicPath as prefix of path.
    //    (We can set __webpack_public_path__ dynamically at runtime in the entry point,
    //    see note of output.publicPath)
    `webpack-hot-middleware/client?noInfo=false&quiet=false&reload=true&timeout=2000&path=http://localhost:${port}/__webpack_hmr`,

    'vaco-components-library/lib/commons.scss', // include commons SASS on each page
    // NOTE:
    // removed from `pages/index.jsx` => `import 'vaco-components-library...'`;

    './src/styles/grid/all.scss', // include MDL's grid on each page (PurifyCSS removes if unused).

    `./src/pages/${page}.jsx`, // The application's entry point
  ];
};
