const path = require('path');
const webpack = require('webpack');

const config = {
  entry: path.join(__dirname, 'example', 'index.js'),
  output: {
    path: path.join(__dirname, 'example', 'dist'),
    filename: 'main.js',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ],
  },
  plugins: [
    // Add ProvidePlugin to polyfill `process` in the browser
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    // Add this alias for completeness
    alias: {
      process: 'process/browser',
    },
  },
};

module.exports = config;
