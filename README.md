# vaco-spa-boilerplate
V. Alexander's boilerplate project for creating single-page applications utilizing ReactJS, Redux, Webpack with hot module reloading, and Mocha/Chai/Enzyme for testing.

---

## Getting Started
1. First things first - install your dependencies!
```bash
npm install
```
2. Run your development environment
```bash
npm run start
```
**OR**
```bash
npm run dev
```
3. Build your projectf for production
```bash
npm run build
```
4. Start your API (not really necessary...)
```bash
npm run dev:api
```

---

## To-Do's
 - sass-lint?
 - type checker? (babel may handle this)
 - .dll caching for node_modules (reference project toolbox-1)
 - file-dir-cache to cache loaded modules?

---

### Dependencies (Explained)
NOTE: These are not up to date as of 11.09.2016 compared to the `package.json` file.
#### axios - v0.15.2
Promise based HTTP client for the browser and node.js

Features:
 - Make XMLHttpRequests from the browser
 - Make http requests from node.js
 - Supports the Promise API
 - Intercept request and response
 - Transform request and response data
 - Cancel requests
 - Automatic transforms for JSON data
 - Client side support for protecting against XSRF

#### babel-polyfill - v6.16.0
Usage in Node / Browserify / Webpack:
- To include the polyfill you need to require it at the top of the entry point to your application.
```js
  require("babel-polyfill");
```

#### chalk - v1.1.3
Terminal string styling done right. Much color.

#### compression - v1.6.2
For gzipping or compressing files in middlewares.

#### cross-env - v3.1.3
Allows users to set environment variables using a Unix style,
```sh
NODE_ENV=development
```
without having to worry about a specific OS. (Works on Windows, Linux, macOS, etc.)

#### express - v4.14.0
Server implementation.

#### immutable - v3.8.1
- *Immutable* data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic.
- *Persistent* data presents a mutative API which does not update the data in-place, but instead always yields new updated data.

#### invariant - v2.2.1
```sh
var invariant = require('invariant');

invariant(someTruthyVal, 'This will not throw');
// No errors

invariant(someFalseyVal, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
```

*Note*: When `process.env.NODE_ENV` is not **production**, the message is required. If omitted, invariant will throw regardless of the truthiness of the condition. When `process.env.NODE_ENV` is **production**, the message is optional – so they can be minified away.

#### ip - 1.1.3
IP address utilities for `node.js` that allows you to get your ip address, compare ip addresses, validate ip addresses, etc.

