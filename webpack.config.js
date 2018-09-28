const path = require('path');
const _ = require('lodash');

const reactFCBuilderConfig = {
  name: 'reactFC',
  entry: path.join(__dirname, 'index.js'),
  output: {
    library: 'ReactFC',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'react-fusioncharts.js',
    umdNamedDefine: true,
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
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
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
};

const drillDownBuilderConfig = {
  name: 'drillDown',
  entry: path.join(__dirname, 'umd-src/DrillDown.js'),
  output: {
    library: 'DrillDown',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'drill-down.js',
    umdNamedDefine: true,
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
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
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
    {
      reactfc: {
        root: 'ReactFC',
        commonjs2: 'react-fusioncharts',
        commonjs: 'react-fusioncharts',
        amd: 'react-fusioncharts',
      },
    },
  ],
};


const reactFCProd = _.cloneDeep(reactFCBuilderConfig);

const drillFCProd = _.cloneDeep(drillDownBuilderConfig);

reactFCProd.name = 'reactfcProd';
drillFCProd.name = 'drilldownProd';

reactFCProd.output.filename = 'react-fusioncharts.min.js';
drillFCProd.output.filename = 'drill-down.min.js';

reactFCProd.mode = 'production';
drillFCProd.mode = 'production';

module.exports = [
  reactFCBuilderConfig,
  drillDownBuilderConfig,
  reactFCProd,
  drillFCProd
];
