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
      actualValue: 'Hover on the plot to see the value along with the label',
    };

    this.showPlotValue = this.showPlotValue.bind(this);
  }

  showPlotValue(eventObj, dataObj) {
    this.setState({
      actualValue: `You’re are currently hovering over ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} fcEvent-dataplotRollOver={this.showPlotValue} />
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.actualValue}</p>
      </div>
    );
  }
}

export default Chart;
