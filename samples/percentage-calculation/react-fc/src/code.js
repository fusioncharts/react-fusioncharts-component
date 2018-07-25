import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: 'Hover on the plot to see the value along with the label',
      total: 0,
    };

    this.chartConfig = {
      type: 'column2d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {/* see data tab */ },
    };

    this.showPlotValue = this.showPlotValue.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
  }

  // Event callback handler for 'dataplotRollOver'.
  // Shows the percentage of the hovered plot on the page.
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
