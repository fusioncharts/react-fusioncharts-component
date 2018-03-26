import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import USAMap from 'fusioncharts/maps/fusioncharts.usa';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from 'react-fusioncharts';

Maps(FusionCharts);
USAMap(FusionCharts);
OceanTheme(FusionCharts);

const chartConfigs = {
  type: 'maps/usa',
  width: '100%',
  height: '100%',
  dataFormat: 'jsonurl',
  dataSource: '../../data.json',
};

ReactDOM.render(
  <ReactFC {...chartConfigs} />,
  document.getElementById('root'),
);
