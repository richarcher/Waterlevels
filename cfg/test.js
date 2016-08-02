'use strict';

let path = require('path');
let srcPath = path.join(__dirname, '/../src/');

let baseConfig = require('./base');

module.exports = {
  devtool: 'cheap-module-source-map',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-loader',
        include: [
          path.join(__dirname, '/../src')
        ]
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl|mp4|ogg|svg)$/,
        loader: 'null-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [].concat(
          baseConfig.additionalPaths,
          [
            path.join(__dirname, '/../src'),
            path.join(__dirname, '/../test')
          ]
        )
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx', '.json' ],
    alias: {
      actions: srcPath + 'actions/',
      components: srcPath + 'components/',
      sources: srcPath + 'sources/',
      stores: srcPath + 'stores/',
      styles: srcPath + 'styles/',
      config: srcPath + 'config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
    'react/lib/ReactContext': 'window'
  },
  plugins: []
};
