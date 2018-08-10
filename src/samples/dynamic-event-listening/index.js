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

var defaultMessage = 'Click on the plot to see the value along with the label';

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: defaultMessage
    }

    this.trackPlotClick = this.trackPlotClick.bind(this);
    this.resetChart = this.resetChart.bind(this);
    this.dataPlotClick = this.dataPlotClick.bind(this);
  }

  trackPlotClick() {
    FusionCharts.addEventListener('dataplotClick', this.dataPlotClick);
  }

  dataPlotClick(eventObj, dataObj) {
    this.setState({
      message: `You have clicked on plot ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`,
    });
  }

  resetChart() {
    FusionCharts.removeEventListener('dataplotClick', this.dataPlotClick);
    this.setState({
      message: defaultMessage
    });
  }

  render () {
    return (
      <div>
        <ReactFC {...chartConfigs} />
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.message}</p>
        <br />
        <button className='btn btn-custom' onClick={this.trackPlotClick}>Track Data Plot Clicks</button>
        <button className='btn btn-red' onClick={this.resetChart}>Reset</button>
      </div>
    )
  }
}

export default Chart;
