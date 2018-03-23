const path = require('path');

const config = {
  entry: path.join(__dirname, 'example', 'index.js'),
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
          compact: false,
        },
      },
    ],
  },
};

module.exports = config;
