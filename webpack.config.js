const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'ReactFC.js'),
  output: {
    library: 'ReactFC',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],
};
