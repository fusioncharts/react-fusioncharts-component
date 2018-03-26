import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);
OceanTheme(FusionCharts);

const myDataSource = {
  chart: {
    caption: "Harry's SuperMart",
    subCaption: 'Top 5 stores in last month by revenue',
    numberPrefix: '$',
    theme: 'ocean',
  },
  data: [
    {
      label: 'Bakersfield Central',
      value: '880000',
    },
    {
      label: 'Garden Groove harbour',
      value: '730000',
    },
    {
      label: 'Los Angeles Topanga',
      value: '590000',
    },
    {
      label: 'Compton-Rancho Dom',
      value: '520000',
    },
    {
      label: 'Daly City Serramonte',
      value: '330000',
    },
  ],
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'column2d',
      width: '100%',
      height: '85%',
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
        <button onClick={this.changeBackgroundColor}>Change Background</button>
        <button onClick={this.changeCaptionTextAlignment}>Change Caption Alignment</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
