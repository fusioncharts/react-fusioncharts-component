import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import '../../../../../assets/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts);
// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chart1Configs = {
  type: 'column2d',
  width: '500',
  height: '300',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subCaption: 'In MMbbl = One Million barrels',
      xAxisName: 'Country',
      yAxisName: 'Reserves (MMbbl)',
      numberSuffix: 'K',
      theme: 'fusion',
    },
    data: [
      {
        label: 'Venezuela',
        value: '290',
      },
      {
        label: 'Saudi',
        value: '260',
      },
      {
        label: 'Canada',
        value: '180',
      },
      {
        label: 'Iran',
        value: '140',
      },
      {
        label: 'Russia',
        value: '115',
      },
      {
        label: 'UAE',
        value: '100',
      },
      {
        label: 'US',
        value: '30',
      },
      {
        label: 'China',
        value: '30',
      },
    ],
  },
};
const chart2Configs = {
  type: 'bar2d',
  width: '500',
  height: '500',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Lead sources by industry',
      yAxisName: 'Number of Leads',
      alignCaptionWithCanvas: '0',
      plotToolText: '<b>$dataValue</b> leads received',
      theme: 'fusion',
    },

    data: [{
      label: 'Travel & Leisure',
      value: '41',
    },
    {
      label: 'Advertising/Marketing/PR',
      value: '39',
    },
    {
      label: 'Other',
      value: '38',
    },
    {
      label: 'Real Estate',
      value: '32',
    },
    {
      label: 'Communications/Cable/Phone',
      value: '26',
    },
    {
      label: 'Construction',
      value: '25',
    },
    {
      label: 'Entertainment',
      value: '25',
    },
    {
      label: 'Staffing Firm/Full Time/Temporary',
      value: '24',
    },
    {
      label: 'Transportation/Logistics',
      value: '23',
    },
    {
      label: 'Utilities',
      value: '22',
    },
    {
      label: 'Aerospace/Defense Products',
      value: '18',
    },
    {
      label: 'Banking/Finance/Securities',
      value: '16',
    },
    {
      label: 'Consumer Products - Non-Durables',
      value: '15',
    },
    {
      label: 'Distribution',
      value: '13',
    },
    {
      label: 'Education',
      value: '12',
    },
    {
      label: 'Health Products & Services',
      value: '11',
    },
    {
      label: 'Hospitality & Hotels',
      value: '10',
    },
    {
      label: 'Non-Business/Residential',
      value: '6',
    },
    {
      label: 'Pharmaceutical',
      value: '4',
    },
    {
      label: 'Printing & Publishing',
      value: '1',
    },
    {
      label: 'Professional Services',
      value: '1',
    },
    {
      label: 'VAR/ISV',
      value: '1',
    },
    {
      label: 'Warranty Administrators',
      value: '1',
    },
    ],
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.exportChart = this.exportChart.bind(this);
  }

  exportChart(e) {
    FusionCharts.batchExport({
      exportFormat: 'pdf',
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.exportChart}>Export chart as PDF</button>
        <ReactFC {...chart1Configs} />
        <ReactFC {...chart2Configs} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
