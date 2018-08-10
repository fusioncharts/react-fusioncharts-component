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
  height: '85%',
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'You will see a notification here after chart completes rendering'
    };

    this.renderComplete = this.renderComplete.bind(this);
  }

  renderComplete() {
    this.setState({
      message: 'Chart has completed rendering'
    });
  }

  render () {
    return (
      <div>
        <ReactFC {...chartConfigs} fcEvent-rendered={this.renderComplete}/>
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.message}</p>
      </div>
    )
  }
}

export default Chart;
