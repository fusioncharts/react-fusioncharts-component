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
  type: 'dragcolumn2d',
  width: '100%',
  height: '85%',
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Drag a column column to see the change',
      initVal: ''
    };

    this.dataplotDragStart = this.dataplotDragStart.bind(this);
    this.dataplotDragEnd = this.dataplotDragEnd.bind(this);
  }

  dataplotDragStart(eventObj, dataObj) {
    this.setState({
      initVal: eventObj.data.startValue
    });
  }

  dataplotDragEnd(eventObj, dataObj) {
    this.setState({
      message: `You have dragged a plot of the ${eventObj.data.datasetName} dataset. Its previous value was ${this.state.initVal} and its current value is ${eventObj.data.endValue}.`
    });
  }

  render () {
    return (
      <div>
        <ReactFC {...chartConfigs} fcEvent-dataplotDragStart={this.dataplotDragStart} fcEvent-dataplotDragEnd={this.dataplotDragEnd}/>
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.message}</p>
      </div>
    )
  }
}

export default Chart;
