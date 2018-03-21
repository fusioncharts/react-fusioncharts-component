const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './example/index.js',
  output: {
    path: path.join(__dirname, 'example', 'dist'),
    filename: 'main.js',
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};

module.exports = config;
