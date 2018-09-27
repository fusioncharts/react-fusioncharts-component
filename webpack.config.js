const path = require('path');

module.exports = [
  {
    entry: path.join(__dirname, 'index.js'),
    output: {
      library: 'ReactFC',
      libraryTarget: 'umd',
      path: path.join(__dirname, 'dist'),
      filename: 'react-fusioncharts.js',
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
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
      {
        fusioncharts: {
          root: 'FusionCharts',
          commonjs2: 'fusioncharts',
          commonjs: 'fusioncharts',
          amd: 'fusioncharts',
        },
      },
    ],
  },
  {
    entry: path.join(__dirname, 'components/DrillDown.js'),
    output: {
      library: 'DrillDown',
      libraryTarget: 'umd',
      path: path.join(__dirname, 'dist'),
      filename: 'drill-down.js',
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ]
    },
    externals:[
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
      },
      {
        fusioncharts: {
          root: 'FusionCharts',
          commonjs2: 'fusioncharts',
          commonjs: 'fusioncharts',
          amd: 'fusioncharts',
        },
      },
      {
        reactfc: {
          root: 'ReactFC',
          commonjs2: 'react-fusioncharts',
          commonjs: 'react-fusioncharts',
          amd: 'react-fusioncharts',
        },
      },
    ],
  },
];
