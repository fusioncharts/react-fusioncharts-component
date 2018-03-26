import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from 'react-fusioncharts';

PowerCharts(FusionCharts);
OceanTheme(FusionCharts);

const chartConfigs = {
  type: 'spline',
  width: '100%',
  height: '100%',
  dataFormat: 'jsonurl',
  dataSource: '../../data.json',
};

ReactDOM.render(
  <ReactFC {...chartConfigs} />,
  document.getElementById('root'),
);
