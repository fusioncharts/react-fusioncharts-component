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
      chart: {},
      currentVal: 'column2d'
    };

    this.renderComplete = this.renderComplete.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
  }

  renderComplete(chart) {
    this.state.chart = chart;
  }

  radioHandler(e) {
    this.state.chart.chartType(e.currentTarget.value);
    this.setState({
      currentVal: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
        <br />
        <center>
          <span>Chose a chart type:</span>
          <div className="change-type">
            <div>
              <input type="radio" value="column2d" onChange={this.radioHandler} checked={this.state.currentVal === 'column2d'} />
              <label>Column 2D Chart</label>
            </div>
            <div>
              <input type="radio" value="bar2d" onChange={this.radioHandler} checked={this.state.currentVal === 'bar2d'} />
              <label>Bar 2D Chart</label>
            </div>
            <div>
              <input type="radio" value="line" onChange={this.radioHandler} checked={this.state.currentVal === 'line'} />
              <label>Line 2D Chart</label>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Chart;
