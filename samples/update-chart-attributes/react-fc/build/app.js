import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import '../../../../../assets/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts);
// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
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
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'column2d',
      width: '100%',
      height: '80%',
      dataFormat: 'json',
      dataSource: myDataSource,
    };

    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeCaptionTextAlignment = this.changeCaptionTextAlignment.bind(this);
  }

  changeBackgroundColor() {
    const prevDs = Object.assign({}, this.state.dataSource);
    prevDs.chart.bgColor = '#efefef';
    this.setState({
      dataSource: prevDs,
    });
  }

  changeCaptionTextAlignment() {
    const prevDs = Object.assign({}, this.state.dataSource);
    prevDs.chart.captionAlignment = 'left';
    this.setState({
      dataSource: prevDs,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <br />
        <br />
        <center>
          <button style={{ padding: '5px 10px', margin: '0 2px', background: '#fbfbfb' }} onClick={this.changeBackgroundColor}>Change Background</button>
          <button style={{ padding: '5px 10px', margin: '0 2px', background: '#fbfbfb' }} onClick={this.changeCaptionTextAlignment}>Change Caption Alignment</button>
        </center>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
