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
      type: 'column2d',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: {/* see data tab */ },
    };

    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeCaptionTextAlignment = this.changeCaptionTextAlignment.bind(this);
  }

  changeBackgroundColor() {
    const prevDs = Object.assign({}, this.dataSource);
    prevDs.chart.bgColor = '#efefef';
    this.setState({
      dataSource: prevDs,
    });
  }

  changeCaptionTextAlignment() {
    const prevDs = Object.assign({}, this.dataSource);
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
