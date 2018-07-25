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
  type: 'stackedcolumn2d',
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

  // Handler for export button.
  // Fires an export operation which exports all charts on the page as a PDF.
  exportChart(e) {
    FusionCharts.batchExport({
      exportFormat: 'pdf',
    });
  }

  render() {
    return (
      <div>
        <center><button style={{ padding: '5px 10px', background: '#fbfbfb' }} onClick={this.exportChart}>Export both charts as a single PDF</button></center>
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
