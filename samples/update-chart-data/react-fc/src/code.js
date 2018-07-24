import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTime from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTime);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'column2d',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {/* see data tab */ },
    };

    this.updateData = this.updateData.bind(this);
  }

  // This function generates random number.
  getRandomNumber() {
    var max = 290, min = 30;
    return Math.round(((max - min) * Math.random()) + min);
  }

  // Handler for update button.
  // Randomly updates the values of the chart.
  updateData() {
    const prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[2].value = this.getRandomNumber();
    prevDs.data[3].value = this.getRandomNumber();
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
        <center><button style={{ padding: '5px 10px', background: '#fbfbfb' }} onClick={this.updateData}>Change Chart Data</button></center>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
