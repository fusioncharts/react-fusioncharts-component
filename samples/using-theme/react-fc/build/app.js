import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

ReactFC.fcRoot(FusionCharts, Charts, FintTheme);

const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: '100%',
  dataFormat: 'jsonurl',
  dataSource: '../../data.json',
};

ReactDOM.render(
  <ReactFC {...chartConfigs} />,
  document.getElementById('root'),
);