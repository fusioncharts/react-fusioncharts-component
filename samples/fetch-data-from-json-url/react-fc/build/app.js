import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);
OceanTheme(FusionCharts);

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
