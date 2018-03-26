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

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      type: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <br />
        <br />
        <select onChange={this.onChange}>
          <option value="column2d">Column 2D Chart</option>
          <option value="bar2d">Bar 2D Chart</option>
          <option value="line">Line 2D Chart</option>
        </select>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
