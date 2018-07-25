import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

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

    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeCaptionTextAlignment = this.changeCaptionTextAlignment.bind(this);
  }

  // Handler for 'Change Background' button.
  // Changes the chart background color.
  changeBackgroundColor() {
    const prevDs = Object.assign({}, this.dataSource);
    prevDs.chart.bgColor = '#efefef';
    this.setState({
      dataSource: prevDs,
    });
  }

  // Handler for 'Change CaptionAlignment' button.
  // Changes the caption alignment to left.
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