#### lodash - v4.16.4
The (Lodash)[https://lodash.com/] library exported as Node.js modules.

#### minimist - v1.2.0
Let's the user use `import` in ALL `.js` files similar to how `webpack` handles it.

#### react - v15.3.2
React is a JavaScript library for building user interfaces.

#### react-addons-update - v15.3.2
Reference: https://facebook.github.io/react/docs/update.html

#### react-dom - v15.3.2
This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.

#### react-redux - v4.4.5
Official React bindings for Redux

#### react-router - v3.0.0
A complete routing library for React.

React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.

#### redux - v3.6.0
Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

#### redux-logger - v2.7.4
Logger middleware for Redux.

#### redux-thunk - v2.1.0
Thunk middleware for Redux.
Read more here: http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

#### sanitize.css - v4.1.0
The best-practices alternative to CSS resets.

#### vaco-components-library - v1.0.0
React Toolbox  was the basis for V. Alexander's component library. It is a set of React components that implement Google's Material Design specification. It's powered by CSS Modules and harmoniously integrates with your webpack workflow, although you can use any other module bundler. You can take a tour through our documentation website and try the components live!

### Developer Dependencies (Explained)
#### autoprefixer - v6.5.1
Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website. A postcss plugin.

#### babel-cli - v6.16.0
Babel command line.

#### babel-core - v6.16.0
Babel compiler core.

#### babel-eslint - v7.0.0
Allows you to lint *ALL* valid Babel code with the fantastic ESLint.

*Note*: You don't need to use `babel-eslint` if you are only using ES6/ES2015. ESLint actually supports ES6/ES7, JSX, and object rest/spread by default now.

At the moment, you'll need it if you use stuff like class properties, decorators, async/await, types.

#### babel-loader - v6.2.5
Babel module loader for webpack. This package allows transpiling JavaScript files using Babel and webpack.

#### babel-plugin-react-transform - v2.0.2
Babel plugin to instrument React components with custom transforms now with Babel 6 support. The (website)[https://www.npmjs.com/package/babel-plugin-react-transform] has more explanation.

#### babel-plugin-transform-react-jsx - v6.8.0
In:
```js
var profile = <div>
  <img src="avatar.png" className="profile" />
  <h3>{[user.firstName, user.lastName].join(' ')}</h3>
</div>;
```
Out:
```js
var profile = React.createElement("div", null,
  React.createElement("img", { src: "avatar.png", className: "profile" }),
  React.createElement("h3", null, [user.firstName, user.lastName].join(" "))
);
```

#### babel-plugin-transform-runtime - v6.15.0
Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals

Babel also bakes a number of smaller helpers directly into your compiled code. This is OK for single files, but when bundling with Webpack, repeated code will result in a heavier file size. It is possible to replace these helpers with calls to the babel-runtime package by adding the transform-runtime plugin

#### babel-preset-es2015 - v6.16.0
Babel preset for all es2015 plugins.

#### babel-preset-react - v6.16.0
Babel preset for all React plugins.

#### babel-preset-stage-0 - v6.16.0
Babel preset for stage 0 plugins

#### babel-register - v6.18.0
babel require hook that includes all babel components

#### case-sensitive-paths-webpack-plugin - v1.1.4
Enforces module path case sensitivity in Webpack.

This Webpack plugin enforces the entire path of all required modules match the exact case of the actual path on disk. Using this plugin helps alleviate cases where developers working on OSX, which does not follow strict path case sensitivity, will cause conflicts with other developers or build boxes running other operating systems which require correctly cased paths.

#### chai - v3.5.0
- BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

#### classnames - v2.2.5
A simple utility for conditionally joining classNames together.

Usage:
```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

#### cli-spinner - v0.2.5
Spinning icons within the terminal while something loads

#### cli-table2 - v0.2.0
Pretty unicode tables for the command line. Based on the original cli-table.
This styles the terminal when launching the application.

#### copy-webpack-plugin - v4.0.0
This is a webpack plugin that copies individual files or entire directories to the build directory.

#### cpx - v1.5.0
Copy file globs, watching for changes.

This module provides a CLI tool like cp, but with watching.

#### css-loader - v0.25.0
css loader module for `webpack`.

#### del - 2.2.2
Delete files and folders.
Pretty much rimraf with a Promise API and support for multiple files and globbing. It also protects you against deleting the current working directory and above.

#### dotenv - v2.0.0
- Loads environment variables from `.env` file.
- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on (The Twelve-Factor App)[http://12factor.net/config] methodology.

#### enzyme - v2.5.1
Tests our containers for components.

#### eslint - v3.8.1
An AST-based pattern checker for JavaScript.

#### eslint-config-airbnb - v12.0.0
Airbnb's ESLint config, following our styleguide.

#### eslint-plugin-babel - v3.3.0
An eslint rule plugin companion to `babel-eslint`.

#### eslint-plugin-import - v1.16.0
This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.

**NOTE**: The current version as of README.MD's {CREATION_DATE} us v2.0.1 but the peer dependency from eslint-config-airbnb@12.0.0 requires a dependency of '^1.16.0'

#### eslint-plugin-jsx-a11y - v2.2.3
A static analysis linter of `.jsx` and their accessibility with screen readers.

#### eslint-plugin-react - v6.4.1
React specific linting rules for ESLint

#### extract-text-webpack-plugin - v1.0.1
Extract text from bundle into a file.

#### file-loader - v0.9.0
File loader module for `webpack`

#### find-cache-dir - v0.1.1
Finds the common standard cache directory.

#### html-webpack-plugin - v2.22.0
This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.

Basic Usage
```js
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
```

#### immutability-helper - v2.0.0
Mutate a copy of data without changing the original source.

#### internal-ip - v1.2.0
Get your internal IPv4 or IPv6 address.

#### instanbul - v0.4.5
Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests

#### json-loader - v0.5.4
json loader module for webpack
Allows you to `module.export` json and load it in :)

#### mocha - v3.1.2
Simple, flexible, fun test framework. Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser. For more information view the documentation.

#### mocha-html-reporter - v0.0.1
HTML reporter for Mocha. Create html fragment with mocha-html-reporter and add head and tail.

#### node-emoji  - v1.4.1
Allows to use emoji's in NodeJS - specifically, the terminal!

#### node-sass - v3.10.1
Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.

#### normalize.css - v5.0.0
A modern alternative to CSS resets.

#### object-assign - v4.1.0
- ES2015 Object.assign() ponyfill
- Ponyfill: A polyfill that doesn't overwrite the native method

#### ora - v0.3.0
Elegant terminal spinner.
```js
const ora = require('ora');
const spinner = ora('Loading unicorns').start();
setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 1000);
```

#### postcss-loader - v1.0.0
PostCSS loader for webpack.

**postcss.config.js**
```js
module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer')
  ]
}
```

**Webpack 1.x Config**
```js
module.exports = {
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer')
    ];
  }
}
```

#### postcss-load-config - v1.0.0-rc
Autoload Config for PostCSS.
Create `.postcssrc` file in project root.

**Order**
Plugin order is determined by declaration in the plugins section.
```js
{
  plugins: {
    'postcss-plugin': {}, // plugins[0]
    'postcss-plugin': {}, // plugins[1]
    'postcss-plugin': {}  // plugins[2]
  }
}
```

**Webpack usage**
```js
module.exports = (env) => {
  module: {
    rules: [
      {
        test: /\.css$/
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 } }
          },
          'postcss-loader'
        ]
      }
    ]
  }
}
```

Create a .postcssrc file to store your postcss configurations.

```
App
  |– client
  |– public
  |
  |-.postcssrc
  |- package.json
