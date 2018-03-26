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

    this.updateData = this.updateData.bind(this);
  }

  updateData() {
    const prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[2].label = 'Art Supply Store';
    prevDs.data[2].value = '420000';
    prevDs.data[3].label = 'P.C. Richard & Son';
    prevDs.data[3].value = '210000';
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
        <button onClick={this.updateData}>Change Chart Data</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
