import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);
OceanTheme(FusionCharts);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: undefined,
    };

    this.chartConfig = {
      type: 'column2d',
      width: '100%',
      height: '85%',
      dataFormat: 'jsonurl',
      dataSource: '../../data.json',
      events: {
        dataplotRollOver: (eventObj, dataObj) => {
          this.setState({
            actualValue: dataObj.dataValue,
          });
        },
      },
    };
  }

  render() {
    return (
      <div>
        <ReactFC {...this.chartConfig} />
        <p>Actual Value: {this.state.actualValue}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
