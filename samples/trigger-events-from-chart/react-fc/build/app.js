import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
// import FusionTime from 'fusioncharts/themes/fusioncharts.theme.fusion';

import '../../../../../assets/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts);
// ReactFC.fcRoot(FusionCharts, Charts, FusionTime);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: 'Hover on the plot to see the value along with the label',
    };

    this.chartConfig = {
      type: 'column2d',
      width: '100%',
      height: '85%',
      dataFormat: 'jsonurl',
      dataSource: '../../data.json',
    };

    this.showPlotValue = this.showPlotValue.bind(this);
  }

  // Event callback handler for 'dataplotRollOver'.
  // Shows the value of the hovered plot on the page.
  showPlotValue(eventObj, dataObj) {
    this.setState({
      actualValue: `You’re are currently hovering over ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.chartConfig} fcEvent-dataplotRollOver={this.showPlotValue} />
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.actualValue}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
