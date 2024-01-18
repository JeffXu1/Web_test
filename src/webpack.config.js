const merge = require('webpack-merge');
const defaultConfig = require('./webpack.config.default');

const merge = require('webpack-merge');
const defaultConfig = require('./webpack.config.default');

module.exports = merge(defaultConfig, {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
});

  
