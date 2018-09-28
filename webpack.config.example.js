const path = require('path');

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
};

module.exports = config;
