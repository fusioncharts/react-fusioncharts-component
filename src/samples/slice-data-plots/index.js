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
  type: 'Pie2D',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {}
    }

    this.renderComplete = this.renderComplete.bind(this);
    this.sliceMicrosoft = this.sliceMicrosoft.bind(this);
    this.resetChart = this.resetChart.bind(this);
  }

  renderComplete(chart) {
    this.state.chart = chart;
  }

  sliceMicrosoft() {
    this.state.chart.slicePlotItem(1, true);
  }

  resetChart() {
    this.state.chart.slicePlotItem(1, false);
  }

  render () {
    return (
      <div>
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
        <button className='btn btn-custom' onClick={this.sliceMicrosoft}>Slice out Microsoft</button>
        <button className='btn btn-red' onClick={this.resetChart}>Reset</button>
      </div>
    )
  }
}

export default Chart;
