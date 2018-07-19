import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import '../../../../../assets/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts);
// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: '100%',
  dataFormat: 'jsonurl',
  dataSource: '../../data.json',
};
const alterChart = (chart) => {
  chart.configureLink({
    type: 'pie2d',
    width: '500',
    overlayButton: {
      message: 'close',
      fontColor: '880000',
      bgColor: 'FFEEEE',
      borderColor: '660000',
    },
  }, 0);
};

ReactDOM.render(
  <ReactFC {...chartConfigs} onRender={alterChart} />,
  document.getElementById('root'),
);
