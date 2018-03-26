import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: undefined,
    };

    this.chartConfig = {
      type: 'column2d',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: {/* see data tab */ },
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
