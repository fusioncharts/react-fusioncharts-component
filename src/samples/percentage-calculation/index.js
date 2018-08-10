import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import data from './data.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import "../../assets/js/fusioncharts.theme.fusion";
import "../../assets/css/fusioncharts.theme.fusion.css";

ReactFC.fcRoot(FusionCharts, Charts);

const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: '80%',
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: 'Hover on the plot to see the percentage along with the label',
    };

    this.showPlotValue = this.showPlotValue.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
  }

  showPlotValue(eventObj, dataObj) {
    const value = ((dataObj.value / this.state.total) * 100).toFixed(2);
    this.setState({
      actualValue: `${dataObj.categoryLabel} is ${value}% of the total`,
    });
  }

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
          {...chartConfigs}
          onRender={this.renderComplete}
          fcEvent-dataplotRollOver={this.showPlotValue}
        />
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.actualValue}</p>
      </div>
    );
  }
}

export default Chart;
