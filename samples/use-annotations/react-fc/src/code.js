import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import ReactFC from 'react-fusioncharts';

PowerCharts(FusionCharts);

const chartConfigs = {
  type: 'spline',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {/* see data tab */ },
};

ReactDOM.render(
  <ReactFC {...chartConfigs} />,
  document.getElementById('root'),
);
