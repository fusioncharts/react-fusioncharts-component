import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chart1Configs = {
  type: 'column2d',
  width: '500',
  height: '300',
  dataFormat: 'json',
  dataSource: {/* see data tab */ },
};
const chart2Configs = {
  type: 'bar2d',
  width: '500',
  height: '500',
  dataFormat: 'json',
  dataSource: {/* see data tab */ },
};

class App extends React.Component {
  constructor() {
    super();
    this.exportChart = this.exportChart.bind(this);
  }

  exportChart(e) {
    FusionCharts.batchExport({
      exportFormat: 'pdf',
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.exportChart}>Export chart as PDF</button>
        <ReactFC {...chart1Configs} />
        <ReactFC {...chart2Configs} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
