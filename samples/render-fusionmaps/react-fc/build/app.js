import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import ReactFC from 'react-fusioncharts';
// import FusionTime from 'fusioncharts/themes/fusioncharts.theme.fusion';

import '../../../../../assets/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Maps, World);
// ReactFC.fcRoot(FusionCharts, Maps, World, FusionTime);

const chartConfigs = {
  type: 'world',
  width: '100%',
  height: '100%',
  dataFormat: 'jsonurl',
  dataSource: '../../data.json',
};

ReactDOM.render(
  <ReactFC {...chartConfigs} />,
  document.getElementById('root'),
);
