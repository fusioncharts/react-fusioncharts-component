import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from '../lib/ReactFC';

Charts(FusionCharts);
OceanTheme(FusionCharts);

const myDataSource = {
  chart: {
    caption: 'Harry\'s SuperMart',
    subCaption: 'Top 5 stores in last month by revenue',
    numberPrefix: '$',
    theme: 'ocean',
  },
  data: [
    {
      label: 'Bakersfield Central',
      value: '880000',
    },
    {
      label: 'Garden Groove harbour',
      value: '730000',
    },
    {
      label: 'Los Angeles Topanga',
      value: '590000',
    },
    {
      label: 'Compton-Rancho Dom',
      value: '520000',
    },
    {
      label: 'Daly City Serramonte',
      value: '330000',
    },
  ],
};

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource,
};

ReactDOM.render(
  <div>
    <ReactFC {...chartConfigs} />
  </div>,
  document.getElementById('root'),
);
