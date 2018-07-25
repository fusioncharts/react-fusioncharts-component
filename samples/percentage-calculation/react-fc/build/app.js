import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import '../../../../../assets/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts);
// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: 'Hover on the plot to see the value along with the label',
      total: 0,
    };

    this.chartConfig = {
      type: 'column2d',
      width: '100%',
      height: '85%',
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
      }
      ,
    };

    this.showPlotValue = this.showPlotValue.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
  }

  // Event callback handler for 'dataplotRollOver'.
  // Shows the value of the hovered plot on the page.
  showPlotValue(eventObj, dataObj) {
    const value = ((dataObj.value / this.state.total) * 100).toFixed(2);
    this.setState({
      actualValue: `${dataObj.categoryLabel} is ${value}% of the total`,
    });
  }

  // Trigerred when chart is rendered.
  // Configures the linked charts.
  renderComplete(chart) {
    const chartData = chart.getJSONData();
    this.setState({
      total: chartData.data.reduce((p, c) => p + Number(c.value), 0),
    });
  }

  render() {
    return (
      <div>
        <ReactFC
          {...this.chartConfig}
          onRender={this.renderComplete}
          fcEvent-dataplotRollOver={this.showPlotValue}
        />
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.actualValue}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