```
```
{
  "parser": "sugarss",
  "map": false,
  "from": "/path/to/src.sss",
  "to": "/path/to/dest.css",
  "plugins": {
    "postcss-plugin": {}
  }
}
```

Reference: https://www.npmjs.com/package/postcss-load-config

#### purifycss-webpack-plugin - v2.0.3
This is a plugin for WebPack that utilizes PurifyCSS to clean your CSS. Its dead simple, but it requires you to be prepared.

1.x vs 2.x found here: https://www.npmjs.com/package/purifycss-webpack-plugin

#### promise - v7.1.1
This is a simple implementation of Promises. It is a super set of ES6 Promises designed to have readable, performant code and to provide just the extensions that are absolutely necessary for using promises today.

For detailed tutorials on its use, see http://www.promisejs.org

N.B. This promise exposes internals via underscore prefixed properties.
If you use these, your code will break with each new release.

#### react-addons-css-transition-group - v15.3.2
This package provides the React CSSTransitionGroup add-on.
See https://facebook.github.io/react/docs/animation.html for more information.

#### react-addons-test-utils - v15.3.2
This package provides the React TestUtils add-on.
See https://facebook.github.io/react/docs/test-utils.html for more information.

#### react-addons-update - v15.3.2
This package provides the React updates add-on.

- Note:
Airbnb has released a testing utility called Enzyme, which makes it easy to assert, manipulate, and traverse your React Components' output. If you're deciding on a unit testing utility to use together with Jest, or any other test runner, it's worth checking out: http://airbnb.io/enzyme/

See https://facebook.github.io/react/docs/update.html for more information.

#### react-dev-utils - v0.2.1
Webpack utilities used by Create React App
```js
new InterpolateHtmlPlugin(
  replacements: {
    [key:string]: string
  }
)
```
This Webpack plugin lets us interpolate custom variables into index.html.
It works in tandem with `HtmlWebpackPlugin` 2.x via its events.

#### react-transform-catch-errors - v1.0.2
A React Transform that catches errors inside `render()` function and renders a React component with an error message instead.

It’s up to you to choose the React component to render an error message. For example, you may use `redbox-react` that imitates React Native “red screen of death”.

#### react-transform-hmr - v1.0.4
A React Transform that enables hot reloading React classes using Hot Module Replacement API.

#### redbox-react - v1.3.2
The red box (aka red screen of death) renders an error in this “pretty” format.

#### rimraf - v2.5.4
The UNIX command `rm -rf` for node.

Install with `npm install rimraf`, or just drop rimraf.js somewhere.

#### sass-lint - v1.9.1
A Node-only Sass linter for both sass and scss syntax!

#### sass-loader - v4.0.2
Sass loader for webpack.

#### style-loader - v0.13.1
style loader module for webpack.

#### transfer-webpack-plugin - v0.1.4
Transfer files to the build directory.

NOTE: This may be similar to copy webpack...

#### url-loader - v0.5.7
- The url loader works like the file loader, but can return a Data Url if the file is smaller than a limit.
- The limit can be specified with a query parameter. (Defaults to no limit)
- If the file is greater than the limit the file-loader is used and all query parameters are passed to it.

#### webpack - v1.13.2
Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.

#### webpack-dev-middleware - v1.8.4
Offers a dev middleware for webpack, which arguments a live bundle to a directory.
**THIS MIDDLEWARE SHOULD ONLY BE USED FOR DEVELOPMENT!**
**DO NOT USE IT IN PRODUCTION!**
It's a simple wrapper middleware for webpack. It serves the files emitted from webpack over a connect server.

It has a few advantages over bundling it as files:

- No files are written to disk, it handle the files in memory
- If files changed in watch mode, the middleware no longer serves the old bundle, but delays requests until the compiling has finished. You don't have to wait before refreshing the page after a file modification.
- I may add some specific optimization in future releases.

#### webpack-hot-middleware - v2.13.0
Webpack hot reloading using only `webpack-dev-middleware`. This allows you to add hot reloading into an existing server without `webpack-dev-server`.

#### webpack-require - v0.0.16
This lets you require() a module in Node that needs to have a specific webpack config. This is useful rendering a component that uses webpack loaders server-side in Node.js.

#### whatwg-fetch - v1.0.0
The global fetch function is an easier way to make web requests and handle responses than using an XMLHttpRequest. This polyfill is written as closely as possible to the standard Fetch specification at https://fetch.spec.whatwg.org.
