
import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: '600',
  height: '400',
  dataFormat: 'jsonurl',
  dataSource: {/* see data tab */ },
};

// Trigerred when chart is rendered.
// Configures the linked charts.
const alterChart = (chart) => {
  chart.configureLink({
    type: 'pie2d',
    width: '500',
    overlayButton: {
      message: 'Back',
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
